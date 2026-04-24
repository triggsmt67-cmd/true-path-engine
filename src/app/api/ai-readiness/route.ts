import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';

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

    if (rateData.count > 50) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    }

    const { websiteUrl } = await request.json();

    if (!websiteUrl) {
      return NextResponse.json({ error: 'Website URL is required.' }, { status: 400 });
    }

    // SSRF URL Validation
    let formattedUrl = websiteUrl;
    try {
      if (!formattedUrl.startsWith('http')) {
        formattedUrl = `https://${formattedUrl}`;
      }
      const parsedUrl = new URL(formattedUrl);
      const isPrivate = /^(localhost|127\.|192\.168\.|10\.|169\.254\.)/.test(parsedUrl.hostname);
      if (isPrivate || !['http:', 'https:'].includes(parsedUrl.protocol)) {
        return NextResponse.json({ error: 'Invalid URL provided.' }, { status: 400 });
      }
    } catch {
      return NextResponse.json({ error: 'Invalid URL format.' }, { status: 400 });
    }

    // AbortController for fetch timeout (10 seconds)
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    let html = '';
    try {
      const response = await fetch(formattedUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; TruePathEngine/1.0; +https://truepath406.com)',
        },
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch website. Status: ${response.status}`);
      }

      html = await response.text();
    } catch (err: any) {
      if (err.name === 'AbortError') {
        return NextResponse.json({ error: 'Website took too long to respond.' }, { status: 504 });
      }
      return NextResponse.json({ error: 'Failed to access website to scan for AI data.' }, { status: 400 });
    } finally {
      clearTimeout(timeout);
    }

    // Use Cheerio to parse HTML and find structured data
    const $ = cheerio.load(html);
    let hasLocalBusinessSchema = false;
    let hasAnySchema = false;

    // Scan all application/ld+json scripts
    $('script[type="application/ld+json"]').each((_, el) => {
      try {
        const jsonContent = $(el).html();
        if (jsonContent) {
          hasAnySchema = true;
          // Clean the JSON string if it has trailing commas or invalid formatting often found in the wild
          const parsed = JSON.parse(jsonContent);
          
          // Function to recursively check for LocalBusiness or similar types
          const checkType = (obj: any): boolean => {
            if (!obj) return false;
            
            const schemaTypes = [
              'LocalBusiness', 'Plumber', 'HVACBusiness', 'RoofingContractor', 'Electrician',
              'Organization', 'ProfessionalService', 'HomeAndConstructionBusiness', 'GeneralContractor'
            ];
            
            if (obj['@type']) {
              const types = Array.isArray(obj['@type']) ? obj['@type'] : [obj['@type']];
              if (types.some((t: string) => schemaTypes.includes(t))) {
                return true;
              }
            }
            
            // Check graph nodes if using Yoast SEO style graph
            if (obj['@graph'] && Array.isArray(obj['@graph'])) {
              return obj['@graph'].some((node: any) => checkType(node));
            }
            
            return false;
          };

          if (checkType(parsed)) {
            hasLocalBusinessSchema = true;
          }
        }
      } catch (e) {
        // Silently catch JSON parse errors from invalid schema markup
        console.error('Invalid Schema JSON:', e);
      }
    });

    return NextResponse.json({
      success: true,
      hasSchema: hasAnySchema,
      hasLocalBusinessSchema: hasLocalBusinessSchema,
    });

  } catch (error) {
    console.error('AI Readiness Scan Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
