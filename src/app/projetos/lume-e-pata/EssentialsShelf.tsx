"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from "react";
import { SiWhatsapp } from "react-icons/si";

import styles from "./project.module.css";

const essentials = [
  {
    alt: "Dois potes de cerâmica para alimentação do pet e uma pequena pá de madeira com ração sobre um balcão claro.",
    caption: "Para alimentar",
    displayLabel: "Alimentação",
    image: "/images/projects/lume-e-pata-essenciais-alimentacao.png",
    label: "alimentação",
    slug: "alimentacao",
  },
  {
    alt: "Guia de couro, peitoral e coleira organizados sobre um balcão claro para o momento do passeio.",
    caption: "Para passear",
    displayLabel: "Passeio",
    image: "/images/projects/lume-e-pata-essenciais-passeio.png",
    label: "passeio",
    slug: "passeio",
  },
  {
    alt: "Toalhas, escova de madeira e frasco sem rótulo organizados sobre um balcão claro para a higiene do pet.",
    caption: "Para cuidar",
    displayLabel: "Higiene",
    image: "/images/projects/lume-e-pata-essenciais-higiene.png",
    label: "higiene",
    slug: "higiene",
  },
  {
    alt: "Cama macia em tons de creme e verde com uma manta xadrez preparada para o descanso do pet.",
    caption: "Para descansar",
    displayLabel: "Descanso",
    image: "/images/projects/lume-e-pata-essenciais-descanso.png",
    label: "descanso",
    slug: "descanso",
  },
] as const;

type EssentialsShelfProps = {
  whatsappUrl: string;
};

export function EssentialsShelf({ whatsappUrl }: EssentialsShelfProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const activeItem = essentials[selectedIndex];
  const previousItem = essentials[selectedIndex - 1];
  const nextItem = essentials[selectedIndex + 1];

  function moveTo(index: number) {
    setSelectedIndex(Math.max(0, Math.min(essentials.length - 1, index)));
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveTo(selectedIndex + 1);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveTo(selectedIndex - 1);
    }

    if (event.key === "Home") {
      event.preventDefault();
      moveTo(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      moveTo(essentials.length - 1);
    }
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse") return;
    pointerStart.current = { x: event.clientX, y: event.clientY };
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    const start = pointerStart.current;
    pointerStart.current = null;

    if (!start || event.pointerType === "mouse") return;

    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;

    if (Math.abs(deltaX) < 44 || Math.abs(deltaX) <= Math.abs(deltaY)) return;

    moveTo(deltaX < 0 ? selectedIndex + 1 : selectedIndex - 1);
  }

  return (
    <section aria-labelledby="essentials-title" className={styles.essentials}>
      <div className={styles.essentialsShell}>
        <div className={styles.essentialsIntro} data-scroll-reveal="true">
          <div className={styles.essentialsEyebrowRow}>
            <span aria-hidden="true" className={styles.essentialsEntryThread} />
            <p className={styles.eyebrow}>Essenciais do dia a dia</p>
          </div>

          <h2 className={styles.essentialsTitle} id="essentials-title">
            O que seu pet precisa,
            <br />
            mais perto da <em>rotina.</em>
          </h2>

          <p className={styles.essentialsSupport}>
            A Lume &amp; Pata reúne itens úteis para alimentação, passeio,
            higiene e descanso. Se estiver procurando algo para facilitar a
            rotina, é só perguntar pelo WhatsApp.
          </p>

          <a
            className={styles.essentialsCta}
            href={whatsappUrl}
            rel="noreferrer"
            target="_blank"
          >
            <span>Perguntar pelo WhatsApp</span>
            <SiWhatsapp aria-hidden="true" />
          </a>
        </div>

        <div className={styles.essentialsExperience} data-scroll-reveal="true">
          <div
            aria-label="Essenciais do dia a dia"
            aria-roledescription="carrossel"
            className={styles.essentialsCarousel}
            onKeyDown={handleKeyDown}
            onPointerCancel={() => {
              pointerStart.current = null;
            }}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            role="region"
            tabIndex={0}
          >
            <div className={styles.essentialsCards}>
              {essentials.map((item, index) => {
                const distance = index - selectedIndex;
                const positionClass =
                  distance === 0
                    ? styles.essentialsCardActive
                    : distance === -1
                      ? styles.essentialsCardPrevious
                      : distance === 1
                        ? styles.essentialsCardNext
                        : distance < -1
                          ? styles.essentialsCardBefore
                          : styles.essentialsCardAfter;
                const isActive = distance === 0;

                return (
                  <article
                    aria-hidden={!isActive}
                    aria-label={`${index + 1} de ${essentials.length}: ${item.label}`}
                    className={`${styles.essentialsCard} ${positionClass}`}
                    inert={!isActive ? true : undefined}
                    key={item.slug}
                  >
                    <div className={styles.essentialsCardImage}>
                      <Image
                        alt={isActive ? item.alt : ""}
                        className={styles.essentialsCardPhoto}
                        fill
                        priority={index === 0}
                        quality={90}
                        sizes="(min-width: 1280px) 960px, (min-width: 768px) 76vw, 86vw"
                        src={item.image}
                      />
                    </div>

                    <footer className={styles.essentialsCardFooter}>
                      <span className={styles.essentialsCardLabel}>
                        {item.caption}
                      </span>
                      <span className={styles.essentialsCardCount}>
                        {String(index + 1).padStart(2, "0")} / 04
                      </span>
                    </footer>
                  </article>
                );
              })}
            </div>

            <div className={styles.essentialsControls}>
              {previousItem ? (
                <button
                  aria-label={`Ver categoria anterior: ${previousItem.label}`}
                  className={`${styles.essentialsArrow} ${styles.essentialsArrowPrevious}`}
                  onClick={() => moveTo(selectedIndex - 1)}
                  type="button"
                >
                  <ArrowLeft aria-hidden="true" strokeWidth={1.7} />
                </button>
              ) : (
                <span aria-hidden="true" className={styles.essentialsArrowSpace} />
              )}

              <p className={styles.essentialsMobileState}>
                {String(selectedIndex + 1).padStart(2, "0")} / 04
                <span aria-hidden="true">•</span>
                {activeItem.label}
              </p>

              {nextItem ? (
                <button
                  aria-label={`Ver próxima categoria: ${nextItem.label}`}
                  className={`${styles.essentialsArrow} ${styles.essentialsArrowNext}`}
                  onClick={() => moveTo(selectedIndex + 1)}
                  type="button"
                >
                  <ArrowRight aria-hidden="true" strokeWidth={1.7} />
                </button>
              ) : (
                <span aria-hidden="true" className={styles.essentialsArrowSpace} />
              )}
            </div>
          </div>

          <p aria-live="polite" className={styles.essentialsStatus}>
            {String(selectedIndex + 1).padStart(2, "0")} de 04, {activeItem.label}
          </p>

          <ol
            aria-label="Categorias do carrossel"
            className={styles.essentialsLegend}
          >
            {essentials.map((item, index) => (
              <li
                aria-current={selectedIndex === index ? "true" : undefined}
                className={
                  selectedIndex === index
                    ? styles.essentialsLegendActive
                    : undefined
                }
                key={item.slug}
              >
                {item.displayLabel}
                <span aria-hidden="true" />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
