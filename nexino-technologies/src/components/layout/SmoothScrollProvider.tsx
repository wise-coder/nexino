'use client';

import { useEffect } from 'react';

/**
 * Initialises Lenis smooth scrolling.
 * Dynamically imported so it does not affect SSR or initial render.
 * Respects prefers-reduced-motion.
 */
export function SmoothScrollProvider() {
  useEffect(() => {
    // Check reduced motion preference before initialising
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let lenis: import('lenis').default | null = null;
    let rafId: number;

    async function init() {
      const { default: Lenis } = await import('lenis');
      lenis = new Lenis({
        duration: 1.0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
    }

    init();

    return () => {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return null;
}
