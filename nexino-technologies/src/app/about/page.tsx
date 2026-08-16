import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle, Target, Eye } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { CTASection } from '@/components/shared/CTASection';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { aboutVisuals, newVisuals } from '@/data/local-images';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Nexino Technologies combines innovation, strategy, research and engineering to help organisations transform, automate and grow.',
};

const principles = [
  { title: 'Innovation with purpose', description: 'We pursue new ideas when they solve real problems, not for novelty alone.' },
  { title: 'Engineering excellence', description: 'We hold ourselves to high technical standards in everything we build.' },
  { title: 'Business understanding', description: 'We take time to understand your organisation before recommending technology.' },
  { title: 'Continuous research', description: 'We stay current with emerging technologies and applied research.' },
  { title: 'Long-term partnership', description: 'We build relationships designed to grow alongside your organisation.' },
];

const expertise = [
  { number: '01', area: 'Software Engineering', detail: 'Custom web and mobile applications, SaaS products and digital platforms built with maintainable, scalable code.' },
  { number: '02', area: 'Artificial Intelligence', detail: 'Practical AI agents, automation systems and intelligent integrations that work within real operational constraints.' },
  { number: '03', area: 'Data and Analytics', detail: 'Data collection, cleaning, analysis and visualisation that turns raw information into evidence for decisions.' },
  { number: '04', area: 'Cloud Infrastructure', detail: 'Managed hosting, deployment environments and integration architecture that keeps systems reliable and connected.' },
  { number: '05', area: 'Embedded Engineering', detail: 'Firmware, hardware integration and connected device systems for industrial and commercial applications.' },
  { number: '06', area: 'Technical Research', detail: 'Structured investigation of technology options, prototypes and proofs of concept to de-risk investment decisions.' },
];

const industries = [
  'Business Technologies',
  'Mining Technologies',
  'Construction Technologies',
  'Health Technologies',
  'Intelligent Infrastructure',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20 bg-nexino-dark relative overflow-hidden"
        aria-labelledby="about-hero-heading"
      >
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '52px 52px',
            }}
          />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-nexino-blue/8 blur-[90px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-nexino-green/5 blur-[70px]" />
        </div>
        <Container className="relative">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
            <div className="max-w-3xl">
              <p className="text-nexino-green text-[11px] font-bold uppercase tracking-[0.18em] mb-5">
                About
              </p>
              <h1
                id="about-hero-heading"
                className="text-[2.4rem] sm:text-[3rem] lg:text-[3.5rem] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-6"
              >
                Engineering intelligent solutions for a changing world.
              </h1>
              <p className="text-[1.05rem] text-white/60 leading-[1.75] max-w-2xl">
                Nexino Technologies combines innovation, strategy, research and engineering to help
                organisations transform, automate and grow.
              </p>
            </div>

            <div className="relative h-[300px] lg:h-[420px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image src={aboutVisuals.hero ?? newVisuals.homeHero} alt="" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-nexino-dark/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-nexino-dark/70 px-4 py-3 backdrop-blur">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-nexino-green">
                  Based in Kigali
                </p>
                <p className="mt-1 text-[12.5px] text-white/65">
                  A team focused on practical software, AI, data and connected engineering.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Who We Are */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="who-heading">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <AnimatedSection>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-nexino-blue mb-4">
                Who We Are
              </p>
              <h2
                id="who-heading"
                className="text-[2rem] sm:text-[2.4rem] font-bold text-nexino-dark tracking-[-0.025em] leading-[1.1]"
              >
                A forward-thinking technology company.
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1} direction="left">
              <div className="space-y-4 lg:pt-12">
                <div className="relative overflow-hidden rounded-2xl border border-nexino-border bg-nexino-off-white aspect-[16/10]">
                  <Image src={aboutVisuals.office} alt="" fill className="object-cover" />
                </div>
                <p className="text-[0.95rem] text-nexino-text-secondary leading-[1.75]">
                  Nexino Technologies is a technology company that combines software engineering,
                  artificial intelligence, data, cloud infrastructure, embedded systems and
                  technical research to solve practical business and industry challenges.
                </p>
                <p className="text-[0.95rem] text-nexino-text-secondary leading-[1.75]">
                  We help organisations transform ideas, operational challenges and complex
                  processes into practical, scalable technology solutions.
                </p>
                <p className="text-[0.95rem] text-nexino-text-secondary leading-[1.75]">
                  We are based in Kicukiro, Kigali, Rwanda, and work with organisations locally
                  and internationally.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Vision and Mission */}
      <section className="py-20 lg:py-24 bg-nexino-off-white" aria-labelledby="vision-mission-heading">
        <Container>
          <AnimatedSection className="mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-nexino-blue mb-3">
              Direction and Purpose
            </p>
            <h2
              id="vision-mission-heading"
              className="text-[2rem] sm:text-[2.4rem] font-bold text-nexino-dark tracking-[-0.025em]"
            >
              Where we are heading.
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection>
              <div className="bg-white rounded-xl border border-nexino-border p-8 h-full space-y-5">
                <div className="w-10 h-10 rounded-lg bg-nexino-blue/8 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-nexino-blue" aria-hidden="true" />
                </div>
                <h3 className="text-[1.1rem] font-bold text-nexino-dark">Vision</h3>
                <p className="text-[0.92rem] text-nexino-text-secondary leading-[1.75]">
                  To become a globally recognised technology company creating intelligent systems
                  that improve how people, businesses and machines interact with the world.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.08}>
              <div className="bg-nexino-dark rounded-xl p-8 h-full space-y-5">
                <div className="w-10 h-10 rounded-lg bg-nexino-blue/15 flex items-center justify-center">
                  <Target className="w-5 h-5 text-nexino-blue" aria-hidden="true" />
                </div>
                <h3 className="text-[1.1rem] font-bold text-white">Mission</h3>
                <p className="text-[0.92rem] text-white/60 leading-[1.75]">
                  To research, engineer and commercialise innovative technologies that combine
                  artificial intelligence, software, hardware and intelligent infrastructure to
                  solve real-world challenges.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="principles-heading">
        <Container>
          <AnimatedSection className="mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-nexino-blue mb-3">
              Principles
            </p>
            <h2
              id="principles-heading"
              className="text-[2rem] sm:text-[2.4rem] font-bold text-nexino-dark tracking-[-0.025em]"
            >
              How we operate.
            </h2>
            <p className="text-nexino-text-secondary text-[0.95rem] mt-3 max-w-lg leading-[1.7]">
              These principles guide the decisions we make, the work we deliver and the
              relationships we build.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
            {principles.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.06}>
                <div
                  className="flex gap-4 p-6 bg-nexino-off-white rounded-xl border border-nexino-border hover:border-nexino-blue transition-colors"
                  role="listitem"
                >
                  <CheckCircle
                    className="w-4 h-4 text-nexino-green shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-bold text-nexino-dark text-[14px] mb-1.5">{p.title}</h3>
                    <p className="text-[13px] text-nexino-text-secondary leading-[1.65]">
                      {p.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Areas of Expertise */}
      <section className="py-20 lg:py-28 bg-nexino-off-white" aria-labelledby="expertise-heading">
        <Container>
          <AnimatedSection className="mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-nexino-blue mb-3">
              Expertise
            </p>
            <h2
              id="expertise-heading"
              className="text-[2rem] sm:text-[2.4rem] font-bold text-nexino-dark tracking-[-0.025em]"
            >
              Areas of technical capability.
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
            {expertise.map((e, i) => (
              <AnimatedSection key={e.number} delay={i * 0.06}>
                <div
                  className="bg-white rounded-xl border border-nexino-border p-6 space-y-3 hover:border-nexino-blue transition-colors"
                  role="listitem"
                >
                  <span
                    className="text-[2.2rem] font-bold select-none"
                    style={{ color: '#E4E7EC' }}
                    aria-hidden="true"
                  >
                    {e.number}
                  </span>
                  <h3 className="text-[1rem] font-bold text-nexino-dark">{e.area}</h3>
                  <p className="text-[13px] text-nexino-text-secondary leading-[1.65]">
                    {e.detail}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Industry Focus */}
      <section className="py-20 lg:py-24 bg-nexino-dark" aria-labelledby="focus-heading">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-nexino-green text-[11px] font-bold uppercase tracking-[0.18em] mb-4">
                Industry Focus
              </p>
              <h2
                id="focus-heading"
                className="text-[2rem] sm:text-[2.4rem] font-bold text-white tracking-[-0.025em] leading-[1.1]"
              >
                Sectors we are actively working in and exploring.
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1} direction="left">
              <ul className="space-y-0 divide-y divide-white/8" role="list">
                {industries.map((ind, i) => (
                  <li
                    key={ind}
                    className="flex items-center gap-4 py-4"
                  >
                    <span className="w-7 h-7 rounded-full bg-nexino-blue/15 flex items-center justify-center text-[11px] font-bold text-nexino-blue shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-semibold text-[14px] text-white">{ind}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to work with us?"
        description="Tell us about your project and we will help shape the right approach."
        primaryCta={{ label: 'Start a Project', href: '/contact?type=project' }}
        secondaryCta={{ label: 'Explore Services', href: '/services' }}
      />
    </>
  );
}
