import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { fetchGraphQL } from '@/utils/fetchGraphQL';
import { ArrowRight } from 'lucide-react';
import { decodeHtmlEntities } from '@/utils/decodeHtmlEntities';

interface RelatedInsightsProps {
  categoryName?: string;
  fallbackCount?: number;
}

export default async function RelatedInsights({ categoryName, fallbackCount = 3 }: RelatedInsightsProps) {
  // We use categoryName if provided, otherwise we just fetch the latest posts.
  const whereClause = categoryName 
    ? `{ categoryName: "${categoryName}", orderby: { field: DATE, order: DESC } }`
    : `{ orderby: { field: DATE, order: DESC } }`;

  const query = `
    query GetRelatedPosts {
      posts(first: ${fallbackCount}, where: ${whereClause}) {
        nodes {
          title
          excerpt
          slug
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `;

  let posts = [];
  try {
    const data = await fetchGraphQL(query);
    posts = data?.posts?.nodes || [];
  } catch (error) {
    console.error("Error fetching related insights:", error);
    return null; // Fail silently if WP is down
  }

  // If no posts found in the specific category, try fetching the latest general posts as a fallback
  if (posts.length === 0 && categoryName) {
    try {
      const fallbackQuery = `
        query GetFallbackPosts {
          posts(first: ${fallbackCount}, where: { orderby: { field: DATE, order: DESC } }) {
            nodes {
              title
              excerpt
              slug
              date
              featuredImage {
                node {
                  sourceUrl
                  altText
                }
              }
            }
          }
        }
      `;
      const fallbackData = await fetchGraphQL(fallbackQuery);
      posts = fallbackData?.posts?.nodes || [];
    } catch (e) {
      return null;
    }
  }

  if (posts.length === 0) return null;

  return (
    <section className="py-20 border-t border-black/5 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-navy mb-4 tracking-tight">
              Related <span className="text-brand-accent">Insights</span>
            </h2>
            <p className="text-lg text-text-secondary font-light">Field notes and observations from actual deployments.</p>
          </div>
          <Link 
            href="/blog/" 
            className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-brand-accent hover:text-brand-navy transition-colors group"
          >
            View All Field Notes
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post: any) => {
            const cleanTitle = decodeHtmlEntities(post.title);
            const rawExcerpt = post.excerpt?.replace(/<[^>]*>?/gm, '').replace(/Continue reading.*/gi, '').trim() || '';
            const cleanExcerpt = decodeHtmlEntities(rawExcerpt).substring(0, 120) + '...';
            const imageUrl = post.featuredImage?.node?.sourceUrl || "https://admin.truepath406.com/wp-content/uploads/2025/12/Gemini_Generated_Image_gqrc0ygqrc0ygqrc.jpg";

            return (
              <Link href={`/blog/${post.slug}/`} key={post.slug} className="group flex flex-col h-full bg-surface border border-black/5 rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-black/[0.04] transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 w-full overflow-hidden bg-black/5">
                  <Image 
                    src={imageUrl}
                    alt={post.featuredImage?.node?.altText || cleanTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-navy/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-text-secondary/60 mb-4">
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <h3 className="text-xl font-semibold text-brand-navy leading-tight mb-4 group-hover:text-brand-accent transition-colors">
                    {cleanTitle}
                  </h3>
                  <p className="text-text-secondary/80 font-light leading-relaxed text-sm mb-6 flex-grow">
                    {cleanExcerpt}
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-brand-accent mt-auto group-hover:text-brand-navy transition-colors">
                    Read Dispatch
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
