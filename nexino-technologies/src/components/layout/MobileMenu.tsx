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
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      closeRef.current?.focus();
    } else {
      document.body.style.overflow = '';
      setServicesOpen(false);
      setIndustriesOpen(false);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const staticLinks = [
    { label: 'Home', href: '/' },
    { label: 'Company', href: '/about' },
    { label: 'Our Work', href: '/work' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/30 z-40 lg:hidden backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-[340px] bg-white z-50 overflow-y-auto flex flex-col lg:hidden shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-nexino-border">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg gradient-nexino flex items-center justify-center" aria-hidden="true">
                  <span className="text-white font-bold text-xs">N</span>
                </div>
                <span className="font-bold text-[15px] text-nexino-dark">
                  Nexino<span className="text-nexino-blue">.</span>
                </span>
              </div>
              <button
                ref={closeRef}
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-nexino-off-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-nexino-text" aria-hidden="true" />
              </button>
            </div>

            {/* Nav */}
            <nav className="flex-1 px-4 py-5" aria-label="Mobile navigation">
              <ul role="list" className="space-y-0.5">
                {staticLinks.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.28 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block py-3 px-3 text-[15px] font-semibold text-nexino-dark hover:text-nexino-blue hover:bg-nexino-off-white rounded-lg transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}

                {/* Services accordion */}
                <motion.li
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.16, duration: 0.28 }}
                >
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    aria-expanded={servicesOpen}
                    className="w-full flex items-center justify-between py-3 px-3 text-[15px] font-semibold text-nexino-dark hover:text-nexino-blue hover:bg-nexino-off-white rounded-lg transition-colors"
                  >
                    Services
                    <ChevronDown
                      className={cn('w-4 h-4 transition-transform duration-200', servicesOpen && 'rotate-180')}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden ml-3 mt-1 border-l-2 border-nexino-border pl-4 space-y-4"
                      >
                        {servicesMegaMenu.map((col) => (
                          <div key={col.heading} className="pt-2">
                            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-nexino-blue mb-2">
                              {col.heading}
                            </p>
                            <ul className="space-y-1" role="list">
                              {col.items.map((item) => (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    onClick={onClose}
                                    className="block py-1.5 text-[13px] text-nexino-text-secondary hover:text-nexino-blue transition-colors"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>

                {/* Industries accordion */}
                <motion.li
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.20, duration: 0.28 }}
                >
                  <button
                    onClick={() => setIndustriesOpen(!industriesOpen)}
                    aria-expanded={industriesOpen}
                    className="w-full flex items-center justify-between py-3 px-3 text-[15px] font-semibold text-nexino-dark hover:text-nexino-blue hover:bg-nexino-off-white rounded-lg transition-colors"
                  >
                    Industries
                    <ChevronDown
                      className={cn('w-4 h-4 transition-transform duration-200', industriesOpen && 'rotate-180')}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence>
                    {industriesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden ml-3 mt-1 border-l-2 border-nexino-border pl-4 space-y-1 pb-2"
                      >
                        {industriesMegaMenu.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={onClose}
                            className="block py-2 text-[13px] text-nexino-text-secondary hover:text-nexino-blue transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              </ul>
            </nav>

            {/* Footer */}
            <div className="px-5 py-5 border-t border-nexino-border space-y-4">
              <Link
                href="/contact?type=project"
                onClick={onClose}
                className="block w-full text-center bg-nexino-blue text-white font-semibold py-3.5 rounded-full text-[14px] hover:bg-[#0080d4] transition-colors"
              >
                Start a Project
              </Link>
              <div className="space-y-2">
                <a href="mailto:stevohsunb@gmail.com" className="flex items-center gap-2 text-[13px] text-nexino-text-secondary hover:text-nexino-blue transition-colors">
                  <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                  stevohsunb@gmail.com
                </a>
                <a href="tel:+250781361789" className="flex items-center gap-2 text-[13px] text-nexino-text-secondary hover:text-nexino-blue transition-colors">
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
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
