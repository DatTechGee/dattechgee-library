import {
  Rocket,
  Zap,
  Smartphone,
  Bitcoin,
  LineChart,
  BarChart3,
  Globe,
  Award,
  Mail,
  Star,
} from "lucide-react";
import Container from "@/components/layout/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/shared/animations";
import { SocialLinks } from "@/components/shared/social-links";
import { ImageCarousel } from "@/components/shared/image-carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FeatureCard } from "@/components/ui/feature-card";
import { StatCard } from "@/components/ui/stat-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { PricingCard } from "@/components/ui/pricing-card";
import { TeamCard } from "@/components/ui/team-card";
import { ImageCard } from "@/components/ui/image-card";
import { CourseCard } from "@/components/ui/course-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import TickerSection from "@/components/sections/TickerSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GallerySection from "@/components/sections/GallerySection";
import TeamSection from "@/components/sections/TeamSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

const palettes = [
  { name: "DatTechGeelibrary", bg: "#FFFFFF", primary: "#1E5BA8", accent: "#F4B941" },
  { name: "doxaxprience", bg: "#0A1128", primary: "#E5B800", accent: "#E5B800" },
  { name: "nomjet", bg: "#F8F5F1", primary: "#F59A15", accent: "#F59A15" },
  { name: "igboclass", bg: "#0B1120", primary: "#22C55E", accent: "#38BDF8" },
  { name: "chateaudelaray", bg: "#1F0A33", primary: "#C7985F", accent: "#C7985F" },
  { name: "rootmylk", bg: "#3C1E0A", primary: "#D4AF37", accent: "#D4AF37" },
  { name: "joshuayunusa", bg: "#0F172A", primary: "#EF4444", accent: "#1E3A8A" },
  { name: "altiorcrm", bg: "#FFFFFF", primary: "#2979FF", accent: "#2979FF" },
  { name: "nikhiledutech", bg: "#0A0A0A", primary: "#9333EA", accent: "#7E22CE" },
];

const demoImages = [
  { src: "", alt: "Slide 1", caption: "Course Module 1" },
  { src: "", alt: "Slide 2", caption: "Course Module 2" },
  { src: "", alt: "Slide 3", caption: "Course Module 3" },
  { src: "", alt: "Slide 4", caption: "Course Module 4" },
  { src: "", alt: "Slide 5", caption: "Course Module 5" },
];

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-3 mb-6">
      <span className="text-xs font-bold text-primary tracking-widest">{index}</span>
      <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
    </div>
  );
}

export default function ShowcasePage() {
  return (
    <>
      <Container className="py-24 max-w-6xl">
        {/* Hero header */}
        <Reveal>
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 gap-1">
              <Star className="size-3" />
              Design System Showcase
            </Badge>
            <h1 className="display-hero font-bold mb-4">
              Every pattern from the{" "}
              <span className="gradient-text">9 analyzed sites</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All cards, variants, colors, sections, transitions, and animations
              extracted from the reference websites â€” in one place.
            </p>
          </div>
        </Reveal>

        {/* ============ 1. BUTTONS ============ */}
        <section className="mb-20">
          <Reveal>
            <SectionLabel index="01" title="Buttons" />
            <div className="p-8 rounded-2xl border bg-card space-y-6">
              <div className="flex flex-wrap gap-3">
                <Button>Primary</Button>
                <Button variant="accent">Accent</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button className="rounded-full bg-primary">Glass pill</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button size="sm">Small</Button>
                <Button size="default">Default (h-9)</Button>
                <Button size="lg">Large (h-10)</Button>
                <Button size="icon">
                  <Mail />
                </Button>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ============ 2. BADGES ============ */}
        <section className="mb-20">
          <Reveal>
            <SectionLabel index="02" title="Badges" />
            <div className="p-8 rounded-2xl border bg-card flex flex-wrap gap-3">
              <Badge>Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="accent">Accent</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="outline" className="border-primary text-primary">
                Outline Primary
              </Badge>
            </div>
          </Reveal>
        </section>

        {/* ============ 3. COLOR PALETTES ============ */}
        <section className="mb-20">
          <Reveal>
            <SectionLabel index="03" title="Brand Color Palettes (all 9 sites)" />
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {palettes.map((p) => (
              <StaggerItem key={p.name}>
                <div className="p-5 rounded-2xl border bg-card">
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-semibold">{p.name}</p>
                    <Badge variant="outline" className="text-[10px] font-mono">
                      {p.name === "nikhiledutech" ? "Next.js" : "Vite"}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="space-y-1">
                      <span
                        className="block h-12 rounded-lg border border-border"
                        style={{ backgroundColor: p.bg }}
                      />
                      <p className="text-[10px] text-muted-foreground font-mono text-center">
                        {p.bg}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <span
                        className="block h-12 rounded-lg border border-border"
                        style={{ backgroundColor: p.primary }}
                      />
                      <p className="text-[10px] text-muted-foreground font-mono text-center">
                        {p.primary}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <span
                        className="block h-12 rounded-lg border border-border"
                        style={{ backgroundColor: p.accent }}
                      />
                      <p className="text-[10px] text-muted-foreground font-mono text-center">
                        {p.accent}
                      </p>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground text-center">
                    bg / primary / accent
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        {/* ============ 4. FEATURE CARDS ============ */}
        <section className="mb-20">
          <Reveal>
            <SectionLabel index="04" title="FeatureCard â€” 5 variants" />
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StaggerItem>
              <FeatureCard
                variant="icon"
                icon={<Rocket className="size-5 text-primary" />}
                title="Icon"
                description="Icon in rounded square, hover lift + glow. Most common variant (doxaxprience, igboclass, joshua)."
              />
            </StaggerItem>
            <StaggerItem>
              <FeatureCard
                variant="numbered"
                icon={<Zap className="size-5 text-primary" />}
                title="Numbered"
                description="Step/process item with bold number chip. Used in how-it-works rows."
              />
            </StaggerItem>
            <StaggerItem>
              <FeatureCard
                variant="highlight"
                icon={<Award className="size-5" />}
                title="Highlight"
                description="Single standout feature on primary background filled card."
              />
            </StaggerItem>
            <StaggerItem>
              <FeatureCard
                variant="minimal"
                title="Minimal"
                description="Short text-only feature row without card chrome."
              />
            </StaggerItem>
            <StaggerItem>
              <FeatureCard
                variant="image"
                icon={<Globe className="size-5 text-primary" />}
                title="Image (2-col)"
                description="Alternating image + text benefit blocks (nomjet, rootmylk)."
              />
            </StaggerItem>
            <StaggerItem className="p-4 rounded-xl border bg-primary/5 flex items-center justify-center text-center">
              <p className="text-sm text-muted-foreground">
                Hover each card to see lift, border-glow & icon-scale transitions.
              </p>
            </StaggerItem>
          </StaggerGroup>
        </section>

        {/* ============ 5. STAT CARDS ============ */}
        <section className="mb-20">
          <Reveal>
            <SectionLabel index="05" title="StatCard â€” 4 variants" />
          </Reveal>
          <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StaggerItem>
              <StatCard value="100+" label="Default" />
            </StaggerItem>
            <StaggerItem>
              <StatCard value="99%" label="Gradient" variant="gradient" />
            </StaggerItem>
            <StaggerItem>
              <StatCard value="50+" label="Large" variant="large" />
            </StaggerItem>
            <StaggerItem className="flex items-center justify-center">
              <StatCard value="24/7" label="Inline" variant="inline" />
            </StaggerItem>
          </StaggerGroup>
        </section>

        {/* ============ 6. TESTIMONIAL CARDS ============ */}
        <section className="mb-20">
          <Reveal>
            <SectionLabel index="06" title="TestimonialCard â€” 3 variants" />
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StaggerItem>
              <TestimonialCard
                variant="default"
                testimonial={{
                  name: "Jane Doe",
                  role: "CEO, Company",
                  quote: "Default card with 5 stars, avatar, and hover lift.",
                }}
              />
            </StaggerItem>
            <StaggerItem>
              <TestimonialCard
                variant="minimal"
                testimonial={{
                  name: "John Smith",
                  role: "Founder",
                  quote: "Minimal quote, no card chrome, just content.",
                }}
              />
            </StaggerItem>
            <StaggerItem>
              <TestimonialCard
                variant="featured"
                testimonial={{
                  name: "Sarah Johnson",
                  role: "Marketing Lead",
                  quote: "Featured bigger quote card with larger avatar and border.",
                }}
              />
            </StaggerItem>
          </StaggerGroup>
        </section>

        {/* ============ 7. PRICING ============ */}
        <section className="mb-20">
          <Reveal>
            <SectionLabel index="07" title="PricingCard â€” middle highlighted" />
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {[
              {
                name: "Basic",
                price: "₦0",
                period: "month",
                features: ["Feature A", "Feature B", "Email support"],
              },
              {
                name: "Pro",
                price: "₦15,000",
                period: "month",
                features: ["Everything in Basic", "Feature C", "Priority support"],
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "₦50,000",
                period: "month",
                features: ["Everything in Pro", "Feature D", "Dedicated manager"],
              },
            ].map((plan, i) => (
              <StaggerItem key={i} className={plan.highlighted ? "md:-mt-3" : ""}>
                <PricingCard
                  plan={plan as {
                    name: string;
                    price: string;
                    period: string;
                    features: string[];
                    highlighted?: boolean;
                  }}
                />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>

        {/* ============ 8. TEAM CARDS ============ */}
        <section className="mb-20">
          <Reveal>
            <SectionLabel index="08" title="TeamCard â€” 3 variants" />
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StaggerItem>
              <TeamCard
                variant="default"
                member={{ name: "John Smith", role: "Founder" }}
              />
            </StaggerItem>
            <StaggerItem>
              <TeamCard
                variant="minimal"
                member={{ name: "Jane Doe", role: "COO" }}
              />
            </StaggerItem>
            <StaggerItem>
              <TeamCard
                variant="overlay"
                member={{ name: "Sarah Johnson", role: "Design Lead" }}
              />
            </StaggerItem>
          </StaggerGroup>
        </section>

        {/* ============ 9. IMAGE CARDS ============ */}
        <section className="mb-20">
          <Reveal>
            <SectionLabel index="09" title="ImageCard â€” 5 variants" />
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StaggerItem>
              <ImageCard
                variant="default"
                title="Default"
                description="4:3 photo card with hover zoom."
              />
            </StaggerItem>
            <StaggerItem>
              <ImageCard
                variant="product"
                title="Product"
                description="1:1 square for e-commerce items."
              />
            </StaggerItem>
            <StaggerItem>
              <ImageCard
                variant="blog"
                badge="Category"
                title="Blog"
                description="16:9 article preview with badge."
              />
            </StaggerItem>
            <StaggerItem>
              <ImageCard
                variant="overlay"
                title="Overlay"
                description="Hover-reveal title on portfolio photos."
              />
            </StaggerItem>
            <StaggerItem>
              <div className="max-w-[130px] mx-auto">
                <ImageCard variant="phone" title="Phone" />
              </div>
            </StaggerItem>
            <StaggerItem className="p-4 rounded-xl border bg-card flex flex-col items-center justify-center gap-3">
              <Smartphone className="size-6 text-primary" />
              <p className="text-sm text-muted-foreground text-center">
                Phone mockup uses the 9:19.5 frame from nomjet's app previews.
              </p>
            </StaggerItem>
          </StaggerGroup>
        </section>

        {/* ============ 10. COURSE CARDS ============ */}
        <section className="mb-20">
          <Reveal>
            <SectionLabel index="10" title="CourseCard â€” gradient module (nikhiledutech)" />
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggerItem>
              <CourseCard
                icon={Bitcoin}
                title="Cryptocurrency"
                topics={["Intro to crypto", "Spot & futures", "Position sizing"]}
                gradient="from-yellow-500 via-orange-500 to-red-500"
              />
            </StaggerItem>
            <StaggerItem>
              <CourseCard
                icon={LineChart}
                title="Technical Analysis"
                topics={["Chart patterns", "Indicators", "Risk management"]}
                gradient="from-blue-500 via-indigo-500 to-purple-500"
              />
            </StaggerItem>
            <StaggerItem>
              <CourseCard
                icon={BarChart3}
                title="Advanced Trading"
                topics={["Options strategies", "Portfolio models", "Psychology"]}
                gradient="from-emerald-500 via-green-500 to-teal-500"
              />
            </StaggerItem>
          </StaggerGroup>
        </section>

        {/* ============ 11. SOCIAL LINKS ============ */}
        <section className="mb-20">
          <Reveal>
            <SectionLabel index="11" title="SocialLinks â€” color-coded hovers" />
          </Reveal>
          <div className="p-8 rounded-2xl border bg-card">
            <p className="text-sm text-muted-foreground mb-6">
              Each platform shows its brand color on hover (blue/pink/purple/red/green):
            </p>
            <SocialLinks variant="default" />
            <div className="my-8 border-t border-border" />
            <p className="text-sm text-muted-foreground mb-4">Compact variant:</p>
            <SocialLinks variant="compact" />
            <div className="my-8 border-t border-border" />
            <p className="text-sm text-muted-foreground mb-4">Hero variant:</p>
            <SocialLinks variant="hero" />
          </div>
        </section>

        {/* ============ 12. IMAGE CAROUSEL ============ */}
        <section className="mb-20">
          <Reveal>
            <SectionLabel index="12" title="ImageCarousel â€” thumbnail strip" />
          </Reveal>
          <div className="p-8 rounded-2xl border bg-card">
            <ImageCarousel images={demoImages} visibleCount={5} />
          </div>
        </section>

        {/* ============ 13. AVATARS ============ */}
        <section className="mb-20">
          <Reveal>
            <SectionLabel index="13" title="Avatars" />
          </Reveal>
          <div className="p-8 rounded-2xl border bg-card flex flex-wrap items-center gap-6">
            <Avatar>
              <AvatarImage src="" alt="JD" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar className="size-12">
              <AvatarImage src="" alt="JS" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <Avatar className="size-16">
              <AvatarImage src="" alt="SJ" />
              <AvatarFallback className="text-xl font-bold">SJ</AvatarFallback>
            </Avatar>
          </div>
        </section>

        {/* ============ 14. GLASS CARD ============ */}
        <section className="mb-20">
          <Reveal>
            <SectionLabel index="14" title="Glassmorphism" />
          </Reveal>
          <div className="relative p-12 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/30 via-background to-accent/30">
            <div className="glass-card rounded-2xl p-8 max-w-md mx-auto backdrop-blur-xl">
              <Badge variant="secondary" className="mb-3">
                Glass Card
              </Badge>
              <h3 className="text-xl font-semibold mb-2">Frosted backdrop</h3>
              <p className="text-sm opacity-80">
                Blur 14px, 8% white fill, 10% white border â€” used over hero images
                by nomjet, doxaxprience, chateaudelaray.
              </p>
            </div>
          </div>
        </section>

        {/* ============ 15. MARQUEE ============ */}
        <section className="mb-20">
          <Reveal>
            <SectionLabel index="15" title="Marquee / Ticker" />
          </Reveal>
          <Reveal>
            <div className="rounded-2xl border bg-card py-4 overflow-hidden mask-edges">
              <div className="flex gap-8 whitespace-nowrap animate-scroll-right w-max">
                {Array.from({ length: 2 }).flatMap((_, dup) =>
                  ["Satoshi", "Framer Motion", "Tailwind", "Lucide", "TanStack Query", "Payload CMS"].map(
                    (word, i) => (
                      <span
                        key={`${dup}-${i}`}
                        className="text-2xl font-extrabold uppercase tracking-wider text-muted-foreground/60"
                      >
                        {word}
                      </span>
                    )
                  )
                )}
              </div>
            </div>
          </Reveal>
        </section>

        {/* ============ 16. GRADIENT & DISPLAY TYPE ============ */}
        <section className="mb-20">
          <Reveal>
            <SectionLabel index="16" title="Typography" />
          </Reveal>
          <div className="p-8 rounded-2xl border bg-card space-y-6">
            <p className="display-hero font-bold">Display Hero â€” clamp(2.75remâ†’5rem)</p>
            <p className="text-3xl md:text-5xl font-bold">Section H2</p>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              Section kicker
            </p>
            <p className="text-lg font-semibold">Card title</p>
            <p className="text-sm text-muted-foreground">
              Body â€” small, muted, readable. Never plain black.
            </p>
          </div>
        </section>

        {/* ============ 17. SEARCH / FILTER PATTERN ============ */}
        <section className="mb-20">
          <Reveal>
            <SectionLabel index="17" title="Search / Filter pills" />
          </Reveal>
          <div className="p-8 rounded-2xl border bg-card">
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="px-4 py-2">All</Badge>
              <Badge variant="outline" className="px-4 py-2">Library</Badge>
              <Badge variant="outline" className="px-4 py-2">Courses</Badge>
              <Badge variant="outline" className="px-4 py-2">Products</Badge>
              <Badge variant="outline" className="px-4 py-2">Rooms</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Active tab = primary bg, inactive = muted outline.
              Used by DatTechGeelibrary, nomjet, joshuayunusa.
            </p>
          </div>
        </section>

        {/* ============ 18. FULL PAGE FLOW (LIVE) ============ */}
        <section className="mb-20">
          <Reveal>
            <div className="rounded-2xl border border-primary/40 bg-primary/5 p-4 mb-8">
              <p className="text-sm font-semibold text-primary mb-1">
                18. Full Page Composition â€” LIVE
              </p>
              <p className="text-xs text-muted-foreground">
                The real section components below, composed in the order all 9
                sites use. Scroll & watch: Reveal fade-ups, StaggerGroup grid
                stagger, marquee ticker, FAQ height animation, parallax
                ScrollFade, and placement alternation (muted/white/card bands).
              </p>
            </div>
          </Reveal>
          <div className="space-y-4 flex flex-col gap-4">
            <HeroSection />
            <StatsSection />
            <TickerSection />
            <BenefitsSection />
            <BenefitsSection reversed />
            <FeaturesSection />
            <ProcessSection />
            <PricingSection />
            <TestimonialsSection />
            <GallerySection />
            <TeamSection />
            <FAQSection />
            <CTASection />
            <ContactSection />
            <Footer />
          </div>
        </section>
      </Container>
    </>
  );
}