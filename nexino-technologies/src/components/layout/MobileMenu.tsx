'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { X, ChevronDown, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesMegaMenu, industriesMegaMenu } from '@/data/navigation';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll and focus close button when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Our Work', href: '/work' },
    { label: 'Contact', href: '/contact' },
  ];

  const stagger = {
    container: { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } },
    item: {
      hidden: { opacity: 0, x: -16 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 z-50 flex w-full max-w-sm flex-col overflow-y-auto bg-white text-nexino-text lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-nexino-border px-6 py-5">
              <span className="text-lg font-bold text-nexino-dark">Menu</span>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="rounded-lg p-2 transition-colors hover:bg-nexino-light-grey"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 px-6 py-6" aria-label="Mobile navigation">
              <motion.ul
                variants={stagger.container}
                initial="hidden"
                animate="visible"
                className="space-y-1"
                role="list"
              >
                {menuItems.map((item) => (
                  <motion.li key={item.href} variants={stagger.item}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block rounded-xl px-3 py-3 text-lg font-semibold text-nexino-text transition-colors hover:bg-nexino-off-white hover:text-nexino-blue"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}

                {/* Services accordion */}
                <motion.li variants={stagger.item}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    aria-expanded={servicesOpen}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-lg font-semibold text-nexino-text transition-colors hover:bg-nexino-off-white hover:text-nexino-blue"
                  >
                    Services
                    <ChevronDown
                      className={cn('w-5 h-5 transition-transform', servicesOpen && 'rotate-180')}
                      aria-hidden="true"
                    />
                  </button>
                  {servicesOpen && (
                    <div className="mt-2 ml-3 space-y-4 border-l-2 border-nexino-border pl-4">
                      {servicesMegaMenu.map((col) => (
                        <div key={col.heading}>
                          <p className="text-xs font-bold uppercase tracking-wider text-nexino-blue mb-2">
                            {col.heading}
                          </p>
                          <ul className="space-y-1" role="list">
                            {col.items.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  onClick={onClose}
                                  className="block py-1.5 text-sm text-nexino-text-secondary transition-colors hover:text-nexino-blue"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.li>

                {/* Industries accordion */}
                <motion.li variants={stagger.item}>
                  <button
                    onClick={() => setIndustriesOpen(!industriesOpen)}
                    aria-expanded={industriesOpen}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-lg font-semibold text-nexino-text transition-colors hover:bg-nexino-off-white hover:text-nexino-blue"
                  >
                    Industries
                    <ChevronDown
                      className={cn('w-5 h-5 transition-transform', industriesOpen && 'rotate-180')}
                      aria-hidden="true"
                    />
                  </button>
                  {industriesOpen && (
                    <div className="mt-2 ml-3 space-y-1 border-l-2 border-nexino-border pl-4">
                      {industriesMegaMenu.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={onClose}
                          className="block py-2 text-sm text-nexino-text-secondary transition-colors hover:text-nexino-blue"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.li>
              </motion.ul>
            </nav>

            {/* Footer */}
            <div className="space-y-4 border-t border-nexino-border px-6 py-6">
              <Link
                href="/contact?type=project"
                onClick={onClose}
                className="block w-full rounded-full bg-nexino-navy py-4 text-center font-semibold text-white transition-colors hover:bg-nexino-blue"
              >
                Start a Project
              </Link>
              <div className="space-y-2">
                <a
                  href="mailto:stevohsunb@gmail.com"
                  className="flex items-center gap-2 text-sm text-nexino-text-secondary transition-colors hover:text-nexino-blue"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  stevohsunb@gmail.com
                </a>
                <a
                  href="tel:+250781361789"
                  className="flex items-center gap-2 text-sm text-nexino-text-secondary transition-colors hover:text-nexino-blue"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  +250 781 361 789
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
