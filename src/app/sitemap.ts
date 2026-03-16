import { MetadataRoute } from "next";

export const revalidate = 0;

async function getTotalCounts() {
  const wpUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "https://admin.truepath406.com";
  const response = await fetch(
    `${wpUrl}/wp-json/sitemap/v1/totalpages`,
  );
  const data = await response.json();
  if (!data) return [];
  const propertyNames = Object.keys(data);

  const excludeItems = ["page", "user", "category", "tag"];
  let totalArray = propertyNames
    .filter((name) => !excludeItems.includes(name))
    .map((name) => {
      return { name, total: data[name] };
    });

  return totalArray;
}

async function getPostsUrls({
  page,
  type,
  perPage,
}: {
  page: number;
  type: string;
  perPage: number;
}) {
  const wpUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "https://admin.truepath406.com";
  const response = await fetch(
    `${wpUrl}/wp-json/sitemap/v1/posts?pageNo=${page}&postType=${type}&perPage=${perPage}`,
  );

  const data = await response.json();

  if (!data) return [];

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://truepath406.com";
  const posts = data.map((post: any) => {
    return {
      url: `${baseUrl}${post.url}`,
      lastModified: new Date(post.post_modified_date)
        .toISOString()
        .split("T")[0],
    };
  });

  return posts;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://truepath406.com";
  const sitemap = [];

  const details = await getTotalCounts();

  const postsUrls = await Promise.all(
    details.map(async (detail) => {
      const { name, total } = detail;
      const perPage = 50;
      const totalPages = Math.ceil(total / perPage);

      const urls = await Promise.all(
        Array.from({ length: totalPages }, (_, i) => i + 1).map((page) =>
          getPostsUrls({ page, type: name, perPage }),
        ),
      );

      return urls.flat();
    }),
  );

  const posts = postsUrls.flat();

  sitemap.push(
    {
      url: baseUrl,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/solutions/local-authority`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions/lead-velocity`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    ...posts
  );

  return sitemap;
}
