import { NextResponse } from 'next/server';
import Parser from 'rss-parser';
import * as cheerio from 'cheerio';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

export async function POST(req: Request) {
    try {
        const { subreddit, keyword, platform, tone } = await req.json();

        if (!subreddit || !keyword) {
            return NextResponse.json(
                { error: 'Subreddit and keyword are required' },
                { status: 400 }
            );
        }

        // 1. Fetch RSS
        const parser = new Parser({
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            },
            requestOptions: {
                rejectUnauthorized: false
            }
        });

        const rssUrl = `https://www.reddit.com/r/${subreddit}/search.rss?q=${encodeURIComponent(keyword)}&sort=top&t=month&restrict_sr=1`;
        console.log(`Fetching RSS from: ${rssUrl}`);

        let feed;
        try {
            feed = await parser.parseURL(rssUrl);
            console.log(`RSS Fetch Success. Items found: ${feed.items?.length || 0}`);
        } catch (e: any) {
            console.error('RSS Fetch Error:', e);
            // Fallback: try fetching with fetch() then parsing string if parser.parseURL fails directly
            try {
                console.log('Attempting fallback fetch...');
                const res = await fetch(rssUrl, {
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
                    }
                });
                const text = await res.text();
                feed = await parser.parseString(text);
                console.log(`Fallback Fetch Success. Items found: ${feed.items?.length || 0}`);
            } catch (fallbackError) {
                console.error('Fallback Fetch Error:', fallbackError);
                return NextResponse.json(
                    { error: `Failed to fetch RSS feed for r/${subreddit}. Reddit might be blocking requests or the subreddit/keyword combo has no results.` },
                    { status: 500 }
                );
            }
        }

        // 2. Process Items (Limit 5)
        // Filter out stickied posts or empty content if possible
        const topPosts = feed.items.filter(item => item.title && item.link).slice(0, 5);

        if (topPosts.length === 0) {
            console.log('No posts found in RSS feed.');
            return NextResponse.json({ results: [] });
        }

        const results = await Promise.all(
            topPosts.map(async (post) => {
                // Clean content
                const $ = cheerio.load(post.content || post.contentSnippet || '');
                const cleanContent = $.text().trim().substring(0, 1000); // Limit length for token efficiency
                const title = post.title || 'Untitled';

                // 3. Generate AI Content
                const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

                const prompt = `
          Analyze the following Reddit post found on r/${subreddit} with the keyword "${keyword}".
          
          Title: ${title}
          Content: ${cleanContent}

          Task:
          1. Create 3 engaging social media drafts for ${platform || 'Twitter'} with a ${tone || 'professional'} tone.
          2. Create 1 detailed image prompt description in the mood/style of a Studio Ghibli film that visually represents the core theme of this post.

          Return strictly valid JSON in the following format:
          {
            "drafts": ["Draft 1...", "Draft 2...", "Draft 3..."],
            "imagePrompt": "A Ghibli-style image of..."
          }
        `;

                try {
                    const result = await model.generateContent(prompt);
                    const response = await result.response;
                    const text = response.text();

                    // Basic JSON extraction (remove markdown code blocks if present)
                    const jsonMatch = text.match(/\{[\s\S]*\}/);
                    const jsonStr = jsonMatch ? jsonMatch[0] : '{}';
                    const generatedData = JSON.parse(jsonStr);

                    // Fallback if parsing fails or structure is wrong
                    const finalDrafts = Array.isArray(generatedData.drafts)
                        ? generatedData.drafts
                        : ['Could not generate drafts.'];
                    const finalImagePrompt = generatedData.imagePrompt || 'Could not generate image prompt.';

                    return {
                        title,
                        link: post.link,
                        originalContent: cleanContent.substring(0, 200) + '...',
                        drafts: finalDrafts,
                        imagePrompt: finalImagePrompt,
                    };
                } catch (err: any) {
                    console.error('AI Generation Error:', err);
                    return {
                        title,
                        link: post.link,
                        error: `Failed to generate content: ${err.message || err}`,
                    };
                }
            })
        );

        return NextResponse.json({ results });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
