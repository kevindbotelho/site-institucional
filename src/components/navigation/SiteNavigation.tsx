"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { focusAndScrollToHomeSection } from "@/components/navigation/homeSectionNavigation";
import { HomeSectionLink } from "@/components/navigation/HomeSectionLink";
import { ScrollProgressIndicator } from "@/components/navigation/ScrollProgressIndicator";
import { siteConfig } from "@/content/site";
import { getWhatsAppUrl } from "@/lib/contact";

const navigationItems = [
  { href: "/", label: "Início", targetId: "inicio" },
  { href: "/#servicos", label: "Serviços", targetId: "servicos" },
  { href: "/#projetos", label: "Projetos", targetId: "projetos" },
  { href: "/#sobre", label: "Sobre", targetId: "sobre" },
] as const;

const whatsappUrl = getWhatsAppUrl(
  siteConfig.contact.whatsappNumber,
  siteConfig.contact.defaultWhatsAppMessage,
);

function ArrowUpRightIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 6.5h13M3.5 10h13M3.5 13.5h13"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function NavigationLinks({
  mobile = false,
  onNavigate,
}: {
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <ul
      className={
        mobile
          ? "flex flex-col gap-1"
          : "hidden items-center gap-8 text-sm text-slate-500 md:flex"
      }
    >
      {navigationItems.map((item) => (
        <li key={item.href}>
          <HomeSectionLink
            className={
              mobile
                ? "block rounded-xl px-3 py-2.5 font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700 focus-visible:bg-blue-50 focus-visible:text-blue-700"
                : "py-2 font-medium transition-colors hover:text-blue-700 focus-visible:text-blue-700"
            }
            href={item.href}
            onNavigate={onNavigate}
            targetId={item.targetId}
          >
            {item.label}
          </HomeSectionLink>
        </li>
      ))}
    </ul>
  );
}

export function SiteNavigation() {
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function syncSectionFromLocation() {
      const targetId = window.location.hash
        ? decodeURIComponent(window.location.hash.slice(1))
        : "inicio";

      window.requestAnimationFrame(() => {
        focusAndScrollToHomeSection(targetId, "auto");
      });
    }

    const initialFrame = window.requestAnimationFrame(() => {
      if (window.location.hash) {
        syncSectionFromLocation();
      }
    });

    window.addEventListener("popstate", syncSectionFromLocation);

    return () => {
      window.cancelAnimationFrame(initialFrame);
      window.removeEventListener("popstate", syncSectionFromLocation);
    };
  }, []);

  function closeMobileMenu() {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.open = false;
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/10 bg-white/80 px-4 shadow-[0_8px_24px_rgba(30,64,175,0.06)] backdrop-blur-xl sm:px-6 lg:px-8">
      <ScrollProgressIndicator />
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex min-h-[4.75rem] max-w-6xl items-center justify-between px-1.5 sm:px-0"
      >
        <HomeSectionLink
          aria-label={`${siteConfig.brandName}, início`}
          className="flex shrink-0 items-center py-2 focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
          href="/"
          targetId="inicio"
        >
          <Image
            alt=""
            className="h-8 w-auto sm:h-9"
            height={479}
            priority
            quality={90}
            sizes="(min-width: 640px) 8.25rem, 7.4rem"
            src="/brand/zucco-lockup-gradient.png"
            width={1766}
          />
        </HomeSectionLink>

        <NavigationLinks />

        <a
          className="relative hidden min-h-11 items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 text-sm font-bold text-white shadow-[0_12px_24px_rgba(49,89,189,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(49,89,189,0.32)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 md:inline-flex before:absolute before:-left-10 before:top-[-25%] before:h-[150%] before:w-8 before:rotate-[18deg] before:bg-gradient-to-r before:from-transparent before:via-white/65 before:to-transparent before:transition-transform before:duration-700 hover:before:translate-x-56"
          href={whatsappUrl}
          rel="noreferrer"
          target="_blank"
        >
          <span className="relative">Tirar uma ideia do papel</span>
          <ArrowUpRightIcon />
        </a>

        <details
          className="group relative md:hidden"
          onToggle={(event) => setMobileMenuOpen(event.currentTarget.open)}
          ref={mobileMenuRef}
        >
          <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-xl border border-slate-300/80 bg-white/45 text-slate-800 transition-colors hover:border-blue-200 hover:bg-blue-50/70 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 [&::-webkit-details-marker]:hidden">
            <span className="sr-only">
              {mobileMenuOpen
                ? "Fechar menu de navegação"
                : "Abrir menu de navegação"}
            </span>
            <MenuIcon />
          </summary>
          <div className="absolute right-0 top-[calc(100%+0.75rem)] w-[min(19rem,calc(100vw-2rem))] rounded-2xl border border-white/90 bg-white/95 p-2.5 shadow-[0_20px_45px_rgba(30,64,175,0.16)] backdrop-blur-xl">
            <NavigationLinks mobile onNavigate={closeMobileMenu} />
            <a
              className="relative mt-2 flex min-h-11 items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 text-center text-sm font-bold text-white shadow-[0_10px_20px_rgba(49,89,189,0.24)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              href={whatsappUrl}
              rel="noreferrer"
              target="_blank"
            >
              <span className="relative">Tirar uma ideia do papel</span>
              <ArrowUpRightIcon />
            </a>
          </div>
        </details>
      </nav>
    </header>
  );
}
