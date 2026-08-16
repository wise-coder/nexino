'use client';

import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Container } from '@/components/shared/Container';
import { AnimatedSection } from '@/components/motion/AnimatedSection';

const stats = [
  { value: 5, suffix: '', label: 'Core technology areas' },
  { value: 16, suffix: '+', label: 'Technology capabilities' },
  { value: 6, suffix: '', label: 'Project delivery stages' },
  { value: 1, suffix: '', label: 'Integrated technology partner' },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const [animatedCount, setAnimatedCount] = useState(0);
  const reduceMotion = useReducedMotion() ?? false;
  const count = reduceMotion ? value : animatedCount;

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    let raf = 0;
    const start = performance.now();
    const duration = 900;

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setAnimatedCount(Math.round(value * progress));

      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [reduceMotion, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function CapabilityStatsSection() {
  return (
    <section className="bg-nexino-navy py-20 lg:py-24" aria-labelledby="stats-heading">
      <Container>
        <div className="mb-12 max-w-3xl">
          <AnimatedSection>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-nexino-green">
              Capability indicators
            </p>
            <h2 id="stats-heading" className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              Honest indicators of what Nexino can cover.
            </h2>
          </AnimatedSection>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 0.06}>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 text-white shadow-[0_14px_40px_rgba(0,0,0,0.12)]">
                <p className="text-5xl font-bold tracking-tight text-white">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
