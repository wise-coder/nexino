import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { newVisuals } from '@/data/local-images';

const capabilities = [
  {
    number: '01',
    title: 'Software',
    description: 'Build user-friendly and scalable digital products.',
  },
  {
    number: '02',
    title: 'Intelligence',
    description: 'Apply AI, automation and data to practical workflows.',
  },
  {
    number: '03',
    title: 'Infrastructure',
    description: 'Create reliable foundations for digital operations.',
  },
  {
    number: '04',
    title: 'Engineering',
    description: 'Connect software, devices and physical environments.',
  },
];

export function CompanyIntroSection() {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="intro-heading">
      <Container>
        {/* Split intro */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-16 lg:mb-20">
          <AnimatedSection>
            <h2
              id="intro-heading"
              className="text-[2rem] sm:text-[2.4rem] lg:text-[2.9rem] font-bold text-nexino-dark leading-[1.1] tracking-[-0.025em]"
            >
              One technology partner.{' '}
              <span className="gradient-nexino-text">Multiple connected capabilities.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1} direction="left">
            <div className="space-y-5 lg:pt-2">
              <div className="relative overflow-hidden rounded-2xl border border-nexino-border bg-nexino-off-white aspect-[16/10]">
                <Image
                  src={newVisuals.homeIntro}
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nexino-dark/35 via-transparent to-transparent" />
              </div>
              <p className="text-[1rem] leading-[1.75] text-nexino-text-secondary">
                Nexino Technologies combines strategy, research, design and engineering to turn
                complex challenges into practical digital systems.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-nexino-blue hover:gap-3 transition-all"
              >
                Learn About Nexino
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Capability blocks — horizontal rule dividers */}
        <div className="border-t border-nexino-border" role="list">
          {capabilities.map((cap, i) => (
            <AnimatedSection key={cap.number} delay={i * 0.06}>
              <div
                className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 py-7 border-b border-nexino-border group hover:bg-nexino-off-white transition-colors px-2 rounded-sm"
                role="listitem"
              >
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.15em] text-nexino-text-secondary/60 sm:w-12 shrink-0 pt-1"
                  aria-hidden="true"
                >
                  {cap.number}
                </span>
                <div className="flex-1 grid sm:grid-cols-2 gap-2">
                  <h3 className="text-[1.1rem] font-bold text-nexino-dark">{cap.title}</h3>
                  <p className="text-[0.92rem] text-nexino-text-secondary leading-[1.6]">
                    {cap.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
