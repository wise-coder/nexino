'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/shared/Container';

const reasons = [
  {
    number: '01',
    title: 'Business-first thinking',
    description:
      'We start with your operational challenge, not with technology. Every system we build has a clear business purpose and measurable value.',
  },
  {
    number: '02',
    title: 'Connected technical expertise',
    description:
      'Our capabilities span software, AI, data, cloud and embedded engineering. Complex challenges often require more than one discipline - we bring them together.',
  },
  {
    number: '03',
    title: 'Scalable engineering',
    description:
      'We build for where your organisation is going, not just where it is now. Scalable architecture reduces the cost of growth.',
  },
  {
    number: '04',
    title: 'Clear communication',
    description:
      'We translate technical decisions into plain language. You know what is being built, why it matters and what comes next.',
  },
  {
    number: '05',
    title: 'Research-driven decisions',
    description:
      'Before we build, we examine the problem and the options. Our recommendations are based on evidence and professional judgment.',
  },
  {
    number: '06',
    title: 'Long-term support',
    description:
      'We do not disappear after delivery. Maintenance, monitoring and ongoing development are part of how we work.',
  },
];

export function WhyNexinoSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="py-20 lg:py-28 bg-nexino-dark relative overflow-hidden"
      aria-labelledby="why-nexino-heading"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-nexino-blue/5 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-nexino-green/5 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="mb-14">
          <p className="text-nexino-green text-xs font-bold uppercase tracking-[0.15em] mb-3">
            Why Nexino Technologies
          </p>
          <h2
            id="why-nexino-heading"
            className="text-4xl sm:text-5xl font-bold text-white leading-tight"
          >
            Built for more than
            <br />
            <span className="font-semibold text-white">product launch.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div role="tablist" aria-label="Reasons to choose Nexino Technologies" className="space-y-1">
            {reasons.map((reason, i) => (
              <button
                key={reason.number}
                role="tab"
                aria-selected={activeIndex === i}
                aria-controls={`why-panel-${i}`}
                onClick={() => setActiveIndex(i)}
                className={`w-full text-left flex items-center gap-5 px-6 py-5 rounded-xl transition-all ${
                  activeIndex === i ? 'bg-white/10 border border-white/20' : 'hover:bg-white/5'
                }`}
              >
                <span
                  className={`text-sm font-bold tabular-nums w-8 shrink-0 transition-colors ${
                    activeIndex === i ? 'text-nexino-blue' : 'text-white/30'
                  }`}
                  aria-hidden="true"
                >
                  {reason.number}
                </span>
                <span
                  className={`text-base font-semibold transition-colors ${
                    activeIndex === i ? 'text-white' : 'text-white/60 hover:text-white/80'
                  }`}
                >
                  {reason.title}
                </span>
                {activeIndex === i && (
                  <div className="ml-auto w-2 h-2 rounded-full bg-nexino-blue" aria-hidden="true" />
                )}
              </button>
            ))}
          </div>

          <div className="lg:sticky lg:top-28">
            {reasons.map((reason, i) => (
              <div
                key={reason.number}
                role="tabpanel"
                id={`why-panel-${i}`}
                hidden={activeIndex !== i}
              >
                <AnimatePresence mode="wait">
                  {activeIndex === i && (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.4 }}
                      className="p-8 rounded-2xl border border-white/10 bg-white/5 space-y-4"
                    >
                      <p className="text-6xl font-bold text-white/10 select-none" aria-hidden="true">
                        {reason.number}
                      </p>
                      <h3 className="text-2xl font-bold text-white">{reason.title}</h3>
                      <p className="text-white/70 leading-relaxed text-lg">{reason.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
