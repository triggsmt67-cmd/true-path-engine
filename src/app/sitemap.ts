import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";

export const revalidate = 3600;

const POSTS_QUERY = `
  query SitemapPosts($first: Int!, $after: String) {
    posts(
      first: $first
      after: $after
      where: { orderby: { field: DATE, order: DESC } }
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        slug
        date
        modified
      }
    }
  }
`;

async function getPostEntries() {
  const wpUrl =
    process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "https://admin.truepath406.com";
  const posts: MetadataRoute.Sitemap = [];
  let after: string | null = null;
  let hasNextPage = true;

  while (hasNextPage) {
    const response = await fetch(`${wpUrl}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: POSTS_QUERY,
        variables: {
          first: 100,
          after,
        },
      }),
      next: {
        revalidate,
        tags: ["wordpress"],
      },
    });

    if (!response.ok) {
      throw new Error(`Sitemap GraphQL request failed with ${response.status}`);
    }

    const payload = await response.json();
    if (payload.errors) {
      throw new Error(`Sitemap GraphQL errors: ${JSON.stringify(payload.errors)}`);
    }

    const connection = payload?.data?.posts;
    const nodes = connection?.nodes || [];

    posts.push(
      ...nodes.map((post: { slug: string; modified?: string; date?: string }) => ({
        url: `${SITE_URL}/blog/${post.slug}/`,
        lastModified: post.modified || post.date || new Date().toISOString(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      })),
    );

    hasNextPage = Boolean(connection?.pageInfo?.hasNextPage);
    after = connection?.pageInfo?.endCursor || null;
  }

  return posts;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let posts: MetadataRoute.Sitemap = [];

  try {
    posts = await getPostEntries();
  } catch (error) {
    console.error("Sitemap: failed to fetch blog posts from GraphQL", error);
  }

  const now = new Date().toISOString();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/solutions/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/trust-calculator/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/solutions/local-authority/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/solutions/lead-velocity/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/solutions/review-system/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/solutions/website-conversion/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/solutions/demand-audit/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/solutions/estimate-follow-up/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/solutions/local-services-ads/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...posts,
  ];
}
