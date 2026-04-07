import { NextResponse } from 'next/server';

export const maxDuration = 60; // Allow up to 60 seconds on Vercel for slow PageSpeed Insights runs

const rateLimitMap = new Map<string, { count: number, resetTime: number }>();

export async function POST(request: Request) {
  try {
    // Basic IP-based Rate Limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    const rateData = rateLimitMap.get(ip) || { count: 0, resetTime: now + 60000 };
    
    if (now > rateData.resetTime) {
      rateData.count = 0;
      rateData.resetTime = now + 60000;
    }
    rateData.count++;
    rateLimitMap.set(ip, rateData);

    if (rateData.count > 5) {
      return NextResponse.json({ error: 'Too many speed test requests. Please try again later.' }, { status: 429 });
    }

    const { websiteUrl } = await request.json();

    if (!websiteUrl) {
      return NextResponse.json({ error: 'Website URL is required.' }, { status: 400 });
    }

    // SSRF URL Validation
    try {
      const parsedUrl = new URL(websiteUrl);
      const isPrivate = /^(localhost|127\.|192\.168\.|10\.|169\.254\.)/.test(parsedUrl.hostname);
      if (isPrivate || !['http:', 'https:'].includes(parsedUrl.protocol)) {
        return NextResponse.json({ error: 'Invalid URL provided.' }, { status: 400 });
      }
    } catch {
      return NextResponse.json({ error: 'Invalid URL format.' }, { status: 400 });
    }

    const API_KEY = process.env.GOOGLE_CLOUD_API_KEY;
    if (!API_KEY) {
      console.error('GOOGLE_CLOUD_API_KEY is not configured in the environment.');
      return NextResponse.json({ error: 'Service temporarily unavailable. Configuration missing.' }, { status: 503 });
    }

    const url = encodeURIComponent(websiteUrl);
    const apiEndpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&strategy=mobile&key=${API_KEY}`;

    // Add fetch timeout protection (Extended to 55s for extremely slow PageSpeed runs)
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 55000); // 55s timeout
    
    let res;
    try {
      res = await fetch(apiEndpoint, { signal: controller.signal });
    } finally {
      clearTimeout(timeout);
    }
    const data = await res.json();

    if (data.error) {
      return NextResponse.json({ error: data.error.message || 'PageSpeed API Error' }, { status: 400 });
    }

    const performanceScore = data.lighthouseResult?.categories?.performance?.score;

    if (performanceScore === undefined) {
      return NextResponse.json({ error: 'Could not extract performance score.' }, { status: 500 });
    }

    return NextResponse.json({
      score: Math.round(performanceScore * 100)
    });

  } catch (error) {
    console.error('Mobile Speed Test Error:', error);
    if ((error as any).name === 'AbortError') {
      return NextResponse.json({ error: 'Diagnostic took too long and timed out.' }, { status: 504 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
