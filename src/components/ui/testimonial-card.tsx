import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Testimonial } from "@/types";

// Grid layout:
// 1-2 testimonials: grid-cols-1 md:grid-cols-2
// 3+ testimonials:   grid-cols-1 md:grid-cols-2 lg:grid-cols-3
// Single featured:   grid-cols-1, max-w-3xl

export function TestimonialCard({
  testimonial,
  variant = "default",
  className,
}: {
  testimonial: Testimonial;
  variant?: "default" | "minimal" | "featured";
  className?: string;
}) {
  if (variant === "minimal") {
    return (
      <blockquote className={cn("space-y-3", className)}>
        <p className="text-lg italic text-muted-foreground">"{testimonial.quote}"</p>
        <footer className="flex items-center gap-3">
          <Avatar className="size-8">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-semibold">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">{testimonial.role}</p>
          </div>
        </footer>
      </blockquote>
    );
  }

  if (variant === "featured") {
    return (
      <blockquote
        className={cn(
          "p-8 rounded-2xl border bg-card shadow-lg space-y-4",
          className
        )}
      >
        <div className="flex gap-1 text-secondary">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-4 fill-current" />
          ))}
        </div>
        <p className="text-lg leading-relaxed">"{testimonial.quote}"</p>
        <footer className="flex items-center gap-4">
          <Avatar className="size-12">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </footer>
      </blockquote>
    );
  }

  // Default card (most common in nomjet, doxaxprience)
  return (
    <blockquote
      className={cn(
        "p-6 rounded-xl border bg-card text-card-foreground shadow space-y-4 group hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
        className
      )}
    >
      <div className="flex gap-1 text-secondary">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 fill-current" />
        ))}
      </div>
      <p className="text-sm leading-relaxed">"{testimonial.quote}"</p>
      <footer className="flex items-center gap-3">
        <Avatar className="size-10">
          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-semibold">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
        </div>
      </footer>
    </blockquote>
  );
}