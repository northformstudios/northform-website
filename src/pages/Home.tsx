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
  Rocket,
  ExternalLink,
  Eye
} from 'lucide-react';
import { motion } from 'framer-motion';
import HeroVisual from '../components/HeroVisual';
import BrowserMockup from '../components/BrowserMockup';
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

  // Domain map for browser chrome mockup
  const domainMap: Record<string, string> = {
    'estate-one': 'estateone.private.ng',
    'maison-kitchen': 'maisonkitchen.luxury',
    'solara-energy': 'solaraenergy.store',
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 sm:pt-24">

        {/* =========================================================================
            HERO SECTION
            ========================================================================= */}
        <section className="relative px-4 sm:px-6 md:px-8 pt-8 pb-20 sm:pb-28 overflow-hidden bg-linear-to-b from-[#F8F6F1] via-[#FAF8F5] to-[#F2EFE9]">
          
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-2xl h-80 bg-linear-to-b from-[#DCE5FF]/40 via-[#F5EDE0]/40 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-[1240px] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Narrative Column */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                
                {/* Small Label */}
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/90 border border-[#151A24]/10 shadow-2xs backdrop-blur-xs"
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
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-xl bg-[#151A24] text-white text-sm sm:text-base font-semibold transition-all duration-200 hover:bg-[#496BFF] hover:shadow-xl active:scale-98 group"
                  >
                    <span>Start a Project</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C8F169] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                  <a
                    href="#selected-work"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-xl bg-white hover:bg-[#F8F6F1] text-[#151A24] text-sm sm:text-base font-semibold border border-[#151A24]/10 transition-all duration-200 active:scale-98 shadow-2xs"
                  >
                    <span>Explore Our Work</span>
                    <ArrowRight className="w-4 h-4 text-[#707887]" />
                  </a>
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
        <section className="px-4 sm:px-6 md:px-8 py-16 sm:py-20 bg-white border-y border-[#151A24]/6 relative">
          <div className="max-w-[1240px] mx-auto">
            <FadeIn className="max-w-3xl mx-auto text-center space-y-4">
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
        <section className="px-4 sm:px-6 md:px-8 py-20 sm:py-28 bg-[#F2EFE9] relative">
          <div className="max-w-[1240px] mx-auto">
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

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" staggerDelay={0.06}>
              {SERVICES_DATA.map((service, idx) => (
                <StaggerItem key={service.id}>
                  <ServiceCard service={service} index={idx + 1} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* =========================================================================
            SECTION C: SELECTED WORK — CURATED EDITORIAL CASE STUDIES (RE-DESIGNED)
            ========================================================================= */}
        <section id="selected-work" className="px-4 sm:px-6 md:px-8 py-24 sm:py-32 bg-[#F8F6F1] border-y border-[#151A24]/6 relative">
          <div className="max-w-[1240px] mx-auto space-y-20 sm:space-y-28">
            
            {/* Section Header */}
            <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#151A24]/8">
              <div className="space-y-2 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-white border border-[#151A24]/10 text-xs font-mono font-semibold uppercase text-[#151A24] shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#496BFF]" />
                  <span>CURATED DESIGN CASE STUDIES</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#151A24] tracking-tight">
                  Craft in action.
                </h2>
                <p className="text-xs sm:text-sm text-[#707887] leading-relaxed pt-1">
                  We believe prospective clients judge an agency by the craft of its work. Below are three complete, production-grade platforms engineered to set new industry standards.
                </p>
              </div>

              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-xs sm:text-sm font-semibold text-[#151A24] border border-[#151A24]/10 hover:border-[#496BFF] hover:text-[#496BFF] transition-all shadow-2xs shrink-0"
              >
                <span>Explore Full Portfolio</span>
                <ArrowRight className="w-4 h-4 text-[#496BFF]" />
              </Link>
            </FadeIn>

            {/* Project 01: Estate One (Editorial Luxury) */}
            {AGENCY_CONFIG.projects[0] && (
              <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Left: Narrative & Credentials (5 cols) */}
                <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#496BFF] tracking-wider uppercase">
                      CASE STUDY 01
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#707887]" />
                    <span className="text-xs font-mono text-[#707887] uppercase">
                      Real Estate &amp; Architecture
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#151A24] tracking-tight">
                      Estate One
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#496BFF] font-sans">
                      {AGENCY_CONFIG.projects[0].tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-[#707887] leading-relaxed">
                      {AGENCY_CONFIG.projects[0].shortDescription}
                    </p>
                  </div>

                  {/* Curated Highlights */}
                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-center gap-2 text-xs text-[#151A24]">
                      <CheckCircle2 className="w-4 h-4 text-[#496BFF] shrink-0" />
                      <span className="font-medium">Instant residence filtering by location &amp; typology</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#151A24]">
                      <CheckCircle2 className="w-4 h-4 text-[#496BFF] shrink-0" />
                      <span className="font-medium">Private viewing concierge with automated calendar scheduling</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#151A24]">
                      <CheckCircle2 className="w-4 h-4 text-[#496BFF] shrink-0" />
                      <span className="font-medium">Editorial layout eliminating cluttered traditional portals</span>
                    </div>
                  </div>

                  {/* Tech Specs */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['React 19', 'TypeScript', 'Tailwind CSS', 'Sub-second SPA'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium bg-white text-[#151A24] border border-[#151A24]/8 shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <Link
                      to="/work/estate-one"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#151A24] text-white text-xs font-semibold hover:bg-[#496BFF] transition-all duration-200 shadow-md group"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C8F169] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>

                    {AGENCY_CONFIG.projects[0].previewUrl ? (
                      <a
                        href={AGENCY_CONFIG.projects[0].previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#151A24] text-xs font-semibold border border-[#151A24]/10 hover:border-[#496BFF] hover:text-[#496BFF] transition-colors shadow-2xs"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[#496BFF]" />
                        <span>Interactive Preview</span>
                      </a>
                    ) : (
                      <Link
                        to="/work/estate-one"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#151A24] text-xs font-semibold border border-[#151A24]/10 hover:border-[#151A24]/20 transition-colors shadow-2xs"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#707887]" />
                        <span>Interactive Preview</span>
                      </Link>
                    )}
                  </div>
                </div>

                {/* Right: Studio Browser Mockup (7 cols) */}
                <div className="lg:col-span-7 order-1 lg:order-2">
                  <Link to="/work/estate-one" className="block cursor-pointer">
                    <BrowserMockup
                      desktopImage={AGENCY_CONFIG.projects[0].desktopScreenshot}
                      mobileImage={AGENCY_CONFIG.projects[0].mobileScreenshot}
                      title="Estate One"
                      domain={domainMap['estate-one']}
                      aspectRatio="16/10"
                    />
                  </Link>
                </div>
              </FadeIn>
            )}

            {/* Project 02: Maison Kitchen (Hospitality & Fine Dining — Alternating Layout) */}
            {AGENCY_CONFIG.projects[1] && (
              <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-8">
                {/* Left: Studio Browser Mockup (7 cols) */}
                <div className="lg:col-span-7 order-1">
                  <Link to="/work/maison-kitchen" className="block cursor-pointer">
                    <BrowserMockup
                      desktopImage={AGENCY_CONFIG.projects[1].desktopScreenshot}
                      mobileImage={AGENCY_CONFIG.projects[1].mobileScreenshot}
                      title="Maison Kitchen"
                      domain={domainMap['maison-kitchen']}
                      aspectRatio="16/10"
                    />
                  </Link>
                </div>

                {/* Right: Narrative & Credentials (5 cols) */}
                <div className="lg:col-span-5 space-y-6 order-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#496BFF] tracking-wider uppercase">
                      CASE STUDY 02
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#707887]" />
                    <span className="text-xs font-mono text-[#707887] uppercase">
                      Hospitality &amp; Dining
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#151A24] tracking-tight">
                      Maison Kitchen
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#496BFF] font-sans">
                      {AGENCY_CONFIG.projects[1].tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-[#707887] leading-relaxed">
                      {AGENCY_CONFIG.projects[1].shortDescription}
                    </p>
                  </div>

                  {/* Curated Highlights */}
                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-center gap-2 text-xs text-[#151A24]">
                      <CheckCircle2 className="w-4 h-4 text-[#496BFF] shrink-0" />
                      <span className="font-medium">Dual-view visual culinary catalog (eliminates PDF drops)</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#151A24]">
                      <CheckCircle2 className="w-4 h-4 text-[#496BFF] shrink-0" />
                      <span className="font-medium">3-step table reservation dock with .ICS calendar export</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#151A24]">
                      <CheckCircle2 className="w-4 h-4 text-[#496BFF] shrink-0" />
                      <span className="font-medium">Interactive arrival map with switchable waterfront pins</span>
                    </div>
                  </div>

                  {/* Tech Specs */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['React 19', 'TypeScript', 'Tailwind CSS', 'Dynamic Booking'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium bg-white text-[#151A24] border border-[#151A24]/8 shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <Link
                      to="/work/maison-kitchen"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#151A24] text-white text-xs font-semibold hover:bg-[#496BFF] transition-all duration-200 shadow-md group"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C8F169] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>

                    {AGENCY_CONFIG.projects[1].previewUrl ? (
                      <a
                        href={AGENCY_CONFIG.projects[1].previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#151A24] text-xs font-semibold border border-[#151A24]/10 hover:border-[#496BFF] hover:text-[#496BFF] transition-colors shadow-2xs"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[#496BFF]" />
                        <span>Interactive Preview</span>
                      </a>
                    ) : (
                      <Link
                        to="/work/maison-kitchen"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#151A24] text-xs font-semibold border border-[#151A24]/10 hover:border-[#151A24]/20 transition-colors shadow-2xs"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#707887]" />
                        <span>Interactive Preview</span>
                      </Link>
                    )}
                  </div>
                </div>
              </FadeIn>
            )}

            {/* Project 03: Solara Energy (Clean Energy E-Commerce) */}
            {AGENCY_CONFIG.projects[2] && (
              <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-8">
                {/* Left: Narrative & Credentials (5 cols) */}
                <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#496BFF] tracking-wider uppercase">
                      CASE STUDY 03
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#707887]" />
                    <span className="text-xs font-mono text-[#707887] uppercase">
                      Clean Energy &amp; E-Commerce
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#151A24] tracking-tight">
                      Solara Energy
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-[#496BFF] font-sans">
                      {AGENCY_CONFIG.projects[2].tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-[#707887] leading-relaxed">
                      {AGENCY_CONFIG.projects[2].shortDescription}
                    </p>
                  </div>

                  {/* Curated Highlights */}
                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-center gap-2 text-xs text-[#151A24]">
                      <CheckCircle2 className="w-4 h-4 text-[#496BFF] shrink-0" />
                      <span className="font-medium">Clean hardware catalog with kVA ratings &amp; transparent pricing</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#151A24]">
                      <CheckCircle2 className="w-4 h-4 text-[#496BFF] shrink-0" />
                      <span className="font-medium">Interactive commercial load sizing calculator modal</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#151A24]">
                      <CheckCircle2 className="w-4 h-4 text-[#496BFF] shrink-0" />
                      <span className="font-medium">Slide-over mini-cart drawer &amp; localized checkout handoff</span>
                    </div>
                  </div>

                  {/* Tech Specs */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['React 19', 'TypeScript', 'Tailwind CSS', 'Instant Search', 'Cart Drawer'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium bg-white text-[#151A24] border border-[#151A24]/8 shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <Link
                      to="/work/solara-energy"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#151A24] text-white text-xs font-semibold hover:bg-[#496BFF] transition-all duration-200 shadow-md group"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#C8F169] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>

                    {AGENCY_CONFIG.projects[2].previewUrl ? (
                      <a
                        href={AGENCY_CONFIG.projects[2].previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#151A24] text-xs font-semibold border border-[#151A24]/10 hover:border-[#496BFF] hover:text-[#496BFF] transition-colors shadow-2xs"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[#496BFF]" />
                        <span>Interactive Preview</span>
                      </a>
                    ) : (
                      <Link
                        to="/work/solara-energy"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#151A24] text-xs font-semibold border border-[#151A24]/10 hover:border-[#151A24]/20 transition-colors shadow-2xs"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#707887]" />
                        <span>Interactive Preview</span>
                      </Link>
                    )}
                  </div>
                </div>

                {/* Right: Studio Browser Mockup (7 cols) */}
                <div className="lg:col-span-7 order-1 lg:order-2">
                  <Link to="/work/solara-energy" className="block cursor-pointer">
                    <BrowserMockup
                      desktopImage={AGENCY_CONFIG.projects[2].desktopScreenshot}
                      mobileImage={AGENCY_CONFIG.projects[2].mobileScreenshot}
                      title="Solara Energy"
                      domain={domainMap['solara-energy']}
                      aspectRatio="16/10"
                    />
                  </Link>
                </div>
              </FadeIn>
            )}

            {/* Authenticity Standard Notice */}
            <FadeIn className="p-6 sm:p-7 rounded-3xl bg-white border border-[#151A24]/8 studio-card-shadow flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-1 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C8F169]" />
                  <span className="text-xs font-bold font-heading text-[#151A24]">
                    Studio Authenticity Guarantee
                  </span>
                </div>
                <p className="text-xs text-[#707887] leading-relaxed">
                  These three platforms were designed, art-directed, and coded entirely by NORTHFORM STUDIOS to demonstrate real-world architecture, mobile performance, and aesthetic capability across key enterprise industries.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
                <Link
                  to="/quote"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#151A24] text-white text-xs font-semibold hover:bg-[#496BFF] transition-all duration-200"
                >
                  <span>Commission a Studio Build</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C8F169]" />
                </Link>
              </div>
            </FadeIn>

          </div>
        </section>

        {/* =========================================================================
            SECTION D: WHY NORTHFORM (CREDIBILITY PILLARS)
            ========================================================================= */}
        <section className="px-4 sm:px-6 md:px-8 py-20 sm:py-28 bg-white relative">
          <div className="max-w-[1240px] mx-auto">
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
                    <div className="h-full p-7 rounded-3xl bg-[#F8F6F1] border border-[#151A24]/6 hover:border-[#151A24]/15 hover:bg-white studio-card-shadow transition-all duration-300 flex flex-col justify-between space-y-4">
                      <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center text-[#151A24] border border-[#151A24]/6">
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
                <div className="h-full p-7 rounded-3xl bg-[#151A24] text-white flex flex-col justify-between space-y-4 shadow-xl">
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
                    className="inline-flex items-center justify-between w-full p-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-xs font-semibold text-white transition-colors"
                  >
                    <span>Speak with a Lead Builder</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C8F169]" />
                  </Link>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* =========================================================================
            SECTION E: OUR PROCESS (4 STEPS)
            ========================================================================= */}
        <section className="px-4 sm:px-6 md:px-8 py-20 sm:py-28 bg-[#F2EFE9] border-y border-[#151A24]/6 relative">
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
                    <div className="h-full p-7 rounded-3xl bg-white border border-[#151A24]/6 flex flex-col justify-between space-y-5 relative group studio-card-shadow hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold font-mono text-[#496BFF]">
                          {step.number}
                        </span>
                        <div className="w-10 h-10 rounded-2xl bg-[#F8F6F1] group-hover:bg-[#DCE5FF] flex items-center justify-center transition-colors">
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
        <section className="px-4 sm:px-6 md:px-8 py-20 sm:py-28 max-w-[1240px] mx-auto">
          <FadeIn className="relative rounded-3xl bg-[#151A24] text-white p-8 sm:p-14 md:p-16 overflow-hidden border border-white/10 shadow-2xl">
            {/* Subtle Ambient Radial Lighting in CTA */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#496BFF]/15 blur-3xl pointer-events-none" />

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
