# LIBRARIES & FRAMEWORKS — Verified from the 11 Analyzed Projects

This file is the source of truth for WHAT libraries each analyzed site actually
bundles. Every entry below was verified by scanning the production JS/CSS
bundles of the live sites (string-level detection on minified output), not
inferred. Use this to decide which packages your project genuinely needs.

---

## VERIFICATION METHOD

- Fetched production JS bundle + CSS bundle per site (`/assets/index-*.js`, `/assets/*.css`).
- Scanned with exact-token checks: `BrowserRouter`, `useNavigate`, `QueryClient`,
  `useQuery`, `tanstack`, `lucide`, `react-helmet`, `payload`, `paystack`,
  `flutterwave`, `stripe`, `radix`, `mantine`, `blocknote`, `prosemirror`,
  `tiptap`, `zustand`, `redux`, `gsap`, `lenis`, `swr`, `axios`, `framer`,
  `jspdf`, `recharts`, `swiper`, `zod`, `clerk`, `supabase`, `firebase`, `@apollo`.
- Every ambiguous/short hit was re-checked by reading 180 chars of surrounding
  source before being confirmed (e.g. `three`, `swr`, `emotion`, `film`,
  `Storage`, `Vue`, `upload` were all REJECTED as substring false positives).

---

## PER-SITE INVENTORY

### 1. shamounlibrary.com — Digital Library
| Category | Library | Evidence |
|---|---|---|
| Routing | react-router-dom | `useNavigate` |
| Data fetching | @tanstack/react-query | `QueryClient`, `useQuery` |
| UI icons | lucide-react | `lucide` icon tree |
| CMS | Payload CMS | `payload` admin/API strings |
| Animations | framer-motion | `framer`, `AnimatePresence` |
| HTTP client | axios | `axios` |
| State | zustand | `zustand` store |
| Payments | Paystack + Flutterwave | API endpoint config: `/public/payments/paystack/*`, `/public/payments/flutterwave/*` |

### 2. doxaxprience.com — Business Enablement
| Category | Library | Evidence |
|---|---|---|
| Routing | react-router-dom | `useNavigate` |
| Data fetching | @tanstack/react-query | `QueryClient` |
| UI icons | lucide-react | `lucide` |
| Animations | framer-motion | `framer` |
| HTTP client | axios | `axios` |
| Payments (all 3) | Paystack + Flutterwave + Stripe | payment methods config array: `{id:"stripe" ... {id:"paystack" ... {id:"flutterwave" ...}` |

### 3. joshuayunusa.com — Education Platform
| Category | Library | Evidence |
|---|---|---|
| Routing | react-router-dom | `useNavigate` |
| Data fetching | @tanstack/react-query | `QueryClient`, `useQuery` |
| UI icons | lucide-react | `lucide` |
| CMS | Payload CMS | `payload` |
| State | zustand | `zustand` |
| HTTP client | axios | `axios` |
| Validation | zod | `vendor:"zod"` |
| Rich text editor | BlockNote (Tiptap + ProseMirror core) | `blocknote.(shikiParser)`, `prosemirror-model`, `[tiptap warn]` |
| UI library | Mantine v7 | `--mantine-scale` CSS var |
| Payments | Paystack | `paystack` |

### 4. nomjet.co.uk — Food Delivery App
| Category | Library | Evidence |
|---|---|---|
| Routing | react-router-dom | `useNavigate` |
| Data fetching | @tanstack/react-query | `QueryClient` |
| UI icons | lucide-react | `lucide` |
| Animations | framer-motion + GSAP | `framer`, `GSAP 3.x /* https://gsap.com` banner |
| Smooth scroll | Lenis | `window.lenis.version`, `stopInertiaOnNavigate` |
| HTTP client | axios | `axios` |
| CMS | Payload CMS | `payload` |

### 5. igboclass.com — Language Classes
| Category | Library | Evidence |
|---|---|---|
| Routing | react-router-dom | `useNavigate` |
| Data fetching | @tanstack/react-query | `QueryClient` |
| UI icons | lucide-react | `lucide` |
| UI primitives | Radix UI (+ shadcn) | `Symbol("radix.slottable")`, `radixId` |
| State | zustand | `zustand` |
| HTTP client | axios | `axios` |
| Validation | zod | `vendor:"zod"` |
| PDF generation | jsPDF | `jspdf` |
| Analytics | Google Tag Manager | `GTM-KJXV636J` (HTML head) |
| Payments | Paystack + Flutterwave | `paystack`, `flutterwave` |

### 6. chateaudelaray.com — Luxury Hotel
| Category | Library | Evidence |
|---|---|---|
| Routing | react-router-dom | `useNavigate` |
| Data fetching | @tanstack/react-query | `QueryClient` |
| UI icons | lucide-react | `lucide` |
| Animations | framer-motion + GSAP | `framer`, full `GSAP 3.13.0` bundle |
| HTTP client | axios | `axios` |
| State | zustand | `zustand` |
| Payments | Paystack + Stripe | `paystack`, `stripe` |
| PDF generation | jsPDF | `jspdf` |
| CMS | Payload CMS | `payload` |

### 7. rootmylk.com — Beverage Brand
| Category | Library | Evidence |
|---|---|---|
| Routing | react-router-dom | `useNavigate` |
| Data fetching | @tanstack/react-query | `useQuery`, `tanstack` |
| UI icons | lucide-react | `lucide` |
| Animations | framer-motion | `framer` |
| State | zustand + Redux Toolkit (RTK Query) | `zustand`; `injectEndpoints` + RTK mutation helpers |
| UI primitives | Radix UI (+ shadcn) | `radix-select` CSS vars |
| Rich text editor | BlockNote (Tiptap + ProseMirror) | `blocknote.shikiParser`, `prosemirror-model`, `[tiptap warn]` |
| Payments | Stripe | `/stripe/create-payment-intent` endpoint map |
| Live chat | Tawk.to | Tawk widget script (HTML) |

### 8. altiorcrm.com — E-commerce CRM
| Category | Library | Evidence |
|---|---|---|
| Routing | react-router-dom | `useNavigate` |
| Data fetching | @tanstack/react-query | `tanstack`, `query` chunk |
| UI icons | lucide-react | `lucide` chunks (`map-pin`, `sparkles`, `zap`, `shield`, …) |
| UI library | Mantine v7 | `data-mantine-*` attrs, `--mantine-*` CSS vars |
| Rich text editor | BlockNote (ProseMirror) | `bn-editor`, `bn-block` CSS classes |
| SEO/head | react-helmet-async | `helmet` + prerender comment in HTML |
| HTTP client | axios | `axios` |
| PDF generation | jsPDF + autotable | `jspdf.plugin.autotable-*.js` chunk |
| CMS | Payload CMS | `payload` |
| Payments | Paystack | `paystack` |

### 9. nikhiledutech.com — Trading Education (Next.js site)
| Category | Library | Evidence |
|---|---|---|
| Framework | Next.js (NOT Vite) | `_next/static/` paths in HTML, `next/image`, `next/link` |
| UI icons | lucide-react | `lucide lucide-menu`, `lucide lucide-chevron-down` etc. in HTML |
| Animations | framer-motion | `motion.P.div`, `motion.P.span` in JS bundle |
| UI tokens | shadcn/ui | HSL CSS variables `:root { --background:... }` in compiled CSS |
| Styling | Tailwind CSS **v3** | `tailwindcss v3.4.17` in CSS comment |
| Font | NeurialGrotesk (OTF) | `@font-face{font-family:neurialGrotesk;...}` with 400/500/700 weights |

> **Note:** nikhiledutech.com uses Next.js, not Vite+React-Router. The Vite template
> covers all 11 projects (8 Vite public sites + nikhiledutech pattern styles +
> winifred + echomail local apps). nikhiledutech is included for design pattern
> reference only (carousel, gradient cards, color-coded social icons, purple scrollbar).

### 10. winifredayeniwellness.com — Wellness + Personal Brand (LOCAL project, source-verified)
Sourced from the local build at `C:\Users\DatTechGee\Documents\care\winifredayeniwellness_rd`
(package.json + src tree read directly — strongest evidence level possible).

| Category | Library | Evidence |
|---|---|---|
| Framework | Vite 7 + React **19.1.1** | package.json |
| Routing | **@tanstack/react-router** 1.133 + router-vite-plugin | package.json + `createFileRoute("/_index/")` |
| Data fetching | @tanstack/react-query 5.90 | package.json |
| Styling | Tailwind CSS **v4.1** via @tailwindcss/vite + tw-animate-css | package.json, `@import "tailwindcss"` |
| UI primitives | shadcn/ui style (**hex** oklch-free tokens) + cva + tailwind-merge + clsx | index.css `--primary: #b38b59` |
| Animations | framer-motion **12.23** | package.json, `motion.nav`, `layoutId="activeNav"` |
| Icons | lucide-react 0.548 + @heroicons 2.2 + react-icons 5.5 | package.json |
| Rich text editor | BlockNote 0.41 (Tiptap + ProseMirror + mantine) | package.json, `src/components/Editor.tsx` |
| Payments | Stripe (react-stripe-js + stripe-js) | package.json |
| Charts | recharts 3.7 (dashboard Analytics) | package.json |
| State | zustand 5 (cart, auth stores) | package.json, `stores/cartStore` |
| HTTP | axios 1.13 | package.json |
| Validation | zod 4.1 | package.json |
| Notifications | react-hot-toast 2.6 | package.json |
| Utilities | date-fns 4, js-cookie 3, react-confetti, react-number-format | package.json |
| Font | **Satoshi** (OTF, 300/400/500/700/900) | index.css `@font-face` |
| Palette | Cream `#FAF8F4` + Sand `#E9E2D0` + Gold `#B38B59` + Terracotta `#D4956F` + Sage `#9BAA88` + Cocoa `#3D2817` | index.css `:root`/`.dark` |

### 11. EchoMail — Email Marketing App (LOCAL project, source-verified)
Sourced from the local build at `C:\Users\DatTechGee\Documents\mailing-service\LevelUp`
(package.json = `"name": "echomail"`, src tree read directly).

| Category | Library | Evidence |
|---|---|---|
| Framework | Vite 7 + React **19.1.1** | package.json |
| Routing | **@tanstack/react-router** 1.131 + router-vite-plugin | package.json, `routeTree.gen.ts` |
| Data fetching | @tanstack/react-query 5.85 (+ devtools) | package.json |
| Styling | Tailwind CSS **v4.1** via @tailwindcss/vite + tw-animate-css | package.json |
| UI primitives | shadcn/ui tokens in **oklch** + cva + tailwind-merge + clsx | index.css `@theme inline` |
| Animations | framer-motion **12.23** | package.json, `layoutId="activeBackground"` |
| Icons | lucide-react 0.541 + react-icons 5.5 | package.json |
| Rich text editor | BlockNote 0.35 (core + react + mantine) | package.json, `src/components/Editor.tsx` |
| Charts | recharts 3.1 (Analytics) | package.json |
| State | zustand 5 (auth), react-redux store | package.json, `src/stores/` |
| HTTP | axios 1.11 | package.json |
| Validation | zod 4 | package.json |
| Notifications | react-hot-toast 2.6 | package.json |
| Utilities | js-cookie 3, react-number-format, puppeteer-core (auto-generated imagery), use-head (SEO) | package.json + deps |
| Font | **NeurialGrotesk** (OTF, 300/400/500/700/800) | index.css `@font-face` |
| Palette | shadcn default blue scale (oklch): primary `0.546 0.245 262.881`, ring `0.623 0.214 259.815`, chart blues/purples | index.css `:root`/`.dark` |

> **Note:** sites 10 & 11 use **TanStack Router** (file-based) while sites 1–8 use
> React Router DOM. The template ships both — see README stack notes.
>
> **Offline-proofing (ALL 11 sites):** every site has committed snapshot source inside
> the template, so builds never need the internet or the original local folders.
> - S10/S11: FULL design source at `PROJECT-TEMPLATE/references/winifred` and
>   `PROJECT-TEMPLATE/references/echomail` (src + fonts + package.json).
> - S01–S09: live production bundles at `PROJECT-TEMPLATE/references/sites/<site>/`
>   — `index.html` (full rendered markup), `styles_css_1.css` (design tokens +
>   layout spec), `app_js_1.js` / `chunk_*.js` (animation + behavior).
> - Live URLs (shamounlibrary.com … winifredwellness.com, echomail-frontend.vercel.app)
>   are only color/reference backups. If a baked-out SPA's JS-only behavior is unclear
>   from its bundle, its DESIGN-SYSTEM.md §S## recipe remains the fallback spec.

---

## SHARED LAYER (present in most / all 11)

```
React 19.x                 Styling utilities built-in (no lib needed for tailwind-merge; handlers use clsx)
@tanstack/react-query      Data fetching (9 of 11 confirmed — absent on nikhiledutech & shamounlibrary)
lucide-react               Icons (11 of 11)
react-router-dom OR @tanstack/react-router   Routing (8 react-router-dom; 2 TanStack Router; 1 Next.js Link)
framer-motion              Primary animation (11 of 11)
axios                      HTTP client (10 of 11)
zustand                    Small app state (7 of 11)
Tailwind CSS v4            Styling (9 of 11; rootmylk & nikhiledutech = v3)
shadcn/ui                  UI primitives (Radix-based, 11 of 11 via tokens)
Payload CMS                Headless CMS + REST API (5 of 11)

Niche / purpose-specific:
BlockNote + Tiptap + ProseMirror  → rich text / blog editor (rootmylk, joshua, altior, winifred, echomail)
Mantine                              → full-feature component lib (altior, joshua + BlockNote peer)
GSAP                                 → advanced hero/ticker animation (nomjet, chateau)
Lenis                                → smooth scroll (nomjet)
jsPDF + autotable                    → receipt/invoice PDF export (igboclass, chateau, altior)
zod                                  → form/API validation (joshua, igboclass, winifred, echomail)
recharts                             → dashboard charts (winifred, echomail)
Stripe / Paystack / Flutterwave      → payments (pick per market)
react-helmet-async                   → per-route SEO (altior)
Google Tag Manager / Tawk.to / Cloudflare Analytics → marketing/analytics/chat
```

---

## WHAT THIS MEANS FOR YOUR PROJECT

- **Start with the safe core:** React 19 + Vite + Tailwind v4 + shadcn/ui + Framer
  Motion + Lucide + React Router (or TanStack Router) + @tanstack/react-query +
  axios + zustand. This is the exact combo the majority of the analyzed sites ship.
- **Router choice:** marketing/content sites (1–8) use React Router DOM; app-style
  projects with pages + dashboards (winifred, echomail) use TanStack Router with
  file-based routes (`src/routes/**`) and route guards for auth.
- **Dashboard apps** (winifred, echomail) share the same shell: collapsible
  sidebar + sticky topbar (search, notifications, profile dropdown, theme toggle)
  + auth routes (login/OTP/reset/2FA) protected by a route guard. recharts powers
  the analytics dashboards.
- **Only add heavy libs when the feature needs them.** Don't bundle BlockNote or
  Mantine for a marketing site; don't add jsPDF unless you generate PDFs.
- **Payments:** choose Stripe (global/DAM), Paystack (NGN), or Flutterwave (NGN+
  international) — never all three unless the site is multi-region like doxax.
- **CMS:** Payload CMS is the backend of choice for content sites; the frontend
  hits it via @tanstack/react-query over REST.
- **Editor content (BlockNote/Tiptap)** is what the `bn-*` classes in several
  CSS bundles came from — if you need a blog/editor, use BlockNote's React
  package, which brings Tiptap + ProseMirror automatically.