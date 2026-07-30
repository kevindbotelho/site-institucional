"use client";

import { useEffect } from "react";

const revealSelector = "[data-scroll-reveal]";

export function ScrollRevealController() {
  useEffect(() => {
    const root = document.documentElement;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelector),
    );
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const pendingTimers = new Set<number>();
    let observer: IntersectionObserver | null = null;

    const revealImmediately = (element: HTMLElement) => {
      element.dataset.scrollRevealState = "revealed";
    };

    const revealWithDelay = (element: HTMLElement) => {
      if (element.dataset.scrollRevealState === "revealed") return;

      const desktopDelay =
        window.innerWidth >= 768
          ? Number(element.dataset.scrollRevealDelay ?? 0)
          : 0;

      if (!Number.isFinite(desktopDelay) || desktopDelay <= 0) {
        revealImmediately(element);
        return;
      }

      const timer = window.setTimeout(() => {
        revealImmediately(element);
        pendingTimers.delete(timer);
      }, desktopDelay);

      pendingTimers.add(timer);
    };

    const finishAllReveals = () => {
      observer?.disconnect();
      pendingTimers.forEach((timer) => window.clearTimeout(timer));
      pendingTimers.clear();
      elements.forEach(revealImmediately);
      delete root.dataset.scrollRevealReady;
    };

    if (
      reducedMotionQuery.matches ||
      !("IntersectionObserver" in window) ||
      elements.length === 0
    ) {
      elements.forEach(revealImmediately);
      return;
    }

    root.dataset.scrollRevealReady = "true";

    observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          revealWithDelay(element);
          currentObserver.unobserve(element);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.1,
      },
    );

    elements.forEach((element) => observer?.observe(element));
    reducedMotionQuery.addEventListener("change", finishAllReveals);

    return () => {
      observer?.disconnect();
      pendingTimers.forEach((timer) => window.clearTimeout(timer));
      reducedMotionQuery.removeEventListener("change", finishAllReveals);
      delete root.dataset.scrollRevealReady;
    };
  }, []);

  return null;
}
