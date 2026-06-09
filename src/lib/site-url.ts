export const SITE_URL = (
  process.env.NEXT_PUBLIC_BASE_URL || "https://truepath406.com"
).replace(/\/$/, "");

export function absoluteUrl(path: string = "/") {
  return new URL(path, `${SITE_URL}/`).toString();
}
