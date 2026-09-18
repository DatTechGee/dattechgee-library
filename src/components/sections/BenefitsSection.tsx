import { ImageCard } from "@/components/ui/image-card";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/shared/animations";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";

// Benefits / Why Choose Us section
// Layout: 2 columns — image left, text right (alternates with flex-row-reverse on lg)
// Used by: nomjet, doxaxprience, joshuayunusa, rootmylk, igboclass
export default function BenefitsSection({
  reversed = false,
}: {
  reversed?: boolean;
}) {
  return (
    <section className="py-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal
            direction={reversed ? "right" : "left"}
            className={reversed ? "lg:order-2" : ""}
          >
            <ImageCard variant="default" className="aspect-[4/3]" />
          </Reveal>

          <Reveal direction={reversed ? "left" : "right"} className={reversed ? "lg:order-1" : ""}>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Benefit headline that convinces visitors to trust you
            </h2>
            <p className="text-muted-foreground mb-8">
              Supporting paragraph explaining the value. Keep it focused,
              benefit-driven, and scannable. Use 2-3 sentences max for best
              readability.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Benefit one with short descriptor",
                "Benefit two with short descriptor",
                "Benefit three with short descriptor",
              ].map((item, i) => (
                <StaggerGroup key={item}>
                  <StaggerItem>
                    <li className="flex items-center gap-3">
                      <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-sm">{item}</span>
                    </li>
                  </StaggerItem>
                </StaggerGroup>
              ))}
            </ul>
            <Button size="lg">Learn More</Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}