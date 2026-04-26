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
    default: "Benchmark Automotive Service | Precision Auto Repair",
    template: "%s | Benchmark Automotive Service"
  },
  description: "Sophisticated automotive service for luxury and performance vehicles. Experience the benchmark of precision repair.",
  metadataBase: new URL('https://benchmarkauto.com'),
  alternates: {
    canonical: './',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://benchmarkauto.com',
    title: 'Benchmark Automotive Service | Precision & Heritage',
    description: "Sophisticated automotive service for luxury and performance vehicles. Experience the benchmark of precision repair.",
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
      "@id": "https://benchmarkauto.com/#website",
      "url": "https://benchmarkauto.com/",
      "name": "Benchmark Automotive Service",
      "description": "Sophisticated automotive service for luxury and performance vehicles.",
      "publisher": {
        "@id": "https://benchmarkauto.com/#organization"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://benchmarkauto.com/#organization",
      "name": "Benchmark Automotive Service",
      "url": "https://benchmarkauto.com/",
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