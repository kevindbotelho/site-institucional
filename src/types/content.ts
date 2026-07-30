export type ContactConfig = {
  whatsappNumber: string;
  email: string;
  defaultWhatsAppMessage: string;
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  audience: string;
  deliverables: string[];
};

export type ProjectCategory = "business-demo" | "authorial" | "client-case";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  disclosure: string;
  problem: string;
  solution: string;
  link?: string;
  image?: string;
};
