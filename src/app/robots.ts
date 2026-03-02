import { MetadataRoute } from "next";

export const revalidate = 0;

export default async function robots(): Promise<MetadataRoute.Robots> {
  const wpUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "https://admin.truepath406.com";
  const res = await fetch(
    `${wpUrl}/robots.txt`,
    { cache: "no-store" },
  );

  const text = await res.text();

  const lines = text.split("\n");

  const userAgent = lines
    .find((line) => line.startsWith("User-agent: "))
    ?.replace("User-agent: ", "");
  const allow = lines
    .find((line) => line.startsWith("Allow: "))
    ?.replace("Allow: ", "");
  const disallow = lines
    .find((line) => line.startsWith("Disallow: "))
    ?.replace("Disallow: ", "");
  const sitemap = lines
    .find((line) => line.startsWith("Sitemap: "))
    ?.replace("Sitemap: ", "");

  const robots: MetadataRoute.Robots = {
    rules: {
      userAgent,
      allow,
      disallow,
    },
    sitemap,
  };

  return robots;
}
