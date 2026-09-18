import { BookOpen, Shield, GitCompare, Swords, Cross, Moon, BookMarked, Layers } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/shared/animations";
import { cn } from "@/lib/utils";

const categoryCards = [
  { name: "Biblical Theology", slug: "biblical-theology", icon: BookOpen, count: "1 title", gradient: "from-blue-500 to-blue-600", bgColor: "bg-blue-500/10" },
  { name: "Christian Apologetics", slug: "christian-apologetics", icon: Shield, count: "2 titles", gradient: "from-green-500 to-green-600", bgColor: "bg-green-500/10" },
  { name: "Comparative Religion", slug: "comparative-religion", icon: GitCompare, count: "1 title", gradient: "from-yellow-500 to-yellow-600", bgColor: "bg-yellow-500/10" },
  { name: "Debate & Polemics", slug: "debate-polemics", icon: Swords, count: "1 title", gradient: "from-purple-500 to-purple-600", bgColor: "bg-purple-500/10" },
  { name: "Deity of Christ", slug: "deity-of-christ", icon: Cross, count: "1 title", gradient: "from-orange-500 to-orange-600", bgColor: "bg-orange-500/10" },
  { name: "Islamic Apologetics", slug: "islamic-apologetics", icon: Moon, count: "1 title", gradient: "from-pink-500 to-pink-600", bgColor: "bg-pink-500/10" },
  { name: "Qur'an & Hadith Studies", slug: "quran-hadith-studies", icon: BookMarked, count: "1 title", gradient: "from-red-500 to-red-600", bgColor: "bg-red-500/10" },
  { name: "Trinity", slug: "trinity", icon: Layers, count: "1 title", gradient: "from-teal-500 to-teal-600", bgColor: "bg-teal-500/10" },
];

export default function CategoriesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <Container>
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
              Explore by Category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find the perfect book in your area of interest
            </p>
          </div>
        </Reveal>

        <StaggerGroup className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryCards.map((cat) => (
            <StaggerItem key={cat.slug}>
              <motion.button
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const target = document.getElementById("browse");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                    window.dispatchEvent(new CustomEvent("category-select", { detail: cat.slug }));
                  }
                }}
                className={cn(
                  "w-full p-6 rounded-2xl border bg-card text-center",
                  "hover:border-primary/40 hover:shadow-lg transition-all duration-300"
                )}
              >
                <div className={cn("w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center mx-auto mb-4", cat.gradient)}>
                  <cat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{cat.name}</h3>
                <p className="text-sm text-muted-foreground">{cat.count}</p>
              </motion.button>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}