import Link from 'next/link';
import { MessageSquareQuote, CircleCheckBig, Users, CalendarClock } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { AnimatedSection } from '@/components/motion/AnimatedSection';

const expectations = [
  {
    icon: CircleCheckBig,
    title: 'Clear project requirements',
    description: 'We help define the problem, the scope and the practical outcome.',
  },
  {
    icon: Users,
    title: 'Regular communication',
    description: 'You stay informed throughout the project instead of waiting in the dark.',
  },
  {
    icon: CalendarClock,
    title: 'Opportunity to review progress',
    description: 'We build in review points so feedback can shape the final result.',
  },
  {
    icon: MessageSquareQuote,
    title: 'Support beyond launch',
    description: 'We can continue with updates, maintenance and improvements after release.',
  },
];

export function ClientExpectationsSection() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="expectations-heading">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <AnimatedSection>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-nexino-blue">
              What clients can expect
            </p>
            <h2 id="expectations-heading" className="text-4xl font-bold leading-tight text-nexino-text sm:text-5xl">
              A premium delivery experience without fake promises.
            </h2>
            <p className="mt-4 max-w-xl text-nexino-text-secondary">
              We do not invent testimonials or claim results we cannot verify. Instead, we show the
              kind of experience we intend to deliver on every project.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.08} direction="left">
            <div className="grid gap-4 sm:grid-cols-2">
              {expectations.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-nexino-border bg-nexino-off-white p-6 shadow-[0_12px_35px_rgba(15,23,42,0.05)]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-nexino-blue shadow-sm">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-bold text-nexino-text">{item.title}</h3>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-nexino-text-secondary">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>

        <div className="mt-10">
          <Link
            href="/contact?type=project"
            className="inline-flex items-center gap-2 rounded-full bg-nexino-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-nexino-blue"
          >
            Start Your Project
          </Link>
        </div>
      </Container>
    </section>
  );
}
