'use client';

import { useEffect, useState } from 'react';

export type ThemeMode = 'light' | 'dark';

const THEME_STORAGE_KEY = 'nexino-theme';

function isThemeMode(value: string | null): value is ThemeMode {
  return value === 'light' || value === 'dark';
}

export function getPreferredTheme(): ThemeMode {
  if (typeof window === 'undefined') return 'light';

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (isThemeMode(stored)) return stored;

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function applyTheme(theme: ThemeMode) {
  if (typeof document === 'undefined') return;

  document.documentElement.setAttribute('data-theme', theme);
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Ignore storage failures and keep the live theme change.
  }
}

export function useThemeMode() {
  const [theme, setThemeState] = useState<ThemeMode>('light');

  useEffect(() => {
    const syncTheme = () => {
      const nextTheme = getPreferredTheme();
      document.documentElement.setAttribute('data-theme', nextTheme);
      setThemeState(nextTheme);
    };

    syncTheme();

    const handleStorage = (event: StorageEvent) => {
      if (event.key && event.key !== THEME_STORAGE_KEY) return;
      syncTheme();
    };

    const handleCustomThemeChange = () => syncTheme();

    window.addEventListener('storage', handleStorage);
    window.addEventListener('nexino-themechange', handleCustomThemeChange);

    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('nexino-themechange', handleCustomThemeChange);
    };
  }, []);

  const setTheme = (nextTheme: ThemeMode) => {
    applyTheme(nextTheme);
    setThemeState(nextTheme);
    window.dispatchEvent(new CustomEvent('nexino-themechange', { detail: nextTheme }));
  };

  return { theme, setTheme };
}
