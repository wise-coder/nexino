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
  title: 'Nexino Technologies — Smart Solutions. Real Impact.',
  description:
    'Nexino Technologies builds software, AI, data systems and connected technologies that help organisations automate operations and grow.',
  openGraph: {
    title: 'Nexino Technologies — Smart Solutions. Real Impact.',
    description: 'Engineering intelligent solutions for a changing world.',
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
        title="Have a challenge technology can solve?"
        description="Tell us what you are building, improving or automating. We will help identify the next practical step."
        primaryCta={{ label: 'Start a Project', href: '/contact?type=project' }}
        secondaryCta={{ label: 'Contact Our Team', href: '/contact' }}
      />
    </>
  );
}
