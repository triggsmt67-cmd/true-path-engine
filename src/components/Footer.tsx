
import React from 'react';
import { Linkedin, Twitter, Mail, Instagram } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants/links';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-black/5 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-start">

          <div className="md:col-span-4 text-center md:text-left">
            <h4 className="font-serif font-bold text-2xl tracking-tight text-brand-navy mb-4">
              True Path <span className="text-brand-accent">Digital</span>
            </h4>
            <p className="text-sm text-text-secondary/80 max-w-xs mx-auto md:mx-0 leading-relaxed font-bold italic uppercase tracking-wider">
              No noise. Just signal.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col items-center justify-center gap-6">
            <div className="flex items-center gap-4">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-standard bg-surface border border-black/5 text-text-secondary hover:text-brand-accent hover:border-brand-accent/50 transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-standard bg-surface border border-black/5 text-text-secondary hover:text-brand-accent hover:border-brand-accent/50 transition-all shadow-sm"
                aria-label="X"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-standard bg-surface border border-black/5 text-text-secondary hover:text-brand-accent hover:border-brand-accent/50 transition-all shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="p-3 rounded-standard bg-surface border border-black/5 text-text-secondary hover:text-brand-accent hover:border-brand-accent/50 transition-all shadow-sm"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="text-[10px] font-bold text-text-secondary/40 uppercase tracking-[0.3em]">
              Diagnostic-First Framework v2.0
            </div>
          </div>

          <div className="md:col-span-4 text-center md:text-right">
            <p className="text-sm text-text-secondary/60 mb-1 font-bold uppercase tracking-wider">&copy; {new Date().getFullYear()} True Path Digital LLC. All rights reserved.</p>
            <p className="text-xs text-text-secondary/40 font-bold uppercase tracking-widest">Based in Missoula, MT. Built for the trades.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
