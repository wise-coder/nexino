import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { CTASection } from '@/components/shared/CTASection';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { projects } from '@/data/projects';
import { projectImages } from '@/data/image-assets';
import type { ProjectCategory } from '@/types/project';

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'Explore prototypes, concepts and research projects from Nexino Technologies Ltd across digital products, AI, cloud infrastructure and engineering systems.',
};

const typeColors: Record<string, string> = {
  Prototype: 'bg-nexino-blue/10 text-nexino-blue border-nexino-blue/20',
  Concept: 'bg-nexino-green/10 text-nexino-green border-nexino-green/20',
  'Research Project': 'bg-purple-100 text-purple-700 border-purple-200',
  'Internal Product': 'bg-amber-100 text-amber-700 border-amber-200',
  'Client Project': 'bg-emerald-100 text-emerald-700 border-emerald-200',
  'Work in Progress': 'bg-orange-100 text-orange-700 border-orange-200',
};

const categories: Array<ProjectCategory | 'All'> = [
  'All',
  'Digital Products',
  'AI and Automation',
  'Cloud and Infrastructure',
  'Data and Research',
  'Engineering Systems',
];

export default function WorkPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pb-28 bg-nexino-dark overflow-hidden" aria-labelledby="work-page-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-nexino-blue/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-nexino-green/5 blur-3xl" />
        </div>
        <Container className="relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-3xl">
              <p className="text-nexino-green text-xs font-bold uppercase tracking-[0.15em] mb-5">
                Our Work
              </p>
              <h1 id="work-page-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                What we can design and build.
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                We share prototypes, concepts, research projects and work in progress so you can see how Nexino approaches product and system development.
              </p>
            </div>

            <AnimatedSection delay={0.1} direction="left">
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 shadow-2xl shadow-black/20 aspect-[4/3]">
                <Image
                  src="/images/new/desktop-devices.jpg"
                  alt="Website displayed across desktop, tablet and mobile devices"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-nexino-dark/65" />
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-between text-white">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold backdrop-blur">
                    <span className="w-2 h-2 rounded-full bg-nexino-green" aria-hidden="true" />
                    Prototypes, concepts and research
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-white/60">Showcase</p>
                    <h2 className="mt-2 text-2xl font-bold leading-tight max-w-md">
                      Some items are exploratory, some are internal concepts and some show likely client solutions.
                    </h2>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="py-8 bg-nexino-navy border-b border-white/10">
        <Container>
          <div className="flex gap-4 items-start">
            <div className="w-1 rounded-full bg-nexino-blue shrink-0 self-stretch" aria-hidden="true" />
              <p className="text-white/70 text-sm leading-relaxed">
              <strong className="text-white">Transparency statement:</strong> Every project shown here is clearly labelled as a prototype, concept, research project or client work. Some items are demonstrations of capability rather than completed client deployments.
              </p>
          </div>
        </Container>
      </section>

      <section className="py-8 bg-white border-b border-nexino-border sticky top-16 lg:top-20 z-20">
        <Container>
          <nav aria-label="Project categories" className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  cat === 'All'
                    ? 'bg-black text-white border-black'
                    : 'text-nexino-text-secondary border-nexino-border hover:border-nexino-blue hover:text-nexino-blue cursor-default'
                }`}
              >
                {cat}
              </span>
            ))}
          </nav>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-nexino-off-white" aria-labelledby="projects-heading">
        <Container>
          <AnimatedSection className="mb-12">
            <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold text-nexino-text">
              All projects
              <span className="ml-3 text-xl font-normal text-nexino-text-secondary">
                ({projects.length})
              </span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {projects.map((project, i) => {
              const image = projectImages[project.slug as keyof typeof projectImages];

              return (
                <AnimatedSection key={project.id} delay={i * 0.07}>
                  <Link
                    href={`/work/${project.slug}`}
                    className="group block bg-white rounded-2xl border border-nexino-border overflow-hidden hover:border-nexino-blue hover:shadow-xl transition-all"
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
                        <div className="text-center">
                          <div
                            className="w-20 h-20 rounded-2xl mx-auto flex items-center justify-center text-white font-bold text-3xl shadow-lg"
                            style={{ backgroundColor: project.accentColor ?? '#0094E8' }}
                          >
                            {project.title.charAt(0)}
                          </div>
                        </div>
                      </div>

                      <div className="absolute top-4 left-4">
                        <span
                          className={`text-xs font-bold px-3 py-1.5 rounded-full border backdrop-blur-sm ${
                            typeColors[project.type] ??
                            'bg-nexino-border text-nexino-text border-nexino-border'
                          }`}
                        >
                          {project.type}
                        </span>
                      </div>

                      <div className="absolute bottom-4 right-4">
                        <span className="text-xs font-medium bg-black/40 text-white px-2.5 py-1 rounded-full backdrop-blur-sm">
                          {project.status}
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
                      <p className="text-sm text-nexino-text-secondary leading-relaxed">
                        {project.tagline}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech.name}
                            className="text-xs bg-nexino-off-white border border-nexino-border rounded-full px-2.5 py-1 text-nexino-text-secondary"
                          >
                            {tech.name}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs text-nexino-text-secondary px-1 py-1">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 pt-2 text-sm font-semibold text-nexino-blue group-hover:gap-3 transition-all">
                        View Project
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

      <section className="py-20 lg:py-24 bg-white" aria-labelledby="work-process-heading">
        <Container>
          <AnimatedSection className="mb-14">
            <p className="text-nexino-blue text-xs font-bold uppercase tracking-[0.15em] mb-3">
              How we work
            </p>
            <h2 id="work-process-heading" className="text-3xl sm:text-4xl font-bold text-nexino-text leading-tight">
              From idea to working system.
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Define the problem', desc: 'We start with the operational challenge, not the solution.' },
              { step: '02', title: 'Research and design', desc: 'Explore options, evaluate trade-offs and design the approach.' },
              { step: '03', title: 'Build iteratively', desc: 'Develop in stages with clear review points and feedback loops.' },
              { step: '04', title: 'Validate and ship', desc: 'Test against real requirements and deliver a working result.' },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.08}>
                <div className="space-y-4 p-6 bg-nexino-off-white rounded-2xl border border-nexino-border">
                  <span className="text-4xl font-bold text-nexino-border select-none" aria-hidden="true">
                    {item.step}
                  </span>
                  <h3 className="font-bold text-nexino-text">{item.title}</h3>
                  <p className="text-sm text-nexino-text-secondary leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        label="Start a project"
        title="Have something you want to build?"
        description="Tell us what you are working on and we will help identify the right approach."
        primaryCta={{ label: 'Discuss a Similar Solution', href: '/contact?type=project' }}
        secondaryCta={{ label: 'View Services', href: '/services' }}
      />
    </>
  );
}
