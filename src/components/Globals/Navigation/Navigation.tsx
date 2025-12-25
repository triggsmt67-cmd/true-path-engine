import Link from "next/link";
import { print } from "graphql/language/printer";

import styles from "./Navigation.module.css";

import { MenuItem, RootQueryToMenuItemConnection } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import gql from "graphql-tag";

async function getData() {
  const menuQuery = gql`
    query MenuQuery {
      menuItems(where: { location: PRIMARY }) {
        nodes {
          uri
          target
          label
        }
      }
    }
  `;

  try {
    const { menuItems } = await fetchGraphQL<{
      menuItems: RootQueryToMenuItemConnection;
    }>(print(menuQuery));

    if (menuItems === null) {
      console.warn("Menu items returned null");
      return { nodes: [] };
    }

    return menuItems;
  } catch (e) {
    console.error("Failed to fetch menu items:", e);
    return { nodes: [] };
  }
}

export default async function Navigation() {
  const menuItems = await getData();

  return (
    <nav
      className={styles.navigation}
      role="navigation"
      itemScope
      itemType="http://schema.org/SiteNavigationElement"
    >
      {menuItems.nodes.map((item: MenuItem, index: number) => {
        if (!item.uri) return null;

        return (
          <Link
            itemProp="url"
            href={item.uri}
            key={index}
            target={item.target || "_self"}
          >
            <span itemProp="name">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
