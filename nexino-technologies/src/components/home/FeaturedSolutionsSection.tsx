import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { AnimatedSection } from '@/components/motion/AnimatedSection';

type SolutionVisual = {
  src: string;
  alt: string;
  label: string;
};

type SolutionItem = {
  number: string;
  title: string;
  description: string;
  benefits: string[];
  href: string;
  visual: string;
  reverse: boolean;
  image?: SolutionVisual;
};

const solutions: SolutionItem[] = [
  {
    number: '01',
    title: 'E-Commerce and Custom Web Applications',
    description: 'Secure digital platforms built around products, customers and internal operations.',
    benefits: ['Built for your exact business logic', 'Scalable as your catalogue and users grow', 'Integrated with payment and logistics systems'],
    href: '/services/ecommerce-platforms',
    visual: 'bg-nexino-off-white',
    reverse: false,
  },
  {
    number: '02',
    title: 'AI Business Chatbots and WhatsApp Automation',
    description: 'Intelligent communication systems that respond, guide, capture leads and support customers.',
    benefits: ['Respond to enquiries at any hour', 'Consistent, accurate information every time', 'Reduce manual support workload significantly'],
    href: '/services/business-chatbots',
    visual: 'bg-nexino-off-white',
    reverse: true,
    image: {
      src: '/images/new/ai-robot-hand.jpg',
      alt: 'Futuristic AI robot hand illustration on a dark background',
      label: 'AI and automation',
    },
  },
  {
    number: '03',
    title: 'Hosting and Monthly Maintenance',
    description: 'Reliable technical support that keeps digital platforms monitored, updated and maintained.',
    benefits: ['Proactive monitoring before issues affect users', 'Regular security and dependency updates', 'Monthly reporting and performance reviews'],
    href: '/services/hosting-maintenance',
    visual: 'bg-nexino-off-white',
    reverse: false,
    image: {
      src: '/images/new/cloud-network.jpg',
      alt: 'Cloud computing network illustration with connected digital nodes',
      label: 'Cloud and infrastructure',
    },
  },
  {
    number: '04',
    title: 'Technical Research and Data Analytics',
    description: 'Structured research and analysis that turns information into practical recommendations.',
    benefits: ['Evidence-based decisions rather than assumptions', 'Clear documentation of methods and findings', 'Insight presented in accessible formats'],
    href: '/services/data-analytics',
    visual: 'bg-nexino-off-white',
    reverse: true,
  },
];

export function FeaturedSolutionsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="solutions-heading">
      <Container>
        <AnimatedSection className="mb-16">
          <SectionHeading
            label="Featured Solutions"
            title="Solutions businesses can start with today."
            align="center"
            titleClassName="text-4xl sm:text-5xl lg:text-[3.25rem]"
          />
        </AnimatedSection>

        <div className="space-y-16 lg:space-y-24">
          {solutions.map((sol) => (
            <AnimatedSection key={sol.number} delay={0.05}>
              <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${sol.reverse ? 'lg:flex-row-reverse' : ''}`}>
                {/* Visual side */}
                <div className={`${sol.reverse ? 'lg:order-2' : ''}`}>
                  <div className={`rounded-[28px] ${sol.visual} aspect-[4/3] border border-nexino-border relative overflow-hidden shadow-xl shadow-nexino-dark/5`}>
                    {sol.image ? (
                      <>
                        <Image
                          src={sol.image.src}
                          alt={sol.image.alt}
                          fill
                          className="object-cover transition-transform duration-700"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-nexino-dark/65" aria-hidden="true" />
                        <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6 text-white">
                          <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/75">
                            Visual focus
                          </p>
                          <p className="mt-2 text-lg font-semibold leading-tight max-w-xs">
                            {sol.image.label}
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                          <div className="text-center space-y-3">
                            <span className="text-7xl font-bold text-nexino-border/50 select-none">{sol.number}</span>
                          </div>
                        </div>
                        {/* Abstract decorations */}
                        <div className="absolute top-4 right-4 w-20 h-20 rounded-full border-2 border-nexino-blue/20" />
                        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-nexino-green/10" />
                      </>
                    )}
                  </div>
                </div>

                {/* Content side */}
                <div className={`space-y-6 ${sol.reverse ? 'lg:order-1' : ''}`}>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-nexino-blue">
                    Solution {sol.number}
                  </p>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-nexino-text leading-tight">
                    {sol.title}
                  </h3>
                  <p className="text-nexino-text-secondary leading-relaxed text-lg">
                    {sol.description}
                  </p>
                  <ul className="space-y-3" role="list">
                    {sol.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-nexino-green shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-nexino-text-secondary">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={sol.href}
                    className="inline-flex items-center gap-2 font-semibold text-nexino-blue hover:gap-3 transition-all"
                  >
                    Explore Solution
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
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
