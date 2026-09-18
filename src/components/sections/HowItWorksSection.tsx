import { Search, CreditCard, Download } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { Reveal } from "@/components/shared/animations";

const steps = [
  {
    number: "01",
    title: "Browse & Discover",
    description: "Explore thousands of books across multiple categories. Use our powerful search to find exactly what you need.",
    icon: Search,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
  },
  {
    number: "02",
    title: "Secure Payment",
    description: "Purchase your selected books with our secure payment system. One-time payment, lifetime access.",
    icon: CreditCard,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-500/10",
  },
  {
    number: "03",
    title: "Instant Download",
    description: "Download your books immediately in multiple formats (PDF, EPUB, MOBI). Read anywhere, anytime.",
    icon: Download,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-500/10",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-sm font-semibold text-primary">How It Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
              Get started in three simple steps
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access your books instantly
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                className="relative bg-card border border-border rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="text-sm font-bold text-muted-foreground bg-background border rounded-full px-3 py-1">
                    Step {step.number}
                  </span>
                </div>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-6 mt-4`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}