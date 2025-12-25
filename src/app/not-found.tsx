import type { Metadata } from "next";
import { print } from "graphql/language/printer";

import { setSeoData } from "@/utils/seoData";

import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { ContentNode, Page } from "@/gql/graphql";
import { PageQuery } from "@/components/Templates/Page/PageQuery";
import { SeoQuery } from "@/queries/general/SeoQuery";

const notFoundPageWordPressId = 501;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "404 - Not Found",
    description: "Page not found",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/404-not-found/`,
    },
  } as Metadata;
}

export default async function NotFound() {
  try {
    const { page } = await fetchGraphQL<{ page: Page }>(print(PageQuery), {
      id: notFoundPageWordPressId,
    });

    if (!page) {
      return <div><h1>404 - Page Not Found</h1><p>The requested page could not be found.</p></div>;
    }

    return <div dangerouslySetInnerHTML={{ __html: page.content || " " }} />;
  } catch (e) {
    return <div><h1>404 - Page Not Found</h1><p>The requested page could not be found.</p></div>;
  }
}
