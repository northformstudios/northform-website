import React, { useState } from 'react';
import { Layers, Sparkles, Shield, Cpu } from 'lucide-react';

export default function LiquidHeroGraphic() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md mx-auto overflow-hidden sm:overflow-visible py-2 px-1">
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full aspect-4/3 flex items-center justify-center p-4 sm:p-6 select-none"
        style={{ perspective: 1000 }}
      >
        {/* Ambient glowing radial lights behind */}
        <div
          className="absolute w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-linear-to-tr from-[#8EA9FF]/20 to-[#DCE5FF]/40 blur-2xl sm:blur-3xl transition-transform duration-700 ease-out pointer-events-none"
          style={{
            transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)`,
          }}
        />
        <div
          className="absolute w-44 sm:w-64 h-44 sm:h-64 rounded-full bg-linear-to-bl from-[#BFC5D2]/25 to-white/50 blur-xl sm:blur-2xl transition-transform duration-500 ease-out pointer-events-none"
          style={{
            transform: `translate(${-mousePos.x * 1.2}px, ${-mousePos.y * 1.2}px)`,
          }}
        />

        {/* Layer 1: Rear Matte Plate */}
        <div
          className="absolute w-4/5 h-4/5 rounded-3xl bg-linear-to-br from-white/90 via-[#F5F5F7]/80 to-[#DCE5FF]/40 border border-white/80 shadow-xl transition-transform duration-300 ease-out flex flex-col justify-between p-4 sm:p-6 overflow-hidden"
          style={{
            transform: `rotateX(${-mousePos.y * 0.8}deg) rotateY(${mousePos.x * 0.8}deg) translateZ(10px)`,
          }}
        >
          <div className="flex items-center justify-between opacity-60">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#111318]/40" />
              <div className="w-2 h-2 rounded-full bg-[#111318]/20" />
              <div className="w-2 h-2 rounded-full bg-[#111318]/20" />
            </div>
            <span className="text-[9px] sm:text-[10px] tracking-widest uppercase font-mono text-[#737780]">
              STUDIO CORE
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 opacity-30 my-auto">
            <div className="h-8 sm:h-10 rounded-lg bg-black/5 border border-black/10" />
            <div className="h-8 sm:h-10 rounded-lg bg-[#8EA9FF]/10 border border-[#8EA9FF]/20" />
            <div className="h-8 sm:h-10 rounded-lg bg-black/5 border border-black/10" />
          </div>

          <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-[#737780] font-sans">
            <span>Precision Architecture</span>
            <span className="font-mono text-[#111318]/70">60 FPS</span>
          </div>
        </div>

        {/* Layer 2: Main Liquid Glass Refraction Prism */}
        <div
          className="relative z-10 w-3/4 h-3/4 rounded-3xl glass-nav p-4 sm:p-6 flex flex-col justify-between shadow-2xl transition-transform duration-200 ease-out border border-white/90"
          style={{
            transform: `rotateX(${-mousePos.y * 1.4}deg) rotateY(${mousePos.x * 1.4}deg) translateZ(40px)`,
            boxShadow: `${-mousePos.x * 2}px ${20 + mousePos.y * 2}px 40px -10px rgba(17, 19, 24, 0.12)`,
          }}
        >
          <div className="absolute inset-0 rounded-3xl bg-linear-to-tr from-transparent via-white/50 to-transparent pointer-events-none opacity-60" />

          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#111318] flex items-center justify-center text-white text-xs">
                <Cpu className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#8EA9FF]" />
              </div>
              <span className="text-[11px] sm:text-xs font-heading font-semibold text-[#111318]">
                High-Craft Web
              </span>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-medium bg-[#8EA9FF]/20 text-[#111318] border border-[#8EA9FF]/30">
              Apple-Grade
            </span>
          </div>

          <div className="my-auto text-center relative z-10 py-2 sm:py-3">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-linear-to-b from-white/90 to-white/40 border border-white/90 shadow-md">
              <Layers className="w-6 h-6 sm:w-8 sm:h-8 text-[#111318] stroke-[1.5]" />
            </div>
            <p className="mt-1.5 text-[11px] sm:text-xs font-semibold text-[#111318] font-heading">
              Liquid Glass System
            </p>
            <p className="text-[9px] sm:text-[10px] text-[#737780]">
              Bespoke Front-End Engineering
            </p>
          </div>

          <div className="grid grid-cols-2 gap-1.5 sm:gap-2 relative z-10 pt-2 border-t border-black/5">
            <div className="bg-white/60 rounded-xl p-1.5 sm:p-2 border border-white/80">
              <div className="text-[9px] sm:text-[10px] text-[#737780]">Responsiveness</div>
              <div className="text-[10px] sm:text-xs font-bold text-[#111318] font-mono">Fluid Scaled</div>
            </div>
            <div className="bg-white/60 rounded-xl p-1.5 sm:p-2 border border-white/80">
              <div className="text-[9px] sm:text-[10px] text-[#737780]">Interaction</div>
              <div className="text-[10px] sm:text-xs font-bold text-[#111318] font-mono">Tactile Feel</div>
            </div>
          </div>
        </div>

        {/* Floating Satellite Pill (Desktop/Tablet only) */}
        <div
          className="hidden sm:flex absolute -top-2 right-4 z-20 px-3 py-1.5 rounded-full glass-card border border-white/90 shadow-lg items-center gap-1.5 transition-transform duration-150 ease-out"
          style={{
            transform: `translate(${mousePos.x * 1.8}px, ${mousePos.y * 1.8}px) translateZ(60px)`,
          }}
        >
          <Sparkles className="w-3.5 h-3.5 text-[#8EA9FF]" />
          <span className="text-[11px] font-medium text-[#111318]">Modern Typography</span>
        </div>

        <div
          className="hidden sm:flex absolute -bottom-2 left-4 z-20 px-3.5 py-1.5 rounded-full glass-card border border-white/90 shadow-lg items-center gap-1.5 transition-transform duration-150 ease-out"
          style={{
            transform: `translate(${-mousePos.x * 1.5}px, ${-mousePos.y * 1.5}px) translateZ(50px)`,
          }}
        >
          <Shield className="w-3.5 h-3.5 text-emerald-600" />
          <span className="text-[11px] font-medium text-[#111318]">Zero Bloat &amp; Sub-Second Load</span>
        </div>
      </div>
    </div>
  );
}
