import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, AlertCircle } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { CTASection } from '@/components/shared/CTASection';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { industries, getIndustryBySlug } from '@/data/industries';
import { allServices as services } from '@/data/services';
import { getIndustryImage } from '@/data/local-images';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return industries.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: 'Industry Not Found' };
  return { title: industry.seo.title, description: industry.seo.description };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const related = services.filter((s) => industry.relatedServiceSlugs.includes(s.slug));
  const heroImage = getIndustryImage(industry.slug);

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-nexino-dark relative overflow-hidden" aria-labelledby="industry-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-nexino-blue/8 blur-[90px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-nexino-green/5 blur-[70px]" />
        </div>
        <Container className="relative">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: industry.title }]} theme="dark" className="mb-8" />
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
            <div className="max-w-3xl">
              <p className="text-nexino-green text-[11px] font-bold uppercase tracking-[0.18em] mb-4">Industry Focus</p>
              <h1 id="industry-heading" className="text-[2.4rem] sm:text-[3rem] lg:text-[3.5rem] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-6">{industry.title}</h1>
              <p className="text-[1.05rem] text-white/60 leading-[1.75] mb-8">{industry.heroDescription}</p>
              <Link href={`/contact?industry=${industry.slug}&type=project`} className="inline-flex items-center gap-2 bg-nexino-blue text-white font-semibold px-6 py-3.5 rounded-full text-[14px] hover:bg-[#0080d4] transition-colors">
                Discuss a Project
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>

            <div className="relative h-[300px] lg:h-[420px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image src={heroImage} alt="" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-nexino-dark/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-nexino-dark/70 px-4 py-3 backdrop-blur">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-nexino-green">
                  {industry.shortTitle}
                </p>
                <p className="mt-1 text-[12.5px] text-white/65">
                  A local image matched to the sector context.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Responsible use notice */}
      <div className="bg-nexino-navy border-b border-white/8">
        <Container className="py-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-nexino-blue/70 shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-white/50 text-[12.5px] leading-[1.65]">{industry.responsibleUseStatement}</p>
          </div>
        </Container>
      </div>

      {/* Challenges */}
      <section className="py-16 lg:py-20 bg-white" aria-labelledby="challenges-heading">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <p className="text-nexino-blue text-[11px] font-bold uppercase tracking-[0.18em] mb-4">Common challenges</p>
              <h2 id="challenges-heading" className="text-[1.7rem] sm:text-[2rem] font-bold text-nexino-dark tracking-[-0.025em] mb-5">Operational problems technology can address.</h2>
              <p className="text-[0.95rem] text-nexino-text-secondary leading-[1.75]">{industry.description}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1} direction="left">
              <ul className="space-y-3" role="list">
                {industry.challenges.map((ch) => (
                  <li key={ch.title} className="p-5 bg-nexino-off-white rounded-xl border border-nexino-border space-y-1.5">
                    <h3 className="font-bold text-nexino-dark text-[13.5px]">{ch.title}</h3>
                    <p className="text-[13px] text-nexino-text-secondary leading-[1.65]">{ch.description}</p>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Applications */}
      <section className="py-16 lg:py-20 bg-nexino-off-white" aria-labelledby="applications-heading">
        <Container>
          <AnimatedSection className="mb-10">
            <p className="text-nexino-blue text-[11px] font-bold uppercase tracking-[0.18em] mb-4">Possible applications</p>
            <h2 id="applications-heading" className="text-[1.7rem] sm:text-[2rem] font-bold text-nexino-dark tracking-[-0.025em]">What we can build for this sector.</h2>
            <p className="text-nexino-text-secondary text-[13.5px] mt-3 max-w-2xl leading-[1.7]">These are illustrative applications, not completed deployments unless explicitly stated.</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
            {industry.applications.map((app, i) => (
              <AnimatedSection key={app.title} delay={i * 0.05}>
                <div className="bg-white rounded-xl border border-nexino-border p-5 space-y-2.5 hover:border-nexino-blue transition-colors" role="listitem">
                  <div className="w-1.5 h-7 rounded-full gradient-nexino" aria-hidden="true" />
                  <h3 className="font-bold text-nexino-dark text-[13.5px]">{app.title}</h3>
                  <p className="text-[12.5px] text-nexino-text-secondary leading-[1.65]">{app.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-20 bg-white" aria-labelledby="ind-capabilities-heading">
        <Container>
          <AnimatedSection className="mb-10">
            <h2 id="ind-capabilities-heading" className="text-[1.7rem] sm:text-[2rem] font-bold text-nexino-dark tracking-[-0.025em]">Nexino capabilities for this sector.</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-5" role="list">
            {industry.capabilities.map((cap, i) => (
              <AnimatedSection key={cap.title} delay={i * 0.06}>
                <div className="flex gap-4 p-5 bg-nexino-off-white rounded-xl border border-nexino-border" role="listitem">
                  <div className="w-9 h-9 rounded-lg gradient-nexino flex items-center justify-center text-white text-[11px] font-bold shrink-0" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="font-bold text-nexino-dark text-[13.5px] mb-1">{cap.title}</h3>
                    <p className="text-[12.5px] text-nexino-text-secondary leading-[1.65]">{cap.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* System architecture */}
      <section className="py-16 lg:py-20 bg-nexino-dark" aria-labelledby="architecture-heading">
        <Container>
          <AnimatedSection className="mb-10">
            <p className="text-nexino-green text-[11px] font-bold uppercase tracking-[0.18em] mb-4">Example architecture</p>
            <h2 id="architecture-heading" className="text-[1.7rem] sm:text-[2rem] font-bold text-white tracking-[-0.025em]">How a system might be structured.</h2>
            <p className="text-white/50 text-[13px] mt-3 max-w-2xl leading-[1.65]">Illustrative architecture showing how components could connect. Actual systems are designed based on specific requirements.</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
            {industry.systemComponents.map((comp, i) => (
              <AnimatedSection key={comp.label} delay={i * 0.06}>
                <div className="bg-white/5 rounded-xl border border-white/8 p-5 space-y-3 hover:bg-white/8 transition-colors" role="listitem">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg gradient-nexino flex items-center justify-center text-white text-[10px] font-bold shrink-0" aria-hidden="true">{i + 1}</div>
                    <h3 className="font-bold text-white text-[13.5px]">{comp.label}</h3>
                  </div>
                  <p className="text-[12.5px] text-white/50 leading-[1.65]">{comp.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="py-16 lg:py-20 bg-nexino-off-white" aria-labelledby="related-ind-svc-heading">
          <Container>
            <AnimatedSection className="mb-10">
              <h2 id="related-ind-svc-heading" className="text-[1.7rem] font-bold text-nexino-dark tracking-[-0.025em]">Services relevant to this industry.</h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((svc, i) => (
                <AnimatedSection key={svc.id} delay={i * 0.06}>
                  <Link href={`/services/${svc.slug}`} className="group flex flex-col gap-3 p-6 bg-white rounded-xl border border-nexino-border hover:border-nexino-blue transition-all">
                    <p className="text-[10px] font-semibold text-nexino-text-secondary uppercase tracking-wider">{svc.category}</p>
                    <h3 className="font-bold text-nexino-dark text-[14px] group-hover:text-nexino-blue transition-colors">{svc.title}</h3>
                    <p className="text-[12.5px] text-nexino-text-secondary leading-[1.65] line-clamp-2">{svc.tagline}</p>
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-nexino-blue mt-auto">View Service <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" /></span>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection
        title={`Working in ${industry.title.toLowerCase()}?`}
        description="Tell us your operational challenge and we will help identify the most practical technology approach."
        primaryCta={{ label: 'Start a Conversation', href: `/contact?industry=${industry.slug}&type=project` }}
        secondaryCta={{ label: 'View All Services', href: '/services' }}
      />
    </>
  );
}
