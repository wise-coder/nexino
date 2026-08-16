import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { AnimatedSection } from '@/components/motion/AnimatedSection';

const highlights = [
  'We listen before proposing.',
  'We plan around real users and workflows.',
  'We support what we build after launch.',
  'We work across software, AI, data and devices.',
];

export function CompanyIntroSection() {
  return (
    <section className="bg-nexino-off-white py-20 lg:py-28" aria-labelledby="intro-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <AnimatedSection>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-nexino-blue">
              Who we are
            </p>
            <h2
              id="intro-heading"
              className="max-w-2xl text-4xl font-bold leading-tight text-nexino-text sm:text-5xl"
            >
              A technology partner for businesses ready to build, automate and grow.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-nexino-text-secondary">
              Nexino Technologies Ltd helps organisations design and deliver websites, digital
              platforms, AI-enabled tools, cloud systems, data products and embedded solutions that
              are useful in real-world operations.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-nexino-text-secondary">
              We work through discovery, planning, design, development and support so the final
              solution fits the problem and the people using it.
            </p>

            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-nexino-blue transition-all hover:gap-3"
            >
              Learn more about Nexino
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.1} direction="left">
            <div className="grid gap-6">
              <div className="relative overflow-hidden rounded-[2rem] border border-nexino-border bg-white shadow-xl shadow-nexino-dark/5">
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/home/data-center-server-rack.jpg"
                    alt="Data center server racks with enterprise infrastructure lighting"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-nexino-dark/45" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                      Collaboration
                    </p>
                    <p className="mt-2 max-w-md text-lg font-semibold leading-tight">
                      Teams, research and delivery working together from the start.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-nexino-border bg-white p-5"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-nexino-green" aria-hidden="true" />
                    <p className="text-sm leading-relaxed text-nexino-text-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
