import { BookOpen, Download, Users, Globe, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "@/components/layout/Container";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/shared/animations";

const stats = [
  { icon: BookOpen, value: "10,000+", label: "Books Available", description: "Across all categories", color: "from-blue-500 to-blue-600", bgColor: "bg-blue-500/10" },
  { icon: Download, value: "50,000+", label: "Downloads", description: "Happy readers worldwide", color: "from-green-500 to-green-600", bgColor: "bg-green-500/10" },
  { icon: Users, value: "25,000+", label: "Active Users", description: "Growing community", color: "from-purple-500 to-purple-600", bgColor: "bg-purple-500/10" },
  { icon: Globe, value: "120+", label: "Countries", description: "Global reach", color: "from-orange-500 to-orange-600", bgColor: "bg-orange-500/10" },
];

export default function JoinSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Stats grid */}
        <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-card border border-border rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-3xl font-black text-foreground mb-1">{stat.value}</p>
                <p className="font-semibold text-foreground">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Join CTA */}
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              Ready to join our community?
            </h2>
            <p className="text-muted-foreground mb-8">
              Start your reading journey today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth/login">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-xl font-bold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all flex items-center gap-2"
                >
                  Join Now
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/library">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-border rounded-xl font-semibold hover:bg-muted transition-all"
                >
                  Browse Library
                </motion.button>
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}