import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from './Container';

interface CTASectionProps {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  label?: string;
}

export function CTASection({ title, description, primaryCta, secondaryCta, label }: CTASectionProps) {
  return (
    <section
      className="bg-nexino-dark py-20 lg:py-28 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
          }}
        />
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full bg-nexino-blue/8 blur-[80px]" />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 rounded-full bg-nexino-green/6 blur-[60px]" />
      </div>

      <Container className="relative text-center">
        {label && (
          <p className="text-nexino-green text-[11px] font-bold uppercase tracking-[0.18em] mb-4">
            {label}
          </p>
        )}
        <h2
          id="cta-heading"
          className="text-[1.9rem] sm:text-[2.4rem] lg:text-[2.8rem] font-bold text-white leading-[1.1] tracking-[-0.025em] mb-5 max-w-3xl mx-auto"
        >
          {title}
        </h2>
        <p className="text-white/60 text-[0.95rem] leading-[1.75] max-w-lg mx-auto mb-8">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center justify-center gap-2 bg-nexino-blue text-white font-semibold px-7 py-3.5 rounded-full text-[14px] hover:bg-[#0080d4] transition-colors shadow-lg shadow-nexino-blue/20"
          >
            {primaryCta.label}
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-full text-[14px] hover:bg-white/8 transition-colors"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}
