import React from 'react';
import { Lock, Globe, Smartphone, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface BrowserMockupProps {
  desktopImage: string;
  mobileImage?: string;
  title: string;
  domain: string;
  className?: string;
  aspectRatio?: '16/10' | '16/9' | '4/3';
  interactive?: boolean;
}

/**
 * StudioBrowserMockup
 * An Apple/Studio-grade realistic browser and mobile device frame.
 * Elevates screenshots into high-craft design case study showcases.
 */
export default function BrowserMockup({
  desktopImage,
  mobileImage,
  title,
  domain,
  className = '',
  aspectRatio = '16/10',
  interactive = true,
}: BrowserMockupProps) {
  return (
    <div className={`relative group select-none ${className}`}>
      {/* Subtle Ambient Glow Behind Browser Frame */}
      <div className="absolute -inset-1.5 rounded-3xl bg-linear-to-b from-[#151A24]/5 to-[#496BFF]/5 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Main Browser Frame */}
      <div className="relative rounded-2xl bg-white border border-[#151A24]/10 shadow-xl overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:border-[#151A24]/15">
        
        {/* Browser Top Chrome Header */}
        <div className="px-4 py-3 bg-[#F7F5F0] border-b border-[#151A24]/8 flex items-center justify-between gap-3">
          
          {/* Mac Traffic Lights */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/90 border border-[#E0443E]/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/90 border border-[#DEA123]/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/90 border border-[#1AAB29]/40" />
          </div>

          {/* Centered Realistic Address Bar */}
          <div className="flex-1 max-w-xs sm:max-w-md mx-auto">
            <div className="flex items-center justify-center gap-1.5 px-3 py-1 rounded-lg bg-white/90 border border-[#151A24]/8 text-[11px] font-mono text-[#707887] shadow-2xs">
              <Lock className="w-3 h-3 text-emerald-600 shrink-0" />
              <span className="font-medium text-[#151A24] truncate">{domain}</span>
              <span className="text-[#707887]/60 text-[10px] hidden sm:inline">&bull; 2026 Production</span>
            </div>
          </div>

          {/* Right Status Badge */}
          <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-[#707887] shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>HTTPS</span>
          </div>

        </div>

        {/* Browser Viewport with High-Res Screenshot */}
        <div className={`relative w-full ${aspectRatio === '16/10' ? 'aspect-16/10' : 'aspect-16/9'} bg-[#151A24] overflow-hidden`}>
          <img
            src={desktopImage}
            alt={`${title} Desktop Interface`}
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            loading="lazy"
          />

          {/* Subtle Specular Top Highlight */}
          <div className="absolute inset-0 bg-linear-to-b from-white/10 via-transparent to-black/15 pointer-events-none" />
        </div>

      </div>

      {/* Companion Floating Mobile Mockup (Desktop / Tablet) */}
      {mobileImage && (
        <div className="hidden sm:block absolute -bottom-5 -right-3 sm:-right-4 w-28 sm:w-36 z-20 transition-transform duration-500 ease-out group-hover:translate-y-[-8px] group-hover:scale-105">
          {/* Mobile Phone Frame */}
          <div className="relative rounded-2xl bg-[#151A24] p-1 shadow-2xl border-2 border-white ring-1 ring-black/10 overflow-hidden">
            
            {/* Phone Speaker Notch */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-black/60 z-30" />

            {/* Mobile Viewport Screen */}
            <div className="relative aspect-9/19 w-full rounded-xl overflow-hidden bg-black">
              <img
                src={mobileImage}
                alt={`${title} Mobile Interface`}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-white/10 via-transparent to-black/20 pointer-events-none" />
            </div>

            {/* Bottom Home Indicator Bar */}
            <div className="py-0.5 flex justify-center bg-[#151A24]">
              <span className="w-8 h-0.5 rounded-full bg-white/40" />
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
