import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { CTASection } from '@/components/shared/CTASection';
import { Accordion } from '@/components/shared/Accordion';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { generalFaqs } from '@/data/faqs';
import { pageHeroImages, serviceImages } from '@/data/image-assets';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'See how Nexino Technologies Ltd can help with websites, custom systems, automation, hosting, data and engineering solutions.',
};

const serviceCategories = [
  {
    id: 'digital-products',
    title: 'Digital Product Development',
    description: 'Websites, applications and platforms built around real users and business goals.',
    services: [
      { label: 'Corporate Websites', href: '/services/corporate-websites' },
      { label: 'Custom Web Applications', href: '/services/custom-web-applications' },
      { label: 'Mobile Applications', href: '/services/mobile-applications' },
      { label: 'E-Commerce Platforms', href: '/services/ecommerce-platforms' },
      { label: 'SaaS Development', href: '/services/saas-development' },
      { label: 'UI/UX Product Design', href: '/services/ui-ux-design' },
    ],
    highlight: 'bg-nexino-blue/5 border-nexino-blue/20',
    linkHoverClass: 'group-hover:text-nexino-blue',
    image: {
      src: serviceImages['corporate-websites'].src,
      alt: serviceImages['corporate-websites'].alt,
    },
  },
  {
    id: 'ai-automation',
    title: 'AI and Automation',
    description: 'Intelligent systems that improve communication, automate processes and support decisions.',
    services: [
      { label: 'AI Agents', href: '/services/ai-agents' },
      { label: 'Business Chatbots', href: '/services/business-chatbots' },
      { label: 'WhatsApp Automation', href: '/services/whatsapp-automation' },
      { label: 'Workflow Automation', href: '/services/workflow-automation' },
      { label: 'Customer Support Automation', href: '/services/customer-support-automation' },
    ],
    highlight: 'bg-nexino-green/5 border-nexino-green/20',
    linkHoverClass: 'group-hover:text-nexino-green',
    image: {
      src: serviceImages['ai-agents'].src,
      alt: serviceImages['ai-agents'].alt,
    },
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud, Data and Infrastructure',
    description: 'Reliable hosting, deployment, integration and data support for digital products.',
    services: [
      { label: 'Hosting and Maintenance', href: '/services/hosting-maintenance' },
      { label: 'Cloud Infrastructure', href: '/services/cloud-infrastructure' },
      { label: 'System Integration', href: '/services/system-integration' },
    ],
    highlight: 'bg-nexino-blue/5 border-nexino-blue/20',
    linkHoverClass: 'group-hover:text-nexino-blue',
    image: {
      src: serviceImages['cloud-infrastructure'].src,
      alt: serviceImages['cloud-infrastructure'].alt,
    },
  },
  {
    id: 'data-research',
    title: 'Data and Research',
    description: 'Data collection, analysis and research that turns information into evidence.',
    services: [
      { label: 'Data Analytics', href: '/services/data-analytics' },
      { label: 'Business Intelligence', href: '/services/business-intelligence' },
      { label: 'Technical Research', href: '/services/technical-research' },
    ],
    highlight: 'bg-nexino-green/5 border-nexino-green/20',
    linkHoverClass: 'group-hover:text-nexino-green',
    image: {
      src: serviceImages['data-analytics'].src,
      alt: serviceImages['data-analytics'].alt,
    },
  },
  {
    id: 'engineering',
    title: 'Engineering and Intelligent Systems',
    description: 'Embedded software, hardware integration and connected device systems.',
    services: [
      { label: 'Embedded Systems', href: '/services/embedded-systems' },
      { label: 'Custom PCB Design', href: '/services/pcb-design' },
      { label: 'Hardware and Software Integration', href: '/services/hardware-software-integration' },
      { label: 'Intelligent Infrastructure', href: '/services/intelligent-infrastructure' },
    ],
    highlight: 'bg-nexino-blue/5 border-nexino-blue/20',
    linkHoverClass: 'group-hover:text-nexino-blue',
    image: {
      src: serviceImages['embedded-systems'].src,
      alt: serviceImages['embedded-systems'].alt,
    },
  },
];

const selectionGuide = [
  { need: 'I need a new website or web platform', recommendation: 'Digital Product Development', href: '/services/corporate-websites' },
  { need: 'I want to automate customer communication', recommendation: 'AI and Automation', href: '/services/business-chatbots' },
  { need: 'I need reliable hosting for my existing system', recommendation: 'Cloud and Infrastructure', href: '/services/hosting-maintenance' },
  { need: 'I need to understand my data better', recommendation: 'Data and Research', href: '/services/data-analytics' },
  { need: 'I am building a connected device or hardware product', recommendation: 'Engineering Systems', href: '/services/embedded-systems' },
  { need: 'I am not sure what I need yet', recommendation: 'Start with a conversation', href: '/contact?type=project' },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pb-28 bg-white border-b border-nexino-border overflow-hidden" aria-labelledby="services-page-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-nexino-blue/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-nexino-green/5 blur-3xl" />
        </div>
        <Container className="relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-3xl">
              <p className="text-nexino-blue text-xs font-bold uppercase tracking-[0.15em] mb-5">Services</p>
              <h1 id="services-page-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-nexino-text leading-tight mb-6">
                Practical services for websites, systems and automation.
              </h1>
              <p className="text-xl text-nexino-text-secondary leading-relaxed">
                Nexino helps organisations choose the right approach, define the scope and build solutions that support their day-to-day operations.
              </p>
            </div>

            <AnimatedSection delay={0.1} direction="left">
              <div className="relative overflow-hidden rounded-[32px] border border-nexino-border shadow-2xl shadow-nexino-dark/10 aspect-[4/3]">
                <Image
                  src={pageHeroImages.services.src}
                  alt={pageHeroImages.services.alt}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-nexino-dark/65" />
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-between text-white">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold backdrop-blur">
                    <span className="w-2 h-2 rounded-full bg-nexino-green" aria-hidden="true" />
                    From idea to delivery
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-white/60">What we build</p>
                  <h2 className="mt-2 text-2xl font-bold leading-tight max-w-md">
                      Websites, systems, automation and support that fit real business needs.
                    </h2>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-nexino-off-white" aria-labelledby="categories-heading">
        <Container>
          <AnimatedSection className="mb-14">
            <h2 id="categories-heading" className="text-3xl sm:text-4xl font-bold text-nexino-text">
              Five ways clients start.
            </h2>
          </AnimatedSection>
          <div className="space-y-6">
            {serviceCategories.map((cat, i) => (
              <AnimatedSection key={cat.id} delay={i * 0.06}>
                <div className={`group rounded-2xl border overflow-hidden bg-white ${cat.highlight}`}>
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="relative min-h-56 lg:min-h-full lg:col-span-1">
                      <Image
                        src={cat.image.src}
                        alt={cat.image.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-nexino-dark/65" />
                      <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end text-white">
                        <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/70">
                          Service area
                        </p>
                        <h3 className="mt-2 text-2xl font-bold leading-tight">{cat.title}</h3>
                      </div>
                    </div>

                    <div className="p-8 lg:p-10 lg:col-span-2 space-y-8">
                      <div className="space-y-4 max-w-2xl">
                        <h3 className={`text-2xl font-bold text-nexino-text`}>{cat.title}</h3>
                        <p className="text-nexino-text-secondary leading-relaxed">{cat.description}</p>
                      </div>

                      <ul className="grid sm:grid-cols-2 gap-2" role="list">
                        {cat.services.map((svc) => (
                          <li key={svc.label}>
                            <Link
                              href={svc.href}
                              className={`flex items-center gap-2 py-2 text-sm font-medium text-nexino-text-secondary transition-colors group ${cat.linkHoverClass}`}
                            >
                              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" aria-hidden="true" />
                              {svc.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-24 bg-white" aria-labelledby="guide-heading">
        <Container>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
            <AnimatedSection>
              <SectionHeading
                label="Not sure where to start?"
                title="Find the right starting point."
                titleClassName="text-3xl sm:text-4xl"
              />
              <div className="mt-8 relative overflow-hidden rounded-[28px] border border-nexino-border aspect-[4/5]">
                <Image
                  src={serviceImages['cloud-infrastructure'].src}
                  alt={serviceImages['cloud-infrastructure'].alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-nexino-dark/65" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/70">
                    Guided discovery
                  </p>
                  <p className="mt-2 text-sm text-white/80 max-w-sm">
                    If you are unsure which service fits best, we can help map the problem to the right starting point.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1} direction="left">
              <div className="space-y-3">
                {selectionGuide.map((item, i) => (
                  <AnimatedSection key={i} delay={i * 0.05}>
                    <Link
                      href={item.href}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 bg-nexino-off-white rounded-xl border border-nexino-border hover:border-nexino-blue hover:bg-white transition-all group"
                    >
                      <span className="text-nexino-text font-medium">{item.need}</span>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-nexino-blue shrink-0 group-hover:gap-3 transition-all">
                        {item.recommendation}
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-24 bg-nexino-off-white" aria-labelledby="services-faq-heading">
        <Container size="narrow">
          <AnimatedSection className="mb-12 text-center">
            <h2 id="services-faq-heading" className="text-3xl sm:text-4xl font-bold text-nexino-text">
              Common questions.
            </h2>
          </AnimatedSection>
          <Accordion items={generalFaqs.filter((f) => f.category !== 'Contact')} />
        </Container>
      </section>

      <CTASection
        title="Ready to start a project?"
        description="Tell us what you are building or improving and we will help identify the right approach."
        primaryCta={{ label: 'Start a Project', href: '/contact?type=project' }}
        secondaryCta={{ label: 'Request a Consultation', href: '/contact' }}
      />
    </>
  );
}
