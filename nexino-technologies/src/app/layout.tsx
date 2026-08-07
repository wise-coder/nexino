import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsAppButton } from '@/components/layout/FloatingWhatsAppButton';
import { PageTransition } from '@/components/motion/PageTransition';
import { SmoothScrollProvider } from '@/components/layout/SmoothScrollProvider';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nexinotechnologies.com'),
  title: {
    default: 'Nexino Technologies — Smart Solutions. Real Impact.',
    template: '%s — Nexino Technologies',
  },
  description:
    'Nexino Technologies combines software engineering, AI, data, cloud infrastructure and embedded systems to solve practical business challenges.',
  keywords: ['software development', 'AI automation', 'cloud infrastructure', 'data analytics', 'embedded systems', 'Rwanda', 'Kigali'],
  authors: [{ name: 'Nexino Technologies' }],
  creator: 'Nexino Technologies',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.nexinotechnologies.com',
    siteName: 'Nexino Technologies',
    title: 'Nexino Technologies — Smart Solutions. Real Impact.',
    description:
      'Engineering intelligent solutions for a changing world. Software, AI, cloud and embedded systems.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nexino Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexino Technologies — Smart Solutions. Real Impact.',
    description: 'Engineering intelligent solutions for a changing world.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SmoothScrollProvider />
        <PageTransition />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
