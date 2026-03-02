import { fetchGraphQL } from '@/utils/fetchGraphQL';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react';
import { notFound } from 'next/navigation';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { nextSlugToWpSlug } from '@/utils/nextSlugToWpSlug';

// --- Types ---
interface Post {
    title: string;
    content: string;
    date: string;
    excerpt: string;
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
        excerpt
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

    try {
        const data = await fetchGraphQL(query, { id: wpSlug });
        return data?.post || null;
    } catch (e) {
        return null;
    }
}

// --- Metadata ---
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        return { title: 'Post Not Found | True Path Digital' };
    }

    const url = `https://truepath406.com/blog/${slug}`;

    return {
        title: `${post.title} | True Path Digital`,
        description: post.excerpt?.replace(/<[^>]*>?/gm, '').substring(0, 160),
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: `${post.title} | True Path Digital`,
            description: post.excerpt?.replace(/<[^>]*>?/gm, '').substring(0, 160),
            url: url,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author?.node?.name || "Trevor Riggs"],
            images: [
                {
                    url: post.featuredImage?.node?.sourceUrl || "https://admin.truepath406.com/wp-content/uploads/2025/12/Gemini_Generated_Image_gqrc0ygqrc0ygqrc.jpg",
                    alt: post.title,
                }
            ]
        }
    };
}

export default async function SinglePostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    // Estimate reading time (rough)
    const wordCount = post.content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": post.title,
        "description": post.excerpt?.replace(/<[^>]*>?/gm, '').substring(0, 160),
        "image": post.featuredImage?.node?.sourceUrl || "https://admin.truepath406.com/wp-content/uploads/2025/12/Gemini_Generated_Image_gqrc0ygqrc0ygqrc.jpg",
        "datePublished": post.date,
        "author": {
            "@type": "Person",
            "name": post.author?.node?.name || "Trevor Riggs",
            "jobTitle": "Founder & Architect",
            "url": "https://www.linkedin.com/in/trevorriggs"
        },
        "publisher": {
            "@type": "Organization",
            "name": "True Path Digital",
            "logo": {
                "@type": "ImageObject",
                "url": "https://admin.truepath406.com/wp-content/uploads/2025/12/Gemini_Generated_Image_gqrc0ygqrc0ygqrc.jpg"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://truepath406.com/blog/${slug}`
        }
    };

    return (
        <main className="bg-white dark:bg-[#050505] min-h-screen flex flex-col transition-colors duration-500 selection:bg-primary selection:text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <Navbar />
            <ThemeToggle />

            {/* Progress Bar (Visual only for now) */}
            <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-white/5">
                <div className="h-full bg-primary shadow-[0_0_10px_rgba(255,107,0,0.8)] w-0 transition-all duration-300"></div>
            </div>

            {/* Hero Section */}
            <header className="relative w-full min-h-[70vh] flex items-end pb-24 pt-44 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {post.featuredImage?.node?.sourceUrl ? (
                        <>
                            <img
                                src={post.featuredImage.node.sourceUrl}
                                alt={post.featuredImage.node.altText || post.title}
                                className="w-full h-full object-cover scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-[#050505] dark:via-[#050505]/80 dark:to-transparent"></div>
                        </>
                    ) : (
                        <div className="w-full h-full bg-[#111] relative overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#FF6B0015,transparent_70%)]"></div>
                            <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-white dark:from-[#050505] to-transparent"></div>
                        </div>
                    )}
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
                    {/* Breadcrumb */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Intelligence Feed
                    </Link>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {post.categories?.nodes.map((cat) => (
                            <span
                                key={cat.slug}
                                className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-primary/10 border border-primary/20 text-primary backdrop-blur-md"
                            >
                                {cat.name}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-[1.1] mb-10 tracking-tight">
                        {post.title}
                    </h1>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-8 text-sm text-gray-600 dark:text-gray-400 font-medium">
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                <User className="w-4 h-4 text-primary" />
                            </div>
                            <span>{post.author?.node?.name || "Protocol Officer"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>{new Date(post.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-2 border-l border-gray-200 dark:border-white/10 pl-8">
                            <Clock className="w-4 h-4 text-primary" />
                            <span>{readingTime} min read</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Layout Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-[1fr_250px] gap-16 py-20">

                {/* Main Content */}
                <article className="w-full">
                    <div
                        className="prose prose-xl dark:prose-invert max-w-none 
                        prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
                        prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-8
                        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-gray-900 dark:prose-strong:text-white
                        prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-gray-50 dark:prose-blockquote:bg-white/[0.02] 
                        prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic prose-blockquote:text-xl
                        prose-img:rounded-[2rem] prose-img:shadow-2xl prose-img:border prose-img:border-black/5 dark:prose-img:border-white/5
                        prose-ul:list-disc prose-ol:list-decimal"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>

                {/* Sidebar / Tools */}
                <aside className="hidden lg:block">
                    <div className="sticky top-32 space-y-12">
                        {/* Share */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
                                <Share2 className="w-3.5 h-3.5" /> Share Protocol
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                                <button className="p-3 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 hover:border-primary/50 transition-all text-xs font-medium">LinkedIn</button>
                                <button className="p-3 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5 hover:border-primary/50 transition-all text-xs font-medium">X / Twitter</button>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="p-8 rounded-[2rem] bg-gradient-to-br from-primary to-[#ff8533] text-white shadow-2xl shadow-primary/20">
                            <h4 className="text-xl font-bold mb-4">Ready to implement?</h4>
                            <p className="text-sm text-white/80 mb-6 leading-relaxed">Let&apos;s build your custom growth protocol together.</p>
                            <Link href="/" className="inline-block w-full py-3 bg-white text-primary rounded-full text-center text-sm font-bold hover:bg-black hover:text-white transition-all">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </aside>
            </div>

            <Footer />
        </main>
    );
}
