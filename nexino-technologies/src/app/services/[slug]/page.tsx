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
import { allServices as services, getServiceBySlug } from '@/data/services';
import { getServiceImage } from '@/data/local-images';

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Service Not Found' };
  return { title: service.seo.title, description: service.seo.description };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = services.filter(
    (s) => service.relatedServiceSlugs.includes(s.slug) && s.slug !== slug,
  );
  const heroImage = getServiceImage(service.slug);

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-nexino-dark relative overflow-hidden" aria-labelledby="service-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-nexino-blue/8 blur-[80px]" />
        </div>
        <Container className="relative">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: service.category, href: '/services' }, { label: service.shortTitle }]} theme="dark" className="mb-8" />
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
            <div className="max-w-3xl">
              <p className="text-nexino-green text-[11px] font-bold uppercase tracking-[0.18em] mb-4">{service.category}</p>
              <h1 id="service-heading" className="text-[2.4rem] sm:text-[3rem] lg:text-[3.5rem] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-6">{service.title}</h1>
              <p className="text-[1.05rem] text-white/60 leading-[1.75] mb-8">{service.heroDescription}</p>
              <Link href={service.cta.href} className="inline-flex items-center gap-2 bg-nexino-blue text-white font-semibold px-6 py-3.5 rounded-full text-[14px] hover:bg-[#0080d4] transition-colors">
                {service.cta.label}
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>

            <div className="relative h-[300px] lg:h-[420px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image src={heroImage} alt="" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-nexino-dark/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-nexino-dark/70 px-4 py-3 backdrop-blur">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-nexino-green">
                  {service.shortTitle}
                </p>
                <p className="mt-1 text-[12.5px] text-white/65">
                  Local imagery matched to this service and its use case.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-20 bg-white" aria-labelledby="overview-heading">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-nexino-blue mb-4">Overview</p>
              <h2 id="overview-heading" className="text-[1.7rem] sm:text-[2rem] font-bold text-nexino-dark tracking-[-0.025em] mb-5">{service.tagline}</h2>
              <p className="text-[0.95rem] text-nexino-text-secondary leading-[1.75]">{service.overview}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1} direction="left">
              <div className="bg-nexino-off-white rounded-xl border border-nexino-border p-6 space-y-4">
                <h3 className="font-bold text-nexino-dark text-[14px]">Problems this addresses</h3>
                <ul className="space-y-4" role="list">
                  {service.problems.map((p) => (
                    <li key={p.title} className="space-y-1">
                      <p className="font-semibold text-nexino-dark text-[13.5px]">{p.title}</p>
                      <p className="text-[13px] text-nexino-text-secondary leading-[1.65]">{p.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-20 bg-nexino-off-white" aria-labelledby="capabilities-heading">
        <Container>
          <AnimatedSection className="mb-10">
            <h2 id="capabilities-heading" className="text-[1.7rem] sm:text-[2rem] font-bold text-nexino-dark tracking-[-0.025em]">What&#39;s included.</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
            {service.capabilities.map((cap, i) => (
              <AnimatedSection key={cap.title} delay={i * 0.05}>
                <div className="bg-white rounded-xl border border-nexino-border p-5 flex gap-3" role="listitem">
                  <CheckCircle className="w-4 h-4 text-nexino-green shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-nexino-dark text-[13.5px]">{cap.title}</p>
                    {cap.description && <p className="text-[12.5px] text-nexino-text-secondary mt-1 leading-[1.6]">{cap.description}</p>}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-20 bg-white" aria-labelledby="benefits-heading">
        <Container>
          <AnimatedSection className="mb-10">
            <h2 id="benefits-heading" className="text-[1.7rem] sm:text-[2rem] font-bold text-nexino-dark tracking-[-0.025em]">What you gain.</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8" role="list">
            {service.benefits.map((b, i) => (
              <AnimatedSection key={b.title} delay={i * 0.07}>
                <div className="space-y-3" role="listitem">
                  <div className="w-1.5 h-8 rounded-full gradient-nexino" aria-hidden="true" />
                  <h3 className="text-[1rem] font-bold text-nexino-dark">{b.title}</h3>
                  <p className="text-[13.5px] text-nexino-text-secondary leading-[1.7]">{b.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Delivery */}
      <section className="py-16 lg:py-20 bg-nexino-dark" aria-labelledby="delivery-heading">
        <Container>
          <AnimatedSection className="mb-10">
            <h2 id="delivery-heading" className="text-[1.7rem] sm:text-[2rem] font-bold text-white tracking-[-0.025em]">How we deliver it.</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {service.deliverySteps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.06}>
                <div className="bg-white/5 rounded-xl border border-white/8 p-5 space-y-3 hover:bg-white/8 transition-colors">
                  <span className="text-[10px] font-bold text-nexino-blue uppercase tracking-wider">Step {step.step}</span>
                  <h3 className="font-bold text-white text-[14px]">{step.title}</h3>
                  <p className="text-[12.5px] text-white/50 leading-[1.65]">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      {service.faqs.length > 0 && (
        <section className="py-16 lg:py-20 bg-nexino-off-white" aria-labelledby="service-faq-heading">
          <Container size="narrow">
            <AnimatedSection className="mb-10">
              <h2 id="service-faq-heading" className="text-[1.7rem] font-bold text-nexino-dark tracking-[-0.025em]">Common questions.</h2>
            </AnimatedSection>
            <Accordion items={service.faqs} />
          </Container>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 lg:py-20 bg-white" aria-labelledby="related-svc-heading">
          <Container>
            <AnimatedSection className="mb-10">
              <h2 id="related-svc-heading" className="text-[1.7rem] font-bold text-nexino-dark tracking-[-0.025em]">Related services.</h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((rel, i) => (
                <AnimatedSection key={rel.id} delay={i * 0.06}>
                  <Link href={`/services/${rel.slug}`} className="group flex flex-col gap-3 p-6 bg-nexino-off-white rounded-xl border border-nexino-border hover:border-nexino-blue hover:bg-white transition-all">
                    <p className="text-[10px] font-semibold text-nexino-text-secondary uppercase tracking-wider">{rel.category}</p>
                    <h3 className="font-bold text-nexino-dark text-[14px] group-hover:text-nexino-blue transition-colors">{rel.title}</h3>
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-nexino-blue mt-auto">
                      View Service <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection
        title="Ready to explore this service?"
        description="Tell us about your project and we will help identify the right approach."
        primaryCta={{ label: 'Start a Project', href: service.cta.href }}
        secondaryCta={{ label: 'View All Services', href: '/services' }}
      />
    </>
  );
}
