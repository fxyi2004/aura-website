import { MetadataRoute } from 'next';
import { allProducts } from './data/products';
import { scenarios as allScenarios } from './data/scenarios';

const BASE_URL = 'https://www.aura-is.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const productUrls = allProducts.map((p) => ({
    url: `${BASE_URL}/products/${p.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const scenarioUrls = allScenarios.map((s) => ({
    url: `${BASE_URL}/scenarios/${s.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/products`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/scenarios`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/cases`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    ...productUrls,
    ...scenarioUrls,
  ];
}
