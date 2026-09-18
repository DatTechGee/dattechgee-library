import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/animations";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";

// Full-width dark CTA band (all 8 sites use this before footer)
// Patterns:
// - Dark bg with ambient glow circles
// - Gradient text headline
// - Big centered CTA button
export default function CTASection({
  ctaText = "Get started today",
  ctaLabel = "Start Now",
  link = "#contact",
}: {
  ctaText?: string;
  ctaLabel?: string;
  link?: string;
}) {
  return (
    <section className="relative py-24 overflow-hidden bg-foreground text-background">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 left-1/4 w-[30rem] h-[30rem] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-1/4 right-1/4 w-[30rem] h-[30rem] rounded-full bg-accent/20 blur-3xl" />
      </div>

      <Container className="relative text-center">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
            <span className="gradient-text">{ctaText}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg opacity-80 max-w-xl mx-auto mb-10">
            One line of motivation. Make the user take action now.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="gap-2 bg-background text-foreground hover:bg-background/90 text-base px-10 py-6"
              onClick={() => (window.location.href = link)}
            >
              {ctaLabel}
              <ArrowRight className="size-4" />
            </Button>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}