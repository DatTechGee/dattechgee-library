import { cn } from "@/lib/utils";

// Image/Product card layout:
// Product grid:  grid-cols-2 md:grid-cols-3 lg:grid-cols-4
// Gallery grid:  grid-cols-2 md:grid-cols-3 (masonry with varied heights)
// Blog cards:    grid-cols-1 md:grid-cols-2 lg:grid-cols-3
// Single showcase: grid-cols-1 lg:grid-cols-2 (image + text)
// Phone mockup:  max-w-xs mx-auto (aspect-ratio 9/19.5)

export function ImageCard({
  src,
  alt,
  title,
  description,
  badge,
  variant = "default",
  className,
}: {
  src?: string;
  alt?: string;
  title?: string;
  description?: string;
  badge?: string;
  variant?: "default" | "overlay" | "phone" | "blog" | "product";
  className?: string;
}) {
  if (variant === "phone") {
    return (
      <div className={cn("phone-frame shadow-2xl mx-auto", className)}>
        {src && (
          <img src={src} alt={alt || ""} className="w-full h-full object-cover" />
        )}
      </div>
    );
  }

  if (variant === "blog") {
    return (
      <article
        className={cn(
          "rounded-xl border bg-card overflow-hidden group hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
          className
        )}
      >
        {src && (
          <div className="aspect-video overflow-hidden">
            <img
              src={src}
              alt={alt || ""}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        )}
        <div className="p-4 space-y-2">
          {badge && (
            <span className="text-xs font-semibold text-primary">{badge}</span>
          )}
          {title && <h3 className="font-semibold line-clamp-2">{title}</h3>}
          {description && (
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          )}
        </div>
      </article>
    );
  }

  if (variant === "product") {
    return (
      <div
        className={cn(
          "rounded-xl border bg-card overflow-hidden group hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300",
          className
        )}
      >
        <div className="aspect-square overflow-hidden bg-muted">
          {src && (
            <img
              src={src}
              alt={alt || ""}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          )}
        </div>
        <div className="p-3 space-y-1">
          {title && <h3 className="font-medium text-sm line-clamp-1">{title}</h3>}
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
    );
  }

  if (variant === "overlay") {
    return (
      <div className={cn("relative group overflow-hidden rounded-xl", className)}>
        {src && (
          <img
            src={src}
            alt={alt || ""}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          {title && <h3 className="font-semibold">{title}</h3>}
          {description && <p className="text-sm opacity-80">{description}</p>}
        </div>
      </div>
    );
  }

  // Default (nomjet, rootmylk product cards)
  return (
    <div
      className={cn(
        "rounded-xl border bg-card overflow-hidden group hover:border-primary/40 hover:shadow-lg transition-all duration-300",
        className
      )}
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        {src && (
          <img
            src={src}
            alt={alt || ""}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        )}
      </div>
      {(title || description) && (
        <div className="p-4 space-y-1">
          {title && <h3 className="font-semibold">{title}</h3>}
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      )}
    </div>
  );
}