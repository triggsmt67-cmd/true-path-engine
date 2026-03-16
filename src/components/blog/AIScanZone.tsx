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
      className="ai-summary-zone mb-10 rounded-3xl border overflow-hidden transition-all bg-primary/5 border-primary/20 dark:bg-primary/5 dark:border-primary/20"
      data-ai-summary="true"
    >
      <div className="px-6 py-3 border-b flex items-center gap-2 bg-primary/10 border-primary/10 dark:bg-primary/10 dark:border-primary/10">
        <Zap className="w-4 h-4 text-primary" />
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary">Protocol Summary</span>
      </div>

      <div className="p-8 space-y-8">
        {aiQuickAnswer && (
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-tighter text-gray-900 dark:text-white">Executive Summary</h4>
            <p className="text-lg italic leading-relaxed text-slate-700 dark:text-gray-300">
              &ldquo;{aiQuickAnswer}&rdquo;
            </p>
          </div>
        )}

        {aiTakeaways && aiTakeaways.length > 0 && (
          <div className="grid md:grid-cols-2 gap-4">
            {aiTakeaways.map((takeaway, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-slate-600 dark:text-gray-400">{takeaway}</span>
              </div>
            ))}
          </div>
        )}

        {aiFaqs && aiFaqs.length > 0 && (
          <div className="pt-6 border-t border-orange-100 dark:border-white/5">
            <h4 className="text-sm font-bold uppercase tracking-tighter mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
              <HelpCircle className="w-4 h-4 text-primary" />
              Quick Intelligence
            </h4>
            <div className="space-y-4">
              {aiFaqs.map((faq, i) => (
                <div key={i} className="p-4 rounded-xl bg-white border border-slate-100 dark:bg-white/5 dark:border-transparent">
                  <div className="font-bold text-sm mb-1 text-slate-900 dark:text-white">{faq.question}</div>
                  <div className="text-sm text-slate-600 dark:text-gray-400">{faq.answer}</div>
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
