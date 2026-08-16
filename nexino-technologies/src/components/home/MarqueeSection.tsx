'use client';

import { marqueeCapabilities } from '@/data/technologies';

function MarqueeTrack({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div
      className="flex gap-10 animate-marquee hover:[animation-play-state:paused]"
      aria-hidden="true"
    >
      {doubled.map((item, i) => (
        <span
          key={i}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold whitespace-nowrap uppercase tracking-tight select-none text-nexino-text/8"
          style={{
            WebkitTextStroke: '1px #CBD5E1',
            color: 'transparent',
          }}
        >
          {item}
          <span
            className="mx-8 text-nexino-border"
            style={{ WebkitTextStroke: 0, color: '#CBD5E1' }}
          >
            /
          </span>
        </span>
      ))}
    </div>
  );
}

export function MarqueeSection() {
  return (
    <section
      className="py-10 bg-white overflow-hidden border-y border-nexino-border"
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
