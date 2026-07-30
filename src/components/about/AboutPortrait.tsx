"use client";

import Image from "next/image";
import {
  type PointerEvent,
  useEffect,
  useRef,
} from "react";

export function AboutPortrait() {
  const portraitRef = useRef<HTMLElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  function updatePortrait(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover)").matches) return;

    const portrait = portraitRef.current;
    if (!portrait) return;

    const bounds = portrait.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const horizontal = x / bounds.width - 0.5;
    const vertical = y / bounds.height - 0.5;

    if (animationFrameRef.current) {
      window.cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = window.requestAnimationFrame(() => {
      portrait.style.setProperty("--about-light-x", `${x}px`);
      portrait.style.setProperty("--about-light-y", `${y}px`);
      portrait.style.setProperty(
        "--about-rotate-x",
        `${vertical * -5.5}deg`,
      );
      portrait.style.setProperty(
        "--about-rotate-y",
        `${horizontal * 6.5}deg`,
      );
      portrait.style.setProperty(
        "--about-image-shift-x",
        `${horizontal * -9}px`,
      );
      portrait.style.setProperty(
        "--about-image-shift-y",
        `${vertical * -7}px`,
      );
      animationFrameRef.current = null;
    });
  }

  function resetPortrait() {
    const portrait = portraitRef.current;
    if (!portrait) return;

    if (animationFrameRef.current) {
      window.cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    portrait.style.setProperty("--about-light-x", "50%");
    portrait.style.setProperty("--about-light-y", "42%");
    portrait.style.setProperty("--about-rotate-x", "0deg");
    portrait.style.setProperty("--about-rotate-y", "0deg");
    portrait.style.setProperty("--about-image-shift-x", "0px");
    portrait.style.setProperty("--about-image-shift-y", "0px");
  }

  return (
    <figure
      className="about-portrait"
      onPointerLeave={resetPortrait}
      onPointerMove={updatePortrait}
      ref={portraitRef}
    >
      <div aria-hidden="true" className="about-portrait-glow" />

      <div className="about-portrait-frame">
        <Image
          alt="Kevin Botelho no palco com um microfone durante uma convenção corporativa."
          className="about-portrait-image"
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 44vw, 100vw"
          src="/images/about/kevin-palestrando.jpg"
          unoptimized
        />
        <div aria-hidden="true" className="about-portrait-scrim" />
        <div aria-hidden="true" className="about-portrait-light" />

        <figcaption className="about-portrait-caption">
          <span>Kevin Botelho</span>
          <strong>Palestrante sobre IA em convenção corporativa</strong>
        </figcaption>
      </div>
    </figure>
  );
}
