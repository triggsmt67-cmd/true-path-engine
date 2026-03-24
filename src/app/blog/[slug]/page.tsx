import { fetchGraphQL } from '@/utils/fetchGraphQL';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, Zap } from 'lucide-react';
import { notFound } from 'next/navigation';
import ThemeToggle from '@/components/ui/ThemeToggle';
import AIScanZone from '@/components/blog/AIScanZone';
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
    aiOverviews?: {
        ai_overviews?: {
            ai_quick_answer?: string;
            ai_takeaways?: string;
            ai_faqs?: string;
        } | {
            ai_quick_answer?: string;
            ai_takeaways?: string;
            ai_faqs?: string;
        }[];
    };
}

// --- AI Data Parsing Utilities ---
function parseTakeaways(text: string): string[] {
    if (!text) return [];
    return text
        .split(/\r?\n/)
        .map(line => line.replace(/^[•\-\s*]+/, '').trim())
        .filter(line => line.length > 0);
}

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

    // Estimate reading time
    const wordCount = post.content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    // Date formatting to match Vite version
    const dateStr = post.date
        ? new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        : 'Unknown Date';

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

    const aiTakeaways = aiDataRaw?.ai_takeaways ? parseTakeaways(aiDataRaw.ai_takeaways) : [];
    const aiFaqs = aiDataRaw?.ai_faqs ? parseFaqs(aiDataRaw.ai_faqs) : [];

    // Clean excerpt for display
    const rawExcerpt = post.excerpt?.replace(/<[^>]*>?/gm, '').replace(/Continue reading.*/gi, '').trim() || '';
    const cleanExcerptText = decodeHtmlEntities(rawExcerpt);
    const cleanTitleText = decodeHtmlEntities(post.title);

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
                "name": "Insights",
                "item": "https://truepath406.com/blog/"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": cleanTitleText,
                "item": `https://truepath406.com/blog/${slug}`
            }
        ]
    };

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": cleanTitleText,
        "description": cleanExcerptText.substring(0, 160),
        "image": post.featuredImage?.node?.sourceUrl || "https://admin.truepath406.com/wp-content/uploads/2025/12/Gemini_Generated_Image_gqrc0ygqrc0ygqrc.jpg",
        "datePublished": post.date,
        "author": {
            "@type": "Person",
            "name": post.author?.node?.name || "Trevor Riggs",
            "jobTitle": "Founder & Architect",
            "url": SOCIAL_LINKS.linkedin
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
            "@id": `https://truepath406.com/blog/${slug}`
        },
        "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": [".ai-summary-zone"]
        },
        "about": [
            { "@type": "Thing", "name": "Marketing Strategy" },
            { "@type": "Thing", "name": "Artificial Intelligence" },
            { "@type": "Thing", "name": "Conversion Rate Optimization" }
        ]
    };

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
            <Navbar />
            <ThemeToggle />
            <ArticleScrollProgress />

            {/* Two-Column Hero — Matching Vite Design */}
            <section className="relative pt-32 pb-16 md:pb-24 px-6 overflow-hidden">
                {/* Subtle background gradient */}
                <div className="absolute top-0 left-0 w-full h-[600px] opacity-20 pointer-events-none bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10 dark:to-transparent" />

                <div className="max-w-[1400px] mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Left Column: Article Detail */}
                        <div>
                            <Link
                                href="/blog"
                                className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] mb-10 group transition-colors text-primary hover:text-slate-900 dark:hover:text-white decoration-transparent"
                            >
                                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                                Return to Intelligence Vault
                            </Link>

                            <div className="flex items-center gap-4 mb-8">
                                {post.categories?.nodes.map((cat) => (
                                    <span
                                        key={cat.slug}
                                        className="px-3 py-1 rounded-full border text-[10px] font-bold tracking-widest uppercase bg-primary/5 border-primary/10 text-primary dark:bg-primary/10 dark:border-primary/20"
                                    >
                                        {cat.name}
                                    </span>
                                ))}
                                <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-slate-400 dark:text-secondary/40">
                                    <Clock className="w-3 h-3" /> {dateStr}
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05] mb-10 text-slate-900 dark:text-white">
                                {cleanTitleText}
                            </h1>

                            {cleanExcerptText && (
                                <p className="text-xl md:text-2xl font-light leading-relaxed border-l-2 pl-8 text-slate-600 border-primary/20 dark:text-secondary dark:border-primary/30">
                                    {cleanExcerptText}
                                </p>
                            )}
                        </div>

                        {/* Right Column: Featured Image */}
                        <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[550px]">
                            <div className="absolute inset-0 rounded-[2rem] overflow-hidden border shadow-2xl border-slate-200 shadow-slate-200/50 dark:border-white/10 dark:shadow-primary/5">
                                {post.featuredImage?.node?.sourceUrl ? (
                                    <img
                                        src={post.featuredImage.node.sourceUrl}
                                        alt={post.featuredImage.node.altText || post.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                                        <div className="w-20 h-20 rounded-full bg-primary/20 blur-2xl" />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                            </div>

                            {/* Decorative blurs */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 blur-3xl rounded-full" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 blur-3xl rounded-full" />
                        </div>
                    </div>

                    {/* AI Overview Zone */}
                    <div className="mt-16 lg:mt-20 max-w-5xl">
                        <AIScanZone
                            aiQuickAnswer={aiDataRaw?.ai_quick_answer}
                            aiTakeaways={aiTakeaways}
                            aiFaqs={aiFaqs}
                        />
                    </div>
                </div>
            </section>

            {/* Main Content + Author Sidebar */}
            <section className="pt-6 pb-20 px-6 relative z-10">
                <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16">
                    {/* Article Content */}
                    <article className="lg:col-span-8" data-ai-main-content="true">
                        <div
                            className="prose prose-lg md:prose-xl max-w-none transition-all duration-300
                            prose-headings:text-slate-900 dark:prose-headings:text-white prose-headings:font-semibold prose-headings:tracking-tight
                            prose-p:text-slate-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-8
                            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                            prose-strong:text-slate-900 dark:prose-strong:text-white
                            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-white/[0.03] dark:prose-blockquote:bg-white/[0.03]
                            prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic prose-blockquote:text-xl
                            prose-img:rounded-[2rem] prose-img:shadow-2xl prose-img:border prose-img:border-black/5 dark:prose-img:border-white/5
                            prose-ul:list-disc prose-ol:list-decimal
                            dark:prose-invert dark:prose-orange"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Strategic CTA: Logic Loop */}
                        <div className="mt-16 p-8 md:p-12 rounded-[2.5rem] bg-primary relative overflow-hidden group">
                            <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                                <div className="max-w-xl text-center md:text-left">
                                    <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                                        <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white">
                                            <Zap className="w-4 h-4" />
                                        </div>
                                        <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">Infrastructure Context</span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">
                                        This strategy is a component of our Growth Infrastructure.
                                    </h3>
                                    <p className="text-white/80 font-light leading-relaxed">
                                        Implementation requires more than just reading. See how this logic fits into our core Montana frameworks.
                                    </p>
                                </div>
                                <Link 
                                    href="/solutions"
                                    className="px-8 py-4 rounded-full bg-white text-primary font-bold transition-all hover:scale-105 active:scale-95 shadow-xl decoration-transparent whitespace-nowrap"
                                >
                                    Explore Solutions Hub
                                </Link>
                            </div>
                        </div>

                        {/* Bottom Bar: Back + Share */}
                        <div className="mt-20 pt-12 border-t flex flex-col md:flex-row items-center justify-between gap-8 border-slate-200 dark:border-white/10">
                            <Link
                                href="/blog"
                                className="px-8 py-4 rounded-full border font-bold transition-all flex items-center gap-3 bg-white border-slate-200 text-slate-900 hover:bg-slate-50 hover:border-primary/30 shadow-sm dark:bg-white/[0.03] dark:border-white/10 dark:text-white dark:hover:bg-white/[0.08] dark:hover:border-primary/30 decoration-transparent"
                            >
                                <ArrowLeft className="w-5 h-5" /> Back to Insights
                            </Link>
                            <ArticleShareButtons title={cleanTitleText} slug={slug} />
                        </div>
                    </article>

                    {/* Author Sidebar */}
                    <aside className="lg:col-span-4">
                        <div className="p-8 rounded-3xl border sticky top-32 transition-all relative overflow-hidden bg-white border-slate-200 shadow-xl dark:bg-[#121417]/80 dark:backdrop-blur-md dark:border-white/10">
                            <div className="absolute -top-10 -left-10 w-32 h-32 blur-[80px] rounded-full opacity-30 pointer-events-none bg-primary/20 dark:bg-primary" />

                            <h4 className="text-[10px] font-bold tracking-[0.25em] uppercase mb-8 text-slate-400 dark:text-gray-500">Published By</h4>

                            <div className="flex items-center gap-5 mb-8 relative z-10">
                                <div className="w-14 h-14 rounded-2xl overflow-hidden border p-0.5 border-primary/20 bg-primary/5 dark:border-primary/40 dark:bg-primary/10">
                                    <img
                                        src="https://admin.truepath406.com/wp-content/uploads/2025/12/Gemini_Generated_Image_gqrc0ygqrc0ygqrc.jpg"
                                        className="w-full h-full object-cover object-top rounded-[14px]"
                                        alt="Trevor Riggs"
                                        loading="lazy"
                                    />
                                </div>
                                <div>
                                    <div className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">
                                        {post.author?.node?.name || 'Trevor Riggs'}
                                    </div>
                                    <div className="text-primary text-[10px] font-bold uppercase tracking-[0.15em]">Founder / Architect</div>
                                </div>
                            </div>

                            <p className="text-sm leading-relaxed mb-10 font-light text-slate-600 dark:text-secondary/70">
                                25+ years engineering high-conversion sales systems and strategic digital infrastructure for high-growth firms.
                            </p>

                            <a
                                href={SOCIAL_LINKS.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-4 rounded-xl bg-primary text-white font-bold text-sm text-center transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_10px_30px_-5px_rgba(180,83,9,0.3)] hover:shadow-[0_15px_35px_-5px_rgba(180,83,9,0.4)] decoration-transparent"
                            >
                                Connect on LinkedIn
                            </a>
                        </div>
                    </aside>
                </div>
            </section>

            <Footer />
        </main>
    );
}
