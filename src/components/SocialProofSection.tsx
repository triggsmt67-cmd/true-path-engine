'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

const reviews = [
  {
    name: "John Doe",
    role: "Local Business Owner",
    text: "This gave us exactly the clarity we needed. We finally understand where our marketing budget is actually going, and my phone is ringing with the right kind of customers.",
    rating: 5
  },
  {
    name: "Sarah Smith",
    role: "Operations Manager",
    text: "Before this, we were just guessing with our ad spend. Now, the logic is laid out in front of us. It's not just a service—it's a complete infrastructure for our growth.",
    rating: 5
  },
  {
    name: "Mike Johnson",
    role: "Service Fleet Director",
    text: "We used to rely entirely on emergency work. Since implementing this approach, our planned maintenance has doubled and our lead cost actually dropped.",
    rating: 5
  }
];

export default function SocialProofSection() {
  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden">
      {/* SVG Gradient Definition for Stars */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#B45309" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>
        </defs>
      </svg>
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight text-white">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">Montana Shops</span>
          </h2>
          <p className="text-lg md:text-xl text-secondary font-light max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here is what leading service businesses have to say about building proper growth infrastructure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <SpotlightCard
                spotlightColor="rgba(255, 107, 0, 0.05)"
                className="p-6 lg:p-8 bg-[#0a0a0a] border border-white/5 rounded-3xl h-full flex flex-col hover:border-white/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,0,0.03)] group"
              >
                <div className="mb-4 flex gap-1 transform group-hover:-translate-y-1 transition-transform duration-300">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} style={{ fill: 'url(#star-gradient)', stroke: 'url(#star-gradient)' }} className="w-4 h-4" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-white/5 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                
                <p className="text-base text-secondary/80 font-light leading-relaxed mb-6 flex-1 italic">
                  "{review.text}"
                </p>
                
                <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg border border-primary/20">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-medium text-lg leading-tight mb-1">{review.name}</div>
                    <div className="text-sm text-secondary/60 font-mono tracking-tight uppercase text-[10px]">{review.role}</div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
