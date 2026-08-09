/**
 * Projects service - prepares for NestJS endpoints:
 * GET /api/projects
 * GET /api/projects/:slug
 */

import type { Project } from '@/types/project';
import { projects, getProjectBySlug } from '@/data/projects';
import { apiRequest, isApiConfigured } from './api-client';

export async function fetchProjects(): Promise<Project[]> {
  if (isApiConfigured()) {
    return apiRequest<Project[]>('/projects');
  }
  return projects;
}

export async function fetchProjectBySlug(slug: string): Promise<Project | undefined> {
  if (isApiConfigured()) {
    return apiRequest<Project>(`/projects/${slug}`).catch(() => undefined);
  }
  return getProjectBySlug(slug);
}

