import type { ReactNode } from "react";

const serviceExamples = {
  institutionalSites: [
    "presença digital",
    "apresentação de empresa",
    "serviços",
    "localização e contato",
  ],
  dashboards: [
    "acompanhamento de indicadores",
    "organização de dados",
    "apoio à rotina de decisão",
  ],
  automations: [
    "planilhas conectadas",
    "rotinas repetitivas",
    "fluxos simples",
  ],
} as const;

const serviceCardClassName =
  "group relative min-w-0 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#101830] text-white shadow-[0_24px_60px_rgba(3,8,24,0.28)] transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1.5 hover:border-blue-300/40 hover:shadow-[0_32px_72px_rgba(37,99,235,0.2)] motion-reduce:transition-none";

function SiteIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      viewBox="0 0 24 24"
    >
      <rect height="15" rx="2.5" stroke="currentColor" strokeWidth="1.6" width="18" x="3" y="4.5" />
      <path d="M3 9h18M7 6.75h.01M10 6.75h.01M13 6.75h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
      <path d="M7.5 13h3.25M7.5 16.5h6.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    </svg>
  );
}

function DataIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      viewBox="0 0 24 24"
    >
      <path d="M5 19V9M12 19V5M19 19v-7" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M3.5 19.5h17" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="m5 7 7-3 7 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function FlowIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      focusable="false"
      viewBox="0 0 24 24"
    >
      <circle cx="5" cy="12" fill="currentColor" r="2.25" />
      <circle cx="19" cy="6" fill="currentColor" r="2.25" />
      <circle cx="19" cy="18" fill="currentColor" r="2.25" />
      <path d="M7.25 11.25 16.75 6.75M7.25 12.75l9.5 4.5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    </svg>
  );
}

function CardMeta({
  icon,
  label,
  number,
}: {
  icon: ReactNode;
  label: string;
  number: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex min-w-0 items-center gap-2.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-blue-300">
        <span className="grid size-7 shrink-0 place-items-center rounded-lg border border-blue-300/20 bg-blue-500/10 text-blue-300">
          {icon}
        </span>
        <span className="truncate">{label}</span>
      </div>
      <span aria-hidden="true" className="shrink-0 text-xs font-semibold text-white/35">
        {number}
      </span>
    </div>
  );
}

function StatusPill({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <span className="inline-flex max-w-full items-center gap-2 rounded-md border border-blue-400/25 bg-blue-500/10 px-3 py-1.5 text-[0.68rem] font-semibold text-blue-200">
      <span className="shrink-0 text-blue-300">{icon}</span>
      <span className="truncate">{children}</span>
    </span>
  );
}

function ExampleList({ examples }: { examples: readonly string[] }) {
  return (
    <ul aria-label="Exemplos do serviço" className="mt-5 flex flex-wrap gap-2">
      {examples.map((example) => (
        <li
          className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs font-medium leading-4 text-slate-300"
          key={example}
        >
          {example}
        </li>
      ))}
    </ul>
  );
}

function SiteVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative flex min-h-[21rem] flex-1 flex-col overflow-hidden border-t border-white/[0.07] bg-[#080e1e]/80 p-4 sm:min-h-[23rem] sm:p-6 lg:min-h-0"
    >
      <div className="absolute -right-16 -top-20 size-56 rounded-full bg-blue-500/15 blur-3xl transition-transform duration-700 group-hover:scale-110 motion-reduce:transition-none" />
      <div className="absolute bottom-0 left-1/4 h-px w-1/2 bg-gradient-to-r from-transparent via-blue-400/35 to-transparent" />

      <div className="relative mx-auto flex max-w-2xl flex-col gap-3 rounded-2xl border border-white/10 bg-[#101a35]/95 p-3 shadow-[0_22px_42px_rgba(0,0,0,0.25)] transition-[border-color,box-shadow] duration-700 ease-in-out group-hover:border-blue-300/30 group-hover:shadow-[0_26px_52px_rgba(37,99,235,0.16)] motion-reduce:transition-none sm:gap-4 sm:p-4">
        <div className="flex items-center gap-2 border-b border-white/10 pb-3">
          <span className="grid size-7 shrink-0 place-items-center rounded-lg border border-blue-300/20 bg-blue-400/10 text-blue-300">
            <SiteIcon className="size-3.5" />
          </span>
          <span className="h-1.5 w-20 rounded-full bg-white/35 sm:w-28" />
          <div className="ml-auto flex items-center gap-2">
            <span className="hidden h-1.5 w-10 rounded-full bg-white/15 sm:block" />
            <span className="hidden h-1.5 w-12 rounded-full bg-white/15 sm:block" />
            <span className="h-5 w-12 rounded-md border border-blue-300/25 bg-blue-400/10 transition-[background-color,box-shadow] duration-500 ease-in-out group-hover:bg-blue-400/20 group-hover:shadow-[0_0_16px_rgba(96,165,250,0.2)] motion-reduce:transition-none" />
          </div>
        </div>

        <div className="grid min-h-[10.5rem] grid-cols-[1.08fr_0.92fr] gap-3 sm:min-h-[11.5rem] sm:gap-4">
          <div className="relative flex flex-col justify-center overflow-hidden rounded-xl border border-blue-300/20 bg-gradient-to-br from-blue-500/80 via-indigo-500/70 to-indigo-700/70 p-4 shadow-[0_18px_35px_rgba(0,0,0,0.2)] transition-[box-shadow,filter] duration-700 ease-in-out group-hover:brightness-105 group-hover:shadow-[0_22px_40px_rgba(30,64,175,0.34)] motion-reduce:transition-none sm:p-5">
            <span className="h-1.5 w-14 rounded-full bg-white/70 sm:w-20" />
            <div className="mt-4 space-y-2">
              <span className="block h-2 w-full rounded-full bg-white/35" />
              <span className="block h-2 w-4/5 rounded-full bg-white/25" />
              <span className="block h-2 w-3/5 rounded-full bg-white/20" />
            </div>
            <span className="mt-5 h-6 w-20 rounded-full border border-white/40 bg-white/15 transition-[background-color,box-shadow] duration-500 ease-in-out group-hover:bg-white/25 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.16)] motion-reduce:transition-none sm:w-24" />
            <span className="absolute -bottom-8 -right-8 size-24 rounded-full bg-white/15 blur-2xl transition-[opacity,transform] duration-700 ease-in-out group-hover:scale-110 group-hover:opacity-80 motion-reduce:transition-none" />
          </div>

          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#162342] p-3 shadow-[0_18px_35px_rgba(0,0,0,0.2)] transition-[border-color,box-shadow] delay-75 duration-700 ease-in-out group-hover:border-blue-300/25 group-hover:shadow-[0_22px_40px_rgba(30,64,175,0.2)] motion-reduce:transition-none sm:p-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="h-1.5 w-16 rounded-full bg-white/35 sm:w-20" />
              <span className="size-5 rounded-full border border-blue-300/25 bg-blue-400/10" />
            </div>
            <div className="absolute right-3 top-1/2 size-20 -translate-y-1/2 rounded-full border border-blue-300/20 bg-blue-400/10 transition-[transform,border-color,background-color,box-shadow] duration-700 ease-in-out group-hover:scale-105 group-hover:border-blue-200/60 group-hover:bg-blue-400/15 group-hover:shadow-[0_0_30px_rgba(96,165,250,0.2)] motion-reduce:transition-none sm:right-5 sm:size-24">
              <span className="absolute -inset-2 rounded-full border border-blue-200/20 opacity-0 transition-[transform,opacity] duration-700 ease-in-out group-hover:scale-105 group-hover:opacity-100 motion-reduce:transition-none" />
              <span className="absolute inset-3 rounded-full border border-indigo-300/25 transition-[transform,border-color] duration-700 ease-in-out group-hover:scale-105 group-hover:border-blue-200/60 motion-reduce:transition-none" />
              <span className="absolute left-1/2 top-1/2 h-px w-10 -translate-x-1/2 rotate-[-28deg] bg-gradient-to-r from-transparent via-blue-200/90 to-transparent transition-[width,transform] duration-700 ease-in-out group-hover:w-16 group-hover:rotate-[-18deg] motion-reduce:transition-none" />
              <span className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200 shadow-[0_0_0_5px_rgba(96,165,250,0.1)] transition-[transform,box-shadow,background-color] duration-500 ease-in-out group-hover:scale-110 group-hover:bg-white group-hover:shadow-[0_0_0_7px_rgba(96,165,250,0.16),0_0_18px_rgba(147,197,253,0.7)] motion-reduce:transition-none" />
            </div>
            <div className="absolute bottom-4 left-3 right-3 space-y-2 sm:left-4 sm:right-4">
              <span className="block h-1.5 w-3/5 rounded-full bg-blue-300/45 transition-colors duration-500 ease-in-out group-hover:bg-blue-200/70 motion-reduce:transition-none" />
              <span className="block h-1.5 w-full rounded-full bg-white/10 transition-colors delay-75 duration-500 ease-in-out group-hover:bg-blue-200/20 motion-reduce:transition-none" />
              <span className="block h-1.5 w-4/5 rounded-full bg-white/10 transition-colors delay-150 duration-500 ease-in-out group-hover:bg-blue-200/20 motion-reduce:transition-none" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-3 sm:gap-3 sm:pt-4">
          <div className="rounded-lg border border-white/[0.07] bg-white/[0.04] p-2.5 transition-[background-color,border-color] duration-500 ease-in-out group-hover:border-blue-300/15 group-hover:bg-blue-400/[0.08] motion-reduce:transition-none sm:p-3">
            <span className="block h-1.5 w-2/5 rounded-full bg-blue-300/55" />
            <span className="mt-3 block h-1.5 w-full rounded-full bg-white/10" />
            <span className="mt-1.5 block h-1.5 w-3/4 rounded-full bg-white/10" />
          </div>
          <div className="rounded-lg border border-white/[0.07] bg-white/[0.04] p-2.5 transition-[background-color,border-color] delay-75 duration-500 ease-in-out group-hover:border-indigo-300/15 group-hover:bg-indigo-400/[0.08] motion-reduce:transition-none sm:p-3">
            <span className="block h-1.5 w-1/2 rounded-full bg-indigo-300/55" />
            <span className="mt-3 block h-1.5 w-full rounded-full bg-white/10" />
            <span className="mt-1.5 block h-1.5 w-3/5 rounded-full bg-white/10" />
          </div>
          <div className="rounded-lg border border-white/[0.07] bg-white/[0.04] p-2.5 transition-[background-color,border-color] delay-150 duration-500 ease-in-out group-hover:border-blue-300/15 group-hover:bg-blue-400/[0.08] motion-reduce:transition-none sm:p-3">
            <span className="block h-1.5 w-2/5 rounded-full bg-blue-200/55" />
            <span className="mt-3 block h-1.5 w-full rounded-full bg-white/10" />
            <span className="mt-1.5 block h-1.5 w-4/5 rounded-full bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DataVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative flex min-h-[15.5rem] min-w-0 flex-1 flex-col overflow-hidden border-t border-white/[0.07] bg-[#080e1e]/80 p-5 sm:min-h-[17rem] sm:p-6 lg:min-h-0"
    >
      <div className="absolute -left-14 -top-16 size-44 rounded-full bg-indigo-500/15 blur-3xl transition-transform duration-700 group-hover:scale-110 motion-reduce:transition-none" />
      <div className="absolute right-5 top-5 grid size-9 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-indigo-200 transition-transform duration-700 group-hover:-translate-y-1 group-hover:-rotate-3 motion-reduce:transition-none">
        <DataIcon className="size-4" />
      </div>

      <div className="relative mt-5 flex min-h-[17rem] flex-1 flex-col border-b border-l border-white/10 px-3 pb-3 sm:mt-6 sm:min-h-0">
        <div className="relative flex min-h-[10rem] flex-[1.2] items-end border-b border-white/10 px-0 pb-2 pt-5 sm:min-h-0">
          <div className="absolute inset-x-0 top-1/4 border-t border-dashed border-white/[0.08]" />
          <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-white/[0.08]" />
          <div className="absolute inset-x-0 top-3/4 border-t border-dashed border-white/[0.08]" />
          <div className="relative flex h-full w-full items-end gap-2 sm:gap-2.5">
            <span className="h-[34%] flex-1 rounded-t bg-blue-300/50 transition-[height] duration-700 group-hover:h-[42%] motion-reduce:transition-none" />
            <span className="h-[48%] flex-1 rounded-t bg-indigo-300/60 transition-[height] delay-75 duration-700 group-hover:h-[58%] motion-reduce:transition-none" />
            <span className="h-[40%] flex-1 rounded-t bg-blue-200/45 transition-[height] delay-100 duration-700 group-hover:h-[52%] motion-reduce:transition-none" />
            <span className="h-[62%] flex-1 rounded-t bg-indigo-200/65 transition-[height] delay-150 duration-700 group-hover:h-[72%] motion-reduce:transition-none" />
            <span className="h-[54%] flex-1 rounded-t bg-blue-300/55 transition-[height] delay-200 duration-700 group-hover:h-[68%] motion-reduce:transition-none" />
            <span className="h-[78%] flex-1 rounded-t bg-gradient-to-t from-blue-400/80 to-indigo-300/80 transition-[height] delay-300 duration-700 group-hover:h-[88%] motion-reduce:transition-none" />
          </div>
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-4 h-20 w-full text-blue-200/70"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 240 80"
          >
            <path
              d="M0 58C24 61 27 43 48 47s24-18 43-11c18 6 26-15 44-10 18 6 27-17 43-11 18 6 27-8 62-21"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.5"
            />
            <path
              className="[stroke-dashoffset:100px] opacity-0 transition-[opacity,stroke-dashoffset] duration-700 ease-in-out group-hover:opacity-100 group-hover:[stroke-dashoffset:38px] motion-reduce:transition-none"
              d="M0 58C24 61 27 43 48 47s24-18 43-11c18 6 26-15 44-10 18 6 27-17 43-11 18 6 27-8 62-21"
              pathLength="100"
              stroke="#dbeafe"
              strokeDasharray="18 82"
              strokeLinecap="round"
              strokeWidth="2.5"
            />
          </svg>
        </div>

        <div className="relative flex min-h-[6.5rem] flex-1 items-end gap-3 pt-4 sm:min-h-0 sm:gap-4 sm:pt-5">
          <div className="relative flex h-full w-[31%] min-w-0 items-center justify-center overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.035] p-3 transition-transform duration-700 group-hover:-translate-y-1 group-hover:scale-[1.03] motion-reduce:transition-none">
            <div className="absolute size-24 rounded-full bg-blue-500/10 blur-xl transition-opacity duration-700 group-hover:bg-indigo-400/20 group-hover:opacity-100 motion-reduce:transition-none" />
            <div className="relative size-[4.5rem] sm:size-20">
              <span className="absolute inset-0 rounded-full bg-[conic-gradient(from_205deg,rgba(96,165,250,0.9)_0deg,rgba(96,165,250,0.9)_118deg,transparent_118deg,transparent_154deg,rgba(129,140,248,0.85)_154deg,rgba(129,140,248,0.85)_278deg,transparent_278deg)] p-[5px] transition-transform duration-700 group-hover:rotate-[18deg] group-hover:scale-105 motion-reduce:transition-none">
                <span className="block size-full rounded-full bg-[#111a34]" />
              </span>
              <span className="absolute inset-[0.6rem] rounded-full border border-blue-300/25 border-t-indigo-300/80 border-r-transparent transition-transform delay-75 duration-700 group-hover:-rotate-[28deg] group-hover:scale-110 motion-reduce:transition-none sm:inset-3" />
              <span className="absolute inset-[1.2rem] rounded-full border-2 border-indigo-300/65 border-b-blue-200/90 border-l-transparent transition-transform delay-100 duration-700 group-hover:rotate-[36deg] group-hover:scale-95 motion-reduce:transition-none sm:inset-[1.35rem]" />
              <span className="absolute left-1/2 top-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[#080e1e] shadow-[0_0_0_5px_rgba(15,23,42,0.65)] transition-shadow duration-700 group-hover:shadow-[0_0_0_7px_rgba(59,130,246,0.13)] motion-reduce:transition-none" />
              <span className="absolute -right-0.5 top-3 size-1.5 rounded-full bg-blue-200/85 shadow-[0_0_10px_rgba(147,197,253,0.7)] transition-transform delay-100 duration-700 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transition-none" />
            </div>
          </div>

          <div className="relative min-w-0 flex-1 self-stretch overflow-hidden rounded-xl border border-white/[0.07] bg-[#101a35]/60 p-3 transition-transform delay-75 duration-700 group-hover:translate-y-0.5 motion-reduce:transition-none">
            <div className="absolute inset-x-3 top-1/3 border-t border-dashed border-white/[0.07]" />
            <div className="absolute inset-x-3 top-2/3 border-t border-dashed border-white/[0.07]" />
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-3 size-[calc(100%-1.5rem)] text-blue-200/60"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 180 72"
            >
              <path
                d="M0 50h18l10-14 13 18 13-8 14 5 12-17 14 10 14-7 13 11 16-16 11 5 13-8"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
              <path
                d="M0 62h30m14 0h26m14 0h18m14 0h28m14 0h22"
                stroke="currentColor"
                strokeDasharray="2 5"
                strokeLinecap="round"
                strokeOpacity="0.55"
              />
            </svg>
            <span className="absolute right-3 top-3 size-2 rounded-full bg-blue-300/80 shadow-[0_0_0_5px_rgba(96,165,250,0.08)] motion-safe:animate-pulse motion-reduce:animate-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function AutomationVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative flex min-h-52 min-w-0 flex-1 items-center overflow-hidden border-t border-white/[0.07] bg-[#080e1e]/80 p-5 sm:min-h-56 sm:p-8 lg:border-l lg:border-t-0"
    >
      <div className="absolute -right-12 top-1/2 size-52 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl transition-transform duration-700 ease-in-out group-hover:scale-110 motion-reduce:transition-none" />
      <div className="absolute -left-20 bottom-0 size-40 rounded-full bg-indigo-500/10 blur-3xl transition-opacity duration-700 group-hover:opacity-100 motion-reduce:transition-none" />
      <div className="absolute inset-4 rounded-2xl border border-white/[0.06] bg-[#0b1328]/35 transition-[border-color,box-shadow] duration-700 ease-in-out group-hover:border-blue-300/15 group-hover:shadow-[inset_0_0_40px_rgba(37,99,235,0.06)] motion-reduce:transition-none sm:inset-6">
        <div className="absolute left-4 right-4 top-4 flex items-center gap-2 sm:left-5 sm:right-5 sm:top-5">
          <span className="size-1.5 rounded-full bg-blue-300/70 transition-shadow duration-500 group-hover:shadow-[0_0_10px_rgba(147,197,253,0.85)] motion-reduce:transition-none" />
          <span className="h-1 w-12 rounded-full bg-white/10 sm:w-16" />
          <span className="ml-auto h-1 w-7 rounded-full bg-white/[0.07] sm:w-10" />
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex gap-1.5 sm:bottom-5 sm:left-5 sm:right-5">
          <span className="h-1 flex-1 rounded-full bg-blue-300/10" />
          <span className="h-1 flex-[0.7] rounded-full bg-indigo-300/10" />
          <span className="h-1 flex-[0.45] rounded-full bg-blue-200/10" />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-2xl">
        <div className="grid grid-cols-[1.05fr_0.24fr_0.86fr_0.24fr_0.86fr_0.24fr_0.86fr_0.24fr_0.9fr] items-center gap-1 sm:gap-2">
          <div className="relative z-10 flex aspect-[0.8] min-w-0 flex-col justify-center gap-2 rounded-xl border border-blue-300/20 bg-[#162342] p-2 shadow-[0_14px_28px_rgba(0,0,0,0.2)] transition-[transform,border-color,background-color,box-shadow] duration-500 ease-out group-hover:scale-[1.03] group-hover:border-blue-200/50 group-hover:bg-[#1b2a4e] group-hover:shadow-[0_16px_32px_rgba(59,130,246,0.18)] motion-reduce:transition-none sm:gap-3 sm:p-3">
            <span className="flex items-center justify-between">
              <span className="size-1.5 rounded-full bg-blue-200 shadow-[0_0_10px_rgba(147,197,253,0.7)]" />
              <span className="h-1 w-3 rounded-full bg-white/20 sm:w-5" />
            </span>
            <span className="block h-1.5 w-full rounded-full bg-blue-200/55" />
            <span className="block h-1.5 w-4/5 rounded-full bg-white/15" />
            <span className="block h-1.5 w-3/5 rounded-full bg-white/10" />
          </div>

          <div className="relative h-px bg-blue-300/20">
            <span className="absolute inset-y-0 left-0 w-full origin-left scale-x-0 bg-gradient-to-r from-transparent via-blue-200/90 to-transparent transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none" />
            <span className="absolute -left-1 top-1/2 size-2 -translate-y-1/2 rounded-full bg-blue-100 opacity-0 shadow-[0_0_12px_rgba(191,219,254,0.95)] transition-[left,opacity] duration-500 ease-out group-hover:left-[calc(100%+0.25rem)] group-hover:opacity-100 motion-reduce:transition-none" />
          </div>

          <div className="relative z-10 flex aspect-square min-w-0 flex-col justify-center gap-2 rounded-xl border border-white/10 bg-[#111a34] p-2 transition-[transform,border-color,background-color,box-shadow] duration-500 ease-out group-hover:scale-[1.04] group-hover:delay-150 group-hover:border-blue-200/45 group-hover:bg-[#19274a] group-hover:shadow-[0_16px_30px_rgba(59,130,246,0.16)] motion-reduce:transition-none sm:gap-2.5 sm:p-3">
            <span className="block h-1.5 w-3/5 rounded-full bg-blue-300/45 transition-[width,background-color] duration-500 ease-out group-hover:w-full group-hover:bg-blue-200/75 motion-reduce:transition-none" />
            <span className="block h-1.5 w-full rounded-full bg-white/10" />
            <span className="block h-1.5 w-4/5 rounded-full bg-white/10" />
          </div>

          <div className="relative h-px bg-indigo-300/20">
            <span className="absolute inset-y-0 left-0 w-full origin-left scale-x-0 bg-gradient-to-r from-transparent via-indigo-200/90 to-transparent transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:delay-[180ms] motion-reduce:transition-none" />
            <span className="absolute -left-1 top-1/2 size-2 -translate-y-1/2 rounded-full bg-indigo-100 opacity-0 shadow-[0_0_12px_rgba(199,210,254,0.95)] transition-[left,opacity] duration-500 ease-out group-hover:left-[calc(100%+0.25rem)] group-hover:delay-[180ms] group-hover:opacity-100 motion-reduce:transition-none" />
          </div>

          <div className="relative z-10 grid aspect-square min-w-0 place-items-center rounded-xl border border-white/10 bg-[#111a34] p-2 transition-[transform,border-color,background-color,box-shadow] duration-500 ease-out group-hover:scale-[1.04] group-hover:delay-300 group-hover:border-indigo-200/45 group-hover:bg-[#202653] group-hover:shadow-[0_16px_30px_rgba(99,102,241,0.16)] motion-reduce:transition-none sm:p-3">
            <span className="relative flex h-5 w-full items-center justify-between sm:h-7">
              <span className="size-2 rounded-full border border-blue-200/70 bg-blue-300/20 transition-[transform,box-shadow] duration-500 group-hover:translate-x-1 group-hover:shadow-[0_0_10px_rgba(147,197,253,0.7)] motion-reduce:transition-none" />
              <span className="absolute inset-x-2 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-blue-200/40 via-indigo-200/75 to-blue-200/40" />
              <span className="relative size-2 rounded-full border border-indigo-200/70 bg-indigo-300/20 transition-[transform,box-shadow] duration-500 group-hover:-translate-x-1 group-hover:shadow-[0_0_10px_rgba(199,210,254,0.7)] motion-reduce:transition-none" />
            </span>
          </div>

          <div className="relative h-px bg-indigo-300/20">
            <span className="absolute inset-y-0 left-0 w-full origin-left scale-x-0 bg-gradient-to-r from-transparent via-blue-200/90 to-transparent transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:delay-[360ms] motion-reduce:transition-none" />
            <span className="absolute -left-1 top-1/2 size-2 -translate-y-1/2 rounded-full bg-blue-100 opacity-0 shadow-[0_0_12px_rgba(191,219,254,0.95)] transition-[left,opacity] duration-500 ease-out group-hover:left-[calc(100%+0.25rem)] group-hover:delay-[360ms] group-hover:opacity-100 motion-reduce:transition-none" />
          </div>

          <div className="relative z-10 flex aspect-square min-w-0 flex-col justify-center gap-2 rounded-xl border border-white/10 bg-[#111a34] p-2 transition-[transform,border-color,background-color,box-shadow] duration-500 ease-out group-hover:scale-[1.04] group-hover:delay-[450ms] group-hover:border-blue-200/45 group-hover:bg-[#19274a] group-hover:shadow-[0_16px_30px_rgba(59,130,246,0.16)] motion-reduce:transition-none sm:gap-2.5 sm:p-3">
            <span className="flex items-center gap-1.5">
              <span className="size-2 rounded-sm bg-blue-300/65 transition-[transform,box-shadow] duration-500 group-hover:rotate-45 group-hover:shadow-[0_0_10px_rgba(147,197,253,0.65)] motion-reduce:transition-none" />
              <span className="h-1.5 flex-1 rounded-full bg-white/15" />
            </span>
            <span className="block h-1.5 w-full rounded-full bg-white/10" />
            <span className="block h-1.5 w-2/3 rounded-full bg-blue-200/35 transition-[width,background-color] duration-500 group-hover:w-full group-hover:bg-blue-200/70 motion-reduce:transition-none" />
          </div>

          <div className="relative h-px bg-blue-300/20">
            <span className="absolute inset-y-0 left-0 w-full origin-left scale-x-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:delay-[540ms] motion-reduce:transition-none" />
            <span className="absolute -left-1 top-1/2 size-2 -translate-y-1/2 rounded-full bg-blue-100 opacity-0 shadow-[0_0_12px_rgba(191,219,254,0.95)] transition-[left,opacity] duration-500 ease-out group-hover:left-[calc(100%+0.25rem)] group-hover:delay-[540ms] group-hover:opacity-100 motion-reduce:transition-none" />
          </div>

          <div className="relative z-10 grid aspect-square min-w-0 place-items-center rounded-xl border border-blue-300/20 bg-[#162342] text-blue-100 shadow-[0_14px_28px_rgba(0,0,0,0.2)] transition-[transform,border-color,background-color,box-shadow] duration-500 ease-out group-hover:scale-110 group-hover:delay-[630ms] group-hover:border-blue-100/70 group-hover:bg-[#1d3157] group-hover:shadow-[0_0_28px_rgba(96,165,250,0.32)] motion-reduce:transition-none">
            <svg aria-hidden="true" className="size-5 sm:size-6" fill="none" viewBox="0 0 24 24">
              <path d="m7.5 12.5 3 3 6-7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <circle cx="12" cy="12" r="8.25" stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HomeServices() {
  return (
    <section
      aria-labelledby="home-services-title"
      className="relative isolate scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      id="servicos"
    >
      <div
        aria-hidden="true"
        className="absolute -right-48 top-24 -z-10 size-[28rem] rounded-full bg-indigo-200/30 blur-3xl"
      />

      <div className="mx-auto max-w-6xl">
        <header className="grid gap-5 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.62fr)] lg:items-end lg:gap-16">
          <div data-scroll-reveal="true">
            <p className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-normal text-blue-700">
              <span aria-hidden="true" className="h-px w-7 bg-gradient-to-r from-blue-600 to-indigo-600" />
              Presença, dados e fluxos
            </p>
            <h2
              data-home-section-focus
              id="home-services-title"
              className="mt-5 max-w-3xl font-[family-name:Manrope,Arial,sans-serif] text-[2rem] font-extrabold leading-[1.16] text-slate-950 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 sm:text-[2.55rem] lg:text-[3rem]"
              tabIndex={-1}
            >
              O digital que deixa o seu negócio{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                mais claro e leve.
              </span>
            </h2>
          </div>
          <p
            className="max-w-xl text-base font-medium leading-7 text-slate-600 sm:text-lg sm:leading-8"
            data-scroll-reveal="true"
            data-scroll-reveal-delay="90"
          >
            Do site que apresenta sua empresa aos painéis e automações que
            sustentam a rotina.
          </p>
        </header>

        <div className="mt-10 grid min-w-0 grid-cols-1 gap-4 sm:mt-12 lg:grid-cols-12 lg:gap-5">
          <article
            className={`${serviceCardClassName} lg:col-span-7 lg:flex lg:h-full lg:min-h-[54rem] lg:flex-col`}
            data-scroll-reveal="true"
          >
            <div className="relative z-10 flex flex-1 flex-col justify-between p-6 sm:p-8 lg:h-[27.5rem] lg:min-h-0 lg:flex-none lg:p-9">
              <div>
                <CardMeta icon={<SiteIcon className="size-3.5" />} label="Experiência digital" number="01" />
                <div className="mt-8 max-w-xl sm:mt-10">
                  <h3 className="font-[family-name:Manrope,Arial,sans-serif] text-[1.75rem] font-extrabold leading-tight text-white sm:text-[2.15rem]">
                    Sites institucionais
                  </h3>
                  <p className="mt-4 max-w-lg text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                    Um site claro e profissional para mostrar seu negócio, seus serviços
                    e as formas de contato.
                  </p>
                  <ExampleList examples={serviceExamples.institutionalSites} />
                </div>
              </div>
              <div className="mt-8 space-y-4 sm:mt-10">
                <StatusPill icon={<SiteIcon className="size-3.5" />}>
                  Estrutura pronta para publicar
                </StatusPill>
                <p className="max-w-md text-xs leading-5 text-slate-400">
                  Landing pages também podem entrar como complemento quando uma campanha
                  pedir uma página mais direta.
                </p>
              </div>
            </div>
            <SiteVisual />
          </article>

          <article
            className={`${serviceCardClassName} lg:col-span-5 lg:flex lg:h-full lg:min-h-[54rem] lg:flex-col`}
            data-scroll-reveal="true"
            data-scroll-reveal-delay="100"
          >
            <div className="relative z-10 flex flex-1 flex-col justify-between p-6 sm:p-7 lg:h-[27.5rem] lg:min-h-0 lg:flex-none lg:p-8">
              <div>
                <CardMeta icon={<DataIcon className="size-3.5" />} label="Leitura de dados" number="02" />
                <div className="mt-8 sm:mt-10">
                  <h3 className="font-[family-name:Manrope,Arial,sans-serif] text-2xl font-extrabold leading-tight text-white sm:text-[1.7rem]">
                    Dashboards e dados
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                    Painéis e visualizações para transformar informações dispersas em
                    uma visão mais fácil de acompanhar.
                  </p>
                  <ExampleList examples={serviceExamples.dashboards} />
                </div>
              </div>
              <div className="mt-8 sm:mt-10">
                <StatusPill icon={<DataIcon className="size-3.5" />}>
                  Indicadores em um só lugar
                </StatusPill>
              </div>
            </div>
            <DataVisual />
          </article>

          <article
            className={`${serviceCardClassName} lg:col-span-12 lg:flex lg:min-h-[20rem] lg:flex-row`}
            data-scroll-reveal="true"
          >
            <div className="relative z-10 flex flex-1 flex-col justify-between p-6 sm:p-8 lg:w-[45%] lg:p-9">
              <div>
                <CardMeta icon={<FlowIcon className="size-3.5" />} label="Fluxo conectado" number="03" />
                <div className="mt-8 sm:mt-9">
                  <h3 className="font-[family-name:Manrope,Arial,sans-serif] text-2xl font-extrabold leading-tight text-white sm:text-[1.7rem]">
                    Automações leves
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                    Pequenos fluxos com planilhas e dados para reduzir tarefas
                    repetitivas da operação.
                  </p>
                  <ExampleList examples={serviceExamples.automations} />
                </div>
              </div>
              <div className="mt-8 sm:mt-9">
                <StatusPill icon={<FlowIcon className="size-3.5" />}>
                  Rotina mais leve
                </StatusPill>
              </div>
            </div>
            <AutomationVisual />
          </article>
        </div>

      </div>
    </section>
  );
}
