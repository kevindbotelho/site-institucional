"use client";

import type { PointerEvent } from "react";

const contextCards = [
  {
    eyebrow: "Clareza",
    title: "Explicar com clareza",
    description: "Um site que explica bem o que você faz.",
    visual: "hierarchy",
    dark: false,
  },
  {
    eyebrow: "Direção",
    title: "Criar um caminho",
    description: "Uma landing page que conduz o contato para o WhatsApp.",
    visual: "path",
    dark: true,
  },
  {
    eyebrow: "Organização",
    title: "Organizar para acompanhar",
    description:
      "Dados e informações apresentados de um jeito mais fácil de acompanhar.",
    visual: "data",
    dark: false,
  },
] as const;

function HierarchyVisual() {
  return (
    <div aria-hidden="true" className="relative h-28 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center font-[family-name:Manrope,Arial,sans-serif] text-[1.2rem] font-extrabold tracking-normal text-slate-500/45 blur-[1.6px] transition-[opacity,transform] duration-[600ms] group-hover:translate-x-0 group-hover:opacity-15 motion-reduce:translate-x-0 motion-reduce:opacity-15 motion-reduce:transition-none [@media(hover:none)]:translate-x-0 [@media(hover:none)]:opacity-15">
        <span className="-translate-x-1 -translate-y-1">O que você faz.</span>
      </div>

      <div className="absolute inset-0 flex items-center justify-center font-[family-name:Manrope,Arial,sans-serif] text-[1.2rem] font-extrabold tracking-normal text-blue-600/30 blur-[1.2px] transition-[opacity,transform] duration-[600ms] group-hover:translate-x-0 group-hover:opacity-10 motion-reduce:translate-x-0 motion-reduce:opacity-10 motion-reduce:transition-none [@media(hover:none)]:translate-x-0 [@media(hover:none)]:opacity-10">
        <span className="translate-x-1 translate-y-1">O que você faz.</span>
      </div>

      <div className="absolute inset-0 flex items-center justify-center font-[family-name:Manrope,Arial,sans-serif] text-[1.2rem] font-extrabold tracking-normal text-slate-800 opacity-55 blur-[0.7px] transition-[filter,opacity] duration-[600ms] group-hover:opacity-100 group-hover:blur-0 motion-reduce:opacity-100 motion-reduce:blur-0 motion-reduce:transition-none [@media(hover:none)]:opacity-100 [@media(hover:none)]:blur-0">
        <span>
          O que{" "}
          <span className="relative inline-block">
            você faz.
            <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-transform delay-200 duration-[600ms] group-hover:scale-x-100 motion-reduce:scale-x-100 motion-reduce:transition-none [@media(hover:none)]:scale-x-100" />
          </span>
        </span>
      </div>

      <div className="absolute inset-0 flex items-center justify-center [clip-path:circle(2.15rem_at_30%_50%)] font-[family-name:Manrope,Arial,sans-serif] text-[1.2rem] font-extrabold tracking-normal text-slate-950 transition-[clip-path] duration-[600ms] ease-out group-hover:[clip-path:circle(2.15rem_at_50%_50%)] motion-reduce:[clip-path:circle(2.15rem_at_50%_50%)] motion-reduce:transition-none [@media(hover:none)]:[clip-path:circle(2.15rem_at_50%_50%)]">
        <span>O que você faz.</span>
      </div>

      <div className="pointer-events-none absolute left-[30%] top-1/2 size-[4.3rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blue-500/80 bg-blue-100/10 shadow-[inset_0_0_18px_rgba(59,130,246,0.12),0_8px_24px_rgba(37,99,235,0.16)] transition-[left,box-shadow] duration-[600ms] ease-out group-hover:left-1/2 group-hover:shadow-[inset_0_0_18px_rgba(59,130,246,0.08),0_10px_28px_rgba(37,99,235,0.22)] motion-reduce:left-1/2 motion-reduce:transition-none [@media(hover:none)]:left-1/2">
        <span className="absolute -bottom-3 right-0 h-5 w-1.5 rotate-[-42deg] rounded-full bg-gradient-to-b from-blue-500 to-indigo-600 shadow-[0_3px_8px_rgba(37,99,235,0.25)]" />
      </div>
    </div>
  );
}

function PathVisual() {
  return (
    <div aria-hidden="true" className="relative h-28 overflow-hidden">
      <span className="absolute left-[32%] top-3 size-5 rotate-12 rounded-md border border-white/20 bg-white/10" />
      <span className="absolute left-[48%] top-[3.6rem] h-6 w-4 -rotate-6 rounded-sm border border-blue-200/20 bg-blue-200/10" />
      <span className="absolute bottom-2 left-[66%] size-5 rotate-45 rounded-sm border border-white/20 bg-white/[0.08]" />

      <svg className="absolute inset-0 h-full w-full" fill="none" preserveAspectRatio="none" viewBox="0 0 280 112">
        <defs>
          <linearGradient id="context-route" x1="14" x2="258" y1="83" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#93c5fd" stopOpacity="0.45" />
            <stop offset="0.52" stopColor="#bfdbfe" />
            <stop offset="1" stopColor="#ffffff" />
          </linearGradient>
          <filter id="context-route-glow" x="-20%" y="-40%" width="140%" height="180%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>
        <path d="M15 83C55 83 49 33 92 35C130 37 107 91 151 86C191 81 169 25 216 29C234 30 247 25 260 16" stroke="url(#context-route)" strokeLinecap="round" strokeWidth="2" />
        <path className="transition-[stroke-dashoffset] duration-700 group-hover:[stroke-dashoffset:-70] motion-reduce:transition-none" d="M15 83C55 83 49 33 92 35C130 37 107 91 151 86C191 81 169 25 216 29C234 30 247 25 260 16" filter="url(#context-route-glow)" pathLength="100" stroke="#93c5fd" strokeDasharray="18 82" strokeLinecap="round" strokeWidth="7" />
        <circle cx="15" cy="83" fill="#bfdbfe" r="5" />
        <circle cx="15" cy="83" fill="#ffffff" r="2" />
      </svg>

      <span className="absolute right-0 top-0 grid size-9 place-items-center rounded-lg border border-white/25 bg-white/15 shadow-[0_0_24px_rgba(147,197,253,0.4)] backdrop-blur-sm">
        <svg className="size-5 text-white" fill="none" viewBox="0 0 20 20">
          <path d="M5.2 5.5h9.6v6.3H10l-3.1 2.7v-2.7H5.2z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.4" />
          <path d="M8 8.6h4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
        </svg>
      </span>
    </div>
  );
}

function DataVisual() {
  return (
    <div aria-hidden="true" className="relative h-28 overflow-hidden">
      <div className="absolute left-1 top-3 h-[5.5rem] w-[35%]">
        <span className="absolute left-1 top-1 h-6 w-11 -rotate-6 rounded-md border border-blue-200 bg-white shadow-sm transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-1 group-hover:rotate-0 motion-reduce:transition-none">
          <span className="absolute left-2 top-2 h-1 w-6 rounded-full bg-blue-300" />
        </span>
        <span className="absolute right-0 top-8 h-5 w-9 rotate-6 rounded-md border border-indigo-200 bg-indigo-50 shadow-sm transition-transform delay-75 duration-500 group-hover:-translate-x-1 group-hover:translate-y-1 group-hover:rotate-0 motion-reduce:transition-none">
          <span className="absolute left-2 top-[0.45rem] h-1 w-4 rounded-full bg-indigo-300" />
        </span>
        <span className="absolute bottom-0 left-3 h-5 w-12 rotate-3 rounded-md border border-slate-200 bg-white shadow-sm transition-transform delay-150 duration-500 group-hover:translate-x-2 group-hover:-translate-y-1 group-hover:rotate-0 motion-reduce:transition-none">
          <span className="absolute left-2 top-[0.45rem] h-1 w-7 rounded-full bg-slate-300" />
        </span>
      </div>

      <svg className="absolute left-[40%] top-1/2 h-5 w-[13%] -translate-y-1/2 text-blue-500" fill="none" viewBox="0 0 36 20">
        <path
          className="transition-[stroke-dashoffset] duration-500 group-hover:[stroke-dashoffset:0] motion-reduce:transition-none"
          d="M2 10H31M25 4L31 10L25 16"
          pathLength="40"
          stroke="currentColor"
          strokeDasharray="40"
          strokeDashoffset="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>

      <div className="absolute right-1 top-3 flex h-[5.5rem] w-[42%] flex-col justify-center gap-2 rounded-lg border border-blue-100 bg-white/85 p-2 shadow-[0_10px_25px_rgba(37,99,235,0.08)]">
        {["w-[72%]", "w-[88%]", "w-[62%]"].map((width, index) => (
          <span
            className="flex h-4 items-center gap-2 rounded-md border border-slate-100 bg-slate-50 px-1.5 transition-[border-color,background-color,transform] duration-500 group-hover:translate-x-0.5 group-hover:border-blue-200 group-hover:bg-blue-50 motion-reduce:transition-none"
            key={width}
            style={{ transitionDelay: `${index * 90}ms` }}
          >
            <span className={`h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 ${width}`} />
            <span className="ml-auto size-1.5 shrink-0 rounded-full bg-blue-300 transition-colors duration-500 group-hover:bg-indigo-500 motion-reduce:transition-none" />
          </span>
        ))}
      </div>
    </div>
  );
}

function CardVisual({ visual }: { visual: (typeof contextCards)[number]["visual"] }) {
  if (visual === "hierarchy") return <HierarchyVisual />;
  if (visual === "path") return <PathVisual />;
  return <DataVisual />;
}

function updateGlow(event: PointerEvent<HTMLElement>) {
  if (event.pointerType !== "mouse") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const card = event.currentTarget;
  const bounds = card.getBoundingClientRect();
  card.style.setProperty("--context-x", `${event.clientX - bounds.left}px`);
  card.style.setProperty("--context-y", `${event.clientY - bounds.top}px`);
}

export function HomeContext() {
  return (
    <section
      aria-labelledby="home-context-title"
      className="relative isolate overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <header className="max-w-4xl" data-scroll-reveal="true">
          <p className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-normal text-blue-700">
            <span aria-hidden="true" className="h-px w-7 bg-gradient-to-r from-blue-600 to-indigo-600" />
            Contexto
          </p>
          <h2
            id="home-context-title"
            className="mt-5 max-w-4xl font-[family-name:Manrope,Arial,sans-serif] text-[2rem] font-extrabold leading-[1.16] text-slate-950 sm:text-[2.55rem] lg:text-[3rem]"
          >
            <span>Quando a ideia existe,</span>{" "}
            <span className="sm:block">
              mas{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                falta alguém
              </span>{" "}
              para colocá-la no ar.
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-slate-600 sm:text-lg sm:leading-8">
            A solução não precisa começar complexa: ela precisa começar útil.
          </p>
        </header>

        <div className="mt-10 grid min-w-0 gap-3 sm:mt-12 lg:grid-cols-[0.95fr_1.1fr_0.95fr] lg:gap-4">
          {contextCards.map((card, index) => (
            <article
              className={`group relative min-w-0 overflow-hidden rounded-lg border p-5 shadow-[0_18px_45px_rgba(30,64,175,0.08)] sm:p-6 ${
                card.dark
                  ? "border-indigo-400/30 bg-gradient-to-br from-blue-700 via-indigo-700 to-indigo-950 text-white"
                  : "border-white/90 bg-white/68 text-slate-950 backdrop-blur-xl"
              }`}
              data-scroll-reveal="true"
              data-scroll-reveal-delay={index * 80}
              key={card.title}
              onPointerMove={updateGlow}
            >
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 opacity-55 transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none ${
                  card.dark
                    ? "[background:radial-gradient(260px_circle_at_var(--context-x,50%)_var(--context-y,38%),rgba(147,197,253,0.32),transparent_68%)]"
                    : "[background:radial-gradient(260px_circle_at_var(--context-x,50%)_var(--context-y,38%),rgba(59,130,246,0.16),transparent_68%)]"
                }`}
              />

              <div className="relative flex min-h-[18rem] flex-col">
                <div className={`flex items-center justify-between text-[0.66rem] font-bold uppercase tracking-normal ${card.dark ? "text-blue-100" : "text-blue-700"}`}>
                  <span>{card.eyebrow}</span>
                  <span aria-hidden="true" className={card.dark ? "text-white/45" : "text-slate-400"}>
                    0{index + 1}
                  </span>
                </div>

                <div className={`mt-5 rounded-lg border px-4 ${card.dark ? "border-white/15 bg-white/[0.07]" : "border-slate-200/80 bg-slate-50/75"}`}>
                  <CardVisual visual={card.visual} />
                </div>

                <div className="mt-auto pt-6">
                  <h3 className="font-[family-name:Manrope,Arial,sans-serif] text-xl font-extrabold leading-tight sm:text-[1.35rem]">
                    {card.title}
                  </h3>
                  <p className={`mt-3 text-sm leading-6 ${card.dark ? "text-blue-50/85" : "text-slate-600"}`}>
                    {card.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
