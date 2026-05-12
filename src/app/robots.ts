import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://truepath406.com/sitemap.xml',
    host: 'https://truepath406.com',
  };
}
