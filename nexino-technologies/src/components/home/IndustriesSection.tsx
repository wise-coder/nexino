import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { industries } from '@/data/industries';
import { getIndustryImage } from '@/data/local-images';

export function IndustriesSection() {
  return (
    <section className="py-20 lg:py-28 bg-nexino-off-white" aria-labelledby="industries-heading">
      <Container>
        <AnimatedSection className="mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-nexino-blue mb-3">
            Industries
          </p>
          <h2
            id="industries-heading"
            className="text-[2rem] sm:text-[2.4rem] font-bold text-nexino-dark tracking-[-0.025em] leading-[1.1]"
          >
            Technology adapted to real environments.
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
          {industries.map((industry, i) => (
            <AnimatedSection key={industry.id} delay={i * 0.06}>
              <Link
                href={`/industries/${industry.slug}`}
                className="group block bg-white rounded-xl border border-nexino-border p-7 hover:border-nexino-blue hover:shadow-md transition-all"
                role="listitem"
              >
                <div className="relative overflow-hidden rounded-xl border border-nexino-border bg-nexino-off-white aspect-[16/9] mb-5">
                  <Image
                    src={getIndustryImage(industry.slug)}
                    alt=""
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-nexino-dark/35 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-lg gradient-nexino flex items-center justify-center text-white font-bold text-sm shadow-sm">
                    {industry.shortTitle.charAt(0)}
                  </div>
                  <ArrowRight
                    className="absolute top-4 right-4 w-4 h-4 text-white/90 group-hover:translate-x-0.5 transition-all"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-bold text-nexino-dark text-[1rem] mb-2 group-hover:text-nexino-blue transition-colors">
                  {industry.title}
                </h3>
                <p className="text-[13px] text-nexino-text-secondary leading-[1.6] mb-4">
                  {industry.tagline}
                </p>
                <ul className="space-y-1.5" role="list">
                  {industry.applications.slice(0, 3).map((app) => (
                    <li
                      key={app.title}
                      className="flex items-center gap-2 text-[12.5px] text-nexino-text-secondary"
                    >
                      <span
                        className="w-1 h-1 rounded-full bg-nexino-green shrink-0"
                        aria-hidden="true"
                      />
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
