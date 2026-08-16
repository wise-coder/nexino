import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { AnimatedSection } from '@/components/motion/AnimatedSection';

const reasons = [
  {
    title: 'Business-first thinking',
    description:
      'We begin by understanding the problem before recommending technology.',
  },
  {
    title: 'Clear project planning',
    description:
      'We define requirements, priorities and delivery steps before development.',
  },
  {
    title: 'User-focused design',
    description:
      'We build products around the people who will actually use them.',
  },
  {
    title: 'Scalable engineering',
    description:
      'We consider maintainability and future growth from the beginning.',
  },
  {
    title: 'Clear communication',
    description:
      'Clients remain involved throughout the project.',
  },
  {
    title: 'Support after launch',
    description:
      'Maintenance, improvements and technical assistance can continue after delivery.',
  },
];

export function WhyNexinoSection() {
  return (
    <section className="bg-nexino-dark py-20 lg:py-28" aria-labelledby="why-nexino-heading">
      <Container>
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-nexino-green">
            Why work with Nexino
          </p>
          <h2 id="why-nexino-heading" className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            More than a vendor. A practical technology partner.
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_24px_60px_rgba(0,0,0,0.22)]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/home/industrial-tablet-engineer.jpg"
                  alt="Engineer reviewing a digital system on an industrial tablet"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nexino-dark/80 via-nexino-dark/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                    Working style
                  </p>
                  <h3 className="mt-2 max-w-md text-2xl font-bold leading-tight">
                    Collaborative, transparent and built for practical outcomes.
                  </h3>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1} direction="left">
            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 text-white shadow-[0_12px_30px_rgba(0,0,0,0.12)]"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-sm font-bold text-nexino-green">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <CheckCircle2 className="h-5 w-5 text-nexino-green" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{reason.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
