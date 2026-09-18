import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

// Smooth scroll provider (nomjet, rootmylk & altiorcrm pattern).
// Pairs with the `html.lenis` / `lenis.lenis-autoToggle` CSS in
// src/styles/globals.css. Add data-lenis-prevent on modals / scrollable
// popovers so their inner scroll keeps priority (see Lenis docs).
export function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      autoToggle: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}