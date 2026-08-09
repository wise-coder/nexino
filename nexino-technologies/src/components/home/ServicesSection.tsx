'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/shared/Container';

const homeServices = [
  {
    number: '01',
    title: 'We need a digital presence that feels credible',
    slug: 'corporate-websites',
    description: 'For organisations that need a clear, credible and mobile-friendly presence that supports trust and communication.',
    capabilities: [
      'Professional company presentation',
      'Mobile-friendly experience',
      'Clear service information',
      'Contact and inquiry forms',
      'Search-engine foundations',
      'Easy future updates',
    ],
    accentColor: '#111111',
    image: '/images/new/responsive-devices.jpg',
    alt: 'Responsive website displayed across desktop, tablet and mobile devices',
    cta: 'Request a Proposal',
  },
  {
    number: '02',
    title: 'We need a custom system',
    slug: 'custom-web-applications',
    description: 'For businesses that want to manage customers, records, staff, payments, inventory or internal processes more efficiently.',
    capabilities: [
      'Customer-management systems',
      'Staff and internal portals',
      'Inventory systems',
      'Booking systems',
      'Reporting dashboards',
      'Workflow platforms',
    ],
    accentColor: '#111111',
    image: '/images/new/laptop-code.jpg',
    alt: 'Developer working on a laptop with code visible on screen',
    cta: 'Discuss My System',
  },
  {
    number: '03',
    title: 'We want to automate repetitive work',
    slug: 'workflow-automation',
    description: 'For teams spending too much time on manual communication, data entry, approvals, reporting or customer support.',
    capabilities: [
      'Manual communication',
      'Data entry reduction',
      'Approval workflows',
      'Reporting automation',
      'Customer support automation',
      'WhatsApp workflows',
    ],
    accentColor: '#111111',
    image: '/images/new/smartphone-icons.jpg',
    alt: 'Smartphone interface with communication and automation icons',
    cta: 'Explore Automation',
  },
  {
    number: '04',
    title: 'We already have a platform that needs improvement',
    slug: 'hosting-maintenance',
    description: 'For organisations that need better design, performance, integrations, security, usability or ongoing maintenance.',
    capabilities: [
      'Design improvements',
      'Performance optimisation',
      'Integration fixes',
      'Security updates',
      'Usability improvements',
      'Ongoing maintenance',
    ],
    accentColor: '#111111',
    image: '/images/new/laptop-coffee.jpg',
    alt: 'Modern laptop workspace with coffee and plants on a wooden table',
    cta: 'Improve My Platform',
  },
  {
    number: '05',
    title: 'We are not sure what technology we need',
    slug: 'data-analytics',
    description: 'For clients who understand the business problem but need help choosing the right technical direction.',
    capabilities: [
      'Project discovery',
      'Requirement clarification',
      'Technology options',
      'Scope guidance',
      'Practical recommendation',
      'Next-step planning',
    ],
    accentColor: '#111111',
    image: '/images/new/phone-business.jpg',
    alt: 'Business smartphone concept used for professional communication',
    cta: 'Book a Consultation',
    href: '/contact?type=project',
  },
];

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = homeServices[activeIndex];

  return (
    <section className="py-20 lg:py-28 bg-nexino-off-white" aria-labelledby="services-heading">
      <Container>
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-nexino-blue mb-3">
            What do you need help with?
          </p>
          <h2 id="services-heading" className="text-4xl sm:text-5xl font-bold text-nexino-text">
            Practical solutions for real operational needs.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden border border-nexino-border shadow-sm">
          <div className="border-r border-nexino-border" role="tablist" aria-label="Service categories">
            {homeServices.map((service, i) => (
              <button
                key={service.number}
                role="tab"
                id={`service-tab-${i}`}
                aria-selected={activeIndex === i}
                aria-controls={`service-panel-${i}`}
                onClick={() => setActiveIndex(i)}
                className={`w-full text-left flex items-center gap-5 px-8 py-6 border-b border-nexino-border last:border-b-0 transition-all group ${
                  activeIndex === i ? 'bg-nexino-dark' : 'hover:bg-nexino-off-white'
                }`}
              >
                <span
                  className={`text-sm font-bold tabular-nums transition-colors ${
                    activeIndex === i
                      ? 'text-nexino-blue'
                      : 'text-nexino-border group-hover:text-nexino-text-secondary'
                  }`}
                  aria-hidden="true"
                >
                  {service.number}
                </span>
                <span
                  className={`font-semibold text-base transition-colors ${
                    activeIndex === i ? 'text-white' : 'text-nexino-text'
                  }`}
                >
                  {service.title}
                </span>
                {activeIndex === i && (
                  <ArrowRight className="w-4 h-4 text-nexino-blue ml-auto" aria-hidden="true" />
                )}
              </button>
            ))}
          </div>

          <div
            className="p-8 lg:p-10"
            role="tabpanel"
            id={`service-panel-${activeIndex}`}
            aria-labelledby={`service-tab-${activeIndex}`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 h-full"
              >
                <div
                  className="h-1 w-12 rounded-full"
                  style={{ backgroundColor: active.accentColor }}
                  aria-hidden="true"
                />

                <div className="relative overflow-hidden rounded-[28px] border border-nexino-border shadow-xl shadow-nexino-dark/5 aspect-[16/10]">
                  <Image
                    src={active.image}
                    alt={active.alt}
                    fill
                    className="object-cover transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-nexino-dark/65" />
                  <div className="absolute inset-0 p-5 lg:p-6 flex flex-col justify-end text-white">
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/75">
                      Service focus
                    </p>
                    <p className="mt-2 text-lg font-semibold leading-tight max-w-xs">{active.title}</p>
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-nexino-text">{active.title}</h3>
                <p className="text-nexino-text-secondary leading-relaxed">{active.description}</p>

                <div className="grid grid-cols-2 gap-2">
                  {active.capabilities.map((cap) => (
                    <div key={cap} className="flex items-center gap-2 text-sm text-nexino-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-nexino-blue shrink-0" aria-hidden="true" />
                      {cap}
                    </div>
                  ))}
                </div>

                <Link
                  href={active.href ?? `/services/${active.slug}`}
                  className="inline-flex items-center gap-2 font-semibold text-nexino-blue hover:gap-3 transition-all mt-2"
                  aria-label={active.cta}
                >
                  {active.cta}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
