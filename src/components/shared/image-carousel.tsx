"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  visibleCount?: number;
  className?: string;
}

/**
 * Image carousel with thumbnail strip — nikhiledutech.com pattern.
 * Shows a large featured image with a row of thumbnails below.
 * Thumbnails slide to show a window of `visibleCount` items.
 *
 * Usage:
 *   <ImageCarousel
 *     images={[
 *       { src: "/photo1.jpg", alt: "Event 1", caption: "Conference 2024" },
 *       { src: "/photo2.jpg", alt: "Event 2" },
 *     ]}
 *     visibleCount={5}
 *   />
 */
export function ImageCarousel({
  images,
  visibleCount = 5,
  className,
}: ImageCarouselProps) {
  const [active, setActive] = useState(0);
  const offset = Math.max(0, Math.min(active - Math.floor(visibleCount / 2), images.length - visibleCount));

  return (
    <div className={cn("relative", className)}>
      {/* Featured image */}
      <div className="relative aspect-[9/16] w-full max-w-sm mx-auto mb-6 overflow-hidden rounded-2xl border-2 border-white/10">
        <img
          src={images[active].src}
          alt={images[active].alt}
          className="w-full h-full object-cover"
        />
        {images[active].caption && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
            <p className="text-white text-sm font-medium">{images[active].caption}</p>
          </div>
        )}
      </div>

      {/* Thumbnail strip */}
      <div className="relative max-w-lg mx-auto">
        <div className="flex justify-center gap-3 overflow-hidden py-2">
          {images.slice(offset, offset + visibleCount).map((img, i) => (
            <button
              key={offset + i}
              onClick={() => setActive(offset + i)}
              className={cn(
                "relative w-14 h-20 rounded-lg overflow-hidden transition-all duration-200 flex-shrink-0",
                active === offset + i
                  ? "ring-2 ring-primary scale-110"
                  : "opacity-50 hover:opacity-75"
              )}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Nav arrows */}
        <button
          onClick={() => setActive((a) => (a - 1 + images.length) % images.length)}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => setActive((a) => (a + 1) % images.length)}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
