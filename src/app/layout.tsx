import { draftMode } from "next/headers";
import { Inter, Playfair_Display } from "next/font/google";
import "@/app/globals.css";
import { PreviewNotice } from "@/components/Globals/PreviewNotice/PreviewNotice";

import type { Metadata } from 'next';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "True Path Digital | Clear Thinking for Business Owners",
    template: "%s | True Path Digital"
  },
  description: "Stop guessing. Start arriving. High-performance marketing intelligence, AI strategy, and conversion infrastructure for businesses.",
  metadataBase: new URL('https://truepath406.com'),
  alternates: {
    canonical: './',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://truepath406.com',
    title: 'True Path Digital | Marketing Intelligence & AI Strategy',
    description: "Stop guessing. Start arriving. High-performance marketing intelligence, AI strategy, and conversion infrastructure for businesses.",
    images: [{
      url: 'https://admin.truepath406.com/wp-content/uploads/2025/12/Gemini_Generated_Image_gqrc0ygqrc0ygqrc.jpg',
      width: 1200,
      height: 630,
    }],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://truepath406.com/#website",
      "url": "https://truepath406.com/",
      "name": "True Path Digital",
      "description": "Stop guessing. Start arriving. High-performance marketing intelligence, AI strategy, and conversion infrastructure for businesses.",
      "publisher": {
        "@id": "https://truepath406.com/#organization"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://truepath406.com/#organization",
      "name": "True Path Digital",
      "url": "https://truepath406.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://admin.truepath406.com/wp-content/uploads/2025/12/Gemini_Generated_Image_gqrc0ygqrc0ygqrc.jpg"
      },
      "telephone": "+1-406-880-6992",
      "areaServed": {
        "@type": "State",
        "name": "Montana"
      },
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "MT",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://www.linkedin.com/in/trevor-riggs-marketing/"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://truepath406.com/#founder",
      "name": "Trevor Riggs",
      "url": "https://www.linkedin.com/in/trevor-riggs-marketing/",
      "worksFor": {
        "@id": "https://truepath406.com/#organization"
      }
    }
  ]
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode();
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans bg-background text-text-primary antialiased" suppressHydrationWarning>
        {isEnabled && <PreviewNotice />}
        {children}
      </body>
    </html>
  );
}