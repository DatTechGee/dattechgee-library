import { cn } from "@/lib/utils";
import type { TeamMember } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Team layout:
// 2-3 members: grid-cols-1 sm:grid-cols-2 md:grid-cols-3
// 4+ members:   grid-cols-2 md:grid-cols-3 lg:grid-cols-4
// Small team:   flex flex-row gap-8

export function TeamCard({
  member,
  variant = "default",
  className,
}: {
  member: TeamMember;
  variant?: "default" | "minimal" | "overlay";
  className?: string;
}) {
  if (variant === "minimal") {
    return (
      <div className={cn("flex items-center gap-4", className)}>
        <Avatar className="size-14">
          <AvatarImage src={member.image} alt={member.name} />
          <AvatarFallback>{member.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">{member.name}</p>
          <p className="text-sm text-muted-foreground">{member.role}</p>
        </div>
      </div>
    );
  }

  if (variant === "overlay") {
    return (
      <div className={cn("relative group overflow-hidden rounded-xl", className)}>
        <div className="aspect-[3/4] bg-muted">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-5xl font-bold text-muted-foreground/20">
              {member.name[0]}
            </div>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="text-white">
            <p className="font-semibold">{member.name}</p>
            <p className="text-sm opacity-80">{member.role}</p>
          </div>
        </div>
      </div>
    );
  }

  // Default: centered card (doxaxprience, chateaudelaray)
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center p-6 rounded-xl border bg-card group hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
        className
      )}
    >
      <Avatar className="size-24 mb-4">
        <AvatarImage src={member.image} alt={member.name} />
        <AvatarFallback className="text-xl font-bold">{member.name[0]}</AvatarFallback>
      </Avatar>
      <p className="font-semibold text-lg">{member.name}</p>
      <p className="text-sm text-muted-foreground">{member.role}</p>
    </div>
  );
}