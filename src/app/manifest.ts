import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'True Path Digital',
    short_name: 'True Path',
    description: 'Marketing Intelligence & AI Strategy',
    start_url: '/',
    display: 'standalone',
    background_color: '#fafafa', // bg-background
    theme_color: '#0a0f1c', // brand-navy
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
