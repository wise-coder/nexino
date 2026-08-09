'use client';

import Link from 'next/link';

const whatsappUrl = `https://wa.me/250781361789?text=${encodeURIComponent(
  'Hello Nexino Technologies Ltd, I would like to discuss a project.',
)}`;

export function FloatingWhatsAppButton() {
  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Talk to us on WhatsApp"
      className="fixed bottom-20 right-5 z-40 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5 hover:bg-[#1fb85a] sm:bottom-24 sm:right-6"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15" aria-hidden="true">
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7 text-white"
          role="img"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="currentColor"
            d="M16 3.2C9.1 3.2 3.5 8.7 3.5 15.5c0 2.2.6 4.3 1.7 6.2L3.5 29l7.6-1.8c1.8 1 3.8 1.5 5.9 1.5 6.9 0 12.5-5.5 12.5-12.3S22.9 3.2 16 3.2Zm0 22.2c-1.9 0-3.7-.5-5.2-1.4l-.4-.2-4.3 1 1-4.2-.2-.4c-1.1-1.6-1.7-3.4-1.7-5.2 0-5.6 4.6-10.2 10.2-10.2s10.2 4.6 10.2 10.2S21.6 25.4 16 25.4Zm5.7-7.4c-.3-.2-1.7-.9-1.9-1-.3-.1-.4-.2-.6.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.5-1.7-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.6 0-.2-.6-1.6-.8-2.2-.2-.6-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.2-.9.8-.9 2s.9 2.4 1 2.6c.1.2 1.7 2.7 4.1 3.7.6.2 1.1.4 1.4.5.6.2 1.2.2 1.6.1.5-.1 1.6-.6 1.8-1.1.2-.4.2-1 .2-1 0-.1-.1-.2-.4-.4Z"
          />
        </svg>
      </span>
      <span>Talk to us</span>
    </Link>
  );
}
