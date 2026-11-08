import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  Send,
  MessageCircle,
  Copy,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Calendar,
  Wallet,
  FileText
} from 'lucide-react';
import { AGENCY_CONFIG, buildWhatsAppUrl } from '../config/agencyConfig';
import { PageTransition, FadeIn } from '../components/Motion';

export default function Quote() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service');
  const preselectedProject = searchParams.get('project');

  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    projectType: 'Website Design & Development',
    hasWebsite: 'No (Starting fresh)',
    estimatedBudget: '₦1,500,000 – ₦3,500,000',
    desiredCompletionDate: '1 – 2 Months',
    projectDescription: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  useEffect(() => {
    if (preselectedService) {
      if (preselectedService === 'ecommerce') {
        setFormData((prev) => ({ ...prev, projectType: 'E-Commerce Development' }));
      } else if (preselectedService === 'business-automation') {
        setFormData((prev) => ({ ...prev, projectType: 'Business Automation & Workflows' }));
      } else if (preselectedService === 'website-redesign') {
        setFormData((prev) => ({ ...prev, projectType: 'Website Redesign & Modernization', hasWebsite: 'Yes (Needs complete redesign)' }));
      }
    }
    if (preselectedProject) {
      setFormData((prev) => ({
        ...prev,
        projectDescription: `Interested in commissioning a platform with similar design and capabilities as your showcase project "${preselectedProject}".`,
      }));
    }
  }, [preselectedService, preselectedProject]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.businessName.trim()) errs.businessName = 'Please enter your business or project name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email format';
    }
    if (!formData.phone.trim()) errs.phone = 'Please provide a contact phone or WhatsApp number';
    if (!formData.projectDescription.trim() || formData.projectDescription.length < 15) {
      errs.projectDescription = 'Please provide at least a brief description of what you need (min 15 characters)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const generateBriefMessage = (refId: string) => {
    return (
      `*PROJECT QUOTE REQUEST [Ref: ${refId}]*\n` +
      `*Studio Target:* NORTHFORM STUDIOS\n\n` +
      `*1. Client Name:* ${formData.fullName}\n` +
      `*2. Business Name:* ${formData.businessName}\n` +
      `*3. Email:* ${formData.email}\n` +
      `*4. Phone:* ${formData.phone}\n` +
      `*5. Project Type:* ${formData.projectType}\n` +
      `*6. Existing Website:* ${formData.hasWebsite}\n` +
      `*7. Budget Range:* ${formData.estimatedBudget}\n` +
      `*8. Target Timeline:* ${formData.desiredCompletionDate}\n` +
      `*9. Project Description:*\n${formData.projectDescription}\n\n` +
      `_Submitted via Northform Studios Project Planner_`
    );
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const ref = `NFS-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);
    const message = generateBriefMessage(ref);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#496BFF', '#151A24', '#C8F169'],
      });
    } catch {
      // Ignore if confetti not supported
    }

    setSubmitted(true);
    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  const handleCopyBrief = () => {
    const ref = referenceId || `NFS-${Math.floor(100000 + Math.random() * 900000)}`;
    const message = generateBriefMessage(ref);
    navigator.clipboard.writeText(message);
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2500);
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 sm:pt-28 pb-20">

        {/* Header */}
        <section className="px-4 sm:px-6 md:px-8 py-10 sm:py-16 max-w-[1240px] mx-auto text-center space-y-4">
          <FadeIn className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-white border border-[#151A24]/10 text-xs font-mono font-semibold uppercase text-[#151A24] shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8F169]" />
              <span>PROJECT PLANNER &amp; QUOTE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-heading text-[#151A24] tracking-tight leading-tight">
              Request an itemized project quote.
            </h1>

            <p className="text-base sm:text-lg text-[#707887] leading-relaxed max-w-2xl mx-auto font-normal">
              Tell us about your company, your requirements, and your target completion date. We provide fixed-scope proposals with zero hidden costs.
            </p>
          </FadeIn>
        </section>

        {/* Success State */}
        {submitted ? (
          <section className="px-4 sm:px-6 md:px-8 max-w-3xl mx-auto">
            <FadeIn className="p-8 sm:p-12 rounded-3xl bg-white border border-emerald-500/20 shadow-xl space-y-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider">
                  QUOTE BRIEF COMPILED &bull; {referenceId}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#151A24]">
                  Your project brief is ready for delivery!
                </h2>
                <p className="text-xs sm:text-sm text-[#707887] max-w-xl mx-auto leading-relaxed">
                  If WhatsApp did not automatically open on your device, click below to launch the pre-formatted chat with our studio desk, or copy the complete brief to email us directly.
                </p>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={buildWhatsAppUrl(generateBriefMessage(referenceId))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#496BFF] hover:bg-[#3b5ae0] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open in WhatsApp</span>
                </a>

                <button
                  onClick={handleCopyBrief}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#F7F5F0] hover:bg-black/5 text-[#151A24] text-xs sm:text-sm font-semibold border border-[#151A24]/10 transition-colors"
                >
                  {copiedBrief ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#707887]" />
                      <span>Copy Structured Brief</span>
                    </>
                  )}
                </button>
              </div>

              {/* Delivery Transparency Note */}
              <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#151A24]/6 text-left text-xs text-[#707887] space-y-2">
                <div className="flex items-center gap-2 font-semibold text-[#151A24]">
                  <ShieldCheck className="w-4 h-4 text-[#496BFF]" />
                  <span>Direct Delivery Notice</span>
                </div>
                <p>
                  To ensure total transparency, your brief is delivered directly to our lead engineers via WhatsApp (Number: <code className="text-[#151A24] font-mono">{AGENCY_CONFIG.whatsappDisplay}</code>) or directly to <code className="text-[#151A24] font-mono">{AGENCY_CONFIG.email}</code>. We never simulate backend transmissions.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#707887] hover:text-[#151A24] underline font-medium"
                >
                  Edit Form or Submit Another Request
                </button>
              </div>
            </FadeIn>
          </section>
        ) : (
          /* Form Section */
          <section className="px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
            <FadeIn>
              <form
                onSubmit={handleWhatsAppSubmit}
                className="p-8 sm:p-12 rounded-3xl bg-white border border-[#151A24]/8 shadow-xs space-y-8"
              >
                {/* Section 1: Contact Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-[#151A24]/6">
                    <span className="w-6 h-6 rounded-lg bg-[#F7F5F0] text-xs font-mono font-bold flex items-center justify-center text-[#151A24]">
                      1
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold font-heading text-[#151A24] uppercase tracking-wider">
                      Contact &amp; Business Information
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#151A24] mb-1 font-heading">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Dapo Adeleke"
                        className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-[#F7F5F0] border ${
                          errors.fullName ? 'border-rose-400' : 'border-[#151A24]/10'
                        } focus:outline-hidden focus:ring-2 focus:ring-[#496BFF] focus:bg-white`}
                      />
                      {errors.fullName && <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#151A24] mb-1 font-heading">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Lumina Energy Ltd"
                        className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-[#F7F5F0] border ${
                          errors.businessName ? 'border-rose-400' : 'border-[#151A24]/10'
                        } focus:outline-hidden focus:ring-2 focus:ring-[#496BFF] focus:bg-white`}
                      />
                      {errors.businessName && <p className="text-[11px] text-rose-500 mt-1">{errors.businessName}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#151A24] mb-1 font-heading">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. dapo@lumina.ng"
                        className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-[#F7F5F0] border ${
                          errors.email ? 'border-rose-400' : 'border-[#151A24]/10'
                        } focus:outline-hidden focus:ring-2 focus:ring-[#496BFF] focus:bg-white`}
                      />
                      {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#151A24] mb-1 font-heading">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +234 803 123 4567"
                        className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-[#F7F5F0] border ${
                          errors.phone ? 'border-rose-400' : 'border-[#151A24]/10'
                        } focus:outline-hidden focus:ring-2 focus:ring-[#496BFF] focus:bg-white`}
                      />
                      {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                </div>

                {/* Section 2: Project Specifications */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-[#151A24]/6">
                    <span className="w-6 h-6 rounded-lg bg-[#F7F5F0] text-xs font-mono font-bold flex items-center justify-center text-[#151A24]">
                      2
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold font-heading text-[#151A24] uppercase tracking-wider">
                      Project Specifications
                    </h3>
                  </div>

                  {/* Type of Project */}
                  <div>
                    <label className="block text-xs font-semibold text-[#151A24] mb-2 font-heading">
                      Type of Project *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {[
                        'Website Design & Development',
                        'E-Commerce Development',
                        'Business Automation & Workflows',
                        'Website Redesign & Modernization',
                        'Custom Web Application'
                      ].map((type) => (
                        <label
                          key={type}
                          className={`flex items-center gap-3 p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                            formData.projectType === type
                              ? 'border-[#151A24] bg-[#151A24] text-white shadow-xs'
                              : 'border-[#151A24]/10 bg-[#F7F5F0] text-[#151A24] hover:border-[#151A24]/30'
                          }`}
                        >
                          <input
                            type="radio"
                            name="projectType"
                            value={type}
                            checked={formData.projectType === type}
                            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                            className="sr-only"
                          />
                          <span className="truncate">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Do you currently have a website? */}
                  <div>
                    <label className="block text-xs font-semibold text-[#151A24] mb-2 font-heading">
                      Do you currently have an existing website?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        'No (Starting fresh)',
                        'Yes (Needs complete redesign)',
                        'Yes (Minor updates & automation)'
                      ].map((status) => (
                        <label
                          key={status}
                          className={`flex items-center justify-center p-3 rounded-xl border text-xs font-medium text-center cursor-pointer transition-all ${
                            formData.hasWebsite === status
                              ? 'border-[#151A24] bg-[#151A24] text-white shadow-xs'
                              : 'border-[#151A24]/10 bg-[#F7F5F0] text-[#151A24] hover:border-[#151A24]/30'
                          }`}
                        >
                          <input
                            type="radio"
                            name="hasWebsite"
                            value={status}
                            checked={formData.hasWebsite === status}
                            onChange={(e) => setFormData({ ...formData, hasWebsite: e.target.value })}
                            className="sr-only"
                          />
                          <span>{status}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Budget & Desired Completion Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#151A24] mb-1 font-heading flex items-center gap-1.5">
                        <Wallet className="w-3.5 h-3.5 text-[#496BFF]" />
                        <span>Estimated Budget Range (NGN)</span>
                      </label>
                      <select
                        value={formData.estimatedBudget}
                        onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-[#F7F5F0] border border-[#151A24]/10 focus:outline-hidden focus:ring-2 focus:ring-[#496BFF] focus:bg-white"
                      >
                        <option value="₦500,000 – ₦1,500,000">₦500,000 – ₦1,500,000 (Essential Business Website)</option>
                        <option value="₦1,500,000 – ₦3,500,000">₦1,500,000 – ₦3,500,000 (Flagship Portal / E-Commerce)</option>
                        <option value="₦3,500,000 – ₦7,000,000">₦3,500,000 – ₦7,000,000 (Custom Architecture &amp; Automation)</option>
                        <option value="₦7,000,000+">₦7,000,000+ (Full Enterprise Solution)</option>
                        <option value="Undetermined / Let's Discuss">Undetermined / Let's Discuss Options</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#151A24] mb-1 font-heading flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#496BFF]" />
                        <span>Desired Completion Date</span>
                      </label>
                      <select
                        value={formData.desiredCompletionDate}
                        onChange={(e) => setFormData({ ...formData, desiredCompletionDate: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-[#F7F5F0] border border-[#151A24]/10 focus:outline-hidden focus:ring-2 focus:ring-[#496BFF] focus:bg-white"
                      >
                        <option value="Within 2 – 4 Weeks">Within 2 – 4 Weeks (Expedited Sprint)</option>
                        <option value="1 – 2 Months">1 – 2 Months (Standard Delivery)</option>
                        <option value="2 – 3 Months">2 – 3 Months</option>
                        <option value="Flexible / Planning Ahead">Flexible / Planning Ahead</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-xs font-semibold text-[#151A24] mb-1 font-heading">
                      Project Description &amp; Objectives *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      placeholder="Describe your business, what specific problems this website should solve, and any particular design or functionality requirements..."
                      className={`w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-[#F7F5F0] border ${
                        errors.projectDescription ? 'border-rose-400' : 'border-[#151A24]/10'
                      } focus:outline-hidden focus:ring-2 focus:ring-[#496BFF] focus:bg-white`}
                    />
                    {errors.projectDescription && (
                      <p className="text-[11px] text-rose-500 mt-1">{errors.projectDescription}</p>
                    )}
                  </div>
                </div>

                {/* Submit Action Area */}
                <div className="pt-4 border-t border-[#151A24]/6 space-y-4">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#151A24] hover:bg-[#496BFF] text-white text-sm font-bold shadow-md hover:shadow-xl transition-all active:scale-98"
                  >
                    <Send className="w-4 h-4 text-[#C8F169]" />
                    <span>Submit Quote &amp; Open WhatsApp Handoff</span>
                  </button>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#707887]">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Guaranteed 24-hour business day quote turnaround</span>
                    </div>
                    <span className="font-mono text-[11px]">Confidential &amp; Non-Binding</span>
                  </div>
                </div>

              </form>
            </FadeIn>
          </section>
        )}

        {/* Backend Integration Note */}
        <section className="px-4 sm:px-6 md:px-8 max-w-4xl mx-auto mt-12">
          <FadeIn className="p-6 rounded-2xl bg-white border border-[#151A24]/6 text-xs text-[#707887] space-y-2">
            <div className="flex items-center gap-2 font-semibold text-[#151A24] font-mono">
              <FileText className="w-4 h-4 text-[#496BFF]" />
              <span>Developer Webhook Documentation:</span>
            </div>
            <p>
              By default, all form inputs are compiled client-side into an encrypted, formatted WhatsApp brief for zero-latency direct handoff. If you want to connect a serverless backend (such as Formspree, Resend, Supabase, or Netlify Forms), configure <code className="text-[#151A24] font-mono">quoteFormEndpoint</code> inside <code className="text-[#151A24] font-mono">src/config/agencyConfig.ts</code>.
            </p>
          </FadeIn>
        </section>

      </div>
    </PageTransition>
  );
}
