import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowUpRight,
  Shield,
  Layers,
  HeartHandshake,
  CheckCircle2,
  Compass,
  Code2,
  Cpu
} from 'lucide-react';
import { AGENCY_CONFIG } from '../config/agencyConfig';
import { PageTransition, FadeIn, StaggerContainer, StaggerItem } from '../components/Motion';
import { NorthformSymbol } from '../components/BrandLogo';

export default function About() {
  const coreValues = [
    {
      title: 'Precision Over Noise',
      desc: 'We reject generic templates, bloated animations, and visual clutter. Every spacing decision, typeface selection, and subtle glass surface is engineered with restraint and purpose.',
      icon: Layers,
    },
    {
      title: 'Business Clarity First',
      desc: 'A website is not an art exhibition—it is your primary commercial salesperson. We design user flows that articulate your value and convert high-intent visitors into paying clients.',
      icon: Compass,
    },
    {
      title: 'Direct Builder Access',
      desc: 'No account managers, no layers of agency bureaucracy, and no game of telephone. When you partner with us, you collaborate directly with the designers and engineers coding your platform.',
      icon: HeartHandshake,
    },
    {
      title: 'Modern Engineering Discipline',
      desc: 'We engineer using contemporary React, TypeScript, and Tailwind architectures. The result: sub-second load times on mobile networks, clean modular code, and zero heavy plugin baggage.',
      icon: Code2,
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 sm:pt-28 pb-20">

        {/* Hero Section */}
        <section className="px-4 sm:px-6 md:px-8 py-10 sm:py-16 max-w-[1240px] mx-auto">
          <FadeIn className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-white border border-[#151A24]/10 text-xs font-mono font-semibold uppercase text-[#151A24] shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8F169]" />
              <span>STUDIO IDENTITY &bull; BUILT WITH INTENT</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-[#151A24] tracking-tight leading-tight">
              Minimal design.<br />
              Intelligent technology.<br />
              <span className="text-[#496BFF]">Exceptional execution.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#707887] leading-relaxed max-w-2xl font-normal">
              {AGENCY_CONFIG.positioning}
            </p>
          </FadeIn>
        </section>

        {/* Story & Philosophy */}
        <section className="px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto">
          <FadeIn className="p-8 sm:p-12 rounded-3xl bg-white border border-[#151A24]/8 shadow-xs space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 space-y-3">
                <span className="text-[10px] font-mono font-bold text-[#496BFF] uppercase tracking-widest">
                  OUR GENESIS
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#151A24] leading-snug">
                  Bridging the gap between high design &amp; commercial rigor.
                </h2>
                <div className="pt-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#F7F5F0] border border-[#151A24]/6">
                    <NorthformSymbol size={20} />
                    <span className="text-xs font-mono font-semibold text-[#151A24]">BUILT WITH INTENT.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4 text-xs sm:text-base text-[#707887] leading-relaxed font-normal">
                <p>
                  Ambitious enterprises often face a frustrating dilemma when commissioning digital products: either hire traditional agencies that deliver sluggish, generic templates, or hire freelancers who lack brand polish and commercial discipline.
                </p>
                <p>
                  We established <strong>NORTHFORM STUDIOS</strong> to offer a distinct third way. We combine the typographic taste and aesthetic restraint of an elite creative studio with the architectural discipline of a senior software engineering team.
                </p>
                <p>
                  We intentionally remain a compact, senior-led studio. This ensures every client receives our undivided creative focus, prompt weekly sprints, and software engineered to stand the test of time.
                </p>
              </div>
            </div>

            {/* Mission Banner */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F7F5F0] border border-[#151A24]/6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-[#151A24] uppercase tracking-wider">
                  OUR MISSION
                </span>
                <p className="text-base sm:text-lg font-heading font-bold text-[#151A24]">
                  To help modern businesses look credible, operate efficiently, and win market trust through world-class digital experiences.
                </p>
              </div>
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#151A24] text-white text-xs font-semibold hover:bg-[#496BFF] transition-colors shrink-0"
              >
                <span>Work With Us</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C8F169]" />
              </Link>
            </div>
          </FadeIn>
        </section>

        {/* Core Values */}
        <section className="px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto mt-16">
          <FadeIn className="max-w-xl space-y-2 mb-10">
            <span className="text-[10px] font-mono font-bold text-[#496BFF] uppercase tracking-widest">
              HOW WE OPERATE
            </span>
            <h2 className="text-3xl font-bold font-heading text-[#151A24]">
              Values that govern our craft.
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.06}>
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <StaggerItem key={idx}>
                  <div className="h-full p-7 sm:p-8 rounded-2xl bg-white border border-[#151A24]/8 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
                    <div className="w-11 h-11 rounded-xl bg-[#F7F5F0] flex items-center justify-center text-[#151A24]">
                      <Icon className="w-5 h-5 text-[#496BFF]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-bold font-heading text-[#151A24]">
                        {val.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#707887] leading-relaxed font-normal">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </section>

        {/* Approach to Client Relationships */}
        <section className="px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto mt-16">
          <FadeIn className="p-8 sm:p-12 rounded-3xl bg-[#151A24] text-white space-y-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-[10px] font-mono font-bold text-[#C8F169] uppercase tracking-widest">
                CLIENT ENGAGEMENT
              </span>
              <h2 className="text-3xl font-bold font-heading text-white">
                A partnership built on honesty and respect.
              </h2>
              <p className="text-xs sm:text-sm text-[#707887] leading-relaxed">
                We respect your capital and your time. Here is what you can always expect when you partner with our studio:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="p-5 rounded-2xl bg-white/4 border border-white/8 space-y-2">
                <h3 className="text-sm font-bold font-heading text-white">Fixed, Transparent Pricing</h3>
                <p className="text-xs text-[#707887] leading-relaxed">
                  Clear, itemized proposals with zero hidden maintenance surprises or unexpected change fees.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white/4 border border-white/8 space-y-2">
                <h3 className="text-sm font-bold font-heading text-white">Weekly Staging Milestones</h3>
                <p className="text-xs text-[#707887] leading-relaxed">
                  Test and inspect interactive staging links as we build. You are never left wondering about progress.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-white/4 border border-white/8 space-y-2">
                <h3 className="text-sm font-bold font-heading text-white">Full Intellectual Ownership</h3>
                <p className="text-xs text-[#707887] leading-relaxed">
                  You own 100% of your source code, design assets, domain, and deployment accounts upon project completion.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Studio Team Section */}
        <section className="px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto mt-16">
          <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div className="space-y-2 max-w-xl">
              <span className="text-[10px] font-mono font-bold text-[#496BFF] uppercase tracking-widest">
                CORE STUDIO ROLES
              </span>
              <h2 className="text-3xl font-bold font-heading text-[#151A24]">
                The multidisciplinary team.
              </h2>
              <p className="text-xs sm:text-sm text-[#707887]">
                NORTHFORM STUDIOS operates as a synchronized unit spanning brand strategy, UI design, and full-stack software development.
              </p>
            </div>

            <div className="text-xs text-[#707887] font-mono px-3 py-1.5 rounded-xl bg-white border border-[#151A24]/6">
              Configurable in agencyConfig.ts
            </div>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.08}>
            {AGENCY_CONFIG.team.map((member, idx) => (
              <StaggerItem key={idx}>
                <div className="h-full p-7 rounded-2xl bg-white border border-[#151A24]/8 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#151A24] text-white flex items-center justify-center font-heading font-bold text-base shadow-sm border border-white/10">
                        <span className="text-[#C8F169]">{member.avatarPlaceholder}</span>
                      </div>
                      <span className="text-[9px] font-mono font-semibold text-[#707887] uppercase tracking-wider">
                        ROLE 0{idx + 1}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg font-bold font-heading text-[#151A24]">
                        {member.role}
                      </h3>
                      <p className="text-xs font-semibold text-[#496BFF]">
                        {member.title}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#707887] leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#151A24]/6 space-y-2">
                    <span className="text-[10px] font-mono text-[#707887] uppercase tracking-wider">
                      Core Focus
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {member.focus.map((f) => (
                        <span
                          key={f}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-[#F7F5F0] text-[#151A24] border border-[#151A24]/6"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Bottom CTA */}
        <section className="px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto mt-20 text-center space-y-4">
          <FadeIn>
            <h2 className="text-3xl font-bold font-heading text-[#151A24]">
              Let's discuss what we can build together.
            </h2>
            <p className="text-xs sm:text-sm text-[#707887] max-w-md mx-auto">
              Reach out directly to review your upcoming website or digital transformation project.
            </p>
            <div className="flex items-center justify-center gap-3 pt-4">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#151A24] text-white text-xs sm:text-sm font-semibold hover:bg-[#496BFF] transition-colors"
              >
                <span>Request a Detailed Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C8F169]" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-[#F7F5F0] text-[#151A24] text-xs sm:text-sm font-semibold border border-[#151A24]/10 transition-colors"
              >
                <span>General Inquiry</span>
              </Link>
            </div>
          </FadeIn>
        </section>

      </div>
    </PageTransition>
  );
}
