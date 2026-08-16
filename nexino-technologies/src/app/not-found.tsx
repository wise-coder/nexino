import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, Layers } from 'lucide-react';
import { Container } from '@/components/shared/Container';

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <section
      className="min-h-[80vh] flex items-center bg-white relative overflow-hidden"
      aria-labelledby="not-found-heading"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, #E4E7EC 1px, transparent 1px), linear-gradient(to bottom, #E4E7EC 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            opacity: 0.3,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white" />
      </div>
      <Container className="relative py-24 text-center">
        <p
          className="text-[9rem] sm:text-[13rem] font-bold leading-none select-none mb-2"
          style={{
            background: 'linear-gradient(135deg,#0094E8 0%,#087AC1 48%,#12C878 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            opacity: 0.12,
          }}
          aria-hidden="true"
        >
          404
        </p>
        <div className="relative -mt-12 sm:-mt-20 space-y-5">
          <div
            className="w-14 h-14 rounded-2xl gradient-nexino flex items-center justify-center mx-auto shadow-md shadow-nexino-blue/20"
            aria-hidden="true"
          >
            <span className="text-white font-bold text-xl">N</span>
          </div>
          <h1
            id="not-found-heading"
            className="text-[2rem] sm:text-[2.6rem] font-bold text-nexino-dark tracking-[-0.025em]"
          >
            This page could not be found.
          </h1>
          <p className="text-nexino-text-secondary text-[1rem] max-w-sm mx-auto leading-[1.7]">
            The page may have moved or the address may be incorrect.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-nexino-blue text-white font-semibold px-6 py-3.5 rounded-full text-[14px] hover:bg-[#0080d4] transition-colors"
            >
              <Home className="w-4 h-4" aria-hidden="true" />
              Return Home
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border border-nexino-border text-nexino-dark font-semibold px-6 py-3.5 rounded-full text-[14px] hover:border-nexino-blue hover:text-nexino-blue transition-colors"
            >
              <Layers className="w-4 h-4" aria-hidden="true" />
              Explore Services
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
