"use client";

import { type CSSProperties, useEffect, useState } from "react";

import styles from "./RotatingWord.module.css";

type RotatingWordProps = {
  className?: string;
  duration?: number;
  fade?: boolean;
  interval?: number;
  minWidth?: string;
  travel?: string;
  words: readonly string[];
};

export function RotatingWord({
  className,
  duration = 560,
  fade = true,
  interval = 3000,
  minWidth = "10ch",
  travel = "108%",
  words,
}: RotatingWordProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState<"idle" | "leaving" | "entering">("idle");
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(query.matches);

    updatePreference();
    query.addEventListener("change", updatePreference);

    return () => query.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (reducedMotion || words.length < 2) {
      return;
    }

    const leaveTimer = window.setTimeout(() => {
      setPhase("leaving");
    }, interval);
    const nextWordTimer = window.setTimeout(() => {
      setActiveIndex((index) => (index + 1) % words.length);
      setPhase("entering");
    }, interval + duration);
    const settleTimer = window.setTimeout(() => {
      setPhase("idle");
    }, interval + duration * 2);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(nextWordTimer);
      window.clearTimeout(settleTimer);
    };
  }, [activeIndex, duration, interval, reducedMotion, words.length]);

  const visiblePhase = reducedMotion ? "idle" : phase;

  return (
    <span className={`${styles.root} ${className ?? ""}`}>
      <span className="sr-only">{words[0]}</span>
      <span
        aria-hidden="true"
        className={styles.window}
        style={
          {
            "--rotating-word-duration": `${duration}ms`,
            "--rotating-word-entry-opacity": fade ? 0 : 1,
            "--rotating-word-exit-opacity": fade ? 0 : 1,
            "--rotating-word-min-width": minWidth,
            "--rotating-word-travel": travel,
          } as CSSProperties
        }
      >
        <span
          className={
            visiblePhase === "leaving"
              ? styles.leaving
              : visiblePhase === "entering"
                ? styles.entering
                : styles.word
          }
          key={`word-${activeIndex}`}
        >
          {words[activeIndex]}
        </span>
      </span>
    </span>
  );
}
