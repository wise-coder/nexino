import Image from 'next/image';
import { Container } from '@/components/shared/Container';
import { AnimatedSection } from '@/components/motion/AnimatedSection';

const steps = [
  { number: '01', title: 'Discover', description: 'Understand the organisation, users, goals and constraints.' },
  { number: '02', title: 'Research', description: 'Examine the problem, relevant technologies and practical options.' },
  { number: '03', title: 'Design', description: 'Create the product experience and technical structure.' },
  { number: '04', title: 'Engineer', description: 'Build maintainable, scalable and secure systems.' },
  { number: '05', title: 'Validate', description: 'Test functionality, usability and performance.' },
  { number: '06', title: 'Deploy and Support', description: 'Launch the solution and support continued improvement.' },
];

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="process-heading">
      <Container>
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-10 lg:gap-14 items-end mb-16">
          <AnimatedSection>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-nexino-blue mb-3">
              Our Process
            </p>
            <h2 id="process-heading" className="text-4xl sm:text-5xl font-bold text-nexino-text leading-tight">
              From challenge to<br />
              <span className="font-semibold text-nexino-text">working solution.</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} direction="left">
            <div className="relative overflow-hidden rounded-[28px] border border-nexino-border shadow-xl shadow-nexino-dark/5 aspect-[16/10]">
              <Image
                src="/images/new/monitor-desk.jpg"
                alt="Modern workstation with multiple monitors in a technical workspace"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
              <div className="absolute inset-0 p-5 flex items-end">
                <p className="text-white font-semibold">Clear steps from discovery to support</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Desktop timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            <div
              className="absolute top-[2.25rem] left-0 right-0 h-px bg-nexino-border"
              aria-hidden="true"
            />
            <div className="grid grid-cols-6 gap-4" role="list">
              {steps.map((step, i) => (
                <AnimatedSection key={step.number} delay={i * 0.07}>
                  <div role="listitem" className="relative space-y-5">
                    <div className="relative z-10 w-[4.5rem] h-[4.5rem] rounded-full border-2 border-nexino-blue bg-white flex items-center justify-center">
                      <span className="text-sm font-bold text-nexino-blue">{step.number}</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-nexino-text">{step.title}</h3>
                      <p className="text-sm text-nexino-text-secondary leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden relative pl-8 border-l-2 border-nexino-border space-y-8" role="list">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.06}>
              <div role="listitem" className="relative">
                <div
                  className="absolute -left-[2.65rem] top-0 w-[1.25rem] h-[1.25rem] rounded-full bg-nexino-blue border-4 border-white"
                  aria-hidden="true"
                />
                <div className="space-y-1.5">
                  <p className="text-xs font-bold text-nexino-blue uppercase tracking-wider">{step.number}</p>
                  <h3 className="font-bold text-nexino-text">{step.title}</h3>
                  <p className="text-sm text-nexino-text-secondary leading-relaxed">{step.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
