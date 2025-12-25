import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  (await draftMode()).disable();

  const url = slug ? `/blog/${slug}` : "/blog/";
  const response = NextResponse.redirect(new URL(url, request.url));
  response.cookies.delete("wp_jwt");
  return response;
}
