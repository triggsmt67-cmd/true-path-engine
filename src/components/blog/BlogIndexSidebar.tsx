"use client";

import React from 'react';
import Link from 'next/link';
import { START_HERE_LINKS } from '@/constants/curatedLinks';
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
}

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
}) => {
    // Filter and sort categories: show 4-8 max, exclude Uncategorized
    const displayCategories = categories
        .filter(cat => cat.slug !== 'uncategorized' && cat.count > 0)
        .sort((a, b) => b.count - a.count)
        .slice(0, 8);

    return (
        <aside className="hidden lg:block w-72 shrink-0 space-y-16">
            {/* Topics Block */}
            <div className="space-y-8">
                <div className="flex items-center justify-between">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary/40">
                        Topics
                    </h4>
                    {selectedCategorySlug && (
                        <button
                            onClick={() => onCategoryClick(selectedCategorySlug)}
                            className="text-[10px] font-bold text-primary hover:underline underline-offset-4 uppercase tracking-widest"
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
                                className={`flex items-center justify-between group px-4 py-3 rounded-xl border transition-all duration-300 backdrop-blur-sm ${isActive
                                    ? 'bg-primary/10 border-primary/40 text-primary shadow-[0_0_20px_-5px_rgba(180,83,9,0.2)]'
                                    : 'bg-white/[0.02] border-white/5 text-secondary hover:border-white/20 hover:bg-white/[0.05] hover:shadow-lg'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <Icon className={`w-4 h-4 ${isActive ? 'text-primary' : 'text-secondary/40 group-hover:text-primary transition-colors'}`} />
                                    <span className="text-xs font-medium">{cat.name}</span>
                                </div>
                                <span className={`text-[10px] font-mono ${isActive ? 'text-primary' : 'text-secondary/20'}`}>
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
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary/40">
                        Foundational Logic
                    </h4>
                    <p className="text-[11px] leading-relaxed text-secondary/20">
                        Core frameworks for navigating digital disruption.
                    </p>
                </div>
                <nav className="flex flex-col gap-5">
                    {START_HERE_LINKS.map((link, idx) => (
                        <Link
                            key={idx}
                            href={`/blog/${link.href}`}
                            className="group text-left p-2 -mx-2 rounded-2xl transition-all hover:bg-white/[0.02] decoration-transparent"
                        >
                            <div className="flex items-start gap-4">
                                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 bg-white/[0.03] border-white/10 text-primary group-hover:border-primary/50 group-hover:bg-primary/10 shadow-sm">
                                    <Bookmark className="w-4 h-4" />
                                </div>
                                <div className="space-y-1.5 flex-1">
                                    <span className="block text-[13px] font-bold leading-tight transition-colors text-white group-hover:text-primary">
                                        {link.title}
                                    </span>
                                    {link.shortLabel && (
                                        <p className="text-[11px] leading-relaxed font-light transition-colors text-secondary/40">
                                            {link.shortLabel}
                                        </p>
                                    )}
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity self-center">
                                    <ArrowRight className="w-3.5 h-3.5 text-primary" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </nav>

                <div className="mt-10 p-8 rounded-3xl border transition-all relative overflow-hidden bg-primary/5 border-primary/20 shadow-2xl shadow-primary/5">
                    <div className="absolute -top-12 -right-12 w-24 h-24 blur-3xl rounded-full bg-primary/20 pointer-events-none" />
                    <h5 className="text-[10px] font-bold uppercase tracking-[0.25em] mb-4 text-primary">Vault Access</h5>
                    <p className="text-xs leading-relaxed mb-6 font-light text-secondary/70">
                        Direct, technical insights on AI & conversion strategy delivered to your inbox.
                    </p>
                    <div className="flex flex-col gap-3">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full text-xs px-4 py-3 rounded-xl border bg-transparent focus:outline-none focus:border-primary/50 transition-all font-light border-white/10 text-white placeholder:text-secondary/30 focus:bg-white/[0.02]"
                        />
                        <button className="w-full py-3 bg-primary text-white rounded-xl hover:bg-[#92400e] transition-all font-bold text-xs flex items-center justify-center gap-2 group/sub shadow-lg shadow-primary/20 active:scale-[0.98]">
                            Join the Vault
                            <ArrowRight className="w-3.5 h-3.5 group-hover/sub:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default BlogIndexSidebar;
