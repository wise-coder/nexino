import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { CTASection } from '@/components/shared/CTASection';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { projects } from '@/data/projects';
import type { ProjectCategory } from '@/types/project';
import { newVisuals } from '@/data/local-images';

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'Explore prototypes, concepts and research projects from Nexino Technologies across digital products, AI, cloud infrastructure and engineering systems.',
};

const typeColors: Record<string, string> = {
  Prototype: 'bg-blue-50 text-nexino-blue border-blue-100',
  Concept: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  'Research Project': 'bg-purple-50 text-purple-700 border-purple-100',
  'Internal Product': 'bg-amber-50 text-amber-700 border-amber-100',
  'Client Project': 'bg-green-50 text-green-700 border-green-100',
  'Work in Progress': 'bg-orange-50 text-orange-700 border-orange-100',
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
      {/* Hero */}
      <section className="pt-32 pb-20 bg-nexino-dark relative overflow-hidden" aria-labelledby="work-page-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-nexino-blue/8 blur-[90px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-nexino-green/5 blur-[70px]" />
        </div>
        <Container className="relative">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
            <div className="max-w-3xl">
              <p className="text-nexino-green text-[11px] font-bold uppercase tracking-[0.18em] mb-5">Our Work</p>
              <h1 id="work-page-heading" className="text-[2.4rem] sm:text-[3rem] lg:text-[3.5rem] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-6">
                Ideas and systems brought to life.
              </h1>
              <p className="text-[1.05rem] text-white/60 leading-[1.75]">
                We share prototypes, concepts, research projects and work in progress. Each item is
                clearly labelled to show its current stage.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[170px] lg:h-[210px] rounded-2xl overflow-hidden border border-white/10">
                <Image src={newVisuals.workPrimary} alt="" fill className="object-cover" />
              </div>
              <div className="relative h-[170px] lg:h-[210px] rounded-2xl overflow-hidden border border-white/10 mt-8">
                <Image src={newVisuals.workSecondary} alt="" fill className="object-cover" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Transparency notice */}
      <section className="py-7 bg-nexino-navy border-b border-white/8">
        <Container>
          <div className="flex gap-4 items-start">
            <div className="w-0.5 rounded-full bg-nexino-blue shrink-0 self-stretch" aria-hidden="true" />
            <p className="text-white/60 text-[13px] leading-[1.7]">
              <strong className="text-white">Transparency statement:</strong> Every project shown here is clearly labelled as a prototype, concept, research project or client work. We do not inflate our portfolio. If something is exploratory, we say so.
            </p>
          </div>
        </Container>
      </section>

      {/* Category filter row — static labels (no JS filtering needed for this scope) */}
      <section className="py-5 bg-white border-b border-nexino-border sticky top-16 lg:top-[68px] z-20">
        <Container>
          <nav aria-label="Project categories" className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-[13px] font-medium border transition-colors ${
                  cat === 'All'
                    ? 'bg-nexino-dark text-white border-nexino-dark'
                    : 'text-nexino-text-secondary border-nexino-border'
                }`}
              >
                {cat}
              </span>
            ))}
          </nav>
        </Container>
      </section>

      {/* Projects */}
      <section className="py-20 lg:py-28 bg-nexino-off-white" aria-labelledby="projects-list-heading">
        <Container>
          <AnimatedSection className="mb-10">
            <h2 id="projects-list-heading" className="text-[1.7rem] sm:text-[2rem] font-bold text-nexino-dark tracking-[-0.025em]">
              All projects
              <span className="ml-3 text-[1.1rem] font-normal text-nexino-text-secondary">({projects.length})</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
            {projects.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.07}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group flex flex-col bg-white rounded-xl border border-nexino-border overflow-hidden hover:border-nexino-blue hover:shadow-md transition-all"
                  role="listitem"
                >
                  {/* Accent band */}
                  <div
                    className="h-1.5 w-full"
                    style={{ background: `linear-gradient(90deg, ${project.accentColor ?? '#0094E8'}, #12C878)` }}
                    aria-hidden="true"
                  />

                  <div className="p-6 flex flex-col flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${typeColors[project.type] ?? 'bg-nexino-light-grey text-nexino-text-secondary border-nexino-border'}`}>
                        {project.type}
                      </span>
                      <span className="text-[11px] text-nexino-text-secondary">{project.status}</span>
                    </div>

                    <p className="text-[10px] font-semibold uppercase tracking-wider text-nexino-text-secondary">
                      {project.category}
                    </p>

                    <h3 className="font-bold text-nexino-dark text-[1.05rem] leading-[1.3] group-hover:text-nexino-blue transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-[13px] text-nexino-text-secondary leading-[1.65] flex-1">
                      {project.tagline}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech.name} className="text-[11px] bg-nexino-off-white border border-nexino-border rounded-full px-2.5 py-1 text-nexino-text-secondary">
                          {tech.name}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-[11px] text-nexino-text-secondary py-1">+{project.technologies.length - 3}</span>
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

      {/* Process */}
      <section className="py-20 lg:py-24 bg-white" aria-labelledby="work-process-heading">
        <Container>
          <AnimatedSection className="mb-12">
            <p className="text-nexino-blue text-[11px] font-bold uppercase tracking-[0.18em] mb-3">How we work</p>
            <h2 id="work-process-heading" className="text-[2rem] sm:text-[2.4rem] font-bold text-nexino-dark tracking-[-0.025em]">
              From idea to working system.
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: '01', title: 'Define the problem', desc: 'We start with the operational challenge, not the solution.' },
              { step: '02', title: 'Research and design', desc: 'Explore options, evaluate trade-offs and design the approach.' },
              { step: '03', title: 'Build iteratively', desc: 'Develop in stages with clear review points and feedback loops.' },
              { step: '04', title: 'Validate and ship', desc: 'Test against real requirements and deliver a working result.' },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.07}>
                <div className="space-y-3 p-6 bg-nexino-off-white rounded-xl border border-nexino-border">
                  <span className="text-[2.2rem] font-bold leading-none select-none" style={{ color: '#E4E7EC' }} aria-hidden="true">{item.step}</span>
                  <h3 className="font-bold text-nexino-dark text-[14px]">{item.title}</h3>
                  <p className="text-[13px] text-nexino-text-secondary leading-[1.65]">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        label="Start a Project"
        title="Have something you want to build?"
        description="Tell us what you are working on and we will help identify the right approach."
        primaryCta={{ label: 'Start a Project', href: '/contact?type=project' }}
        secondaryCta={{ label: 'View Services', href: '/services' }}
      />
    </>
  );
}
