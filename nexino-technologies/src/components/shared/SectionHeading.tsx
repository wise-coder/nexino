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
        <span className="gradient-nexino-text">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      className={cn(
        'space-y-3',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className,
      )}
    >
      {label && (
        <p
          className={cn(
            'text-[11px] font-bold uppercase tracking-[0.18em]',
            isDark ? 'text-nexino-green' : 'text-nexino-blue',
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          'font-bold leading-[1.1] tracking-[-0.025em]',
          'text-[2rem] sm:text-[2.4rem]',
          isDark ? 'text-white' : 'text-nexino-dark',
          titleClassName,
        )}
      >
        {renderTitle()}
      </h2>
      {description && (
        <p
          className={cn(
            'text-[0.95rem] leading-[1.75] max-w-2xl',
            align === 'center' && 'mx-auto',
            isDark ? 'text-white/60' : 'text-nexino-text-secondary',
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
