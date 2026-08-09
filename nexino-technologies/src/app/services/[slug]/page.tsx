import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { Accordion } from '@/components/shared/Accordion';
import { CTASection } from '@/components/shared/CTASection';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { allServices, getServiceBySlug } from '@/data/services';
import { serviceImages } from '@/data/image-assets';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedServices = allServices.filter((s) => service.relatedServiceSlugs.includes(s.slug) && s.slug !== slug);
  const image = serviceImages[service.slug as keyof typeof serviceImages] ?? serviceImages['corporate-websites'];

  return (
    <>
      <section className="relative pt-28 pb-16 bg-nexino-dark overflow-hidden" aria-labelledby="service-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-nexino-blue/10 blur-3xl" />
        </div>
        <Container className="relative">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: service.category, href: '/services' },
              { label: service.shortTitle },
            ]}
            theme="dark"
            className="mb-8"
          />

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="text-nexino-green text-xs font-bold uppercase tracking-[0.15em]">
                {service.category}
              </p>
              <h1 id="service-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">{service.heroDescription}</p>
              <Link
                href={service.cta.href}
                className="inline-flex items-center gap-2 bg-black text-white font-semibold px-7 py-4 rounded-full hover:bg-neutral-800 transition-colors"
              >
                {service.cta.label}
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
                    Service focus
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-white/60">Outcome</p>
                    <h2 className="mt-2 text-2xl font-bold leading-tight max-w-md">
                      {service.shortTitle} designed to solve a specific business need.
                    </h2>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20 bg-white" aria-labelledby="overview-heading">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 id="overview-heading" className="text-3xl sm:text-4xl font-bold text-nexino-text mb-6">
                {service.tagline}
              </h2>
              <p className="text-nexino-text-secondary leading-relaxed text-lg">{service.overview}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1} direction="left">
              <div className="relative overflow-hidden rounded-[28px] border border-nexino-border bg-nexino-off-white shadow-lg shadow-nexino-dark/5 aspect-[16/10] mb-6">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-nexino-dark/65" />
              </div>
              <div className="bg-nexino-off-white rounded-2xl border border-nexino-border p-8 space-y-4">
                <h3 className="font-bold text-nexino-text text-lg">Problems this addresses</h3>
                <ul className="space-y-4" role="list">
                  {service.problems.map((p) => (
                    <li key={p.title} className="space-y-1">
                      <p className="font-semibold text-nexino-text">{p.title}</p>
                      <p className="text-sm text-nexino-text-secondary">{p.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20 bg-nexino-off-white" aria-labelledby="service-summary-heading">
        <Container>
          <AnimatedSection className="mb-12">
            <h2 id="service-summary-heading" className="text-3xl sm:text-4xl font-bold text-nexino-text">
              What this service covers.
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            {[
              {
                title: 'Who it is for',
                text: 'Businesses and organisations that need a practical solution around this service area.',
              },
              {
                title: 'What Nexino can build',
                text: `A solution shaped around ${service.shortTitle.toLowerCase()}, your workflow and your users.`,
              },
              {
                title: 'What you receive',
                text: 'A clear scope, recommended approach, a working build and support options where needed.',
              },
              {
                title: 'What we need to start',
                text: 'Tell us what is not working, what you want to improve, who will use it and when you want to begin.',
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.05}>
                <div className="bg-white rounded-xl border border-nexino-border p-6 h-full space-y-3">
                  <h3 className="font-bold text-nexino-text">{item.title}</h3>
                  <p className="text-sm text-nexino-text-secondary leading-relaxed">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20 bg-nexino-off-white" aria-labelledby="capabilities-heading">
        <Container>
          <AnimatedSection className="mb-12">
            <h2 id="capabilities-heading" className="text-3xl sm:text-4xl font-bold text-nexino-text">
              What&apos;s included.
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
            {service.capabilities.map((cap, i) => (
              <AnimatedSection key={cap.title} delay={i * 0.05}>
                <div className="bg-white rounded-xl border border-nexino-border p-6 flex gap-4" role="listitem">
                  <CheckCircle className="w-5 h-5 text-nexino-green shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-nexino-text">{cap.title}</p>
                    {cap.description && (
                      <p className="text-sm text-nexino-text-secondary mt-1">{cap.description}</p>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20 bg-white" aria-labelledby="benefits-heading">
        <Container>
          <AnimatedSection className="mb-12">
            <h2 id="benefits-heading" className="text-3xl sm:text-4xl font-bold text-nexino-text">
              What you gain.
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8" role="list">
            {service.benefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 0.08}>
                <div className="space-y-3" role="listitem">
                  <div className="w-2 h-8 rounded-full bg-black" aria-hidden="true" />
                  <h3 className="text-xl font-bold text-nexino-text">{b.title}</h3>
                  <p className="text-nexino-text-secondary leading-relaxed">{b.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20 bg-nexino-dark" aria-labelledby="delivery-heading">
        <Container>
          <AnimatedSection className="mb-12">
            <h2 id="delivery-heading" className="text-3xl sm:text-4xl font-bold text-white">
              How we deliver it.
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {service.deliverySteps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.07}>
                <div className="bg-white/5 rounded-xl border border-white/10 p-6 space-y-3 hover:bg-white/10 transition-colors">
                  <span className="text-xs font-bold text-nexino-blue uppercase tracking-wider">
                    Step {step.step}
                  </span>
                  <h3 className="font-bold text-white">{step.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {service.faqs.length > 0 && (
        <section className="py-16 lg:py-20 bg-nexino-off-white" aria-labelledby="service-faq-heading">
          <Container size="narrow">
            <AnimatedSection className="mb-10">
              <h2 id="service-faq-heading" className="text-3xl font-bold text-nexino-text">
                Common questions.
              </h2>
            </AnimatedSection>
            <Accordion items={service.faqs} />
          </Container>
        </section>
      )}

      {relatedServices.length > 0 && (
        <section className="py-16 lg:py-20 bg-white" aria-labelledby="related-services-heading">
          <Container>
            <AnimatedSection className="mb-10">
              <h2 id="related-services-heading" className="text-3xl font-bold text-nexino-text">
                Related services.
              </h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((rel, i) => (
                <AnimatedSection key={rel.id} delay={i * 0.07}>
                  <Link
                    href={`/services/${rel.slug}`}
                    className="group flex flex-col gap-3 p-6 bg-nexino-off-white rounded-xl border border-nexino-border hover:border-nexino-blue hover:bg-white transition-all"
                  >
                    <p className="text-xs font-semibold text-nexino-text-secondary uppercase tracking-wide">
                      {rel.category}
                    </p>
                    <h3 className="font-bold text-nexino-text group-hover:text-nexino-blue transition-colors">
                      {rel.title}
                    </h3>
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
        title="Tell us what you want to build or improve."
        description="We will review your needs, recommend the next step and help shape the solution around your organisation."
        primaryCta={{ label: 'Discuss This Service', href: service.cta.href }}
        secondaryCta={{ label: 'View All Services', href: '/services' }}
      />
    </>
  );
}
