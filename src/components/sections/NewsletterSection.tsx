import { useState } from "react";
import { Mail } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Reveal } from "@/components/shared/animations";
import Container from "@/components/layout/Container";

// Newsletter signup (rootmylk, nomjet, joshuayunusa pattern)
// Layout: centered, one-line email + button inline
export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    toast.success("Subscribed! Check your inbox.");
    setEmail("");
  }

  return (
    <section className="py-24">
      <Container className="max-w-2xl">
        <Reveal>
          <div className="text-center mb-8">
            <Mail className="size-10 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Stay in the loop
            </h2>
            <p className="text-muted-foreground">
              Get updates and exclusive offers. No spam, unsubscribe anytime.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-11"
            />
            <Button type="submit" className="h-11 shrink-0">
              Subscribe
            </Button>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}