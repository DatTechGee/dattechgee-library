import { TeamCard } from "@/components/ui/team-card";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/shared/animations";
import Container from "@/components/layout/Container";
import { team } from "@/data";

// Layout: 3-4 columns centered cards (doxaxprience, chateaudelaray, rootmylk)
//        2-col with overlay hover: grid-cols-1 md:grid-cols-2
export default function TeamSection() {
  return (
    <section className="py-24 bg-muted/30">
      <Container>
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Our Team
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Meet the people behind it
            </h2>
          </div>
        </Reveal>

        <StaggerGroup className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {team.map((member) => (
            <StaggerItem key={member.name}>
              <TeamCard member={member} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}