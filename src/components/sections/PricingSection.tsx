import { PricingCard } from "@/components/ui/pricing-card";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/shared/animations";
import Container from "@/components/layout/Container";
import { pricing } from "@/data";

// Layout: 3 columns, middle highlighted (nomjet, igboclass, joshuayunusa)
export default function PricingSection() {
  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Pricing
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Choose the plan that works for you.
            </p>
          </div>
        </Reveal>

        <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto items-start">
          {pricing.map((plan) => (
            <StaggerItem key={plan.name}>
              <PricingCard plan={plan} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}