"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

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

interface BlogListProps {
    posts: Post[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
    return (
        <section className="py-20 md:py-28 bg-[#121212] min-h-screen relative overflow-hidden">

            {/* Background Grid */}
            <div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
                <div className="w-full max-w-[1400px] h-full border-l border-white/[0.03] border-r flex justify-between">
                    <div className="h-full w-px bg-white/[0.03]"></div>
                    <div className="h-full w-px bg-white/[0.03]"></div>
                    <div className="h-full w-px bg-white/[0.03]"></div>
                    <div className="h-full w-px bg-white/[0.03]"></div>
                    <div className="h-full w-px bg-white/[0.03]"></div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">

                {/* Header */}
                <section className="relative px-6 overflow-hidden pt-12 mb-16 md:mb-20">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] blur-[150px] rounded-full pointer-events-none bg-primary/5" />
                    <div className="text-center relative z-10">
                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <div className="flex items-center justify-center gap-3 mb-8">
                                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary">The Intelligence Vault</span>
                            </div>
                            <h1 className="text-3xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-8 text-white">
                                Clear thinking for when the <br className="hidden md:block" />
                                right move isn’t obvious.
                            </h1>
                            <p className="text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12 text-secondary">
                                Notes, frameworks, and field-tested insights on making better marketing decisions — without chasing trends or tools.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Main Content Area */}
                <div className="max-w-[1400px] mx-auto py-12 flex flex-col lg:flex-row gap-16">
                    <div className="flex-1">
                        <div className="flex flex-col gap-6 mb-16">
                            <div className="flex items-center gap-4">
                                <div className="p-3.5 rounded-2xl bg-primary/10 text-primary border border-primary/20 shadow-sm shadow-primary/5">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></svg>
                                </div>
                                <div className="space-y-1">
                                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                                        Latest Thinking
                                    </h2>
                                </div>
                            </div>
                            <p className="text-xl max-w-3xl leading-relaxed font-light text-secondary">
                                Strategic observations, technical notes, and conversion frameworks from the field.
                            </p>
                        </div>

                        <div className="grid gap-8">
                            {posts.map((post, index) => (
                                <Link href={`/blog/${post.slug}`} key={post.id} className="block decoration-transparent">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
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
                                                    <Calendar className="w-3.5 h-3.5" />{new Date(post.date).toLocaleDateString()}
                                                </div>
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight transition-colors group-hover:text-primary text-white">
                                                {post.title}
                                            </h3>
                                            <div className="text-base md:text-lg leading-relaxed font-light line-clamp-2 transition-colors text-secondary/60" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                                        </div>

                                        <div className="flex items-center justify-center w-12 h-12 rounded-full border transition-all bg-white/5 border-white/10 text-secondary/40 group-hover:bg-primary group-hover:border-primary group-hover:text-white shrink-0">
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BlogList;
