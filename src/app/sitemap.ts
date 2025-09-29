
import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://giovannibertolazzi.com';

  const staticRoutes = [
    '/',
    '/about',
    '/agenda',
    '/media',
    '/news',
    '/discography',
    '/identity',
    '/contact',
    '/privacy-policy',
    '/terms-of-service',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '/' ? 1 : 0.8,
  }));

  return sitemapEntries;
}

    