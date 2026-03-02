import { fetchGraphQL } from '@/utils/fetchGraphQL';
import BlogList from '@/components/blog/BlogList';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Protocol Feed | True Path Digital',
  description: 'Tactical guides, system updates, and growth protocols for the modern business owner.',
};

async function getPosts() {
  const query = `
    query GetPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
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

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="bg-[#050505] min-h-screen flex flex-col selection:bg-primary selection:text-white">
      <Navbar />

      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      <div className="relative z-10 pt-20">
        <BlogList posts={posts} />
      </div>

      <Footer />
    </main>
  );
}
