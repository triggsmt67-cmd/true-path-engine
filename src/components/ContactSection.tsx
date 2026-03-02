"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const ContactSection: React.FC = () => {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden bg-[#050505]">

            {/* 1. Background Visual Details (Skill: Backgrounds & Visual Details) */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Grain Overlay snippet from Skill */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
                </div>
                {/* Soft Glow bloom */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* LEFT COLUMN: Editorial Typography (Skill: Typography) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-8 h-[1px] bg-primary"></span>
                            <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase">Connect</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9] mb-8">
                            Ready to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white">
                                Start Arriving?
                            </span>
                        </h2>

                        <p className="text-xl text-gray-400 mb-12 max-w-md leading-relaxed font-light">
                            We replace guesswork with intelligence. Tell us where you want to go, and we&apos;ll build the map to get you there.
                        </p>

                        {/* Contact Items - Spatial Composition (Asymmetry) */}
                        <div className="space-y-8">
                            {[
                                { icon: Mail, label: "Intelligence Hub", value: "hello@truepath.digital" },
                                { icon: MessageSquare, label: "Strategy Call", value: "+1 (555) 782-9421" },
                                { icon: MapPin, label: "Base Camp", value: "Flagstaff, Arizona" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * i }}
                                    className="flex items-start gap-6 group cursor-pointer"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300">
                                        <item.icon className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-1">{item.label}</p>
                                        <p className="text-lg text-white font-medium group-hover:text-primary transition-colors">{item.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: Premium Glass Form (Skill: Glassmorphism) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="p-8 md:p-12 rounded-[40px] bg-white/[0.02] border border-white/10 backdrop-blur-3xl relative overflow-hidden group shadow-2xl"
                    >
                        {/* Subtle Gradient Glow in card */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[60px] opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

                        <form className="relative z-10 space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-4">Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-4">Email</label>
                                    <input type="email" placeholder="john@company.com" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-4">Objective</label>
                                <select className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white appearance-none focus:outline-none focus:border-primary/50 transition-all">
                                    <option className="bg-[#111]">Revenue Growth</option>
                                    <option className="bg-[#111]">System Intelligence</option>
                                    <option className="bg-[#111]">Market Infiltration</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-4">Message</label>
                                <textarea rows={4} placeholder="Describe your revenue targets..." className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all resize-none"></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full h-16 rounded-2xl bg-gradient-to-r from-primary to-[#ff8c3a] text-black font-bold text-lg flex items-center justify-center gap-3 shadow-[0_20px_40px_-10px_rgba(255,107,0,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(255,107,0,0.5)] transition-all duration-300"
                            >
                                Dispatch Inquiry
                                <Send className="w-5 h-5" />
                            </motion.button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
