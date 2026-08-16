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
    { label: 'Websites and Web Applications', href: '/services/custom-web-applications' },
    { label: 'AI and Automation', href: '/services/ai-agents' },
    { label: 'Cloud and Infrastructure', href: '/services/hosting-maintenance' },
    { label: 'Data and Research', href: '/services/data-analytics' },
    { label: 'Intelligent Systems', href: '/services/embedded-systems' },
  ],
  industries: [
    { label: 'Business Technologies', href: '/industries/business-technologies' },
    { label: 'Mining Technologies', href: '/industries/mining-technologies' },
    { label: 'Construction Technologies', href: '/industries/construction-technologies' },
    { label: 'Health Technologies', href: '/industries/health-technologies' },
    { label: 'Intelligent Infrastructure', href: '/industries/intelligent-infrastructure' },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-nexino-dark text-white" role="contentinfo">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div className="space-y-6">
            <Link href="/" className="w-fit" aria-label="Nexino Technologies Ltd home">
              <BrandLogo className="h-10 lg:h-11" tone="light" />
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-white/65">
              Nexino Technologies Ltd helps organisations plan, build and improve websites, digital systems and automation tools that solve real business problems.
            </p>
            <div className="space-y-2.5">
              <a
                href="mailto:stevohsunb@gmail.com"
                className="flex items-center gap-2.5 text-sm text-white/65 transition-colors hover:text-nexino-blue"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                stevohsunb@gmail.com
              </a>
              <a
                href="tel:+250781361789"
                className="flex items-center gap-2.5 text-sm text-white/65 transition-colors hover:text-nexino-blue"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                +250 781 361 789
              </a>
              <a
                href="tel:+250780291367"
                className="flex items-center gap-2.5 text-sm text-white/65 transition-colors hover:text-nexino-blue"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                +250 780 291 367
              </a>
              <a
                href="tel:+250780416453"
                className="flex items-center gap-2.5 text-sm text-white/65 transition-colors hover:text-nexino-blue"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                +250 780 416 453
              </a>
              <a
                href="https://wa.me/250781361789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/65 transition-colors hover:text-nexino-green"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
              <p className="flex items-start gap-2.5 text-sm text-white/65">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                Kicukiro, Kigali, Rwanda
              </p>
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.12em] text-white/40">
              Explore
            </p>
            <ul className="space-y-3" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/65 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.12em] text-white/40">
              Services
            </p>
            <ul className="space-y-3" role="list">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/65 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.12em] text-white/40">
              Industries
            </p>
            <ul className="space-y-3" role="list">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/65 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 sm:flex-row">
          <p className="text-xs text-white/40">Copyright {year} Nexino Technologies Ltd. All rights reserved.</p>
          <p className="text-xs font-medium tracking-wide text-white/40">Smart Solutions. Real Impact.</p>
          <p className="text-xs text-white/40">
            <a href="https://www.nexinotechnologies.com" className="transition-colors hover:text-white">
              www.nexinotechnologies.com
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}

