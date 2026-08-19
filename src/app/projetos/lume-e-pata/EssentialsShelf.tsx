"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { SiWhatsapp } from "react-icons/si";

import styles from "./project.module.css";

const essentials = [
  {
    alt: "Dois potes de cerâmica para alimentação do pet e uma pequena pá de madeira com ração sobre um balcão claro.",
    image: "/images/projects/lume-e-pata-essenciais-alimentacao.png",
    label: "alimentação",
    slug: "alimentacao",
  },
  {
    alt: "Guia de couro, peitoral e coleira organizados sobre um balcão claro para o momento do passeio.",
    image: "/images/projects/lume-e-pata-essenciais-passeio.png",
    label: "passeio",
    slug: "passeio",
  },
  {
    alt: "Toalhas, escova de madeira e frasco sem rótulo organizados sobre um balcão claro para a higiene do pet.",
    image: "/images/projects/lume-e-pata-essenciais-higiene.png",
    label: "higiene",
    slug: "higiene",
  },
  {
    alt: "Cama macia em tons de creme e verde com uma manta xadrez preparada para o descanso do pet.",
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeIndex = hoveredIndex ?? selectedIndex;
  const activeItem = essentials[activeIndex];

  function selectFromKeyboard(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % essentials.length;
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + essentials.length) % essentials.length;
    }

    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = essentials.length - 1;

    if (nextIndex === null) return;

    event.preventDefault();
    setHoveredIndex(null);
    setSelectedIndex(nextIndex);
    buttonRefs.current[nextIndex]?.focus();
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
            aria-label="Escolha um essencial para ver a foto"
            className={styles.essentialsRail}
            onPointerLeave={() => setHoveredIndex(null)}
            role="group"
            style={{ "--active-index": activeIndex } as CSSProperties}
          >
            {essentials.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  aria-controls="essentials-photo-panel"
                  aria-pressed={isActive}
                  className={`${styles.essentialsCategory} ${
                    isActive ? styles.essentialsCategoryActive : ""
                  }`}
                  key={item.slug}
                  onClick={() => {
                    setHoveredIndex(null);
                    setSelectedIndex(index);
                  }}
                  onFocus={() => {
                    setHoveredIndex(null);
                    setSelectedIndex(index);
                  }}
                  onKeyDown={(event) => selectFromKeyboard(event, index)}
                  onPointerEnter={(event) => {
                    if (event.pointerType === "mouse") setHoveredIndex(index);
                  }}
                  ref={(button) => {
                    buttonRefs.current[index] = button;
                  }}
                  type="button"
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    aria-hidden="true"
                    className={styles.essentialsCategoryArrow}
                    strokeWidth={1.8}
                  />
                </button>
              );
            })}
          </div>

          <div
            aria-label={`Foto selecionada: ${activeItem.label}`}
            className={styles.essentialsPhoto}
            id="essentials-photo-panel"
            role="region"
          >
            {essentials.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <Image
                  alt={isActive ? item.alt : ""}
                  aria-hidden={!isActive}
                  className={`${styles.essentialsPhotoImage} ${
                    isActive ? styles.essentialsPhotoImageActive : ""
                  }`}
                  fill
                  key={item.slug}
                  quality={90}
                  sizes="(min-width: 1280px) 1280px, (min-width: 768px) calc(100vw - 6rem), calc(100vw - 2.5rem)"
                  src={item.image}
                />
              );
            })}

            <span
              aria-hidden="true"
              className={styles.essentialsPhotoSweep}
              key={activeItem.slug}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
