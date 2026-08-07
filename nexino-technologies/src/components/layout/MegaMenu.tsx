'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
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
        className="absolute top-full left-0 right-0 bg-white border-t border-nexino-border shadow-2xl z-50"
        role="region"
        aria-label="Services menu"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-4 gap-8 xl:gap-10">
            {servicesMegaMenu.map((col) => (
              <div key={col.heading}>
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-nexino-blue mb-4">
                  {col.heading}
                </p>
                <ul className="space-y-2" role="list">
                  {col.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="text-sm text-nexino-text-secondary hover:text-nexino-blue transition-colors block py-1"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Featured panel */}
          <div className="mt-8 pt-8 border-t border-nexino-border">
            <div className="bg-nexino-off-white rounded-2xl p-6 flex items-center justify-between gap-6">
              <div>
                <p className="font-bold text-nexino-text mb-1">Not sure what you need?</p>
                <p className="text-sm text-nexino-text-secondary">
                  Tell us your business challenge and we will help identify the right technology direction.
                </p>
              </div>
              <Link
                href="/contact?type=project"
                onClick={onClose}
                className="shrink-0 inline-flex items-center gap-2 bg-black text-white text-sm font-semibold px-5 py-3 rounded-full hover:bg-neutral-800 transition-colors whitespace-nowrap"
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="absolute top-full left-0 right-0 bg-white border-t border-nexino-border shadow-2xl z-50"
      role="region"
      aria-label="Industries menu"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-3 gap-6">
          {industriesMegaMenu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                'group p-5 rounded-xl border border-nexino-border bg-nexino-off-white',
                'hover:border-nexino-blue hover:bg-white transition-all',
              )}
            >
              <p className="font-semibold text-nexino-text group-hover:text-nexino-blue transition-colors mb-1">
                {item.label}
              </p>
              <p className="text-sm text-nexino-text-secondary">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
