"use client";

import { useEffect, useRef } from "react";

export function ScrollProgressIndicator() {
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number | null = null;

    function updateProgress() {
      animationFrameId = null;

      const indicator = indicatorRef.current;

      if (!indicator) {
        return;
      }

      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollableDistance = documentHeight - viewportHeight;
      const progress =
        scrollableDistance > 0
          ? Math.min(Math.max(window.scrollY / scrollableDistance, 0), 1)
          : 0;

      indicator.style.transform = `scaleX(${progress})`;
    }

    function scheduleProgressUpdate() {
      if (animationFrameId !== null) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(updateProgress);
    }

    scheduleProgressUpdate();
    window.addEventListener("scroll", scheduleProgressUpdate, {
      passive: true,
    });
    window.addEventListener("resize", scheduleProgressUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleProgressUpdate);
      window.removeEventListener("resize", scheduleProgressUpdate);

      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[3px] overflow-hidden bg-slate-200/80 motion-reduce:hidden"
      data-scroll-progress-track
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 shadow-[0_0_8px_rgba(37,99,235,0.42)] will-change-transform"
        data-scroll-progress-indicator
        ref={indicatorRef}
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
