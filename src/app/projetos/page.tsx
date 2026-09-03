import type { Metadata } from "next";

import { ProjectRail } from "./ProjectRail";
import styles from "./page.module.css";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ScrollRevealController } from "@/components/motion/ScrollRevealController";
import { RotatingWord } from "@/components/motion/RotatingWord";
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
    summary: "Uma presença acolhedora para cuidados, produtos e contato.",
    title: "Lume & Pata",
  },
  {
    href: "/projetos/brisa-de-tecido",
    image: "/images/projects/brisa-de-tecido-hero.png",
    imageAlt: "Sofá claro de tecido em uma sala iluminada.",
    kind: "Landing page",
    summary: "Uma rota curta do primeiro interesse ao pedido de orçamento.",
    title: "Brisa de Tecido",
  },
] as const;

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

export default function ProjectsPage() {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.contact.whatsappNumber,
    "Olá, Kevin! Vi seus projetos e queria conversar sobre uma solução semelhante para o meu negócio.",
  );

  return (
    <>
      <SiteNavigation />
      <div className="home-canvas">
        <ScrollRevealController resetOnMount />
        <main>
          <div className={styles.projectsCanvas}>
            <section className="relative px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24">
              <div className="mx-auto max-w-6xl">
                <p
                  className={`${styles.projectsEntrance} flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-blue-700`}
                >
                  <span
                    aria-hidden="true"
                    className="h-px w-7 bg-gradient-to-r from-blue-600 to-indigo-600"
                  />
                  Projetos
                </p>
                <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,0.96fr)_minmax(18rem,0.8fr)] lg:items-end lg:gap-16">
                  <h1
                    className={`${styles.projectsEntrance} ${styles.projectsEntranceDelayOne} max-w-xl font-[family-name:Manrope,Arial,sans-serif] text-[2.25rem] font-extrabold leading-[1.16] tracking-[-0.065em] text-slate-950 sm:text-[2.9rem] lg:text-[3rem]`}
                  >
                    Projetos que ganham{" "}
                    <RotatingWord
                      className={styles.projectRotator}
                      fade={false}
                      minWidth="12ch"
                      words={["vida digital.", "clareza.", "presença.", "direção."]}
                    />
                  </h1>
                  <p
                    className={`${styles.projectsEntrance} ${styles.projectsEntranceDelayTwo} max-w-[29rem] text-[0.88rem] leading-6 text-slate-600 sm:text-[0.94rem] sm:leading-[1.7]`}
                  >
                    Cada trabalho parte de um contexto diferente e escolhe a
                    estrutura que melhor ajuda o visitante a entender, confiar e
                    dar o próximo passo.
                  </p>
                </div>
              </div>
            </section>

            <section
              aria-labelledby="projects-list-title"
              className="relative px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28"
            >
              <div className="mx-auto max-w-6xl">
                <div className={`${styles.catalogSection} ${styles.projectsEntrance}`}>
                  <div className={styles.catalogSectionHeading}>
                    <h2 id="projects-list-title">Projetos em destaque</h2>
                  </div>
                  <ProjectRail projects={projects} />
                </div>
              </div>
            </section>
            <section className="relative px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8 lg:pb-32">
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
          </div>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
