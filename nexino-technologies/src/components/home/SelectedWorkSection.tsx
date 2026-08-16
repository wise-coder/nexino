import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { projects } from '@/data/projects';
import { projectImages } from '@/data/image-assets';

const typeColors: Record<string, string> = {
  Prototype: 'bg-nexino-blue/10 text-nexino-blue border-nexino-blue/20',
  Concept: 'bg-nexino-green/10 text-nexino-green border-nexino-green/20',
  'Research Project': 'bg-purple-100 text-purple-700 border-purple-200',
  'Internal Product': 'bg-amber-100 text-amber-700 border-amber-200',
  'Client Project': 'bg-emerald-100 text-emerald-700 border-emerald-200',
  'Work in Progress': 'bg-orange-100 text-orange-700 border-orange-200',
};

export function SelectedWorkSection() {
  return (
    <section className="bg-nexino-off-white py-20 lg:py-28" aria-labelledby="work-heading">
      <Container>
        <div className="mb-14 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
          <AnimatedSection>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-nexino-blue">
              What we build
            </p>
            <h2 id="work-heading" className="text-4xl font-bold leading-tight text-nexino-text sm:text-5xl">
              Projects, prototypes and concepts.
            </h2>
            <p className="mt-4 max-w-2xl text-nexino-text-secondary">
              Every item is clearly labelled so you can see whether it is a client project,
              prototype, concept, research project or work in progress.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.08} direction="left">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-semibold text-nexino-blue transition-all hover:gap-3"
            >
              View all work
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </AnimatedSection>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const image = projectImages[project.slug as keyof typeof projectImages];

            return (
              <AnimatedSection key={project.id} delay={index * 0.06}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group block overflow-hidden rounded-[1.75rem] border border-nexino-border bg-white shadow-[0_12px_35px_rgba(15,23,42,0.05)] transition-all hover:-translate-y-1 hover:border-nexino-blue hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)]"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nexino-dark/70 via-nexino-dark/15 to-transparent" />
                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      <span
                        className={`rounded-full border px-3 py-1.5 text-xs font-bold backdrop-blur-sm ${
                          typeColors[project.type] ?? 'border-nexino-border bg-white/90 text-nexino-text'
                        }`}
                      >
                        {project.type}
                      </span>
                      <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/65">
                        {project.category}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold leading-tight">{project.title}</h3>
                    </div>
                  </div>

                  <div className="space-y-4 p-6">
                    <p className="text-sm leading-relaxed text-nexino-text-secondary">
                      {project.tagline}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech.name}
                          className="rounded-full border border-nexino-border bg-nexino-off-white px-3 py-1 text-xs font-medium text-nexino-text-secondary"
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-nexino-blue transition-all group-hover:gap-3">
                      View Project
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
