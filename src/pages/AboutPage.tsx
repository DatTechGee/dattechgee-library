import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import { Reveal } from "@/components/shared/animations";
import { stats } from "@/data";

// About page â€” library story (DatTechGeelibrary pattern: shared design
// system, Navbar/Footer, semantic tokens, rounded cards).
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <Container>
          <Reveal>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              About DatTechGee Library
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Books from around the world, one click away
            </h1>
            <p className="text-muted-foreground max-w-2xl mb-12">
              DatTechGee Library is a global digital books and education platform.
              We connect readers with quality resources across all genres â€”
              business, technology, science, fiction, and more â€” with instant
              downloads on every device.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mb-12">
              {stats.map((stat) => (
                <div key={stat.label} className="p-6 rounded-xl border bg-card">
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-xl border bg-card">
                <h2 className="text-2xl font-bold mb-3">Our mission</h2>
                <p className="text-muted-foreground">
                  To make world-class reading accessible to everyone, everywhere
                  â€” at a price every reader can afford.
                </p>
              </div>
              <div className="p-8 rounded-xl border bg-card">
                <h2 className="text-2xl font-bold mb-3">How we choose titles</h2>
                <p className="text-muted-foreground">
                  Every book is curated by our team and vetted for quality, so
                  you always find something worth your time.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </main>
      <Footer />
    </>
  );
}