import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SITE_URL } from "@/lib/site-url";

export default async function proxy(request: NextRequest) {
  const canonicalUrl = new URL(SITE_URL);
  const isTruePathHost = ["truepath406.com", "www.truepath406.com"].includes(
    request.nextUrl.hostname,
  );

  if (isTruePathHost && request.nextUrl.hostname !== canonicalUrl.hostname) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.protocol = canonicalUrl.protocol;
    redirectUrl.host = canonicalUrl.host;
    return NextResponse.redirect(redirectUrl, 308);
  }

  if (!process.env.WP_USER || !process.env.WP_APP_PASS) {
    return NextResponse.next();
  }

  const basicAuth = `${process.env.WP_USER}:${process.env.WP_APP_PASS}`;

  const pathnameWithoutTrailingSlash = request.nextUrl.pathname.replace(
    /\/$/,
    "",
  );

  const wpUrl =
    process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "https://admin.truepath406.com";

  const response = await fetch(
    `${wpUrl}/wp-json/redirection/v1/redirect/?filterBy%5Burl-match%5D=plain&filterBy%5Burl%5D=${pathnameWithoutTrailingSlash}`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(basicAuth).toString("base64")}`,
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  if (data?.items?.length > 0) {
    const redirect = data.items.find(
      (item: any) => item.url === pathnameWithoutTrailingSlash,
    );

    if (!redirect) {
      return NextResponse.next();
    }

    let newUrl: string;
    try {
      newUrl = new URL(redirect.action_data.url, SITE_URL).toString();
    } catch {
      return NextResponse.next();
    }

    // Security: Prevent open redirect — only allow redirects to our own domain
    if (!newUrl.startsWith(SITE_URL)) {
      console.warn(`[Middleware] Blocked open redirect to external URL: ${newUrl}`);
      return NextResponse.next();
    }

    return NextResponse.redirect(newUrl, {
      status: redirect.action_code === 301 ? 308 : 307,
    });
  }
}
