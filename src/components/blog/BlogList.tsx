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

            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full opacity-20 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="mb-16 md:mb-20 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-xs font-medium tracking-[0.2em] text-primary uppercase">
                                Intelligence Feed
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
                            Insights from the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">Digital Frontlines.</span>
                        </h1>
                        <p className="text-lg text-gray-400 leading-relaxed max-w-2xl font-normal">
                            Tactical guides, system updates, and growth protocols for the modern business owner.
                        </p>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative flex flex-col h-full bg-white/[0.03] backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(255,107,0,0.1)]"
                        >
                            {/* Image */}
                            <div className="aspect-[16/9] relative overflow-hidden bg-white/5">
                                {post.featuredImage?.node?.sourceUrl ? (
                                    <img
                                        src={post.featuredImage.node.sourceUrl}
                                        alt={post.featuredImage.node.altText || post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-600">
                                        <span className="text-xs uppercase tracking-widest">No Image</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-60"></div>

                                {/* Categories Overlay */}
                                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                    {post.categories?.nodes.slice(0, 2).map((cat) => (
                                        <span
                                            key={cat.slug}
                                            className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-primary text-white shadow-lg shadow-primary/20 backdrop-blur-md border border-white/10"
                                        >
                                            {cat.name}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8 flex flex-col flex-1">

                                {/* Meta */}
                                <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5 text-primary" />
                                        <span>{new Date(post.date).toLocaleDateString()}</span>
                                    </div>
                                    {post.author?.node?.name && (
                                        <div className="flex items-center gap-1.5">
                                            <User className="w-3.5 h-3.5 text-primary" />
                                            <span>{post.author.node.name}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-medium text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                {/* Excerpt */}
                                <div
                                    className="text-sm text-gray-400 leading-relaxed mb-6 line-clamp-3 flex-1"
                                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                                />

                                {/* Link */}
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-primary transition-colors">
                                        Read Protocol
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>

                                    {/* Small Category Indicator for those not in overlay */}
                                    {post.categories && post.categories.nodes.length > 2 && (
                                        <span className="text-[10px] text-gray-500">+{post.categories.nodes.length - 2} more</span>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default BlogList;
