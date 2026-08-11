import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { ScrollRevealController } from "@/components/motion/ScrollRevealController";
import { SiteNavigation } from "@/components/navigation/SiteNavigation";
import { siteConfig } from "@/content/site";
import { getWhatsAppUrl } from "@/lib/contact";

export const metadata: Metadata = {
  description:
    "Projetos de site institucional e landing page criados pela Zucco para necessidades de negócios locais.",
  title: "Projetos",
};

const projects = [
  {
    href: "/projetos/lume-e-pata",
    image: "/images/projects/lume-e-pata-hero.png",
    imageAlt:
      "Cachorro de pelo caramelo em um ambiente claro de banho e tosa.",
    kind: "Site institucional",
    niche: "Pet shop e banho e tosa",
    problem:
      "Serviços, produtos e formas de contato precisam caber em uma presença simples, sem deixar o tutor procurando informação.",
    solution:
      "Uma navegação acolhedora que apresenta os cuidados da marca, explica seu jeito de atender e conduz a conversa pelo WhatsApp.",
    title: "Lume & Pata",
  },
  {
    href: "/projetos/brisa-de-tecido",
    image: "/images/projects/brisa-de-tecido-hero.png",
    imageAlt: "Sofá claro de tecido em uma sala iluminada.",
    kind: "Landing page",
    niche: "Higienização de estofados",
    problem:
      "Uma oferta local precisa responder às dúvidas essenciais e transformar interesse em pedido de orçamento com poucos passos.",
    solution:
      "Uma landing page direta, centrada na higienização de sofá em domicílio e no contato rápido pelo WhatsApp.",
    title: "Brisa de Tecido",
  },
] as const;

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16">
      <path
        d="M3 13 13 3M6 3h7v7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function ProjectsPage() {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.contact.whatsappNumber,
    "Olá, Kevin! Vi seus projetos e queria conversar sobre uma solução semelhante para o meu negócio.",
  );

  return (
    <>
      <SiteNavigation />
      <div className="home-canvas">
        <ScrollRevealController />
        <main>
          <section className="relative isolate overflow-hidden px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24">
            <div
              aria-hidden="true"
              className="absolute -left-48 -top-52 -z-10 size-[34rem] rounded-full bg-blue-200/50 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -right-52 top-16 -z-10 size-[32rem] rounded-full bg-indigo-200/45 blur-3xl"
            />
            <div className="mx-auto max-w-6xl">
              <p className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-blue-700">
                <span
                  aria-hidden="true"
                  className="h-px w-7 bg-gradient-to-r from-blue-600 to-indigo-600"
                />
                Projetos
              </p>
              <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.62fr)] lg:items-end lg:gap-16">
                <h1 className="max-w-4xl font-[family-name:Manrope,Arial,sans-serif] text-[2.5rem] font-extrabold leading-[1.08] tracking-[-0.055em] text-slate-950 sm:text-[3.45rem] lg:text-[4.6rem]">
                  Dois nichos, dois caminhos digitais.
                </h1>
                <p className="max-w-xl text-base font-medium leading-7 text-slate-600 sm:text-lg sm:leading-8">
                  Cada trabalho parte de um problema diferente e escolhe a
                  estrutura que melhor ajuda o visitante a entender, confiar e
                  dar o próximo passo.
                </p>
              </div>
            </div>
          </section>

          <section
            aria-labelledby="projects-list-title"
            className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28"
          >
            <div className="mx-auto max-w-6xl">
              <h2 className="sr-only" id="projects-list-title">
                Trabalhos disponíveis
              </h2>
              <div className="grid gap-7 lg:gap-9">
                {projects.map((project, index) => (
                  <article
                    className="group relative grid min-w-0 overflow-hidden rounded-[2rem] border border-white/90 bg-white/75 shadow-[0_28px_72px_rgba(30,64,175,0.12)] backdrop-blur-xl lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)]"
                    data-scroll-reveal="true"
                    key={project.href}
                  >
                    <div
                      className={`relative min-h-[20rem] overflow-hidden sm:min-h-[27rem] ${
                        index === 1 ? "lg:order-2" : ""
                      }`}
                    >
                      <Image
                        alt={project.imageAlt}
                        className="object-cover transition duration-700 group-hover:scale-[1.025] motion-reduce:transition-none"
                        fill
                        priority={index === 0}
                        quality={90}
                        sizes="(min-width: 1024px) 56vw, 100vw"
                        src={project.image}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-white/5" />
                    </div>

                    <div
                      className={`relative flex flex-col justify-center p-6 sm:p-9 lg:p-12 ${
                        index === 1 ? "lg:order-1" : ""
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.1em]">
                        <span className="rounded-full bg-blue-50 px-3 py-1.5 text-blue-700">
                          {project.niche}
                        </span>
                        <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-slate-500">
                          {project.kind}
                        </span>
                      </div>
                      <h3 className="mt-6 font-[family-name:Manrope,Arial,sans-serif] text-3xl font-extrabold tracking-[-0.045em] text-slate-950 sm:text-4xl">
                        {project.title}
                      </h3>
                      <dl className="mt-7 grid gap-5">
                        <div>
                          <dt className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                            Problema
                          </dt>
                          <dd className="mt-2 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                            {project.problem}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">
                            Solução construída
                          </dt>
                          <dd className="mt-2 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                            {project.solution}
                          </dd>
                        </div>
                      </dl>
                      <Link
                        className="mt-8 inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 text-sm font-bold text-white shadow-[0_14px_28px_rgba(49,89,189,0.26)] transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 motion-reduce:transition-none"
                        href={project.href}
                      >
                        Abrir {project.kind.toLocaleLowerCase("pt-BR")}
                        <ArrowIcon />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8 lg:pb-32">
            <div
              className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-12 text-white shadow-[0_30px_80px_rgba(15,23,42,0.22)] sm:px-10 sm:py-14 lg:flex lg:items-center lg:justify-between lg:gap-14 lg:px-14"
              data-scroll-reveal="true"
            >
              <div
                aria-hidden="true"
                className="absolute -right-24 -top-32 size-80 rounded-full bg-blue-500/25 blur-3xl"
              />
              <div className="relative max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-300">
                  Uma solução para o seu contexto
                </p>
                <h2 className="mt-4 font-[family-name:Manrope,Arial,sans-serif] text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-4xl">
                  Quer construir algo com a mesma clareza?
                </h2>
                <p className="mt-4 max-w-xl leading-7 text-slate-300">
                  Me conte o que seu negócio precisa apresentar. A conversa
                  começa pelo problema e chega a um escopo possível.
                </p>
              </div>
              <a
                className="relative mt-8 inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none lg:mt-0"
                href={whatsappUrl}
                rel="noreferrer"
                target="_blank"
              >
                Conversar sobre uma solução
                <ArrowIcon />
              </a>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
