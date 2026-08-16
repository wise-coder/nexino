/**
 * Services service - prepares for NestJS endpoints:
 * GET /api/services
 * GET /api/services/:slug
 */

import type { Service } from '@/types/service';
import { allServices as services, getServiceBySlug } from '@/data/services';
import { apiRequest, isApiConfigured } from './api-client';

export async function fetchServices(): Promise<Service[]> {
  if (isApiConfigured()) {
    return apiRequest<Service[]>('/services');
  }
  return services;
}

export async function fetchServiceBySlug(slug: string): Promise<Service | undefined> {
  if (isApiConfigured()) {
    return apiRequest<Service>(`/services/${slug}`).catch(() => undefined);
  }
  return getServiceBySlug(slug);
}

