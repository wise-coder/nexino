import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  theme?: 'light' | 'dark';
  className?: string;
}

export function Breadcrumb({ items, theme = 'light', className }: BreadcrumbProps) {
  const isDark = theme === 'dark';
  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center gap-1 text-[12.5px]', className)}>
      <ol className="flex items-center gap-1 flex-wrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight
                  className={cn('w-3 h-3 shrink-0', isDark ? 'text-white/20' : 'text-nexino-border')}
                  aria-hidden="true"
                />
              )}
              {isLast || !item.href ? (
                <span
                  className={cn(
                    isLast
                      ? isDark ? 'text-white/60 font-medium' : 'text-nexino-text-secondary font-medium'
                      : isDark ? 'text-white/40' : 'text-nexino-text-secondary/60',
                  )}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    'hover:underline transition-colors',
                    isDark
                      ? 'text-white/40 hover:text-white/70'
                      : 'text-nexino-text-secondary/60 hover:text-nexino-blue',
                  )}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
