"use client";

import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ChevronRight,
  Clock,
  Lightbulb,
  FileText,
  AlertCircle,
} from 'lucide-react';
import Link from 'next/link';
import BlogIndexSidebar from './BlogIndexSidebar';
import { decodeHtmlEntities } from '@/utils/decodeHtmlEntities';

interface Post {
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

interface Category {
  id: string;
  databaseId: number;
  name: string;
  slug: string;
  description: string | null;
  count: number;
}

interface BlogListProps {
  posts: Post[];
  categories: Category[];
}

const BlogList: React.FC<BlogListProps> = ({ posts, categories }) => {
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const articleSectionRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = (slug: string) => {
    setSelectedCategorySlug(prev => prev === slug ? null : slug);
    setTimeout(() => {
      articleSectionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 300);
  };

  // Clean excerpt HTML for search
  const stripHtml = (html: string) => decodeHtmlEntities(html.replace(/<[^>]*>?/gm, ''));

  const filteredPosts = useMemo(() => {
    let result = posts;

    // Filter by Category
    if (selectedCategorySlug) {
      result = result.filter(p =>
        p.categories?.nodes.some(cat => cat.slug === selectedCategorySlug)
      );
    }

    // Filter by Search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        stripHtml(p.excerpt).toLowerCase().includes(q) ||
        p.categories?.nodes.some(cat => cat.name.toLowerCase().includes(q))
      );
    }

    return result;
  }, [posts, searchQuery, selectedCategorySlug]);

  const activeCategory = useMemo(() =>
    categories.find(c => c.slug === selectedCategorySlug),
    [selectedCategorySlug, categories]);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-bg">
      {/* Hero Header */}
      <section className="relative px-6 overflow-hidden pt-12">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] blur-[150px] rounded-full pointer-events-none bg-brand-red/5" />
        <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-red">The Technical Vault</span>
            </div>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8 text-brand-navy uppercase">
              Mechanical intelligence for <br className="hidden md:block" />
              performance <span className="text-brand-red italic">reliability.</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto font-bold leading-relaxed mb-12 text-text-secondary uppercase tracking-widest">
              Technical notes, diagnostic frameworks, and field-tested insights on high-performance automotive maintenance.
            </p>
            <div className="max-w-xl mx-auto relative group">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-brand-navy/20" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by technical question…"
                className="w-full border-2 rounded-standard py-4 pl-12 pr-6 transition-all text-sm outline-none border-black/5 bg-surface text-brand-navy focus:border-brand-red/40 placeholder:text-brand-navy/30 shadow-sm"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <div ref={articleSectionRef} className="scroll-mt-32">
        {/* Mobile Category Scroller */}
        <div className="lg:hidden px-6 mb-8 mt-12 overflow-x-auto no-scrollbar flex items-center gap-3 py-2">
          <button
            onClick={() => setSelectedCategorySlug(null)}
            className={`px-6 py-3 rounded-standard text-xs font-bold whitespace-nowrap border-2 transition-all uppercase tracking-widest ${!selectedCategorySlug
              ? 'bg-brand-red border-brand-red text-white shadow-lg shadow-brand-red/20'
              : 'bg-surface border-black/5 text-text-secondary'
              }`}
          >
            All Technical
          </button>
          {categories.filter(c => c.count > 0 && c.slug !== 'uncategorized' && c.slug !== 'blog' && c.slug !== 'foundational' && c.slug !== 'foundational-logic').map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.slug)}
              className={`px-6 py-3 rounded-standard text-xs font-bold whitespace-nowrap border-2 transition-all uppercase tracking-widest ${selectedCategorySlug === cat.slug
                ? 'bg-brand-red border-brand-red text-white shadow-lg shadow-brand-red/20'
                : 'bg-surface border-black/5 text-text-secondary'
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.section
            key={selectedCategorySlug || 'latest'}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-12 px-6 relative z-10"
          >
            <div className="max-w-[1400px] mx-auto py-12 flex flex-col lg:flex-row gap-16">
              {/* Main Posts Grid */}
              <div className="flex-1">
                <div className="flex flex-col gap-6 mb-16">
                  <div className="flex items-center gap-4">
                    {activeCategory ? (
                      <div className="p-4 rounded-xl bg-brand-red/10 text-brand-red border-2 border-brand-red/20 shadow-sm shadow-brand-red/5">
                        <FileText className="w-8 h-8" />
                      </div>
                    ) : (
                      <div className="p-4 rounded-xl border-2 bg-surface border-black/5 text-brand-navy/20">
                        <Activity className="w-8 h-8" />
                      </div>
                    )}
                    <div className="space-y-1">
                      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-navy uppercase">
                        {activeCategory ? activeCategory.name : 'Latest Insights'}
                      </h2>
                    </div>
                  </div>
                  <p className="text-xl max-w-3xl leading-relaxed font-bold text-text-secondary uppercase tracking-widest">
                    {activeCategory?.description || "Strategic observations, technical notes, and performance frameworks from the service bay."}
                  </p>
                </div>

                {filteredPosts.length === 0 ? (
                  <div className="py-20 flex flex-col items-center justify-center gap-4 border-2 rounded-standard text-center px-6 border-black/5 bg-surface">
                    <AlertCircle className="w-12 h-12 text-brand-navy/10" />
                    <h3 className="text-xl font-bold text-brand-navy tracking-tight uppercase">No Matches Found</h3>
                    <p className="text-text-secondary/60 text-sm max-w-xs font-bold">No technical articles matched your search. Try a different query.</p>
                  </div>
                ) : (
                  <div className="grid gap-8">
                    {filteredPosts.map((post, idx) => (
                      <Link href={`/blog/${post.slug}`} key={post.id} className="block decoration-transparent">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="group relative border-2 rounded-standard p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-10 transition-all cursor-pointer bg-surface border-black/5 hover:border-brand-red/40 hover:shadow-xl"
                        >
                          <div className="flex-1 space-y-5">
                            <div className="flex items-center gap-5">
                              {post.categories?.nodes.filter(c => c.slug !== 'foundational').map((cat) => (
                                <span key={cat.slug} className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded border-2 bg-brand-red/5 border-brand-red/10 text-brand-red whitespace-nowrap">
                                  {cat.name}
                                </span>
                              ))}
                              <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-text-secondary/40">
                                <Clock className="w-3.5 h-3.5" />{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                              </div>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight transition-colors group-hover:text-brand-red text-brand-navy uppercase" dangerouslySetInnerHTML={{ __html: post.title }} />
                            <div className="text-base md:text-lg leading-relaxed font-bold line-clamp-2 transition-colors text-text-secondary/70 uppercase tracking-widest" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                          </div>

                          <div className="flex items-center justify-center w-14 h-14 rounded-full border-2 transition-all bg-bg border-black/5 text-brand-navy/20 group-hover:bg-brand-red group-hover:border-brand-red group-hover:text-white shrink-0 shadow-sm">
                            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <BlogIndexSidebar
                categories={categories}
                onCategoryClick={handleCategoryClick}
                selectedCategorySlug={selectedCategorySlug}
                foundationalPosts={posts.filter(p => p.categories?.nodes.some(c => c.slug === 'foundational')).slice(0, 3)}
              />
            </div>
          </motion.section>
        </AnimatePresence>
      </div>
      <div className="h-20" />
    </div>
  );
};

export default BlogList;
