import type { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { Accordion } from '@/components/shared/Accordion';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { ContactForm } from '@/components/forms/ContactForm';
import { contactFaqs } from '@/data/faqs';
import { contactVisuals } from '@/data/local-images';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Nexino Technologies. Tell us about your project and we will help identify the right technology approach.',
};

const contactDetails = [
  { icon: Mail, label: 'Email', value: 'stevohsunb@gmail.com', href: 'mailto:stevohsunb@gmail.com', accent: false },
  { icon: Phone, label: 'Phone', value: '+250 781 361 789', href: 'tel:+250781361789', accent: false },
  { icon: Phone, label: 'Phone', value: '+250 780 291 367', href: 'tel:+250780291367', accent: false },
  { icon: Phone, label: 'Phone', value: '+250 780 416 453', href: 'tel:+250780416453', accent: false },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat on WhatsApp', href: 'https://wa.me/250781361789', external: true, accent: true },
  { icon: MapPin, label: 'Location', value: 'Kicukiro, Kigali, Rwanda', href: undefined, accent: false },
];

const nextSteps = [
  { step: '01', title: 'We review your submission', desc: 'We read every enquiry carefully before responding.' },
  { step: '02', title: 'We reach out', desc: 'We contact you via your preferred method, typically within one business day.' },
  { step: '03', title: 'Discovery conversation', desc: 'We arrange a call to understand your challenge in more detail.' },
  { step: '04', title: 'We propose an approach', desc: 'Based on the conversation, we put together a practical recommendation.' },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-nexino-dark relative overflow-hidden" aria-labelledby="contact-hero-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-nexino-blue/8 blur-[90px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-nexino-green/5 blur-[70px]" />
        </div>
        <Container className="relative">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
            <div className="max-w-2xl">
              <p className="text-nexino-green text-[11px] font-bold uppercase tracking-[0.18em] mb-5">Contact</p>
              <h1 id="contact-hero-heading" className="text-[2.4rem] sm:text-[3rem] lg:text-[3.5rem] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-6">
                Let&#39;s talk about your project.
              </h1>
              <p className="text-[1.05rem] text-white/60 leading-[1.75]">
                Tell us what you are building, improving or automating. We will help identify the most practical next step.
              </p>
            </div>

            <div className="relative h-[300px] lg:h-[420px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image src={contactVisuals.hero} alt="" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-nexino-dark/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-nexino-dark/70 px-4 py-3 backdrop-blur">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-nexino-green">
                  Fast response
                </p>
                <p className="mt-1 text-[12.5px] text-white/65">
                  Reach out by form, email, phone or WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact details + Form */}
      <section className="py-20 lg:py-28 bg-white" aria-labelledby="contact-section-heading">
        <Container>
          <h2 id="contact-section-heading" className="sr-only">Contact information and enquiry form</h2>
          <div className="grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-16">
            {/* Left — contact info */}
            <div className="space-y-8">
              <AnimatedSection>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-nexino-blue mb-3">Get in touch</p>
                  <p className="text-[13.5px] text-nexino-text-secondary leading-[1.7]">
                    Reach us through any of the channels below or use the form to send a full project enquiry.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.08}>
                <ul className="space-y-4" role="list">
                  {contactDetails.map((item) => {
                    const Icon = item.icon;
                    const inner = (
                      <div className="flex items-start gap-3 group">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${item.accent ? 'bg-nexino-green/10' : 'bg-nexino-blue/8'}`}>
                          <Icon className={`w-3.5 h-3.5 ${item.accent ? 'text-nexino-green' : 'text-nexino-blue'}`} aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-nexino-text-secondary/60">{item.label}</p>
                          <p className={`text-[13px] font-medium mt-0.5 ${item.href ? (item.accent ? 'text-nexino-dark group-hover:text-nexino-green' : 'text-nexino-dark group-hover:text-nexino-blue') + ' transition-colors' : 'text-nexino-dark'}`}>
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                    return (
                      <li key={`${item.label}-${item.value}`}>
                        {item.href ? (
                          <a href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener noreferrer' : undefined}>
                            {inner}
                          </a>
                        ) : inner}
                      </li>
                    );
                  })}
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={0.12}>
                <div className="p-4 bg-nexino-off-white rounded-xl border border-nexino-border">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-3.5 h-3.5 text-nexino-text-secondary" aria-hidden="true" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-nexino-text-secondary">Business hours</p>
                  </div>
                  <p className="text-[12.5px] text-nexino-text-secondary italic">Business hours will be added once confirmed.</p>
                </div>
              </AnimatedSection>
            </div>

            {/* Right — form */}
            <Suspense fallback={<div className="h-96 animate-pulse bg-nexino-off-white rounded-xl border border-nexino-border" />}>
              <ContactForm />
            </Suspense>
          </div>
        </Container>
      </section>

      {/* What happens next */}
      <section className="py-20 lg:py-24 bg-nexino-off-white" aria-labelledby="next-steps-heading">
        <Container>
          <AnimatedSection className="mb-12">
            <p className="text-nexino-blue text-[11px] font-bold uppercase tracking-[0.18em] mb-3">Our Process</p>
            <h2 id="next-steps-heading" className="text-[2rem] sm:text-[2.4rem] font-bold text-nexino-dark tracking-[-0.025em]">
              What happens after you submit.
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {nextSteps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.07}>
                <div className="bg-white rounded-xl border border-nexino-border p-6 space-y-3">
                  <span className="text-[2.2rem] font-bold leading-none select-none" style={{ color: '#E4E7EC' }} aria-hidden="true">{step.step}</span>
                  <h3 className="font-bold text-nexino-dark text-[14px]">{step.title}</h3>
                  <p className="text-[13px] text-nexino-text-secondary leading-[1.65]">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24 bg-white" aria-labelledby="contact-faq-heading">
        <Container size="narrow">
          <AnimatedSection className="mb-10">
            <h2 id="contact-faq-heading" className="text-[2rem] sm:text-[2.4rem] font-bold text-nexino-dark tracking-[-0.025em]">
              Common questions.
            </h2>
          </AnimatedSection>
          <Accordion items={contactFaqs} />
        </Container>
      </section>

      {/* Direct contact strip */}
      <section className="py-12 bg-nexino-dark border-t border-white/8">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white font-bold text-[1.1rem]">Prefer to speak directly?</p>
              <p className="text-white/50 text-[13px] mt-1">Call or message us and we will arrange a conversation.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+250781361789" className="inline-flex items-center gap-2 border border-white/15 text-white font-semibold px-5 py-2.5 rounded-full text-[13px] hover:bg-white/8 transition-colors">
                <Phone className="w-3.5 h-3.5" aria-hidden="true" />Call us
              </a>
              <a href="https://wa.me/250781361789" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-nexino-green text-white font-semibold px-5 py-2.5 rounded-full text-[13px] hover:bg-[#0fb36a] transition-colors">
                <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
