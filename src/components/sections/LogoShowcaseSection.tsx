import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

// Static logo/brand row (not animated)
// Layout: flex flex-wrap justify-center gap-12 opacity-50
// Used by: DatTechGeelibrary (trust strip)

// To make a scrolling logo ticker instead, use TickerSection
export default function LogoShowcaseSection({ logos }: { logos?: string[] }) {
  const defaultLogos = ["LOGO 1", "LOGO 2", "LOGO 3", "LOGO 4", "LOGO 5", "LOGO 6"];

  const items = logos ?? defaultLogos;

  return (
    <section className="py-16">
      <Container>
        <p className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-10">
          Trusted by leading companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {items.map((logo, i) => (
            <motion.span
              key={logo}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="text-xl font-bold text-muted-foreground/50 hover:opacity-100 transition-opacity cursor-default"
            >
              {logo}
            </motion.span>
          ))}
        </div>
      </Container>
    </section>
  );
}