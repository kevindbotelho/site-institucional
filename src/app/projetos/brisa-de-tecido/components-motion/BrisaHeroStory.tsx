"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { BsDiamondFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";
import { HiOutlineHome } from "react-icons/hi2";

import styles from "../project.module.css";

const heroMoments = [
  {
    number: "01",
    phrase: "Sua sala com outro respiro.",
  },
  {
    number: "02",
    phrase: "Renovar é cuidar do que te acolhe.",
  },
  {
    number: "03",
    phrase: "Mais leveza, todo dia.",
  },
] as const;

const stepPositions = [0.06, 0.5, 0.91] as const;
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onStoreChange: () => void) {
  const query = window.matchMedia(reducedMotionQuery);
  query.addEventListener("change", onStoreChange);
  return () => query.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(reducedMotionQuery).matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

type BrisaHeroStoryProps = {
  whatsappUrl: string;
};

export function BrisaHeroStory({ whatsappUrl }: BrisaHeroStoryProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<number | null>(null);
  const [activeMoment, setActiveMoment] = useState(0);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  const updateStory = useCallback(() => {
    frameRef.current = null;

    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia(reducedMotionQuery).matches;

    if (reduceMotion) {
      section.style.setProperty("--hero-progress", "0");
      setActiveMoment(0);
      return;
    }

    const rect = section.getBoundingClientRect();
    const scrollDistance = Math.max(section.offsetHeight - window.innerHeight, 1);
    const progress = Math.min(Math.max(-rect.top / scrollDistance, 0), 1);
    const nextMoment = progress < 1 / 3 ? 0 : progress < 2 / 3 ? 1 : 2;

    section.style.setProperty("--hero-progress", String(progress));
    setActiveMoment((currentMoment) =>
      currentMoment === nextMoment ? currentMoment : nextMoment,
    );

  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const motionQuery = window.matchMedia(reducedMotionQuery);
    const previousScrollRestoration = window.history.scrollRestoration;

    // Next preserves the previous document position during client navigation.
    // This story needs to start at its first interval every time the route opens.
    window.history.scrollRestoration = "manual";
    const resetStoryPosition = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      updateStory();
    };

    const scheduleUpdate = () => {
      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(updateStory);
    };

    const syncMotionPreference = () => {
      const shouldReduce = motionQuery.matches;

      if (video) {
        if (shouldReduce) {
          video.pause();
          if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
            video.currentTime = Math.min(0.8, video.duration || 0.8);
          }
        } else if (video.paused && !video.ended) {
          void video.play().catch(() => undefined);
        }
      }

      scheduleUpdate();
    };

    const startVideo = () => {
      if (!video || motionQuery.matches) return;
      video.currentTime = 0;
      void video.play().catch(() => undefined);
    };

    const resumeVideoOnReturn = () => {
      if (
        !video ||
        document.visibilityState !== "visible" ||
        motionQuery.matches ||
        video.ended
      ) {
        return;
      }

      void video.play().catch(() => undefined);
    };

    video?.addEventListener("loadedmetadata", startVideo, { once: true });
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    document.addEventListener("visibilitychange", resumeVideoOnReturn);
    motionQuery.addEventListener("change", syncMotionPreference);
    resetStoryPosition();

    // Next may apply its own scroll restoration just after the route mounts.
    // Re-sync on the next frames so client-side entry and a hard reload behave alike.
    const firstFrame = window.requestAnimationFrame(() => {
      resetStoryPosition();
      window.requestAnimationFrame(scheduleUpdate);
    });
    const deferredReset = window.setTimeout(resetStoryPosition, 0);

    if (video?.readyState && video.readyState >= HTMLMediaElement.HAVE_METADATA) {
      startVideo();
    }

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
      video?.removeEventListener("loadedmetadata", startVideo);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      document.removeEventListener("visibilitychange", resumeVideoOnReturn);
      motionQuery.removeEventListener("change", syncMotionPreference);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
      window.cancelAnimationFrame(firstFrame);
      window.clearTimeout(deferredReset);
    };
  }, [updateStory]);

  const moveToMoment = (index: number) => {
    const section = sectionRef.current;
    if (!section || reducedMotion) return;

    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const scrollDistance = Math.max(section.offsetHeight - window.innerHeight, 0);

    window.scrollTo({
      behavior: "smooth",
      top: sectionTop + scrollDistance * stepPositions[index],
    });
  };

  return (
    <section
      aria-labelledby="brisa-hero-title"
      className={styles.heroStory}
      data-active-moment={activeMoment + 1}
      id="inicio"
      ref={sectionRef}
    >
      <div className={styles.heroSticky}>
        <video
          aria-hidden="true"
          autoPlay
          className={styles.heroVideo}
          muted
          playsInline
          poster="/images/projects/brisa-de-tecido-scroll-poster.png"
          preload="auto"
          ref={videoRef}
          tabIndex={-1}
        >
          <source
            src="/videos/projects/brisa-de-tecido-cleaning-scroll.mp4"
            type="video/mp4"
          />
        </video>

        <div aria-hidden="true" className={styles.heroVeil} />

        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>
            <HiOutlineHome aria-hidden="true" />
            Higienização em domicílio
          </p>

          <h1 id="brisa-hero-title">Seu sofá mais leve.</h1>

          <div aria-hidden="true" className={styles.heroSeparator}>
            <BsDiamondFill />
          </div>

          <div
            aria-live="polite"
            aria-relevant="text"
            className={styles.heroPhraseViewport}
          >
            {heroMoments.map((moment, index) => (
              <p
                aria-hidden={reducedMotion ? false : activeMoment !== index}
                className={styles.heroPhrase}
                data-active={activeMoment === index ? "true" : undefined}
                key={moment.number}
              >
                <em>{moment.phrase}</em>
              </p>
            ))}
          </div>

          <a
            className={styles.primaryButton}
            href={whatsappUrl}
            rel="noreferrer"
            target="_blank"
          >
            <FaWhatsapp aria-hidden="true" />
            <span>Pedir orçamento pelo WhatsApp</span>
            <span aria-hidden="true" className={styles.ctaArrow}>→</span>
          </a>
        </div>

        <div
          aria-label="Escolher momento da apresentação"
          className={styles.heroProgress}
        >
          {heroMoments.map((moment, index) => (
            <button
              aria-label={`Ir para o momento ${index + 1}: ${moment.phrase}`}
              aria-pressed={activeMoment === index}
              data-active={activeMoment === index ? "true" : undefined}
              key={moment.number}
              onClick={() => moveToMoment(index)}
              type="button"
            >
              <span aria-hidden="true" />
              {moment.number}/03
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
