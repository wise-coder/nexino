import { Container } from '@/components/shared/Container';
import { technologies } from '@/data/technologies';
import { AnimatedSection } from '@/components/motion/AnimatedSection';

function TechTrack({ items }: { items: typeof technologies }) {
  const doubled = [...items, ...items];
  return (
    <div
      className="flex gap-3 animate-marquee hover:[animation-play-state:paused]"
      aria-hidden="true"
    >
      {doubled.map((tech, i) => (
        <div
          key={i}
          className="flex items-center gap-2 bg-white border border-nexino-border rounded-full px-4 py-2 whitespace-nowrap"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-nexino-blue shrink-0" aria-hidden="true" />
          <span className="text-[13px] font-semibold text-nexino-text">{tech.name}</span>
          <span className="text-[11px] text-nexino-text-secondary hidden sm:block">
            {tech.category}
          </span>
        </div>
      ))}
    </div>
  );
}

export function TechnologyMarqueeSection() {
  return (
    <section
      className="py-16 lg:py-20 bg-nexino-off-white border-y border-nexino-border"
      aria-labelledby="tech-heading"
    >
      <Container className="mb-10">
        <AnimatedSection>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-nexino-blue mb-3">
            Technology
          </p>
          <h2
            id="tech-heading"
            className="text-[2rem] sm:text-[2.4rem] font-bold text-nexino-dark tracking-[-0.025em]"
          >
            Tools selected for the problem,{' '}
            <span className="gradient-nexino-text">not the trend.</span>
          </h2>
        </AnimatedSection>
      </Container>

      <ul className="sr-only">
        {technologies.map((tech) => (
          <li key={tech.name}>
            {tech.name} — {tech.category}
          </li>
        ))}
      </ul>

      <div className="overflow-hidden">
        <TechTrack items={technologies} />
      </div>
    </section>
  );
}
