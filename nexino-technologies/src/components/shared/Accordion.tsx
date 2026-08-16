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
    <div className={cn('space-y-2', className)} role="list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const btnId = `accordion-btn-${index}`;
        const panelId = `accordion-panel-${index}`;

        return (
          <div
            key={btnId}
            role="listitem"
            className={cn(
              'rounded-xl border transition-colors',
              isDark
                ? 'border-white/10 bg-white/5'
                : 'border-nexino-border bg-white',
              isOpen && (isDark ? 'border-nexino-blue/30' : 'border-nexino-blue/20'),
            )}
          >
            <button
              id={btnId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className={cn(
                'w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-[14px]',
                isDark ? 'text-white' : 'text-nexino-dark',
              )}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{item.question}</span>
              <span className="shrink-0">
                {isOpen
                  ? <Minus className="w-3.5 h-3.5 text-nexino-blue" aria-hidden="true" />
                  : <Plus className="w-3.5 h-3.5 text-nexino-blue" aria-hidden="true" />}
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className={cn(
                'px-5 pb-4 text-[13.5px] leading-[1.7]',
                isDark ? 'text-white/60' : 'text-nexino-text-secondary',
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
