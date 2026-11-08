import React, { useState } from 'react';
import {
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Copy,
  Check
} from 'lucide-react';
import { InstagramIcon, LinkedInIcon, TwitterXIcon } from '../components/SocialIcons';
import { AGENCY_CONFIG, buildWhatsAppUrl } from '../config/agencyConfig';
import { PageTransition, FadeIn } from '../components/Motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email format';
    }
    if (!formData.message.trim()) errs.message = 'Please enter your message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const text = `*New Contact Inquiry (NORTHFORM STUDIOS)*\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone || 'Not provided'}\n` +
      `*Subject:* ${formData.subject || 'General Inquiry'}\n` +
      `*Message:* ${formData.message}`;

    window.open(buildWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(AGENCY_CONFIG.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 sm:pt-28 pb-20">

        {/* Header */}
        <section className="px-4 sm:px-6 md:px-8 py-10 sm:py-16 max-w-[1240px] mx-auto">
          <FadeIn className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-white border border-[#151A24]/10 text-xs font-mono font-semibold uppercase text-[#151A24] shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8F169]" />
              <span>DIRECT CHANNELS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-[#151A24] tracking-tight leading-tight">
              Let's start a conversation.
            </h1>

            <p className="text-base sm:text-lg text-[#707887] leading-relaxed max-w-2xl font-normal">
              Whether you have a fully drafted project brief or just an initial idea, we are accessible directly via WhatsApp, email, or our inquiry form.
            </p>
          </FadeIn>
        </section>

        {/* Main Grid: Direct Channels on Left, Form on Right */}
        <section className="px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Direct Studio Channels */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Primary WhatsApp Card */}
              <FadeIn className="p-7 rounded-3xl bg-[#151A24] text-white space-y-4 shadow-xl border border-white/10 relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-semibold bg-emerald-500/20 text-[#C8F169] border border-emerald-500/30">
                    Fastest Response
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold font-heading text-white">
                    Chat Directly on WhatsApp
                  </h3>
                  <p className="text-xs text-[#707887] leading-relaxed">
                    Connect instantly with our lead builders. Ideal for quick questions, project timelines, and rapid estimates.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={buildWhatsAppUrl("Hello Northform Studios! I want to inquire about a digital project for my business.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#496BFF] hover:bg-[#3b5ae0] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all active:scale-98"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open WhatsApp ({AGENCY_CONFIG.whatsappDisplay})</span>
                  </a>
                </div>
              </FadeIn>

              {/* Email Card */}
              <FadeIn delay={0.1} className="p-7 rounded-3xl bg-white border border-[#151A24]/8 shadow-2xs space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F5F0] flex items-center justify-center text-[#151A24]">
                    <Mail className="w-5 h-5 text-[#496BFF]" />
                  </div>
                  <button
                    onClick={copyEmailToClipboard}
                    className="text-xs text-[#707887] hover:text-[#151A24] flex items-center gap-1 transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-bold font-heading text-[#151A24]">
                    Business Email
                  </h3>
                  <a
                    href={`mailto:${AGENCY_CONFIG.email}`}
                    className="text-sm font-mono text-[#496BFF] hover:underline"
                  >
                    {AGENCY_CONFIG.email}
                  </a>
                  <p className="text-xs text-[#707887] pt-1">
                    Send RFP documents, project specifications, or formal briefs directly to our inbox.
                  </p>
                </div>
              </FadeIn>

              {/* Location & Studio Hours */}
              <FadeIn delay={0.15} className="p-7 rounded-3xl bg-white border border-[#151A24]/8 shadow-2xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F5F0] flex items-center justify-center text-[#151A24]">
                    <MapPin className="w-5 h-5 text-[#496BFF]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold font-heading text-[#151A24]">
                      Studio Presence
                    </h3>
                    <p className="text-xs text-[#707887]">
                      {AGENCY_CONFIG.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-[#151A24]/6 text-xs text-[#707887]">
                  <Clock className="w-4 h-4 text-[#496BFF] shrink-0" />
                  <span>Mon – Fri, 9:00 AM – 6:00 PM (WAT / GMT+1)</span>
                </div>
              </FadeIn>

              {/* Social Links */}
              <FadeIn delay={0.2} className="p-6 rounded-3xl bg-white border border-[#151A24]/8 space-y-3">
                <span className="text-[10px] font-mono font-bold text-[#707887] uppercase tracking-wider">
                  Social Profiles
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={AGENCY_CONFIG.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#F7F5F0] hover:bg-[#151A24] hover:text-white text-[#151A24] transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={AGENCY_CONFIG.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#F7F5F0] hover:bg-[#151A24] hover:text-white text-[#151A24] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={AGENCY_CONFIG.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#F7F5F0] hover:bg-[#151A24] hover:text-white text-[#151A24] transition-colors"
                    aria-label="Twitter / X"
                  >
                    <TwitterXIcon className="w-4 h-4" />
                  </a>
                </div>
              </FadeIn>

            </div>

            {/* Right Column: Contact Inquiry Form */}
            <FadeIn delay={0.1} className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#151A24]/8 shadow-xs space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-[#496BFF] uppercase tracking-widest">
                  DIRECT INQUIRY
                </span>
                <h2 className="text-2xl font-bold font-heading text-[#151A24]">
                  Send a quick message
                </h2>
                <p className="text-xs text-[#707887]">
                  Fill out the form below. For immediate routing, this will format your message directly into WhatsApp.
                </p>
              </div>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3 text-xs text-emerald-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold">Message Formatted Successfully:</strong> If your browser blocked the WhatsApp tab, click below to open your chat manually.
                    <div className="mt-2">
                      <button
                        onClick={handleSubmit}
                        className="px-3 py-1 rounded-md bg-emerald-600 text-white font-medium text-[11px]"
                      >
                        Re-open WhatsApp Chat
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#151A24] mb-1 font-heading">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Babatunde Adeleke"
                      className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-[#F7F5F0] border ${
                        errors.name ? 'border-rose-400' : 'border-[#151A24]/10'
                      } focus:outline-hidden focus:ring-2 focus:ring-[#496BFF] focus:bg-white`}
                    />
                    {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#151A24] mb-1 font-heading">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@company.ng"
                      className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-[#F7F5F0] border ${
                        errors.email ? 'border-rose-400' : 'border-[#151A24]/10'
                      } focus:outline-hidden focus:ring-2 focus:ring-[#496BFF] focus:bg-white`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#151A24] mb-1 font-heading">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +234 803 000 0000"
                      className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-[#F7F5F0] border border-[#151A24]/10 focus:outline-hidden focus:ring-2 focus:ring-[#496BFF] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#151A24] mb-1 font-heading">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Website redesign project"
                      className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-[#F7F5F0] border border-[#151A24]/10 focus:outline-hidden focus:ring-2 focus:ring-[#496BFF] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#151A24] mb-1 font-heading">
                    Your Message / Project Scope *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your brand, what you are looking to build, and any specific questions you have..."
                    className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-[#F7F5F0] border ${
                      errors.message ? 'border-rose-400' : 'border-[#151A24]/10'
                    } focus:outline-hidden focus:ring-2 focus:ring-[#496BFF] focus:bg-white`}
                  />
                  {errors.message && <p className="text-[11px] text-rose-500 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#151A24] hover:bg-[#496BFF] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all active:scale-98"
                >
                  <Send className="w-4 h-4 text-[#C8F169]" />
                  <span>Send Message via WhatsApp</span>
                </button>

                <div className="flex items-center gap-2 text-[11px] text-[#707887] pt-1">
                  <AlertCircle className="w-3.5 h-3.5 text-[#496BFF] shrink-0" />
                  <span>Form details are formatted into a direct WhatsApp message. Zero data is sold or stored without permission.</span>
                </div>
              </form>
            </FadeIn>

          </div>
        </section>

      </div>
    </PageTransition>
  );
}
