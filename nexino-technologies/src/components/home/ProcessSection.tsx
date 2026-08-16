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
        <AnimatedSection className="mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-nexino-blue mb-3">
            Our Process
          </p>
          <h2
            id="process-heading"
            className="text-[2rem] sm:text-[2.4rem] font-bold text-nexino-dark tracking-[-0.025em] leading-[1.1]"
          >
            From challenge to{' '}
            <span className="gradient-nexino-text">working solution.</span>
          </h2>
        </AnimatedSection>

        {/* Desktop timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            <div
              className="absolute top-[1.65rem] left-0 right-0 h-px bg-nexino-border"
              aria-hidden="true"
            />
            <div className="grid grid-cols-6 gap-4" role="list">
              {steps.map((step, i) => (
                <AnimatedSection key={step.number} delay={i * 0.07}>
                  <div role="listitem" className="relative space-y-4">
                    <div className="relative z-10 w-[3.3rem] h-[3.3rem] rounded-full border border-nexino-border bg-white flex items-center justify-center">
                      <span className="text-[11px] font-bold text-nexino-blue">{step.number}</span>
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-[14px] font-bold text-nexino-dark">{step.title}</h3>
                      <p className="text-[12.5px] text-nexino-text-secondary leading-[1.6]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden relative pl-7 border-l border-nexino-border space-y-7" role="list">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.05}>
              <div role="listitem" className="relative">
                <div
                  className="absolute -left-[1.95rem] top-0.5 w-[1rem] h-[1rem] rounded-full bg-nexino-blue border-2 border-white shadow-sm"
                  aria-hidden="true"
                />
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-nexino-blue uppercase tracking-wider">
                    {step.number}
                  </p>
                  <h3 className="text-[14px] font-bold text-nexino-dark">{step.title}</h3>
                  <p className="text-[13px] text-nexino-text-secondary leading-[1.6]">
                    {step.description}
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
