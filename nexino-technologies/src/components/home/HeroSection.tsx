'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '@/components/shared/Container';
import { pageHeroImages } from '@/data/image-assets';

const heroBullets = [
  'Websites and web applications',
  'AI, automation and cloud systems',
  'Embedded and intelligent infrastructure',
];

export function HeroSection() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      className="relative overflow-hidden bg-white pt-24 lg:pt-28"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[8%] top-[12%] h-56 w-56 rounded-full bg-nexino-blue/8 blur-3xl" />
        <div className="absolute right-[6%] top-[18%] h-72 w-72 rounded-full bg-nexino-green/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-40 w-[52rem] -translate-x-1/2 rounded-full bg-nexino-navy/5 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.98fr] lg:min-h-[calc(100vh-7rem)]">
          <div className="max-w-2xl space-y-8">
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 rounded-full border border-nexino-border bg-nexino-off-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-nexino-text-secondary"
            >
              <Sparkles className="h-3.5 w-3.5 text-nexino-blue" aria-hidden="true" />
              Smart Solutions. Real Impact.
            </motion.p>

            <motion.h1
              id="hero-heading"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.06, ease: 'easeOut' }}
              className="max-w-3xl text-[clamp(2.55rem,6vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-nexino-text"
            >
              Build software,
              <span className="block text-nexino-navy">automation and intelligent systems.</span>
            </motion.h1>

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14, ease: 'easeOut' }}
              className="max-w-2xl text-lg leading-relaxed text-nexino-text-secondary sm:text-xl"
            >
              Nexino Technologies Ltd designs and develops practical digital products, AI-enabled tools,
              cloud infrastructure and embedded solutions for organisations that want technology to do
              real work.
            </motion.p>

            <div className="flex flex-wrap gap-3">
              {heroBullets.map((bullet) => (
                <span
                  key={bullet}
                  className="inline-flex items-center rounded-full border border-nexino-border bg-white px-4 py-2 text-sm font-medium text-nexino-text-secondary shadow-sm"
                >
                  {bullet}
                </span>
              ))}
            </div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22, ease: 'easeOut' }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact?type=project"
                className="inline-flex items-center gap-2 rounded-full bg-nexino-blue px-7 py-4 font-semibold text-white shadow-lg shadow-nexino-blue/25 transition-colors hover:bg-nexino-navy"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border-2 border-nexino-navy px-7 py-4 font-semibold text-nexino-navy transition-colors hover:bg-nexino-navy hover:text-white"
              >
                Explore Our Services
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-[640px]"
            aria-hidden="true"
          >
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-nexino-blue/10 via-white to-nexino-green/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-nexino-border bg-nexino-off-white shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
              <div className="relative aspect-[5/6] sm:aspect-[4/5]">
                <Image
                  src={pageHeroImages.home.src}
                  alt={pageHeroImages.home.alt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nexino-dark/75 via-nexino-dark/15 to-transparent" />

                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 text-white">
                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold backdrop-blur">
                    Modern delivery
                  </span>
                  <span className="rounded-full bg-nexino-green/20 px-3 py-1.5 text-xs font-semibold text-nexino-green backdrop-blur">
                    Kigali, Rwanda
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
                    <div className="max-w-md text-white">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                        A technology partner
                      </p>
                      <h2 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl">
                        Built for organisations that want reliable systems, not just a website.
                      </h2>
                    </div>
                    <div className="grid gap-2 sm:text-right">
                      <span className="rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                        Web platforms
                      </span>
                      <span className="rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                        AI and automation
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={reduceMotion ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-3 top-10 hidden rounded-2xl border border-white/20 bg-white/90 px-4 py-3 shadow-lg backdrop-blur sm:block"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-nexino-text-secondary">
                Focus
              </p>
              <p className="mt-1 text-sm font-semibold text-nexino-text">Strategy to delivery</p>
            </motion.div>

            <motion.div
              animate={reduceMotion ? {} : { y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-2 bottom-8 hidden rounded-2xl border border-nexino-green/20 bg-white/95 px-4 py-3 shadow-lg backdrop-blur sm:block"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-nexino-text-secondary">
                Capabilities
              </p>
              <p className="mt-1 text-sm font-semibold text-nexino-text">Software, AI, cloud, data</p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
