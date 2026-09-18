# AGENTS.md — Rules for working in this project

## Project purpose
Build a reusable website template (`PROJECT-TEMPLATE/`) derived from reverse-engineering
live commercial sites, so any future site can be built with a single AI prompt using the
same stack, patterns, and design language.

## ⭐ THE BUILD RULE — user picks a site, we clone it exactly
When the user asks to build a new site: SHOW the site picker (`AI-PROMPTS.md #0`),
ask which reference site they want, WAIT for the answer, then rebuild that site's
recipe (§S01–§S11 in `DESIGN-SYSTEM.md`) in **EXACT-REPLICA MODE** — same grid
columns/gaps, same hero positions, same card markup, same animation variants and
easing values, same transitions, same headers, same token block, same routes —
never invent a new design. Read the site's committed offline snapshot —
S01–S09: `references/sites/<site>/` (live HTML+CSS+JS bundles); S10/S11:
`references/winifred`, `references/echomail` (full source) — no internet needed
for ANY site. Finish with a per-pattern ✅ sign-off.

## Reference sites (11 analyzed — 9 live bundles verified + 2 local source-verified)
The template's stack and patterns are grounded in these sites/apps:

1. shamounlibrary.com — Library/lit fest (Vite, react-query, Payload, Paystack, Flutterwave)
2. doxaxprience.com — Logistics (Vite, react-query, Paystack/Flutterwave/Stripe)
3. joshuayunusa.com — Education (Mantine v7, BlockNote/Tiptap, zod, Paystack)
4. nomjet.co.uk — Food delivery (Lenis + GSAP, Fraunces font, phone mockups)
5. igboclass.com — Education (Radix, BlockNote, jsPDF, Flutterwave, GTM)
6. chateaudelaray.com — Hotel (GSAP 3.13, Stripe, jsPDF, Paystack)
7. rootmylk.com — Meal plan store (Redux RTK Query, Stripe, BlockNote, Tawk.to)
8. altiorcrm.com — CRM (Mantine v7, BlockNote, react-helmet, jsPDF autotable)
9. nikhiledutech.com — Trading education (**Next.js**, TW3, gradient modules, carousel)
10. winifredayeniwellness.com — Wellness personal brand (**TanStack Router**, TW4, Satoshi,
    cream/gold/sage, BlockNote, Stripe, recharts, cart/dashboard) — **offline source
    committed: `references/winifred`** (live: winifredwellness.com)
11. EchoMail — Email marketing SaaS (**TanStack Router**, TW4, NeurialGrotesk, BlockNote,
    recharts, auth + collapsible dashboard) — **offline source committed:
    `references/echomail`** (live: echomail-frontend.vercel.app)

> **Offline rule (ALL 11 sites):** every build reads committed snapshots inside the
> template and never depends on the sites being online or the original folders.
> S01–S09: `references/sites/<site>/` holds each site's live `index.html` (full
> rendered markup), `styles_css_1.css` (design tokens + layout), and
> `app_js_1.js`/`chunk_*.js` (animation + behavior). S10/S11: `references/winifred`
> and `references/echomail` hold full src + fonts. If a baked-out SPA's JS behavior
> is unclear from its bundle, use its `DESIGN-SYSTEM.md` §S## recipe as the fallback spec.

Full per-site evidence: `PROJECT-TEMPLATE/LIBRARIES.md`.

## Rules — always follow these when working here
1. **Check the template docs first.** `README.md` (structure & stack & site picker),
   `LIBRARIES.md` (what libraries exist and why), `DESIGN-SYSTEM.md` (section order,
   card variants, colors, buttons, typography, per-site recipes §S01–§S11),
   `AI-PROMPTS.md` (prompts that build real sites from this template).
2. **Reuse before creating.** If a component/card/section already exists in
   `src/components/`, extend it or use a variant. Never duplicate functionality.
3. **Import UI primitives from the barrel** `@/components/ui` — never deep-import
   individual files. New UI components must be added to `ui/index.ts`.
4. **Standard stack** (unless a task explicitly changes it): React + Vite + TypeScript +
   Tailwind v4 + framer-motion + react-router-dom (or TanStack Router per §S10/§S11) +
   @tanstack/react-query + zod + axios + zustand + lucide-react + clsx/tailwind-merge +
   sonner. Only pull in a lib that already has evidence in `LIBRARIES.md`.
5. **Comments must cite the source site** for non-obvious patterns
   (e.g. `// nikhiledutech pattern`, `// winifred pattern`), matching the existing convention.
6. **Before running** typecheck/build, note that `node_modules` may be absent — run
   `npm install` first if it is.
7. **Lint/typecheck gate.** After any code change, run `npm run lint` (or `tsc --noEmit`)
   when available and fix all issues before reporting done.
8. Do not commit unless explicitly asked.

## Adding a new reference site (workflow)
1. Live site → fetch the homepage HTML with webfetch (`format: "html"`), then fetch its
   JS bundle and CSS bundle (`format: "text"`; CSS bundles are rejected as `format: "css"`).
   Local project → READ its `package.json` + `src/` tree directly (strongest evidence).
2. For minified single-line bundles: `rg`/grep fail — use PowerShell
   `[System.IO.File]::ReadAllText(...).Contains("term")` and extract ~150 chars of
   context after each hit to eliminate false positives (e.g. "three" vs. Three.js).
3. Record results as a new `### N. domain` section in `LIBRARIES.md` with per-library
   evidence strings, then update the SHARED LAYER counts, the `README.md` sites table
   + site-picker, `DESIGN-SYSTEM.md` (add §S## recipe with tokens, section order,
   signature patterns), `AI-PROMPTS.md` picker table, and this AGENTS.md list.
4. Extract any genuinely new CSS/JS/design patterns into the template
   (`globals.css`, new components, provider tweaks). Skip artifacts that are just
   Tailwind v4 built-ins (`@property`, `enter`/`exit` keyframes, `@container`,
   `text-balance`) or Mantine-generated output.