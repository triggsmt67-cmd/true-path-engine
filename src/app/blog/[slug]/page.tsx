import { fetchGraphQL } from '@/utils/fetchGraphQL';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { notFound } from 'next/navigation';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { nextSlugToWpSlug } from '@/utils/nextSlugToWpSlug';

// --- Types ---
interface Post {
    title: string;
    content: string;
    date: string;
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

// --- Data Fetching ---
async function getPost(slug: string): Promise<Post | null> {
    const wpSlug = nextSlugToWpSlug(slug);
    const query = `
    query GetPost($id: ID!) {
      post(id: $id, idType: SLUG) {
        title
        content
        date
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
  `;

    const data = await fetchGraphQL(query, { id: wpSlug });
    return data?.post || null;
}

// --- Metadata ---
export async function generateMetadata({ params }: { params: Promise<{ slug: string | string[] }> }): Promise<Metadata> {
    try {
        const { slug } = await params;
        const slugString = Array.isArray(slug) ? slug[slug.length - 1] : slug;
        const post = await getPost(slugString);

        if (!post || !post.title) {
            return {
                title: 'Post | True Path Digital',
            };
        }

        return {
            title: `${post.title} | True Path Digital`,
        };
    } catch (error) {
        console.error("Error generating metadata:", error);
        return {
            title: 'Error | True Path Digital',
        };
    }
}

// --- Page Component ---
export default async function SinglePostPage({ params }: { params: Promise<{ slug: string | string[] }> }) {
    const { slug } = await params;
    const slugString = Array.isArray(slug) ? slug[0] : slug;
    let post: Post | null = null;
    let errorMsg = "";

    try {
        post = await getPost(slugString);
    } catch (e: any) {
        errorMsg = e.message || JSON.stringify(e);
    }

    if (errorMsg) {
        return (
            <main className="bg-white dark:bg-[#121212] min-h-screen flex flex-col items-center justify-center text-gray-900 dark:text-white p-10 transition-colors duration-300">
                <h1 className="text-2xl font-bold text-red-500 mb-4">Error Loading Post</h1>
                <pre className="bg-gray-100 dark:bg-black/50 p-4 rounded text-sm text-gray-700 dark:text-gray-400 whitespace-pre-wrap max-w-4xl">
                    {errorMsg}
                </pre>
                <Link href="/blog" className="mt-8 text-primary hover:underline">Back to Blog</Link>
            </main>
        );
    }

    if (!post) {
        notFound();
    }

    return (
        <main className="bg-white dark:bg-[#121212] min-h-screen flex flex-col text-gray-700 dark:text-gray-300 transition-colors duration-300">
            <Navbar />
            <ThemeToggle />

            {/* Hero Section */}
            <section className="relative w-full min-h-[60vh] flex items-end pb-20 pt-40 overflow-hidden">

                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    {post.featuredImage?.node?.sourceUrl ? (
                        <img
                            src={post.featuredImage.node.sourceUrl}
                            alt={post.featuredImage.node.altText || post.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        // Fallback Abstract Pattern
                        <div className="w-full h-full bg-gray-100 dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300">
                            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full opacity-30"></div>
                            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full opacity-20"></div>
                            <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
                            </svg>
                        </div>
                    )}

                    {/* Heavy Gradient Overlay - Adjusted for Light Mode */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent dark:from-[#121212] dark:via-[#121212]/50 dark:to-transparent transition-colors duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent dark:from-[#121212]/20 dark:to-transparent transition-colors duration-300"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">

                    {/* Back Button */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 dark:bg-black/30 backdrop-blur-md border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white hover:bg-white dark:hover:bg-white/10 hover:border-primary/50 dark:hover:border-primary/50 transition-all mb-10 group font-medium shadow-sm"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform text-primary" />
                        Back to Intelligence
                    </Link>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {post.categories?.nodes.map((cat) => (
                            <span
                                key={cat.slug}
                                className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-black/5 dark:bg-white/[0.05] border border-black/10 dark:border-white/10 backdrop-blur-md text-primary transition-colors duration-300"
                            >
                                {cat.name}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-8 tracking-tight transition-colors duration-300">
                        {post.title}
                    </h1>

                    {/* Meta Data */}
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                        <div className="flex items-center gap-2 bg-black/5 dark:bg-white/[0.03] px-3 py-1.5 rounded-full border border-black/10 dark:border-white/5 backdrop-blur-sm transition-colors duration-300">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        {post.author?.node?.name && (
                            <div className="flex items-center gap-2 bg-black/5 dark:bg-white/[0.03] px-3 py-1.5 rounded-full border border-black/10 dark:border-white/5 backdrop-blur-sm transition-colors duration-300">
                                <User className="w-4 h-4 text-primary" />
                                <span>{post.author.node.name}</span>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <article className="relative z-10 max-w-3xl mx-auto px-6 pb-24 w-full">
                <div
                    className="prose prose-lg dark:prose-invert max-w-none transition-colors duration-300
                prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:font-semibold prose-headings:tracking-tight
                prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-gray-900 dark:prose-strong:text-white
                prose-blockquote:border-l-primary prose-blockquote:bg-gray-100 dark:prose-blockquote:bg-white/[0.02] prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300
                prose-code:text-primary prose-code:bg-gray-100 dark:prose-code:bg-white/[0.05] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                prose-img:rounded-2xl prose-img:border prose-img:border-black/10 dark:prose-img:border-white/10"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>

            <Footer />
        </main>
    );
}
