
import React from 'react';
import { motion } from 'framer-motion';

const MissionSection: React.FC = () => {
    return (
        <section className="pt-6 pb-12 md:pt-8 md:pb-20 bg-background relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="max-w-5xl mx-auto">
                    {/* Subtle Label - Secondary */}
                    <div className="flex items-center gap-3 mb-12 opacity-50">
                        <div className="h-px w-8 bg-primary"></div>
                        <span className="text-xs font-medium text-secondary uppercase tracking-widest">The Real Problem</span>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Primary Statement - Large & Confident */}
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-white mb-12 max-w-4xl">
                            Why the problem usually is not the platform
                        </h2>

                        <div className="grid md:grid-cols-12 gap-12">
                            {/* Empty column for offset layout if desired, or just full width text */}
                            <div className="md:col-span-12 lg:col-span-10 space-y-8 text-lg md:text-2xl text-secondary font-light leading-relaxed">
                                <p>
                                    Most businesses do not need another tool or another tactic first.
                                </p>
                                <p>
                                    They need to know what is actually costing them jobs.
                                </p>
                                <p>
                                    Sometimes it is visibility. Sometimes it is follow-up. Sometimes it is trust. Sometimes it is conversion. A lot of the time, the real problem is not where the lead came from. It is what happened next.
                                </p>

                                {/* Role Declaration - Distinct but connected */}
                                <p className="text-white/90 pt-4">
                                    My role is to help you cut through the noise, find the real leak, and make clearer decisions about what to fix first.
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
