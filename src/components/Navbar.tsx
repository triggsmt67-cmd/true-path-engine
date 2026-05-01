"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CONTACT_LINKS } from '@/constants/links';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Check My Google Profile', href: '/trust-calculator' },
  { label: 'About', href: '/#about' },
  { label: 'Insights', href: '/blog/' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState<string>('/');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (pathname === '/') {
        const sections = ['hero', 'about'];
        const scrollPosition = window.scrollY + 200;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const { top, bottom } = el.getBoundingClientRect();
            const absoluteTop = top + window.scrollY;
            const absoluteBottom = bottom + window.scrollY;

            if (scrollPosition >= absoluteTop && scrollPosition < absoluteBottom) {
              if (section === 'hero') {
                setActiveSegment('/');
              } else {
                setActiveSegment(`/#${section}`);
              }
              break;
            }
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  useEffect(() => {
    if (pathname.startsWith('/blog')) {
      setActiveSegment('/blog/');
    } else if (pathname.startsWith('/solutions')) {
      setActiveSegment(pathname);
    } else if (pathname === '/') {
      setActiveSegment('/');
    }
  }, [pathname]);

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('/#') && pathname === '/') {
      e.preventDefault();
      const id = href.replace('/#', '');
      setActiveSegment(href);
      const el = document.getElementById(id);
      if (el) {
        const offset = 100;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === '/blog/') return pathname.startsWith('/blog');
    return activeSegment === href;
  };

  return (
    <motion.nav
      initial={false}
      animate={{
        y: isScrolled ? 12 : 0,
        left: isScrolled ? 16 : 0,
        right: isScrolled ? 16 : 0,
        backgroundColor: isScrolled
          ? 'rgba(255, 255, 255, 0.85)'
          : 'rgba(255, 255, 255, 0)',
        backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
        borderColor: isScrolled
          ? 'rgba(0, 0, 0, 0.05)'
          : 'rgba(0, 0, 0, 0)',
        borderRadius: isScrolled ? '20px' : '0px',
        boxShadow: isScrolled ? '0 10px 30px -10px rgba(0,0,0,0.1)' : 'none',
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4"
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group cursor-pointer focus:outline-none decoration-transparent"
        >
          <span className="font-bold text-xl tracking-tight text-brand-navy">
            True Path <span className="text-brand-accent">Digital</span>
          </span>
        </Link>

        {/* Desktop Nav — Pill Style */}
        <div className="hidden md:flex items-center gap-1 border border-black/5 rounded-full p-1.5 backdrop-blur-md bg-black/[0.02]">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="relative">
              <Link
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className={`relative z-10 px-4 py-2 text-[13px] font-bold transition-colors duration-300 block decoration-transparent uppercase tracking-wider ${
                  isActive(item.href)
                    ? 'text-white'
                    : 'text-text-secondary hover:text-brand-navy'
                }`}
              >
                {item.label}
              </Link>
              {isActive(item.href) && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full z-0 bg-brand-navy"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <a
            href={CONTACT_LINKS.calendar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-accent hover:bg-[#85161a] text-white px-6 py-2.5 rounded-standard text-xs font-bold uppercase tracking-widest transition-all shadow-md shadow-brand-accent/10 transform hover:-translate-y-0.5 decoration-transparent"
          >
            Schedule a Leak Review
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-navy"
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
            className="md:hidden absolute top-full left-0 right-0 bg-surface border-b border-black/5 overflow-hidden shadow-xl"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-lg font-bold uppercase tracking-wider decoration-transparent ${
                    isActive(item.href) ? 'text-brand-accent' : 'text-text-secondary hover:text-brand-navy'
                  }`}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={CONTACT_LINKS.calendar}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-brand-accent w-full py-4 rounded-standard text-white font-bold uppercase tracking-widest decoration-transparent shadow-lg shadow-brand-accent/20"
              >
                Schedule a Leak Review
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;