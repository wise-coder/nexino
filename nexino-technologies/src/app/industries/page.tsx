import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { CTASection } from '@/components/shared/CTASection';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { industries } from '@/data/industries';
import { newVisuals } from '@/data/local-images';

export const metadata: Metadata = {
  title: 'Industry Solutions',
  description:
    'Nexino Technologies applies software, AI, data and engineering expertise across business, mining, construction, health and infrastructure sectors.',
};

const cross = [
  { title: 'Custom application development', description: 'Industry-specific platforms built around operational realities.' },
  { title: 'Data collection and analytics', description: 'Capture, organise and analyse operational data from any environment.' },
  { title: 'AI and automation', description: 'Intelligent workflows and communication systems for sector-specific processes.' },
  { title: 'Embedded systems', description: 'Sensor integration and firmware for hardware-dependent environments.' },
  { title: 'Cloud and infrastructure', description: 'Reliable, monitored hosting for mission-critical systems.' },
  { title: 'Technical research', description: 'Evidence-based investigation of technology options before you invest.' },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-nexino-dark relative overflow-hidden" aria-labelledby="industries-page-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-nexino-blue/8 blur-[90px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-nexino-green/5 blur-[70px]" />
        </div>
        <Container className="relative">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
            <div className="max-w-3xl">
              <p className="text-nexino-green text-[11px] font-bold uppercase tracking-[0.18em] mb-5">Industries</p>
              <h1 id="industries-page-heading" className="text-[2.4rem] sm:text-[3rem] lg:text-[3.5rem] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-6">
                Technology adapted to real environments.
              </h1>
              <p className="text-[1.05rem] text-white/60 leading-[1.75]">
                We explore and apply technology solutions across five industry focus areas, adapting
                our capabilities to the specific challenges and constraints of each sector.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[170px] lg:h-[210px] rounded-2xl overflow-hidden border border-white/10">
                <Image src={newVisuals.industriesPrimary} alt="" fill className="object-cover" />
              </div>
              <div className="relative h-[170px] lg:h-[210px] rounded-2xl overflow-hidden border border-white/10 mt-8">
                <Image src={newVisuals.industriesSecondary} alt="" fill className="object-cover" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Notice */}
      <section className="py-7 bg-nexino-navy border-b border-white/8">
        <Container>
          <div className="flex gap-4 items-start">
            <div className="w-0.5 rounded-full bg-nexino-blue shrink-0 self-stretch" aria-hidden="true" />
            <p className="text-white/60 text-[13px] leading-[1.7]">
              <strong className="text-white">A note on our approach:</strong> The solutions presented
              here are possible technology applications, not completed client deployments unless
              explicitly stated. We present these as the kinds of systems we can design, research
              or build — not claims about delivered outcomes.
            </p>
          </div>
        </Container>
      </section>

      {/* Industry panels */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="industry-areas-heading">
        <Container>
          <AnimatedSection className="mb-12">
            <p className="text-nexino-blue text-[11px] font-bold uppercase tracking-[0.18em] mb-3">Focus areas</p>
            <h2 id="industry-areas-heading" className="text-[2rem] sm:text-[2.4rem] font-bold text-nexino-dark tracking-[-0.025em]">
              Five focus areas.
            </h2>
          </AnimatedSection>

          <div className="border-t border-nexino-border" role="list">
            {industries.map((industry, i) => (
              <AnimatedSection key={industry.id} delay={i * 0.06}>
                <div className="grid lg:grid-cols-[1fr_1fr_auto] gap-6 lg:gap-10 py-8 border-b border-nexino-border items-start" role="listitem">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg gradient-nexino flex items-center justify-center text-white font-bold text-sm shadow-sm" aria-hidden="true">
                        {industry.shortTitle.charAt(0)}
                      </div>
                      <h3 className="text-[1.1rem] font-bold text-nexino-dark">{industry.title}</h3>
                    </div>
                    <p className="text-[13.5px] text-nexino-text-secondary leading-[1.7]">{industry.tagline}</p>
                  </div>

                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5" role="list">
                    {industry.applications.slice(0, 6).map((app) => (
                      <li key={app.title} className="flex items-center gap-2 text-[12.5px] text-nexino-text-secondary">
                        <span className="w-1 h-1 rounded-full bg-nexino-green shrink-0" aria-hidden="true" />
                        {app.title}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/industries/${industry.slug}`}
                    className="inline-flex items-center gap-2 text-[13px] font-semibold text-nexino-blue hover:gap-3 transition-all shrink-0 whitespace-nowrap"
                  >
                    Explore
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Cross capabilities */}
      <section className="py-20 lg:py-24 bg-nexino-off-white" aria-labelledby="cross-capabilities-heading">
        <Container>
          <AnimatedSection className="mb-12">
            <p className="text-nexino-blue text-[11px] font-bold uppercase tracking-[0.18em] mb-3">Across all industries</p>
            <h2 id="cross-capabilities-heading" className="text-[2rem] sm:text-[2.4rem] font-bold text-nexino-dark tracking-[-0.025em]">
              Capabilities that apply everywhere.
            </h2>
            <p className="text-nexino-text-secondary text-[0.95rem] mt-3 max-w-xl leading-[1.7]">
              These services form the foundation of our industry-specific work.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
            {cross.map((cap, i) => (
              <AnimatedSection key={cap.title} delay={i * 0.05}>
                <div className="bg-white rounded-xl border border-nexino-border p-5 space-y-2" role="listitem">
                  <h3 className="font-bold text-nexino-dark text-[13.5px]">{cap.title}</h3>
                  <p className="text-[12.5px] text-nexino-text-secondary leading-[1.65]">{cap.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Working in a specific industry?"
        description="Tell us your sector and operational challenge and we will identify what is achievable."
        primaryCta={{ label: 'Start a Conversation', href: '/contact?type=project' }}
        secondaryCta={{ label: 'View Our Services', href: '/services' }}
      />
    </>
  );
}
