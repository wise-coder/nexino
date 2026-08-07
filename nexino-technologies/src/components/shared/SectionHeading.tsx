import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  label?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  label,
  title,
  highlight,
  description,
  align = 'left',
  theme = 'light',
  className,
  titleClassName,
}: SectionHeadingProps) {
  const isDark = theme === 'dark';

  const renderTitle = () => {
    if (!highlight) return title;
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="font-semibold text-nexino-text">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      className={cn(
        'space-y-4',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className,
      )}
    >
      {label && (
        <p
          className={cn(
            'text-xs font-semibold uppercase tracking-[0.15em]',
            isDark ? 'text-nexino-green' : 'text-nexino-blue',
          )}
          aria-hidden="true"
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          'font-bold leading-tight tracking-tight',
          isDark ? 'text-white' : 'text-nexino-text',
          titleClassName,
        )}
      >
        {renderTitle()}
      </h2>
      {description && (
        <p
          className={cn(
            'text-base leading-relaxed max-w-2xl',
            align === 'center' && 'mx-auto',
            isDark ? 'text-white/70' : 'text-nexino-text-secondary',
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
