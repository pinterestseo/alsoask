import { type MetadataRoute } from 'next';
import { articles } from '@/data/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://peoplealsoask.com';

  // Generate article URLs
  const articleUrls = Object.keys(articles).map((slug) => ({
    url: `${baseUrl}/question/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8
  }));

  // Static pages
  const staticPages = [
    '',
    '/questions',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/category/technology',
    '/category/health',
    '/category/science',
    '/category/business'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.5
  }));

  return [...staticPages, ...articleUrls];
}