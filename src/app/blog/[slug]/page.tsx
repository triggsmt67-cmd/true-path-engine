import { fetchGraphQL } from '@/utils/fetchGraphQL';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Zap } from 'lucide-react';
import { notFound } from 'next/navigation';
import ThemeToggle from '@/components/ui/ThemeToggle';
import ArticleScrollProgress from '@/components/blog/ArticleScrollProgress';
import ArticleShareButtons from '@/components/blog/ArticleShareButtons';
import { nextSlugToWpSlug } from '@/utils/nextSlugToWpSlug';
import { SOCIAL_LINKS } from '@/constants/links';
import { decodeHtmlEntities } from '@/utils/decodeHtmlEntities';

// --- Types ---
interface Post {
    title: string;
    content: string;
    date: string;
    modified: string;
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
            url?: string;
            description?: string;
        };
    };
    categories?: {
        nodes: {
            name: string;
            slug: string;
        }[];
    };
    tags?: {
        nodes: {
            name: string;
            slug: string;
        }[];
    };
    // Future-proofing standard fields if added directly
    quickAnswer?: string;
    audience?: string;
    faqs?: { question: string; answer: string }[];
    // Current AI fields
    aiOverviews?: {
        ai_overviews?: {
            ai_quick_answer?: string;
            ai_takeaways?: string;
            ai_faqs?: string;
            audience?: string;
        } | {
            ai_quick_answer?: string;
            ai_takeaways?: string;
            ai_faqs?: string;
            audience?: string;
        }[];
    };
}

// --- AI Data Parsing Utilities ---
function parseFaqs(text: string): { question: string, answer: string }[] {
    if (!text) return [];
    const blocks = text.split(/\n\s*\n/);
    const faqs: { question: string, answer: string }[] = [];
    blocks.forEach(block => {
        const lines = block.split(/\n/);
        let q = '', a = '';
        lines.forEach(line => {
            const trimmed = line.trim();
            if (trimmed.toLowerCase().startsWith('q:')) q = trimmed.replace(/^q:\s*/i, '');
            if (trimmed.toLowerCase().startsWith('a:')) a = trimmed.replace(/^a:\s*/i, '');
        });
        if (q && a) faqs.push({ question: q, answer: a });
    });
    return faqs;
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
        modified
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
        tags {
          nodes {
            name
            slug
          }
        }
        aiOverviews {
          ai_overviews {
            ai_quick_answer
            ai_takeaways
            ai_faqs
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
    const cleanTitle = decodeHtmlEntities(post.title);
    const cleanDesc = decodeHtmlEntities(post.excerpt?.replace(/<[^>]*>?/gm, '').substring(0, 160) || '');
    const imageUrl = post.featuredImage?.node?.sourceUrl || "https://admin.truepath406.com/wp-content/uploads/2025/12/Gemini_Generated_Image_gqrc0ygqrc0ygqrc.jpg";

    return {
        title: `${cleanTitle} | True Path Digital`,
        description: cleanDesc,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: `${cleanTitle} | True Path Digital`,
            description: cleanDesc,
            url: url,
            type: 'article',
            publishedTime: post.date,
            modifiedTime: post.modified || post.date,
            authors: ["Trevor Riggs"],
            images: [
                {
                    url: imageUrl,
                    alt: post.featuredImage?.node?.altText || cleanTitle,
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: `${cleanTitle} | True Path Digital`,
            description: cleanDesc,
            images: [imageUrl],
        }
    };
}

export default async function SinglePostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    // Date formatting 
    const dateStr = post.date
        ? new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        : 'Unknown Date';
    
    const modifiedDateStr = post.modified 
        ? new Date(post.modified).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        : null;

    // Parse AI Data
    const rawAi = post.aiOverviews?.ai_overviews;
    let aiDataRaw = Array.isArray(rawAi) ? rawAi[0] : rawAi;
    if (Array.isArray(rawAi) && rawAi.length > 1) {
        const titleWords = post.title.toLowerCase().split(' ').filter(w => w.length > 3);
        const match = rawAi.find(item =>
            titleWords.some(word => item.ai_quick_answer?.toLowerCase().includes(word))
        );
        if (match) aiDataRaw = match;
    }

    // Map fields (supporting both native frontmatter/WP fields and AI fallbacks)
    const mappedQuickAnswer = post.quickAnswer || aiDataRaw?.ai_quick_answer;
    const mappedAudience = post.audience || aiDataRaw?.audience;
    const mappedFaqs = post.faqs && post.faqs.length > 0 ? post.faqs : (aiDataRaw?.ai_faqs ? parseFaqs(aiDataRaw.ai_faqs) : []);

    // Clean excerpt for display
    const rawExcerpt = post.excerpt?.replace(/<[^>]*>?/gm, '').replace(/Continue reading.*/gi, '').trim() || '';
    const cleanExcerptText = decodeHtmlEntities(rawExcerpt);
    const cleanTitleText = decodeHtmlEntities(post.title);
    
    const articleUrl = `https://truepath406.com/blog/${slug}`;
    const authorName = "Trevor Riggs";
    const authorUrl = post.author?.node?.url || SOCIAL_LINKS.linkedin;
    const imageUrl = post.featuredImage?.node?.sourceUrl || "https://admin.truepath406.com/wp-content/uploads/2025/12/Gemini_Generated_Image_gqrc0ygqrc0ygqrc.jpg";

    const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://truepath406.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://truepath406.com/blog/"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": cleanTitleText,
                "item": articleUrl
            }
        ]
    };

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": cleanTitleText,
        "description": cleanExcerptText.substring(0, 160),
        "image": imageUrl,
        "datePublished": post.date,
        "dateModified": post.modified || post.date,
        "author": {
            "@type": "Person",
            "name": authorName,
            "url": authorUrl
        },
        "publisher": {
            "@id": "https://truepath406.com/#organization",
            "@type": "Organization",
            "name": "True Path Digital",
            "logo": {
                "@type": "ImageObject",
                "url": "https://admin.truepath406.com/wp-content/uploads/2025/12/Gemini_Generated_Image_gqrc0ygqrc0ygqrc.jpg"
            },
            "sameAs": [
                SOCIAL_LINKS.linkedin
            ]
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": articleUrl
        }
    };

    let faqSchema = null;
    if (mappedFaqs.length > 0) {
        faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": mappedFaqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        };
    }

    return (
        <main 
            className="bg-slate-50 dark:bg-[#121417] min-h-screen flex flex-col transition-colors duration-500 selection:bg-primary selection:text-white"
            data-ai-content="article"
            data-ai-slug={slug}
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
            />
            {faqSchema && (
                 <script
                 type="application/ld+json"
                 dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
             />
            )}
            <Navbar />
            <ThemeToggle />
            <ArticleScrollProgress />

            <section className="pt-32 pb-20 px-6 relative z-10">
                <div className="max-w-[800px] mx-auto">
                    <article className="lg:col-span-8" data-ai-main-content="true">
                        
                        {/* 1. Publish date or updated date */}
                        <header className="mb-12">
                            <div className="flex items-center gap-4 mb-6">
                                <Link
                                    href="/blog"
                                    className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] group transition-colors text-slate-500 hover:text-primary dark:hover:text-white decoration-transparent"
                                >
                                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                                    Back to Blog
                                </Link>
                                <span className="text-slate-300 dark:text-gray-700">|</span>
                                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-gray-400">
                                    <Clock className="w-3.5 h-3.5" /> 
                                    {modifiedDateStr && modifiedDateStr !== dateStr 
                                        ? `Updated ${modifiedDateStr}` 
                                        : `Published ${dateStr}`
                                    }
                                </div>
                            </div>

                            {/* 2. H1 */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05] mb-6 text-slate-900 dark:text-white">
                                {cleanTitleText}
                            </h1>

                            {/* 3. One-sentence subhead / intro summary */}
                            {cleanExcerptText && (
                                <p className="text-xl md:text-2xl font-light leading-relaxed text-slate-600 dark:text-gray-300 border-l-2 pl-6 border-primary/20 dark:border-primary/30">
                                    {cleanExcerptText}
                                </p>
                            )}

                            {/* Optional Featured Image just under the head */}
                            {post.featuredImage?.node?.sourceUrl && (
                                <div className="my-10 relative overflow-hidden rounded-[2rem] border border-slate-200 dark:border-white/10 shadow-xl shadow-slate-200/50 dark:shadow-primary/5">
                                    <img 
                                        src={post.featuredImage.node.sourceUrl} 
                                        alt={post.featuredImage.node.altText || cleanTitleText} 
                                        className="w-full h-auto max-h-[500px] object-cover"
                                    />
                                </div>
                            )}

                            {/* 4. Quick Answer */}
                            {mappedQuickAnswer && (
                                <div className="my-8 p-6 md:p-8 bg-white border border-slate-200 dark:bg-white/[0.02] dark:border-white/10 rounded-2xl shadow-sm">
                                    <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-3 flex items-center gap-2">
                                        <Zap className="w-4 h-4"/> Quick Answer
                                    </h2>
                                    <p className="text-lg text-slate-800 dark:text-gray-200 font-medium leading-relaxed">
                                        {mappedQuickAnswer}
                                    </p>
                                </div>
                            )}

                            {/* 5. Audience */}
                            {mappedAudience && (
                                <div className="mb-10 p-4 bg-slate-100 rounded-xl dark:bg-white/[0.05] text-slate-700 dark:text-gray-400 flex items-start gap-3">
                                    <div className="font-bold whitespace-nowrap text-slate-900 dark:text-white mt-1 text-sm">Who this is for:</div>
                                    <div className="text-base leading-relaxed">{mappedAudience}</div>
                                </div>
                            )}

                            {/* 6. Author Line */}
                            <div className="flex items-center gap-4 mt-8 pb-8 border-b border-slate-200 dark:border-white/10">
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/20 bg-primary/5">
                                    <img
                                        src="https://admin.truepath406.com/wp-content/uploads/2025/12/Gemini_Generated_Image_gqrc0ygqrc0ygqrc.jpg"
                                        className="w-full h-full object-cover object-top"
                                        alt={authorName}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <div className="font-bold text-lg text-slate-900 dark:text-white">
                                        {authorName}
                                    </div>
                                    <div className="text-primary text-[10px] font-bold uppercase tracking-[0.1em]">
                                        Author
                                    </div>
                                </div>
                            </div>
                        </header>

                        {/* 7. Main article body */}
                        <div
                            className="prose prose-lg md:prose-xl max-w-none transition-all duration-300
                            prose-headings:text-slate-900 dark:prose-headings:text-white prose-headings:font-semibold prose-headings:tracking-tight
                            prose-p:text-slate-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-8
                            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                            prose-strong:text-slate-900 dark:prose-strong:text-white
                            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-white/[0.03] dark:prose-blockquote:bg-white/[0.03]
                            prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic prose-blockquote:text-xl
                            prose-img:rounded-[2rem] prose-img:shadow-xl prose-img:border prose-img:border-black/5 dark:prose-img:border-white/5
                            prose-ul:list-disc prose-ol:list-decimal
                            dark:prose-invert"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* 8. FAQ section if FAQs exist */}
                        {mappedFaqs.length > 0 && (
                            <section className="mt-20 pt-16 border-t border-slate-200 dark:border-white/10">
                                <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white tracking-tight">Frequently Asked Questions</h2>
                                <div className="space-y-6">
                                    {mappedFaqs.map((faq, i) => (
                                        <div key={i} className="p-6 md:p-8 rounded-2xl bg-white border border-slate-100 dark:bg-white/[0.02] dark:border-white/5">
                                            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{faq.question}</h3>
                                            <p className="text-lg text-slate-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* 9. Soft CTA section */}
                        <section className="mt-20 p-8 md:p-12 rounded-3xl bg-slate-100 border border-slate-200 dark:bg-white/[0.03] dark:border-white/5 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                            <div className="relative z-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="max-w-xl">
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                                        Want help finding the leak?
                                    </h3>
                                    <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
                                        I’ll look at your lead handling, follow-up, pricing logic, and website path and show you where demand or margin is slipping out.
                                    </p>
                                </div>
                                <Link 
                                    href="/contact"
                                    className="px-8 py-4 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold transition-all hover:scale-105 shadow-xl decoration-transparent whitespace-nowrap"
                                >
                                    Let's Talk
                                </Link>
                            </div>
                        </section>

                        {/* 10. Author bio block */}
                        <section className="mt-20 p-8 rounded-3xl border bg-white border-slate-200 shadow-sm dark:bg-[#121417] dark:border-white/10 relative overflow-hidden">
                            <h4 className="text-[10px] font-bold tracking-[0.25em] uppercase mb-8 text-slate-400 dark:text-gray-500">About the Author</h4>
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
                                <div className="w-16 h-16 shrink-0 rounded-full overflow-hidden border p-0.5 border-primary/20 bg-primary/5 dark:border-primary/40 dark:bg-primary/10">
                                    <img
                                        src="https://admin.truepath406.com/wp-content/uploads/2025/12/Gemini_Generated_Image_gqrc0ygqrc0ygqrc.jpg"
                                        className="w-full h-full object-cover object-top rounded-full"
                                        alt={authorName}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <div className="font-bold text-2xl tracking-tight text-slate-900 dark:text-white mb-1">
                                        {authorName}
                                    </div>
                                    <div className="text-primary text-xs font-bold uppercase tracking-[0.15em] mb-4">Founder & Architect</div>
                                    <p className="text-base leading-relaxed mb-6 font-light text-slate-600 dark:text-secondary/80">
                                        {post.author?.node?.description || '25+ years engineering high-conversion sales systems and strategic digital infrastructure for high-growth firms.'}
                                    </p>
                                    <a
                                        href={authorUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-slate-200 text-slate-600 font-medium text-sm transition-all hover:bg-slate-50 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5 decoration-transparent"
                                    >
                                        Connect on LinkedIn
                                    </a>
                                </div>
                            </div>
                        </section>

                        {/* Bottom Bar: Share */}
                        <div className="mt-12 pt-8 border-t flex items-center justify-center border-slate-200 dark:border-white/10">
                            <ArticleShareButtons title={cleanTitleText} slug={slug} />
                        </div>
                    </article>
                </div>
            </section>

            <Footer />
        </main>
    );
}
