"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Scroll-triggered reveals for [data-reveal] elements */
export default function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reduced) {
      nodes.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    // Reset then observe (needed on client navigations)
    nodes.forEach((el) => el.classList.remove("is-visible"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );

    // Small delay so CSS initial state paints before observing
    const id = window.requestAnimationFrame(() => {
      nodes.forEach((el) => observer.observe(el));
    });

    return () => {
      window.cancelAnimationFrame(id);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
