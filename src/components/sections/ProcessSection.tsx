import { Reveal, StaggerGroup, StaggerItem } from "@/components/shared/animations";
import Container from "@/components/layout/Container";
import { processSteps } from "@/data";

// "How It Works" section — step-by-step process
// Layout: 3 steps horizontal (igboclass, nomjet, doxaxprience)
//        OR numbered vertical timeline (chateaudelaray)

const steps = processSteps;

export default function ProcessSection() {
  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              How It Works
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Simple as 1-2-3
            </h2>
          </div>
        </Reveal>

        <StaggerGroup className="grid gap-8 md:grid-cols-3 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px bg-border" />

          {steps.map((step) => (
            <StaggerItem key={step.number} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 relative z-10">
                  <span className="text-2xl font-bold text-primary">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground max-w-xs">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}