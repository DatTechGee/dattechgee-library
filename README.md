# PROJECT TEMPLATE — Built from 11 Website / App Analyses

A production-ready project template built by reverse engineering 11 live commercial
websites and apps and extracting every common pattern, tech stack choice, and
design decision.

---

## SITES ANALYZED

| # | Site | Type | Tech Found |
|---|------|------|-----------|
| 1 | shamounlibrary.com | Digital library | React 19.2 + Vite + TW4 + shadcn/ui + Satoshi font |
| 2 | doxaxprience.com | Business enablement | React + Vite + TW4 + shadcn/ui + Satoshi + marquee + glassmorphism |
| 3 | joshuayunusa.com | Education platform | React 19.2.3 + Vite + TW4 + shadcn/ui + NeurialGrotesk |
| 4 | nomjet.co.uk | Food delivery app | React 19.2.3 + Vite + TW4 + shadcn/ui + Fraunces + Jakarta Sans |
| 5 | igboclass.com | Language classes | React + Vite + TW4.1.3 + shadcn/ui + NeurialGrotesk + gradient-wave |
| 6 | chateaudelaray.com | Luxury hotel | React + Vite + TW4.1.15 + shadcn/ui + Satoshi + dark purple/gold |
| 7 | rootmylk.com | Beverage brand | React + Vite + TW3 + shadcn/ui + NeurialGrotesk + Inter + coffee/gold |
| 8 | altiorcrm.com | E-commerce CRM | React + Vite + TW4 + Mantine v7 + BlockNote editor + TanStack Query |
| 9 | nikhiledutech.com | Trading education | **Next.js** + TW3 + Framer Motion + Lucide + NeurialGrotesk + purple gradient scrollbar |
| 10 | winifredayeniwellness.com | Wellness / personal brand | Vite 7 + React 19.1 + **TanStack Router** + TW4 + Satoshi + BlockNote + Stripe + recharts + cream/gold/sage palette |
| 11 | EchoMail (echomail-frontend.vercel.app) | Email marketing app | Vite 7 + React 19.1 + **TanStack Router** + TW4 + NeurialGrotesk + BlockNote + recharts + auth + dashboard shell |

> Full per-site library & framework inventory (verified from production bundles): see [LIBRARIES.md](./LIBRARIES.md)

---

## 🎯 HOW A BUILD WORKS — YOU PICK THE SITE, I BUILD EXACTLY LIKE IT

This template is not "invent your own design" — it is a **catalog of finished,
real sites**. Every time you want a new website:

1. The AI shows you this **site picker** below (11 reference looks).
2. You say which one you want: e.g. *"build it like winifred"* / *"like chateaude laray"* / *"like echomail"*.
3. The AI enters **EXACT-REPLICA MODE**: it reads that site's recipe in
   `DESIGN-SYSTEM.md` and `LIBRARIES.md` (and for S10/S11 the site's REAL source
   files; for S01–S09 the live site) and **rebuilds it exactly** — same grid
   layouts & column counts, same hero positions & floating badges, same cards,
   same animation stagger/easing/timing, same transitions, same headers and
   navbars, same buttons, same colors and fonts — with only your brand content
   swapped in.

If it ever starts inventing a design that matches none of these, stop it and
say: *"no, use [site name] as the template."*

### THE SITE PICKER
| # | Pick this | For building | Look & feel |
|---|---|---|---|
| 1 | **shamounlibrary** | libraries, archives, events | blue + gold, Satoshi |
| 2 | **doxaxprience** | logistics / business services | navy + gold, marquee, glassmorphism |
| 3 | **joshuayunusa** | education / courses | NeurialGrotesk, BlockNote editor |
| 4 | **nomjet** | food delivery / apps | Fraunces serif + Jakarta, phone mockups |
| 5 | **igboclass** | language classes / communities | green + gradient-wave hero |
| 6 | **chateaudelaray** | hotels / luxury | dark purple + gold, GSAP, Stripe |
| 7 | **rootmylk** | e-commerce / brands | coffee + metallic gold, Redux, Stripe |
| 8 | **altiorcrm** | CRM / SaaS admin | Mantine, BlockNote, PDF export |
| 9 | **nikhiledutech** | trading / finance education | Next.js look, gradient module cards, carousel |
| 10 | **winifredayeniwellness** | wellness / personal brand / blog-shop | cream + gold + sage, Satoshi, TanStack Router, Stripe, dashboard — **offline source: `references/winifred`** (live: winifredwellness.com) |
| 11 | **EchoMail** | email marketing / SaaS dashboard | NeurialGrotesk, blue shadcn, BlockNote, recharts, auth + dashboard — **offline source: `references/echomail`** (live: echomail-frontend.vercel.app) |

> **ALL 11 sites are offline-proof.** Rows 1–9 have their live HTML+CSS+JS bundles
> committed at `references/sites/<site>/`; rows 10–11 have full source at
> `references/winifred` / `references/echomail`. No site needs to be online to be rebuilt.
> The live URLs above are only color/reference backups.

Full recipe for each site: `DESIGN-SYSTEM.md` §S01–§S11 → the prompt is already
in `AI-PROMPTS.md #1` (Reference-Site Build).

---

## UNIVERSAL TECH STACK (used by ALL 11 sites)

```
Framework:    React 19.x (latest)
Build tool:   Vite (fast dev, optimized builds)
Styling:      Tailwind CSS v4 (v3 for rootmylk/nikhiledutech)
UI Library:   shadcn/ui (all sites; altiorcrm adds Mantine v7)
Routing:      React Router DOM (sites 1–8) OR TanStack Router file-based (sites 10–11)
Animations:   Framer Motion + CSS keyframes (+ GSAP on nomjet/chateau)
Icons:        Lucide React (+ @heroicons on winifred)
Fonts:        Self-hosted OTF (Satoshi / NeurialGrotesk / Fraunces / Plus Jakarta Sans / Inter)
SEO:          JSON-LD structured data, OG tags, Twitter cards, PWA manifest
Hosting:      Vite build → static deploy (Vercel / Cloudflare)
```

---

## DESIGN PATTERNS EXTRACTED

### Color Systems (all use CSS custom properties)
```
Light:  white bg, near-black text, primary/accent per brand
Dark:   deep navy/purple bg, white text, gold/amber accent
All use HSL CSS variables (--primary, --secondary, --accent, --background, etc.)
```

### Brand Color Palettes Found
```
shamounlibrary:   #1E5BA8 (blue)   + #F4B941 (gold)
doxaxprience:     #0A1128 (navy)   + #E5B800 (gold)
nomjet:           #F59A15 (amber)  + #F8F5F1 (cream)
igboclass:        #10B981 (green)  + animated gradient-wave
chateaudelaray:   #1F0A33 (purple) + #C7985F (gold)
rootmylk:         #3C1E0A (brown)  + #D4AF37 (metallic gold)
altiorcrm:        #2979FF (blue)   + Mantine blue scale
winifred:         #FAF8F4 (cream)  + #B38B59 (gold) + #D4956F (terracotta) + #9BAA88 (sage)
echomail:         shadcn blue oklch scale — primary: oklch(0.546 0.245 262)
```

### Fonts Used (all self-hosted)
```
Satoshi:        Shamoun, Doxaxprience, Chateau, winifred (modern geometric sans)
NeurialGrotesk: Joshua, Igbo, RootMilk, echomail (grotesk with personality)
Fraunces:       NomJet (variable serif for display)
Plus Jakarta Sans: NomJet (clean sans for body)
Inter:          RootMilk (system-quality sans)
```

### Animation Patterns
```
1. Scroll-triggered reveal:    opacity 0 → 1, y ±24px (Framer Motion whileInView)
2. Staggered card grids:       0.08s delay between siblings
3. Infinite marquee:           CSS translate(-50%) loop, 60s, pause on hover
4. Aurora gradient hero:       400% background-size, position animation
5. Glassmorphism cards:        backdrop-blur-xl + bg-white/5
6. Phone frame mockups:        aspect-ratio 9/19.5, dark border-radius
7. Gradient text headings:     bg-clip-text + text-transparent
8. FAQ accordion:              AnimatePresence + height: auto
9. Custom scrollbar:           Webkit scrollbar, primary-colored thumb
10. Ambient glows:             Absolute blurred circles behind sections
```

---

## LIBRARIES & FRAMEWORKS (verified)

Every library below was confirmed by scanning the production JS/CSS bundles of
the live sites. Full per-site evidence table: see [LIBRARIES.md](./LIBRARIES.md)

```
SAFE CORE (ship by default):
React 19 + TypeScript + Vite           ← every site
Tailwind CSS v4 + shadcn/ui (Radix)    ← all except altiorcrm (Mantine v7)
Framer Motion                          ← 11/11
Lucide React (icons)                   ← 11/11
React Router DOM / TanStack Router     ← 10/11 (nikhiledutech = Next.js Link)
@tanstack/react-query                  ← data fetching, 9/11
axios                                  ← HTTP client, 10/11
zustand                                ← small app state, 7/11

ON-DEMAND (only when feature needs it):
Payload CMS (headless backend)         ← 5/11 content sites
BlockNote / Tiptap / ProseMirror       ← rich-text editors (rootmylk, joshua, altior, winifred, echomail)
Mantine v7                             ← altior + joshua (+ BlockNote peer)
GSAP                                   ← nomjet + chateau (hero/ticker)
Lenis (smooth scroll)                  ← nomjet
jsPDF + autotable (PDF export)         ← igboclass, chateau, altior
zod (validation)                       ← joshua, igboclass, winifred, echomail
recharts (charts)                      ← winifred, echomail dashboards
react-helmet-async (per-route SEO)     ← altior
Payments: Paystack / Flutterwave / Stripe ← pick per market
Analytics/chat: Google Tag Manager, Tawk.to, Cloudflare Web Analytics
```

---

## FOLDER STRUCTURE

```
PROJECT-TEMPLATE/
├── index.html                     # SEO meta tags, OG, JSON-LD, PWA
├── package.json                   # All dependencies
├── vite.config.ts                 # Vite + React + Tailwind plugin
├── tsconfig.json                  # Strict mode, path aliases
├── AI-PROMPTS.md                  # Copy-paste prompts for AI builds
├── DESIGN-SYSTEM.md               # MASTER catalog: sections, cards, grids, placement
├── LIBRARIES.md                   # Verified per-site library/framework inventory
├── README.md                      # This file
├── references/                    # 🔒 OFFLINE-PROOF reference source (no internet needed)
│   ├── winifred/                  #   full S10 source: src/ + fonts + package.json
│   ├── echomail/                  #   full S11 source: src/ + fonts + package.json
│   └── sites/                     #   S01–S09 live HTML+CSS+JS bundles per site
├── public/
│   ├── site.webmanifest           # PWA manifest
│   └── fonts/                     # Self-hosted font files (.otf/.woff2)
├── scripts/
│   └── setup.sh                   # npm install + dev shortcut
└── src/
    ├── main.tsx                   # React entry point
    ├── App.tsx                    # Providers + BrowserRouter
    ├── routes.tsx                 # All routes
    ├── config/
    │   └── site.ts                # Site name, nav, socials, colors
    ├── styles/
    │   └── globals.css            # Design tokens + animations + utilities
    ├── components/
    │   ├── ui/                    # shadcn/ui + card primitives
    │   │   ├── button.tsx         # Button with variants
    │   │   ├── card.tsx           # Card + Header + Title + Content
    │   │   ├── badge.tsx          # Badge with variants
    │   │   ├── avatar.tsx         # Avatar + Image + Fallback
    │   │   ├── input.tsx          # Input field
    │   │   ├── textarea.tsx       # Textarea field
    │   │   ├── sonner.tsx         # Toast notifications
    │   │   ├── feature-card.tsx   # 5 variants: icon/image/minimal/numbered/highlight
    │   │   ├── image-card.tsx     # 5 variants: default/product/blog/overlay/phone
    │   │   ├── pricing-card.tsx   # Pricing with highlighted "Most Popular"
    │   │   ├── stat-card.tsx      # 4 variants: default/large/inline/gradient
    │   │   ├── course-card.tsx    # Gradient-accented module card (nikhiledutech pattern)
    │   │   ├── team-card.tsx      # 3 variants: default/minimal/overlay
    │   │   ├── testimonial-card.tsx # 3 variants: default/minimal/featured
    │   │   └── index.ts           # Barrel export (import from "@/components/ui")
    │   ├── layout/
    │   │   ├── Navbar.tsx         # Fixed nav with mobile drawer + theme toggle
    │   │   ├── Footer.tsx         # Multi-column footer
    │   │   └── Container.tsx      # max-w-7xl wrapper
    │   ├── sections/
    │   │   ├── HeroSection.tsx    # Hero with gradients + stats + scroll hint
    │   │   ├── StatsSection.tsx   # 2/4-stat grid row
    │   │   ├── LogoShowcaseSection.tsx # Static trust strip
    │   │   ├── TickerSection.tsx  # Infinite marquee
    │   │   ├── BenefitsSection.tsx # Alternating image+text 2-col
    │   │   ├── FeaturesSection.tsx # Card grid with stagger
    │   │   ├── ProcessSection.tsx  # How-it-works 3 steps
    │   │   ├── PricingSection.tsx  # 3-column pricing w/ highlight
    │   │   ├── TestimonialsSection.tsx # 3-col quote grid
    │   │   ├── GallerySection.tsx  # Mixed aspect masonry
    │   │   ├── TeamSection.tsx     # Avatar card grid
    │   │   ├── FAQSection.tsx      # Accordion FAQ
    │   │   ├── NewsletterSection.tsx # Email capture
    │   │   ├── CTASection.tsx     # Full-width dark band
    │   │   └── ContactSection.tsx # Form with validation
    │   ├── shared/
    │   │   ├── animations.tsx     # Reveal, StaggerGroup, StaggerItem, ScrollFade
    │   │   ├── social-links.tsx   # Color-coded social icons (nikhiledutech pattern)
    │   │   └── image-carousel.tsx # Featured image + thumbnail strip (nikhiledutech pattern)
    │   └── icons/
    │       └── index.tsx          # BrandLogo, WhatsAppIcon + custom SVGs
    ├── pages/
    │   ├── HomePage.tsx           # Composes all sections
    │   ├── AboutPage.tsx          # Story + team
    │   └── NotFoundPage.tsx       # 404 page
    ├── hooks/
    │   └── index.ts               # useScrollPosition, useDebounce, useMediaQuery
    ├── lib/
    │   ├── utils.ts               # cn() — clsx + tailwind-merge
    │   └── index.ts               # Re-exports
    ├── providers/
    │   ├── ThemeProvider.tsx       # Light/dark toggle with localStorage
    │   └── LenisProvider.tsx      # Smooth scroll
    ├── types/
    │   └── index.ts               # All shared TypeScript interfaces
    └── data/
        └── index.ts               # Static content data
```

---

## HOW TO USE THIS TEMPLATE

### Option A: Quick Start (recommended — pick-your-site)
1. Copy the `PROJECT-TEMPLATE` folder
2. Open `AI-PROMPTS.md` → use Prompt #1 (Reference-Site Build)
3. The AI shows the site picker (see "HOW A BUILD WORKS" above) → you choose
   which reference site to clone
4. Fill in only your brand name, colors (leave existing if you want it identical),
   pages, and content
5. The AI rebuilds that site exactly → run `npm install && npm run dev`

### Option B: Full AI Build
1. Open `AI-PROMPTS.md` → copy Prompt #10 (Blank Start)
2. Paste into AI with full business details
3. AI reads all template files and builds your custom site
4. Review and iterate

### Option C: Manual Build
1. Copy the template folder
2. Fill in all `{{PLACEHOLDERS}}` in config, HTML, and CSS
3. Run `npm install && npm run dev`
4. Build section by section using the templates in `components/sections/`

---

## KEY CONFIGURATION POINTS

Edit these files to customize for your project:

| File | What to change |
|------|---------------|
| `src/config/site.ts` | Site name, nav links, socials, contact info |
| `src/styles/globals.css` | Brand colors (HSL), fonts, animation timing |
| `src/components/layout/Navbar.tsx` | Navigation links and CTA button |
| `src/components/layout/Footer.tsx` | Footer columns and links |
| `src/data/index.ts` | Features, testimonials, pricing, FAQs |
| `src/types/index.ts` | Add new TypeScript types as needed |
| `index.html` | SEO meta tags, structured data, PWA manifest |
| `public/site.webmanifest` | PWA app name and icons |

---

## NPM SCRIPTS

```
npm run dev       → Start dev server (Vite)
npm run build     → Production build
npm run preview   → Preview production build
npm run lint      → ESLint check
npm run typecheck → TypeScript strict check
```
