import { fetchGraphQL } from '@/utils/fetchGraphQL';
import BlogList from '@/components/blog/BlogList';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | True Path Digital',
  description: 'Insights, strategies, and updates from True Path Digital.',
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

  const data = await fetchGraphQL(query);
  return data?.posts?.nodes || [];
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="bg-[#121212] min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-20"> {/* Add padding for fixed navbar */}
        <BlogList posts={posts} />
      </div>
      <Footer />
    </main>
  );
}
