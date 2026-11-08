import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BrandLogo from './BrandLogo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Our Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-3 sm:px-6">
      <div className="max-w-[1240px] mx-auto w-full">
        <nav
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl transition-all duration-300 w-full ${
            scrolled ? 'glass-nav-scrolled' : 'glass-nav'
          }`}
          aria-label="Main Navigation"
        >
          {/* Brand Logo & Wordmark */}
          <BrandLogo />

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-1.5 rounded-xl text-xs lg:text-[13px] font-medium transition-all duration-200 relative ${
                    active
                      ? 'text-[#151A24] font-semibold bg-black/5'
                      : 'text-[#707887] hover:text-[#151A24] hover:bg-black/[0.03]'
                  }`}
                >
                  {link.name}
                  {active && (
                    <motion.span
                      layoutId="navActiveIndicator"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#496BFF] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/quote"
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl bg-[#151A24] text-white text-xs sm:text-[13px] font-semibold transition-all duration-200 hover:bg-[#496BFF] hover:shadow-md active:scale-98 group"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C8F169] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-[#151A24] hover:bg-black/5 transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#496BFF]"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Animated Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden mt-2 p-3 rounded-2xl bg-white border border-[#151A24]/10 shadow-xl"
            >
              <div className="flex flex-col gap-1">
                {/* Mobile Drawer Brand Header */}
                <div className="px-3 py-2 mb-1 flex items-center justify-between border-b border-[#151A24]/6">
                  <BrandLogo size={28} />
                  <span className="text-[10px] font-mono text-[#707887]">BUILT WITH INTENT</span>
                </div>

                {navLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                        active
                          ? 'bg-[#151A24]/5 text-[#151A24] font-semibold'
                          : 'text-[#707887] hover:text-[#151A24] hover:bg-black/[0.02]'
                      }`}
                    >
                      <span>{link.name}</span>
                      {active && <span className="w-1.5 h-1.5 rounded-full bg-[#496BFF]" />}
                    </Link>
                  );
                })}

                <div className="pt-2 mt-1 border-t border-[#151A24]/5">
                  <Link
                    to="/quote"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#151A24] text-white text-xs sm:text-sm font-semibold hover:bg-[#496BFF] transition-colors shadow-xs"
                  >
                    <span>Start a Project</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C8F169]" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
