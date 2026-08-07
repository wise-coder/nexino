'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { FaqItem } from '@/types/common';

interface AccordionProps {
  items: FaqItem[];
  theme?: 'light' | 'dark';
  className?: string;
}

export function Accordion({ items, theme = 'light', className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isDark = theme === 'dark';

  return (
    <div className={cn('space-y-3', className)} role="list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const id = `accordion-item-${index}`;
        const panelId = `accordion-panel-${index}`;

        return (
          <div
            key={id}
            role="listitem"
            className={cn(
              'rounded-xl border transition-colors',
              isDark ? 'border-white/10 bg-white/5' : 'border-nexino-border bg-white',
              isOpen && (isDark ? 'border-nexino-blue/40' : 'border-nexino-blue/30'),
            )}
          >
            <button
              id={id}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className={cn(
                'w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-semibold',
                isDark ? 'text-white' : 'text-nexino-text',
              )}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{item.question}</span>
              <span className="shrink-0">
                {isOpen ? (
                  <Minus className="w-4 h-4 text-nexino-blue" aria-hidden="true" />
                ) : (
                  <Plus className="w-4 h-4 text-nexino-blue" aria-hidden="true" />
                )}
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={id}
              hidden={!isOpen}
              className={cn(
                'px-6 pb-5 text-sm leading-relaxed',
                isDark ? 'text-white/70' : 'text-nexino-text-secondary',
              )}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
