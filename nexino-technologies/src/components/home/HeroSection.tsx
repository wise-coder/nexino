'use client';

import Image from 'next/image';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { homeVisuals, newVisuals } from '@/data/local-images';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-white overflow-hidden pt-16 lg:pt-[68px]"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, #E4E7EC 1px, transparent 1px), linear-gradient(to bottom, #E4E7EC 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            opacity: 0.35,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
        <div className="absolute top-1/4 right-0 w-[520px] h-[520px] rounded-full bg-nexino-blue/4 blur-[80px]" />
        <div className="absolute bottom-0 left-[10%] w-[320px] h-[320px] rounded-full bg-nexino-green/4 blur-[60px]" />
      </div>

      <Container className="relative py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          <div className="space-y-7 max-w-[560px]">
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-nexino-blue">
                <span className="w-4 h-px bg-nexino-blue" aria-hidden="true" />
                Smart Solutions. Real Impact.
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              {...fadeUp(0.08)}
              className="text-[2.6rem] sm:text-5xl lg:text-[3.5rem] font-bold text-nexino-dark leading-[1.08] tracking-[-0.03em]"
            >
              Engineering smarter systems for{' '}
              <span className="gradient-nexino-text">real&#8209;world impact.</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.16)}
              className="text-[1.05rem] leading-[1.75] text-nexino-text-secondary"
            >
              We design software, artificial intelligence, data systems and connected
              technologies that help organisations automate operations, improve experiences
              and grow.
            </motion.p>

            <motion.div {...fadeUp(0.22)} className="flex flex-wrap gap-3">
              <Link
                href="/contact?type=project"
                className="inline-flex items-center gap-2 bg-nexino-blue text-white font-semibold px-6 py-3.5 rounded-full text-[14px] hover:bg-[#0080d4] transition-colors shadow-md shadow-nexino-blue/20"
              >
                Start a Project
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-nexino-border text-nexino-text font-semibold px-6 py-3.5 rounded-full text-[14px] hover:border-nexino-blue hover:text-nexino-blue transition-colors"
              >
                Our Capabilities
              </Link>
            </motion.div>

            <motion.div
              {...fadeUp(0.28)}
              className="flex flex-wrap gap-2"
              aria-label="Core capabilities"
            >
              {['Software Engineering', 'AI Automation', 'Data Intelligence', 'Cloud Infrastructure', 'Embedded Systems'].map((cap) => (
                <span
                  key={cap}
                  className="text-[11.5px] font-medium text-nexino-text-secondary bg-nexino-off-white border border-nexino-border px-3 py-1.5 rounded-full"
                >
                  {cap}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.05, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[380px] lg:h-[520px]"
            aria-hidden="true"
          >
            <div className="absolute inset-0 rounded-[2rem] overflow-hidden border border-nexino-border bg-nexino-off-white shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
              <Image
                src={newVisuals.homeHero}
                alt=""
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-nexino-dark/55 via-transparent to-transparent" />
            </div>

            <div className="absolute -right-2 top-10 w-[44%] h-[46%] rounded-[1.5rem] overflow-hidden border border-white/60 bg-white shadow-xl">
              <Image
                src={homeVisuals.heroSecondary}
                alt=""
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute left-6 bottom-6 max-w-[220px] rounded-2xl border border-white/70 bg-white/92 px-4 py-3 shadow-lg backdrop-blur">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-nexino-blue">
                Connected delivery
              </p>
              <p className="mt-1 text-[12.5px] text-nexino-text-secondary">
                Strategy, software, AI and infrastructure working together.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-nexino-text-secondary/50" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
