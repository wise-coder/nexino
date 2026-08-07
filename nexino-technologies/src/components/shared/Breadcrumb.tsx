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
    <nav aria-label="Breadcrumb" className={cn('flex items-center gap-1 text-sm', className)}>
      <ol className="flex items-center gap-1 flex-wrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight
                  className={cn('w-3.5 h-3.5 shrink-0', isDark ? 'text-white/30' : 'text-nexino-border')}
                  aria-hidden="true"
                />
              )}
              {isLast || !item.href ? (
                <span
                  className={cn(
                    'font-medium',
                    isDark ? 'text-white/60' : 'text-nexino-text-secondary',
                    isLast && 'font-semibold',
                    isLast && (isDark ? 'text-white' : 'text-nexino-text'),
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
                    isDark ? 'text-white/60 hover:text-white' : 'text-nexino-text-secondary hover:text-nexino-blue',
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
