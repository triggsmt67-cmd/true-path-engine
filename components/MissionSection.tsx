import React from 'react';
import { motion } from 'framer-motion';

const MissionSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <div className="text-xs font-medium text-gray-600 mb-8 uppercase tracking-widest border-l border-primary pl-4">Our Mission</div>
                
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-3xl lg:text-5xl font-normal leading-tight tracking-tight text-white/50 text-left">
                        True Path Digital is a <span className="text-white font-medium">creative growth consultancy</span> dedicated to transforming your online presence. With a laser focus on Google Ads, social strategy, and high-impact web design, the mission is to build the systems that empower <span className="text-white font-medium">ambitious owners</span> to stop guessing, start automating, and launch campaigns that actually convert.
                    </h2>
                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default MissionSection;