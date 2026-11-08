import React from 'react';
import { Link } from 'react-router-dom';

export interface SymbolProps {
  size?: number;
  isDark?: boolean;
  monochrome?: boolean;
  monochromeColor?: string;
  className?: string;
  withBackground?: boolean;
}

/**
 * Northform Studios — Standalone N Symbol
 * An abstract geometric letter N formed from a continuous folded ribbon.
 * Communicates structure, direction, movement, creativity, precision, and connection.
 */
export function NorthformSymbol({
  size = 32,
  isDark = false,
  monochrome = false,
  monochromeColor,
  className = '',
  withBackground = false,
}: SymbolProps) {
  // Determine fill colors based on theme and monochrome preference
  let stemFill = isDark ? '#FFFFFF' : '#151A24';
  let diagonalFill = '#496BFF';
  let miterStroke = isDark ? 'rgba(255, 255, 255, 0.4)' : '#DCE5FF';

  if (monochrome) {
    const singleColor = monochromeColor || (isDark ? '#FFFFFF' : '#151A24');
    stemFill = singleColor;
    diagonalFill = singleColor;
    miterStroke = isDark ? '#151A24' : '#F7F5F0';
  }

  const svgContent = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-300 group-hover:scale-[1.04] ${className}`}
      aria-label="Northform Studios Monogram"
    >
      {/* Optional subtle squircle container for standalone icons & app tiles */}
      {withBackground && (
        <>
          <rect width="64" height="64" rx="14" fill={isDark ? '#151A24' : '#FFFFFF'} />
          <rect
            x="0.75"
            y="0.75"
            width="62.5"
            height="62.5"
            rx="13.25"
            stroke={isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(21, 26, 36, 0.08)'}
            strokeWidth="1.5"
          />
        </>
      )}

      {/* Segment 1: Left Vertical Stem (Ascending anchor) */}
      <path
        d="M14 25 L25 14 V50 H14 V25 Z"
        fill={stemFill}
      />

      {/* Segment 2: Continuous Folded Diagonal Ribbon (Dynamic traverse) */}
      <path
        d="M14 14 H25 L50 39 V50 H39 L14 25 Z"
        fill={diagonalFill}
      />

      {/* Segment 3: Right Vertical Stem (Ascending terminus) */}
      <path
        d="M39 14 H50 V39 L39 50 V14 Z"
        fill={stemFill}
      />

      {/* Precision Fold Miter Hairlines (Highlighting ribbon fold geometry) */}
      <path
        d="M14 25 L25 14"
        stroke={miterStroke}
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M39 50 L50 39"
        stroke={miterStroke}
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );

  return svgContent;
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
  monochrome?: boolean;
  monochromeColor?: string;
  withBackground?: boolean;
}

/**
 * Northform Studios — Primary and Secondary Logo Lockups
 * Horizontal version for navigation; Vertical version for editorial/splash;
 * Symbol-only for favicons and app icons.
 */
export default function BrandLogo({
  className = '',
  isDark = false,
  monogramOnly = false,
  size = 32,
  showTagline = false,
  variant = 'horizontal',
  monochrome = false,
  monochromeColor,
  withBackground = false,
}: BrandLogoProps) {
  const isVertical = variant === 'vertical';

  return (
    <Link
      to="/"
      className={`inline-flex ${
        isVertical ? 'flex-col items-center text-center gap-3' : 'items-center gap-2.5 sm:gap-3'
      } group select-none ${className}`}
      aria-label="Northform Studios — Home"
    >
      <NorthformSymbol
        size={size}
        isDark={isDark}
        monochrome={monochrome}
        monochromeColor={monochromeColor}
        withBackground={withBackground}
      />

      {!monogramOnly && (
        <div className={`flex flex-col ${isVertical ? 'items-center' : 'items-start'}`}>
          <span
            className={`font-heading font-extrabold text-[15px] sm:text-[17px] tracking-tight leading-none transition-colors duration-200 ${
              isDark ? 'text-white group-hover:text-white' : 'text-[#151A24] group-hover:text-[#151A24]'
            }`}
          >
            NORTHFORM
          </span>
          
          <span
            className={`text-[9px] sm:text-[9.5px] tracking-[0.28em] font-sans font-semibold uppercase mt-1 leading-none ${
              isDark ? 'text-[#707887]' : 'text-[#707887]'
            }`}
          >
            STUDIOS
          </span>

          {showTagline && (
            <span
              className={`text-[7.5px] tracking-[0.2em] font-sans font-medium uppercase mt-1.5 leading-none ${
                isDark ? 'text-white/40' : 'text-[#707887]/80'
              }`}
            >
              BUILT WITH INTENT.
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
