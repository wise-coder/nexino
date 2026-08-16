import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { getServiceImage } from '@/data/local-images';

const solutions = [
  {
    number: '01',
    title: 'E-Commerce and Custom Web Applications',
    description:
      'Secure digital platforms built around products, customers and internal operations.',
    benefits: [
      'Built for your exact business logic',
      'Scalable as your catalogue and users grow',
      'Integrated with payment and logistics systems',
    ],
    href: '/services/ecommerce-platforms',
    reverse: false,
  },
  {
    number: '02',
    title: 'AI Business Chatbots and WhatsApp Automation',
    description:
      'Intelligent communication systems that respond, guide, capture leads and support customers.',
    benefits: [
      'Respond to enquiries at any hour',
      'Consistent, accurate information every time',
      'Reduce manual support workload significantly',
    ],
    href: '/services/business-chatbots',
    reverse: true,
  },
  {
    number: '03',
    title: 'Hosting and Monthly Maintenance',
    description:
      'Reliable technical support that keeps digital platforms monitored, updated and maintained.',
    benefits: [
      'Proactive monitoring before issues affect users',
      'Regular security and dependency updates',
      'Monthly reporting and performance reviews',
    ],
    href: '/services/hosting-maintenance',
    reverse: false,
  },
  {
    number: '04',
    title: 'Technical Research and Data Analytics',
    description:
      'Structured research and analysis that turns information into practical recommendations.',
    benefits: [
      'Evidence-based decisions rather than assumptions',
      'Clear documentation of methods and findings',
      'Insight presented in accessible formats',
    ],
    href: '/services/data-analytics',
    reverse: true,
  },
];

function Visual({ number, src }: { number: string; src: string }) {
  return (
    <div className="rounded-2xl bg-nexino-off-white border border-nexino-border aspect-[4/3] relative overflow-hidden">
      <Image src={src} alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-tr from-nexino-dark/45 via-transparent to-transparent" />
      <span
        className="absolute top-4 left-4 inline-flex items-center justify-center rounded-full bg-white/92 border border-white/70 px-3 py-1 text-[11px] font-bold text-nexino-dark shadow-sm backdrop-blur"
        aria-hidden="true"
      >
        {number}
      </span>
    </div>
  );
}

export function FeaturedSolutionsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="solutions-heading">
      <Container>
        <AnimatedSection className="mb-16 max-w-xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-nexino-blue mb-3">
            Featured Solutions
          </p>
          <h2
            id="solutions-heading"
            className="text-[2rem] sm:text-[2.4rem] font-bold text-nexino-dark tracking-[-0.025em] leading-[1.1]"
          >
            Solutions businesses can start with today.
          </h2>
        </AnimatedSection>

        <div className="space-y-20 lg:space-y-28">
          {solutions.map((sol) => (
            <AnimatedSection key={sol.number} delay={0.04}>
              <div
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  sol.reverse ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <Visual number={sol.number} src={getServiceImage(sol.href.replace('/services/', ''))} />
                <div className="space-y-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-nexino-blue">
                    Solution {sol.number}
                  </p>
                  <h3 className="text-[1.5rem] sm:text-[1.75rem] font-bold text-nexino-dark leading-[1.15] tracking-[-0.02em]">
                    {sol.title}
                  </h3>
                  <p className="text-nexino-text-secondary leading-[1.7] text-[0.95rem]">
                    {sol.description}
                  </p>
                  <ul className="space-y-2.5" role="list">
                    {sol.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckCircle
                          className="w-4 h-4 text-nexino-green shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="text-[13.5px] text-nexino-text-secondary">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={sol.href}
                    className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-nexino-blue hover:gap-3 transition-all"
                  >
                    Explore Solution
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
