"use client";

import { type PointerEvent, useRef } from "react";

import { HomeSectionLink } from "@/components/navigation/HomeSectionLink";
import { siteConfig } from "@/content/site";
import { getWhatsAppUrl } from "@/lib/contact";

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 8h10M8.5 4l4 4-4 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function HeroVisual() {
  const stageRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const stage = stageRef.current;

    if (!stage) return;

    const bounds = stage.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;

    stage.style.setProperty("--stage-rotate-x", `${vertical * -4.5}deg`);
    stage.style.setProperty("--stage-rotate-y", `${horizontal * 6}deg`);
    stage.style.setProperty("--stage-shift-x", `${horizontal * 13}px`);
    stage.style.setProperty("--stage-shift-y", `${vertical * 10}px`);
    stage.style.setProperty("--card-rotate-x", `${vertical * -3.2}deg`);
    stage.style.setProperty("--card-rotate-y", `${horizontal * 5.5}deg`);
    stage.style.setProperty("--stage-light-x", `${(horizontal + 0.5) * 100}%`);
    stage.style.setProperty("--stage-light-y", `${(vertical + 0.5) * 100}%`);
  }

  function resetStage() {
    const stage = stageRef.current;

    if (!stage) return;

    stage.style.setProperty("--stage-rotate-x", "1.5deg");
    stage.style.setProperty("--stage-rotate-y", "-3deg");
    stage.style.setProperty("--stage-shift-x", "0px");
    stage.style.setProperty("--stage-shift-y", "0px");
    stage.style.setProperty("--card-rotate-x", "0deg");
    stage.style.setProperty("--card-rotate-y", "0deg");
    stage.style.setProperty("--stage-light-x", "50%");
    stage.style.setProperty("--stage-light-y", "50%");
  }

  return (
    <div
      aria-hidden="true"
      className="hero-visual hero-visual-enter relative mx-auto w-full max-w-[32rem] [--hero-delay:380ms]"
      onPointerLeave={resetStage}
      onPointerMove={handlePointerMove}
      ref={stageRef}
    >
      <div className="absolute -left-8 top-8 size-40 rounded-full bg-blue-300/35 blur-3xl" />
      <div className="absolute -right-7 bottom-2 size-44 rounded-full bg-indigo-300/35 blur-3xl" />
      <div className="hero-stage-frame relative" style={{ boxShadow: "none" }}>
        <div className="hero-stage-window relative aspect-[16/10] overflow-hidden rounded-[1.25rem]">
          <video
            autoPlay
            className="size-full object-cover"
            loop
            muted
            playsInline
            preload="metadata"
            src="/videos/video_hero.mp4"
          />
          <div className="hero-stage-light absolute inset-0 z-10" />
        </div>

        <div className="hero-stage-float absolute bottom-5 left-6 z-20 sm:bottom-8 sm:left-8">
          <article className="hero-glass-card">
            <div className="hero-glass-card-top">
              <span className="hero-glass-card-dot" />
              <p>Solução em foco</p>
            </div>
            <p className="hero-glass-card-title">Do problema ao próximo passo</p>
            <p className="hero-glass-card-services">Sites <span>·</span> dados <span>·</span> automação</p>
            <span aria-hidden="true" className="hero-glass-card-progress">
              <span />
            </span>
          </article>
        </div>
      </div>
    </div>
  );
}

export function HomeHero() {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.contact.whatsappNumber,
    siteConfig.contact.defaultWhatsAppMessage,
  );

  return (
    <section
        aria-labelledby="hero-title"
        className="relative isolate flex min-h-[calc(100svh-4.75rem)] scroll-mt-24 flex-col justify-center px-4 pb-14 pt-14 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-20"
        id="inicio"
      >
        <div aria-hidden="true" className="absolute left-[-12rem] top-[-10rem] -z-10 size-[34rem] rounded-full bg-blue-200/55 blur-3xl" />
        <div aria-hidden="true" className="absolute right-[-13rem] top-1/4 -z-10 size-[35rem] rounded-full bg-indigo-200/50 blur-3xl" />
        <div aria-hidden="true" className="absolute bottom-[-17rem] left-1/3 -z-10 size-[32rem] rounded-full bg-sky-100/70 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,0.96fr)_minmax(25rem,0.8fr)] lg:gap-16">
          <div className="relative">
            <p className="hero-eyebrow-enter flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-blue-700">
              <span aria-hidden="true" className="h-px w-7 bg-gradient-to-r from-blue-600 to-indigo-600" />
              Presença digital, processos e dados
            </p>
            <h1
              aria-label="Sites e soluções digitais que fazem seu negócio avançar."
              data-home-section-focus
              id="hero-title"
              className="mt-5 max-w-xl font-[family-name:Manrope,Arial,sans-serif] text-[2.25rem] font-extrabold leading-[1.22] tracking-[-0.07em] text-slate-950 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 sm:text-[2.9rem] lg:text-[3rem]"
              tabIndex={-1}
            >
              <span aria-hidden="true">
                <span className="hero-accent hero-title-chunk [--hero-delay:240ms]">
                  Sites e
                </span>{" "}
                <span className="hero-accent hero-title-chunk [--hero-delay:340ms]">
                  soluções digitais
                </span>{" "}
                <span className="hero-title-chunk [--hero-delay:470ms]">
                  que fazem
                </span>{" "}
                <span className="hero-title-chunk [--hero-delay:570ms]">
                  seu negócio
                </span>{" "}
                <span className="hero-title-chunk [--hero-delay:670ms]">
                  avançar.
                </span>
              </span>
            </h1>
            <p
              className="hero-support-enter mt-5 max-w-[29rem] text-[0.88rem] leading-6 text-slate-600 [--hero-delay:870ms] sm:text-[0.94rem] sm:leading-[1.7]"
            >
              Transformo necessidades do dia a dia em sites, páginas e ferramentas digitais claras, úteis e prontas para apoiar o crescimento do seu negócio.
            </p>
            <div
              className="hero-support-enter mt-8 flex flex-col gap-3 [--hero-delay:1040ms] sm:flex-row sm:flex-wrap"
            >
              <a
                className="relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 text-sm font-bold text-white shadow-[0_14px_28px_rgba(49,89,189,0.3)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(49,89,189,0.38)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 before:absolute before:-left-12 before:top-[-30%] before:h-[160%] before:w-9 before:rotate-[18deg] before:bg-gradient-to-r before:from-transparent before:via-white/70 before:to-transparent before:transition-transform before:duration-700 hover:before:translate-x-64"
                href={whatsappUrl}
                rel="noreferrer"
                target="_blank"
              >
                <span className="relative">Tirar uma ideia do papel</span>
                <ArrowRightIcon />
              </a>
              <HomeSectionLink
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/75 px-6 text-sm font-bold text-slate-800 shadow-[0_8px_22px_rgba(30,64,175,0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/70 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
                href="/#projetos"
                targetId="projetos"
              >
                Ver projetos
                <ArrowRightIcon />
              </HomeSectionLink>
            </div>
            <dl className="hero-metadata hero-support-enter mt-10 flex max-w-xl [--hero-delay:1280ms]">
              <div>
                <dt>01</dt>
                <dd>
                  Presença que
                  <br />
                  explica
                </dd>
              </div>
              <div>
                <dt>02</dt>
                <dd>
                  Rotina mais
                  <br />
                  simples
                </dd>
              </div>
              <div>
                <dt>03</dt>
                <dd>
                  Ideias no
                  <br />
                  ar
                </dd>
              </div>
            </dl>
          </div>

          <HeroVisual />
        </div>
    </section>
  );
}
