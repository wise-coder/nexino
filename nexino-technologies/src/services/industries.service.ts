/**
 * Industries service — prepares for NestJS endpoints:
 * GET /api/industries
 * GET /api/industries/:slug
 */

import type { Industry } from '@/types/industry';
import { industries, getIndustryBySlug } from '@/data/industries';
import { apiRequest, isApiConfigured } from './api-client';

export async function fetchIndustries(): Promise<Industry[]> {
  if (isApiConfigured()) {
    return apiRequest<Industry[]>('/industries');
  }
  return industries;
}

export async function fetchIndustryBySlug(slug: string): Promise<Industry | undefined> {
  if (isApiConfigured()) {
    return apiRequest<Industry>(`/industries/${slug}`).catch(() => undefined);
  }
  return getIndustryBySlug(slug);
}
