import { NextResponse } from 'next/server';

const rateLimitMap = new Map<string, { count: number, resetTime: number }>();

// Periodically clean up expired rate limit entries to prevent memory leak
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetTime) rateLimitMap.delete(key);
  }
}, 60000);

export async function POST(request: Request) {
  try {
    // Basic IP-based Rate Limiting (In-memory fallback for serverless)
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    const rateData = rateLimitMap.get(ip) || { count: 0, resetTime: now + 60000 };
    
    if (now > rateData.resetTime) {
      rateData.count = 0;
      rateData.resetTime = now + 60000;
    }
    rateData.count++;
    rateLimitMap.set(ip, rateData);

    if (rateData.count > 10) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    }

    const { businessName, location } = await request.json();

    if (!businessName || !location) {
      return NextResponse.json({ error: 'Business name and location are required.' }, { status: 400 });
    }

    // Input Length Validation
    if (businessName.length > 100 || location.length > 100) {
      return NextResponse.json({ error: 'Input exceeds maximum length of 100 characters.' }, { status: 400 });
    }

    const API_KEY = process.env.GOOGLE_CLOUD_API_KEY;
    if (!API_KEY) {
      console.error('GOOGLE_CLOUD_API_KEY is not configured in the environment.');
      return NextResponse.json({ error: 'Service temporarily unavailable. Configuration missing.' }, { status: 503 });
    }
    
    // Shared timeout controller for both Google API calls — prevents hanging requests
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000); // 10s total budget

    try {
      // Step 1: Text Search to get Place ID
      const query = encodeURIComponent(`${businessName} in ${location}`);
      const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${API_KEY}`;
      
      const searchRes = await fetch(searchUrl, { signal: controller.signal });
      const searchData = await searchRes.json();

      if (!searchData.results || searchData.results.length === 0) {
        return NextResponse.json(
          { error: 'Business not found. Try adding your full city or a more specific name.' },
          { status: 404 }
        );
      }

      const placeId = searchData.results[0].place_id;

      // Step 2: Details Search to get Rating & Reviews Total
      const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,photos&key=${API_KEY}`;
      const detailsRes = await fetch(detailsUrl, { signal: controller.signal });
      const detailsData = await detailsRes.json();

      if (!detailsData.result) {
        return NextResponse.json(
          { error: 'Could not fetch business details.' },
          { status: 404 }
        );
      }

      const { rating, user_ratings_total, photos } = detailsData.result;

      return NextResponse.json({
        placeId,
        rating: rating || 0,
        user_ratings_total: user_ratings_total || 0,
        photoCount: photos ? photos.length : 0,
      });
    } finally {
      clearTimeout(timeout);
    }
  } catch (error) {
    console.error('Error fetching from Google Places:', error);
    if ((error as any).name === 'AbortError') {
      return NextResponse.json({ error: 'Request timed out. Please try again.' }, { status: 504 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

