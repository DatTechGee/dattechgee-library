import { StaggerGroup, StaggerItem } from "@/components/shared/animations";
import { StatCard } from "@/components/ui/stat-card";
import Container from "@/components/layout/Container";
import { stats } from "@/data";

// Layout: 4-column stat row (all 9 sites use this in Hero or separate section)
//        OR 2-column on mobile, 4 on desktop
export default function StatsSection() {
  return (
    <section className="py-16 border-y border-border">
      <Container>
        <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <StatCard value={stat.value} label={stat.label} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}