import type { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { Accordion } from '@/components/shared/Accordion';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { ContactForm } from '@/components/forms/ContactForm';
import { contactFaqs } from '@/data/faqs';
import { pageHeroImages } from '@/data/image-assets';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Tell Nexino Technologies Ltd about the project you want to build or improve. We will help identify the right next step.',
};

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'stevohsunb@gmail.com',
    href: 'mailto:stevohsunb@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+250 781 361 789',
    href: 'tel:+250781361789',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+250 780 291 367',
    href: 'tel:+250780291367',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+250 780 416 453',
    href: 'tel:+250780416453',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat on WhatsApp',
    href: 'https://wa.me/250781361789',
    external: true,
    accent: 'nexino-green',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Kicukiro, Kigali, Rwanda',
    href: undefined,
  },
];

const nextSteps = [
  { step: '01', title: 'We review your submission', desc: 'We read every enquiry carefully before responding.' },
  { step: '02', title: 'We reach out', desc: 'We contact you via your preferred method, typically within one business day.' },
  { step: '03', title: 'Discovery conversation', desc: 'We schedule a call or meeting to understand your challenge in more detail.' },
  { step: '04', title: 'We propose an approach', desc: 'Based on the conversation, we put together a practical recommendation.' },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-nexino-dark overflow-hidden" aria-labelledby="contact-hero-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-nexino-blue/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-nexino-green/5 blur-3xl" />
        </div>
        <Container className="relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-2xl">
              <p className="text-nexino-green text-xs font-bold uppercase tracking-[0.15em] mb-5">
                Contact
              </p>
              <h1 id="contact-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Tell us about the project you want to build.
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                Share the business problem, idea or system you want to improve. You do not need to know the technical solution before contacting us.
              </p>
            </div>

            <AnimatedSection delay={0.1} direction="left">
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 shadow-2xl shadow-black/20 aspect-[4/3]">
              <Image
                  src={pageHeroImages.contact.src}
                  alt={pageHeroImages.contact.alt}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-nexino-dark/65" />
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-between text-white">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold backdrop-blur">
                    <span className="w-2 h-2 rounded-full bg-nexino-green" aria-hidden="true" />
                    Fast response and practical advice
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-white/60">Talk to us</p>
                    <h2 className="mt-2 text-2xl font-bold leading-tight max-w-md">
                      We are happy to discuss ideas, scope and the most realistic starting point.
                    </h2>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-white" aria-labelledby="contact-form-heading">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="space-y-8">
              <AnimatedSection>
                <div>
                  <h2 id="contact-form-heading" className="text-2xl font-bold text-nexino-text mb-2">
                    Tell us about your project
                  </h2>
                  <p className="text-nexino-text-secondary leading-relaxed text-sm">
                    Use the form to share the challenge, idea or system you want to improve. We review every enquiry before the first conversation.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <ul className="space-y-4" role="list">
                  {contactDetails.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <div className="flex items-start gap-3 group">
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                            item.accent === 'nexino-green' ? 'bg-nexino-green/10' : 'bg-nexino-blue/10'
                          }`}
                        >
                          <Icon
                            className={`w-4 h-4 ${
                              item.accent === 'nexino-green' ? 'text-nexino-green' : 'text-nexino-blue'
                            }`}
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-nexino-text-secondary">
                            {item.label}
                          </p>
                          <p
                            className={`text-sm font-medium mt-0.5 ${
                              item.href
                                ? item.accent === 'nexino-green'
                                  ? 'text-nexino-text group-hover:text-nexino-green transition-colors'
                                  : 'text-nexino-text group-hover:text-nexino-blue transition-colors'
                                : 'text-nexino-text'
                            }`}
                          >
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );

                    return (
                    <li key={`${item.label}-${item.value}`}>
                      {item.href ? (
                        <a
                          href={item.href}
                            target={item.external ? '_blank' : undefined}
                            rel={item.external ? 'noopener noreferrer' : undefined}
                          >
                            {content}
                          </a>
                        ) : (
                          content
                        )}
                      </li>
                    );
                  })}
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <div className="p-4 bg-nexino-off-white rounded-xl border border-nexino-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-nexino-text-secondary" aria-hidden="true" />
                    <p className="text-xs font-bold uppercase tracking-wide text-nexino-text-secondary">
                      Response time
                    </p>
                  </div>
                  <p className="text-sm text-nexino-text-secondary italic">
                    We aim to respond within one business day.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-2">
              <Suspense fallback={<div className="h-96 animate-pulse bg-nexino-off-white rounded-2xl" />}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-24 bg-nexino-off-white" aria-labelledby="next-steps-heading">
        <Container>
          <AnimatedSection className="mb-14">
            <p className="text-nexino-blue text-xs font-bold uppercase tracking-[0.15em] mb-3">
              Our process
            </p>
            <h2 id="next-steps-heading" className="text-3xl sm:text-4xl font-bold text-nexino-text">
              What happens after you submit.
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nextSteps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.08}>
                <div className="bg-white rounded-2xl border border-nexino-border p-6 space-y-4">
                  <span className="text-4xl font-bold text-nexino-border select-none" aria-hidden="true">
                    {step.step}
                  </span>
                  <h3 className="font-bold text-nexino-text">{step.title}</h3>
                  <p className="text-sm text-nexino-text-secondary leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-24 bg-white" aria-labelledby="contact-faq-heading">
        <Container size="narrow">
          <AnimatedSection className="mb-12 text-center">
            <h2 id="contact-faq-heading" className="text-3xl sm:text-4xl font-bold text-nexino-text">
              Common questions.
            </h2>
          </AnimatedSection>
          <Accordion items={contactFaqs} />
        </Container>
      </section>

      <section className="py-14 bg-nexino-dark">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white font-bold text-xl">Prefer to speak directly?</p>
              <p className="text-white/60 text-sm mt-1">
                Call or message us and we will arrange a conversation about your project.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+250781361789"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call us
              </a>
              <a
                href="https://wa.me/250781361789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-white font-semibold px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
