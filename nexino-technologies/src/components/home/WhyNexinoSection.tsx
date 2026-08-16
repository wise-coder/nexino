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
      'Our capabilities span software, AI, data, cloud and embedded engineering. Complex challenges often require more than one discipline — we bring them together.',
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
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-nexino-blue/6 blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-nexino-green/5 blur-[60px]" />
      </div>

      <Container className="relative">
        <div className="mb-12">
          <p className="text-nexino-green text-[11px] font-bold uppercase tracking-[0.18em] mb-3">
            Why Nexino
          </p>
          <h2
            id="why-nexino-heading"
            className="text-[2rem] sm:text-[2.4rem] font-bold text-white tracking-[-0.025em] leading-[1.1]"
          >
            Built for more than{' '}
            <span className="gradient-nexino-text">product launch.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left — tab list */}
          <div role="tablist" aria-label="Reasons to choose Nexino" className="space-y-1">
            {reasons.map((reason, i) => (
              <button
                key={reason.number}
                role="tab"
                aria-selected={activeIndex === i}
                aria-controls={`why-panel-${i}`}
                onClick={() => setActiveIndex(i)}
                className={`w-full text-left flex items-center gap-4 px-5 py-4 rounded-xl transition-all ${
                  activeIndex === i
                    ? 'bg-white/8 border border-white/12'
                    : 'hover:bg-white/4 border border-transparent'
                }`}
              >
                <span
                  className={`text-[11px] font-bold tabular-nums w-7 shrink-0 transition-colors ${
                    activeIndex === i ? 'text-nexino-blue' : 'text-white/25'
                  }`}
                  aria-hidden="true"
                >
                  {reason.number}
                </span>
                <span
                  className={`text-[14px] font-semibold transition-colors ${
                    activeIndex === i ? 'text-white' : 'text-white/50'
                  }`}
                >
                  {reason.title}
                </span>
                {activeIndex === i && (
                  <div
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-nexino-blue shrink-0"
                    aria-hidden="true"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Right — panel */}
          <div className="lg:sticky lg:top-24">
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
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="p-8 rounded-2xl border border-white/10 bg-white/5 space-y-4"
                    >
                      <p
                        className="text-[5rem] font-bold leading-none select-none"
                        style={{ color: 'rgba(255,255,255,0.06)' }}
                        aria-hidden="true"
                      >
                        {reason.number}
                      </p>
                      <h3 className="text-[1.4rem] font-bold text-white">{reason.title}</h3>
                      <p className="text-white/60 leading-[1.75] text-[0.95rem]">
                        {reason.description}
                      </p>
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
