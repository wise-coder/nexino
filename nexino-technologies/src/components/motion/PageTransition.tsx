'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export function PageTransition() {
  const pathname = usePathname();
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    // Check reduced motion preference
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    bar.style.transform = 'scaleX(0)';
    bar.style.opacity = '1';
    bar.style.transition = 'transform 0.4s ease-out';

    const raf = requestAnimationFrame(() => {
      bar.style.transform = 'scaleX(1)';
    });

    const timeout = setTimeout(() => {
      bar.style.transition = 'opacity 0.2s ease';
      bar.style.opacity = '0';
    }, 500);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
    };
  }, [pathname]);

  return (
    <div
      ref={barRef}
      className="page-transition-bar"
      aria-hidden="true"
      style={{ opacity: 0, transform: 'scaleX(0)' }}
    />
  );
}
