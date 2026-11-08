import React, { useId } from 'react';
import { Link } from 'react-router-dom';

export interface SymbolProps {
  size?: number;
  isDark?: boolean;
  className?: string;
  withBackground?: boolean;
}

/**
 * Northform Studios — Official 3D Liquid Glass N Symbol
 * Recreated from the official studio brand mark reference:
 * A sculpted, translucent silver ribbon with fluid curves,
 * optical caustics, and subtle azure/amethyst iridescence.
 */
export function NorthformSymbol({
  size = 34,
  isDark = false,
  className = '',
  withBackground = false,
}: SymbolProps) {
  const uniqueId = useId().replace(/:/g, '');
  const idPrefix = `nf-${uniqueId}`;

  // Lighting & contrast adaptation for dark vs light surfaces
  const shadowOpacity = isDark ? 0.5 : 0.22;
  const silverStop0 = isDark ? '#94A3B8' : '#64748B';
  const silverStop1 = isDark ? '#E2E8F0' : '#CBD5E1';
  const silverStop2 = isDark ? '#FFFFFF' : '#F8FAFC';

  return (
    <svg
      width={size}
      height={size * 0.8}
      viewBox="0 0 200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-300 group-hover:scale-[1.04] ${className}`}
      aria-label="Northform Studios 3D Liquid Glass Mark"
    >
      <defs>
        {/* 3D Volumetric Depth Shadow */}
        <filter id={`${idPrefix}-depth`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#020617" floodOpacity={shadowOpacity} />
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#1E3A8A" floodOpacity={0.25} />
        </filter>

        {/* Base Tubular Glass Body (Silver -> Mid Azure -> Deep Indigo -> Amethyst) */}
        <linearGradient id={`${idPrefix}-base`} x1="5%" y1="10%" x2="95%" y2="90%">
          <stop offset="0%" stopColor="#E2E8F0" />
          <stop offset="22%" stopColor="#94A3B8" />
          <stop offset="42%" stopColor="#3B82F6" />
          <stop offset="64%" stopColor="#1D4ED8" />
          <stop offset="82%" stopColor="#6D28D9" />
          <stop offset="100%" stopColor="#1E1B4B" />
        </linearGradient>

        {/* Frosted Translucent Silver Gradient for Left Arch */}
        <linearGradient id={`${idPrefix}-silver`} x1="0%" y1="95%" x2="40%" y2="5%">
          <stop offset="0%" stopColor={silverStop0} stopOpacity="0.95" />
          <stop offset="35%" stopColor={silverStop1} stopOpacity="0.98" />
          <stop offset="70%" stopColor={silverStop2} stopOpacity="1" />
          <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.85" />
        </linearGradient>

        {/* Optical Caustics Gradient (Cyan -> Royal Sapphire -> Electric Violet) */}
        <linearGradient id={`${idPrefix}-caustics`} x1="28%" y1="25%" x2="92%" y2="88%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.95" />
          <stop offset="30%" stopColor="#2563EB" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#4F46E5" stopOpacity="0.85" />
          <stop offset="82%" stopColor="#7C3AED" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#C084FC" stopOpacity="0.95" />
        </linearGradient>

        {/* Specular Crest for Arch */}
        <linearGradient id={`${idPrefix}-crest`} x1="5%" y1="35%" x2="52%" y2="5%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>

        {/* Specular Ridge for Diagonal */}
        <linearGradient id={`${idPrefix}-ridge`} x1="30%" y1="20%" x2="72%" y2="75%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="45%" stopColor="#93C5FD" stopOpacity="0.65" />
          <stop offset="85%" stopColor="#C084FC" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>

        {/* Right Fin Fresnel Rim Light */}
        <linearGradient id={`${idPrefix}-fresnel`} x1="75%" y1="92%" x2="98%" y2="2%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
          <stop offset="35%" stopColor="#38BDF8" stopOpacity="0.85" />
          <stop offset="70%" stopColor="#BAE6FD" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
        </linearGradient>

        {/* Body Clip Path for Core Occlusion */}
        <clipPath id={`${idPrefix}-clip`}>
          <path d="M12 152
             C 3 135, 1 85, 2 72
             C 3 26, 22 2, 54 2
             C 78 2, 100 16, 118 52
             C 130 76, 137 106, 146 136
             C 152 152, 166 154, 175 140
             C 188 122, 196 82, 198 48
             C 199 22, 197 4, 192 1
             C 184 4, 172 16, 161 30
             C 150 44, 146 68, 144 88
             C 137 100, 120 118, 98 120
             C 84 112, 77 86, 74 72
             C 68 70, 58 72, 54 78
             C 46 106, 38 135, 26 150
             C 22 155, 16 156, 12 152 Z" />
        </clipPath>
      </defs>

      {/* Optional container tile */}
      {withBackground && (
        <>
          <rect width="200" height="160" rx="30" fill={isDark ? '#151A24' : '#FFFFFF'} />
          <rect
            x="1"
            y="1"
            width="198"
            height="158"
            rx="29"
            stroke={isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(21, 26, 36, 0.08)'}
            strokeWidth="2"
          />
        </>
      )}

      <g filter={`url(#${idPrefix}-depth)`}>
        {/* 1. Master Base Glass Body */}
        <path
          d="M12 152
             C 3 135, 1 85, 2 72
             C 3 26, 22 2, 54 2
             C 78 2, 100 16, 118 52
             C 130 76, 137 106, 146 136
             C 152 152, 166 154, 175 140
             C 188 122, 196 82, 198 48
             C 199 22, 197 4, 192 1
             C 184 4, 172 16, 161 30
             C 150 44, 146 68, 144 88
             C 137 100, 120 118, 98 120
             C 84 112, 77 86, 74 72
             C 68 70, 58 72, 54 78
             C 46 106, 38 135, 26 150
             C 22 155, 16 156, 12 152 Z"
          fill={`url(#${idPrefix}-base)`}
        />

        {/* 2. Frosted Silver Volume on Left Stem & Shoulder */}
        <path
          d="M12 152
             C 3 135, 1 85, 2 72
             C 3 26, 22 2, 54 2
             C 78 2, 100 16, 118 52
             C 106 66, 92 68, 74 72
             C 68 70, 58 72, 54 78
             C 46 106, 38 135, 26 150
             C 22 155, 16 156, 12 152 Z"
          fill={`url(#${idPrefix}-silver)`}
        />

        {/* 3. Dynamic Optical Caustics */}
        <path
          d="M74 72
             C 86 46, 104 28, 118 52
             C 130 76, 137 106, 146 136
             C 152 152, 166 154, 175 140
             C 188 122, 196 82, 198 48
             C 192 40, 182 56, 175 80
             C 165 108, 154 132, 144 124
             C 132 115, 118 92, 98 78
             C 86 70, 78 70, 74 72 Z"
          fill={`url(#${idPrefix}-caustics)`}
          style={{ mixBlendMode: 'screen' }}
        />

        {/* 4. Inner Occlusion Shadow */}
        <g clipPath={`url(#${idPrefix}-clip)`}>
          <ellipse cx="120" cy="115" rx="28" ry="18" fill="#020617" opacity={0.65} style={{ filter: 'blur(8px)' }} />
        </g>

        {/* 5. Top Crest Specular Highlight Curve */}
        <path
          d="M16 60
             C 20 25, 34 6, 56 4
             C 75 4, 94 15, 108 34"
          stroke={`url(#${idPrefix}-crest)`}
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          style={{ filter: 'drop-shadow(0 0 3px rgba(255,255,255,0.9))' }}
        />

        {/* 6. Diagonal Specular Crest Ridge */}
        <path
          d="M58 42
             C 76 30, 96 34, 114 56
             C 126 74, 134 102, 142 128"
          stroke={`url(#${idPrefix}-ridge)`}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          style={{ filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.7))' }}
        />

        {/* 7. Razor-Sharp Fresnel Specular Rim on Right Fin */}
        <path
          d="M166 148
             C 178 136, 190 98, 196 55
             C 198 28, 196 6, 192 1"
          stroke={`url(#${idPrefix}-fresnel)`}
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          style={{ filter: 'drop-shadow(0 0 3px rgba(186, 230, 253, 0.95))' }}
        />

        {/* 8. Pinpoint Glass Apex Highlight */}
        <circle cx="192" cy="2" r="2.2" fill="#FFFFFF" style={{ filter: 'drop-shadow(0 0 3px #FFFFFF)' }} />
      </g>
    </svg>
  );
}

// Backwards-compatible alias for existing imports
export const Monogram = NorthformSymbol;

export interface BrandLogoProps {
  className?: string;
  isDark?: boolean;
  monogramOnly?: boolean;
  size?: number;
  showTagline?: boolean;
  variant?: 'horizontal' | 'vertical';
  withBackground?: boolean;
}

/**
 * Northform Studios — Official Primary and Secondary Brand Lockups
 * Horizontal lockup with vertical hairline divider for navigation and headers;
 * Vertical lockup for editorial/splash;
 * Standalone mark for favicons and app icons.
 */
export default function BrandLogo({
  className = '',
  isDark = false,
  monogramOnly = false,
  size = 38,
  showTagline = false,
  variant = 'horizontal',
  withBackground = false,
}: BrandLogoProps) {
  const isVertical = variant === 'vertical';

  return (
    <Link
      to="/"
      className={`inline-flex ${
        isVertical ? 'flex-col items-center text-center gap-3' : 'items-center gap-2.5 sm:gap-3.5'
      } group select-none ${className}`}
      aria-label="Northform Studios — Home"
    >
      <NorthformSymbol
        size={size}
        isDark={isDark}
        withBackground={withBackground}
      />

      {!monogramOnly && (
        <>
          {/* Subtle Vertical Hairline Divider as featured in official studio identity lockup */}
          {!isVertical && (
            <div
              className={`w-[1px] h-7 self-center transition-colors duration-200 ${
                isDark ? 'bg-white/20' : 'bg-[#151A24]/15'
              }`}
            />
          )}

          <div className={`flex flex-col ${isVertical ? 'items-center mt-1' : 'items-start'}`}>
            <span
              className={`font-heading font-extrabold text-[15px] sm:text-[17px] tracking-[0.14em] leading-none transition-colors duration-200 ${
                isDark ? 'text-white' : 'text-[#151A24]'
              }`}
            >
              NORTHFORM
            </span>
            
            <span
              className={`text-[8.5px] sm:text-[9.5px] tracking-[0.42em] font-sans font-semibold uppercase mt-1 leading-none ${
                isDark ? 'text-[#94A3B8]' : 'text-[#707887]'
              }`}
            >
              STUDIOS
            </span>

            {showTagline && (
              <span
                className={`text-[7px] tracking-[0.24em] font-mono font-medium uppercase mt-2 leading-none ${
                  isDark ? 'text-white/45' : 'text-[#707887]/80'
                }`}
              >
                BUILT WITH INTENT.
              </span>
            )}
          </div>
        </>
      )}
    </Link>
  );
}
