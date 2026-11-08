# NORTHFORM STUDIOS — Official Digital Studio Platform

An editorial-grade, creative technology web platform for **NORTHFORM STUDIOS**, an independent digital studio combining design, engineering, and business thinking to build high-quality digital experiences.

---

## 1. Brand Identity & Visual Language

- **Studio Name**: **NORTHFORM STUDIOS**
- **Typographic Wordmark**: `NORTHFORM` (bold geometric sans, tight tracking) paired with `STUDIOS` (refined secondary label with wide letter-spacing).
- **Geometric N Monogram**: An architectural, structural SVG monogram featuring bold vertical pillars, a crisp diagonal strut in Electric Blue, and a precision Lime micro-accent. Usable at all scales from favicon to header.
- **Colour Architecture**:
  - **Midnight Ink** (`#151A24`): Primary typography, high-contrast dark sections, and structured framing.
  - **Warm Ivory** (`#F7F5F0`): Large editorial background canvas.
  - **White** (`#FFFFFF`): Elevated content surfaces and cards.
  - **Electric Blue** (`#496BFF`): Primary interactive CTAs, active route indicators, and key focus states.
  - **Ice Blue** (`#DCE5FF`): Subtle status badges and soft visual tints.
  - **Slate** (`#707887`): Secondary body typography and metadata labels.
  - **Lime Accent** (`#C8F169`): High-impact micro-highlights (status dot, CTA arrows, precision accents).

---

## 2. Motion & Interaction Design System

Engineered using **Framer Motion** with full respect for `prefers-reduced-motion`:

1. **Page Entrance (`PageTransition`)**: Smooth upward drift and opacity fade on every route change.
2. **Hero Staggered Reveal (`HeroHeadlineReveal`)**: Masked word-by-word reveal for *"We make digital feel different."*, followed by timed entrances for the supporting narrative and CTAs.
3. **Viewport Scroll Reveals (`FadeIn`, `StaggerContainer`, `StaggerItem`)**: Sections and repeated cards enter viewport with slight vertical travel and staggered timing.
4. **Interactive Hero Visual (`HeroVisual`)**: Architectural 3D plane with real-time mouse parallax, multi-layer depth, and internal grid lines.
5. **Interactive Controls & Buttons**: Subtle elevation on hover (`whileHover={{ y: -2 }}`), refined press feedback (`whileTap={{ scale: 0.98 }}`), and active navigation spring indicators.
6. **Portfolio Elevation**: Smooth image zoom (`group-hover:scale-[1.03]`) and subtle card elevation with soft ambient shadows.

---

## 3. Running Locally

```bash
# Navigate to the project directory
cd C:\Users\Hp\.gemini\antigravity\scratch\agency-website

# Start the development server
npm run dev
```

Open `http://localhost:5173/` in your browser.

### Production Build & Preview

```bash
# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 4. Central Configuration

Studio variables, WhatsApp numbers, email addresses, and project demo links are managed centrally in:

📁 **`src/config/agencyConfig.ts`**

- **WhatsApp Number**: Update `whatsappNumber` (e.g. `"2348012345678"`).
- **Email**: Update `email` (`hello@northformstudios.com`).
- **Demo Links**: Add hosted demo URLs in `projects[n].previewUrl` once deployed on Vercel/Netlify to activate the "Launch Live Demo" buttons.
