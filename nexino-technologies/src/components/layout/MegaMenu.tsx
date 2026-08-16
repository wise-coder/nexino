'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { servicesMegaMenu, industriesMegaMenu } from '@/data/navigation';

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
        className="absolute top-full left-0 right-0 bg-white border-t border-nexino-border shadow-lg z-50"
        role="region"
        aria-label="Services menu"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-4 gap-8">
            {servicesMegaMenu.map((col) => (
              <div key={col.heading}>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-nexino-blue mb-4">
                  {col.heading}
                </p>
                <ul className="space-y-1.5" role="list">
                  {col.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="text-[13px] text-nexino-text-secondary hover:text-nexino-blue transition-colors block py-0.5"
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
          <div className="mt-7 pt-7 border-t border-nexino-border">
            <div className="bg-nexino-off-white rounded-xl p-5 flex items-center justify-between gap-6">
              <div>
                <p className="font-bold text-[14px] text-nexino-dark mb-1">
                  Not sure what you need?
                </p>
                <p className="text-[13px] text-nexino-text-secondary leading-relaxed">
                  Tell us your business challenge and we will help identify the right technology
                  direction.
                </p>
              </div>
              <Link
                href="/contact?type=project"
                onClick={onClose}
                className="shrink-0 inline-flex items-center gap-2 bg-nexino-blue text-white text-[13px] font-semibold px-5 py-2.5 rounded-full hover:bg-[#0080d4] transition-colors whitespace-nowrap"
              >
                Discuss Your Project
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="absolute top-full left-0 right-0 bg-white border-t border-nexino-border shadow-lg z-50"
      role="region"
      aria-label="Industries menu"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-3 gap-4">
          {industriesMegaMenu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="group p-5 rounded-xl border border-nexino-border bg-nexino-off-white hover:border-nexino-blue hover:bg-white transition-all"
            >
              <p className="font-semibold text-[14px] text-nexino-dark group-hover:text-nexino-blue transition-colors mb-1">
                {item.label}
              </p>
              <p className="text-[12.5px] text-nexino-text-secondary leading-relaxed">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
