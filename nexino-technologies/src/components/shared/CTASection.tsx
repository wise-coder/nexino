import { ArrowRight } from 'lucide-react';
import { Container } from './Container';
import { Button } from './Button';

interface CTASectionProps {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  label?: string;
}

export function CTASection({ title, description, primaryCta, secondaryCta, label }: CTASectionProps) {
  return (
    <section className="bg-white py-16 lg:py-20 border-t border-nexino-border" aria-labelledby="cta-heading">
      <Container className="text-center">
        {label && (
          <p className="text-black text-xs font-semibold uppercase tracking-[0.15em] mb-4">
            {label}
          </p>
        )}
        <h2
          id="cta-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-nexino-text leading-tight mb-6 max-w-3xl mx-auto"
        >
          {title}
        </h2>
        <p className="text-nexino-text-secondary text-lg leading-relaxed max-w-xl mx-auto mb-10">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href={primaryCta.href} variant="primary" size="lg">
            {primaryCta.label}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Button>
          {secondaryCta && (
            <Button href={secondaryCta.href} variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white">
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
