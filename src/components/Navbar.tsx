"use client";
import React, { useState, useEffect } from 'react';
import { Compass, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ["The Method", "Solutions", "Blog"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled
        ? 'bg-[#121417]/90 backdrop-blur-md border-white/5 py-4 shadow-xl shadow-black/50'
        : 'bg-transparent border-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer decoration-transparent">
          <div className="relative">
            <Compass className="w-8 h-8 text-primary group-hover:rotate-45 transition-transform duration-500" />
            <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-semibold text-lg tracking-tight text-white hover:text-white transition-colors decoration-transparent">
            True Path <span className="text-white/50 font-normal">Digital</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link}
              href={link === 'Blog' ? '/blog/' : `/#${link.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors decoration-transparent"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="bg-primary hover:bg-[#ff8533] text-white px-6 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] transform hover:-translate-y-0.5">
            Book Strategy Call
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#121212] border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {links.map((link) => (
                <Link
                  key={link}
                  href={link === 'Blog' ? '/blog/' : `/#${link.toLowerCase().replace(' ', '-')}`}
                  className="text-lg text-gray-300 hover:text-primary font-medium decoration-transparent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link}
                </Link>
              ))}
              <button className="bg-primary w-full py-3 rounded-full text-white font-bold">
                Book Strategy Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;