import Link from 'next/link';
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { Logo } from '@/components/shared/Logo';

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
      <Container className="pt-16 pb-10 lg:pt-20 lg:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/8">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <Logo size="sm" textTheme="white" />

            <p className="text-white/50 text-[13px] leading-[1.75] max-w-xs">
              Nexino Technologies builds intelligent digital solutions for organisations ready to
              automate, transform and grow.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:stevohsunb@gmail.com"
                className="flex items-center gap-2.5 text-[13px] text-white/50 hover:text-nexino-blue transition-colors group"
              >
                <Mail className="w-3.5 h-3.5 shrink-0 group-hover:text-nexino-blue" aria-hidden="true" />
                stevohsunb@gmail.com
              </a>
              <a
                href="tel:+250781361789"
                className="flex items-center gap-2.5 text-[13px] text-white/50 hover:text-nexino-blue transition-colors group"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                +250 781 361 789
              </a>
              <a
                href="tel:+250780291367"
                className="flex items-center gap-2.5 text-[13px] text-white/50 hover:text-nexino-blue transition-colors group"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                +250 780 291 367
              </a>
              <a
                href="https://wa.me/250781361789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[13px] text-white/50 hover:text-nexino-green transition-colors group"
              >
                <MessageCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                WhatsApp
              </a>
              <p className="flex items-start gap-2.5 text-[13px] text-white/50">
                <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true" />
                Kicukiro, Kigali, Rwanda
              </p>
            </div>

            <Link
              href="/contact?type=project"
              className="inline-flex items-center gap-2 bg-nexino-blue text-white text-[13px] font-semibold px-5 py-2.5 rounded-full hover:bg-[#0080d4] transition-colors"
            >
              Start a Project
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>

          {/* Company */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30 mb-5">
              Company
            </p>
            <ul className="space-y-2.5" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30 mb-5">
              Services
            </p>
            <ul className="space-y-2.5" role="list">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30 mb-5">
              Industries
            </p>
            <ul className="space-y-2.5" role="list">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/30">
            © {year} Nexino Technologies. All rights reserved.
          </p>
          <p className="text-[12px] text-white/30 font-medium tracking-wide">
            Innovate. Automate. Empower.
          </p>
          <a
            href="https://www.nexinotechnologies.com"
            className="text-[12px] text-white/30 hover:text-white transition-colors"
          >
            www.nexinotechnologies.com
          </a>
        </div>
      </Container>
    </footer>
  );
}
