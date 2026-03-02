"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Cpu, CheckCircle, ArrowRight } from 'lucide-react';

const AboutSection: React.FC = () => {
   return (
      <section id="about" className="py-16 md:py-28 bg-[#121212] relative overflow-hidden border-t border-white/5">

         {/* Background Fingerprint/Contour Pattern */}
         <div className="absolute right-0 bottom-0 w-[800px] h-[800px] opacity-[0.03] pointer-events-none translate-x-1/3 translate-y-1/3">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
               <path fill="#FFFFFF" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.2,-19.2,95.8,-5.3C93.5,8.6,82,21.5,70.6,32.3C59.2,43.1,47.9,51.8,36.3,58.7C24.7,65.6,12.8,70.7,-0.7,71.9C-14.2,73.1,-29.9,70.4,-42.9,62.8C-55.9,55.2,-66.2,42.7,-73.3,28.9C-80.4,15.1,-84.3,0,-80.7,-13.2C-77.1,-26.4,-66,-37.7,-54.2,-45.8C-42.4,-53.9,-29.9,-58.8,-17.4,-61.6C-4.9,-64.4,7.6,-65.1,20.4,-69.5C30.5,-63.9,44.7,-76.4,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
         </div>

         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-center">

               {/* Left Column: Stylized Image (5 cols) */}
               <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-5 relative"
               >
                  {/* Gradient Border Frame */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary to-orange-600 rounded-2xl blur opacity-20 transform translate-x-2 translate-y-2"></div>

                  {/* Main Image Container */}
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/5] group">
                     {/* Image */}
                     <img
                        src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Trevor Riggs, Founder"
                        className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                     />

                     {/* Tech Overlay: Scanlines */}
                     <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,6px_100%] pointer-events-none opacity-60"></div>

                     {/* Glitch Overlay (Orange Tint) */}
                     <div className="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
               </motion.div>

               {/* Right Column: Bio Content (7 cols) */}
               <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:col-span-7"
               >
                  {/* Subhead */}
                  <div className="flex items-center gap-2 mb-4 text-gray-500 font-mono text-xs md:text-sm uppercase tracking-widest font-medium">
                     <MapPin className="w-4 h-4 text-primary" />
                     <span>Based in Montana. Built for the Trenches.</span>
                  </div>

                  {/* Headline */}
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 md:mb-8 leading-[1.1] tracking-tight">
                     Analog Wisdom. <br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">Digital Velocity.</span>
                  </h2>

                  {/* Body Copy */}
                  <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-400 leading-relaxed mb-8 md:mb-10 font-normal">
                     <p>
                        I&apos;m <span className="text-white font-medium">Trevor Riggs</span>. I don&apos;t solve problems with vanity metrics; I solve them with revenue.
                     </p>
                     <p>
                        With <span className="text-white font-medium">25+ years in sales and marketing</span> and over a decade leading digital strategy in high-stakes retail, I learned one truth: <span className="text-white font-medium border-b border-primary/50">Systems break if they don&apos;t respect psychology.</span>
                     </p>
                     <p>
                        True Path Digital was born from a simple obsession: taking the integrity of the &apos;handshake at the desk&apos; and scaling it with modern automation. I use tools like <span className="text-white font-medium">OpenAI, Gemini, and Make.com</span> not to replace the human element, but to strip away the busy work so your team can move faster and close more.
                     </p>
                  </div>

                  {/* Tech Stack Bar */}
                  <div className="mb-8 md:mb-10 p-4 md:p-6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                     <div className="text-xs font-bold text-gray-500 uppercase mb-4 flex items-center gap-2">
                        <Cpu className="w-3 h-3" />
                        Powered By:
                     </div>
                     <div className="flex flex-wrap gap-2 md:gap-3">
                        {['ChatGPT', 'Gemini', 'Make.com', 'Bolt', 'Lovable'].map((tool) => (
                           <span key={tool} className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-white/5 border border-white/10 text-xs md:text-sm font-medium text-gray-300 hover:bg-white/10 hover:border-primary/30 hover:text-white transition-all cursor-default">
                              {tool}
                           </span>
                        ))}
                     </div>
                  </div>

                  {/* Signature Block */}
                  <div className="border-l-2 border-primary pl-4 md:pl-6 py-1 mb-8 md:mb-10">
                     <p className="text-lg md:text-xl italic text-gray-300 mb-2 font-normal">&quot;No hype. Practical execution. Repeatable systems.&quot;</p>
                     <div className="text-primary font-bold tracking-wide text-sm md:text-base">— Trevor Riggs, Founder</div>
                  </div>

                  {/* CTA Button */}
                  <div className="text-center sm:text-left">
                     <button className="relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none group shadow-[0_0_50px_-10px_rgba(255,107,0,0.5)] w-full sm:w-auto">
                        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#FF6B00_50%,#000000_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#050505] px-8 text-lg font-medium text-white backdrop-blur-3xl gap-3 transition-colors group-hover:bg-[#111]">
                           Book a Strategy Call
                           <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                     </button>
                  </div>

               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default AboutSection;