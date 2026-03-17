import { draftMode, cookies } from "next/headers";

export async function fetchGraphQL<T = any>(
  query: string,
  variables?: { [key: string]: any },
  headers?: { [key: string]: string },
): Promise<T> {
  const { isEnabled: preview } = await draftMode();

  try {
    let authHeader = "";
    if (preview) {
      const auth = (await cookies()).get("wp_jwt")?.value;
      if (auth) {
        authHeader = `Bearer ${auth}`;
      }
    }

    const body = JSON.stringify({
      query,
      variables: {
        preview,
        ...variables,
      },
    });

    const wpUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "https://admin.truepath406.com";

    const response = await fetch(
      `${wpUrl}/graphql`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(authHeader && { Authorization: authHeader }),
          ...headers,
        },
        body,
        // If in preview, don't cache at all. 
        // Otherwise, revalidate every 600 seconds (10 minutes) as a safety net.
        cache: preview ? "no-cache" : undefined,
        next: {
          revalidate: preview ? 0 : 600,
          tags: ["wordpress"],
        },
      },
    );

    if (!response.ok) {
      console.error("Response Status:", response);
      throw new Error(response.statusText);
    }

    const data = await response.json();

    if (data.errors) {
      console.error("GraphQL Errors:", data.errors);
      console.error("Failed Query:", query);
      console.error("GraphQL Errors:", data.errors);
      console.error("Failed Query:", query);
      throw new Error(JSON.stringify(data.errors));
    }

    return data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
