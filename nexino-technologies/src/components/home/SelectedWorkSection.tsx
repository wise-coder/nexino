import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { projects } from '@/data/projects';
import { projectImages } from '@/data/image-assets';

const typeColors: Record<string, string> = {
  Prototype: 'bg-nexino-blue/10 text-nexino-blue',
  Concept: 'bg-nexino-green/10 text-nexino-green',
  'Research Project': 'bg-purple-100 text-purple-700',
  'Internal Product': 'bg-amber-100 text-amber-700',
  'Client Project': 'bg-emerald-100 text-emerald-700',
  'Work in Progress': 'bg-orange-100 text-orange-700',
};

export function SelectedWorkSection() {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="work-heading">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <AnimatedSection>
            <SectionHeading
              label="Our Work"
              title="What we can design and build."
              titleClassName="text-4xl sm:text-5xl"
            />
            <p className="mt-4 text-sm text-nexino-text-secondary max-w-2xl">
              Some items shown are prototypes or concepts created to demonstrate Nexino&apos;s technical and product-development capabilities.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} direction="left">
            <Link
              href="/work"
              className="shrink-0 inline-flex items-center gap-2 font-semibold text-nexino-blue hover:gap-3 transition-all"
            >
              Build a Similar Solution
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {projects.map((project, i) => {
            const image = projectImages[project.slug as keyof typeof projectImages];

            return (
              <AnimatedSection key={project.id} delay={i * 0.08}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group block bg-nexino-off-white rounded-2xl border border-nexino-border overflow-hidden hover:border-nexino-blue hover:shadow-lg transition-all"
                  role="listitem"
                >
                  <div className="aspect-video relative overflow-hidden">
                    {image ? (
                      <>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-nexino-dark/65" />
                      </>
                    ) : (
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundColor: project.accentColor ?? '#0094E8',
                        }}
                      />
                    )}

                    <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                      <div className="text-center space-y-2">
                        <div
                          className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                          style={{ backgroundColor: project.accentColor ?? '#0094E8' }}
                        >
                          {project.title.charAt(0)}
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-4 left-4">
                      <span
                        className={`text-xs font-bold px-3 py-1.5 rounded-full border backdrop-blur-sm ${
                          typeColors[project.type] ?? 'bg-nexino-border text-nexino-text border-nexino-border'
                        }`}
                      >
                        {project.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <p className="text-xs font-semibold text-nexino-text-secondary uppercase tracking-wide">
                      {project.category}
                    </p>
                    <h3 className="font-bold text-nexino-text text-xl leading-snug group-hover:text-nexino-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-nexino-text-secondary leading-relaxed line-clamp-2">
                      {project.tagline}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech.name}
                          className="text-xs bg-white border border-nexino-border rounded-full px-2.5 py-1 text-nexino-text-secondary"
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 pt-2 text-sm font-semibold text-nexino-blue group-hover:gap-3 transition-all">
                      View Solution Details
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </div>
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
