import { MetadataRoute } from 'next';

const baseUrl = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'https://optictv.online';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/eng`,
      lastModified: new Date(),
      priority: 1.0,
    },
  ];
}