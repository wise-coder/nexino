import type { SeoMeta, FaqItem, CtaButton } from './common';

export interface ServiceCapability {
  title: string;
  description?: string;
}

export interface ServiceProblem {
  title: string;
  description: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
  icon?: string;
}

export interface ServiceDeliveryStep {
  step: number;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  categorySlug: string;
  tagline: string;
  overview: string;
  heroDescription: string;
  problems: ServiceProblem[];
  capabilities: ServiceCapability[];
  benefits: ServiceBenefit[];
  deliverySteps: ServiceDeliveryStep[];
  relatedServiceSlugs: string[];
  faqs: FaqItem[];
  cta: CtaButton;
  seo: SeoMeta;
  icon?: string;
  accentColor?: string;
}

export interface ServiceCategory {
  id: string;
  slug: string;
  title: string;
  description: string;
  services: Service[];
  icon?: string;
}
