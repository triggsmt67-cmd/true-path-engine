import { draftMode } from "next/headers";
import { GeistSans } from "geist/font/sans";
import "@/app/globals.css";
import { PreviewNotice } from "@/components/Globals/PreviewNotice/PreviewNotice";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "True Path Digital | Clear Thinking for Montana Business Owners",
  description: "Stop guessing. Start arriving. High-performance marketing intelligence, AI strategy, and conversion infrastructure for Montana businesses.",
  metadataBase: new URL('https://truepath406.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://truepath406.com',
    title: 'True Path Digital | Marketing Intelligence & AI Strategy',
    description: "Stop guessing. Start arriving. High-performance marketing intelligence, AI strategy, and conversion infrastructure for Montana businesses.",
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
      "description": "Stop guessing. Start arriving. High-performance marketing intelligence, AI strategy, and conversion infrastructure for Montana businesses."
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
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "MT",
        "addressCountry": "US"
      },
      "areaServed": {
        "@type": "State",
        "name": "Montana"
      },
      "sameAs": [
        "https://www.linkedin.com/in/trevor-riggs-marketing/"
      ]
    }
  ]
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode();
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={GeistSans.className} suppressHydrationWarning>
        {isEnabled && <PreviewNotice />}
        {children}
      </body>
    </html>
  );
}