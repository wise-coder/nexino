'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BrandLogo } from '@/components/shared/BrandLogo';
import { mainNav } from '@/data/navigation';
import { MegaMenu } from './MegaMenu';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState<'services' | 'industries' | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const megaTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega on route change
  useEffect(() => {
    const resetTimer = window.setTimeout(() => {
      setActiveMega(null);
      setMobileOpen(false);
    }, 0);

    return () => window.clearTimeout(resetTimer);
  }, [pathname]);

  // Close mega on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMega(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleMegaEnter = (type: 'services' | 'industries') => {
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
    setActiveMega(type);
  };

  const handleMegaLeave = () => {
    megaTimeoutRef.current = setTimeout(() => setActiveMega(null), 150);
  };

  const isHeroPage = pathname === '/';

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          scrolled || activeMega || !isHeroPage
            ? 'bg-white/95 backdrop-blur-sm border-b border-nexino-border shadow-sm'
            : 'bg-transparent',
        )}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center shrink-0"
              aria-label="Nexino Technologies home"
            >
              <BrandLogo className="h-9 lg:h-10" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {mainNav.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                const hasMega = item.megaMenu;

                if (hasMega) {
                  return (
                    <div
                      key={item.href}
                      className="relative"
                      onMouseEnter={() => handleMegaEnter(item.megaMenu!)}
                      onMouseLeave={handleMegaLeave}
                    >
                      <button
                        aria-expanded={activeMega === item.megaMenu}
                        aria-haspopup="true"
                        className={cn(
                          'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                          isActive
                            ? 'text-nexino-blue'
                            : 'text-nexino-text-secondary hover:text-nexino-text',
                        )}
                        onClick={() => setActiveMega(activeMega === item.megaMenu ? null : item.megaMenu!)}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            'w-3.5 h-3.5 transition-transform',
                            activeMega === item.megaMenu && 'rotate-180',
                          )}
                          aria-hidden="true"
                        />
                      </button>
                      {isActive && (
                        <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-nexino-blue rounded-full" aria-hidden="true" />
                      )}
                    </div>
                  );
                }

                return (
                  <div key={item.href} className="relative">
                    <Link
                      href={item.href}
                      className={cn(
                        'block px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                        isActive
                          ? 'text-nexino-blue'
                          : 'text-nexino-text-secondary hover:text-nexino-text',
                      )}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                    {isActive && (
                      <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-nexino-blue rounded-full" aria-hidden="true" />
                    )}
                  </div>
                );
              })}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact?type=project"
                className="hidden lg:inline-flex items-center gap-2 bg-black text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors"
              >
                Start Your Project
              </Link>
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-nexino-light-grey transition-colors"
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
              >
                <Menu className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Mega menus — render inside header for hover continuity */}
        {activeMega && (
          <div
            onMouseEnter={() => { if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current); }}
            onMouseLeave={handleMegaLeave}
          >
            <MegaMenu
              type={activeMega}
              isOpen={true}
              onClose={() => setActiveMega(null)}
            />
          </div>
        )}
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
