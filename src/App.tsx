import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Quote from './pages/Quote';

function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 text-center">
      <div className="max-w-md space-y-4">
        <span className="text-[10px] font-mono font-bold text-[#496BFF] uppercase tracking-widest">
          404 ERROR
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-[#151A24]">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-[#707887] leading-relaxed">
          The requested page does not exist or has moved. Explore our portfolio or return to the studio homepage.
        </p>
        <div className="pt-2 flex items-center justify-center gap-3">
          <Link
            to="/"
            className="px-6 py-2.5 rounded-xl bg-[#151A24] text-white text-xs font-semibold hover:bg-[#496BFF] transition-colors"
          >
            Studio Home
          </Link>
          <Link
            to="/work"
            className="px-6 py-2.5 rounded-xl bg-white text-[#151A24] text-xs font-semibold border border-[#151A24]/10 hover:bg-[#F8F6F1] transition-colors"
          >
            Showcase Work
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen w-full max-w-full overflow-x-hidden bg-[#F8F6F1] grain-overlay text-[#151A24] selection:bg-[#496BFF] selection:text-white relative">
        <Navbar />
        <main className="grow w-full max-w-full overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
