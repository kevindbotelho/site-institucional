import type { Project } from "@/types/content";

export type HomeProject = Pick<
  Project,
  "slug" | "title" | "category" | "disclosure" | "link"
> & {
  image: string;
  imageAlt: string;
  summary: string;
  visual: "site" | "dashboard" | "automation" | "landing";
};

export const homeProjectExamples: readonly HomeProject[] = [
  {
    slug: "site-institucional",
    title: "Site institucional",
    category: "business-demo",
    disclosure: "Presença digital",
    image: "/images/projects/site-institucional.jpg",
    imageAlt:
      "Captura de uma página digital com apresentação de produto e painel de tarefas.",
    summary:
      "Um site para um negócio local ou prestador de serviço apresentar o que faz, seus diferenciais, formas de contato e localização.",
    visual: "site",
  },
  {
    slug: "dashboard-e-dados",
    title: "Dashboard e dados",
    category: "business-demo",
    disclosure: "Visão operacional",
    image: "/images/projects/dashboard.webp",
    imageAlt:
      "Captura de um dashboard com indicadores, gráficos e acompanhamento de projetos.",
    summary:
      "Um painel para transformar informações da operação em uma leitura mais simples, útil para acompanhar a rotina e tomar decisões.",
    visual: "dashboard",
  },
  {
    slug: "automacao-de-processos",
    title: "Automação de processos",
    category: "business-demo",
    disclosure: "Fluxos conectados",
    image: "/images/projects/n8n.webp",
    imageAlt:
      "Captura de um fluxo de automação visual com etapas e integrações conectadas.",
    summary:
      "Um fluxo com planilhas e dados para reduzir uma tarefa repetitiva e deixar uma etapa do trabalho mais organizada.",
    visual: "automation",
  },
  {
    slug: "landing-page",
    title: "Landing page",
    category: "business-demo",
    disclosure: "Conversão",
    image: "/images/projects/landing-page.jpg",
    imageAlt:
      "Recorte de uma landing page com mensagem principal, produto e chamadas para ação.",
    summary:
      "Uma página direta para apresentar uma campanha, serviço ou nova oferta e facilitar o próximo contato pelo WhatsApp.",
    visual: "landing",
  },
];
