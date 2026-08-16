import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { getProjectImage } from '@/data/local-images';
import { projects } from '@/data/projects';

const typeColors: Record<string, string> = {
  Prototype: 'bg-blue-50 text-nexino-blue',
  Concept: 'bg-emerald-50 text-emerald-700',
  'Research Project': 'bg-purple-50 text-purple-700',
  'Internal Product': 'bg-amber-50 text-amber-700',
  'Client Project': 'bg-green-50 text-green-700',
  'Work in Progress': 'bg-orange-50 text-orange-700',
};

export function SelectedWorkSection() {
  return (
    <section className="py-20 lg:py-28 bg-white" aria-labelledby="work-heading">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <AnimatedSection>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-nexino-blue mb-3">
              Our Work
            </p>
            <h2
              id="work-heading"
              className="text-[2rem] sm:text-[2.4rem] font-bold text-nexino-dark tracking-[-0.025em] leading-[1.1]"
            >
              Ideas and systems brought to life.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <Link
              href="/work"
              className="shrink-0 inline-flex items-center gap-2 text-[13.5px] font-semibold text-nexino-blue hover:gap-3 transition-all"
            >
              View All Work
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.07}>
              <Link
                href={`/work/${project.slug}`}
                className="group flex flex-col bg-nexino-off-white rounded-xl border border-nexino-border overflow-hidden hover:border-nexino-blue hover:shadow-md transition-all"
                role="listitem"
              >
                {/* Coloured header band */}
                <div
                  className="h-2 w-full"
                  style={{
                    background: `linear-gradient(90deg, ${project.accentColor ?? '#0094E8'}, #12C878)`,
                  }}
                  aria-hidden="true"
                />

                <div className="relative overflow-hidden aspect-[16/9] bg-white">
                  <Image
                    src={getProjectImage(project.slug)}
                    alt=""
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nexino-dark/35 via-transparent to-transparent" />
                </div>

                <div className="p-6 flex flex-col flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                        typeColors[project.type] ?? 'bg-nexino-light-grey text-nexino-text-secondary'
                      }`}
                    >
                      {project.type}
                    </span>
                    <span className="text-[11px] text-nexino-text-secondary">{project.status}</span>
                  </div>

                  <p className="text-[11px] font-semibold uppercase tracking-wide text-nexino-text-secondary">
                    {project.category}
                  </p>

                  <h3 className="font-bold text-nexino-dark text-[1.05rem] leading-[1.3] group-hover:text-nexino-blue transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-[13px] text-nexino-text-secondary leading-[1.6] flex-1">
                    {project.tagline}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech.name}
                        className="text-[11px] bg-white border border-nexino-border rounded-full px-2.5 py-1 text-nexino-text-secondary"
                      >
                        {tech.name}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[11px] text-nexino-text-secondary py-1">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 pt-1 text-[13px] font-semibold text-nexino-blue group-hover:gap-2.5 transition-all">
                    View Project
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
