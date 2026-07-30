import type { ContactConfig } from "@/types/content";

export const siteConfig = {
  brandName: process.env.NEXT_PUBLIC_BRAND_NAME || "Keni",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  social: {
    linkedin: "https://www.linkedin.com/in/kevindbotelho/",
    github: "https://github.com/kevindbotelho",
  },
  contact: {
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
    defaultWhatsAppMessage:
      "Olá, Kevin! Vi seu site e queria conversar sobre uma ideia para o meu negócio.",
  } satisfies ContactConfig,
};
