import Link from "next/link";

import { ProjectShowcaseCard } from "@/components/projects/ProjectShowcaseCard";
import { homeProjectExamples } from "@/content/projects";
import { siteConfig } from "@/content/site";
import { getWhatsAppUrl } from "@/lib/contact";

const cardLayouts = ["featured", "wide"] as const;

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="none"
      viewBox="0 0 16 16"
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

export function HomeProjects() {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.contact.whatsappNumber,
    "Olá, Kevin! Vi as soluções no seu site e queria conversar sobre algo semelhante para o meu negócio.",
  );

  return (
    <section
      aria-labelledby="home-projects-title"
      className="relative isolate scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      id="projetos"
    >
      <div
        aria-hidden="true"
        className="absolute -left-52 top-32 -z-10 size-[30rem] rounded-full bg-blue-200/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-48 bottom-24 -z-10 size-[32rem] rounded-full bg-indigo-200/30 blur-3xl"
      />

      <div className="mx-auto max-w-6xl">
        <header className="grid gap-5 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.68fr)] lg:items-end lg:gap-16">
          <div data-scroll-reveal="true">
            <p className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-normal text-blue-700">
              <span
                aria-hidden="true"
                className="h-px w-7 bg-gradient-to-r from-blue-600 to-indigo-600"
              />
              Projetos
            </p>
            <h2
              data-home-section-focus
              id="home-projects-title"
              className="mt-5 max-w-4xl font-[family-name:Manrope,Arial,sans-serif] text-[2rem] font-extrabold leading-[1.16] text-slate-950 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 sm:text-[2.55rem] lg:text-[3rem]"
              tabIndex={-1}
            >
              Soluções que já podem{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ganhar forma
              </span>{" "}
              no seu negócio.
            </h2>
          </div>
          <p
            className="max-w-xl text-base font-medium leading-7 text-slate-600 sm:text-lg sm:leading-8"
            data-scroll-reveal="true"
            data-scroll-reveal-delay="90"
          >
            Possibilidades para visualizar como uma necessidade do dia a dia
            pode se transformar em uma presença digital mais clara, uma rotina
            mais organizada ou um próximo passo mais simples.
          </p>
        </header>

        <div className="mt-10 grid min-w-0 grid-cols-12 gap-5 sm:mt-12 lg:mt-16 lg:gap-6">
          {homeProjectExamples.map((project, index) => (
            <div
              className="col-span-12 min-w-0"
              data-scroll-reveal="true"
              data-scroll-reveal-delay={index * 70}
              key={project.slug}
            >
              <ProjectShowcaseCard
                eager={index === 0}
                index={index}
                layout={cardLayouts[index]}
                project={project}
              />
            </div>
          ))}
        </div>

        <footer
          className="relative mt-8 overflow-hidden rounded-[1.5rem] border border-blue-200/80 bg-gradient-to-br from-blue-50/90 via-white/85 to-indigo-100/75 p-5 shadow-[0_22px_50px_rgba(30,64,175,0.12)] backdrop-blur-xl sm:mt-10 sm:p-7 lg:p-8"
          data-scroll-reveal="true"
        >
          <div
            aria-hidden="true"
            className="absolute -right-20 -top-24 size-64 rounded-full bg-blue-400/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-28 left-1/3 size-56 rounded-full bg-indigo-400/15 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-7 left-0 top-7 w-1 rounded-r-full bg-gradient-to-b from-blue-500 to-indigo-600"
          />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-2xl">
              <p className="text-[0.66rem] font-bold uppercase tracking-[0.12em] text-blue-700">
                Próximo passo
              </p>
              <p className="mt-3 font-[family-name:Manrope,Arial,sans-serif] text-xl font-extrabold leading-tight tracking-[-0.025em] text-slate-950 sm:text-2xl">
                Quer levar uma solução como essa para o seu negócio?
              </p>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-2 sm:w-auto sm:items-start lg:items-end">
              <a
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 text-sm font-bold text-white shadow-[0_14px_28px_rgba(49,89,189,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(49,89,189,0.36)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 motion-reduce:transition-none sm:w-auto"
                href={whatsappUrl}
                rel="noreferrer"
                target="_blank"
              >
                Conversar no WhatsApp
                <ArrowRightIcon />
              </a>
              <Link
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 px-2 text-xs font-bold text-blue-700 transition-colors hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:w-auto"
                href="/projetos"
              >
                Ver soluções e projetos
                <ArrowRightIcon />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
