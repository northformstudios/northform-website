import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  Monitor,
  Smartphone,
  CheckCircle2,
  Filter,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AGENCY_CONFIG } from '../config/agencyConfig';
import { PageTransition, FadeIn } from '../components/Motion';
import BrowserMockup from '../components/BrowserMockup';

export default function Work() {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = AGENCY_CONFIG.projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'real-estate') return p.id === 'estate-one';
    if (filter === 'hospitality') return p.id === 'maison-kitchen';
    if (filter === 'ecommerce') return p.id === 'solara-energy';
    return true;
  });

  const domainMap: Record<string, string> = {
    'estate-one': 'estate-one.netlify.app',
    'maison-kitchen': 'maison-kitchen.netlify.app',
    'solara-energy': 'solaraenergy1.netlify.app',
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 sm:pt-28 pb-20 bg-[#F8F6F1]">

        {/* Header Section */}
        <section className="px-4 sm:px-6 md:px-8 py-10 sm:py-16 max-w-[1240px] mx-auto">
          <FadeIn className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-white border border-[#151A24]/10 text-xs font-mono font-semibold uppercase text-[#151A24] shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#496BFF]" />
              <span>PORTFOLIO &amp; SHOWCASE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-[#151A24] tracking-tight leading-tight">
              Proof over promises.
            </h1>

            <p className="text-base sm:text-lg text-[#707887] leading-relaxed max-w-2xl font-normal">
              We believe clients judge an agency by the craft of its work. Here are three complete web platforms engineered from scratch to illustrate our design and technical standard.
            </p>
          </FadeIn>

          {/* Filter Pills */}
          <FadeIn delay={0.15} className="mt-8 flex flex-wrap items-center gap-2 pt-4 border-t border-[#151A24]/8">
            <span className="text-xs text-[#707887] mr-2 flex items-center gap-1 font-sans">
              <Filter className="w-3.5 h-3.5" />
              Filter by Industry:
            </span>
            {[
              { id: 'all', label: 'All Projects (3)' },
              { id: 'real-estate', label: 'Real Estate' },
              { id: 'hospitality', label: 'Hospitality' },
              { id: 'ecommerce', label: 'Clean Energy & E-Commerce' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filter === tab.id
                    ? 'bg-[#151A24] text-white shadow-xs'
                    : 'bg-white hover:bg-[#F2EFE9] text-[#151A24] border border-[#151A24]/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </FadeIn>
        </section>

        {/* Projects Exhibition List */}
        <section className="px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto space-y-16">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => {
              const hasLiveDemo = Boolean(project.previewUrl && project.previewUrl.trim() !== '');
              const domain = domainMap[project.id] || `${project.slug}.studio`;

              return (
                <FadeIn
                  key={project.id}
                  className="rounded-3xl bg-white border border-[#151A24]/8 overflow-hidden studio-frame-shadow transition-all duration-300"
                >
                  {/* Top Meta Bar */}
                  <div className="px-6 sm:px-8 py-4 border-b border-[#151A24]/6 flex flex-wrap items-center justify-between gap-3 bg-[#FAF8F5]">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-lg text-xs font-bold bg-[#151A24] text-white">
                        {project.name}
                      </span>
                      <span className="text-xs text-[#707887] font-sans">
                        {project.industry}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-semibold bg-[#DCE5FF] text-[#496BFF]">
                        Concept Showcase
                      </span>
                      {hasLiveDemo ? (
                        <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-800 border border-emerald-500/20 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                          Live Hosted Demo
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-medium bg-[#151A24]/5 text-[#707887]">
                          Verified Codebase
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Showcase Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10 items-center">
                    
                    {/* Visual Area (7 cols) — Realistic Browser Mockup */}
                    <div className="lg:col-span-7 space-y-3">
                      <Link to={`/work/${project.slug}`} className="block cursor-pointer">
                        <BrowserMockup
                          desktopImage={project.desktopScreenshot}
                          mobileImage={project.mobileScreenshot}
                          title={project.name}
                          domain={domain}
                          aspectRatio="16/10"
                        />
                      </Link>

                      <div className="flex items-center justify-between text-xs text-[#707887] px-1 pt-3">
                        <span className="flex items-center gap-1.5">
                          <Monitor className="w-3.5 h-3.5 text-[#496BFF]" />
                          Desktop 1440px + Mobile 390px Verified
                        </span>
                        <span className="font-mono text-[11px] text-[#496BFF] font-semibold">
                          Pure React 19 Frontend
                        </span>
                      </div>
                    </div>

                    {/* Details Narrative Area (5 cols) */}
                    <div className="lg:col-span-5 space-y-6">
                      <div className="space-y-2.5">
                        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#151A24] tracking-tight">
                          {project.name}
                        </h2>
                        <p className="text-xs sm:text-sm font-semibold text-[#496BFF] font-sans">
                          {project.tagline}
                        </p>
                        <p className="text-xs sm:text-sm text-[#707887] leading-relaxed pt-1">
                          {project.shortDescription}
                        </p>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2.5 pt-2 border-t border-[#151A24]/6">
                        <h3 className="text-xs font-bold text-[#151A24] font-heading uppercase tracking-wider">
                          Engineered Capabilities
                        </h3>
                        <div className="space-y-2">
                          {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-[#151A24]/90">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#496BFF] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech stack badges */}
                      <div className="space-y-2 pt-1 border-t border-[#151A24]/6">
                        <h3 className="text-[10px] font-mono text-[#707887] uppercase tracking-wider">
                          Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium bg-[#F8F6F1] text-[#151A24] border border-[#151A24]/8"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <Link
                          to={`/work/${project.slug}`}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#151A24] text-white text-xs font-semibold hover:bg-[#496BFF] transition-all duration-200 shadow-md group"
                        >
                          <span>Explore Full Case Study</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#C8F169] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>

                        {hasLiveDemo ? (
                          <a
                            href={project.previewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white text-[#151A24] text-xs font-semibold border border-[#151A24]/10 hover:border-[#496BFF] hover:text-[#496BFF] transition-colors shadow-2xs"
                          >
                            <span>View Live Website</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <Link
                            to={`/quote?project=${encodeURIComponent(project.name)}`}
                            className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white text-[#151A24] text-xs font-semibold border border-[#151A24]/10 hover:bg-[#F8F6F1] transition-colors shadow-2xs"
                          >
                            <span>Commission Similar</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#496BFF]" />
                          </Link>
                        )}
                      </div>
                    </div>

                  </div>
                </FadeIn>
              );
            })}
          </AnimatePresence>
        </section>

        {/* Studio Transparency Standard Callout */}
        <section className="px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto mt-20">
          <FadeIn className="p-8 sm:p-10 rounded-3xl bg-white border border-[#151A24]/8 studio-card-shadow flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#496BFF]" />
                <span className="text-xs font-bold font-heading text-[#151A24] uppercase tracking-wider">
                  Verified Engineering Standard
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#707887] leading-relaxed">
                We believe in proof over promises. These three concept platforms are complete codebases crafted in-house to show actual responsiveness, animation fluidity, and conversion logic—no fabricated client claims or stock screenshots.
              </p>
            </div>

            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#151A24] text-white text-xs sm:text-sm font-semibold hover:bg-[#496BFF] transition-colors shrink-0 shadow-md"
            >
              <span>Commission a Custom Build</span>
              <ArrowUpRight className="w-4 h-4 text-[#C8F169]" />
            </Link>
          </FadeIn>
        </section>

      </div>
    </PageTransition>
  );
}
