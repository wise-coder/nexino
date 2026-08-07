'use client';

import { cn } from '@/lib/utils';

type BrandLogoProps = {
  className?: string;
  tone?: 'dark' | 'light';
  variant?: 'full' | 'mark';
};

export function BrandLogo({ className, tone = 'dark', variant = 'full' }: BrandLogoProps) {
  const textClass = tone === 'light' ? 'text-white' : 'text-[#11224D]';
  const subtextClass = tone === 'light' ? 'text-white/80' : 'text-[#4B5B7A]';

  return (
    <div
      className={cn('inline-flex items-center gap-3 select-none', className)}
      role="img"
      aria-label="Nexino Technologies"
    >
      <svg
        viewBox="0 0 64 64"
        className="h-full w-auto shrink-0"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M12 10h14l26 26-10 10L26 24 12 38z" fill="#0B7FDB" />
        <path d="M12 54V10l14 14v30z" fill="#0B7FDB" />
        <path d="M46 6h12v12H46z" fill="#12C878" transform="skewX(-12)" />
      </svg>

      {variant === 'full' && (
        <div className="flex flex-col leading-none">
          <span className={cn('font-extrabold tracking-[-0.05em]', textClass)} style={{ fontSize: '1.55rem' }}>
            Nexino
          </span>
          <span
            className={cn('font-semibold uppercase tracking-[0.48em]', subtextClass)}
            style={{ fontSize: '0.58rem' }}
          >
            Technologies
          </span>
        </div>
      )}
    </div>
  );
}
