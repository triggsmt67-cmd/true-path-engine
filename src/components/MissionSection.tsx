"use client";


import React from 'react';
import { motion } from 'framer-motion';

const MissionSection: React.FC = () => {
    return (
        <section className="py-24 md:py-32 bg-bg relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="max-w-5xl mx-auto">
                    {/* Subtle Label - Secondary */}
                    <div className="flex items-center gap-3 mb-12">
                        <div className="h-px w-8 bg-brand-red"></div>
                        <span className="text-xs font-bold text-text-secondary uppercase tracking-[0.2em]">The Diagnostic Standard</span>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Primary Statement - Large & Confident */}
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-brand-navy mb-12 max-w-4xl uppercase">
                            Why the problem usually isn't <span className="text-brand-red italic">the part.</span>
                        </h2>

                        <div className="grid md:grid-cols-12 gap-12">
                            <div className="md:col-span-12 lg:col-span-10 space-y-8 text-lg md:text-2xl text-text-secondary font-medium leading-relaxed">
                                <p>
                                    Most luxury vehicles don't need more parts thrown at them.
                                </p>
                                <p>
                                    They need an accurate diagnostic to identify what is actually failing.
                                </p>
                                <p>
                                    Precision engineering requires precision care. Whether it's a complex electrical gremlin or a subtle performance dip, the real work isn't the repair—it's the clarity of knowing exactly what to fix.
                                </p>

                                {/* Role Declaration */}
                                <p className="text-brand-navy font-bold pt-4 uppercase tracking-tight">
                                    Our mission is to cut through the guesswork, provide absolute transparency, and ensure your vehicle performs to its original factory benchmark.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MissionSection;
