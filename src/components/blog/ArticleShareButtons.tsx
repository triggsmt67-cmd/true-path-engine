"use client";

import React, { useState } from 'react';
import { Twitter, Linkedin, Mail, Link as LinkIcon, Bookmark } from 'lucide-react';

interface ArticleShareButtonsProps {
  title: string;
  slug: string;
}

const ArticleShareButtons: React.FC<ArticleShareButtonsProps> = ({ title, slug }) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = `https://truepath406.com/blog/${slug}`;

  const handleShare = (platform: 'twitter' | 'linkedin' | 'email' | 'copy') => {
    const text = `Check out this article: ${title}`;
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`, '_blank', 'noopener,noreferrer');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank', 'noopener,noreferrer');
        break;
      case 'email':
        window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text + ' ' + shareUrl)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
    }
  };

  const buttons = [
    { id: 'twitter' as const, icon: Twitter },
    { id: 'linkedin' as const, icon: Linkedin },
    { id: 'email' as const, icon: Mail },
    { id: 'copy' as const, icon: LinkIcon },
  ];

  return (
    <div className="flex items-center gap-3">
      {buttons.map((item) => (
        <button
          key={item.id}
          onClick={() => handleShare(item.id)}
          className="p-3.5 rounded-full border transition-all group bg-white border-slate-200 text-slate-500 hover:text-primary hover:border-primary/50 dark:bg-white/[0.03] dark:border-white/10 dark:text-gray-400 dark:hover:text-white dark:hover:border-primary/50"
          title={item.id === 'copy' ? (copied ? 'Copied!' : 'Copy link') : `Share on ${item.id}`}
        >
          <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
        </button>
      ))}
      <div className="w-px h-6 mx-2 bg-slate-200 dark:bg-white/10" />
      <button className="p-3.5 rounded-full border transition-all group bg-white border-slate-200 text-slate-500 hover:text-primary hover:border-primary/50 dark:bg-white/[0.03] dark:border-white/10 dark:text-gray-400 dark:hover:text-primary dark:hover:border-primary/50">
        <Bookmark className="w-4 h-4 group-hover:fill-primary transition-all" />
      </button>
    </div>
  );
};

export default ArticleShareButtons;
