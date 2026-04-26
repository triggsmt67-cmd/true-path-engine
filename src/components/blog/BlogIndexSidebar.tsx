"use client";

import React from 'react';
import Link from 'next/link';
import { decodeHtmlEntities } from '@/utils/decodeHtmlEntities';
import { SOCIAL_LINKS } from '@/constants/links';
import {
    Terminal,
    Zap,
    BarChart3,
    Layers,
    BookOpen,
    Lightbulb,
    FileText,
    ArrowRight,
    Bookmark
} from 'lucide-react';

interface Category {
    id: string;
    databaseId: number;
    name: string;
    slug: string;
    description: string | null;
    count: number;
}

interface BlogIndexSidebarProps {
    categories: Category[];
    onCategoryClick: (slug: string) => void;
    selectedCategorySlug: string | null;
    foundationalPosts?: any[];
}

const DEFAULT_FOUNDATIONAL_LINKS = [
    {
        title: "The Number One Profit Leak",
        slug: "the-number-one-profit-leak",
        excerpt: "The silent killer of contracting profits."
    }
];

const CATEGORY_ICON_MAP: Record<string, any> = {
    'growth-strategy': Lightbulb,
    'technical-logic': Terminal,
    'automation-lab': Zap,
    'algorithm-optimization': BarChart3,
    'conversion-design': Layers,
    'field-reports': BookOpen,
    'case-studies': BookOpen,
};

const BlogIndexSidebar: React.FC<BlogIndexSidebarProps> = ({
    categories,
    onCategoryClick,
    selectedCategorySlug,
    foundationalPosts,
}) => {
    // Filter and sort categories: show 4-8 max, exclude Uncategorized
    const displayCategories = categories
        .filter(cat => cat.slug !== 'uncategorized' && cat.slug !== 'blog' && cat.slug !== 'foundational' && cat.slug !== 'foundational-logic' && cat.count > 0)
        .sort((a, b) => b.count - a.count)
        .slice(0, 8);

    return (
        <aside className="hidden lg:block w-72 shrink-0 space-y-16">
            {/* Topics Block */}
            <div className="space-y-8">
                <div className="flex items-center justify-between">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-text-secondary/40">
                        Technical Topics
                    </h4>
                    {selectedCategorySlug && (
                        <button
                            onClick={() => onCategoryClick(selectedCategorySlug)}
                            className="text-[10px] font-bold text-brand-accent hover:underline underline-offset-4 uppercase tracking-widest"
                        >
                            Reset
                        </button>
                    )}
                </div>
                <nav className="flex flex-col gap-2">
                    {displayCategories.map(cat => {
                        const Icon = CATEGORY_ICON_MAP[cat.slug] || FileText;
                        const isActive = selectedCategorySlug === cat.slug;

                        return (
                            <button
                                key={cat.id}
                                onClick={() => onCategoryClick(cat.slug)}
                                className={`flex items-center justify-between group px-4 py-3 rounded-xl border-2 transition-all duration-300 ${isActive
                                    ? 'bg-brand-accent/10 border-brand-accent/40 text-brand-accent shadow-sm'
                                    : 'bg-surface border-black/5 text-brand-navy hover:border-black/20 hover:bg-background hover:shadow-md'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <Icon className={`w-4 h-4 ${isActive ? 'text-brand-accent' : 'text-brand-navy/30 group-hover:text-brand-accent transition-colors'}`} />
                                    <span className="text-xs font-bold uppercase tracking-widest">{cat.name}</span>
                                </div>
                                <span className={`text-[10px] font-bold ${isActive ? 'text-brand-accent' : 'text-brand-navy/20'}`}>
                                    {cat.count}
                                </span>
                            </button>
                        );
                    })}
                </nav>
            </div>

            {/* Start Here / Essentials Block */}
            <div className="space-y-8">
                <div className="space-y-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-text-secondary/40">
                        Engineering Fundamentals
                    </h4>
                    <p className="text-[11px] leading-relaxed text-text-secondary/40 font-bold uppercase tracking-wider">
                        Core principles for maintaining mechanical integrity.
                    </p>
                </div>
                <nav className="flex flex-col gap-5">
                    {(foundationalPosts && foundationalPosts.length > 0 ? foundationalPosts : DEFAULT_FOUNDATIONAL_LINKS).map((post, idx) => {
                        const title = decodeHtmlEntities(post.title);
                        const excerpt = decodeHtmlEntities(post.excerpt?.replace(/<[^>]*>?/gm, '').substring(0, 60) || '');
                        
                        return (
                        <Link
                            key={post.id || idx}
                            href={`/blog/${post.slug}`}
                            className="group text-left p-2 -mx-2 rounded-2xl transition-all hover:bg-black/[0.02] decoration-transparent"
                        >
                            <div className="flex items-start gap-4">
                                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border-2 transition-all duration-300 bg-surface border-black/5 text-brand-accent group-hover:border-brand-accent/50 group-hover:bg-brand-accent/10 shadow-sm">
                                    <Bookmark className="w-4 h-4" />
                                </div>
                                <div className="space-y-1.5 flex-1">
                                    <span className="block text-[13px] font-bold leading-tight transition-colors text-brand-navy group-hover:text-brand-accent uppercase tracking-wider">
                                        {title}
                                    </span>
                                    {excerpt && (
                                        <p className="text-[11px] leading-relaxed font-bold transition-colors text-text-secondary/40 uppercase tracking-widest">
                                            {excerpt}...
                                        </p>
                                    )}
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity self-center">
                                    <ArrowRight className="w-3.5 h-3.5 text-brand-accent" />
                                </div>
                            </div>
                        </Link>
                    )})}
                </nav>

                <div className="mt-10 p-8 rounded-standard border-2 transition-all relative overflow-hidden bg-brand-accent/5 border-brand-accent/10 shadow-xl">
                    <div className="absolute -top-12 -right-12 w-24 h-24 blur-3xl rounded-full bg-brand-accent/10 pointer-events-none" />
                    <h5 className="text-[10px] font-bold uppercase tracking-[0.25em] mb-4 text-brand-accent">Technical Updates</h5>
                    <p className="text-xs leading-relaxed mb-6 font-bold text-text-secondary uppercase tracking-widest">
                        Direct, technical insights on AI & conversion strategy delivered to your inbox.
                    </p>
                    <div className="flex flex-col gap-3">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full text-xs px-4 py-3 rounded-xl border-2 bg-surface focus:outline-none focus:border-brand-accent/40 transition-all font-bold border-black/5 text-brand-navy placeholder:text-brand-navy/30"
                        />
                        <button className="w-full py-4 bg-brand-accent text-white rounded-xl hover:bg-brand-navy hover:border-brand-navy transition-all font-bold text-xs flex items-center justify-center gap-2 group/sub shadow-lg shadow-brand-accent/20 active:scale-[0.98] uppercase tracking-widest">
                            Join the Technical Vault
                            <ArrowRight className="w-3.5 h-3.5 group-hover/sub:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* Author Sidebar */}
                <div className="mt-10 p-8 rounded-standard border-2 transition-all relative overflow-hidden bg-surface border-black/5 shadow-xl">
                    <div className="absolute -top-10 -left-10 w-32 h-32 blur-[80px] rounded-full opacity-10 pointer-events-none bg-brand-accent/40" />

                    <h4 className="text-[10px] font-bold tracking-[0.25em] uppercase mb-8 text-text-secondary/40">Connect</h4>

                    <div className="flex items-center gap-5 mb-8 relative z-10">
                        <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 p-1 border-brand-accent/20 bg-brand-accent/10">
                            <img
                                src="https://admin.truepath406.com/wp-content/uploads/2025/12/Gemini_Generated_Image_gqrc0ygqrc0ygqrc.jpg"
                                className="w-full h-full object-cover object-top rounded-[12px]"
                                alt="Trevor Riggs"
                                loading="lazy"
                            />
                        </div>
                        <div>
                            <div className="font-bold text-xl tracking-tight text-brand-navy uppercase">Trevor Riggs</div>
                            <div className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.15em]">Founder / Architect</div>
                        </div>
                    </div>

                    <p className="text-sm leading-relaxed mb-10 font-bold text-text-secondary/70 uppercase tracking-widest">
                        25+ years engineering high-conversion sales systems and strategic digital infrastructure for high-growth firms.
                    </p>

                    <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-4 rounded-xl bg-brand-navy text-white font-bold text-sm text-center transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-brand-navy/20 decoration-transparent uppercase tracking-widest"
                    >
                        Connect on LinkedIn
                    </a>
                </div>
            </div>
        </aside>
    );
};

export default BlogIndexSidebar;
