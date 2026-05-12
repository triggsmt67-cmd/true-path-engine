import { fetchGraphQL } from '@/utils/fetchGraphQL';

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  const query = `
    query GetPostsForRSS {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          title
          excerpt
          date
          slug
          author {
            node {
              name
            }
          }
        }
      }
    }
  `;

  try {
    const data = await fetchGraphQL(query);
    const posts = data?.posts?.nodes || [];

    const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://truepath406.com';
    const feedUrl = `${siteUrl}/feed.xml`;

    const rssItems = posts
      .map((post: any) => {
        // Strip HTML from excerpt
        const cleanExcerpt = (post.excerpt || '').replace(/<[^>]*>?/gm, '');
        const cleanTitle = (post.title || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const cleanDescription = cleanExcerpt.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        
        return `
          <item>
            <title>${cleanTitle}</title>
            <link>${siteUrl}/blog/${post.slug}/</link>
            <guid>${siteUrl}/blog/${post.slug}/</guid>
            <pubDate>${new Date(post.date).toUTCString()}</pubDate>
            <description>${cleanDescription}</description>
            <author>${post.author?.node?.name || 'True Path Digital'}</author>
          </item>
        `;
      })
      .join('');

    const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
      <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
        <channel>
          <title>True Path Digital | Insights</title>
          <link>${siteUrl}</link>
          <description>Clear thinking for when the right move isn't obvious. Notes, frameworks, and field-tested insights on making better marketing decisions.</description>
          <language>en-us</language>
          <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
          <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
          ${rssItems}
        </channel>
      </rss>
    `;

    return new Response(rssFeed, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    return new Response('Error generating feed', { status: 500 });
  }
}
