'use client';

import { forwardRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  ariaLabel?: string;
}

const base =
  'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nexino-blue select-none disabled:opacity-50 disabled:cursor-not-allowed';

const variants = {
  primary:
    'bg-black text-white hover:bg-neutral-800 active:scale-[0.98] shadow-sm',
  secondary:
    'bg-black text-white hover:bg-neutral-800 active:scale-[0.98]',
  outline:
    'border-2 border-black text-black hover:bg-black hover:text-white active:scale-[0.98]',
  ghost:
    'text-black hover:bg-black/5 active:scale-[0.98]',
  white:
    'bg-white text-nexino-dark hover:bg-nexino-off-white active:scale-[0.98] shadow-sm',
};

const sizes = {
  sm: 'px-4 py-2 text-sm min-h-[36px]',
  md: 'px-6 py-3 text-sm min-h-[44px]',
  lg: 'px-8 py-4 text-base min-h-[52px]',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'md', href, external, className, disabled, type = 'button', onClick, ariaLabel }, ref) => {
    const classes = cn(base, variants[variant], sizes[size], className);

    if (href) {
      const linkProps = external
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {};
      return (
        <Link href={href} className={classes} aria-label={ariaLabel} {...linkProps}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        className={classes}
        disabled={disabled}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
export { Button };
