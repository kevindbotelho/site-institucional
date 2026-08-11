import type { Project } from "@/types/content";

export type HomeProject = Pick<
  Project,
  "slug" | "title" | "category" | "disclosure" | "link"
> & {
  image: string;
  imageAlt: string;
  summary: string;
  visual: "site" | "landing";
};

export const homeProjectExamples: readonly HomeProject[] = [
  {
    slug: "lume-e-pata",
    title: "Lume & Pata",
    category: "business-demo",
    disclosure: "Pet shop e banho e tosa",
    link: "/projetos/lume-e-pata",
    image: "/images/projects/lume-e-pata-hero.png",
    imageAlt:
      "Cachorro de pelo caramelo em um espaço acolhedor de banho e tosa.",
    summary:
      "Um site institucional simples que organiza cuidados, produtos e contato em uma presença de bairro clara e acolhedora.",
    visual: "site",
  },
  {
    slug: "brisa-de-tecido",
    title: "Brisa de Tecido",
    category: "business-demo",
    disclosure: "Higienização de estofados",
    link: "/projetos/brisa-de-tecido",
    image: "/images/projects/brisa-de-tecido-hero.png",
    imageAlt:
      "Sofá claro de tecido em uma sala iluminada e arejada.",
    summary:
      "Uma landing page dedicada a uma oferta, com argumentos objetivos e um caminho curto até o orçamento pelo WhatsApp.",
    visual: "landing",
  },
];
