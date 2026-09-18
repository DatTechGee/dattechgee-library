import { cn } from "@/lib/utils";

// Feature/Service card layout:
// Grid card:      grid-cols-1 md:grid-cols-2 lg:grid-cols-3
// Horizontal row: grid-cols-1 md:grid-cols-2 (image + text side by side)
// Icon grid:      grid-cols-2 md:grid-cols-4 (small icon + label)
// Large feature:  grid-cols-1 lg:grid-cols-2 (image spans one col, text spans other)

export function FeatureCard({
  title,
  description,
  icon,
  variant = "icon",
  className,
}: {
  title: string;
  description: string;
  icon?: React.ReactNode;
  variant?: "icon" | "image" | "minimal" | "numbered" | "highlight";
  index?: number;
  className?: string;
}) {
  if (variant === "minimal") {
    return (
      <div className={cn("space-y-2", className)}>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    );
  }

  if (variant === "numbered") {
    return (
      <div className={cn("flex gap-4", className)}>
        <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 font-bold text-primary">
          01
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    );
  }

  if (variant === "highlight") {
    return (
      <div
        className={cn(
          "p-6 rounded-xl bg-primary text-primary-foreground space-y-2",
          className
        )}
      >
        {icon && <div className="mb-3">{icon}</div>}
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm opacity-90">{description}</p>
      </div>
    );
  }

  // Default icon card (most common: doxaxprience, igboclass, joshua)
  return (
    <div
      className={cn(
        "p-6 rounded-xl border bg-card group hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
        className
      )}
    >
      {icon && (
        <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          {icon}
        </div>
      )}
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}