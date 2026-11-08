/**
 * ==============================================================================
 * NORTHFORM STUDIOS — CENTRAL CONFIGURATION
 * ==============================================================================
 * Independent Digital Studio combining design, technology, and business thinking.
 * Official Brand Positioning:
 * Northform Studios is an independent digital studio creating thoughtful websites,
 * e-commerce experiences and intelligent digital solutions for modern businesses.
 * 
 * Guiding Philosophy:
 * Minimal design. Intelligent technology. Exceptional execution.
 * 
 * Brand Tagline:
 * BUILT WITH INTENT.
 * ==============================================================================
 */

export interface ProjectConfig {
  id: string;
  slug: string;
  name: string;
  industry: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  intendedAudience: string;
  keyFeatures: string[];
  techStack: string[];
  desktopScreenshot: string;
  mobileScreenshot: string;
  catalogScreenshot?: string;
  previewUrl: string;
  metrics?: { label: string; value: string }[];
}

export interface TeamMember {
  role: string;
  title: string;
  bio: string;
  avatarPlaceholder: string;
  focus: string[];
}

export interface AgencyConfig {
  name: string;
  primaryWordmark: string;
  secondaryWordmark: string;
  tagline: string;
  positioning: string;
  philosophy: string;
  personality: string[];
  headline: string;
  subheadline: string;
  location: string;
  statusText: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  socials: {
    instagram: string;
    linkedin: string;
    twitter: string;
    github?: string;
  };
  quoteFormEndpoint?: string;
  projects: ProjectConfig[];
  team: TeamMember[];
}

export const AGENCY_CONFIG: AgencyConfig = {
  name: "NORTHFORM STUDIOS",
  primaryWordmark: "NORTHFORM",
  secondaryWordmark: "STUDIOS",
  tagline: "BUILT WITH INTENT.",
  positioning: "Northform Studios is an independent digital studio creating thoughtful websites, e-commerce experiences and intelligent digital solutions for modern businesses.",
  philosophy: "Minimal design. Intelligent technology. Exceptional execution.",
  personality: [
    "Minimal",
    "Intelligent",
    "Confident",
    "Modern",
    "Precise",
    "Creative",
    "Premium"
  ],
  headline: "We make digital feel different.",
  subheadline: "Thoughtful design. Intelligent technology. Digital experiences built to move businesses forward.",
  location: "Lagos, Nigeria & Distributed Global Collaborations",
  statusText: "Accepting select client commissions for Q1/Q2",
  email: "hello@northformstudios.com",
  phone: "+234 [PHONE NUMBER]",
  whatsappNumber: "2340000000000",
  whatsappDisplay: "+234 [WHATSAPP NUMBER]",
  socials: {
    instagram: "https://instagram.com/northformstudios",
    linkedin: "https://linkedin.com/company/northformstudios",
    twitter: "https://twitter.com/northformstudio",
    github: "https://github.com/northformstudios"
  },
  quoteFormEndpoint: "",

  projects: [
    {
      id: "estate-one",
      slug: "estate-one",
      name: "Estate One",
      industry: "Real Estate & Architecture",
      tagline: "Architectural luxury & high-net-worth property discovery",
      shortDescription: "A premium property discovery experience designed to make browsing prime residences and requesting viewings effortless and prestigious.",
      fullDescription: "Estate One was designed as a bespoke digital showroom for prime residential acquisitions across Lagos and Abuja. Moving away from cluttered, ad-heavy real estate portals, the platform embraces generous editorial layouts, quiet glassmorphic navigation, high-contrast typography, and intuitive private-advisory inquiry workflows.",
      challenge: "Most real estate portals in Nigeria are overwhelmed with competing banners, slow multi-step filters, and low-trust presentation, causing high-net-worth investors to abandon property inquiries.",
      solution: "We engineered an editorial-grade real estate experience featuring instantaneous search filtering, responsive typography, currency formatting, high-resolution architectural showcase modals, and a frictionless viewing concierge.",
      intendedAudience: "Private family offices, high-net-worth property investors, and expatriates seeking luxury residences in prime enclaves like Banana Island, Ikoyi, Victoria Island, and Maitama.",
      keyFeatures: [
        "Instant multi-parameter residence filtering (location, typology, acquisition status)",
        "Curated architectural photography gallery with keyboard-accessible modal viewing",
        "Private viewing concierge form with automated calendar scheduling handoff",
        "Apple-inspired liquid glass floating navigation with responsive mobile menu",
        "Believable Nigerian property contexts with localized currency calculations"
      ],
      techStack: ["React 19", "TypeScript", "Tailwind CSS", "React Router v7", "Lucide Icons"],
      desktopScreenshot: "/projects/estate-one-desktop.png",
      mobileScreenshot: "/projects/estate-one-mobile.png",
      catalogScreenshot: "/projects/estate-one-properties.png",
      previewUrl: "https://estate-one.netlify.app/",
      metrics: [
        { label: "Design Aesthetic", value: "Editorial Luxury" },
        { label: "Performance", value: "Sub-second SPA" },
        { label: "Device Target", value: "Mobile + Desktop" }
      ]
    },
    {
      id: "maison-kitchen",
      slug: "maison-kitchen",
      name: "Maison Kitchen",
      industry: "Hospitality & Fine Dining",
      tagline: "Contemporary waterfront culinary editorial & reservation interface",
      shortDescription: "A contemporary restaurant website with an atmospheric visual menu experience and seamless table reservation interface.",
      fullDescription: "Conceived for a premier fine-dining establishment situated along the Victoria Island waterfront, Maison Kitchen pairs minimalist Apple-inspired aesthetics with warm culinary storytelling. It eliminates the clunky PDF menu downloads common across Nigerian dining websites in favor of an interactive, search-driven culinary experience.",
      challenge: "High-end restaurants often rely on static social media pages or awkward PDF downloads, creating high reservation drop-offs and poor dining prep visibility.",
      solution: "We crafted an interactive digital experience featuring a dual-mode culinary book (Card Grid vs. Editorial List), sommelier pairings, dietary filters, and an interactive reservation concierge that pre-fills tasting notes and generates calendar files.",
      intendedAudience: "Discerning diners, corporate entertaining coordinators, and food enthusiasts seeking sophisticated dining experiences in Lagos.",
      keyFeatures: [
        "Dual-view culinary catalog (interactive visual cards or refined editorial book view)",
        "Fast-booking reservation dock with real-time party size, date, and seating area selectors",
        "Individual dish showcase with sommelier cellar pairings, prep notes, and chef insights",
        "Interactive arrival map with switchable location pins (Valet staging, Boat jetty, Main entrance)",
        ".ICS calendar generation and simulated reservation management"
      ],
      techStack: ["React 19", "TypeScript", "Tailwind CSS", "React Router v7", "Lucide Icons"],
      desktopScreenshot: "/projects/maison-kitchen-desktop.png",
      mobileScreenshot: "/projects/maison-kitchen-mobile.png",
      catalogScreenshot: "/projects/maison-kitchen-menu.png",
      previewUrl: "https://maison-kitchen.netlify.app/",
      metrics: [
        { label: "Menu Experience", value: "Zero PDF Drops" },
        { label: "Booking Flow", value: "3-Step Concierge" },
        { label: "Interface", value: "Translucent Glass" }
      ]
    },
    {
      id: "solara-energy",
      slug: "solara-energy",
      name: "Solara Energy",
      industry: "Clean Energy & E-Commerce",
      tagline: "Product-focused solar hardware store & commercial sizing experience",
      shortDescription: "A clean, modern e-commerce platform demonstration for solar equipment, hybrid inverters, and turnkey energy solutions.",
      fullDescription: "Solara Energy re-imagines clean-tech e-commerce for Nigerian households and commercial enterprises. With power reliability at the forefront of business decision-making, the platform delivers transparent technical specifications, intelligent load sizing inquiries, instant Cmd+K search, and a smooth cart and checkout flow.",
      challenge: "Solar equipment buying in Nigeria is traditionally plagued by opaque pricing, confusing technical jargon, and unreliable quote turnarounds.",
      solution: "We designed a transparent, modern e-commerce storefront with intuitive capacity filtering (kVA, kWh, battery chemistry), instant system configuration quote requests, and an Apple Store-grade checkout flow.",
      intendedAudience: "Homeowners, small business operators, and enterprise facility managers seeking reliable solar inverter and battery backup solutions.",
      keyFeatures: [
        "Modern hardware store catalogue with kVA ratings, battery specs, and price transparency",
        "Interactive load sizing inquiry modal with rapid system estimation",
        "Slide-over mini-cart drawer and localized checkout simulation with delivery calculation",
        "Instant keyboard-driven Cmd+K product catalog search",
        "Clean specification tables and high-contrast clean tech photography"
      ],
      techStack: ["React 19", "TypeScript", "Tailwind CSS", "React Router v7", "Lucide Icons", "Confetti"],
      desktopScreenshot: "/projects/solara-energy-desktop.png",
      mobileScreenshot: "/projects/solara-energy-mobile.png",
      catalogScreenshot: "/projects/solara-energy-shop.png",
      previewUrl: "https://solaraenergy1.netlify.app/",
      metrics: [
        { label: "Checkout Flow", value: "Frictionless SPA" },
        { label: "Product Clarity", value: "Full Hardware Specs" },
        { label: "Lead Capture", value: "Instant Quote Modal" }
      ]
    }
  ],

  team: [
    {
      role: "Creative Direction & UI/UX",
      title: "Lead Brand Strategist & UI Director",
      bio: "Focuses on high-craft visual identity, editorial typography, and minimalist digital experiences that elevate business credibility.",
      focus: ["Art Direction", "Design Systems", "Prototyping", "User Research"],
      avatarPlaceholder: "CD"
    },
    {
      role: "Engineering & Technical Architecture",
      title: "Principal Full-Stack Engineer",
      bio: "Architects fast, responsive web applications, robust e-commerce architectures, and automated business workflows.",
      focus: ["React / TypeScript", "Tailwind CSS", "API Integration", "Performance & SEO"],
      avatarPlaceholder: "PE"
    },
    {
      role: "Product Strategy & Client Solutions",
      title: "Digital Growth & Delivery Lead",
      bio: "Bridges client business goals with practical digital solutions, ensuring transparent milestones and prompt project delivery.",
      focus: ["Client Advisory", "Workflow Automation", "Conversion Optimization", "Project Delivery"],
      avatarPlaceholder: "PL"
    }
  ]
};

export function buildWhatsAppUrl(message: string): string {
  const cleanNumber = AGENCY_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedMsg}`;
}
