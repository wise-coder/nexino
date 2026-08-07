import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Home, Layers } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { BrandLogo } from '@/components/shared/BrandLogo';

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <section
      className="min-h-screen flex items-center bg-white relative overflow-hidden"
      aria-labelledby="not-found-heading"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 right-20 w-[400px] h-[400px] rounded-full bg-nexino-blue/5 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-[300px] h-[300px] rounded-full bg-nexino-green/5 blur-3xl" />
      </div>

      <Container className="relative py-24 text-center">
        <p
          className="text-[10rem] sm:text-[14rem] font-bold leading-none select-none mb-6 text-nexino-text/10"
          aria-hidden="true"
        >
          404
        </p>

        <div className="relative -mt-16 sm:-mt-24 space-y-6">
          <BrandLogo variant="mark" className="h-16 mx-auto" />

          <h1
            id="not-found-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-nexino-text"
          >
            This page could not be found.
          </h1>

          <p className="text-nexino-text-secondary text-lg max-w-md mx-auto leading-relaxed">
            The page may have moved or the address may be incorrect. Try navigating from the
            home page.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-7 py-4 rounded-full hover:bg-neutral-800 transition-colors shadow-sm"
            >
              <Home className="w-4 h-4" aria-hidden="true" />
              Return Home
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border-2 border-black text-black font-semibold px-7 py-4 rounded-full hover:bg-black hover:text-white transition-colors"
            >
              <Layers className="w-4 h-4" aria-hidden="true" />
              Explore Services
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
