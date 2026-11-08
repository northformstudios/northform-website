import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowUpRight,
  Globe,
  ShoppingBag,
  Workflow,
  RefreshCw,
  CheckCircle2,
  Users,
  Target,
  Sparkles,
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { AGENCY_CONFIG } from '../config/agencyConfig';
import { PageTransition, FadeIn, StaggerContainer, StaggerItem } from '../components/Motion';

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  const serviceIcons = {
    'web-design': Globe,
    'ecommerce': ShoppingBag,
    'business-automation': Workflow,
    'website-redesign': RefreshCw,
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 sm:pt-28 pb-20">

        {/* Hero Header */}
        <section className="px-4 sm:px-6 md:px-8 py-10 sm:py-16 max-w-[1240px] mx-auto">
          <FadeIn className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-white border border-[#151A24]/10 text-xs font-mono font-semibold uppercase text-[#151A24] shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8F169]" />
              <span>STUDIO CAPABILITIES</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-[#151A24] tracking-tight leading-tight">
              Services built for business momentum.
            </h1>

            <p className="text-base sm:text-lg text-[#707887] leading-relaxed max-w-2xl font-normal">
              We focus strictly on what moves the needle for commercial enterprises: high-craft web design, seamless e-commerce, pragmatic process automation, and high-impact redesigns.
            </p>
          </FadeIn>

          {/* Quick jump navigation chips */}
          <FadeIn delay={0.15} className="mt-8 flex flex-wrap gap-2 pt-4 border-t border-[#151A24]/6">
            {SERVICES_DATA.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-4 py-2 rounded-xl text-xs font-medium bg-white hover:bg-[#151A24] hover:text-white text-[#151A24] border border-[#151A24]/10 transition-colors shadow-2xs"
              >
                {s.title}
              </a>
            ))}
          </FadeIn>
        </section>

        {/* Detailed Services Deep Dive */}
        <section className="px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto space-y-12">
          {SERVICES_DATA.map((service, index) => {
            const Icon = serviceIcons[service.id as keyof typeof serviceIcons] || Globe;

            return (
              <FadeIn
                key={service.id}
                id={service.id}
                className="scroll-mt-32 p-8 sm:p-10 md:p-12 rounded-3xl bg-white border border-[#151A24]/8 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  
                  {/* Left Column: Identity & Problem */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#F7F5F0] flex items-center justify-center text-[#151A24]">
                        <Icon className="w-6 h-6 text-[#496BFF]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-[#496BFF] uppercase tracking-wider">
                          0{index + 1} &bull; {service.tagline}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#151A24] tracking-tight">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-[#707887] leading-relaxed">
                      {service.summary}
                    </p>

                    {/* Problem Solved Card */}
                    <div className="p-5 rounded-2xl bg-[#F7F5F0] border border-[#151A24]/6 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#151A24] font-heading">
                        <Target className="w-4 h-4 text-rose-500" />
                        <span>The Business Problem It Solves</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#707887] leading-relaxed">
                        {service.solvedProblem}
                      </p>
                    </div>

                    {/* Target Audience */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#151A24] font-heading">
                        <Users className="w-4 h-4 text-[#496BFF]" />
                        <span>Who Needs This</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#707887] leading-relaxed">
                        {service.targetAudience}
                      </p>
                    </div>

                    <div className="pt-2">
                      <Link
                        to={`/quote?service=${service.id}`}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#151A24] hover:bg-[#496BFF] text-white text-xs sm:text-sm font-semibold transition-all hover:shadow-md active:scale-98"
                      >
                        <span>Request a Quote for {service.title}</span>
                        <ArrowUpRight className="w-4 h-4 text-[#C8F169]" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Tangible Deliverables */}
                  <div className="lg:col-span-7 bg-[#F7F5F0] p-6 sm:p-8 rounded-2xl border border-[#151A24]/6 space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-[#151A24]/6">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-emerald-600" />
                        <h3 className="text-xs sm:text-sm font-bold font-heading text-[#151A24] uppercase tracking-wider">
                          Tangible Deliverables
                        </h3>
                      </div>
                      <span className="text-[10px] font-mono text-[#707887]">
                        Fixed Scope / Sprints
                      </span>
                    </div>

                    <div className="space-y-3.5">
                      {service.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 border border-[#151A24]/10 shadow-2xs">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          </div>
                          <span className="text-xs sm:text-sm text-[#151A24] leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Service Note */}
                    <div className="mt-6 pt-4 border-t border-[#151A24]/6 text-xs text-[#707887] flex items-center justify-between">
                      <span>Includes 30 days post-launch warranty &amp; technical handover</span>
                      <Link
                        to="/contact"
                        className="text-xs font-semibold text-[#151A24] hover:text-[#496BFF] flex items-center gap-1"
                      >
                        <span>Ask Question</span>
                        <ArrowRight className="w-3 h-3 text-[#496BFF]" />
                      </Link>
                    </div>
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </section>

        {/* Honest Scope Note on Automation */}
        <section className="px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto mt-16">
          <FadeIn className="p-6 sm:p-8 rounded-2xl bg-[#151A24] text-white space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#C8F169]" />
              <h3 className="text-base sm:text-lg font-bold font-heading">
                Our Transparency Pledge on Business Automation
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#707887] leading-relaxed max-w-4xl">
              We do not overhype automation or sell unneeded complex AI gimmicks. Our automation service focuses on reliable, battle-tested integrations: capturing inquiries directly to your verified sales WhatsApp, synchronizing orders into your internal Google Sheets or CRM, notifying your team in real time, and generating calendar invites. We automate what reliably saves your business time and money.
            </p>
          </FadeIn>
        </section>

        {/* Bottom CTA Banner */}
        <section className="px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto mt-16 text-center space-y-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#151A24]">
              Ready to scope your project?
            </h2>
            <p className="text-xs sm:text-sm text-[#707887] max-w-lg mx-auto mt-2">
              Share your business details in our project planner and get an itemized quote within 24 hours.
            </p>
            <div className="mt-6">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#151A24] text-white text-sm font-semibold hover:bg-[#496BFF] transition-all hover:shadow-lg"
              >
                <span>Open Project Planner</span>
                <ArrowUpRight className="w-4 h-4 text-[#C8F169]" />
              </Link>
            </div>
          </FadeIn>
        </section>

      </div>
    </PageTransition>
  );
}
