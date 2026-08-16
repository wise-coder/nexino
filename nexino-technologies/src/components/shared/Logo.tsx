import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import nexinoLogo from '../../../newimages/nexinologo-removebg-preview.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  textTheme?: 'dark' | 'white';
  className?: string;
  linkClassName?: string;
  asLink?: boolean;
}

const sizes = {
  sm: { img: 28, text: 'text-[14px]' },
  md: { img: 34, text: 'text-[15px]' },
  lg: { img: 44, text: 'text-[18px]' },
};

export function Logo({
  size = 'md',
  showText = true,
  textTheme = 'dark',
  className,
  linkClassName,
  asLink = true,
}: LogoProps) {
  const { img, text } = sizes[size];

  const inner = (
    <span className={cn('flex items-center gap-2.5', className)}>
      <span className="relative shrink-0" style={{ width: img, height: img }}>
        <Image
          src={nexinoLogo}
          alt="Nexino Technologies logo"
          fill
          sizes={`${img}px`}
          className="object-contain select-none"
          priority
        />
      </span>
      {showText && (
        <span
          className={cn(
            'font-bold tracking-tight select-none',
            text,
            textTheme === 'white' ? 'text-white' : 'text-nexino-dark',
          )}
        >
          Nexino<span className="text-nexino-blue">.</span>
        </span>
      )}
    </span>
  );

  if (!asLink) return inner;

  return (
    <Link href="/" aria-label="Nexino Technologies home" className={linkClassName}>
      {inner}
    </Link>
  );
}
