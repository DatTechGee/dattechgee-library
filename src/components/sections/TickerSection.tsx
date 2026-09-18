import { Badge } from "@/components/ui/badge";
import Container from "@/components/layout/Container";

// Infinite marquee ticker (doxaxprience & DatTechGeelibrary pattern)
export default function TickerSection() {
  const items = [
    "Fast",
    "Reliable",
    "Secure",
    "Modern",
    "Scalable",
    "Efficient",
  ];

  const doubled = [...items, ...items];

  return (
    <section className="py-8 border-y border-border overflow-hidden">
      <Container className="mb-6">
        <Badge variant="outline" className="mb-4">
          Trusted brands
        </Badge>
      </Container>

      <div className="mask-edges">
        <div className="flex gap-0 w-max animate-scroll-right hover:[animation-play-state:paused]">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="text-2xl md:text-3xl font-bold px-6 text-muted-foreground/60 whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}