import { cn } from "@/lib/utils";

// Stat layout patterns:
// 2 stats:   grid-cols-2
// 3-4 stats: grid-cols-2 md:grid-cols-4  (most common - HeroSection uses this)
// 4 stats:   grid-cols-2 lg:grid-cols-4
// 6 stats:   grid-cols-2 md:grid-cols-3 lg:grid-cols-6
// Horizontal: flex justify-between (NomJet bar)

export function StatCard({
  value,
  label,
  variant = "default",
  className,
}: {
  value: string;
  label: string;
  variant?: "default" | "large" | "inline" | "gradient";
  className?: string;
}) {
  if (variant === "large") {
    return (
      <div className={cn("text-center p-8", className)}>
        <p className="text-5xl md:text-6xl font-bold mb-2">{value}</p>
        <p className="text-muted-foreground">{label}</p>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <div className={cn("flex items-baseline gap-2", className)}>
        <span className="text-2xl font-bold">{value}</span>
        <span className="text-sm text-muted-foreground">{label}</span>
      </div>
    );
  }

  if (variant === "gradient") {
    return (
      <div className={cn("text-center p-6", className)}>
        <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {value}
        </p>
        <p className="text-sm text-muted-foreground mt-1">{label}</p>
      </div>
    );
  }

  // Default (DatTechGeelibrary hero pattern)
  return (
    <div className={cn("text-center", className)}>
      <p className="text-3xl md:text-4xl font-bold">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}