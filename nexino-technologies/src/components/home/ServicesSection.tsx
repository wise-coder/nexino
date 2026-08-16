'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/shared/Container';
import { getServiceImage } from '@/data/local-images';

const homeServices = [
  {
    number: '01',
    title: 'Digital Product Development',
    slug: 'custom-web-applications',
    description:
      'We create websites, applications, e-commerce platforms and SaaS products designed around real users and business needs.',
    capabilities: [
      'Corporate websites',
      'Web applications',
      'Mobile applications',
      'E-commerce',
      'SaaS development',
      'UI/UX design',
    ],
  },
  {
    number: '02',
    title: 'AI and Business Automation',
    slug: 'ai-agents',
    description:
      'We build intelligent systems that improve customer communication, automate repetitive processes and support better decisions.',
    capabilities: [
      'AI agents',
      'Business chatbots',
      'WhatsApp automation',
      'Workflow automation',
      'Customer-support systems',
      'Intelligent integrations',
    ],
  },
  {
    number: '03',
    title: 'Cloud and Technology Infrastructure',
    slug: 'hosting-maintenance',
    description:
      'We establish the systems required to host, connect, monitor and maintain digital products.',
    capabilities: [
      'Hosting',
      'Cloud infrastructure',
      'Monthly maintenance',
      'API integration',
      'Performance monitoring',
      'Deployment support',
    ],
  },
  {
    number: '04',
    title: 'Data, Analytics and Research',
    slug: 'data-analytics',
    description: 'We organise information and transform it into clear insight.',
    capabilities: [
      'Data collection',
      'Data cleaning',
      'Data analytics',
      'Business intelligence',
      'Statistical analysis',
      'Technical research',
    ],
  },
  {
    number: '05',
    title: 'Engineering and Intelligent Systems',
    slug: 'embedded-systems',
    description:
      'We connect devices, embedded software, data and digital interfaces.',
    capabilities: [
      'Embedded systems',
      'PCB design',
      'Sensors',
      'Hardware integration',
      'Intelligent infrastructure',
      'Industry technology solutions',
    ],
  },
];

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = homeServices[activeIndex];

  return (
    <section
      className="py-20 lg:py-28 bg-nexino-off-white"
      aria-labelledby="services-heading"
    >
      <Container>
        <div className="mb-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-nexino-blue mb-3">
            What We Do
          </p>
          <h2
            id="services-heading"
            className="text-[2rem] sm:text-[2.4rem] font-bold text-nexino-dark tracking-[-0.025em]"
          >
            Connected capabilities,{' '}
            <span className="gradient-nexino-text">one team.</span>
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-nexino-border overflow-hidden shadow-sm">
          <div className="grid lg:grid-cols-[360px_1fr]">
            {/* Left list */}
            <div
              className="lg:border-r border-nexino-border"
              role="tablist"
              aria-label="Service categories"
            >
              {homeServices.map((svc, i) => (
                <button
                  key={svc.number}
                  role="tab"
                  aria-selected={activeIndex === i}
                  aria-controls={`svc-panel-${i}`}
                  onClick={() => setActiveIndex(i)}
                  className={`w-full text-left flex items-center gap-4 px-6 py-5 border-b border-nexino-border last:border-b-0 transition-all ${
                    activeIndex === i
                      ? 'bg-nexino-dark'
                      : 'hover:bg-nexino-off-white'
                  }`}
                >
                  <span
                    className={`text-[11px] font-bold tabular-nums w-6 shrink-0 transition-colors ${
                      activeIndex === i ? 'text-nexino-blue' : 'text-nexino-border'
                    }`}
                    aria-hidden="true"
                  >
                    {svc.number}
                  </span>
                  <span
                    className={`text-[14px] font-semibold transition-colors ${
                      activeIndex === i ? 'text-white' : 'text-nexino-text'
                    }`}
                  >
                    {svc.title}
                  </span>
                  {activeIndex === i && (
                    <ArrowRight
                      className="w-3.5 h-3.5 text-nexino-blue ml-auto shrink-0"
                      aria-hidden="true"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Right panel */}
            <div
              className="p-8 lg:p-10"
              role="tabpanel"
              id={`svc-panel-${activeIndex}`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="space-y-5"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-nexino-border bg-nexino-off-white aspect-[16/9]">
                    <Image
                      src={getServiceImage(active.slug)}
                      alt=""
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nexino-dark/40 via-transparent to-transparent" />
                  </div>
                  <div
                    className="h-0.5 w-10 rounded-full gradient-nexino"
                    aria-hidden="true"
                  />
                  <h3 className="text-[1.4rem] font-bold text-nexino-dark">{active.title}</h3>
                  <p className="text-nexino-text-secondary leading-[1.7] text-[0.95rem]">
                    {active.description}
                  </p>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                    {active.capabilities.map((cap) => (
                      <div
                        key={cap}
                        className="flex items-center gap-2 text-[13px] text-nexino-text-secondary"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-nexino-blue shrink-0"
                          aria-hidden="true"
                        />
                        {cap}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/services/${active.slug}`}
                    className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-nexino-blue hover:gap-3 transition-all"
                    aria-label={`Explore ${active.title}`}
                  >
                    Explore Service
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
