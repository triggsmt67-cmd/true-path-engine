import { NextRequest, NextResponse } from "next/server";
import { print } from "graphql/language/printer";
import { ContentNode } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { draftMode } from "next/headers";
import gql from "graphql-tag";

type LoginPayload = {
  authToken?: string;
};

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const id = searchParams.get("id");

  if (secret !== process.env.HEADLESS_SECRET || !id) {
    return new Response("Invalid token", { status: 401 });
  }

  const mutation = gql`
    mutation PreviewPost($id: ID!) {
      login(
        input: {
          clientMutationId: "preview"
          username: "${process.env.WORDPRESS_AUTH_USER}"
          password: "${process.env.WORDPRESS_AUTH_PASSWORD}"
        }
      ) {
        authToken
      }
      post(id: $id, idType: DATABASE_ID) {
        slug
        databaseId
      }
    }
  `;

  const data = await fetchGraphQL(print(mutation), { id });
  const login = data.login as LoginPayload;
  const post = data.post as ContentNode;

  if (!post) {
    return new Response("Post not found", { status: 404 });
  }

  if (login.authToken) {
    (await draftMode()).enable();
    const response = NextResponse.redirect(
      new URL(`/blog/${post.slug}`, request.url),
    );
    response.cookies.set("wp_jwt", login.authToken, {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
    return response;
  }

  return new Response("Authentication failed", { status: 401 });
}
