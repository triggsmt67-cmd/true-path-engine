"use client";


import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Target, Goal, CheckCircle } from 'lucide-react';

const TrailGrid: React.FC = () => {
    return (
        <section id="how-i-work" className="py-24 md:py-32 relative bg-bg overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Heading */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-brand-red font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Diagnostics</span>
                        <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold text-brand-navy tracking-tight leading-[0.95] mb-8 uppercase">
                            Accuracy <br /><span className="text-brand-red italic">First.</span>
                        </h2>
                        <div className="p-8 rounded-standard bg-surface border border-black/5 relative group overflow-hidden shadow-sm">
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-red/40 group-hover:bg-brand-red transition-colors" />
                            <p className="text-xl md:text-2xl text-brand-navy font-bold italic leading-relaxed uppercase tracking-tight">
                                "We don't start with parts, pricing, or guesses."
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
                                We begin by understanding the symptoms, the data, and the vehicle's history.<br />
                                <span className="text-text-secondary/60 italic font-bold">Not what's easiest to fix. Not what's most profitable. What's actually failing.</span>
                            </p>

                            <div>
                                <p className="mb-4 text-brand-navy font-bold uppercase tracking-wide">Every diagnostic follows a rigorous path:</p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-brand-red mt-2 shrink-0"></div>
                                        <span className="font-bold">Isolating the root cause with factory-spec instrumentation</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-brand-red mt-2 shrink-0"></div>
                                        <span className="font-bold">Verifying performance benchmarks before and after repair</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-6 border-l-2 border-brand-red/30 pl-6">
                                <p className="text-brand-navy font-bold text-xl uppercase tracking-tight">
                                    The Benchmark Guarantee:
                                </p>
                                <p className="text-text-secondary font-bold italic">
                                    Absolute transparency, technical excellence, and repairs you can trust for the long haul.
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
