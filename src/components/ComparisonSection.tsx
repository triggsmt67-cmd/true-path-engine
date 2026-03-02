import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Zap } from 'lucide-react';

const ComparisonSection: React.FC = () => {
    return (
        <section className="py-24 md:py-32 relative border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center relative">

                    {/* Vertical Divider (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2"></div>

                    {/* Left Side: The Problem (Legacy) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center opacity-50 hover:opacity-100 transition-opacity duration-500"
                    >
                        <h3 className="text-3xl font-bold text-white mb-4">The Manual Trap</h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Spreadsheets, gut feelings, and 12-hour days. Traditional marketing is slow, messy, and unscalable. You&apos;re throwing budget into a black hole.
                        </p>

                        {/* Minimal Metric */}
                        <div className="flex items-center gap-4">
                            <div className="h-1 bg-white/10 w-32 rounded-full overflow-hidden">
                                <div className="h-full bg-red-600 w-[15%]"></div>
                            </div>
                            <div className="text-xs font-mono uppercase text-red-500 tracking-wider">
                                15% Efficiency
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: The Solution (Future) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center relative"
                    >
                        {/* Ambient Glow */}
                        <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-40 h-40 bg-primary/20 blur-[100px] rounded-full pointer-events-none opacity-50"></div>

                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Applied Intelligence</h3>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            Automated workflows. Real-time data. Precision targeting. We engineer the chaos out of your business so you can scale without burnout.
                        </p>

                        {/* Premium Metric */}
                        <div className="flex items-center gap-4">
                            <div className="h-1 bg-white/10 w-32 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '98%' }}
                                    transition={{ duration: 1.5, delay: 0.2 }}
                                    className="h-full bg-primary shadow-[0_0_15px_rgba(255,107,0,0.8)]"
                                />
                            </div>
                            <div className="flex items-center gap-2 text-primary">
                                <Zap className="w-4 h-4 fill-current" />
                                <span className="text-xs font-mono uppercase tracking-wider font-bold">98% Efficiency</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonSection;