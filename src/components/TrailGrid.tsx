"use client";


import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Target, Goal, CheckCircle } from 'lucide-react';

const TrailGrid: React.FC = () => {
    return (
        <section id="how-i-work" className="py-24 md:py-32 relative bg-background overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Heading */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-brand-accent font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Methodology</span>
                        <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold text-brand-navy tracking-tight leading-[0.95] mb-8 uppercase">
                            Run Instant <br /><span className="text-brand-accent italic">Scan.</span>
                        </h2>
                        <div className="p-8 rounded-standard bg-surface border border-black/5 relative group overflow-hidden transition-all duration-500 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:border-brand-accent/20">
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-accent/40 group-hover:bg-brand-accent transition-colors" />
                            <p className="text-xl md:text-2xl text-brand-navy font-bold italic leading-relaxed uppercase tracking-tight">
                                "I don’t start with tools, tactics, or templates."
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="text-lg md:text-xl text-text-secondary font-medium leading-relaxed space-y-8">
                            <p>
                                I start by understanding your buyer, your goals, and what already exists.<br />
                                <span className="text-text-secondary/60 italic font-bold">Not what should exist. Not what someone sold you. What’s actually there.</span>
                            </p>

                            <div>
                                <p className="mb-4 text-brand-navy font-bold uppercase tracking-wide">From there, the work takes one of two paths:</p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-brand-accent mt-2 shrink-0"></div>
                                        <span className="font-bold">Clarifying the decisions that are holding everything else up</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-brand-accent mt-2 shrink-0"></div>
                                        <span className="font-bold">Building only what’s necessary to support those decisions</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-6 border-l-2 border-brand-accent/30 pl-6">
                                <p className="text-brand-navy font-bold text-xl uppercase tracking-tight">
                                    The goal is always the same:
                                </p>
                                <p className="text-text-secondary font-bold italic">
                                    fewer unknowns, less stress, and marketing you can actually trust.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TrailGrid;
