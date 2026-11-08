import type { ServiceItem } from '../components/ServiceCard';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-design',
    iconName: 'globe',
    title: 'Website Design & Development',
    tagline: 'Brand & Corporate Portals',
    summary: 'Bespoke business websites and corporate platforms built with Apple-grade aesthetics, responsive architecture, and rapid loading performance.',
    deliverables: [
      'Tailored UI/UX design with typographic hierarchy (Manrope & Inter)',
      'Sub-second responsive frontend engineered in modern React & Tailwind',
      'Mobile-first optimization for high Nigerian smartphone usage',
      'SEO metadata structure, social graph tags & analytics readiness',
      'Accessible, keyboard-friendly navigation & high-contrast aesthetics'
    ],
    solvedProblem: 'Most business websites look like dated templates, load sluggishly on mobile networks, and fail to establish trust with high-value clients or international partners.',
    targetAudience: 'Corporations, law firms, real estate developers, medical clinics, schools, and professional practices looking to command authority in their sector.'
  },
  {
    id: 'ecommerce',
    iconName: 'shopping-bag',
    title: 'E-Commerce Development',
    tagline: 'Online Stores & Hardware Catalogs',
    summary: 'High-conversion online stores with intuitive product catalogues, seamless cart drawers, flexible payment integrations, and automated order handoffs.',
    deliverables: [
      'Custom product catalogue with category & attribute filtering',
      'Frictionless slide-over mini-cart drawer & localized checkout',
      'Direct WhatsApp order confirmation & payment gateway readiness',
      'Technical specification sheets (e.g. solar equipment, industrial goods)',
      'Instant modal search (Cmd+K) & inventory visibility'
    ],
    solvedProblem: 'Nigerian shoppers quickly abandon clunky checkout forms or complex accounts. We engineer rapid, transparent shopping experiences that turn visitors into verified orders.',
    targetAudience: 'Product brands, clean energy suppliers, fashion retailers, luxury lifestyle goods, and wholesale distributors seeking direct sales channels.'
  },
  {
    id: 'business-automation',
    iconName: 'workflow',
    title: 'Business Automation',
    tagline: 'Workflow & Lead Integrations',
    summary: 'Connecting your website forms, WhatsApp, email, and internal tools to eliminate manual repetitive admin and ensure zero dropped leads.',
    deliverables: [
      'Automated inquiry routing directly into your sales WhatsApp & inbox',
      'Custom quote calculators that generate structured customer briefs',
      'Calendar booking integrations (.ICS file & appointment handoffs)',
      'CRM & Google Sheets webhook pipelines for lead tracking',
      'Automated confirmation notifications for customer peace of mind'
    ],
    solvedProblem: 'Valuable customer inquiries get lost in unread inboxes or require staff to manually re-type client details between WhatsApp and spreadsheets. We bridge these gaps with reliable, lightweight automations.',
    targetAudience: 'Busy business founders, operations managers, and customer service teams that want faster turnaround times without hiring extra administrative staff.'
  },
  {
    id: 'website-redesign',
    iconName: 'refresh',
    title: 'Digital Strategy & Website Redesign',
    tagline: 'Modernization & UX Overhaul',
    summary: 'Transforming tired, slow, or broken legacy websites into contemporary digital flagships that immediately reposition your business as an industry leader.',
    deliverables: [
      'Comprehensive UI/UX, speed, and mobile responsiveness audit',
      'Clean typography and layout overhaul inspired by modern tech studios',
      'Content restructuring to emphasize your core commercial value',
      'Preservation of key SEO URLs and search visibility',
      'Modern code refactoring eliminating brittle legacy plugins'
    ],
    solvedProblem: 'A website designed five years ago often signals neglect to prospective clients. We elevate your digital presentation to match the premium quality of your real-world services.',
    targetAudience: 'Established companies that have outgrown their original DIY website, or businesses whose existing site is unresponsive and losing deals to modern competitors.'
  }
];
