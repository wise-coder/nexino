import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsAppButton } from '@/components/layout/FloatingWhatsAppButton';
import { FloatingChatbot } from '@/components/layout/FloatingChatbot';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
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
    default: 'Nexino Technologies Ltd — Smart Solutions. Real Impact.',
    template: '%s — Nexino Technologies Ltd',
  },
  description:
    'Nexino Technologies Ltd combines software engineering, AI, data, cloud infrastructure and embedded systems to solve practical business challenges.',
  keywords: ['software development', 'AI automation', 'cloud infrastructure', 'data analytics', 'embedded systems', 'Rwanda', 'Kigali'],
  authors: [{ name: 'Nexino Technologies Ltd' }],
  creator: 'Nexino Technologies Ltd',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.nexinotechnologies.com',
    siteName: 'Nexino Technologies Ltd',
    title: 'Nexino Technologies Ltd — Smart Solutions. Real Impact.',
    description:
      'Engineering intelligent solutions for a changing world. Software, AI, cloud and embedded systems.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nexino Technologies Ltd',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexino Technologies Ltd — Smart Solutions. Real Impact.',
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
    <html lang="en" className={`${plusJakarta.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col antialiased" suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var k='nexino-theme';var t=localStorage.getItem(k);if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`,
          }}
        />
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
        <ThemeToggle />
        <FloatingChatbot />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
