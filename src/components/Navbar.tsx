"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CONTACT_LINKS } from '@/constants/links';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'How I Work', href: '/#how-i-work' },
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

      // Update active segment based on scroll position on the homepage
      if (pathname === '/') {
        const sections = ['hero', 'how-i-work', 'about'];
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

  // Set active segment based on pathname
  useEffect(() => {
    if (pathname.startsWith('/blog')) {
      setActiveSegment('/blog/');
    } else if (pathname === '/') {
      setActiveSegment('/');
    }
  }, [pathname]);

  const handleAnchorClick = (e: React.MouseEvent, href: string) => {
    // Only handle hash links on the homepage
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
        scale: isScrolled ? 0.98 : 1,
        backgroundColor: isScrolled
          ? 'rgba(18, 20, 23, 0.75)'
          : 'rgba(0, 0, 0, 0)',
        backdropFilter: isScrolled ? 'blur(20px)' : 'blur(0px)',
        borderColor: isScrolled
          ? 'rgba(255, 255, 255, 0.1)'
          : 'rgba(0, 0, 0, 0)',
        borderRadius: isScrolled ? '24px' : '0px',
        width: isScrolled ? 'calc(100% - 32px)' : '100%',
        margin: isScrolled ? '0 16px' : '0 0',
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b flex justify-center py-4"
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group cursor-pointer focus:outline-none decoration-transparent"
        >
          <span className="font-semibold text-lg tracking-tight text-white">
            True Path <span className="font-normal text-secondary">Digital</span>
          </span>
        </Link>

        {/* Desktop Nav — Pill Style */}
        <div className="hidden md:flex items-center gap-2 border rounded-full p-1.5 backdrop-blur-md bg-white/[0.03] border-white/5">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="relative">
              <Link
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className={`relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-300 block decoration-transparent ${
                  isActive(item.href)
                    ? 'text-white'
                    : 'text-secondary hover:text-white'
                }`}
              >
                {item.label}
              </Link>
              {isActive(item.href) && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full z-0 bg-white/10"
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
            className="inline-block bg-primary hover:bg-[#ff8533] text-white px-6 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] transform hover:-translate-y-0.5 decoration-transparent"
          >
            Start with a conversation
          </a>
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
            className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-lg font-medium decoration-transparent ${
                    isActive(item.href) ? 'text-primary' : 'text-secondary hover:text-primary'
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
                className="block text-center bg-primary w-full py-3 rounded-full text-white font-bold decoration-transparent"
              >
                Start with a conversation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;