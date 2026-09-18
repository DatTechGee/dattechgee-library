# DESIGN SYSTEM — Complete Pattern Catalog

Extracted from ALL 11 analyzed websites/apps. Every section layout, card variant,
grid system, and placement rule your AI will need. Reference this file when
building any new site from scratch.

**HOW TO USE IT:** Each reference site has a numbered recipe (§S01–§S11). When
the user says "build it like [site]", apply that section's recipe FROM START TO
FINISH — layout order, cards, colors, buttons, fonts, animations — and only swap
in the user's brand content. Do not blend or create a "better" hybrid.

**EXACT-REPLICA MODE (binding):** match the reference in EVERY detail — grid
columns & gaps, container width, hero positions & floating-card offsets, card
markup, animation variants with the SAME stagger/duration/easing values (e.g.
stagger 0.11s, ease `[0.22,1,0.36,1]`), `layoutId` nav pills, scroll behaviors,
clamp() headline sizes, eyebrow styles, footer structure, exact token block in
globals.css, route set, and library set (LIBRARIES.md). No creative license.
Every site has committed offline snapshot source — S01–S09: `references/sites/<site>/`
(live HTML+CSS+JS bundles); S10/S11: `references/winifred`, `references/echomail`
(full source). No internet needed.
Finish with a ✅ per-pattern sign-off checklist.

---

## 0. SITE RECIPES INDEX (pick-your-site)

| # | Recipe | Source project | Section template |
|---|---|---|---|
| S01 | shamounlibrary | library / events | §1 generic order + blue/gold |
| S02 | doxaxprience | business services | §1 + marquee + glass + navy/gold |
| S03 | joshuayunusa | education / courses | §1 + editor + NeurialGrotesk |
| S04 | nomjet | food delivery app | §1 + phone mockups + Fraunces/Jakarta |
| S05 | igboclass | language classes | §1 + gradient-wave hero + green |
| S06 | chateaudelaray | luxury hotel | §1 + fullscreen hero + purple/gold + GSAP |
| S07 | rootmylk | e-commerce brand | §1 + product cards + coffee/gold |
| S08 | altiorcrm | CRM / SaaS admin | §1 + Mantine + tables + PDF |
| S09 | nikhiledutech | trading education | §1 + course cards + carousel + purple scrollbar |
| S10 | winifredayeniwellness | wellness personal brand | §S10 bottom of this file |
| S11 | EchoMail | email marketing SaaS | §S11 bottom of this file |

> The generic §1 flow below is the common skeleton. S10/S11 replace it with their
> own precise section order.

---

## 1. PAGE COMPOSITION ORDER (Section Placement)

The 11 sites consistently compose pages in this order. Follow it unless the
design direction says otherwise.

```
┌─────────────────────────────────┐
│ 1. NAVBAR (fixed/sticky)         │
├─────────────────────────────────┤
│ 2. HERO                         │   full viewport, gradient/glow bg
├─────────────────────────────────┤
│ 3. (OPTIONAL) STATS BAR         │   thin row, 2 or 4 numbers
├─────────────────────────────────┤
│ 4. (OPTIONAL) LOGO STRIP        │   "trusted by" row / marquee
├─────────────────────────────────┤
│ 5. BENEFITS (image + text)      │   alternating 2-col
├─────────────────────────────────┤
│ 6. FEATURES / SERVICES          │   3-6 card grid
├─────────────────────────────────┤
│ 7. PROCESS / HOW IT WORKS       │   3 steps
├─────────────────────────────────┤
│ 8. PRICING                      │   3 columns, middle highlighted
├─────────────────────────────────┤
│ 9. TESTIMONIALS                 │   3-col card grid
├─────────────────────────────────┤
│ 10. GALLERY / PORTFOLIO         │   mixed aspect grid
├─────────────────────────────────┤
│ 11. TEAM                        │   3-4 avatar cards
├─────────────────────────────────┤
│ 12. FAQ (accordion)             │   single col, max-w-3xl
├─────────────────────────────────┤
│ 13. NEWSLETTER                  │   optional
├─────────────────────────────────┤
│ 14. CTA BAND                    │   full-width dark band
├─────────────────────────────────┤
│ 15. CONTACT + FORM              │   max-w-xl
├─────────────────────────────────┤
│ 16. FOOTER                      │   3-4 column
└─────────────────────────────────┘
```

**Rule:** NOT every site has every section. Pick the ones that fit the business.
Common combos by industry:

| Industry | Sections typically used |
|----------|------------------------|
| SaaS / CRM | Hero, Logos, Features, Pricing, Testimonials, FAQ, CTA |
| Food delivery | Hero, Steps, Phone mockup, Features, Testimonials, CTA |
| Education | Hero, Stats, Courses (image cards), Testimonials, Pricing, FAQ |
| Library | Hero, Search, Categories (cards), Features, Stats |
| Hotel | Hero (fullscreen), Gallery, Rooms (image cards), Services, Testimonials, Contact |
| Beverage brand | Hero, Story (benefits), Products (image cards), Gallery, Newsletter |
| Business advisory | Hero, Stats, Services, Process, Team, Testimonials, Contact |

---

## 2. GRID SYSTEM (placement rules)

### Card grids (3-col default)

| Grid | Class | Use when |
|------|-------|----------|
| 2 col | `grid grid-cols-1 md:grid-cols-2` | 2-4 items need breathing room |
| **3 col** | `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3` | **DEFAULT — most common** |
| 4 col | `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` | small icon cards |
| 5 col | `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5` | compact items |

### Hero grids
- Centered text hero: `flex flex-col items-center text-center` (default)
- Split hero: `grid grid-cols-1 lg:grid-cols-2 items-center` (text | image/phone)
- Fullscreen image bg + overlay text: absolute-positioned image + text layer

### Stats
- `grid grid-cols-2 md:grid-cols-4 gap-8` (mobile 2-up, desktop 4-up)

### Pricing
- 3 plans: `grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto items-start`
- Middle plan gets `scale-[1.02] md:scale-105` + primary border + "Most Popular" badge

### Gallery
- `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`
- Featured first item: wrap in `sm:col-span-2 lg:row-span-2`
- Mixed: alternate `aspect-[4/3]` and `aspect-[3/4]`

### Section header (all sites use the same pattern)
```
<div class="text-center mb-16">
  <p class="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Kicker</p>
  <h2 class="text-3xl md:text-5xl font-bold mb-4">Headline</h2>
  <p class="text-muted-foreground max-w-xl mx-auto">Subtext</p>
</div>
```

---

## 3. CARD VARIANTS (when to use which)

### FeatureCard — `ui/feature-card.tsx`
| Variant | Use for |
|---------|---------|
| icon | service/feature lists with icon in rounded square |
| numbered | step lists, process items |
| highlight | single standout feature (primary bg) |
| minimal | short text-only feature lists |
| image | 2-col image+text features |

Footer/text pattern: `group-hover:-translate-y-1 + hover:border-primary/40 + hover:shadow-lg`

### TestimonialCard — `ui/testimonial-card.tsx`
| Variant | Use for |
|---------|---------|
| default | grid of 2-6 reviews |
| featured | single big quote (max-w-3xl centered) |
| minimal | inline quotes without card chrome |

### PricingCard — `ui/pricing-card.tsx`
- Always middle/highlighted plan scaled up
- Check icons: `lucide-react` `Check` with `text-primary`

### TeamCard — `ui/team-card.tsx`
| Variant | Use for |
|---------|---------|
| default | grid of cards with avatar circle |
| minimal | horizontal avatar+name list |
| overlay | photo cards with hover-reveal name |

### ImageCard — `ui/image-card.tsx`
| Variant | Use for | Aspect |
|---------|---------|--------|
| default | general photos, blog | 4:3 |
| product | e-commerce items | 1:1 square |
| blog | article previews | 16:9 |
| overlay | portfolio hover-reveal | variable |
| phone | app screenshots | 9:19.5 |

### StatCard — `ui/stat-card.tsx`
| Variant | Use for |
|---------|---------|
| default | hero stats row |
| large | standalone stat section |
| gradient | branded numbers (clip-text) |
| inline | side-by-side "500 + users" |

### CourseCard — `ui/course-card.tsx`  *(nikhiledutech.com pattern)*
Gradient-accented module card where EACH item gets its own color theme.
| Use for | Props |
|---------|-------|
| course modules, program tiers, certification tracks, service bundles | `icon`, `title`, `topics[]`, `gradient` (e.g. `from-yellow-500 via-orange-500 to-red-500`), `shadowColor` |

Recipe per card:
- Icon chip: `p-3 rounded-xl bg-gradient-to-br {gradient}` + `group-hover:scale-110`
- Corner glow: `absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br {gradient} opacity-20 blur-3xl rotate-12 group-hover:translate-x-1/4 group-hover:translate-y-1/4`
- Bullet dots: `w-1.5 h-1.5 rounded-full bg-gradient-to-r {gradient}`
- Title: `bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent`
- Card: `bg-[#1A1A1A] backdrop-blur-xl border border-gray-800/50`

### ImageCarousel — `shared/image-carousel.tsx`  *(nikhiledutech.com pattern)*
Featured image + sliding thumbnail strip with prev/next arrows.
- Use for: testimonials-with-photos, portfolio/showcase, event galleries
- Props: `images[{src, alt, caption}]`, `visibleCount` (default 5)
- Featured frame: `aspect-[9/16]` (or override) + caption overlay `bg-gradient-to-t from-black/80`
- Active thumbnail: `ring-2 ring-primary scale-110`; inactive: `opacity-50 hover:opacity-75`

### SocialLinks — `shared/social-links.tsx`  *(nikhiledutech.com pattern)*
Social icon row with per-platform brand color on hover.
- Twitter→blue, Instagram→pink, Telegram→purple, YouTube→red, Linktree→green
- Variants: `default` / `compact` / `hero` (size + spacing)
- Hover ring: `absolute inset-0 rounded-lg scale-0 group-hover:scale-150 {brand}bg-400/10`

---

## 4. BUTTON PATTERNS (from all sites)

| Style | Class pattern | Use for |
|-------|---------------|---------|
| Primary solid | `bg-primary text-primary-foreground` + `shadow` + `hover:bg-primary/90` | main CTA |
| Accent solid | `bg-secondary text-secondary-foreground` | secondary CTA |
| Outline | `border border-input bg-background + hover:bg-accent` | tertiary actions |
| Ghost | `hover:bg-accent hover:text-accent-foreground` | nav, subtle |
| Glass pill | transparent bg, `border-2 border-white`, `rounded-full`, `backdrop-blur` | over hero images |
| Dark band CTA | `bg-background text-foreground` on dark section | CTA band |

All buttons: `transition-all duration-300`, `h-11` recommended for touch targets.

---

## 5. TYPOGRAPHY SCALE

```
Display hero:    clamp(2.75rem, 11.5vw, 5rem), font-display, leading-none
Section H2:      text-3xl md:text-5xl font-bold
Section kicker:  text-sm font-semibold text-primary uppercase tracking-wider
Card title:      text-lg font-semibold
Body:            text-sm text-muted-foreground (sm readable, never plain black)
Labels:          text-xs font-semibold uppercase tracking-wider
```

Fonts per use-case (pick one for your brand):
- **Satoshi** — modern SaaS/agency (doxaxprience, shamounlibrary, chateaudelaray)
- **NeurialGrotesk** — distinctive brand with personality (igboclass, rootmylk, joshuayunusa)
- **Fraunces + Plus Jakarta Sans** — premium editorial feel (nomjet)
- **Inter** — clean & neutral (rootmylk alt, altiorcrm system font)

---

## 6. BACKGROUND & SECTION STYLING

### Alternation rhythm
Most sites alternate section backgrounds for visual separation:
```
white → muted/30 → white → dark → white
```
Patterns used:
- `bg-muted/30` for testimonial / team sections
- `bg-foreground text-background` for CTA band
- `border-y border-border` for stat/logo strips
- `bg-primary/5` for feature-heavy sections

### Ambient glow (hero & CTA)
```
<div class="absolute inset-0 -z-10 pointer-events-none">
  <div class="absolute top-[-20%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-primary/10 blur-3xl" />
  <div class="absolute bottom-[-20%] right-[-10%] w-[40rem] h-[40rem] rounded-full bg-accent/10 blur-3xl" />
</div>
```

### Glassmorphism
- Over images: `glass-card` class (blur 14px, white 8% bg, white 10% border)
- Navbar scrolled: `bg-background/80 backdrop-blur-md border-b border-border`

### Dark hero with image overlay
`bg-gradient-to-t from-black/70 via-black/40 to-black/30` over the image.

---

## 7. ANIMATION RECIPES

| Effect | Recipe |
|--------|--------|
| Section header in | `Reveal` (fade-up 24px, 0.6s) |
| Card grid stagger | `StaggerGroup` + `StaggerItem` (0.08s stagger) |
| Hover lift | `hover:-translate-y-1 hover:shadow-lg transition-all duration-300` |
| Image zoom | `group-hover:scale-105 transition-transform duration-500` |
| Marquee | `animate-scroll-right` clock-60s + `mask-edges` + duplicate content |
| Aurora hero bg | `animate-gradient-wave` (400% bg position) |
| Skeleton loading | `.shimmer` class |
| Accordion FAQ | `AnimatePresence` + `height:auto` (0.25s) |
| Mobile menu | full-screen overlay, items slide in with 0.08s stagger |
| Scroll-into-view fade | `ScrollFade` wrapper |
| Button micro-interactions | `motion.div whileHover={{scale:1.05}} whileTap={{scale:0.95}}` |
| Navbar hide/show on scroll | toggle `-translate-y-full` |
| Phone flash | `phone-frame` class (9:19.5 rounded frame) |

All keyframes already live in `src/styles/globals.css`.

---

## 8. FORM PATTERN

```
<form class="space-y-4">
  <div class="grid gap-4 sm:grid-cols-2">
    <div class="space-y-2"><label class="text-sm font-medium">First</label><Input/></div>
    <div class="space-y-2"><label class="text-sm font-medium">Last</label><Input/></div>
  </div>
  <div class="space-y-2"><label class="text-sm font-medium">Message</label><Textarea rows={5}/></div>
  <Button class="w-full h-11" size="lg">Submit</Button>
</form>
```
- Inputs: `h-11`, `rounded-md`, `border-input`, focus ring `ring-1 ring-ring`
- Labels: `text-sm font-medium`, 8px gap above
- Success: swap form for checkmark block
- Toasts: `sonner` `toast.success()`

---

## 9. NAVBAR PATTERNS

- Fixed, transparent → solid+blur when scrolled (`useScrollPosition`)
- Left: logo/title. Center: nav links (hidden on mobile). Right: theme toggle + CTA + hamburger
- Mobile: full-screen overlay with big stacked links (staggered slide-in)
- Height ~64-80px, padding `py-3 scrolled / py-5 top`

## FOOTER PATTERNS

- 4 columns: brand+blurb (col-span-2) | Explore | Contact
- Bottom bar: copyright left, privacy/terms right
- `bg-muted/30` or `border-t border-border`
- Newsletter CTA sometimes in footer

---

## 10. COLOR TOKENS — pick your brand

| Role | Light mode | Dark mode |
|------|-----------|-----------|
| background | white / cream | navy (`#0A1128`) / near-black |
| foreground | near-black | white |
| primary | your brand main color | same or brighter |
| secondary/accent | gold / amber / complementary | gold / amber |
| muted | gray | dark gray |
| border | light gray | white/10 |

Reference palettes from the 11 sites (in `src/styles/globals.css`):
```
shamounlibrary:  blue + gold       → primary:#1E5BA8  accent:#F4B941
doxaxprience:    navy + gold       → bg:#0A1128       accent:#E5B800
nomjet:          amber + cream     → primary:#F59A15  secondary:#F8F5F1
igboclass:       green wave        → animated aurora gradient
chateaudelaray:  purple + gold     → bg:#1F0A33       accent:#C7985F
rootmylk:        coffee + gold     → bg:#3C1E0A       accent:#D4AF37
joshuayunusa:    red→blue gradient → #EF4444 → #1E3A8A
altiorcrm:       blue              → #2979FF
winifred:        cream+gold+sage   → bg:#FAF8F4  primary:#B38B59  terracotta:#D4956F  accent:#9BAA88  ink:#3D2817
echomail:        blue (shadcn)     → primary: oklch(0.546 0.245 262.881) — dark slate sidebar
```

---

## 11. SEARCH / FILTER PATTERN (libraries, e-commerce, courses)

Used by shamounlibrary (search), nomjet (menu filter), joshuayunusa (course tabs):
```
State:      const [query, setQuery]    + useDebounce(query, 300)
Filter:     const filtered = items.filter(i => i.name.includes(query))
Empty:      "No results found" message block
Grid:       StaggerGroup keyed by filtered items
Tabs:       pill buttons row — active = primary bg, inactive = muted
```
Reveal sync: `<StaggerGroup key={activeTab}>` to re-animate on filter change.

---

## 12. SEO + PWA CHECKLIST (every site shipped this)

- [x] JSON-LD Organization schema in index.html
- [x] OG + twitter meta tags
- [x] Favicon set (16, 32, apple, 192, 512, ico)
- [x] site.webmanifest PWA
- [x] theme-color matching brand
- [x] preconnect + dns-prefetch Google Fonts
- [x] preload LCP image + fonts
- [x] noscript fallback
- [x] geo meta for regional businesses
- [x] canonical URL

---

## S10. WINIFRED AYENI WELLNESS — wellness personal-brand recipe
Source: `care/winifredayeniwellness_rd` (Vite 7 + React 19 + **TanStack Router** + TW4).
Constant `--radius: 0.625rem`, system `prefers-color-scheme: light dark`.

### Exact tokens (src/index.css)
```
bg #FAF8F4  fg #000  card #fff  primary #B38B59  primary-fg #FAF8F4
secondary #E9E2D0  muted #E9E2D0  muted-fg #6B5D52  accent #9BAA88
border #E9E2D0  ring #B38B59  destructive #DC2626
dark: bg #3D2817  card #4A3828  secondary/muted #6B5D52  border rgba(233,226,208,.2)  fg #FAF8F4
```
Font **Satoshi** OTF weights 300/400/500/700/900. Scrollbar: 12px, track `#E9E2D0`,
thumb `#B38B59` (hover `#9A7449`) + Firefox `scrollbar-color: #B38B59 #E9E2D0`.
`@theme inline` maps every `--color-*` to the hex `@media (prefers-color-scheme: light)` block.

### Section order (README comment in HomePage.tsx, exact)
```
Hero → EmotionalConnection → CorePromise → WaysToWorkWithMe → WhyWorkWithWinifred
→ TheWinifredWay → WhoThisIsFor → HowItWorks → FeaturedStartingPoints →
MyBrandsAsProof → Testimonial → NewsLetters (email capture) → HomeFinalCTA → LearnAndReflect
```

### Signature patterns
- **Hero:** `bg-[#FAF8F4]` full-screen, grain overlay (`feTurbulence` SVG at opacity .025),
  ambient orbs (`#D4956F/10` & `#9BAA88/12`, blur 90–110px), vertical rule line on left
  (scaleY animation), **stacked image collage** (3 absolute images, border-white/70,
  rounded-1.5rem, parallax via `useScroll` + `useTransform` colY/colOp), floating
  glass cards ("The Problem"/"The Answer") + gradient stat badge "10+ Years";
  headline uses `bg-clip-text` 3-color gradient `#B38B59→#D4956F→#9BAA88`; body text `#6B5D52`.
- **Buttons:** pill (`rounded-full`), gold `#B38B59` primary with `shadow-[0_8px_28px_rgba(179,139,89,.35)]`;
  ghost = white bg, `border-[#B38B59]/25`.
- **Navbar:** `fixed top-0 z-30 h-20`, transparent→`bg-white/95 backdrop-blur-xl shadow-2xl border-b border-primary/20`
  on scroll; active link = **`layoutId="activeNav"` spring pill** (`from-primary to-[#D4956F]` gradient);
  dropdown = `motion AnimatePresence` white/95 blur panel; cart badge `from-primary to-[#D4956F]` gradient;
  green-ish `#9BAA88` & terracotta `#D4956F` accent dots/hover backgrounds.
- **Footer:** vertical gradient `from-[#FAF8F4] via-[#F5EFE7] to-[#E9E2D0]`, centered brand story,
  4-col grid, gradient link headers with 6px swash bar, hover translate-x on links,
  newsletter input with inline gradient send button.
- **Cart:** Zustand `useCartStore` (`items`, `openCart`), `CartDrawer` slide-over.
- Icons: lucide + @heroicons. Motion easing used everywhere: `[0.22,1,0.36,1]`.

### When to use
Soothing, warm, editorial wellness/e-boutique/personal-brand sites with shop,
checkout (Stripe), consultations booking, quiz, dashboard, and newsletter.

---

## S11. ECHOMAIL — email-marketing SaaS dashboard recipe
Source: `mailing-service/LevelUp` (Vite 7 + React 19 + **TanStack Router** + TW4,
`name: "echomail"`). shadcn **oklch** token set, dark mode toggle.

### Exact tokens (src/index.css)
```
light: bg oklch(1 0 0)  fg oklch(0.145 0 0)  primary oklch(0.546 0.245 262.881)
       primary-fg oklch(0.985 0 0)  ring oklch(0.623 0.214 259.815)
       chart-1..5: blue/purple scale (0.623 0.214 259.815 / 0.488 0.243 264.376 / 0.685 0.169 237.323 / 0.585 0.233 277.117 / 0.707 0.165 254.624)
       sidebar oklch(0.985 0 0)  sidebar-primary same as primary
dark: bg oklch(0.129 0.042 264.695)  card oklch(0.18 0.014 264.5)  primary oklch(0.623 0.214 259.815)
      sidebar oklch(0.16 0.014 264.5)  border oklch(1 0 0 / 10%)
```
Font **NeurialGrotesk** OTF weights 300/400/500/700/800. `@theme inline` maps
`--color-*` + `--color-sidebar*` + `--radius-*`. `.dark ::-webkit-scrollbar` 10px.

### App shell (TanStack Router)
```
routes/
  __root.tsx            # root layout, providers
  index.tsx             # public welcome/landing
  join-newsletters.tsx, unsubscribe.$token.tsx   # public marketing routes
  _auth.tsx             # auth layout (AuthContainer)
    login.tsx, forgetpassword.tsx, resetpassword.tsx, otp.tsx, 2fa.tsx
  _dashboard.tsx        # authenticated shell w/ route guard (redirect → /login)
    dashboard.tsx, analytics.tsx, campaigns.tsx, create-campaigns.tsx,
    templates.tsx, contacts.tsx, automations.tsx, newsletters.tsx, settings.tsx
```
`App.tsx`: QueryClientProvider (+ react-hot-toast `<Toaster position="top-right">`)
+ RouterProvider. Router options: `defaultPreload: "intent"`, `defaultPendingComponent: LoadingScreen`,
`defaultPendingMinMs: 3000`, `defaultNotFoundComponent`, `context: { auth, queryClient }`.
Auth guard in `_dashboard.tsx` `beforeLoad` → `redirect({ to: "/login" })`.

### Sidebar / Topbar (collapsible shell)
- **Sidebar** (components/Sidebar.tsx): fixed left, animates `width 80→280`
  (`isCollapsed` state), active nav item = **`layoutId="activeBackground"` spring pill**
  filled with `brand.colors.primary`, label fade on collapse, badge chips, mobile
  off-canvas (x:-280 spring), gradient border effect `linear-gradient(180deg, primary05, transparent, accent05)`.
- **Topbar** (components/Topbar.tsx): sticky, search input with icon, notifications
  dropdown (AnimatePresence), profile dropdown (avatar + logout), theme toggle.
- Dashboard page cards: stat cards, recharts area/bar/lines (Analytics), data tables,
  campaigns list, BlockNote editor (create-campaigns), template gallery, contacts table.
- Public landing (src/pages/Welcome.tsx) mirrors site 3/9 gradient microsite style.

### When to use
SaaS / B2B dashboards: email marketing, CRM, admin panels, apps needing
auth + roles + analytics + rich-text editor + notifications.

---

> **REMINDER FOR THE AI:** S10 and S11 are their own look. When the user says
> "build like winifred" or "build like echomail", reproduce THOSE section orders,
> THOSE tokens, and THOSE components exactly.
>
> **READ THE REAL SOURCE, DON'T REDESIGN IT (snapshots are committed in the template — no internet needed):**
> - S10 → `PROJECT-TEMPLATE/references/winifred`
>   (`src/index.css`, `src/components/Layout/Navbar.tsx`, `src/components/Layout/Footer.tsx`,
>   `src/pages/Home/HomePage.tsx`, `src/pages/Home/HomeSections/*.tsx`, fonts, package.json)
>   — live backup: https://winifredwellness.com
> - S11 → `PROJECT-TEMPLATE/references/echomail`
>   (`src/index.css`, `src/components/Sidebar.tsx`, `src/components/Topbar.tsx`,
>   `src/components/Editor.tsx`, `src/routes/_dashboard.tsx`, `src/routes/_auth/*`,
>   `src/pages/dashboard/*`, fonts, package.json)
>   — live backup: http://echomail-frontend.vercel.app
> Copy grid classes, gap values, animation variants, easings, and paddings
> verbatim from these files onto the new build. These snapshots exist so S10/S11
> builds always work even if the live sites or the original `care/` / `mailing-service/`
> folders are gone.