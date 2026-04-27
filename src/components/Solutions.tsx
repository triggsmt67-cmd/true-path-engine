"use client";


'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, PhoneCall, Star, MousePointerClick, Search, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const solutions = [
    {
        role: "Visibility",
        title: "Google Business Profile Optimization",
        description: "Improve your Google Business Profile with complete business information, clearer categories, and stronger review signals so local customers can find you more easily.",
        tags: ["Clear Categories", "Accurate Info", "Review Signals"],
        icon: MapPin,
        href: "/solutions/local-authority/"
    },
    {
        role: "Speed",
        title: "Missed Call Recovery & Lead Response",
        description: "Stop losing jobs to missed calls, slow replies, and follow-up gaps that cool leads off fast.",
        tags: ["Auto-text Reply", "Call Tracking", "Lead Capture"],
        icon: PhoneCall,
        href: "/solutions/lead-velocity/"
    },
    {
        role: "Trust",
        title: "Review Generation Systems",
        description: "Build a simple process that helps you get more reviews without constantly chasing customers.",
        tags: ["Automated Requests", "Google Integration", "Reputation"],
        icon: Star,
        href: "/solutions/review-system/"
    },
    {
        role: "Conversion",
        title: "Website Conversion Repair",
        description: "Turn more visitors into calls, quote requests, and booked work by removing friction and tightening the message.",
        tags: ["Clear CTAs", "Mobile Layouts", "Easy Forms"],
        icon: MousePointerClick,
        href: "/solutions/website-conversion/"
    },
    {
        role: "Analysis",
        title: "Demand Leak Audit",
        description: "Find out where visibility, follow-up, conversion, and response are breaking down before spending more money.",
        tags: ["Data Review", "Process Mapping", "Cost Savings"],
        icon: Search,
        href: "/solutions/demand-audit/"
    },
    {
        role: "Automation",
        title: "Estimate Follow-Up & Booking Automation",
        description: "Keep quotes and inquiries from going cold with a cleaner, more consistent follow-up process.",
        tags: ["Quote Tracking", "Status Updates", "Drip Campaigns"],
        icon: Calendar,
        href: "/solutions/estimate-follow-up/"
    }
];

import { SpotlightCard } from './SpotlightCard';

const Solutions: React.FC = () => {
    const router = useRouter();
    const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

    const handleCardClick = (e: React.MouseEvent<HTMLAnchorElement>, index: number, href: string) => {
        e.preventDefault();
        setFlippedIndex(index);
        
        setTimeout(() => {
            router.push(href);
        }, 1200);
    };

    return (
        <section id="solutions" className="py-24 md:py-32 bg-background relative overflow-hidden border-b border-black/5 scroll-mt-20">
            {/* Abstract Background Grid/Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="mb-12 md:mb-16 max-w-3xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6 tracking-tight uppercase"
                    >
                        Core Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl font-medium"
                    >
                        Clear decisions across your primary growth levers.
                    </motion.p>
                </div>

                {/* 3-Column Card Grid */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{ perspective: 1000 }}
                            className="relative group h-full"
                        >
                            <motion.div
                                animate={{ rotateY: flippedIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                style={{ transformStyle: "preserve-3d" }}
                                className="h-full w-full relative"
                            >
                                <div style={{ backfaceVisibility: "hidden" }} className="h-full w-full">
                                    <Link 
                                        href={solution.href} 
                                        onClick={(e) => handleCardClick(e, index, solution.href)}
                                        className="block h-full decoration-transparent"
                                    >
                                        <SpotlightCard
                                            spotlightColor="rgba(79, 124, 122, 0.05)"
                                            className="relative flex flex-col h-full bg-surface border border-black/5 rounded-standard p-8 transition-all duration-500 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1"
                                        >
                                            {/* Vertical Accent Line (Hover Only) */}
                                            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-2/3 w-[2px] bg-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-linear" />

                                            {/* Icon Header */}
                                            <div className="flex items-center justify-between mb-8 transition-opacity">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-accent/10 text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                                                    <solution.icon className="w-5 h-5" strokeWidth={2.5} />
                                                </div>
                                                <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest bg-background px-2 py-1 rounded">
                                                    {solution.role}
                                                </span>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 mb-8">
                                                <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-accent transition-colors tracking-tight uppercase">
                                                    {solution.title}
                                                </h3>
                                                <p className="text-text-secondary text-sm md:text-base leading-relaxed font-medium mb-6">
                                                    {solution.description}
                                                </p>
                                                <div className="flex items-center gap-2 text-brand-accent font-bold text-sm border-b border-brand-accent/0 group-hover:border-brand-accent/50 w-fit transition-all pb-0.5 uppercase tracking-wider">
                                                    View Details
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>

                                            {/* Tags List */}
                                            <div className="space-y-2 pt-6 border-t border-black/5">
                                                {solution.tags.map((tag, i) => (
                                                    <div key={i} className="flex items-center gap-2 text-xs text-text-secondary font-bold group-hover:text-brand-navy transition-colors">
                                                        <div className="w-1 h-1 rounded-full bg-black/10 group-hover:bg-brand-accent transition-colors"></div>
                                                        {tag}
                                                    </div>
                                                ))}
                                            </div>
                                        </SpotlightCard>
                                    </Link>
                                </div>
                                
                                {/* Back Face */}
                                <div 
                                    style={{ 
                                        backfaceVisibility: "hidden", 
                                        transform: "rotateY(180deg)", 
                                    }}
                                    className="absolute inset-0 flex flex-col items-center justify-center bg-surface border border-black/5 rounded-standard shadow-xl"
                                >
                                    <div className="w-10 h-10 border-2 border-brand-accent border-t-transparent rounded-full animate-spin mb-4" />
                                    <p className="text-brand-navy text-sm font-bold tracking-wide uppercase">Finding your path...</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Solutions;
