import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { CTASection } from '@/components/shared/CTASection';
import { Accordion } from '@/components/shared/Accordion';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { generalFaqs } from '@/data/faqs';
import { newVisuals } from '@/data/local-images';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'From digital products and AI automation to cloud infrastructure, data analytics and embedded engineering — see how Nexino Technologies can help.',
};

const serviceCategories = [
  {
    id: 'digital-products',
    number: '01',
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
  },
  {
    id: 'ai-automation',
    number: '02',
    title: 'AI and Automation',
    description: 'Intelligent systems that improve communication, automate processes and support decisions.',
    services: [
      { label: 'AI Agents', href: '/services/ai-agents' },
      { label: 'Business Chatbots', href: '/services/business-chatbots' },
      { label: 'WhatsApp Automation', href: '/services/whatsapp-automation' },
      { label: 'Workflow Automation', href: '/services/workflow-automation' },
      { label: 'Customer Support Automation', href: '/services/customer-support-automation' },
    ],
  },
  {
    id: 'cloud-infrastructure',
    number: '03',
    title: 'Cloud and Infrastructure',
    description: 'Reliable hosting, deployment and integration for digital products.',
    services: [
      { label: 'Hosting and Maintenance', href: '/services/hosting-maintenance' },
      { label: 'Cloud Infrastructure', href: '/services/cloud-infrastructure' },
      { label: 'System Integration', href: '/services/system-integration' },
      { label: 'Performance Monitoring', href: '/services/hosting-maintenance' },
    ],
  },
  {
    id: 'data-research',
    number: '04',
    title: 'Data and Research',
    description: 'Data collection, analysis and research that turns information into evidence.',
    services: [
      { label: 'Data Analytics', href: '/services/data-analytics' },
      { label: 'Business Intelligence', href: '/services/business-intelligence' },
      { label: 'Data Visualisation', href: '/services/data-analytics' },
      { label: 'Technical Research', href: '/services/technical-research' },
    ],
  },
  {
    id: 'engineering',
    number: '05',
    title: 'Engineering and Intelligent Systems',
    description: 'Embedded software, hardware integration and connected device systems.',
    services: [
      { label: 'Embedded Systems', href: '/services/embedded-systems' },
      { label: 'Custom PCB Design', href: '/services/pcb-design' },
      { label: 'Hardware and Software Integration', href: '/services/hardware-software-integration' },
      { label: 'Intelligent Infrastructure', href: '/services/intelligent-infrastructure' },
    ],
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
      {/* Hero */}
      <section
        className="pt-32 pb-20 bg-white border-b border-nexino-border"
        aria-labelledby="services-page-heading"
      >
        <Container>
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
            <div className="max-w-3xl">
              <p className="text-nexino-blue text-[11px] font-bold uppercase tracking-[0.18em] mb-5">
                Services
              </p>
              <h1
                id="services-page-heading"
                className="text-[2.4rem] sm:text-[3rem] lg:text-[3.5rem] font-bold text-nexino-dark leading-[1.08] tracking-[-0.03em] mb-6"
              >
                Connected capabilities for complex challenges.
              </h1>
              <p className="text-[1.05rem] text-nexino-text-secondary leading-[1.75] max-w-2xl">
                We combine software, AI, data, cloud and engineering expertise to solve the problems
                that matter to your organisation.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[170px] lg:h-[210px] rounded-2xl overflow-hidden border border-nexino-border">
                <Image src={newVisuals.servicesPrimary} alt="" fill className="object-cover" />
              </div>
              <div className="relative h-[170px] lg:h-[210px] rounded-2xl overflow-hidden border border-nexino-border mt-8">
                <Image src={newVisuals.servicesSecondary} alt="" fill className="object-cover" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Service categories */}
      <section className="py-20 lg:py-28 bg-nexino-off-white" aria-labelledby="categories-heading">
        <Container>
          <AnimatedSection className="mb-12">
            <h2
              id="categories-heading"
              className="text-[2rem] sm:text-[2.4rem] font-bold text-nexino-dark tracking-[-0.025em]"
            >
              Five capability areas.
            </h2>
          </AnimatedSection>

          <div className="border-t border-nexino-border">
            {serviceCategories.map((cat, i) => (
              <AnimatedSection key={cat.id} delay={i * 0.05}>
                <div className="grid lg:grid-cols-[80px_1fr_1fr] gap-6 lg:gap-10 py-8 border-b border-nexino-border items-start">
                  {/* Number */}
                  <span
                    className="text-[2.5rem] font-bold leading-none select-none"
                    style={{ color: '#E4E7EC' }}
                    aria-hidden="true"
                  >
                    {cat.number}
                  </span>

                  {/* Title + description */}
                  <div className="space-y-2">
                    <h3 className="text-[1.1rem] font-bold text-nexino-dark">{cat.title}</h3>
                    <p className="text-[13.5px] text-nexino-text-secondary leading-[1.65]">
                      {cat.description}
                    </p>
                  </div>

                  {/* Service links */}
                  <ul className="grid sm:grid-cols-2 gap-1" role="list">
                    {cat.services.map((svc) => (
                      <li key={svc.label}>
                        <Link
                          href={svc.href}
                          className="flex items-center gap-2 py-1.5 text-[13px] font-medium text-nexino-text-secondary hover:text-nexino-blue transition-colors group"
                        >
                          <ArrowRight
                            className="w-3 h-3 opacity-0 group-hover:opacity-100 shrink-0 transition-opacity"
                            aria-hidden="true"
                          />
                          {svc.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Selection guide */}
      <section className="py-20 lg:py-24 bg-white" aria-labelledby="guide-heading">
        <Container>
          <AnimatedSection className="mb-10">
            <p className="text-nexino-blue text-[11px] font-bold uppercase tracking-[0.18em] mb-3">
              Not sure where to start?
            </p>
            <h2
              id="guide-heading"
              className="text-[2rem] sm:text-[2.4rem] font-bold text-nexino-dark tracking-[-0.025em]"
            >
              Find the right starting point.
            </h2>
          </AnimatedSection>
          <div className="space-y-2">
            {selectionGuide.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.04}>
                <Link
                  href={item.href}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-nexino-off-white rounded-xl border border-nexino-border hover:border-nexino-blue hover:bg-white transition-all group"
                >
                  <span className="text-[14px] text-nexino-dark font-medium">{item.need}</span>
                  <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-nexino-blue shrink-0 group-hover:gap-3 transition-all">
                    {item.recommendation}
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24 bg-nexino-off-white" aria-labelledby="services-faq-heading">
        <Container size="narrow">
          <AnimatedSection className="mb-10">
            <h2
              id="services-faq-heading"
              className="text-[2rem] sm:text-[2.4rem] font-bold text-nexino-dark tracking-[-0.025em]"
            >
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
        secondaryCta={{ label: 'Contact Our Team', href: '/contact' }}
      />
    </>
  );
}
