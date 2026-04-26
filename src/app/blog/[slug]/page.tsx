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
function parseTakeaways(text: string): string[] {
    if (!text) return [];
    return text
        .split(/\r?\n/)
        .map(line => line.replace(/^[•\-\s*\d\.)]+/, '').trim())
        .filter(line => line.length > 0 && !line.toLowerCase().includes('takeaway'));
}

function parseFaqs(text: string): { question: string, answer: string }[] {
    if (!text) return [];
    const faqs: { question: string, answer: string }[] = [];
    const lines = text.split(/\r?\n/);
    
    let currentQ = '';
    let currentA = '';
    
    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.toLowerCase() === 'frequently asked questions') continue;
        
        // Match lines that look like "1) Q: ...", "Q: ...", "1. Q: ..."
        const qMatch = trimmed.match(/^(?:\d+[\)\.]\s*)?Q[.:]?\s*(.+)/i);
        const aMatch = trimmed.match(/^(?:\d+[\)\.]\s*)?A[.:]?\s*(.+)/i);
        
        if (qMatch) {
            // Save the previous completed set
            if (currentQ && currentA) {
                faqs.push({ question: currentQ, answer: currentA });
                currentA = ''; 
            }
            currentQ = qMatch[1].trim();
        } else if (aMatch) {
            currentA = aMatch[1].trim();
        } else if (currentA) {
            currentA += ' ' + trimmed;
        } else if (currentQ) {
            currentQ += ' ' + trimmed;
        }
    }
    
    // Save the final QA set
    if (currentQ && currentA) {
        faqs.push({ question: currentQ, answer: currentA });
    }
    
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
        return { title: 'Insight Not Found | Benchmark Automotive Service' };
    }

    const url = `https://benchmarkauto.com/blog/${slug}/`;
    const cleanTitle = decodeHtmlEntities(post.title);
    const cleanDesc = decodeHtmlEntities(post.excerpt?.replace(/<[^>]*>?/gm, '').substring(0, 160) || '');
    const imageUrl = post.featuredImage?.node?.sourceUrl || "https://admin.truepath406.com/wp-content/uploads/2025/12/Gemini_Generated_Image_gqrc0ygqrc0ygqrc.jpg";

    return {
        title: `${cleanTitle} | Benchmark Automotive Service`,
        description: cleanDesc,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: `${cleanTitle} | Benchmark Automotive Service`,
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
            title: `${cleanTitle} | Benchmark Automotive Service`,
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
    const mappedTakeaways = aiDataRaw?.ai_takeaways ? parseTakeaways(aiDataRaw.ai_takeaways) : [];
    const mappedFaqs = post.faqs && post.faqs.length > 0 ? post.faqs : (aiDataRaw?.ai_faqs ? parseFaqs(aiDataRaw.ai_faqs) : []);

    // Clean excerpt for display
    const rawExcerpt = post.excerpt?.replace(/<[^>]*>?/gm, '').replace(/Continue reading.*/gi, '').trim() || '';
    const cleanExcerptText = decodeHtmlEntities(rawExcerpt);
    const cleanTitleText = decodeHtmlEntities(post.title);
    
    const articleUrl = `https://benchmarkauto.com/blog/${slug}`;
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
                "item": "https://benchmarkauto.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://benchmarkauto.com/blog/"
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
            "@id": "https://benchmarkauto.com/#organization",
            "@type": "Organization",
            "name": "Benchmark Automotive Service",
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
            className="bg-bg min-h-screen flex flex-col selection:bg-brand-red selection:text-white font-sans"
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
            <ArticleScrollProgress />

            <section className="pt-32 pb-20 px-6 relative z-10">
                <div className="max-w-[800px] mx-auto">
                    <article className="lg:col-span-8" data-ai-main-content="true">
                        
                        {/* 1. Publish date or updated date */}
                        <header className="mb-12">
                            <div className="flex items-center gap-4 mb-8">
                                <Link
                                    href="/blog"
                                    className="flex items-center gap-2 font-bold text-[10px] uppercase tracking-[0.2em] group transition-colors text-text-secondary/40 hover:text-brand-red decoration-transparent"
                                >
                                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                                    Technical Archive
                                </Link>
                                <span className="text-black/5">|</span>
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-secondary/40">
                                    <Clock className="w-3.5 h-3.5" /> 
                                    {modifiedDateStr && modifiedDateStr !== dateStr 
                                        ? `Protocol Updated ${modifiedDateStr}` 
                                        : `Published ${dateStr}`
                                    }
                                </div>
                            </div>

                            {/* 2. H1 */}
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8 text-brand-navy uppercase">
                                {cleanTitleText}
                            </h1>

                            {/* 3. AI Takeaways (Engineering Notes) */}
                            {mappedTakeaways && mappedTakeaways.length > 0 && (
                                <ul className="mb-12 pl-8 border-l-4 border-brand-red/20 space-y-5 list-none marker:text-brand-red">
                                    {mappedTakeaways.map((takeaway, i) => (
                                        <li key={i} className="text-xl md:text-2xl font-bold leading-relaxed text-brand-navy/60 uppercase tracking-wider">
                                            <span className="text-brand-red mr-2">—</span> {takeaway}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Featured Image */}
                            {post.featuredImage?.node?.sourceUrl && (
                                <div className="my-12 relative overflow-hidden rounded-standard border-2 border-black/5 shadow-2xl">
                                    <img 
                                        src={post.featuredImage.node.sourceUrl} 
                                        alt={post.featuredImage.node.altText || cleanTitleText} 
                                        className="w-full h-auto max-h-[500px] object-cover"
                                    />
                                </div>
                            )}

                            {/* 4. Engineering Brief (Quick Answer) */}
                            {mappedQuickAnswer && (
                                <div className="my-10 p-8 md:p-10 bg-surface border-2 border-black/5 rounded-standard shadow-xl">
                                    <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red mb-4 flex items-center gap-2">
                                        <Zap className="w-4 h-4"/> Engineering Brief
                                    </h2>
                                    <p className="text-xl text-brand-navy font-bold leading-relaxed italic uppercase tracking-wider">
                                        &ldquo;{mappedQuickAnswer}&rdquo;
                                    </p>
                                </div>
                            )}

                            {/* 5. Audience */}
                            {mappedAudience && (
                                <div className="mb-12 p-5 bg-bg rounded-xl border-2 border-black/5 text-text-secondary/60 flex items-start gap-4">
                                    <div className="font-bold whitespace-nowrap text-brand-navy mt-1 text-sm uppercase tracking-widest">Protocol Context:</div>
                                    <div className="text-base leading-relaxed font-bold uppercase tracking-widest">{mappedAudience}</div>
                                </div>
                            )}

                            {/* 6. Author Line */}
                            <div className="flex items-center gap-5 mt-10 pb-10 border-b-2 border-black/5">
                                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-brand-red/20 bg-brand-red/10 p-1">
                                    <img
                                        src="https://admin.truepath406.com/wp-content/uploads/2025/12/Gemini_Generated_Image_gqrc0ygqrc0ygqrc.jpg"
                                        className="w-full h-full object-cover object-top rounded-xl"
                                        alt={authorName}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <div className="font-bold text-xl text-brand-navy uppercase tracking-tight">
                                        {authorName}
                                    </div>
                                    <div className="text-brand-red text-[10px] font-bold uppercase tracking-[0.2em]">
                                        Principal Engineer
                                    </div>
                                </div>
                            </div>
                        </header>

                        {/* 7. Main article body */}
                        <div
                            className="prose prose-lg md:prose-xl max-w-none transition-all duration-300
                            prose-headings:text-brand-navy prose-headings:font-bold prose-headings:tracking-tight prose-headings:uppercase
                            prose-p:text-brand-navy/70 prose-p:leading-relaxed prose-p:mb-10 prose-p:font-bold prose-p:uppercase prose-p:tracking-wider
                            prose-a:text-brand-red prose-a:no-underline hover:prose-a:underline
                            prose-strong:text-brand-navy
                            prose-blockquote:border-l-4 prose-blockquote:border-brand-red prose-blockquote:bg-brand-red/5
                            prose-blockquote:py-8 prose-blockquote:px-10 prose-blockquote:rounded-r-standard prose-blockquote:not-italic prose-blockquote:text-2xl prose-blockquote:font-bold prose-blockquote:uppercase
                            prose-img:rounded-standard prose-img:shadow-2xl prose-img:border-2 prose-img:border-black/5
                            prose-ul:list-disc prose-ol:list-decimal
                            prose-li:font-bold prose-li:uppercase prose-li:tracking-widest"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* 8. FAQ section if FAQs exist */}
                        {mappedFaqs.length > 0 && (
                            <section className="mt-24 pt-20 border-t-2 border-black/5">
                                <h2 className="text-3xl font-bold mb-10 text-brand-navy tracking-tight uppercase">Technical FAQ</h2>
                                <div className="space-y-8">
                                    {mappedFaqs.map((faq, i) => (
                                        <div key={i} className="p-8 md:p-10 rounded-standard bg-surface border-2 border-black/5 shadow-xl">
                                            <h3 className="text-xl font-bold mb-4 text-brand-navy uppercase tracking-wider">{faq.question}</h3>
                                            <p className="text-lg text-text-secondary/70 leading-relaxed font-bold uppercase tracking-widest">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* 9. Soft CTA section */}
                        <section className="mt-24 p-10 md:p-16 rounded-standard bg-brand-navy border-2 border-black/5 group relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-red/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                            <div className="relative z-10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
                                <div className="max-w-xl">
                                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 tracking-tight uppercase">
                                        Need a technical second opinion?
                                    </h3>
                                    <p className="text-lg text-white/70 leading-relaxed font-bold uppercase tracking-widest">
                                        We specialize in diagnosing the issues other shops miss. Get a direct consultation on your performance requirements.
                                    </p>
                                </div>
                                <a
                                    href="https://calendly.com/triggsmt67"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-10 py-5 rounded-xl bg-brand-red text-white font-bold transition-all hover:scale-105 shadow-xl decoration-transparent whitespace-nowrap uppercase tracking-widest"
                                >
                                    Engineering Consult
                                </a>
                            </div>
                        </section>

                        {/* 10. Author bio block */}
                        <section className="mt-24 p-10 rounded-standard border-2 bg-surface border-black/5 shadow-xl relative overflow-hidden">
                            <h4 className="text-[10px] font-bold tracking-[0.25em] uppercase mb-10 text-text-secondary/40">Principal Engineer</h4>
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
                                <div className="w-20 h-20 shrink-0 rounded-2xl overflow-hidden border-2 p-1 border-brand-red/20 bg-brand-red/10">
                                    <img
                                        src="https://admin.truepath406.com/wp-content/uploads/2025/12/Gemini_Generated_Image_gqrc0ygqrc0ygqrc.jpg"
                                        className="w-full h-full object-cover object-top rounded-xl"
                                        alt={authorName}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <div className="font-bold text-3xl tracking-tight text-brand-navy mb-2 uppercase">
                                        {authorName}
                                    </div>
                                    <div className="text-brand-red text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Founder & Principal Engineer</div>
                                    <p className="text-lg leading-relaxed mb-8 font-bold text-text-secondary/70 uppercase tracking-widest">
                                        {post.author?.node?.description || '25+ years engineering high-performance diagnostic systems and technical infrastructure for luxury automotive care.'}
                                    </p>
                                    <a
                                        href={authorUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 px-8 py-3 rounded-lg border-2 border-black/5 text-brand-navy font-bold text-sm transition-all hover:bg-bg hover:border-brand-red/20 decoration-transparent uppercase tracking-widest"
                                    >
                                        Engineering Network
                                    </a>
                                </div>
                            </div>
                        </section>

                        {/* Bottom Bar: Share */}
                        <div className="mt-16 pt-10 border-t-2 flex items-center justify-center border-black/5">
                            <ArticleShareButtons title={cleanTitleText} slug={slug} />
                        </div>
                    </article>
                </div>
            </section>

            <Footer />
        </main>
    );
}
