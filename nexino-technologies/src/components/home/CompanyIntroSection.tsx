import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { AnimatedSection } from '@/components/motion/AnimatedSection';

const capabilities = [
  { number: '01', title: 'Clear planning', description: 'We start by understanding the problem, the users and the outcome you need.' },
  { number: '02', title: 'Business focus', description: 'Every recommendation is tied to a real operational need, not unnecessary features.' },
  { number: '03', title: 'Responsive communication', description: 'You know what is being worked on, what is complete and what comes next.' },
  { number: '04', title: 'Maintainable delivery', description: 'We build solutions that can be supported, updated and extended after launch.' },
];

const trustMarks = ['Clear scope', 'Practical delivery', 'Support after launch'];

export function CompanyIntroSection() {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="intro-heading">
      <Container>
        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20 lg:mb-28">
          <AnimatedSection>
            <h2
              id="intro-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-nexino-text leading-tight tracking-tight"
            >
              A technology partner for intelligent systems and digital operations.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1} direction="left">
            <div className="space-y-6 lg:pt-4">
              <p className="text-lg leading-relaxed text-nexino-text-secondary">
                Every organisation has different goals, users and operational challenges. Nexino starts by understanding what you need, who will use the solution and what success should look like.
              </p>
              <p className="text-lg leading-relaxed text-nexino-text-secondary">
                We then help you plan, engineer and deliver practical technology across software platforms, AI-enabled tools, automation, cloud infrastructure, embedded systems and modern websites where they add value.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-semibold text-nexino-blue hover:gap-3 transition-all"
              >
                Tell Us About Your Project
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              <div className="flex flex-wrap gap-2 pt-1">
                {trustMarks.map((mark) => (
                  <span
                    key={mark}
                    className="inline-flex items-center rounded-full border border-nexino-border bg-nexino-off-white px-3 py-1 text-xs font-semibold text-nexino-text-secondary"
                  >
                    {mark}
                  </span>
                ))}
              </div>

              <div className="relative overflow-hidden rounded-[28px] border border-nexino-border bg-nexino-off-white shadow-xl shadow-nexino-dark/5">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/new/team-coding-top-view.jpg"
                    alt="Team members collaborating around a laptop in an overhead coding session"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-nexino-dark/70" aria-hidden="true" />
                  <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6 text-white">
                    <p className="text-sm font-semibold tracking-[0.02em]">
                      Clear communication and practical delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Capability blocks */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-nexino-border" role="list">
          {capabilities.map((cap, i) => (
            <AnimatedSection key={cap.number} delay={i * 0.08}>
              <div
                className="bg-white p-8 lg:p-10 space-y-4 hover:bg-nexino-off-white transition-colors"
                role="listitem"
              >
                <span className="text-5xl font-bold text-nexino-border select-none" aria-hidden="true">
                  {cap.number}
                </span>
                <h3 className="text-2xl font-bold text-nexino-text">{cap.title}</h3>
                <p className="text-nexino-text-secondary leading-relaxed">{cap.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
