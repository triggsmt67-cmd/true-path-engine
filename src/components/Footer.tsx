"use client";
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-white mb-2">True Path Digital</h4>
            <p className="text-sm text-gray-500">Stop Guessing. Start Arriving.</p>
        </div>
        
        <div className="text-sm text-gray-600 text-center md:text-right">
            <p className="mb-1">&copy; {new Date().getFullYear()} True Path Digital. All rights reserved.</p>
            <p>Based in Montana. Built for the World.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
