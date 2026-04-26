"use client";

import React from 'react';
import { Zap, CheckCircle2, HelpCircle } from 'lucide-react';

interface AIScanZoneProps {
  aiQuickAnswer?: string;
  aiTakeaways?: string[];
  aiFaqs?: { question: string; answer: string }[];
}

const AIScanZone: React.FC<AIScanZoneProps> = ({ aiQuickAnswer, aiTakeaways, aiFaqs }) => {
  if (!aiQuickAnswer && !aiTakeaways?.length && !aiFaqs?.length) return null;

  return (
    <div 
      className="ai-summary-zone mb-10 rounded-standard border-2 overflow-hidden transition-all bg-brand-accent/5 border-brand-accent/10 shadow-sm"
      data-ai-summary="true"
    >
      <div className="px-6 py-4 border-b-2 flex items-center gap-2 bg-brand-accent/10 border-brand-accent/10">
        <Zap className="w-4 h-4 text-brand-accent" />
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-accent">Protocol Summary</span>
      </div>

      <div className="p-8 space-y-8">
        {aiQuickAnswer && (
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-brand-navy">Executive Summary</h4>
            <p className="text-lg font-bold italic leading-relaxed text-brand-navy/80 uppercase tracking-wider">
              &ldquo;{aiQuickAnswer}&rdquo;
            </p>
          </div>
        )}

        {aiTakeaways && aiTakeaways.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6">
            {aiTakeaways.map((takeaway, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <span className="text-sm font-bold text-brand-navy/70 uppercase tracking-widest">{takeaway}</span>
              </div>
            ))}
          </div>
        )}

        {aiFaqs && aiFaqs.length > 0 && (
          <div className="pt-8 border-t-2 border-brand-accent/10">
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2 text-brand-navy">
              <HelpCircle className="w-4 h-4 text-brand-accent" />
              Quick Intelligence
            </h4>
            <div className="space-y-4">
              {aiFaqs.map((faq, i) => (
                <div key={i} className="p-5 rounded-xl bg-surface border-2 border-black/5 shadow-sm">
                  <div className="font-bold text-sm mb-2 text-brand-navy uppercase tracking-widest">{faq.question}</div>
                  <div className="text-sm font-bold text-brand-navy/60 uppercase tracking-widest">{faq.answer}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIScanZone;
