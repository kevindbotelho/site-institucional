"use client";

import Image from "next/image";
import Link from "next/link";
import {
  type MouseEvent,
  type PointerEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import styles from "./page.module.css";

type Project = {
  href: string;
  image: string;
  imageAlt: string;
  kind: string;
  summary: string;
  title: string;
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function ProjectRail({ projects }: { projects: readonly Project[] }) {
  const railRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{
    pointerId: number;
    startScrollLeft: number;
    startX: number;
  } | null>(null);
  const preventLinkRef = useRef(false);
  const [canScroll, setCanScroll] = useState({ left: false, right: false });
  const [isDragging, setIsDragging] = useState(false);

  const updateScrollState = useCallback(() => {
    const rail = railRef.current;

    if (!rail) return;

    const remaining = rail.scrollWidth - rail.clientWidth - rail.scrollLeft;
    setCanScroll({
      left: rail.scrollLeft > 2,
      right: remaining > 2,
    });
  }, []);

  useEffect(() => {
    const rail = railRef.current;

    if (!rail) return;

    const observer = new ResizeObserver(updateScrollState);
    observer.observe(rail);
    updateScrollState();

    return () => observer.disconnect();
  }, [updateScrollState]);

  function moveRail(direction: -1 | 1) {
    const rail = railRef.current;

    if (!rail) return;

    rail.scrollBy({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      left: direction * Math.min(rail.clientWidth * 0.84, 420),
    });
  }

  function startMouseDrag(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;

    const rail = railRef.current;

    if (!rail) return;

    dragRef.current = {
      pointerId: event.pointerId,
      startScrollLeft: rail.scrollLeft,
      startX: event.clientX,
    };
  }

  function dragRail(event: PointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    const rail = railRef.current;

    if (!drag || !rail || drag.pointerId !== event.pointerId) return;

    const distance = event.clientX - drag.startX;

    if (Math.abs(distance) > 4) {
      if (!rail.hasPointerCapture(event.pointerId)) {
        rail.setPointerCapture(event.pointerId);
      }

      preventLinkRef.current = true;
      setIsDragging(true);
    }

    rail.scrollLeft = drag.startScrollLeft - distance;
  }

  function stopMouseDrag(event: PointerEvent<HTMLDivElement>) {
    const rail = railRef.current;

    if (!dragRef.current || dragRef.current.pointerId !== event.pointerId) return;

    if (rail?.hasPointerCapture(event.pointerId)) {
      rail.releasePointerCapture(event.pointerId);
    }

    dragRef.current = null;
    setIsDragging(false);

    window.setTimeout(() => {
      preventLinkRef.current = false;
    }, 0);
  }

  function avoidAccidentalNavigation(event: MouseEvent<HTMLAnchorElement>) {
    if (!preventLinkRef.current) return;

    event.preventDefault();
    preventLinkRef.current = false;
  }

  return (
    <div className={styles.railFrame}>
      <div
        aria-label="Projetos em destaque"
        className={`${styles.catalogRail} ${isDragging ? styles.catalogRailDragging : ""}`}
        onPointerCancel={stopMouseDrag}
        onPointerDown={startMouseDrag}
        onPointerMove={dragRail}
        onPointerUp={stopMouseDrag}
        onScroll={updateScrollState}
        ref={railRef}
        role="region"
        tabIndex={0}
      >
        {projects.map((project, index) => (
          <article
            className={`${styles.catalogCard} ${styles.projectsEntranceCard}`}
            key={project.href}
          >
            <Link
              aria-label={`Abrir ${project.kind.toLocaleLowerCase("pt-BR")} ${project.title}`}
              className={styles.catalogLink}
              draggable={false}
              href={project.href}
              onClick={avoidAccidentalNavigation}
              onDragStart={(event) => event.preventDefault()}
            >
              <Image
                alt={project.imageAlt}
                className={styles.catalogImage}
                draggable={false}
                fill
                loading="eager"
                quality={90}
                sizes="(min-width: 1024px) 25rem, (min-width: 640px) 48vw, 78vw"
                src={project.image}
                unoptimized={index === 0}
              />
              <span aria-hidden="true" className={styles.catalogWash} />
              <span className={styles.catalogCopy}>
                <span className={styles.catalogTag}>{project.kind}</span>
                <h3 className={styles.catalogTitle}>{project.title}</h3>
                <span className={styles.catalogSummary}>{project.summary}</span>
              </span>
              <span aria-hidden="true" className={styles.catalogArrow}>
                <ArrowIcon />
              </span>
            </Link>
          </article>
        ))}
      </div>

      <div className={styles.railControls}>
        <button
          aria-label="Ver projetos anteriores"
          className={`${styles.railButton} ${styles.railButtonPrevious}`}
          disabled={!canScroll.left}
          onClick={() => moveRail(-1)}
          type="button"
        >
          <ArrowIcon />
        </button>
        <button
          aria-label="Ver próximos projetos"
          className={styles.railButton}
          disabled={!canScroll.right}
          onClick={() => moveRail(1)}
          type="button"
        >
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
}
