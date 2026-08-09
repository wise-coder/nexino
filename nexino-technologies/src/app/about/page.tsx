import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CTASection } from '@/components/shared/CTASection';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { CheckCircle, Target, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Nexino Technologies Ltd',
  description:
    'Nexino Technologies Ltd is a practical technology partner that listens before proposing and supports organisations from planning through launch.',
};

const principles = [
  { title: 'Listen first', description: 'We begin by understanding your goals, users and constraints before making recommendations.' },
  { title: 'Clear requirements', description: 'We define what the project should do, who will use it and what success should look like.' },
  { title: 'Practical delivery', description: 'We focus on solutions that are maintainable, usable and realistic to support.' },
  { title: 'Ongoing support', description: 'We can continue with hosting, maintenance, improvements and technical assistance after launch.' },
  { title: 'Business understanding', description: 'We translate technical work into practical outcomes for organisations and teams.' },
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
      <section className="relative pt-32 pb-20 lg:pb-28 bg-nexino-dark overflow-hidden" aria-labelledby="about-hero-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-nexino-blue/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-nexino-green/5 blur-3xl" />
        </div>
        <Container className="relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-2xl">
              <p className="text-nexino-green text-xs font-bold uppercase tracking-[0.15em] mb-5">About</p>
              <h1 id="about-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-8">
                A practical technology partner for organisations ready to improve.
              </h1>
              <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
                Nexino Technologies Ltd listens before proposing, combines business understanding with technical development and supports clients from planning through launch.
              </p>
            </div>

            <AnimatedSection delay={0.1} direction="left">
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl shadow-black/20 aspect-[4/5]">
                <Image
                  src="/images/new/software-developer-desk.jpg"
                  alt="Developer working at a desk with a laptop and technical setup"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-nexino-dark/65" />
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-between text-white">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold backdrop-blur">
                    <span className="w-2 h-2 rounded-full bg-nexino-green" aria-hidden="true" />
                    Kigali based, globally minded
                  </span>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold leading-tight max-w-md">
                      Collaboration, research and delivery move together.
                    </h2>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-white" aria-labelledby="who-we-are-heading">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <SectionHeading
                label="Who We Are"
                title="A practical technology partner that listens before proposing."
                titleClassName="text-4xl sm:text-5xl"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.1} direction="left">
              <div className="space-y-5">
                <p className="text-lg text-nexino-text-secondary leading-relaxed">
                  Nexino Technologies Ltd helps organisations design, build and improve websites, digital platforms, business systems, automation tools and connected technology solutions.
                </p>
                <p className="text-nexino-text-secondary leading-relaxed">
                  We work through planning, design, development, launch and ongoing support so the solution fits the organisation, not just the brief.
                </p>
                <p className="text-nexino-text-secondary leading-relaxed">
                  We are based in Kigali, Rwanda, and work with organisations locally and internationally.
                </p>

                <div className="relative overflow-hidden rounded-2xl border border-nexino-border bg-nexino-off-white shadow-lg shadow-nexino-dark/5 aspect-[16/10]">
                  <Image
                    src="/images/new/laptop-coffee.jpg"
                    alt="Modern laptop workspace with coffee and plants on a wooden table"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-nexino-dark/65" />
                  <div className="absolute inset-0 p-5 lg:p-6 flex items-end text-white">
                    <p className="text-sm font-semibold text-white/85 max-w-md">
                      Clear communication and practical progress updates.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-24 bg-nexino-off-white" aria-labelledby="vision-mission-heading">
        <Container>
          <AnimatedSection className="mb-14 text-center">
            <h2 id="vision-mission-heading" className="text-4xl sm:text-5xl font-bold text-nexino-text">
              What clients can expect.
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-white rounded-2xl border border-nexino-border p-8 lg:p-10 h-full space-y-5">
                <div className="w-12 h-12 rounded-xl bg-nexino-blue/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-nexino-blue" aria-hidden="true" />
                </div>
              <h3 className="text-2xl font-bold text-nexino-text">Vision</h3>
              <p className="text-nexino-text-secondary leading-relaxed text-lg">
                Clear advice on what is possible, what the project needs and the best practical next step.
              </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="bg-nexino-dark rounded-2xl p-8 lg:p-10 h-full space-y-5">
                <div className="w-12 h-12 rounded-xl bg-nexino-blue/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-nexino-blue" aria-hidden="true" />
                </div>
              <h3 className="text-2xl font-bold text-white">Mission</h3>
              <p className="text-white/70 leading-relaxed text-lg">
                Clear requirements before development, progress updates during the work, review points during delivery and support options after launch.
              </p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-white" aria-labelledby="principles-heading">
        <Container>
          <AnimatedSection className="mb-14">
            <SectionHeading
              label="Principles"
              title="How we operate."
              description="These principles guide the decisions we make, the work we deliver and the relationships we build."
              titleClassName="text-4xl sm:text-5xl"
            />
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {principles.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.07}>
                <div className="flex gap-4 p-6 bg-nexino-off-white rounded-2xl border border-nexino-border" role="listitem">
                  <CheckCircle className="w-5 h-5 text-nexino-green shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-nexino-text mb-2">{p.title}</h3>
                    <p className="text-sm text-nexino-text-secondary leading-relaxed">{p.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-nexino-off-white" aria-labelledby="expertise-heading">
        <Container>
          <AnimatedSection className="mb-14">
            <SectionHeading
              label="Expertise"
              title="Areas of technical capability."
              titleClassName="text-4xl sm:text-5xl"
            />
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {expertise.map((e, i) => (
              <AnimatedSection key={e.number} delay={i * 0.07}>
                <div className="bg-white rounded-2xl border border-nexino-border p-7 space-y-4 hover:border-nexino-blue transition-colors" role="listitem">
                  <span className="text-4xl font-bold text-nexino-border select-none" aria-hidden="true">
                    {e.number}
                  </span>
                  <h3 className="text-xl font-bold text-nexino-text">{e.area}</h3>
                  <p className="text-sm text-nexino-text-secondary leading-relaxed">{e.detail}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-24 bg-white" aria-labelledby="focus-heading">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-black text-xs font-bold uppercase tracking-[0.15em] mb-4">
                Industry Focus
              </p>
              <h2 id="focus-heading" className="text-4xl sm:text-5xl font-bold text-nexino-text leading-tight">
                Sectors we are actively working in and exploring.
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1} direction="left">
              <div className="grid gap-6">
                <div className="relative overflow-hidden rounded-2xl border border-nexino-border aspect-[16/9] shadow-lg shadow-nexino-dark/5">
                  <Image
                    src="/images/new/industrial-network.jpg"
                    alt="Industrial networking technology illustration with connected systems"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                <div className="absolute inset-0 bg-nexino-dark/50" />
                <div className="absolute inset-0 p-5 lg:p-6 flex items-end text-white">
                  <div>
                    <p className="text-sm font-semibold text-white/85 max-w-md">
                      We adapt the same core capabilities to business, infrastructure, mining, construction and health contexts.
                    </p>
                  </div>
                </div>
              </div>

                <ul className="space-y-4" role="list">
                  {industries.map((ind, i) => (
                    <li key={ind} className="flex items-center gap-4 py-4 border-b border-nexino-border last:border-b-0">
                      <span className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-xs font-bold text-white shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-semibold text-nexino-text">{ind}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to work with us?"
        description="Tell us about your project and we will help shape the right approach."
        primaryCta={{ label: 'Start a Project', href: '/contact?type=project' }}
        secondaryCta={{ label: 'View Services', href: '/services' }}
      />
    </>
  );
}
