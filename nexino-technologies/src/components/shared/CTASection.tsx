import { ArrowRight } from 'lucide-react';
import { Container } from './Container';
import { Button } from './Button';

interface CTASectionProps {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  label?: string;
  tone?: 'light' | 'dark';
}

export function CTASection({ title, description, primaryCta, secondaryCta, label, tone = 'light' }: CTASectionProps) {
  const isDark = tone === 'dark';

  return (
    <section
      className={isDark ? 'bg-nexino-navy py-18 lg:py-24' : 'bg-white py-16 lg:py-20 border-t border-nexino-border'}
      aria-labelledby="cta-heading"
    >
      <Container className="text-center">
        {label && (
          <p className={isDark ? 'text-nexino-green text-xs font-semibold uppercase tracking-[0.15em] mb-4' : 'text-black text-xs font-semibold uppercase tracking-[0.15em] mb-4'}>
            {label}
          </p>
        )}
        <h2
          id="cta-heading"
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 max-w-3xl mx-auto ${
            isDark ? 'text-white' : 'text-nexino-text'
          }`}
        >
          {title}
        </h2>
        <p className={`text-lg leading-relaxed max-w-xl mx-auto mb-10 ${isDark ? 'text-white/70' : 'text-nexino-text-secondary'}`}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={primaryCta.href} variant={isDark ? 'white' : 'primary'} size="lg">
            {primaryCta.label}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Button>
          {secondaryCta && (
            <Button
              href={secondaryCta.href}
              variant={isDark ? 'ghost' : 'outline'}
              size="lg"
              className={isDark ? 'border border-white/20 text-white hover:bg-white/10' : 'border-black text-black hover:bg-black hover:text-white'}
            >
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
