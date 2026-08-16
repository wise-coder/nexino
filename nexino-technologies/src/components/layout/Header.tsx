'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { mainNav } from '@/data/navigation';
import { Logo } from '@/components/shared/Logo';
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const t = window.setTimeout(() => {
      setActiveMega(null);
      setMobileOpen(false);
    }, 0);
    return () => window.clearTimeout(t);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMega(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const openMega = (type: 'services' | 'industries') => {
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
    setActiveMega(type);
  };

  const closeMegaDelayed = () => {
    megaTimeoutRef.current = setTimeout(() => setActiveMega(null), 140);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          'fixed top-0 left-0 right-0 z-40 bg-white transition-all duration-200',
          scrolled ? 'border-b border-nexino-border shadow-sm' : 'border-b border-transparent',
        )}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[68px]">

            {/* Logo */}
            <Logo linkClassName="shrink-0" />

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
              {mainNav.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                const hasMega = !!item.megaMenu;

                if (hasMega) {
                  return (
                    <div
                      key={item.href}
                      className="relative"
                      onMouseEnter={() => openMega(item.megaMenu!)}
                      onMouseLeave={closeMegaDelayed}
                    >
                      <button
                        aria-expanded={activeMega === item.megaMenu}
                        aria-haspopup="true"
                        className={cn(
                          'flex items-center gap-1 px-3 py-2 text-[13.5px] font-medium rounded-md transition-colors',
                          isActive ? 'text-nexino-blue' : 'text-nexino-text hover:text-nexino-blue',
                        )}
                        onClick={() =>
                          setActiveMega(activeMega === item.megaMenu ? null : item.megaMenu!)
                        }
                      >
                        {item.label}
                        <ChevronDown
                          className={cn('w-3.5 h-3.5 transition-transform duration-200', activeMega === item.megaMenu && 'rotate-180')}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'block px-3 py-2 text-[13.5px] font-medium rounded-md transition-colors',
                      isActive ? 'text-nexino-blue' : 'text-nexino-text hover:text-nexino-blue',
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact?type=project"
                className="hidden lg:inline-flex items-center gap-1.5 bg-nexino-blue text-white text-[13px] font-semibold px-5 py-2.5 rounded-full hover:bg-[#0080d4] transition-colors"
              >
                Start a Project
              </Link>
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-nexino-off-white transition-colors"
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen
                  ? <X className="w-5 h-5" aria-hidden="true" />
                  : <Menu className="w-5 h-5" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mega menus */}
        {activeMega && (
          <div
            onMouseEnter={() => { if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current); }}
            onMouseLeave={closeMegaDelayed}
          >
            <MegaMenu type={activeMega} isOpen onClose={() => setActiveMega(null)} />
          </div>
        )}
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
