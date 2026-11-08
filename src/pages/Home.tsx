import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Smartphone,
  Shield,
  Layers,
  Zap,
  CheckCircle2,
  Clock,
  Compass,
  Code,
  Rocket
} from 'lucide-react';
import { motion } from 'framer-motion';
import HeroVisual from '../components/HeroVisual';
import ProjectCard from '../components/ProjectCard';
import ServiceCard from '../components/ServiceCard';
import {
  PageTransition,
  FadeIn,
  StaggerContainer,
  StaggerItem,
  HeroHeadlineReveal
} from '../components/Motion';
import { AGENCY_CONFIG } from '../config/agencyConfig';
import { SERVICES_DATA } from '../data/servicesData';

export default function Home() {
  const processSteps = [
    {
      number: '01',
      title: 'Discover',
      tagline: 'Understand the business & its goals',
      description:
        'We begin with an in-depth consultation to clarify your commercial objectives, ideal target audience, and distinct competitive advantage in the market.',
      icon: Compass,
    },
    {
      number: '02',
      title: 'Design',
      tagline: 'Create the visual direction & structure',
      description:
        'We craft bespoke wireframes and interface concepts focusing on typography, generous whitespace, mobile hierarchy, and intentional user flows.',
      icon: Layers,
    },
    {
      number: '03',
      title: 'Develop',
      tagline: 'Build & test the website',
      description:
        'We write clean, modular, and accessible frontend code using modern standards. Every feature is thoroughly tested across iOS, Android, and desktop viewports.',
      icon: Code,
    },
    {
      number: '04',
      title: 'Launch',
      tagline: 'Deliver & support the finished product',
      description:
        'We configure performance assets, domain DNS, and WhatsApp/inbox integrations, then hand over complete documentation and ongoing maintenance support.',
      icon: Rocket,
    },
  ];

  const whyChoosePillars = [
    {
      title: 'Design that commands instant credibility',
      desc: 'First impressions determine enterprise perception. We replace dated templates with minimalist editorial design that signals prestige and institutional trust.',
      icon: Sparkles,
    },
    {
      title: 'Equal devotion to mobile & desktop',
      desc: 'Over 85% of target audience web traffic originates on mobile phones. Our websites are engineered from the ground up for thumb-driven navigation and sub-second rendering.',
      icon: Smartphone,
    },
    {
      title: 'Frictionless, clear user experiences',
      desc: 'Zero clutter, zero confusion. Every navigation element, call to action, and page layout is designed to guide prospective clients directly to your services and contact forms.',
      icon: Shield,
    },
    {
      title: 'Practical, business-focused functionality',
      desc: 'We do not build novelty effects that slow down visitors. Everything we build solves a direct commercial need—from WhatsApp ordering to interactive catalog sizing.',
      icon: Zap,
    },
    {
      title: 'Reliable communication & transparent delivery',
      desc: 'Direct access to the designers and engineers building your project. We work in disciplined weekly sprints with demonstrable milestones—no guesswork or delays.',
      icon: Clock,
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 sm:pt-28">

        {/* =========================================================================
            HERO SECTION
            ========================================================================= */}
        <section className="relative px-4 sm:px-6 md:px-8 pt-6 pb-16 sm:pb-24 overflow-hidden">
          
          {/* Subtle Ambient Top Light Tint */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-64 bg-linear-to-b from-[#DCE5FF]/40 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-[1240px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Narrative Column */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                
                {/* Small Label */}
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-[#151A24]/10 shadow-2xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8F169]" />
                  <span className="text-[11px] font-bold tracking-widest text-[#151A24] uppercase font-mono">
                    INDEPENDENT DIGITAL STUDIO
                  </span>
                </motion.div>

                {/* Staggered Word Reveal Headline */}
                <HeroHeadlineReveal
                  text="We make digital feel different."
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-[#151A24] tracking-tight leading-[1.08]"
                />

                {/* Supporting Text */}
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.12 }}
                  className="text-base sm:text-lg md:text-xl text-[#707887] leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal"
                >
                  Thoughtful design. Intelligent technology. Digital experiences built to move businesses forward.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.2 }}
                  className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4"
                >
                  <Link
                    to="/quote"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-[#151A24] text-white text-sm sm:text-base font-semibold transition-all duration-200 hover:bg-[#496BFF] hover:shadow-lg active:scale-98 group"
                  >
                    <span>Start a Project</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C8F169] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  <Link
                    to="/work"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl bg-white hover:bg-[#F7F5F0] text-[#151A24] text-sm sm:text-base font-semibold border border-[#151A24]/10 transition-all duration-200 active:scale-98"
                  >
                    <span>Explore Our Work</span>
                    <ArrowRight className="w-4 h-4 text-[#707887]" />
                  </Link>
                </motion.div>

                {/* Studio Credibility Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35, delay: 0.28 }}
                  className="pt-3 flex items-center justify-center lg:justify-start gap-4 text-xs text-[#707887]"
                >
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#496BFF]" />
                    <span>Architectural UI/UX Precision</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#496BFF]" />
                    <span>Sub-second mobile performance</span>
                  </div>
                </motion.div>

              </div>

              {/* Right Architectural Visual */}
              <div className="lg:col-span-5 flex justify-center">
                <HeroVisual />
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION A: CONCISE INTRODUCTION
            ========================================================================= */}
        <section className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 border-y border-[#151A24]/6 bg-white">
          <div className="max-w-[1240px] mx-auto">
            <FadeIn className="max-w-3xl mx-auto text-center space-y-3">
              <span className="text-[10px] font-mono font-bold text-[#496BFF] uppercase tracking-widest">
                WHAT WE DO
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-[#151A24] tracking-tight leading-snug">
                We help modern businesses build an authoritative online presence.
              </h2>
              <p className="text-sm sm:text-base text-[#707887] leading-relaxed max-w-2xl mx-auto">
                From bespoke corporate websites and high-conversion e-commerce storefronts to automated lead workflows, we combine disciplined engineering with high-craft aesthetic standards to give companies a decisive digital advantage.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* =========================================================================
            SECTION B: SERVICES (4 CARDS)
            ========================================================================= */}
        <section className="px-4 sm:px-6 md:px-8 py-16 sm:py-24 max-w-[1240px] mx-auto">
          <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold text-[#496BFF] uppercase tracking-widest">
                STUDIO CAPABILITIES
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#151A24] tracking-tight">
                Services tailored for growth.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#151A24] hover:text-[#496BFF] transition-colors"
            >
              <span>Explore all capabilities &amp; deliverables</span>
              <ArrowRight className="w-4 h-4 text-[#496BFF]" />
            </Link>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.06}>
            {SERVICES_DATA.map((service) => (
              <StaggerItem key={service.id}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* =========================================================================
            SECTION C: SELECTED WORK (3 DEMONSTRATION PROJECTS)
            ========================================================================= */}
        <section className="px-4 sm:px-6 md:px-8 py-16 sm:py-24 bg-white border-y border-[#151A24]/6">
          <div className="max-w-[1240px] mx-auto space-y-12 sm:space-y-16">
            
            <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2 max-w-xl">
                <span className="text-[10px] font-mono font-bold text-[#496BFF] uppercase tracking-widest">
                  SELECTED SHOWCASE
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#151A24] tracking-tight">
                  Our demonstration work.
                </h2>
                <p className="text-xs sm:text-sm text-[#707887] leading-relaxed">
                  Rather than showing static mockups, we design and build complete, production-grade web platforms. Explore these three interactive concept demonstrations below.
                </p>
              </div>
              <Link
                to="/work"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#151A24] hover:text-[#496BFF] transition-colors shrink-0"
              >
                <span>View full portfolio</span>
                <ArrowRight className="w-4 h-4 text-[#496BFF]" />
              </Link>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
              {AGENCY_CONFIG.projects.map((project) => (
                <StaggerItem key={project.id}>
                  <ProjectCard project={project} />
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn className="p-4 sm:p-5 rounded-2xl bg-[#F7F5F0] border border-[#151A24]/6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-0.5">
                <span className="text-xs font-semibold text-[#151A24]">
                  Notice of Authenticity:
                </span>
                <p className="text-xs text-[#707887]">
                  These projects were conceptualized, art-directed, and coded entirely by NORTHFORM STUDIOS to demonstrate real-world performance across key commercial industries.
                </p>
              </div>
              <Link
                to="/quote"
                className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-[#151A24] text-white text-xs font-semibold hover:bg-[#496BFF] transition-colors shrink-0"
              >
                <span>Commission a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C8F169]" />
              </Link>
            </FadeIn>

          </div>
        </section>

        {/* =========================================================================
            SECTION D: WHY NORTHFORM (CREDIBILITY PILLARS)
            ========================================================================= */}
        <section className="px-4 sm:px-6 md:px-8 py-16 sm:py-24 max-w-[1240px] mx-auto">
          <FadeIn className="max-w-2xl mb-12 sm:mb-16 space-y-2">
            <span className="text-[10px] font-mono font-bold text-[#496BFF] uppercase tracking-widest">
              WHY NORTHFORM
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#151A24] tracking-tight">
              Craftsmanship grounded in business reality.
            </h2>
            <p className="text-xs sm:text-sm text-[#707887]">
              We make no unverifiable claims of guaranteed sales or search rankings. Instead, we deliver the structural excellence and visual credibility that helps good businesses win.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.05}>
            {whyChoosePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <StaggerItem key={idx}>
                  <div className="h-full p-6 sm:p-7 rounded-2xl bg-white border border-[#151A24]/6 hover:border-[#151A24]/15 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F7F5F0] flex items-center justify-center text-[#151A24]">
                      <Icon className="w-5 h-5 text-[#496BFF]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold font-heading text-[#151A24] tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#707887] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}

            {/* Quick Consultation Card */}
            <StaggerItem>
              <div className="h-full p-6 sm:p-7 rounded-2xl bg-[#151A24] text-white flex flex-col justify-between space-y-4 shadow-md">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#C8F169] uppercase font-bold">
                    DIRECT ADVISORY
                  </span>
                  <h3 className="text-lg font-bold font-heading text-white">
                    Have questions before committing?
                  </h3>
                  <p className="text-xs text-[#707887] leading-relaxed">
                    Message us on WhatsApp or schedule an alignment call to review your scope and target timeline.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-xs font-semibold text-white transition-colors"
                >
                  <span>Speak with a Lead Builder</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C8F169]" />
                </Link>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </section>

        {/* =========================================================================
            SECTION E: OUR PROCESS (4 STEPS)
            ========================================================================= */}
        <section className="px-4 sm:px-6 md:px-8 py-16 sm:py-24 bg-white border-y border-[#151A24]/6">
          <div className="max-w-[1240px] mx-auto space-y-12 sm:space-y-16">
            
            <FadeIn className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-[10px] font-mono font-bold text-[#496BFF] uppercase tracking-widest">
                STRUCTURED DELIVERY
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#151A24] tracking-tight">
                Our 4-step delivery process.
              </h2>
              <p className="text-xs sm:text-sm text-[#707887]">
                Disciplined weekly sprints from initial consultation to production launch.
              </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.06}>
              {processSteps.map((step) => {
                const StepIcon = step.icon;
                return (
                  <StaggerItem key={step.number}>
                    <div className="h-full p-6 sm:p-7 rounded-2xl bg-[#F7F5F0] border border-[#151A24]/6 flex flex-col justify-between space-y-5 relative group hover:bg-white hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold font-mono text-[#496BFF]">
                          {step.number}
                        </span>
                        <div className="w-9 h-9 rounded-xl bg-white group-hover:bg-[#DCE5FF] flex items-center justify-center transition-colors">
                          <StepIcon className="w-4 h-4 text-[#151A24]" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg font-bold font-heading text-[#151A24] tracking-tight">
                          {step.title}
                        </h3>
                        <p className="text-xs font-semibold text-[#496BFF] font-sans">
                          {step.tagline}
                        </p>
                        <p className="text-xs text-[#707887] leading-relaxed pt-1">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

          </div>
        </section>

        {/* =========================================================================
            SECTION F: FINAL CTA (MIDNIGHT INK WITH LIME ACCENTS)
            ========================================================================= */}
        <section className="px-4 sm:px-6 md:px-8 py-16 sm:py-24 max-w-[1240px] mx-auto">
          <FadeIn className="relative rounded-3xl bg-[#151A24] text-white p-8 sm:p-12 md:p-16 overflow-hidden border border-white/10 shadow-2xl">
            <div className="relative z-10 max-w-2xl space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-white/10 border border-white/10 text-xs font-mono text-[#C8F169]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>READY TO COMMISSION</span>
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                Your next big idea deserves a better digital home.
              </h2>

              <p className="text-xs sm:text-base text-[#707887] leading-relaxed max-w-xl">
                Tell us about your brand, your timeline, and what you aim to achieve. We will provide a transparent proposal and project roadmap within 24 hours.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#496BFF] text-white text-sm sm:text-base font-bold hover:bg-[#3b5ae0] transition-all duration-200 hover:shadow-xl active:scale-98 group"
                >
                  <span>LET'S BUILD SOMETHING</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#C8F169]" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm sm:text-base font-semibold border border-white/10 transition-colors"
                >
                  <span>Inquire via WhatsApp</span>
                </Link>
              </div>
            </div>
          </FadeIn>
        </section>

      </div>
    </PageTransition>
  );
}
