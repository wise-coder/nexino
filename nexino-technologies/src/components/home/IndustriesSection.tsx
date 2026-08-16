import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { industries } from '@/data/industries';
import { industryImages } from '@/data/image-assets';

export function IndustriesSection() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="industries-heading">
      <Container>
        <div className="mb-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <AnimatedSection>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-nexino-blue">
              Technology across industries
            </p>
            <h2 id="industries-heading" className="text-4xl font-bold leading-tight text-nexino-text sm:text-5xl">
              Systems shaped for the realities of each sector.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.08} direction="left">
            <div className="relative overflow-hidden rounded-[2rem] border border-nexino-border bg-nexino-off-white shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
              <div className="relative aspect-[16/10]">
                <Image
                  src={industryImages['business-technologies'].src}
                  alt={industryImages['business-technologies'].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 44vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nexino-dark/75 via-nexino-dark/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/65">
                    Adaptable delivery
                  </p>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/85">
                    We apply the same core capabilities across business, mining, construction, health
                    and infrastructure contexts.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {industries.map((industry, index) => {
            const image = industryImages[industry.slug as keyof typeof industryImages];

            return (
              <AnimatedSection key={industry.id} delay={index * 0.07}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group block overflow-hidden rounded-[1.75rem] border border-nexino-border bg-nexino-off-white transition-all hover:-translate-y-1 hover:border-nexino-blue hover:shadow-[0_14px_40px_rgba(15,23,42,0.08)]"
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nexino-dark/70 via-nexino-dark/15 to-transparent" />
                    <div className="absolute inset-0 flex items-end p-5 text-white">
                      <div className="max-w-md">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/65">
                          Industry focus
                        </p>
                        <h3 className="mt-2 text-2xl font-bold leading-tight">{industry.title}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 p-6">
                    <p className="text-sm leading-relaxed text-nexino-text-secondary">
                      {industry.tagline}
                    </p>
                    <ul className="grid gap-2 sm:grid-cols-2" role="list">
                      {industry.applications.slice(0, 4).map((app) => (
                        <li
                          key={app.title}
                          className="rounded-2xl border border-nexino-border bg-white px-4 py-3 text-sm text-nexino-text-secondary"
                        >
                          {app.title}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-nexino-blue transition-all group-hover:gap-3">
                      Explore Industry
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
