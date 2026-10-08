import Image from "next/image";
import Link from "next/link";

import { EmailCopyButton } from "@/components/contact/EmailCopyButton";
import { HomeSectionLink } from "@/components/navigation/HomeSectionLink";
import { siteConfig } from "@/content/site";
import { getEmailUrl, getWhatsAppUrl } from "@/lib/contact";

const footerNavigationItems = [
  { href: "/", label: "Início", targetId: "inicio" },
  { href: "/#servicos", label: "Serviços", targetId: "servicos" },
  { href: "/projetos", label: "Projetos" },
  { href: "/#sobre", label: "Sobre", targetId: "sobre" },
] as const;

const externalLinkClassName =
  "inline-flex min-h-11 items-center text-sm font-bold text-slate-600 transition-colors hover:text-blue-700 focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";

export function SiteFooter() {
  const emailUrl = getEmailUrl(siteConfig.contact.email);
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.contact.whatsappNumber,
    siteConfig.contact.defaultWhatsAppMessage,
  );

  return (
    <footer className="site-footer relative px-4 pb-8 sm:px-6 sm:pb-10 lg:px-8">
      <div
        className="mx-auto max-w-6xl border-t border-slate-900/10 pt-9 sm:pt-10"
        data-scroll-reveal="true"
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(15rem,1fr)_auto_minmax(20rem,1.08fr)] lg:gap-16">
          <div className="max-w-sm">
            <HomeSectionLink
              aria-label={`${siteConfig.brandName}, início`}
              className="inline-flex items-center py-1 focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
              href="/"
              targetId="inicio"
            >
              <Image
                alt=""
                className="h-9 w-auto sm:h-10"
                height={527}
                quality={90}
                sizes="(min-width: 640px) 8.65rem, 7.75rem"
                src="/brand/asoka-lockup-dark.png"
                width={1816}
              />
            </HomeSectionLink>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Sites, dados e automações para transformar necessidades reais em
              soluções digitais úteis.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-slate-500">
              Navegação
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-x-7 gap-y-1 lg:grid-cols-1">
              {footerNavigationItems.map((item) => (
                <li key={item.href}>
                  {"targetId" in item ? (
                    <HomeSectionLink
                      className={externalLinkClassName}
                      href={item.href}
                      targetId={item.targetId}
                    >
                      {item.label}
                    </HomeSectionLink>
                  ) : (
                    <Link className={externalLinkClassName} href={item.href}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-slate-500">
              Contato
            </p>
            <div className="mt-4 flex min-w-0 flex-col items-start gap-3 sm:flex-row sm:items-center">
              <a
                className="min-h-11 min-w-0 break-all py-2.5 text-sm font-bold text-slate-800 underline decoration-blue-300 underline-offset-4 transition-colors hover:text-blue-700 focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                href={emailUrl}
              >
                {siteConfig.contact.email}
              </a>
              <EmailCopyButton
                className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-blue-200/80 bg-white/70 px-4 text-xs font-bold text-blue-700 shadow-[0_8px_20px_rgba(30,64,175,0.08)] transition-colors hover:border-blue-300 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                copiedLabel="Copiado"
                email={siteConfig.contact.email}
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1">
              <a
                className={externalLinkClassName}
                href={siteConfig.social.linkedin}
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn ↗
              </a>
              <a
                className={externalLinkClassName}
                href={siteConfig.social.github}
                rel="noreferrer"
                target="_blank"
              >
                GitHub ↗
              </a>
              <a
                className={externalLinkClassName}
                href={whatsappUrl}
                rel="noreferrer"
                target="_blank"
              >
                WhatsApp ↗
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-900/10 pt-5 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {siteConfig.brandName}.</p>
        </div>
      </div>
    </footer>
  );
}
