import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Monitor,
  Smartphone,
  Layers,
  Sparkles
} from 'lucide-react';
import { AGENCY_CONFIG } from '../config/agencyConfig';
import { PageTransition, FadeIn } from '../components/Motion';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();

  const projectIndex = AGENCY_CONFIG.projects.findIndex((p) => p.slug === slug);
  const project = AGENCY_CONFIG.projects[projectIndex];

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const prevProject =
    projectIndex > 0
      ? AGENCY_CONFIG.projects[projectIndex - 1]
      : AGENCY_CONFIG.projects[AGENCY_CONFIG.projects.length - 1];

  const nextProject =
    projectIndex < AGENCY_CONFIG.projects.length - 1
      ? AGENCY_CONFIG.projects[projectIndex + 1]
      : AGENCY_CONFIG.projects[0];

  const hasLiveDemo = Boolean(project.previewUrl && project.previewUrl.trim() !== '');

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 sm:pt-28 pb-20">

        {/* Breadcrumb Top Bar */}
        <div className="px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto mb-6">
          <div className="flex items-center justify-between py-2 border-b border-[#151A24]/6 text-xs text-[#707887]">
            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 hover:text-[#151A24] transition-colors font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Showcase Projects</span>
            </Link>

            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] text-[#496BFF]">
                0{projectIndex + 1} / 0{AGENCY_CONFIG.projects.length}
              </span>
            </div>
          </div>
        </div>

        {/* Case Study Hero */}
        <section className="px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto">
          <FadeIn className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-lg text-xs font-bold bg-[#151A24] text-white">
                {project.industry}
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#DCE5FF] text-[#496BFF]">
                Concept Demonstration
              </span>
              {hasLiveDemo ? (
                <span className="px-2.5 py-0.5 rounded-lg text-xs font-medium bg-emerald-500/10 text-emerald-800 border border-emerald-500/20 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Live Hosted Demo
                </span>
              ) : (
                <span className="px-2.5 py-0.5 rounded-lg text-xs font-medium bg-[#151A24]/5 text-[#707887] font-mono">
                  Configurable Preview
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-[#151A24] tracking-tight leading-tight">
              {project.name}
            </h1>

            <p className="text-lg sm:text-xl text-[#707887] font-normal leading-relaxed">
              {project.tagline}
            </p>
          </FadeIn>

          {/* Quick Project Metadata Grid */}
          <FadeIn delay={0.1} className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white border border-[#151A24]/6 shadow-2xs">
            <div>
              <div className="text-[10px] font-mono text-[#707887] uppercase tracking-wider">Discipline</div>
              <div className="text-xs sm:text-sm font-semibold text-[#151A24] mt-0.5">Bespoke Full-Stack Web</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-[#707887] uppercase tracking-wider">Industry</div>
              <div className="text-xs sm:text-sm font-semibold text-[#151A24] mt-0.5">{project.industry}</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-[#707887] uppercase tracking-wider">Engineering Standard</div>
              <div className="text-xs sm:text-sm font-semibold text-[#496BFF] mt-0.5">Modern React 19 SPA</div>
            </div>
            <div>
              <div className="text-[10px] font-mono text-[#707887] uppercase tracking-wider">Demo Status</div>
              <div className="text-xs sm:text-sm font-semibold text-[#151A24] mt-0.5">
                {hasLiveDemo ? 'Live Public Preview' : 'Verified Local Build'}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Primary Desktop Interface in Device Frame */}
        <section className="px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto mt-10">
          <FadeIn delay={0.15} className="rounded-3xl bg-white p-3 sm:p-5 border border-[#151A24]/10 shadow-xl overflow-hidden">
            {/* Browser Chrome Header */}
            <div className="flex items-center justify-between pb-3 px-2 border-b border-[#151A24]/6 text-xs text-[#707887]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="px-4 py-1 rounded-lg bg-[#F7F5F0] text-[11px] font-mono text-[#707887] max-w-xs truncate">
                {hasLiveDemo ? project.previewUrl : `https://${project.slug}.northform-preview.local`}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono hidden sm:inline">1440 &times; 900</span>
              </div>
            </div>

            <div className="mt-3 rounded-xl overflow-hidden bg-[#F7F5F0] border border-[#151A24]/6">
              <img
                src={project.desktopScreenshot}
                alt={`${project.name} Desktop Interface Screenshot`}
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>

            <div className="mt-3 px-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#707887]">
              <span>Authentic desktop capture rendered directly from compiled application</span>
              {hasLiveDemo && (
                <a
                  href={project.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#496BFF] font-semibold hover:underline"
                >
                  <span>Open Live Demo in New Tab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </FadeIn>
        </section>

        {/* Narrative: Challenge & Solution */}
        <section className="px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn className="p-8 rounded-3xl bg-white border border-[#151A24]/8 shadow-2xs space-y-3">
              <span className="text-[10px] font-mono font-bold text-rose-600 uppercase tracking-widest">
                THE COMMERCIAL CHALLENGE
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#151A24]">
                Why traditional templates fail in this market.
              </h2>
              <p className="text-xs sm:text-sm text-[#707887] leading-relaxed">
                {project.challenge}
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="p-8 rounded-3xl bg-white border border-[#151A24]/8 shadow-2xs space-y-3">
              <span className="text-[10px] font-mono font-bold text-[#496BFF] uppercase tracking-widest">
                OUR ENGINEERING SOLUTION
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#151A24]">
                How we solved it with craft &amp; code.
              </h2>
              <p className="text-xs sm:text-sm text-[#707887] leading-relaxed">
                {project.solution}
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Intended Audience & Technical Stack */}
        <section className="px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto mt-12">
          <FadeIn className="p-8 sm:p-10 rounded-3xl bg-[#FAF9F5] border border-[#151A24]/8 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-3">
                <span className="text-[10px] font-mono font-bold text-[#496BFF] uppercase tracking-widest">
                  INTENDED AUDIENCE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#151A24]">
                  Targeted for high-intent decision-makers.
                </h3>
                <p className="text-xs sm:text-sm text-[#707887] leading-relaxed">
                  {project.intendedAudience}
                </p>
              </div>

              <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-[#151A24]/8 space-y-3 shadow-2xs">
                <span className="text-[10px] font-mono font-bold text-[#151A24] uppercase tracking-widest">
                  Production Tech Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#F7F5F0] text-[#151A24] border border-[#151A24]/6"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-[11px] text-[#707887] pt-1">
                  Zero heavy CMS overhead. Pure sub-second React architecture with modular components.
                </p>
              </div>

            </div>
          </FadeIn>
        </section>

        {/* Dual Visual Showcase: Mobile Phone + Catalog Screen */}
        <section className="px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto mt-16">
          <FadeIn className="space-y-4 mb-8">
            <span className="text-[10px] font-mono font-bold text-[#496BFF] uppercase tracking-widest">
              RESPONSIVE EXCELLENCE
            </span>
            <h2 className="text-3xl font-bold font-heading text-[#151A24]">
              Deep devotion to mobile behavior.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Mobile Phone Mockup Frame */}
            <FadeIn className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-xs rounded-[36px] bg-[#151A24] p-3 shadow-2xl border-4 border-[#242c3d]">
                <div className="w-20 h-3.5 bg-black rounded-full mx-auto mb-2" />
                <div className="rounded-[26px] overflow-hidden bg-[#F7F5F0] aspect-9/19 border border-white/10">
                  <img
                    src={project.mobileScreenshot}
                    alt={`${project.name} Mobile View`}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="text-center text-[10px] text-white/50 pt-2 font-mono">
                  Mobile 390 &times; 844
                </div>
              </div>
            </FadeIn>

            {/* Catalog Screenshot + Key Highlights */}
            <div className="lg:col-span-7 space-y-6">
              {project.catalogScreenshot && (
                <FadeIn className="rounded-2xl overflow-hidden bg-white border border-[#151A24]/10 shadow-md">
                  <div className="px-4 py-2 bg-[#F7F5F0] border-b border-[#151A24]/6 text-xs text-[#707887] font-mono">
                    Catalogue &amp; Filter Experience View
                  </div>
                  <img
                    src={project.catalogScreenshot}
                    alt={`${project.name} Secondary Feature Screenshot`}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </FadeIn>
              )}

              <FadeIn delay={0.1} className="p-6 rounded-2xl bg-white border border-[#151A24]/8 space-y-4 shadow-2xs">
                <h3 className="text-xs font-bold font-heading text-[#151A24] uppercase tracking-wider">
                  Full Architectural Features
                </h3>
                <div className="space-y-2.5">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#151A24] leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

          </div>
        </section>

        {/* Next / Previous Project Navigation */}
        <section className="px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto mt-16 pt-8 border-t border-[#151A24]/6">
          <div className="flex items-center justify-between">
            <Link
              to={`/work/${prevProject.slug}`}
              className="group flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#707887] hover:text-[#151A24] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-[#707887] font-normal uppercase font-mono">Previous Project</span>
                <span>{prevProject.name}</span>
              </div>
            </Link>

            <Link
              to={`/work/${nextProject.slug}`}
              className="group flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#707887] hover:text-[#151A24] transition-colors text-right"
            >
              <div className="flex flex-col">
                <span className="text-[10px] text-[#707887] font-normal uppercase font-mono">Next Project</span>
                <span>{nextProject.name}</span>
              </div>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
