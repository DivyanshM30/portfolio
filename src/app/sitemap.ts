import type { MetadataRoute } from 'next';
import { portfolioProjects } from '@/lib/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  // Omit lastModified until actual content modification dates are tracked.
  return [
    { url: 'https://divyanshm.dev/', changeFrequency: 'monthly', priority: 1 },
    ...portfolioProjects.map((project) => ({
      url: `https://divyanshm.dev/projects/${project.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
