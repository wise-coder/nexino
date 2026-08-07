import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { industries } from '@/data/industries';

export function IndustriesSection() {
  return (
    <section className="py-20 lg:py-28 bg-nexino-off-white" aria-labelledby="industries-heading">
      <Container>
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center mb-14 lg:mb-16">
          <AnimatedSection>
            <SectionHeading
              label="Industries"
              title="Technology adapted to real environments."
              titleClassName="text-4xl sm:text-5xl"
            />
          </AnimatedSection>

          <AnimatedSection delay={0.1} direction="left">
            <div className="relative overflow-hidden rounded-[28px] border border-nexino-border bg-white shadow-xl shadow-nexino-dark/5">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/home/industrial-tablet-engineer.jpg"
                  alt="Engineer reviewing industrial data on a tablet inside a modern factory environment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-nexino-dark/65" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6 text-white">
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/75">
                    Intelligent industry systems
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/85 max-w-md">
                    Connected tools and field workflows help teams monitor, coordinate and respond faster in complex environments.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {industries.map((industry, i) => (
            <AnimatedSection key={industry.id} delay={i * 0.07}>
              <Link
                href={`/industries/${industry.slug}`}
                className="group block bg-white rounded-2xl border border-nexino-border p-8 hover:border-nexino-blue hover:shadow-lg transition-all"
                role="listitem"
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl bg-black flex items-center justify-center text-white font-bold text-lg"
                    aria-hidden="true"
                  >
                    {industry.shortTitle.charAt(0)}
                  </div>
                  <ArrowRight
                    className="w-4 h-4 text-nexino-text-secondary group-hover:text-nexino-blue group-hover:translate-x-1 transition-all"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-bold text-nexino-text text-xl mb-3 group-hover:text-nexino-blue transition-colors">
                  {industry.title}
                </h3>
                <p className="text-sm text-nexino-text-secondary leading-relaxed mb-5">
                  {industry.tagline}
                </p>
                <ul className="space-y-1.5" role="list">
                  {industry.applications.slice(0, 3).map((app) => (
                    <li key={app.title} className="flex items-center gap-2 text-sm text-nexino-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-nexino-green shrink-0" aria-hidden="true" />
                      {app.title}
                    </li>
                  ))}
                </ul>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
