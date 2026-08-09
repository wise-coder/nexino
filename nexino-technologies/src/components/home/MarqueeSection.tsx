'use client';

import { marqueeCapabilities } from '@/data/technologies';

function MarqueeTrack({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex gap-12 animate-marquee hover:[animation-play-state:paused]" aria-hidden="true">
      {doubled.map((item, i) => (
        <span
          key={i}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold whitespace-nowrap uppercase tracking-tight select-none"
          style={{
            WebkitTextStroke: '1.5px #0094E8',
            color: 'transparent',
          }}
        >
          {item}
          <span className="mx-6 text-nexino-blue" style={{ WebkitTextStroke: 0, color: '#0094E8' }}>
            |
          </span>
        </span>
      ))}
    </div>
  );
}

export function MarqueeSection() {
  return (
    <section
      className="py-12 bg-nexino-off-white overflow-hidden border-y border-nexino-border"
      aria-label="Capability areas"
    >
      <ul className="sr-only">
        {marqueeCapabilities.map((cap) => (
          <li key={cap}>{cap}</li>
        ))}
      </ul>
      <div className="flex overflow-hidden">
        <MarqueeTrack items={marqueeCapabilities} />
      </div>
    </section>
  );
}

