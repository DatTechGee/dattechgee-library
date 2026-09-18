# AI PROMPTS GUIDE

Use these prompts when working with an AI to build a new project using this
template. Copy the section you need into your chat.

**IMPORTANT FIRST STEP for every build:**
Tell the AI to READ these two files BEFORE writing any code:
- `C:\Users\DatTechGee\Documents\Default Project\PROJECT-TEMPLATE\DESIGN-SYSTEM.md`
  → contains ALL section layouts, card variants, grid rules, placement rules, and
  per-site recipes §S01–§S11
- `C:\Users\DatTechGee\Documents\Default Project\PROJECT-TEMPLATE\src\styles\globals.css`
  → design tokens + animation keyframes + utility classes

**Libraries reference:**
- `C:\Users\DatTechGee\Documents\Default Project\PROJECT-TEMPLATE\LIBRARIES.md`
  → per-site library/framework inventory, verified from real production bundles.
  Read if the AI asks which packages to install, or if your project has special
  needs (payments, rich-text editor, PDF export, analytics).

---

## ⭐ 0. THE SITE PICKER — ALWAYS ASK BEFORE BUILDING

**This is the most important rule.** This template is a catalog of **real,
finished sites**. Your AI must NEVER invent a brand-new design. Instead:

1. Show the user the picker table below.
2. Ask: **"Which site should I build it like?"**
3. Once they pick one, read that site's recipe in `DESIGN-SYSTEM.md` (§S01–§S11)
   and `LIBRARIES.md`, then **rebuild that site exactly** — same section order,
   same cards, same colors, same fonts, same animations — with only the brand
   name, colors (only if requested), pages, and content swapped.
   For the full look, open the site's committed offline bundle in
   `PROJECT-TEMPLATE\references\sites\<site>\` (S01–S09) or the full source in
   `references\winifred` (S10) / `references\echomail` (S11).

| # | Pick this | Use it for | Look & feel |
|---|---|---|---|
| S01 | **shamounlibrary** | libraries, archives, events | blue + gold, Satoshi |
| S02 | **doxaxprience** | logistics, business services | navy + gold, marquee, glass |
| S03 | **joshuayunusa** | education, courses | NeurialGrotesk, editor |
| S04 | **nomjet** | food delivery, apps | Fraunces serif, phone mockups |
| S05 | **igboclass** | language classes, communities | green gradient-wave hero |
| S06 | **chateaudelaray** | hotels, luxury | dark purple + gold, GSAP |
| S07 | **rootmylk** | e-commerce, brands | coffee + metallic gold, Redux |
| S08 | **altiorcrm** | CRM, SaaS admin | Mantine, tables, PDF export |
| S09 | **nikhiledutech** | trading, finance education | gradient module cards, carousel |
| S10 | **winifredayeniwellness** | wellness, personal brand, shop+blog | cream + gold + sage, Satoshi, TanStack Router, Stripe, cart, dashboard |
| S11 | **EchoMail** | email marketing, SaaS dashboard | NeurialGrotesk, blue shadcn, BlockNote, recharts, auth + dashboard |

If the user doesn't specify, list the picker and ask. Do NOT proceed until they pick.

---

## ⭐ 0b. EXACT-REPLICA CONTRACT (binding — the AI must satisfy every line)

When a site is picked, EXACT-REPLICA MODE is ON. The AI must match the reference
site in EVERY respect below, then ONLY swap brand content. **No creative license.**

| # | What must match the reference EXACTLY |
|---|----------------------------------------|
| 1 | **Grid layouts** — same column counts (`grid-cols-*`), same breakpoints, same gaps, same max-width container, same padding/margins, same section ordering |
| 2 | **Positions** — same placement of hero images/collage/stat badges, same floating-card offsets, same vertical rhythms, same vertical rules/ornaments |
| 3 | **Cards** — same card component, same inner structure, same radii, same shadows, same hover transforms, same divider styles, same icon usage |
| 4 | **Animations** — same variants: same initial/animate values, same stagger delays (e.g. 0.11s step), same durations, same easing curves (e.g. `[0.22,1,0.36,1]`), same `whileInView` once behavior, same `layoutId` pill effects |
| 5 | **Transitions** — same navbar scroll behavior, same dropdown/menu AnimatePresence, same drawer/mobile-menu spring, same hover blur/scale/translate timings |
| 6 | **Headers & typography** — same navbar links/structure, same headline sizes (`clamp(...)`), same eyebrow/label styles, same tracking, same font weights, same footer headers |
| 7 | **Buttons & forms** — same pill/radius, same gradient fills, same shadow colors, same focus rings, same input chrome |
| 8 | **Colors, scrollbar, dark mode** — copy the reference's exact token block into `globals.css` (hex or oklch as the source uses) |
| 9 | **Route structure** — same page set, same URL slugs, same layout guards (for dashboards) |
| 10 | **Libraries** — only what the reference ships (see LIBRARIES.md); nothing extra, nothing missing |

**Reference sources (use the local snapshot FIRST — offline-proof; live URL only as a backup):**
```
S01 shamounlibrary.com          → PROJECT-TEMPLATE\references\sites\shamounlibrary  (live HTML+CSS+JS bundles)
                                  live backup: https://shamounlibrary.com
S02 doxaxprience.com            → PROJECT-TEMPLATE\references\sites\doxaxprience  (live HTML+CSS+JS bundles)
                                  live backup: https://doxaxprience.com
S03 joshuayunusa.com            → PROJECT-TEMPLATE\references\sites\joshuayunusa  (live HTML+CSS+JS bundles)
                                  live backup: https://joshuayunusa.com
S04 nomjet.co.uk                → PROJECT-TEMPLATE\references\sites\nomjet  (live HTML+CSS+JS bundles)
                                  live backup: https://nomjet.co.uk
S05 igboclass.com               → PROJECT-TEMPLATE\references\sites\igboclass  (live HTML+CSS+JS bundles)
                                  live backup: https://igboclass.com
S06 chateaudelaray.com          → PROJECT-TEMPLATE\references\sites\chateaudelaray  (live HTML+CSS+JS bundles)
                                  live backup: https://chateaudelaray.com
S07 rootmylk.com                → PROJECT-TEMPLATE\references\sites\rootmylk  (live HTML+CSS+JS bundles)
                                  live backup: https://rootmylk.com
S08 altiorcrm.com               → PROJECT-TEMPLATE\references\sites\altiorcrm  (live HTML+CSS+JS bundles)
                                  live backup: https://altiorcrm.com
S09 nikhiledutech.com           → PROJECT-TEMPLATE\references\sites\nikhiledutech  (live HTML+CSS+Next.js chunks)
                                  live backup: https://nikhiledutech.com
S10 winifredayeniwellness       → PROJECT-TEMPLATE\references\winifred  (FULL source, fonts included)
                                  live backup: https://winifredwellness.com
S11 EchoMail                    → PROJECT-TEMPLATE\references\echomail  (FULL source, fonts included)
                                  live backup: http://echomail-frontend.vercel.app
```

> **Offline-proof rule (ALL sites):** S01–S11 NEVER need the internet.
> S10/S11 have full committed source (index.css, Layout, HomeSections, routes, fonts,
> package.json). S01–S09 have committed production bundles
> (`references\sites\<site>\index.html` = full rendered markup, `styles_css_1.css` =
> full design token + layout spec, `app_js_1.js`/`chunk_*.js` = animation + behavior).
> If any live site dies, builds still work 100%. If a site's JS-only behavior (e.g.
> framer-motion variants) is unclear from its bundle, use the §S## recipe in
> DESIGN-SYSTEM.md as the fallback spec.

**Sign-off before finishing:** the AI must report a checklist — grid, positions,
cards, animations, transitions, headers, buttons, colors, routes, libs — each
marked ✅ "matches reference exactly". Anything not 1:1 must be listed instead of
hidden.

---

## 1. REFERENCE-SITE BUILD PROMPT ⭐ (recommended — use this for every new site)

```
I'm using the template at C:\Users\DatTechGee\Documents\Default Project\PROJECT-TEMPLATE

FIRST — read these files in order:
- DESIGN-SYSTEM.md        (site recipes §S01–§S11 + generic rules)
- LIBRARIES.md            (what each site ships, stack evidence)
- src/styles/globals.css  (design tokens + keyframes)
- src/config/site.ts      (config structure)

STEP 1 — SITE PICKER: show me the reference-site table from DESIGN-SYSTEM.md §0
and ask me which site to build it like. WAIT for my answer before writing code.

MY PICK: [SITE NAME or number, e.g. S10 winifredayeniwellness]

STEP 2 — ONCE I PICK, build in EXACT-REPLICA MODE (see §0b):
- OPEN the chosen site's REAL source when available (snapshot/source list below)
  and copy its grid layouts, column counts, gaps, paddings, card markup, animation
  timings, transition easings, header styles, hero layouts, font sizes — line for line.
- The reference bundles are committed in the template (see REAL SOURCE LOCATIONS
  below) — always read from there; only webfetch the LIVE site if a snapshot is missing.
- Use ITS exact section order (recipe in DESIGN-SYSTEM.md)
- Use ITS exact cards, colors, fonts, buttons, and animations
- Swap in ONLY: my brand name, domain, and the content I give you
- Do NOT invent a new design, do NOT mix sites, do NOT "improve" the look.
  Do NOT rewrite a card "cleaner" or "nicer" than the original.
- If a section of the chosen site doesn't fit my business, say so and ask,
  otherwise keep the full layout identical

REAL SOURCE LOCATIONS (snapshots committed in the template — work OFFLINE):
- S10 winifred → PROJECT-TEMPLATE\references\winifred  (full src + fonts + package.json)
- S11 EchoMail → PROJECT-TEMPLATE\references\echomail  (full src + fonts + package.json)
- S01–S09 → PROJECT-TEMPLATE\references\sites\<site>\  (committed live HTML + CSS + JS
  bundles for every site — index.html has full rendered markup, the CSS carries the
  exact token/layout spec, the JS carries animation + behavior). If a bundle is unclear
  in a baked-out (non-SSR) SPA, use the §S## recipe in DESIGN-SYSTEM.md as fallback.
  Live URLs only as a backup.

AFTER BUILDING — run: npm install && npm run dev, then confirm it's live.

MY BUSINESS DETAILS:
- Name: [YOUR SITE NAME]
- Domain: [yourdomain.com]
- Type: [what you sell / who it's for]
- Pages needed: [list pages]
- Content: [headline, products/services, testimonials, contact info]
- Colors: [ONLY if you want to change the reference site's colors]
```

---

## 2. FULL WEBSITE BUILT FROM SCRATCH PROMPT

```
Build a complete [TYPE OF WEBSITE] using this exact stack:

=> FIRST: READ C:\Users\DatTechGee\Documents\Default Project\PROJECT-TEMPLATE\DESIGN-SYSTEM.md
   Use it to choose the RIGHT sections, card variants, and grid layouts
   for a [TYPE OF WEBSITE].
   => First give me a plan of which sections to include (in page order)
   and which card variants to use, THEN build it.

STACK (do NOT deviate from these):
- React 19 + TypeScript + Vite
- Tailwind CSS v4 with CSS-first configuration
- shadcn/ui component library (Card, Button, Badge, Input, Textarea,
  Avatar, FeatureCard, ImageCard, PricingCard, StatCard, TeamCard,
  TestimonialCard)
- Framer Motion for animations
- Lucide React for icons
- React Router DOM for routing
- Sonner for toast notifications
- Lenis for smooth scrolling
- @tanstack/react-query for data fetching
- axios for HTTP requests
- zustand for light global state
- If your last app uses a rich-text/blog editor → add BlockNote (bundles
  Tiptap + ProseMirror). If it needs PDF export → add jspdf. If payments →
  add only Paystack (NGN) / Flutterwave (NGN+) / Stripe (global) as needed.
  Reference C:\Users\DatTechGee\Documents\Default Project\PROJECT-TEMPLATE\LIBRARIES.md
  for what the 11 analyzed production sites actually ship.

DESIGN SYSTEM:
- Use shadcn/ui HSL CSS variables in src/styles/globals.css
- Primary color: [YOUR HEX] → convert to HSL and update --primary
- Accent color: [YOUR HEX] → convert to HSL and update --accent
- Font: [Font Name] — self-host as OTF/WOFF2 in public/fonts/
  - Update --font-sans in globals.css
  - For display/heading font use: var(--font-display)
- Dark mode: update .dark class in globals.css
- Border radius: --radius: 0.625rem

ANIMATION PATTERNS (used by production sites):
- Hero: fade-in-up with 0.1s stagger per child
- Cards: stagger on scroll using whileInView + viewport once:true
- FAQ: AnimatePresence with height: auto expand/collapse
- Marquee: CSS animation scroll-left/right, 60s loop, pause on hover
- Phone mockup: aspect-ratio: 9/19.5 with dark border-radius frame
- Gradient text: bg-gradient-to-r + bg-clip-text + text-transparent
- Glassmorphism: backdrop-blur-xl + bg-white/5 + border border-white/10
- Ambient glows: absolute positioned blurred circles (-z-10)

FOLDER STRUCTURE:
src/
  config/site.ts       → site name, nav, socials, colors
  pages/               → one file per route
  components/
    ui/                → shadcn/ui primitives (Button, Card, Badge, Input)
    layout/            → Navbar, Footer, Container
    sections/          → reusable page sections (Hero, Features, FAQ, Contact)
    shared/            → animation wrappers (Reveal, StaggerGroup, StaggerItem)
    icons/             → custom SVG icon components
  hooks/               → useScrollPosition, useMediaQuery, useDebounce
  lib/utils.ts         → cn() utility (clsx + tailwind-merge)
  providers/           → ThemeProvider, LenisProvider
  types/index.ts       → shared TypeScript interfaces
  data/index.ts        → static data (features, testimonials, pricing)
  styles/globals.css   → design tokens + animation keyframes + utility classes

SEO REQUIREMENTS (from all 11 analyzed sites):
- Every page needs: title, meta description, OG tags, Twitter card tags
- Include JSON-LD structured data in index.html
- Add favicon set: favicon.ico, favicon-16x16.png, favicon-32x32.png,
  apple-touch-icon.png, android-chrome-192x192.png, android-chrome-512x512.png
- Include site.webmanifest for PWA support
- Add robots.txt and sitemap.xml

BUILD THE FOLLOWING PAGES:
1. Home page — Hero, features grid, ticker/marquee, testimonials, FAQ, contact
2. About page — Story, team grid, values
3. [ADDITIONAL PAGES YOU NEED]

COMPONENT STYLING RULES:
- All interactive elements need min-height: 44px (touch target)
- Use hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 on cards
- Use text-muted-foreground for body text, not black
- Use container max-w-7xl mx-auto px-4 for consistent widths
- Use "use client" is NOT needed (this is Vite/React not Next.js)

完成后运行: npm run typecheck && npm run build
```

---

## 3. ADD A NEW PAGE PROMPT

```
Add a new page at src/pages/[PageName].tsx for the [PAGE NAME] route:

- Follow the same pattern as src/pages/AboutPage.tsx
- Include the Navbar and Footer from components/layout/
- Use Reveal from components/shared/animations.tsx for scroll animations
- Use Container for consistent width
- Route: /page-slug
- Update src/routes.tsx to add the new route

Page content needs:
- Hero header with gradient text
- [2-4] card grid using StaggerGroup + StaggerItem
- Contact section
```

---

## 4. ADD A NEW SECTION TO HOME PAGE PROMPT

```
Add a new section to the home page:

1. Create src/components/sections/[SectionName].tsx
2. Follow the same pattern as FeaturesSection.tsx:
   - Use Container for consistent width
   - Use Reveal for scroll animations
   - Use StaggerGroup + StaggerItem for card grids
3. Import and add it to src/pages/HomePage.tsx

Section type: [choose one]
- Testimonials grid (TestimonialCard default variant)
- Pricing comparison (PricingCard x3, middle highlighted)
- Feature comparison table
- Logo ticker (TickerSection) or static logo row (LogoShowcaseSection)
- Gallery/portfolio masonry (ImageCard overlay variant)
- Team grid (TeamCard default)
- Stats row (StatCard)
- Process steps (ProcessSection)
- Benefits image+text (BenefitsSection, use reversed prop to alternate)
- Newsletter signup (NewsletterSection)
- CTA band (CTASection)

Follow the SECTION PLACEMENT rules in DESIGN-SYSTEM.md §1 and the
card variant rules in §3.
```

---

## 5. CHANGE COLORS / REBRAND PROMPT

```
Rebrand this project to use a new color scheme:

New colors:
- Primary: #[HEX] → convert to HSL and update --primary, --ring
- Accent: #[HEX] → convert to HSL and update --accent, --secondary
- Background: #[HEX] → convert to HSL and update --background
- Text: #[HEX] → convert to HSL and update --foreground

Steps:
1. Open src/styles/globals.css
2. Update BOTH :root and .dark blocks
3. Update the theme-color in index.html
4. Update src/config/site.ts colors
5. Update public/site.webmanifest theme_color
6. Update any hardcoded hex colors in section components
7. Update gradient-text and glass-card styles if they reference old colors
8. Run: npm run build
```

---

## 6. ADD ANIMATIONS PROMPT

```
Add these specific animation patterns to the project:

FROM THE ANALYZED SITES:

a) Infinite marquee/ticker (doxaxprience):
   - Use CSS animation from globals.css: animate-scroll-right
   - Duplicate content for infinite loop
   - Add mask-edges class for fade-in/out
   - Pause on hover

b) Aurora gradient hero (igboclass):
   - Add animate-gradient-wave class to hero background
   - Uses 400% background-size with position shift

c) Glassmorphism card (nomjet/chateaudelaray):
   - Add .glass-card class from globals.css
   - Uses backdrop-filter: blur(14px)

d) Phone frame mockup (nomjet):
   - Use .phone-frame class
   - Add your screenshot inside as img

e) Gradient text heading (doxaxprience):
   - Use .gradient-text class

f) Scroll-triggered stagger cards:
   - Wrap in StaggerGroup
   - Wrap each in StaggerItem
   - Uses Framer Motion whileInView
```

---

## 7. ADD A NEW SHADCN/UI COMPONENT PROMPT

```
Add a new shadcn/ui-compatible component to src/components/ui/[name].tsx:

Follow the EXACT pattern of src/components/ui/button.tsx:
1. Import cn from @/lib/utils
2. Use cva (class-variance-authority) for variants
3. Use forwardRef for ref forwarding
4. Export typed interface + component + variant config

Component to add: [Accordion, Dialog, DropdownMenu, Tabs, Tooltip, etc.]
Use these Radix UI packages: @radix-ui/react-[name]
```

---

## 8. PERFORMANCE CHECKLIST PROMPT

```
Check and fix performance issues using patterns from the 11 analyzed sites:

□ All images: loading="lazy" + width/height set
□ Font loading: preload in index.html, font-display: swap
□ Google Fonts: use <link rel="preconnect"> + dns-prefetch
□ CSS: no render-blocking stylesheets (use @import "tailwindcss" in CSS)
□ JS: Vite tree-shaking, no unnecessary large imports
□ Meta: description under 160 chars, title under 60 chars
□ Structured data: JSON-LD for Organization
□ Noscript fallback in body
□ PWA: site.webmanifest with icon set
□ Robots.txt and sitemap.xml
□ Lazy load sections below the fold
□ Font files in public/fonts/ (self-hosted, no external CDN lag)
```

---

## 9. DEPLOY TO VERCEL / NETLIFY PROMPT

```
Prepare this project for deployment:

Build command: npm run build
Output directory: dist
Node version: 18 or higher

Additional files to create:
- robots.txt in public/
- sitemap.xml in public/ (generate from routes)

Environment variables:
- (none needed for static sites)

If deploying to Vercel: use the Vite preset
If deploying to Netlify: use the netlify.toml with [[redirects]] for SPA
```

---

## 10. BLANK START PROMPT (FULL AI BUILD FROM ZERO)

```
I want you to build a complete [BUSINESS TYPE] website.

READ FIRST (in this order):
0. C:\Users\DatTechGee\Documents\Default Project\PROJECT-TEMPLATE\DESIGN-SYSTEM.md
   → the MASTER reference for section layout, cards, grids, and placement
1. src/config/site.ts → understand the config structure
2. src/styles/globals.css → understand the design system
3. src/components/ui/ → all shadcn/ui & card components available
4. src/components/layout/ → Navbar and Footer to customize
5. src/components/sections/ → section templates to adapt
6. src/components/shared/animations.tsx → animation utilities
7. src/types/index.ts → all TypeScript types available
8. src/data/index.ts → data structure for content
9. src/pages/ → page structure patterns

THEN (before coding, show your plan):
- From DESIGN-SYSTEM.md §1 pick the section order for a [BUSINESS TYPE]
- From DESIGN-SYSTEM.md §3 pick the card variants you'll use
Then BUILD, then run: npm run build

BUSINESS DETAILS:
- Name: [YOUR NAME]
- Type: [SaaS / Restaurant / Hotel / E-commerce / Agency / Portfolio / etc]
- Colors: primary [#HEX], accent [#HEX]
- Fonts: [fontName1] for body, [fontName2] for headings
- Pages needed: [list pages]
- Key features: [list 4-6]
- Contact info: [email, phone]
- Social links: [list]
```
