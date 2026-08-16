import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, AlertCircle } from 'lucide-react';
import { Container } from '@/components/shared/Container';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { CTASection } from '@/components/shared/CTASection';
import { AnimatedSection } from '@/components/motion/AnimatedSection';
import { projects, getProjectBySlug, getRelatedProjects } from '@/data/projects';
import { getProjectImage } from '@/data/local-images';

interface Props { params: Promise<{ slug: string }> }

const typeColors: Record<string, string> = {
  Prototype: 'bg-blue-50 text-nexino-blue border-blue-100',
  Concept: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  'Research Project': 'bg-purple-50 text-purple-700 border-purple-100',
  'Internal Product': 'bg-amber-50 text-amber-700 border-amber-100',
  'Client Project': 'bg-green-50 text-green-700 border-green-100',
  'Work in Progress': 'bg-orange-50 text-orange-700 border-orange-100',
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found' };
  return { title: project.seo.title, description: project.seo.description };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project.relatedProjectSlugs);
  const isExploratoryWork = ['Prototype', 'Concept', 'Research Project', 'Work in Progress'].includes(project.type);
  const heroImage = getProjectImage(project.slug);

  return (
    <>
      <section className="pt-28 pb-16 bg-nexino-dark relative overflow-hidden" aria-labelledby="project-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '52px 52px',
            }}
          />
          <div
            className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[80px]"
            style={{ backgroundColor: `${project.accentColor ?? '#0094E8'}12` }}
          />
        </div>
        <Container className="relative">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Our Work', href: '/work' },
              { label: project.title },
            ]}
            theme="dark"
            className="mb-8"
          />
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="space-y-5">
              <div className="flex flex-wrap gap-3">
                <span
                  className={`text-[11px] font-bold px-3 py-1.5 rounded-full border ${
                    typeColors[project.type] ?? 'bg-white/10 text-white border-white/20'
                  }`}
                >
                  {project.type}
                </span>
                <span className="text-[11px] font-medium bg-white/8 text-white/60 border border-white/10 px-3 py-1.5 rounded-full">
                  {project.status}
                </span>
              </div>
              <h1 id="project-heading" className="text-[2.4rem] sm:text-[3rem] font-bold text-white leading-[1.08] tracking-[-0.03em]">
                {project.title}
              </h1>
              <p className="text-[1.05rem] text-white/60 leading-[1.75]">{project.tagline}</p>
              <div className="inline-flex items-center gap-2 text-[12.5px] font-medium text-nexino-blue bg-nexino-blue/10 border border-nexino-blue/20 px-4 py-2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-nexino-blue" aria-hidden="true" />
                {project.category}
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative h-[260px] lg:h-[320px] rounded-[1.5rem] overflow-hidden border border-white/10 shadow-2xl">
                <Image src={heroImage} alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-nexino-dark/70 via-transparent to-transparent" />
              </div>
              <div className="bg-white/5 border border-white/8 rounded-xl p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/30 mb-4">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <div key={tech.name} className="bg-white/8 border border-white/10 rounded-full px-3 py-1.5 text-[12.5px]">
                      <span className="text-white font-medium">{tech.name}</span>
                      <span className="text-white/30 ml-1.5 text-[11px]">- {tech.category}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {isExploratoryWork && (
        <div className="bg-amber-50 border-b border-amber-200">
          <Container className="py-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-[12.5px] text-amber-800 leading-[1.65]">
                {project.disclaimer ?? 'This item is presented as a prototype or concept and does not represent a completed client engagement unless stated otherwise.'}
              </p>
            </div>
          </Container>
        </div>
      )}

      <section className="py-16 lg:py-20 bg-white" aria-labelledby="project-overview-heading">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <p className="text-nexino-blue text-[11px] font-bold uppercase tracking-[0.18em] mb-4">Overview</p>
              <h2 id="project-overview-heading" className="text-[1.7rem] sm:text-[2rem] font-bold text-nexino-dark tracking-[-0.025em] mb-5">
                About this project.
              </h2>
              <p className="text-[0.95rem] text-nexino-text-secondary leading-[1.75]">{project.overview}</p>
            </AnimatedSection>
            <div className="space-y-4">
              <AnimatedSection delay={0.1} direction="left">
                <div className="bg-nexino-off-white rounded-xl border border-nexino-border p-5 space-y-2.5">
                  <h3 className="font-bold text-nexino-dark text-[14px]">The challenge</h3>
                  <p className="text-[13px] text-nexino-text-secondary leading-[1.7]">{project.challenge}</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.15} direction="left">
                <div className="bg-nexino-dark rounded-xl p-5 space-y-2.5">
                  <h3 className="font-bold text-white text-[14px]">The proposed solution</h3>
                  <p className="text-[13px] text-white/60 leading-[1.7]">{project.proposedSolution}</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20 bg-nexino-off-white" aria-labelledby="features-heading">
        <Container>
          <AnimatedSection className="mb-10">
            <h2 id="features-heading" className="text-[1.7rem] sm:text-[2rem] font-bold text-nexino-dark tracking-[-0.025em]">
              Key features.
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
            {project.features.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.05}>
                <div className="bg-white rounded-xl border border-nexino-border p-5 space-y-2.5" role="listitem">
                  <div
                    className="w-1.5 h-7 rounded-full"
                    style={{
                      background: `linear-gradient(180deg, ${project.accentColor ?? '#0094E8'}, #12C878)`,
                    }}
                    aria-hidden="true"
                  />
                  <h3 className="font-bold text-nexino-dark text-[13.5px]">{feature.title}</h3>
                  <p className="text-[12.5px] text-nexino-text-secondary leading-[1.65]">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20 bg-white" aria-labelledby="process-heading">
        <Container>
          <AnimatedSection className="mb-10">
            <h2 id="process-heading" className="text-[1.7rem] sm:text-[2rem] font-bold text-nexino-dark tracking-[-0.025em]">
              How it was built.
            </h2>
          </AnimatedSection>
          <div className="space-y-3">
            {project.processSteps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.05}>
                <div className="flex gap-5 p-5 bg-nexino-off-white rounded-xl border border-nexino-border items-start">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-[11px] font-bold shrink-0"
                    style={{ backgroundColor: project.accentColor ?? '#0094E8' }}
                    aria-hidden="true"
                  >
                    {step.step}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-nexino-dark text-[13.5px]">{step.title}</h3>
                    <p className="text-[13px] text-nexino-text-secondary leading-[1.65]">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 bg-nexino-navy border-y border-white/8" aria-labelledby="status-heading">
        <Container>
          <div className="flex gap-5 items-start">
            <div className="w-1 rounded-full bg-nexino-green shrink-0 self-stretch" aria-hidden="true" />
            <div>
              <h2 id="status-heading" className="text-white font-bold text-[14px] mb-2">
                Current status
              </h2>
              <p className="text-white/60 text-[13.5px] leading-[1.7]">{project.currentStatus}</p>
            </div>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="py-16 lg:py-20 bg-nexino-off-white" aria-labelledby="related-work-heading">
          <Container>
            <AnimatedSection className="mb-10">
              <h2 id="related-work-heading" className="text-[1.7rem] font-bold text-nexino-dark tracking-[-0.025em]">
                Related work.
              </h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((rel, i) => (
                <AnimatedSection key={rel.id} delay={i * 0.07}>
                  <Link
                    href={`/work/${rel.slug}`}
                    className="group flex flex-col gap-3 p-6 bg-white rounded-xl border border-nexino-border hover:border-nexino-blue transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-medium text-nexino-text-secondary uppercase tracking-wider">
                        {rel.category}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                          typeColors[rel.type] ?? 'bg-nexino-off-white text-nexino-text-secondary border-nexino-border'
                        }`}
                      >
                        {rel.type}
                      </span>
                    </div>
                    <h3 className="font-bold text-nexino-dark text-[14px] group-hover:text-nexino-blue transition-colors">
                      {rel.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-nexino-blue mt-auto">
                      View Project <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection
        title="Interested in a similar project?"
        description="Tell us what you are building and we will help identify the right approach."
        primaryCta={{ label: 'Start a Project', href: `/contact?type=project&project=${project.slug}` }}
        secondaryCta={{ label: 'View All Work', href: '/work' }}
      />
    </>
  );
}
