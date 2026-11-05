import type { MetadataRoute } from 'next';

import { isPublished, site } from '@/lib/site';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap {
 if (!isPublished) return [];
 return ['', '/servicios', '/temporarios', '/contacto', '/nosotras'].map(path => ({ url: `${site.url}${path}`, changeFrequency: 'monthly' as const, priority: path === '' ? 1 : 0.7 }));
}
