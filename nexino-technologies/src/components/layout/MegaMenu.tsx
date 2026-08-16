'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { servicesMegaMenu, industriesMegaMenu } from '@/data/navigation';
import { cn } from '@/lib/utils';

interface MegaMenuProps {
  type: 'services' | 'industries';
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenu({ type, isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  if (type === 'services') {
    return (
      <div
        className="absolute top-full left-0 right-0 z-50 border-t border-nexino-border bg-white shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
        role="region"
        aria-label="Services menu"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-10">
          <div className="grid gap-6 xl:grid-cols-4">
            {servicesMegaMenu.map((col, index) => (
              <div key={col.heading} className={cn('rounded-2xl border border-nexino-border p-5', index === 0 ? 'bg-nexino-off-white' : 'bg-white')}>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-nexino-blue">
                  {col.heading}
                </p>
                <ul className="space-y-1.5" role="list">
                  {col.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="block py-1 text-sm text-nexino-text-secondary transition-colors hover:text-nexino-blue"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="rounded-[28px] bg-nexino-navy p-6 text-white shadow-xl">
            <div className="flex items-center gap-2 text-nexino-green">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              <p className="text-xs font-bold uppercase tracking-[0.16em]">Need help choosing?</p>
            </div>
            <h3 className="mt-4 text-2xl font-bold leading-tight">
              Tell us what you want to build and we will map the right service path.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Start with the problem, the users and the outcome you want. We will help shape the most practical next step.
            </p>
            <Link
              href="/contact?type=project"
              onClick={onClose}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-nexino-navy transition-colors hover:bg-nexino-off-white"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="absolute top-full left-0 right-0 z-50 border-t border-nexino-border bg-white shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
      role="region"
      aria-label="Industries menu"
    >
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:px-8 lg:py-10">
        <div className="grid gap-4 lg:grid-cols-2">
          {industriesMegaMenu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                'group rounded-2xl border border-nexino-border bg-nexino-off-white p-5 transition-all hover:border-nexino-blue hover:bg-white',
              )}
            >
              <p className="mb-1 font-semibold text-nexino-text transition-colors group-hover:text-nexino-blue">
                {item.label}
              </p>
              <p className="text-sm text-nexino-text-secondary">{item.description}</p>
            </Link>
          ))}
        </div>

        <div className="rounded-[28px] border border-nexino-border bg-nexino-off-white p-6">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-nexino-blue">Industry focus</p>
          <h3 className="mt-3 text-2xl font-bold text-nexino-text">Built for real operating environments.</h3>
          <p className="mt-3 text-sm leading-relaxed text-nexino-text-secondary">
            We adapt digital products, automation and connected systems for business, mining, construction, health and infrastructure contexts.
          </p>
          <Link
            href="/industries"
            onClick={onClose}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-nexino-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-nexino-blue"
          >
            Explore Industries
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
