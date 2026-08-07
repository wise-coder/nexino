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
import { projectImages } from '@/data/image-assets';

interface Props {
  params: Promise<{ slug: string }>;
}

const typeColors: Record<string, string> = {
  Prototype: 'bg-nexino-blue/10 text-nexino-blue border-nexino-blue/20',
  Concept: 'bg-nexino-green/10 text-nexino-green border-nexino-green/20',
  'Research Project': 'bg-purple-100 text-purple-700 border-purple-200',
  'Internal Product': 'bg-amber-100 text-amber-700 border-amber-200',
  'Client Project': 'bg-emerald-100 text-emerald-700 border-emerald-200',
  'Work in Progress': 'bg-orange-100 text-orange-700 border-orange-200',
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: project.seo.title,
    description: project.seo.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const relatedProjects = getRelatedProjects(project.relatedProjectSlugs);
  const isPrototypeOrConcept =
    project.type === 'Prototype' ||
    project.type === 'Concept' ||
    project.type === 'Research Project' ||
    project.type === 'Work in Progress';
  const image = projectImages[project.slug as keyof typeof projectImages];

  return (
    <>
      <section className="relative pt-28 pb-16 bg-nexino-dark overflow-hidden" aria-labelledby="project-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl"
            style={{ backgroundColor: `${project.accentColor ?? '#0094E8'}15` }}
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

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                <span
                  className={`text-xs font-bold px-3 py-1.5 rounded-full border ${
                    typeColors[project.type] ?? 'bg-white/10 text-white border-white/20'
                  }`}
                >
                  {project.type}
                </span>
                <span className="text-xs font-medium bg-white/10 text-white/70 border border-white/10 px-3 py-1.5 rounded-full">
                  {project.status}
                </span>
              </div>

              <h1 id="project-heading" className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">{project.tagline}</p>

              <div className="inline-flex items-center gap-2 text-sm font-medium text-nexino-blue bg-nexino-blue/10 border border-nexino-blue/20 px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-nexino-blue" aria-hidden="true" />
                {project.category}
              </div>
            </div>

            <AnimatedSection delay={0.1} direction="left">
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 shadow-2xl shadow-black/20 aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-nexino-dark/65" />
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-between text-white">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold backdrop-blur">
                    <span className="w-2 h-2 rounded-full bg-nexino-green" aria-hidden="true" />
                    Project showcase
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-white/60">Focus</p>
                    <h2 className="mt-2 text-2xl font-bold leading-tight max-w-md">
                      {project.title} visualised through a representative product image.
                    </h2>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {isPrototypeOrConcept && (
        <div className="bg-amber-50 border-b border-amber-200">
          <Container className="py-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-sm text-amber-800 leading-relaxed">
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
              <p className="text-nexino-blue text-xs font-bold uppercase tracking-[0.15em] mb-4">
                Overview
              </p>
              <h2 id="project-overview-heading" className="text-3xl sm:text-4xl font-bold text-nexino-text mb-6">
                About this project.
              </h2>
              <p className="text-nexino-text-secondary leading-relaxed text-lg">
                {project.overview}
              </p>
              <div className="mt-8 relative overflow-hidden rounded-2xl border border-nexino-border aspect-[16/10]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-nexino-dark/65" />
              </div>
            </AnimatedSection>
            <div className="space-y-6">
              <AnimatedSection delay={0.1} direction="left">
                <div className="bg-nexino-off-white rounded-2xl border border-nexino-border p-6 space-y-3">
                  <h3 className="font-bold text-nexino-text">The challenge</h3>
                  <p className="text-nexino-text-secondary leading-relaxed text-sm">
                    {project.challenge}
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2} direction="left">
                <div className="bg-nexino-dark rounded-2xl p-6 space-y-3">
                  <h3 className="font-bold text-white">The proposed solution</h3>
                  <p className="text-white/70 leading-relaxed text-sm">
                    {project.proposedSolution}
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20 bg-nexino-off-white" aria-labelledby="project-features-heading">
        <Container>
          <AnimatedSection className="mb-12">
            <h2 id="project-features-heading" className="text-3xl sm:text-4xl font-bold text-nexino-text">
              Key features.
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {project.features.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.06}>
                <div className="bg-white rounded-xl border border-nexino-border p-6 space-y-3" role="listitem">
                  <div
                    className="w-2 h-8 rounded-full"
                    style={{
                      backgroundColor: project.accentColor ?? '#0094E8',
                    }}
                    aria-hidden="true"
                  />
                  <h3 className="font-bold text-nexino-text">{feature.title}</h3>
                  <p className="text-sm text-nexino-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20 bg-white" aria-labelledby="project-process-heading">
        <Container>
          <AnimatedSection className="mb-12">
            <h2 id="project-process-heading" className="text-3xl sm:text-4xl font-bold text-nexino-text">
              How it was built.
            </h2>
          </AnimatedSection>
          <div className="space-y-4">
            {project.processSteps.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.06}>
                <div className="flex gap-6 p-6 bg-nexino-off-white rounded-xl border border-nexino-border items-start">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                    style={{ backgroundColor: project.accentColor ?? '#0094E8' }}
                    aria-hidden="true"
                  >
                    {step.step}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-nexino-text">{step.title}</h3>
                    <p className="text-nexino-text-secondary text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 bg-nexino-navy" aria-labelledby="status-heading">
        <Container>
          <div className="flex gap-6 items-start">
            <div className="w-1 rounded-full bg-nexino-green shrink-0 self-stretch" aria-hidden="true" />
            <div>
              <h2 id="status-heading" className="text-white font-bold text-lg mb-2">
                Current status
              </h2>
              <p className="text-white/70 leading-relaxed">{project.currentStatus}</p>
            </div>
          </div>
        </Container>
      </section>

      {relatedProjects.length > 0 && (
        <section className="py-16 lg:py-20 bg-nexino-off-white" aria-labelledby="related-projects-heading">
          <Container>
            <AnimatedSection className="mb-10">
              <h2 id="related-projects-heading" className="text-3xl font-bold text-nexino-text">
                Related work.
              </h2>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((rel, i) => (
                <AnimatedSection key={rel.id} delay={i * 0.08}>
                  <Link
                    href={`/work/${rel.slug}`}
                    className="group flex flex-col gap-4 p-6 bg-white rounded-xl border border-nexino-border hover:border-nexino-blue hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-nexino-text-secondary uppercase tracking-wide">
                        {rel.category}
                      </span>
                      <span
                        className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
                          typeColors[rel.type] ?? 'bg-nexino-border text-nexino-text border-nexino-border'
                        }`}
                      >
                        {rel.type}
                      </span>
                    </div>
                    <h3 className="font-bold text-nexino-text group-hover:text-nexino-blue transition-colors">
                      {rel.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-nexino-blue mt-auto">
                      View Project
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
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
        primaryCta={{
          label: 'Discuss Similar Work',
          href: `/contact?type=project&project=${project.slug}`,
        }}
        secondaryCta={{ label: 'View All Work', href: '/work' }}
      />
    </>
  );
}
