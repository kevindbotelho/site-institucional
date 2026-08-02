"use client";

import Image from "next/image";
import Link from "next/link";
import {
  type CSSProperties,
  type PointerEvent,
  useEffect,
  useRef,
} from "react";

import type { HomeProject } from "@/content/projects";

type ProjectCardLayout = "featured" | "standard" | "wide";

type ProjectShowcaseCardProps = {
  eager?: boolean;
  index: number;
  layout: ProjectCardLayout;
  project: HomeProject;
};

type ProjectCardStyle = CSSProperties & {
  "--project-accent-rgb": string;
};

function ProjectLink({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  const label = `Abrir projeto ${title}`;
  const className =
    "absolute inset-0 z-30 rounded-[1.75rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600";

  if (/^https?:\/\//.test(href)) {
    return (
      <a
        aria-label={`${label} em uma nova aba`}
        className={className}
        href={href}
        rel="noreferrer"
        target="_blank"
      />
    );
  }

  return <Link aria-label={label} className={className} href={href} />;
}

export function ProjectShowcaseCard({
  eager = false,
  index,
  layout,
  project,
}: ProjectShowcaseCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  function updateCard(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover)").matches) return;

    const card = cardRef.current;
    if (!card) return;

    const bounds = card.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const horizontal = x / bounds.width - 0.5;
    const vertical = y / bounds.height - 0.5;

    if (animationFrameRef.current) {
      window.cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = window.requestAnimationFrame(() => {
      card.style.setProperty("--project-mouse-x", `${x}px`);
      card.style.setProperty("--project-mouse-y", `${y}px`);
      card.style.setProperty(
        "--project-rotate-x",
        `${vertical * -6.4}deg`,
      );
      card.style.setProperty(
        "--project-rotate-y",
        `${horizontal * 7.2}deg`,
      );
      card.style.setProperty(
        "--project-image-shift-x",
        `${horizontal * -10}px`,
      );
      card.style.setProperty(
        "--project-image-shift-y",
        `${vertical * -8}px`,
      );
      card.style.setProperty(
        "--project-image-rotate",
        `${horizontal * 4}deg`,
      );
      card.style.setProperty(
        "--project-image-inner-rotate",
        `${horizontal * -1.8}deg`,
      );
      animationFrameRef.current = null;
    });
  }

  function resetCard() {
    const card = cardRef.current;
    if (!card) return;

    if (animationFrameRef.current) {
      window.cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    card.style.setProperty("--project-mouse-x", "50%");
    card.style.setProperty("--project-mouse-y", "50%");
    card.style.setProperty("--project-rotate-x", "0deg");
    card.style.setProperty("--project-rotate-y", "0deg");
    card.style.setProperty("--project-image-shift-x", "0px");
    card.style.setProperty("--project-image-shift-y", "0px");
    card.style.setProperty("--project-image-rotate", "-1.8deg");
    card.style.setProperty("--project-image-inner-rotate", "0.6deg");
  }

  const imagePosition =
    project.visual === "landing"
      ? "50% 46%"
      : project.visual === "site"
        ? "50% 42%"
        : "50% 50%";

  return (
    <article
      aria-labelledby={`home-project-${project.slug}`}
      className="project-showcase-card"
      data-clickable={Boolean(project.link)}
      data-layout={layout}
      onPointerLeave={resetCard}
      onPointerMove={updateCard}
      ref={cardRef}
      style={
        {
          "--project-accent-rgb":
            project.visual === "automation" ? "79 70 229" : "37 99 235",
        } as ProjectCardStyle
      }
    >
      <div aria-hidden="true" className="project-showcase-grid" />

      <div className="project-showcase-copy">
        <div className="flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.1em] text-blue-700">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-blue-500"
            />
            {project.disclosure}
          </span>
          <span
            aria-hidden="true"
            className="font-[family-name:Manrope,Arial,sans-serif] text-xs font-extrabold text-blue-700/60"
          >
            0{index + 1}
          </span>
        </div>

        <h3
          className="mt-6 font-[family-name:Manrope,Arial,sans-serif] text-[1.65rem] font-extrabold leading-[1.08] tracking-[-0.05em] text-slate-950 sm:text-[2rem]"
          id={`home-project-${project.slug}`}
        >
          {project.title}
        </h3>
        <p className="mt-4 max-w-lg text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
          {project.summary}
        </p>

        {project.link ? (
          <span className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-blue-700">
            Abrir projeto
            <svg
              aria-hidden="true"
              className="size-4"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                d="M3 13 13 3M6 3h7v7"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </span>
        ) : null}
      </div>

      <div className="project-showcase-media">
        <div className="project-showcase-image-frame">
          <Image
            alt={project.imageAlt}
            className="project-showcase-image"
            fill
            loading={eager ? "eager" : "lazy"}
            quality={90}
            sizes={
              layout === "standard"
                ? "(min-width: 1024px) 44vw, 100vw"
                : "(min-width: 1024px) 58vw, 100vw"
            }
            src={project.image}
            style={{ objectPosition: imagePosition }}
          />
          <div className="project-showcase-image-sheen" />
        </div>
      </div>

      {project.link ? (
        <ProjectLink href={project.link} title={project.title} />
      ) : null}
    </article>
  );
}
