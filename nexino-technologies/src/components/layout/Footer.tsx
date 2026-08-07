import Link from 'next/link';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { BrandLogo } from '@/components/shared/BrandLogo';

const footerLinks = {
  company: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'Our Work', href: '/work' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Digital Products', href: '/services/custom-web-applications' },
    { label: 'AI and Automation', href: '/services/ai-agents' },
    { label: 'Cloud and Infrastructure', href: '/services/hosting-maintenance' },
    { label: 'Data and Research', href: '/services/data-analytics' },
    { label: 'Intelligent Systems', href: '/services/embedded-systems' },
  ],
  industries: [
    { label: 'Business', href: '/industries/business-technologies' },
    { label: 'Mining', href: '/industries/mining-technologies' },
    { label: 'Construction', href: '/industries/construction-technologies' },
    { label: 'Health', href: '/industries/health-technologies' },
    { label: 'Intelligent Infrastructure', href: '/industries/intelligent-infrastructure' },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-nexino-dark text-white" role="contentinfo">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="w-fit" aria-label="Nexino Technologies home">
              <BrandLogo className="h-10 lg:h-11" tone="light" />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Nexino Technologies helps organisations plan, build and improve websites, digital systems and automation tools that solve real business problems.
            </p>
            <div className="space-y-2.5">
              <a
                href="mailto:nexinotechinologies@gmail.com"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-nexino-blue transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:text-nexino-blue" aria-hidden="true" />
                nexinotechinologies@gmail.com
              </a>
              <a
                href="tel:+250781361789"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-nexino-blue transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:text-nexino-blue" aria-hidden="true" />
                +250 781 361 789
              </a>
              <a
                href="tel:+250780291367"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-nexino-blue transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:text-nexino-blue" aria-hidden="true" />
                +250 780 291 367
              </a>
              <a
                href="https://wa.me/250781361789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-nexino-green transition-colors group"
              >
                <MessageCircle className="w-4 h-4 group-hover:text-nexino-green" aria-hidden="true" />
                WhatsApp
              </a>
              <p className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                Kicukiro, Kigali, Rwanda
              </p>
            </div>
          </div>

          {/* Company links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/40 mb-5">
              Company
            </p>
            <ul className="space-y-3" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/40 mb-5">
              Services
            </p>
            <ul className="space-y-3" role="list">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/40 mb-5">
              Industries
            </p>
            <ul className="space-y-3" role="list">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <Container className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {year} Nexino Technologies. All rights reserved.
          </p>
          <p className="text-xs text-white/40 font-medium tracking-wide">
            Plan. Build. Support.
          </p>
          <p className="text-xs text-white/40">
            <a
              href="https://www.nexinotechnologies.com"
              className="hover:text-white transition-colors"
            >
              www.nexinotechnologies.com
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}
