import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { serviceImages } from '@/data/image-assets';

const homeServices = [
  {
    number: '01',
    title: 'Website Development',
    slug: 'corporate-websites',
    description:
      'Professional responsive websites for businesses, organisations and institutions.',
    capabilities: [
      'Corporate websites',
      'Landing pages and portals',
      'SEO foundations',
      'Mobile-first design',
    ],
    image: serviceImages['corporate-websites'],
    cta: 'Discuss This Service',
  },
  {
    number: '02',
    title: 'Custom Web Applications',
    slug: 'custom-web-applications',
    description:
      'Digital platforms built around specific workflows and business requirements.',
    capabilities: [
      'Internal systems',
      'Client portals',
      'Workflow tools',
      'API integrations',
    ],
    image: serviceImages['custom-web-applications'],
    cta: 'Request a Consultation',
  },
  {
    number: '03',
    title: 'AI & Business Automation',
    slug: 'ai-agents',
    description:
      'AI agents, chatbots, WhatsApp automation and workflow automation.',
    capabilities: [
      'Chatbots and AI agents',
      'WhatsApp automation',
      'Support automation',
      'Process automation',
    ],
    image: serviceImages['ai-agents'],
    cta: 'Explore Automation',
  },
  {
    number: '04',
    title: 'Cloud & Infrastructure',
    slug: 'cloud-infrastructure',
    description:
      'Hosting, deployment, maintenance and system integration.',
    capabilities: [
      'Cloud setup',
      'Managed hosting',
      'Deployment support',
      'System integration',
    ],
    image: serviceImages['cloud-infrastructure'],
    cta: 'Improve Existing Systems',
  },
  {
    number: '05',
    title: 'Data, Research and Engineering',
    slug: 'data-analytics',
    description:
      'Analytics, research, embedded systems and intelligent infrastructure for specialised use cases.',
    capabilities: [
      'Data analytics',
      'Technical research',
      'Embedded systems',
      'PCB and device work',
    ],
    image: serviceImages['technical-research'],
    cta: 'Request a Project Review',
  },
];

export function ServicesSection() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="services-heading">
      <Container>
        <AnimatedSection className="mb-14 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-nexino-blue">
            What we can build for you
          </p>
          <h2 id="services-heading" className="text-4xl font-bold leading-tight text-nexino-text sm:text-5xl">
            Services designed around the work your organisation actually needs done.
          </h2>
        </AnimatedSection>

        <div className="space-y-6">
          {homeServices.map((service, index) => {
            const reverse = index % 2 === 1;

            return (
              <AnimatedSection key={service.slug} delay={index * 0.06}>
                <div className="overflow-hidden rounded-[2rem] border border-nexino-border bg-nexino-off-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
                  <div className={`grid gap-0 lg:grid-cols-2 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                    <div className="relative min-h-[22rem]">
                      <Image
                        src={service.image.src}
                        alt={service.image.alt}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-nexino-dark/70 via-nexino-dark/20 to-transparent" />
                      <div className="absolute inset-0 flex flex-col justify-between p-6 text-white sm:p-8">
                        <span className="w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold backdrop-blur">
                          Service {service.number}
                        </span>
                        <div className="max-w-md">
                          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                            Focus area
                          </p>
                          <h3 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-nexino-blue">
                        {service.number}
                      </p>
                      <h3 className="mt-3 text-3xl font-bold text-nexino-text">{service.title}</h3>
                      <p className="mt-4 max-w-xl text-lg leading-relaxed text-nexino-text-secondary">
                        {service.description}
                      </p>

                      <div className="mt-7 grid gap-3 sm:grid-cols-2">
                        {service.capabilities.map((capability) => (
                          <div
                            key={capability}
                            className="rounded-2xl border border-nexino-border bg-white px-4 py-3 text-sm font-medium text-nexino-text-secondary"
                          >
                            {capability}
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-wrap items-center gap-4">
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 rounded-full bg-nexino-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-nexino-blue"
                        >
                          {service.cta}
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                        <Link
                          href="/services"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-nexino-text-secondary transition-all hover:gap-3 hover:text-nexino-blue"
                        >
                          View all services
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
