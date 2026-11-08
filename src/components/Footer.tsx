import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle, Mail, MapPin, ShieldCheck } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { AGENCY_CONFIG, buildWhatsAppUrl } from '../config/agencyConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#151A24] text-white pt-16 sm:pt-20 pb-12 px-4 sm:px-6 md:px-8 border-t border-white/8 relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/8">
          
          {/* Column 1: Studio Identity */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo isDark={true} showTagline={true} />
            
            <p className="text-xs sm:text-sm text-[#707887] leading-relaxed max-w-sm">
              An independent creative technology studio engineering bespoke digital platforms, high-conversion e-commerce experiences, and automated business workflows.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8F169] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C8F169]"></span>
              </span>
              <span className="text-xs text-white/80 font-medium">
                {AGENCY_CONFIG.statusText}
              </span>
            </div>
          </div>

          {/* Column 2: Studio Navigation */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold text-[#707887] uppercase tracking-widest font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-white transition-colors">Our Work</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/quote" className="text-[#C8F169] hover:underline font-medium flex items-center gap-1 transition-colors">
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Showcase Demos */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold text-[#707887] uppercase tracking-widest font-mono">
              Showcase Work
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <Link to="/work/estate-one" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Estate One</span>
                  <span className="text-[10px] font-mono text-[#707887]">Real Estate</span>
                </Link>
              </li>
              <li>
                <Link to="/work/maison-kitchen" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Maison Kitchen</span>
                  <span className="text-[10px] font-mono text-[#707887]">Hospitality</span>
                </Link>
              </li>
              <li>
                <Link to="/work/solara-energy" className="hover:text-white transition-colors flex items-center justify-between group">
                  <span>Solara Energy</span>
                  <span className="text-[10px] font-mono text-[#707887]">Clean Energy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Inquiries */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold text-[#707887] uppercase tracking-widest font-mono">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#496BFF] shrink-0" />
                <a
                  href={buildWhatsAppUrl("Hello Northform Studios! I'd like to discuss a new digital project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {AGENCY_CONFIG.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#496BFF] shrink-0" />
                <a href={`mailto:${AGENCY_CONFIG.email}`} className="hover:text-white transition-colors">
                  {AGENCY_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#496BFF] shrink-0 mt-0.5" />
                <span className="text-[#707887] leading-tight">
                  {AGENCY_CONFIG.location}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Authenticity Notice */}
        <div className="mt-6 p-4 rounded-xl bg-white/4 border border-white/6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <ShieldCheck className="w-4 h-4 text-[#C8F169] shrink-0" />
          <p className="text-xs text-[#707887] leading-relaxed">
            <strong className="text-white">Authenticity Standard:</strong> Estate One, Maison Kitchen, and Solara Energy are original, fully functional demonstration platforms designed and engineered by NORTHFORM STUDIOS to demonstrate real-world architecture and aesthetic capability.
          </p>
        </div>

        {/* Copyright & Links */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#707887]">
          <div>
            &copy; {currentYear} NORTHFORM STUDIOS. Built with Intent. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-white transition-colors">Studio Philosophy</Link>
            <Link to="/services" className="hover:text-white transition-colors">Capabilities</Link>
            <Link to="/quote" className="hover:text-white transition-colors">Project Planner</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
