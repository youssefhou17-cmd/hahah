import { MetadataRoute } from 'next';

const baseUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'https://gosharktv.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/eng`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified: new Date(),
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      priority: 0.3,
    },
    {
      url: `${baseUrl}/dmca`,
      lastModified: new Date(),
      priority: 0.3,
    },
  ];
}