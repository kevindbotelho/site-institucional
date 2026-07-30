import type { Metadata } from "next";

import { siteConfig } from "@/content/site";

import "./globals.css";

const siteDescription = "Soluções digitais para pequenas e médias empresas.";

export const metadata: Metadata = {
  applicationName: siteConfig.brandName,
  description: siteDescription,
  openGraph: {
    description: siteDescription,
    locale: "pt_BR",
    siteName: siteConfig.brandName,
    title: `${siteConfig.brandName} — Design e Tecnologia`,
    type: "website",
  },
  title: {
    default: `${siteConfig.brandName} — Design e Tecnologia`,
    template: `%s | ${siteConfig.brandName}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
