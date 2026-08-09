import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { MarqueeSection } from '@/components/home/MarqueeSection';
import { CompanyIntroSection } from '@/components/home/CompanyIntroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { FeaturedSolutionsSection } from '@/components/home/FeaturedSolutionsSection';
import { TechnologyMarqueeSection } from '@/components/home/TechnologyMarqueeSection';
import { WhyNexinoSection } from '@/components/home/WhyNexinoSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { IndustriesSection } from '@/components/home/IndustriesSection';
import { SelectedWorkSection } from '@/components/home/SelectedWorkSection';
import { CTASection } from '@/components/shared/CTASection';

export const metadata: Metadata = {
  title: 'Nexino Technologies Ltd - Intelligent Systems Built for Growth',
  description:
    'Nexino Technologies Ltd helps businesses and organisations design, build and improve intelligent systems, digital platforms, automation tools, cloud solutions and connected technology products.',
  openGraph: {
    title: 'Nexino Technologies Ltd - Intelligent Systems Built for Growth',
    description: 'A practical technology partner for organisations that want to build, improve or automate.',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <CompanyIntroSection />
      <ServicesSection />
      <FeaturedSolutionsSection />
      <TechnologyMarqueeSection />
      <WhyNexinoSection />
      <ProcessSection />
      <IndustriesSection />
      <SelectedWorkSection />
      <CTASection
        label="Ready to start?"
        title="Ready to build or improve your technology capability?"
        description="Tell Nexino what your organisation needs. We can help you plan, engineer, develop and support the right solution."
        primaryCta={{ label: 'Start a Project', href: '/contact?type=project' }}
        secondaryCta={{ label: 'Contact Nexino', href: '/contact' }}
      />
    </>
  );
}


