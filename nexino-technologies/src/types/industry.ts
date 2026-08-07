import type { SeoMeta, FaqItem } from './common';

export interface IndustryChallenge {
  title: string;
  description: string;
}

export interface IndustryApplication {
  title: string;
  description: string;
}

export interface IndustryCapability {
  title: string;
  description: string;
}

export interface IndustrySystemComponent {
  label: string;
  description: string;
}

export interface Industry {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  heroDescription: string;
  challenges: IndustryChallenge[];
  applications: IndustryApplication[];
  capabilities: IndustryCapability[];
  systemComponents: IndustrySystemComponent[];
  relatedServiceSlugs: string[];
  responsibleUseStatement: string;
  faqs?: FaqItem[];
  seo: SeoMeta;
  accentColor?: string;
  icon?: string;
}
