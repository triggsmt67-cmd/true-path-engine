import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  if (!process.env.WP_USER || !process.env.WP_APP_PASS) {
    return NextResponse.next();
  }

  const basicAuth = `${process.env.WP_USER}:${process.env.WP_APP_PASS}`;

  const pathnameWithoutTrailingSlash = request.nextUrl.pathname.replace(
    /\/$/,
    "",
  );

  const wpUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "https://admin.truepath406.com";

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

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://truepath406.com";
    let newUrl: string;
    try {
      newUrl = new URL(redirect.action_data.url, baseUrl).toString();
    } catch {
      return NextResponse.next();
    }

    // Security: Prevent open redirect — only allow redirects to our own domain
    if (!newUrl.startsWith(baseUrl)) {
      console.warn(`[Middleware] Blocked open redirect to external URL: ${newUrl}`);
      return NextResponse.next();
    }

    return NextResponse.redirect(newUrl, {
      status: redirect.action_code === 301 ? 308 : 307,
    });
  }
}
