import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AGENCY_CONFIG, buildWhatsAppUrl } from '../config/agencyConfig';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [quickMessage, setQuickMessage] = useState('');

  const defaultPrompt = "Hello Northform Studios! I saw your studio portfolio and I'm interested in commissioning a project.";

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = quickMessage.trim() || defaultPrompt;
    window.open(buildWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
    setIsOpen(false);
    setQuickMessage('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Chat Popup Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-3 w-80 sm:w-84 rounded-2xl bg-white p-4 shadow-2xl border border-[#151A24]/10"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#151A24]/6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#151A24] font-heading">Direct Studio Desk</h4>
                  <p className="text-[10px] text-[#707887]">Lagos (WAT / GMT+1)</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-[#707887] hover:text-[#151A24] hover:bg-black/5 transition-colors"
                aria-label="Close WhatsApp chat popup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#707887] mt-3 leading-relaxed">
              Have a project in mind or want a rapid estimate? Message our lead engineering &amp; design team directly on WhatsApp.
            </p>

            <form onSubmit={handleSend} className="mt-3 space-y-2">
              <input
                type="text"
                value={quickMessage}
                onChange={(e) => setQuickMessage(e.target.value)}
                placeholder="e.g. Need an e-commerce platform for our hardware brand..."
                className="w-full px-3 py-2 text-xs rounded-xl bg-[#F7F5F0] border border-[#151A24]/10 focus:outline-hidden focus:ring-2 focus:ring-[#496BFF] focus:bg-white"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#151A24] hover:bg-[#496BFF] text-white text-xs font-semibold shadow-xs transition-colors active:scale-98"
              >
                <Send className="w-3.5 h-3.5 text-[#C8F169]" />
                <span>Chat on WhatsApp</span>
              </button>
            </form>
            
            <div className="mt-2 text-[10px] text-center text-[#707887] font-mono">
              Line: <span className="text-[#151A24]">{AGENCY_CONFIG.whatsappDisplay}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent Button */}
      <motion.button
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white text-[#151A24] shadow-lg hover:shadow-xl border border-[#151A24]/10 transition-shadow focus:outline-hidden focus:ring-2 focus:ring-[#496BFF]"
        aria-label="Direct WhatsApp Contact"
      >
        <div className="relative">
          <div className="w-6 h-6 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-2xs">
            <MessageCircle className="w-3.5 h-3.5" />
          </div>
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#C8F169] border border-white" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-xs font-bold font-heading text-[#151A24] leading-tight">
            WhatsApp
          </span>
          <span className="text-[9px] text-[#707887] font-mono leading-tight">
            Direct Desk
          </span>
        </div>
      </motion.button>
    </div>
  );
}
