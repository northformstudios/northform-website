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
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AGENCY_CONFIG } from '../config/agencyConfig';
import { PageTransition, FadeIn } from '../components/Motion';

export default function Work() {
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = AGENCY_CONFIG.projects.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'real-estate') return p.id === 'estate-one';
    if (filter === 'hospitality') return p.id === 'maison-kitchen';
    if (filter === 'ecommerce') return p.id === 'solara-energy';
    return true;
  });

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 sm:pt-28 pb-20">

        {/* Header Section */}
        <section className="px-4 sm:px-6 md:px-8 py-10 sm:py-16 max-w-[1240px] mx-auto">
          <FadeIn className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-white border border-[#151A24]/10 text-xs font-mono font-semibold uppercase text-[#151A24] shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8F169]" />
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
          <FadeIn delay={0.15} className="mt-8 flex flex-wrap items-center gap-2 pt-4 border-t border-[#151A24]/6">
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
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  filter === tab.id
                    ? 'bg-[#151A24] text-white shadow-xs'
                    : 'bg-white hover:bg-[#151A24]/5 text-[#151A24] border border-[#151A24]/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </FadeIn>
        </section>

        {/* Projects Exhibition List */}
        <section className="px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto space-y-12">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => {
              const hasLiveDemo = Boolean(project.previewUrl && project.previewUrl.trim() !== '');

              return (
                <FadeIn
                  key={project.id}
                  className="rounded-3xl bg-white border border-[#151A24]/8 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300"
                >
                  {/* Top Meta Bar */}
                  <div className="px-6 sm:px-8 py-4 border-b border-[#151A24]/6 flex flex-wrap items-center justify-between gap-3 bg-[#FAF9F5]">
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
                        Concept Demonstration
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
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 items-center">
                    
                    {/* Visual Area (7 cols) */}
                    <div className="lg:col-span-7 space-y-3">
                      <div className="relative rounded-2xl overflow-hidden bg-[#F7F5F0] border border-[#151A24]/10 aspect-16/10 shadow-inner group">
                        <img
                          src={project.desktopScreenshot}
                          alt={`${project.name} Desktop Interface`}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                          loading="lazy"
                        />

                        {/* Floating Mobile Inset */}
                        <div className="absolute bottom-3 right-3 w-28 sm:w-36 aspect-9/19 rounded-xl overflow-hidden border-2 border-white shadow-2xl transition-transform duration-300 group-hover:-translate-y-1">
                          <img
                            src={project.mobileScreenshot}
                            alt={`${project.name} Mobile Interface`}
                            className="w-full h-full object-cover object-top"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-[#707887] px-1">
                        <span className="flex items-center gap-1.5">
                          <Monitor className="w-3.5 h-3.5" />
                          Desktop 1440px + Mobile 390px Verified
                        </span>
                        <span className="font-mono text-[11px] text-[#496BFF]">
                          Pure React 19 Frontend
                        </span>
                      </div>
                    </div>

                    {/* Details Narrative Area (5 cols) */}
                    <div className="lg:col-span-5 space-y-5">
                      <div className="space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#151A24] tracking-tight">
                          {project.name}
                        </h2>
                        <p className="text-xs font-semibold text-[#496BFF] font-sans">
                          {project.tagline}
                        </p>
                        <p className="text-xs sm:text-sm text-[#707887] leading-relaxed pt-1">
                          {project.shortDescription}
                        </p>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2 pt-1 border-t border-[#151A24]/6">
                        <h3 className="text-xs font-bold text-[#151A24] font-heading uppercase tracking-wider">
                          Engineered Capabilities
                        </h3>
                        <div className="space-y-1.5">
                          {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-[#151A24]/85">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#496BFF] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="space-y-1.5 pt-1">
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-medium bg-[#F7F5F0] text-[#151A24] border border-[#151A24]/6"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-4 border-t border-[#151A24]/6 flex flex-wrap items-center gap-3">
                        <Link
                          to={`/work/${project.slug}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#151A24] hover:bg-[#496BFF] text-white text-xs font-semibold shadow-2xs hover:shadow-md transition-all active:scale-98"
                        >
                          <span>Explore Case Study</span>
                          <ArrowUpRight className="w-4 h-4 text-[#C8F169]" />
                        </Link>

                        {hasLiveDemo ? (
                          <a
                            href={project.previewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-[#F7F5F0] text-emerald-700 text-xs font-semibold border border-emerald-300 transition-colors"
                          >
                            <span>Launch Live Demo</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <span className="text-[11px] text-[#707887] py-2 px-3 rounded-lg bg-[#F7F5F0] font-mono">
                            Demo URL configurable in agencyConfig.ts
                          </span>
                        )}
                      </div>

                    </div>

                  </div>

                </FadeIn>
              );
            })}
          </AnimatePresence>
        </section>

        {/* Authenticity Notice */}
        <section className="px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto mt-16">
          <FadeIn className="p-6 sm:p-8 rounded-2xl bg-white border border-[#151A24]/8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1 max-w-xl">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#496BFF]" />
                <h3 className="text-sm font-bold font-heading text-[#151A24]">
                  Why Concept Demonstrations?
                </h3>
              </div>
              <p className="text-xs text-[#707887] leading-relaxed">
                Many agencies showcase stock images or make unsubstantiated claims. At NORTHFORM STUDIOS, we build fully functional demonstrations from scratch to verify every interaction, performance metric, and line of code before offering it to paying clients.
              </p>
            </div>

            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#151A24] text-white text-xs font-semibold hover:bg-[#496BFF] transition-colors shrink-0"
            >
              <span>Commission a Custom Build</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C8F169]" />
            </Link>
          </FadeIn>
        </section>

      </div>
    </PageTransition>
  );
}
