import Image from 'next/image';
import { Container } from '@/components/shared/Container';
import { AnimatedSection } from '@/components/motion/AnimatedSection';

const steps = [
  {
    number: '01',
    title: 'Understand',
    description: 'We learn about your organisation, users and challenge.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'We define requirements, scope and priorities.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'We design the user experience and solution architecture.',
  },
  {
    number: '04',
    title: 'Develop',
    description: 'We build the website, system or application.',
  },
  {
    number: '05',
    title: 'Test',
    description: 'We test functionality, usability and performance.',
  },
  {
    number: '06',
    title: 'Launch & Support',
    description: 'We deploy the solution and provide continued support where required.',
  },
];

export function ProcessSection() {
  return (
    <section className="bg-nexino-off-white py-20 lg:py-28" aria-labelledby="process-heading">
      <Container>
        <div className="mb-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <AnimatedSection>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-nexino-blue">
              How we work
            </p>
            <h2 id="process-heading" className="text-4xl font-bold leading-tight text-nexino-text sm:text-5xl">
              From your idea to a working solution.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.08} direction="left">
            <div className="relative overflow-hidden rounded-[2rem] border border-nexino-border bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/images/home/data-center-server-rack.jpg"
                  alt="Data center server racks showing the infrastructure behind digital products"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nexino-dark/75 via-nexino-dark/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/65">
                    Delivery rhythm
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/85 max-w-xl">
                    Clear stages, regular review and a pace that keeps everyone aligned.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3" role="list">
          {steps.map((step, index) => (
            <AnimatedSection key={step.number} delay={index * 0.06}>
              <div className="group rounded-[1.5rem] border border-nexino-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(15,23,42,0.08)]">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-5xl font-bold text-nexino-border select-none" aria-hidden="true">
                    {step.number}
                  </span>
                  <span className="h-2.5 w-2.5 rounded-full bg-nexino-green" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-nexino-text">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-nexino-text-secondary">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
