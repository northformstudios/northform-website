import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Cpu, Compass } from 'lucide-react';
import { NorthformSymbol } from './BrandLogo';

/**
 * HeroVisual — Sophisticated architectural visual inspired by the continuous folded geometric N logo.
 * Emphasizes structure, direction, movement, creativity, precision, and connection.
 * Avoids generic 3D objects; uses mathematical vectors, restrained glass surfaces, and responsive parallax.
 */
export default function HeroVisual() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto py-2 px-1 select-none">
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full aspect-4/3 flex items-center justify-center p-4 sm:p-6"
        style={{ perspective: 1000 }}
      >
        {/* Subtle Ambient Radial Lighting (Electric Blue & Ice Blue) */}
        <div
          className="absolute w-56 sm:w-80 h-56 sm:h-80 rounded-full bg-linear-to-tr from-[#DCE5FF]/60 via-[#496BFF]/10 to-transparent blur-3xl transition-transform duration-700 ease-out pointer-events-none"
          style={{
            transform: `translate(${mousePos.x * 1.2}px, ${mousePos.y * 1.2}px)`,
          }}
        />

        {/* Base Layer: Architectural Blueprint Plane */}
        <motion.div
          className="absolute w-[88%] h-[86%] rounded-3xl bg-white border border-[#151A24]/8 shadow-lg flex flex-col justify-between p-5 sm:p-6 overflow-hidden"
          style={{
            transform: `rotateX(${-mousePos.y * 0.6}deg) rotateY(${mousePos.x * 0.6}deg) translateZ(4px)`,
          }}
        >
          {/* Studio Coordinates Header */}
          <div className="flex items-center justify-between text-[#707887] text-[10px] font-mono">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#151A24]" />
              NORTHFORM &bull; SYSTEM 01
            </span>
            <span>6.5244° N, 3.3792° E</span>
          </div>

          {/* Precision Blueprint Grid & Diagonal Traverse Guideline */}
          <div className="relative my-auto py-4 opacity-40">
            <div className="grid grid-cols-4 gap-2">
              <div className="h-9 rounded-lg bg-[#151A24]/4 border border-[#151A24]/10" />
              <div className="h-9 rounded-lg bg-[#496BFF]/8 border border-[#496BFF]/20 col-span-2" />
              <div className="h-9 rounded-lg bg-[#151A24]/4 border border-[#151A24]/10" />
            </div>
            {/* 45-degree geometric vector guideline */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-3/4 h-[1px] bg-linear-to-r from-transparent via-[#496BFF]/40 to-transparent rotate-45 transform" />
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-[#707887]">
            <span className="font-mono text-[9.5px] uppercase tracking-wider text-[#151A24] font-semibold">
              BUILT WITH INTENT.
            </span>
            <span className="font-mono text-[10px] text-[#707887]">1240PX GRID</span>
          </div>
        </motion.div>

        {/* Foreground Layer: Continuous Folded Ribbon Monolith Centerpiece */}
        <motion.div
          className="relative z-10 w-[80%] h-[82%] rounded-3xl bg-white/95 backdrop-blur-md p-5 sm:p-6 flex flex-col justify-between shadow-2xl border border-white"
          style={{
            transform: `rotateX(${-mousePos.y * 1.1}deg) rotateY(${mousePos.x * 1.1}deg) translateZ(36px)`,
            boxShadow: `${-mousePos.x * 2}px ${20 + mousePos.y * 2}px 40px -10px rgba(21, 26, 36, 0.12)`,
          }}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-[#151A24] flex items-center justify-center text-white">
                <Cpu className="w-3.5 h-3.5 text-[#C8F169]" />
              </div>
              <span className="text-xs font-heading font-bold text-[#151A24]">
                Studio Architecture
              </span>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold bg-[#DCE5FF] text-[#496BFF]">
              SYSTEM READY
            </span>
          </div>

          {/* Centerpiece: Northform Continuous Folded Ribbon Symbol */}
          <div className="my-auto text-center relative z-10 py-2">
            <div className="inline-flex items-center justify-center p-3.5 rounded-2xl bg-[#F7F5F0] border border-[#151A24]/8 shadow-xs hover:shadow-md transition-shadow">
              <NorthformSymbol size={54} />
            </div>

            <div className="mt-2.5">
              <p className="text-xs font-extrabold font-heading text-[#151A24] tracking-tight">
                NORTHFORM STUDIOS
              </p>
              <p className="text-[10px] text-[#707887] font-sans font-medium mt-0.5">
                Minimal Design &bull; Intelligent Tech &bull; Exceptional Execution
              </p>
            </div>
          </div>

          {/* Bottom Metric Badges */}
          <div className="grid grid-cols-2 gap-2 relative z-10 pt-2 border-t border-[#151A24]/6">
            <div className="bg-[#F7F5F0] rounded-xl p-2 border border-[#151A24]/5">
              <div className="text-[9px] text-[#707887] uppercase font-mono">Discipline</div>
              <div className="text-xs font-bold text-[#151A24] font-mono">Bespoke Code</div>
            </div>
            <div className="bg-[#F7F5F0] rounded-xl p-2 border border-[#151A24]/5">
              <div className="text-[9px] text-[#707887] uppercase font-mono">Tagline</div>
              <div className="text-xs font-bold text-[#496BFF] font-mono">With Intent</div>
            </div>
          </div>
        </motion.div>

        {/* Orbiting Satellite Badges */}
        <motion.div
          className="hidden sm:flex absolute -top-1.5 right-2 z-20 px-3 py-1.5 rounded-xl bg-white border border-[#151A24]/10 shadow-lg items-center gap-1.5"
          style={{
            transform: `translate(${mousePos.x * 1.4}px, ${mousePos.y * 1.4}px) translateZ(50px)`,
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8F169]" />
          <span className="text-[11px] font-medium text-[#151A24]">Editorial Typography</span>
        </motion.div>

        <motion.div
          className="hidden sm:flex absolute -bottom-1.5 left-2 z-20 px-3 py-1.5 rounded-xl bg-[#151A24] text-white shadow-lg items-center gap-1.5"
          style={{
            transform: `translate(${-mousePos.x * 1.2}px, ${-mousePos.y * 1.2}px) translateZ(42px)`,
          }}
        >
          <Compass className="w-3.5 h-3.5 text-[#C8F169]" />
          <span className="text-[11px] font-medium">Apple-Grade Restraint</span>
        </motion.div>
      </div>
    </div>
  );
}
