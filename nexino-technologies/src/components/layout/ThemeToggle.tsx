'use client';

import { MoonStar, SunMedium } from 'lucide-react';
import { useThemeMode } from '@/lib/theme';

export function ThemeToggle() {
  const { theme, setTheme } = useThemeMode();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className={[
        'fixed bottom-5 left-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border shadow-lg transition-all',
        'backdrop-blur-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nexino-blue/40',
        isDark
          ? 'border-white/10 bg-[#07111F]/90 text-white shadow-black/25 hover:bg-[#0b1628]'
          : 'border-nexino-border bg-white text-nexino-dark shadow-black/10 hover:bg-nexino-off-white',
      ].join(' ')}
    >
      <span className="sr-only">{isDark ? 'Switch to light mode' : 'Switch to dark mode'}</span>
      {isDark ? <SunMedium className="h-5 w-5" aria-hidden="true" /> : <MoonStar className="h-5 w-5" aria-hidden="true" />}
    </button>
  );
}
