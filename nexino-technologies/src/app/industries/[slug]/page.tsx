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
import { services } from '@/data/services';
import { industryImages } from '@/data/image-assets';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: 'Industry Not Found' };
  return {
    title: industry.seo.title,
    description: industry.seo.description,
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const relatedServices = services.filter((s) => industry.relatedServiceSlugs.includes(s.slug));
  const image = industryImages[industry.slug as keyof typeof industryImages];

  return (
    <>
      <section className="relative pt-28 pb-16 bg-nexino-dark overflow-hidden" aria-labelledby="industry-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-nexino-blue/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-nexino-green/5 blur-3xl" />
        </div>
        <Container className="relative">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Industries', href: '/industries' },
              { label: industry.title },
            ]}
            theme="dark"
            className="mb-8"
          />

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="text-nexino-green text-xs font-bold uppercase tracking-[0.15em]">
                Industry Focus
              </p>
              <h1 id="industry-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {industry.title}
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">{industry.heroDescription}</p>
              <Link
                href={`/contact?industry=${industry.slug}&type=project`}
                className="inline-flex items-center gap-2 bg-black text-white font-semibold px-7 py-4 rounded-full hover:bg-neutral-800 transition-colors"
              >
                Discuss a Project in This Industry
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            <AnimatedSection delay={0.1} direction="left">
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 shadow-2xl shadow-black/20 aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-nexino-dark/65" />
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-between text-white">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold backdrop-blur">
                    <span className="w-2 h-2 rounded-full bg-nexino-green" aria-hidden="true" />
                    Sector specific design
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-white/60">Environment</p>
                    <h2 className="mt-2 text-2xl font-bold leading-tight max-w-md">
                      Systems shaped for the realities of {industry.shortTitle.toLowerCase()} operations.
                    </h2>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <div className="bg-nexino-navy border-b border-white/10">
        <Container className="py-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-nexino-blue shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-white/70 text-sm leading-relaxed">
              {industry.responsibleUseStatement}
            </p>
          </div>
        </Container>
      </div>

      <section className="py-16 lg:py-20 bg-white" aria-labelledby="challenges-heading">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <p className="text-nexino-blue text-xs font-bold uppercase tracking-[0.15em] mb-4">
                Common challenges
              </p>
              <h2 id="challenges-heading" className="text-3xl sm:text-4xl font-bold text-nexino-text mb-6">
                Operational problems technology can address.
              </h2>
              <p className="text-nexino-text-secondary leading-relaxed">
                {industry.description}
              </p>
              <div className="mt-8 relative overflow-hidden rounded-2xl border border-nexino-border aspect-[16/10]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-nexino-dark/65" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1} direction="left">
              <ul className="space-y-4" role="list">
                {industry.challenges.map((challenge) => (
                  <li
                    key={challenge.title}
                    className="p-5 bg-nexino-off-white rounded-xl border border-nexino-border space-y-1.5"
                  >
                    <h3 className="font-bold text-nexino-text">{challenge.title}</h3>
                    <p className="text-sm text-nexino-text-secondary leading-relaxed">
                      {challenge.description}
                    </p>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20 bg-nexino-off-white" aria-labelledby="applications-heading">
        <Container>
          <AnimatedSection className="mb-12">
            <p className="text-nexino-blue text-xs font-bold uppercase tracking-[0.15em] mb-4">
              Possible technology applications
            </p>
            <h2 id="applications-heading" className="text-3xl sm:text-4xl font-bold text-nexino-text">
              What we can build for this sector.
            </h2>
            <p className="text-nexino-text-secondary mt-3 max-w-2xl leading-relaxed">
              These are illustrative applications, not completed deployments unless explicitly stated. We use them to show the scope of what is possible.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {industry.applications.map((app, i) => (
              <AnimatedSection key={app.title} delay={i * 0.06}>
                <div className="bg-white rounded-xl border border-nexino-border p-6 space-y-3 hover:border-nexino-blue transition-colors" role="listitem">
                  <div className="w-2 h-8 rounded-full bg-black" aria-hidden="true" />
                  <h3 className="font-bold text-nexino-text">{app.title}</h3>
                  <p className="text-sm text-nexino-text-secondary leading-relaxed">
                    {app.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20 bg-white" aria-labelledby="capabilities-heading">
        <Container>
          <AnimatedSection className="mb-12">
            <h2 id="capabilities-heading" className="text-3xl sm:text-4xl font-bold text-nexino-text">
              Nexino Technologies Ltd capabilities for this sector.
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-6" role="list">
            {industry.capabilities.map((cap, i) => (
              <AnimatedSection key={cap.title} delay={i * 0.07}>
                <div className="flex gap-4 p-6 bg-nexino-off-white rounded-xl border border-nexino-border" role="listitem">
                  <div
                    className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white text-sm font-bold shrink-0"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="font-bold text-nexino-text mb-1">{cap.title}</h3>
                    <p className="text-sm text-nexino-text-secondary leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20 bg-nexino-dark" aria-labelledby="architecture-heading">
        <Container>
          <AnimatedSection className="mb-12">
            <p className="text-nexino-green text-xs font-bold uppercase tracking-[0.15em] mb-4">
              Illustrative architecture
            </p>
            <h2 id="architecture-heading" className="text-3xl sm:text-4xl font-bold text-white">
              How a system might be structured.
            </h2>
            <p className="text-white/60 mt-3 max-w-2xl leading-relaxed text-sm">
              This is an illustrative architecture showing how the components of a {industry.title.toLowerCase()} solution could connect. Actual systems are designed based on specific requirements.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
            {industry.systemComponents.map((comp, i) => (
              <AnimatedSection key={comp.label} delay={i * 0.07}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3 hover:bg-white/10 transition-colors" role="listitem">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white text-xs font-bold"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </div>
                    <h3 className="font-bold text-white">{comp.label}</h3>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">{comp.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {relatedServices.length > 0 && (
        <section className="py-16 lg:py-20 bg-nexino-off-white" aria-labelledby="related-services-heading">
          <Container>
            <AnimatedSection className="mb-10">
              <h2 id="related-services-heading" className="text-3xl font-bold text-nexino-text">
                Services relevant to this industry.
              </h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((svc, i) => (
                <AnimatedSection key={svc.id} delay={i * 0.07}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="group flex flex-col gap-3 p-6 bg-white rounded-xl border border-nexino-border hover:border-nexino-blue hover:shadow-lg transition-all"
                  >
                    <p className="text-xs font-semibold text-nexino-text-secondary uppercase tracking-wide">
                      {svc.category}
                    </p>
                    <h3 className="font-bold text-nexino-text group-hover:text-nexino-blue transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-nexino-text-secondary leading-relaxed line-clamp-2">
                      {svc.tagline}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-nexino-blue mt-auto">
                      View Service
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
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
        primaryCta={{
          label: 'Start a Conversation',
          href: `/contact?industry=${industry.slug}&type=project`,
        }}
        secondaryCta={{ label: 'View All Services', href: '/services' }}
      />
    </>
  );
}
