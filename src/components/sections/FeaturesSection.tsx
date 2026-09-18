import { BookOpen, Download, User, Smartphone, ListChecks, ShieldCheck } from "lucide-react";
import Container from "@/components/layout/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/shared/animations";

const icons = [BookOpen, Download, User, Smartphone, ListChecks, ShieldCheck];

const features = [
  { title: "Global Catalogue", description: "Discover quality digital resources across every genre â€” from business to fiction." },
  { title: "Instant Download", description: "Grab any title in seconds with fast, reliable downloads on every device." },
  { title: "Learner Account", description: "Build your personal library, keep favourites, and track what you are reading." },
  { title: "Multi-Device", description: "Read on phone, tablet, laptop, or e-reader â€” your books follow you anywhere." },
  { title: "Curated Recommendations", description: "Personalised picks based on the genres and authors you love." },
  { title: "Secure Payments", description: "Pay safely with Paystack and Flutterwave for a friction-free checkout." },
];

export default function FeaturesSection() {
  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Why DatTechGee Library
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              The digital library built for real readers
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A global catalogue, instant downloads, and a platform designed to
              help you read more â€” that is what you get here.
            </p>
          </div>
        </Reveal>

        <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = icons[i % icons.length];
            return (
              <StaggerItem key={feature.title}>
                <div className="h-full p-6 rounded-xl border bg-card group hover:border-primary/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </section>
  );
}