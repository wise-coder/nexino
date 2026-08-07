import type { SeoMeta } from './common';

export type ProjectType =
  | 'Client Project'
  | 'Internal Product'
  | 'Prototype'
  | 'Concept'
  | 'Research Project'
  | 'Work in Progress';

export type ProjectStatus = 'Active' | 'Completed' | 'In Development' | 'Research Phase' | 'Concept Stage';

export type ProjectCategory =
  | 'Digital Products'
  | 'AI and Automation'
  | 'Cloud and Infrastructure'
  | 'Data and Research'
  | 'Engineering Systems';

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ProjectTechnology {
  name: string;
  category: string;
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  type: ProjectType;
  category: ProjectCategory;
  status: ProjectStatus;
  tagline: string;
  overview: string;
  challenge: string;
  proposedSolution: string;
  features: ProjectFeature[];
  processSteps: ProjectProcessStep[];
  technologies: ProjectTechnology[];
  screenshots: ProjectScreenshot[];
  currentStatus: string;
  disclaimer?: string;
  relatedProjectSlugs: string[];
  seo: SeoMeta;
  coverImage?: string;
  accentColor?: string;
}
