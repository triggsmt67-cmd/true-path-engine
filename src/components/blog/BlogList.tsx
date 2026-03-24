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
    <div className="pt-32 pb-20 min-h-screen bg-[#121417]">
      {/* Hero Header */}
      <section className="relative px-6 overflow-hidden pt-12">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] blur-[150px] rounded-full pointer-events-none bg-primary/5" />
        <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary">The Intelligence Vault</span>
            </div>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-8 text-white">
              Clear thinking for when the <br className="hidden md:block" />
              right move isn&apos;t obvious.
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12 text-secondary">
              Notes, frameworks, and field-tested insights on making better marketing decisions — without chasing trends or tools.
            </p>
            <div className="max-w-xl mx-auto relative group">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-white/20" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by question, not keyword…"
                className="w-full border rounded-full py-4 pl-12 pr-6 transition-all text-sm outline-none border-white/5 bg-white/[0.02] text-white focus:border-white/10 placeholder:text-white/20"
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
            className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap border transition-all ${!selectedCategorySlug
              ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
              : 'bg-white/5 border-white/10 text-secondary'
              }`}
          >
            All Thinking
          </button>
          {categories.filter(c => c.count > 0 && c.slug !== 'uncategorized' && c.slug !== 'blog').map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.slug)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap border transition-all ${selectedCategorySlug === cat.slug
                ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                : 'bg-white/5 border-white/10 text-secondary'
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
                      <div className="p-3.5 rounded-2xl bg-primary/10 text-primary border border-primary/20 shadow-sm shadow-primary/5">
                        <FileText className="w-7 h-7" />
                      </div>
                    ) : (
                      <div className="p-3.5 rounded-2xl border bg-white/5 border-white/10 text-secondary/40">
                        <Lightbulb className="w-7 h-7" />
                      </div>
                    )}
                    <div className="space-y-1">
                      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                        {activeCategory ? activeCategory.name : 'Latest Thinking'}
                      </h2>
                    </div>
                  </div>
                  <p className="text-xl max-w-3xl leading-relaxed font-light text-secondary">
                    {activeCategory?.description || "Strategic observations, technical notes, and conversion frameworks from the field."}
                  </p>
                </div>

                {filteredPosts.length === 0 ? (
                  <div className="py-20 flex flex-col items-center justify-center gap-4 border rounded-3xl text-center px-6 border-white/5 bg-white/[0.02]">
                    <AlertCircle className="w-10 h-10 text-gray-700" />
                    <h3 className="text-xl font-bold text-secondary tracking-tight">No Matches Found</h3>
                    <p className="text-secondary/60 text-sm max-w-xs">No articles matched your search. Try a different query.</p>
                  </div>
                ) : (
                  <div className="grid gap-8">
                    {filteredPosts.map((post, idx) => (
                      <Link href={`/blog/${post.slug}`} key={post.id} className="block decoration-transparent">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="group relative border rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-10 transition-all cursor-pointer bg-[#121417] border-white/5 hover:border-primary/40 hover:bg-white/[0.03]"
                        >
                          <div className="flex-1 space-y-4">
                            <div className="flex items-center gap-4">
                              {post.categories?.nodes.slice(0, 1).map((cat) => (
                                <span key={cat.slug} className="text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded border bg-primary/5 border-primary/20 text-primary">
                                  {cat.name}
                                </span>
                              ))}
                              <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-secondary/30">
                                <Clock className="w-3.5 h-3.5" />{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                              </div>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight transition-colors group-hover:text-primary text-white" dangerouslySetInnerHTML={{ __html: post.title }} />
                            <div className="text-base md:text-lg leading-relaxed font-light line-clamp-2 transition-colors text-secondary/60" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                          </div>

                          <div className="flex items-center justify-center w-12 h-12 rounded-full border transition-all bg-white/5 border-white/10 text-secondary/40 group-hover:bg-primary group-hover:border-primary group-hover:text-white shrink-0">
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
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
