"use client";


'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, PhoneCall, Star, MousePointerClick, Search, Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Search, PenTool as Tool, Zap, Shield, Settings, Activity } from 'lucide-react';

const solutions = [
    {
        role: "Diagnosis",
        title: "Advanced Engine Diagnostics",
        description: "Pinpoint complex engine performance issues with factory-level diagnostic tools and deep technical expertise.",
        tags: ["Fault Analysis", "Performance Tuning", "Sensor Calibration"],
        icon: Search,
        href: "/services/diagnostics/"
    },
    {
        role: "Precision",
        title: "Brake & Suspension Systems",
        description: "Maintain absolute control and comfort with precision brake service and advanced suspension tuning.",
        tags: ["Performance Brakes", "Adaptive Suspension", "Alignment"],
        icon: Tool,
        href: "/services/braking-suspension/"
    },
    {
        role: "Maintenance",
        title: "Factory Scheduled Care",
        description: "Protect your warranty and vehicle longevity with maintenance schedules that meet or exceed factory standards.",
        tags: ["Synthetic Fluids", "Filter Replacement", "Full Inspections"],
        icon: Activity,
        href: "/services/maintenance/"
    },
    {
        role: "Drivetrain",
        title: "Engine & Transmission Repair",
        description: "Expert overhaul and repair for high-performance engines and sophisticated modern transmissions.",
        tags: ["Turbo/Supercharger", "DCT/DSG Service", "Rebuilds"],
        icon: Settings,
        href: "/services/drivetrain/"
    },
    {
        role: "Technical",
        title: "Electrical & Hybrid Systems",
        description: "Specialized service for the complex electronic architecture and high-voltage systems in modern luxury vehicles.",
        tags: ["Battery Health", "Software Updates", "Charging Systems"],
        icon: Zap,
        href: "/services/electrical/"
    },
    {
        role: "Reliability",
        title: "The Benchmark Guarantee",
        description: "Every repair is backed by our absolute commitment to reliability, transparency, and mechanical excellence.",
        tags: ["24-Month Warranty", "Genuine Parts", "Clear Reporting"],
        icon: Shield,
        href: "/services/guarantee/"
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
        <section id="solutions" className="py-24 md:py-32 bg-bg relative overflow-hidden border-b border-black/5 scroll-mt-20">
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
                        Specialized <span className="text-brand-red italic">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl font-medium"
                    >
                        Expert maintenance and repair for high-performance and luxury vehicles.
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
                                            spotlightColor="rgba(158, 27, 31, 0.05)"
                                            className="relative flex flex-col h-full bg-surface border border-black/5 rounded-standard p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 shadow-sm"
                                        >
                                            {/* Vertical Accent Line (Hover Only) */}
                                            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-2/3 w-[2px] bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-linear" />

                                            {/* Icon Header */}
                                            <div className="flex items-center justify-between mb-8 transition-opacity">
                                                <div className="text-text-secondary group-hover:text-brand-red transition-colors duration-300">
                                                    <solution.icon className="w-6 h-6" strokeWidth={2} />
                                                </div>
                                                <span className="text-[10px] font-bold text-text-secondary uppercase tracking-widest bg-bg px-2 py-1 rounded">
                                                    {solution.role}
                                                </span>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 mb-8">
                                                <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-red transition-colors tracking-tight uppercase">
                                                    {solution.title}
                                                </h3>
                                                <p className="text-text-secondary text-sm md:text-base leading-relaxed font-medium mb-6">
                                                    {solution.description}
                                                </p>
                                                <div className="flex items-center gap-2 text-brand-red font-bold text-sm border-b border-brand-red/0 group-hover:border-brand-red/50 w-fit transition-all pb-0.5 uppercase tracking-wider">
                                                    View Service
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>

                                            {/* Tags List */}
                                            <div className="space-y-2 pt-6 border-t border-black/5">
                                                {solution.tags.map((tag, i) => (
                                                    <div key={i} className="flex items-center gap-2 text-xs text-text-secondary font-bold group-hover:text-brand-navy transition-colors">
                                                        <div className="w-1 h-1 rounded-full bg-black/10 group-hover:bg-brand-red transition-colors"></div>
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
                                    <div className="w-10 h-10 border-2 border-brand-red border-t-transparent rounded-full animate-spin mb-4" />
                                    <p className="text-brand-navy text-sm font-bold tracking-wide uppercase">Pulling technical data...</p>
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
