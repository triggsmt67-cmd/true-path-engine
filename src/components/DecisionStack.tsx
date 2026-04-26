"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, PhoneMissed, Star, TrendingDown, CheckCircle2, ArrowDown, ArrowRight } from 'lucide-react';
import { CONTACT_LINKS } from '../constants/links';
import { SpotlightCard } from './SpotlightCard';


const stackItems = [
    {
        title: 'Weak Google Visibility',
        subtitle: 'People cannot hire you if they cannot find you.',
        icon: MapPin,
        color: 'text-blue-600',
        bg: 'bg-blue-600/10',
        border: 'border-blue-600/20',
        spotlight: 'rgba(37, 99, 235, 0.15)'
    },
    {
        title: 'Missed Calls & Slow Response',
        subtitle: 'Leads cool off fast when nobody answers or follows up.',
        icon: PhoneMissed,
        color: 'text-purple-600',
        bg: 'bg-purple-600/10',
        border: 'border-purple-600/20',
        spotlight: 'rgba(147, 51, 234, 0.15)'
    },
    {
        title: 'Thin Reviews & Weak Trust',
        subtitle: 'Good businesses lose work when proof is missing.',
        icon: Star,
        color: 'text-emerald-600',
        bg: 'bg-emerald-600/10',
        border: 'border-emerald-600/20',
        spotlight: 'rgba(5, 150, 105, 0.15)'
    },
    {
        title: 'Wasted Spend & Leaky Conversion',
        subtitle: 'More traffic does not help if it never turns into calls.',
        icon: TrendingDown,
        color: 'text-orange-600',
        bg: 'bg-orange-600/10',
        border: 'border-orange-600/20',
        spotlight: 'rgba(234, 88, 12, 0.15)'
    }
];

interface DecisionStackProps {
    disableSpotlight?: boolean;
}

const DecisionStack: React.FC<DecisionStackProps> = ({ disableSpotlight = false }) => {

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="rounded-[32px] bg-surface/80 backdrop-blur-xl border border-black/5 overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="px-6 py-5 border-b border-black/5 bg-black/[0.02]">
                    <h3 className="text-sm font-bold text-brand-navy uppercase tracking-widest text-center">
                        Where Jobs Get Lost
                    </h3>
                </div>

                {/* Stack Content */}
                <div className="p-6 space-y-3 relative">
                    {/* Connecting Line */}
                    <div className="absolute left-[2.85rem] top-10 bottom-24 w-px bg-gradient-to-b from-black/5 via-black/10 to-transparent z-0 dashed-line" />

                    {stackItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (index * 0.15), duration: 0.5, ease: "easeOut" }}
                            className="relative z-10"
                        >
                            <SpotlightCard
                                className={`flex items-center gap-4 p-4 rounded-2xl border bg-surface/50 ${item.border} border-opacity-30`}
                                spotlightColor={item.spotlight}
                                disabled={disableSpotlight}
                            >

                                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${item.bg} ${item.color} opacity-90`}>
                                    <item.icon className="w-4 h-4" />
                                </div>
                                <div>
                                    <div className={`font-semibold text-sm mb-0.5 text-text-primary`}>
                                        {item.title}
                                    </div>
                                    <div className="text-xs text-text-secondary font-medium leading-snug">
                                        {item.subtitle}
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}


                    {/* Flow Indicator to Final Decision */}
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 32 }}
                        transition={{ delay: 0.85, duration: 0.3 }}
                        className="flex justify-center items-center py-2"
                    >
                        <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-text-secondary">Start with the leak, not more activity</span>
                    </motion.div>

                    {/* Final Output - Clickable Button */}
                    <motion.a
                        href={CONTACT_LINKS.calendar}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.98, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ delay: 1.25, duration: 0.6, type: "spring", stiffness: 100 }}
                        className="relative z-10 block cursor-pointer group/btn no-underline"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-red/30 to-brand-copper/40 rounded-2xl blur opacity-0 group-hover/btn:opacity-50 transition-opacity duration-500"></div>
                        <div className="relative flex items-center justify-between p-5 rounded-2xl border border-brand-red/40 bg-surface shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] group-hover/btn:border-brand-red/60 group-hover/btn:shadow-[0_15px_35px_-10px_rgba(158,27,31,0.2)] transition-all duration-300">

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center shrink-0 shadow-lg shadow-brand-red/20 opacity-90 group-hover/btn:opacity-100 transition-opacity">
                                    <CheckCircle2 className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="font-bold text-text-primary text-[1.05rem] mb-0.5 group-hover/btn:text-brand-red transition-colors duration-300">
                                        Review My Current Setup
                                    </div>
                                    <div className="text-[11px] sm:text-xs text-text-secondary font-medium leading-relaxed group-hover/btn:text-brand-navy transition-colors duration-300">
                                        A quick 60-second review of where leads are leaking.<br className="hidden sm:block" /> No sales pitch. No upsells.
                                    </div>
                                </div>
                            </div>

                            <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover/btn:bg-brand-red group-hover/btn:text-white transition-all duration-300">
                                <ArrowRight className="w-4 h-4 text-brand-navy group-hover/btn:text-white transition-colors" />
                            </div>
                        </div>
                    </motion.a>
                </div>
            </div>
        </div>
    );
};

export default DecisionStack;
