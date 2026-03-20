
import React from 'react';
import { motion } from 'framer-motion';
import { Search, TrendingUp, ShieldAlert, ArrowRight, MapPin, Zap } from 'lucide-react';
import Link from 'next/link';

const solutions = [
    {
        role: "DEMAND CLARITY",
        title: "Demand Capture",
        description: "If the phone rings but the process breaks after that, more lead volume only creates more waste.\n\nThis is where I look at missed calls, response gaps, intake friction, and where good opportunities are slipping through.",
        tags: ["Call Handling", "Missed Opportunity Recovery", "Intake Clarity"],
        icon: MapPin,
        href: "/solutions/local-authority",
        cta: "See What I Look For"
    },
    {
        role: "CONVERSION DISCIPLINE",
        title: "Demand Conversion",
        description: "A visibility problem and a conversion problem are not the same thing.\n\nThis is where I look at booking rate, follow-up discipline, and whether the business is turning real inquiries into booked work consistently.",
        tags: ["Booking Rate", "Follow-Up Discipline", "Trust Signals"],
        icon: Zap,
        href: "/solutions/lead-velocity",
        cta: "See What I Look For"
    },
    {
        role: "DECISION SUPPORT",
        title: "Demand Stability",
        description: "A lot of service businesses stay busy, but stay busy in the wrong way.\n\nThis is where I look at work mix, seasonal exposure, referral dependency, and whether current visibility supports the kind of jobs the business actually wants more of.",
        tags: ["Work Mix", "Seasonal Stability", "Higher-Value Positioning"],
        icon: TrendingUp,
        href: "/solutions/demand-stability",
        cta: "See What I Look For"
    }
];

import { SpotlightCard } from './SpotlightCard';

const Solutions: React.FC = () => {
    return (
        <section id="solutions" className="py-10 md:py-16 bg-background relative overflow-hidden border-b border-white/5 scroll-mt-20">
            {/* Abstract Background Grid/Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="mb-8 md:mb-12 max-w-3xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-normal"

                    >
                        Decision Areas
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg md:text-xl text-secondary leading-relaxed max-w-2xl font-normal"
                    >
                        Clearer decisions across the parts of the business that affect demand, trust, and wasted spend.
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
                            className="relative group h-full"
                        >
                            <Link href={solution.href} className="block h-full decoration-transparent">
                                <SpotlightCard
                                    spotlightColor="rgba(255, 107, 0, 0.1)"
                                    className="relative flex flex-col h-full bg-white/[0.02] border border-white/5 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                                >
                                    {/* Vertical Accent Line (Hover Only) */}
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 h-2/3 w-[2px] bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-linear" />

                                    {/* Icon Header */}
                                    <div className="flex items-center justify-between mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                                        <div className="text-secondary group-hover:text-primary transition-colors duration-300">
                                            <solution.icon className="w-6 h-6" strokeWidth={1.5} />
                                        </div>
                                        <span className="text-[10px] font-medium text-secondary uppercase tracking-widest bg-white/[0.03] px-2 py-1 rounded">
                                            {solution.role}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 mb-8">
                                        <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 group-hover:text-white transition-colors tracking-tight">
                                            {solution.title}
                                        </h3>
                                        <p className="text-secondary text-sm md:text-base leading-relaxed font-light mb-6 whitespace-pre-line">
                                            {solution.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-primary font-medium text-sm border-b border-primary/0 group-hover:border-primary/50 w-fit transition-all pb-0.5">
                                            {(solution as any).cta || "Explore Framework"}
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>

                                    {/* Tags List */}
                                    <div className="space-y-2 pt-6 border-t border-white/5">
                                        {solution.tags.map((tag, i) => (
                                            <div key={i} className="flex items-center gap-2 text-xs text-secondary/60 group-hover:text-secondary transition-colors">
                                                <div className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-primary/50 transition-colors"></div>
                                                {tag}
                                            </div>
                                        ))}
                                    </div>
                                </SpotlightCard>
                            </Link>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>

    );
};

export default Solutions;
