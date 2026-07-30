"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

import { focusAndScrollToHomeSection } from "@/components/navigation/homeSectionNavigation";

type HomeSectionLinkProps = Omit<
  ComponentProps<typeof Link>,
  "href" | "onClick"
> & {
  href: string;
  targetId: string;
  onNavigate?: () => void;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export function HomeSectionLink({
  href,
  targetId,
  onNavigate,
  onClick,
  ...props
}: HomeSectionLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const url = new URL(href, window.location.href);

    if (
      url.origin !== window.location.origin ||
      url.pathname !== window.location.pathname
    ) {
      return;
    }

    if (!document.getElementById(targetId)) return;

    event.preventDefault();
    onNavigate?.();

    const nextLocation = `${url.pathname}${url.search}${url.hash}`;
    const currentLocation = `${window.location.pathname}${window.location.search}${window.location.hash}`;

    if (nextLocation !== currentLocation) {
      window.history.pushState(null, "", nextLocation);
    }

    focusAndScrollToHomeSection(
      targetId,
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    );
  }

  return <Link {...props} href={href} onClick={handleClick} />;
}
