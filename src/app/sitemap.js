import { writing } from '../config/content';

const BASE = 'https://www.kunver.com';

export default function sitemap() {
  const articles = writing
    .filter((article) => article.published)
    .map((article) => ({
      url: `${BASE}${article.url}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    }));

  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE}/now`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${BASE}/build`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/websites`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...articles,
  ];
}
