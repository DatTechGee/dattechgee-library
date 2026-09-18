import { Badge } from "@/components/ui/badge";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import Container from "@/components/layout/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/shared/animations";
import { testimonials } from "@/data";

// Layout: Grid of 3 (most common), or single featured
// Behind 8 sites: DatTechGeelibrary, nomjet, igboclass, doxaxprience, joshuayunusa
export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-muted/30">
      <Container>
        <Reveal>
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Loved by our clients
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              What people say about working with us.
            </p>
          </div>
        </Reveal>

        <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <TestimonialCard testimonial={t} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}