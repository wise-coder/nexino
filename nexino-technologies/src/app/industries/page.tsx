import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CTASection } from '@/components/shared/CTASection';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { industries } from '@/data/industries';
import { industryImages } from '@/data/image-assets';

export const metadata: Metadata = {
  title: 'Industry Solutions',
  description:
    'Nexino Technologies Ltd applies software, AI, data and engineering expertise across business, mining, construction, health and infrastructure sectors.',
};

const crossCapabilities = [
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
      <section className="relative pt-32 pb-20 lg:pb-28 bg-nexino-dark overflow-hidden" aria-labelledby="industries-page-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-nexino-blue/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-nexino-green/5 blur-3xl" />
        </div>
        <Container className="relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-3xl">
              <p className="text-nexino-green text-xs font-bold uppercase tracking-[0.15em] mb-5">
                Industries
              </p>
              <h1 id="industries-page-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Technology adapted to real environments.
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                We explore and apply technology solutions across five industry focus areas, adapting our capabilities to the specific challenges and constraints of each sector.
              </p>
            </div>

            <AnimatedSection delay={0.1} direction="left">
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 shadow-2xl shadow-black/20 aspect-[4/3]">
                <Image
                  src="/images/new/industrial-network.jpg"
                  alt="Industrial networking technology illustration with connected systems"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-nexino-dark/65" />
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-between text-white">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold backdrop-blur">
                    <span className="w-2 h-2 rounded-full bg-nexino-green" aria-hidden="true" />
                    Built for real-world conditions
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-white/60">Sector design</p>
                    <h2 className="mt-2 text-2xl font-bold leading-tight max-w-md">
                      We tailor the same core capabilities to very different operating environments.
                    </h2>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="py-10 bg-nexino-navy border-b border-white/10">
        <Container>
          <div className="flex gap-4 items-start">
            <div className="w-1 rounded-full bg-nexino-blue shrink-0 self-stretch" aria-hidden="true" />
            <p className="text-white/70 text-sm leading-relaxed">
              <strong className="text-white">A note on our approach:</strong> The solutions presented on these pages are possible technology applications, not completed client deployments unless explicitly stated. We present these as the kinds of systems we can design, research or build - not claims about delivered outcomes.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-white" aria-labelledby="industry-areas-heading">
        <Container>
          <AnimatedSection className="mb-14">
            <h2 id="industry-areas-heading" className="text-3xl sm:text-4xl font-bold text-nexino-text">
              Five focus areas.
            </h2>
          </AnimatedSection>
          <div className="space-y-6" role="list">
            {industries.map((industry, i) => {
              const image = industryImages[industry.slug as keyof typeof industryImages];

              return (
                <AnimatedSection key={industry.id} delay={i * 0.06}>
                  <div className="grid lg:grid-cols-3 gap-8 p-8 lg:p-10 bg-nexino-off-white rounded-2xl border border-nexino-border hover:border-nexino-blue transition-all" role="listitem">
                    <div className="space-y-4 lg:col-span-1">
                      <div className="relative overflow-hidden rounded-2xl aspect-[16/10] border border-nexino-border">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 30vw"
                        />
                        <div className="absolute inset-0 bg-nexino-dark/65" />
                        <div className="absolute inset-0 p-5 flex items-end text-white">
                          <span className="w-12 h-12 rounded-xl bg-black flex items-center justify-center font-bold text-lg shadow-lg text-white">
                            {industry.shortTitle.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-nexino-text">{industry.title}</h3>
                      <p className="text-nexino-text-secondary">{industry.tagline}</p>
                      <Link
                        href={`/industries/${industry.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-nexino-blue hover:gap-3 transition-all"
                      >
                        Explore Industry
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </Link>
                    </div>
                    <div className="lg:col-span-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-nexino-text-secondary mb-4">
                        Possible applications
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-2.5" role="list">
                        {industry.applications.map((app) => (
                          <li key={app.title} className="flex items-center gap-2 text-sm text-nexino-text-secondary">
                            <span className="w-1.5 h-1.5 rounded-full bg-nexino-blue shrink-0" aria-hidden="true" />
                            {app.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-24 bg-nexino-off-white" aria-labelledby="cross-capabilities-heading">
        <Container>
          <AnimatedSection className="mb-14">
            <SectionHeading
              label="Across all industries"
              title="Capabilities that apply everywhere."
              description="These services form the foundation of our industry-specific work."
              titleClassName="text-3xl sm:text-4xl"
            />
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {crossCapabilities.map((cap, i) => (
              <AnimatedSection key={cap.title} delay={i * 0.06}>
                <div className="bg-white rounded-xl border border-nexino-border p-6 space-y-2" role="listitem">
                  <h3 className="font-bold text-nexino-text">{cap.title}</h3>
                  <p className="text-sm text-nexino-text-secondary leading-relaxed">{cap.description}</p>
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
