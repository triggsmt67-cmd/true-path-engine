import { fetchGraphQL } from '@/utils/fetchGraphQL';
import BlogList from '@/components/blog/BlogList';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technical Insights | Benchmark Automotive Service',
  description: 'Technical notes, diagnostic frameworks, and field-tested insights on high-performance automotive maintenance.',
  alternates: {
    canonical: 'https://benchmarkauto.com/blog/'
  }
};

interface CategoryNode {
  id: string;
  databaseId: number;
  name: string;
  slug: string;
  description: string | null;
  count: number;
}

interface PostNode {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  uri: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  author?: {
    node: {
      name: string;
    };
  };
  categories?: {
    nodes: {
      name: string;
      slug: string;
    }[];
  };
}

async function getPosts(): Promise<PostNode[]> {
  const query = `
    query GetPosts {
      posts(first: 50, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          title
          excerpt
          date
          slug
          uri
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          author {
            node {
              name
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  `;

  try {
    const data = await fetchGraphQL(query);
    return data?.posts?.nodes || [];
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

async function getCategories(): Promise<CategoryNode[]> {
  const query = `
    query GetCategories {
      categories(first: 50) {
        nodes {
          id
          databaseId
          name
          slug
          description
          count
        }
      }
    }
  `;

  try {
    const data = await fetchGraphQL(query);
    return data?.categories?.nodes || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([getPosts(), getCategories()]);

  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://benchmarkauto.com/blog/#webpage",
        "url": "https://benchmarkauto.com/blog/",
        "name": "Technical Insights | Benchmark Automotive Service",
        "description": "Technical notes, diagnostic frameworks, and field-tested insights on high-performance automotive maintenance.",
        "isPartOf": { "@id": "https://benchmarkauto.com/#website" },
        "breadcrumb": { "@id": "https://benchmarkauto.com/blog/#breadcrumb" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://benchmarkauto.com/blog/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://benchmarkauto.com/" },
          { "@type": "ListItem", "position": 2, "name": "Blog" }
        ]
      }
    ]
  };

  return (
    <main className="bg-bg min-h-screen flex flex-col selection:bg-brand-red selection:text-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Navbar />

      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
        <div className="w-full max-w-[1400px] h-full border-l border-black/[0.03] border-r border-black/[0.03] flex justify-between">
          <div className="h-full w-px bg-black/[0.02]"></div>
          <div className="h-full w-px bg-black/[0.02]"></div>
          <div className="h-full w-px bg-black/[0.02]"></div>
          <div className="h-full w-px bg-black/[0.02]"></div>
          <div className="h-full w-px bg-black/[0.02]"></div>
        </div>
      </div>

      <div className="relative z-10 pt-20">
        <BlogList posts={posts} categories={categories} />
      </div>

      <Footer />
    </main>
  );
}
