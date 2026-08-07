'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/shared/Container';

const NexinoHeroObject = dynamic(
  () => import('@/components/three/NexinoHeroObject').then((m) => ({ default: m.NexinoHeroObject })),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center" aria-hidden="true">
        <div className="h-40 w-40 rounded-full border border-nexino-blue/20 border-t-nexino-blue/50 animate-spin" />
      </div>
    ),
  },
);

const description =
  'Nexino Technologies designs and develops professional websites, custom business systems, web applications, automation tools and intelligent digital solutions built around your goals.';

export function HeroSection() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      className="relative overflow-hidden bg-white pt-20 lg:pt-24 min-h-[calc(100vh-5rem)]"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute left-[5%] top-[6%] h-3 w-3 rounded-full bg-nexino-blue/25" />
        <div className="absolute left-[15%] top-[18%] h-2.5 w-2.5 rounded-full bg-nexino-blue/20" />
        <div className="absolute right-[12%] top-[8%] h-3 w-3 rounded-full bg-nexino-blue/25" />
        <div className="absolute right-[17%] bottom-[16%] h-2.5 w-2.5 rounded-full bg-nexino-green/25" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.03]" viewBox="0 0 1440 900" fill="none" aria-hidden="true">
          <path d="M168 136L468 172L780 98L1128 164" stroke="#0094E8" strokeWidth="1" />
          <path d="M220 644L496 540L778 646L1038 520L1260 628" stroke="#12C878" strokeWidth="1" />
          <circle cx="168" cy="136" r="4" fill="#0094E8" />
          <circle cx="468" cy="172" r="4" fill="#0094E8" />
          <circle cx="780" cy="98" r="4" fill="#12C878" />
          <circle cx="1128" cy="164" r="4" fill="#0094E8" />
          <circle cx="220" cy="644" r="4" fill="#0094E8" />
          <circle cx="496" cy="540" r="4" fill="#12C878" />
          <circle cx="778" cy="646" r="4" fill="#0094E8" />
          <circle cx="1038" cy="520" r="4" fill="#12C878" />
          <circle cx="1260" cy="628" r="4" fill="#0094E8" />
        </svg>
      </div>

      <Container className="relative py-10 lg:py-12">
        <div className="grid items-center gap-12 lg:min-h-[calc(100vh-10rem)] lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-2xl space-y-8 lg:space-y-10">

            <motion.h1
              id="hero-heading"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05, ease: 'easeOut' }}
              className="max-w-3xl text-[clamp(2.35rem,4.6vw,4.35rem)] font-bold leading-[0.96] tracking-tight text-nexino-text"
            >
              <span className="block">Build the website or system</span>
              <span className="block">your organisation needs.</span>
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16, ease: 'easeOut' }}
              className="max-w-2xl text-lg leading-relaxed text-nexino-text-secondary sm:text-xl"
            >
              {description}
            </motion.p>

            <p className="max-w-2xl text-sm leading-relaxed text-nexino-text-secondary">
              You do not need a technical specification to get started. Tell us what you want to build or improve, and we will guide you through the next steps.
            </p>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24, ease: 'easeOut' }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact?type=project"
                className="inline-flex items-center gap-2 rounded-full bg-black px-7 py-4 font-semibold text-white shadow-lg shadow-black/20 transition-colors hover:bg-neutral-800"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border-2 border-black px-7 py-4 font-semibold text-black transition-colors hover:bg-black hover:text-white"
              >
                Request a Consultation
              </Link>
            </motion.div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-nexino-blue hover:gap-3 transition-all"
            >
              See What We Can Build
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <motion.div
            initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-[620px]"
            aria-hidden="true"
          >
            <div className="absolute inset-[16%] rounded-full bg-black/5 blur-3xl animate-hero-drift" />
            <div className="relative aspect-square">
              <NexinoHeroObject reduceMotion={reduceMotion} className="absolute inset-0" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.72 }}
          className="mt-8 flex justify-center lg:mt-0 lg:absolute lg:bottom-8 lg:left-1/2 lg:-translate-x-1/2"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-[0.22em] text-nexino-text-secondary">
              Scroll
            </span>
            <motion.div
              animate={reduceMotion ? {} : { y: [0, 6, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown className="h-4 w-4 text-nexino-text-secondary" />
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
