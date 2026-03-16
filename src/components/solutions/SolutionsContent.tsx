'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightCard } from '@/components/SpotlightCard';
import SectionSeparator from '@/components/SectionSeparator';
import { 
  MapPin, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  MessageSquare, 
  Lock,
  Globe,
  Settings,
  Star,
  FileText
} from 'lucide-react';
import Link from 'next/link';

const IconMap: Record<string, any> = {
  MapPin,
  Zap,
  Target,
  MessageSquare,
  Star,
  Settings,
  Lock,
  Globe
};

interface Evidence {
  title: string;
  slug: string;
  date: string;
}

interface Node {
  title: string;
  description: string;
  icon: string; // Passed as string ID
  category: string;
  color: string;
  spotlight: string;
  wpCategory?: string;
  evidence?: Evidence;
}

interface Framework {
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  href: string;
  icon: string; // Passed as string ID
  color: string;
  bgColor: string;
  borderColor: string;
  spotlight: string;
}

interface SolutionsContentProps {
  frameworks: Framework[];
  serviceNodes: Node[];
}

export default function SolutionsContent({ frameworks, serviceNodes }: SolutionsContentProps) {
  return (
    <main className="pt-24 md:pt-32">
      {/* Hub Hero */}
      <section className="relative py-12 lg:py-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
             <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#FF6B00]"></span>
              <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-primary uppercase">
                Growth Infrastructure
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-semibold mb-10 tracking-tighter leading-[1.1]">
              Montana <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#fbbf24] via-primary to-[#78350f]">Growth Infrastructure</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-secondary mb-12 max-w-2xl leading-relaxed font-light">
              A proprietary ecosystem of frameworks and tactical nodes designed to own the Montana trade market. Stop buying services. Start building a moat.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionSeparator number="01" title="THE FRAMEWORKS" />
      
      {/* Large Framework Sections */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {frameworks.map((fw, index) => {
              const IconComponent = IconMap[fw.icon] || Globe;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={fw.href} className="group block decoration-transparent h-full">
                    <SpotlightCard
                      spotlightColor={fw.spotlight}
                      className="relative p-12 lg:p-16 bg-white/[0.02] border border-white/5 rounded-[2.5rem] h-full transition-all duration-500 hover:border-white/10 hover:bg-white/[0.04]"
                    >
                      <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between mb-12">
                          <div className={`w-16 h-16 rounded-2xl ${fw.bgColor} flex items-center justify-center ${fw.color} border ${fw.borderColor}`}>
                            <IconComponent className="w-8 h-8" />
                          </div>
                          <span className={`${fw.color} text-[10px] font-mono font-bold uppercase tracking-[0.3em] bg-white/[0.03] px-4 py-2 rounded-full border border-white/5`}>
                            {fw.subtitle}
                          </span>
                        </div>
                        
                        <div className="flex-1">
                          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 tracking-tight">
                            {fw.title}
                          </h2>
                          <p className="text-lg text-secondary/70 font-light leading-relaxed mb-10">
                            {fw.description}
                          </p>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                            {fw.points.map((pt, i) => (
                              <div key={i} className="flex items-center gap-3 text-sm text-secondary/40">
                                <CheckCircle2 className="w-4 h-4 text-primary/50" />
                                {pt}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-primary font-semibold group-hover:gap-5 transition-all">
                          Enter Command Center
                          <ArrowRight className={`w-5 h-5 ${fw.color === 'text-primary' ? 'text-primary' : fw.color}`} />
                        </div>
                      </div>
                    </SpotlightCard>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionSeparator number="02" title="TACTICAL NODES" />

      {/* Smaller Service Nodes Grid */}
      <section className="py-12 md:py-16 mb-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight">A-La-Carte Infrastructure</h2>
            <p className="text-lg text-secondary font-light max-w-2xl">
              Specific tactical components that can be deployed individually to plug gaps in your current growth cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceNodes.map((node, index) => {
              const IconComponent = IconMap[node.icon] || Target;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="h-full"
                >
                  <SpotlightCard
                    key={index}
                    spotlightColor={node.spotlight}
                    className="p-8 bg-[#0d0d0d] border border-white/10 rounded-3xl group cursor-pointer hover:border-white/20 transition-all duration-300 h-full flex flex-col hover:shadow-[0_0_30px_rgba(255,107,0,0.02)]"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center ${node.color} group-hover:bg-white/[0.05] transition-colors`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono text-secondary/40 uppercase tracking-widest">{node.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{node.title}</h3>
                    <p className="text-sm text-secondary/60 font-light leading-relaxed mb-6">
                      {node.description}
                    </p>

                    {/* Dynamic Evidence Section */}
                    {node.evidence && (
                      <Link 
                        href={`/blog/${node.evidence.slug}`}
                        className="mt-auto mb-6 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-primary/30 hover:bg-white/[0.06] transition-all duration-300 group/evidence decoration-transparent"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <FileText className="w-3 h-3 text-primary" />
                            <span className="text-[9px] font-bold uppercase tracking-widest text-primary/60">Logic Proof</span>
                          </div>
                          <ArrowRight className="w-3 h-3 text-primary opacity-0 -translate-x-2 group-hover/evidence:opacity-100 group-hover/evidence:translate-x-0 transition-all duration-300" />
                        </div>
                        <div className="text-[11px] text-white/80 line-clamp-2 leading-relaxed group-hover/evidence:text-white transition-colors">
                          {node.evidence.title}
                        </div>
                        <div className="mt-3 text-[8px] font-bold text-primary uppercase tracking-[0.2em] opacity-40 group-hover/evidence:opacity-100 transition-opacity">
                          Read Full Intelligence →
                        </div>
                      </Link>
                    )}
                    
                    <div className="flex items-center gap-2 text-[10px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest mt-auto">
                       View Specs
                       <ArrowRight className="w-3 h-3" />
                    </div>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regional Anchor */}
      <section className="py-12 md:py-16 mb-12">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row gap-20 items-center">
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="lg:w-1/2"
           >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] uppercase font-bold tracking-widest mb-8">
                <Globe className="w-3 h-3" />
                The Proximity Advantage
              </div>
              <h2 className="text-4xl md:text-6xl font-semibold mb-10 tracking-tighter leading-tight">
                Dominate the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40">Montana Corridor.</span>
              </h2>
              <p className="text-xl text-secondary font-light leading-relaxed mb-8">
                Whether you're operating out of **Missoula**, scaling in **Billings**, or establishing a moat in **Bozeman**, your infrastructure must be regionally aware.
              </p>
              <p className="text-secondary/60 font-light max-w-lg mb-12">
                Generic out-of-state agencies don't understand the proximity weighting of our local maps or the psychological intent of a Montana buyer. We built this engine specifically for this landscape.
              </p>
              
              <div className="flex gap-12 border-t border-white/5 pt-12">
                 <div>
                   <div className="text-3xl font-semibold text-white mb-1">Missoula</div>
                   <div className="text-xs text-secondary uppercase tracking-widest">HQ Location</div>
                 </div>
                 <div>
                   <div className="text-3xl font-semibold text-white mb-1">Montana</div>
                   <div className="text-xs text-secondary uppercase tracking-widest">Primary Focus</div>
                 </div>
              </div>
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1, ease: "easeOut" }}
             className="lg:w-1/2 relative"
           >
              <div className="aspect-square flex items-center justify-center relative p-12 md:p-20">
                 {/* Bulls-eye Target Rings */}
                 <div className="absolute inset-0 rounded-full border border-white/[0.03]"></div>
                 <div className="absolute inset-[15%] rounded-full border border-white/[0.03]"></div>
                 <div className="absolute inset-[30%] rounded-full border border-white/[0.05]"></div>
                 <div className="absolute inset-[45%] rounded-full border border-primary/10 shadow-[inner_0_0_20px_rgba(255,107,0,0.05)]"></div>
                 
                 {/* Decorative background glow */}
                 <div className="absolute inset-0 bg-primary/[0.02] blur-3xl rounded-full"></div>
                 
                 <div className="relative z-10 text-center">
                     <motion.div
                       initial={{ y: -80, opacity: 0 }}
                       whileInView={{ y: 0, opacity: 1 }}
                       viewport={{ once: true }}
                       transition={{ 
                         type: "spring", 
                         damping: 15, 
                         stiffness: 100, 
                         delay: 0.4 
                       }}
                       className="mb-8"
                     >
                        <MapPin className="w-20 h-20 md:w-28 md:h-28 text-primary mx-auto opacity-90 drop-shadow-[0_10px_20px_rgba(255,107,0,0.4)]" />
                     </motion.div>
                    
                    <h4 className="text-2xl font-semibold text-white mb-4">Regional Logic</h4>
                    <p className="text-secondary/60 text-sm max-w-xs mx-auto leading-relaxed">Proprietary map-matching algorithms tuned for local search intent.</p>
                 </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Hub Footer CTA */}
      <section className="py-20 md:py-32 bg-primary relative overflow-hidden text-center group">
         <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
         <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-6xl font-semibold text-white mb-10 tracking-tighter">
               Your Infrastructure <br />
               Starts Today.
            </h2>
            
            <Link
              href="https://calendly.com/triggsmt67"
              className="inline-flex h-20 items-center justify-center rounded-full bg-white px-12 text-xl font-semibold text-primary shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] transition-all hover:scale-[1.05] active:scale-95 transition-all duration-300"
            >
               Secure Your Audit
               <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
         </div>
      </section>
    </main>
  );
}
