export const SITE_URL = (
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.truepath406.com"
).replace(/\/$/, "");

export function absoluteUrl(path: string = "/") {
  return new URL(path, `${SITE_URL}/`).toString();
}
