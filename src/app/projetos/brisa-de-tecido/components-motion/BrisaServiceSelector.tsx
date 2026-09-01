"use client";

import { useState, type KeyboardEvent } from "react";
import { Armchair, ArrowRight, Bean, RockingChair, Ruler, Sofa } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

import styles from "../project.module.css";

const pieces = [
  { icon: "sofa", image: "sofa", name: "Sofás", number: "01" },
  { icon: "armchair", image: "armchair", name: "Poltronas", number: "02" },
  { icon: "chair", image: "chair", name: "Cadeiras", number: "03" },
  { icon: "pouf", image: "pouf", name: "Puffs", number: "04" },
] as const;

type BrisaServiceSelectorProps = {
  whatsappUrl: string;
};

function ServicePieceIcon({ kind }: { kind: (typeof pieces)[number]["icon"] }) {
  if (kind === "sofa") return <Sofa aria-hidden="true" />;
  if (kind === "armchair") return <Armchair aria-hidden="true" />;
  if (kind === "chair") return <RockingChair aria-hidden="true" />;

  return <Bean aria-hidden="true" />;
}

export function BrisaServiceSelector({ whatsappUrl }: BrisaServiceSelectorProps) {
  const [activePiece, setActivePiece] = useState(0);

  function handlePieceKeyDown(event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) {
    const keyToIndex: Record<string, number> = {
      ArrowDown: (currentIndex + 1) % pieces.length,
      ArrowLeft: (currentIndex - 1 + pieces.length) % pieces.length,
      ArrowRight: (currentIndex + 1) % pieces.length,
      ArrowUp: (currentIndex - 1 + pieces.length) % pieces.length,
      End: pieces.length - 1,
      Home: 0,
    };
    const nextIndex = keyToIndex[event.key];

    if (nextIndex === undefined) return;

    event.preventDefault();
    setActivePiece(nextIndex);
    event.currentTarget.parentElement
      ?.querySelectorAll<HTMLButtonElement>("button")
      [nextIndex]?.focus();
  }

  return (
    <section aria-labelledby="service-title" className={styles.serviceAtelier} id="servico">
      <div className={styles.serviceAtelierIntro}>
        <p className={styles.serviceAtelierEyebrow}>
          <Ruler aria-hidden="true" /> Higienização em domicílio
        </p>
        <h2 id="service-title">
          O cuidado começa por <em>entender a peça.</em>
        </h2>
        <p className={styles.serviceAtelierLead}>
          A higienização é avaliada conforme tipo de peça, tecido, dimensões e condição atual.
        </p>
        <div className={styles.serviceAtelierContactGuide}>
          <p>Para orientar o atendimento</p>
          <div aria-label="Envie fotos, medidas e bairro" className={styles.serviceAtelierContactSteps}>
            <span>Fotos</span>
            <ArrowRight aria-hidden="true" />
            <span>Medidas</span>
            <ArrowRight aria-hidden="true" />
            <span>Bairro</span>
          </div>
        </div>
      </div>

      <div aria-label="Escolha o tipo de peça" className={styles.serviceAtelierSelector}>
        {pieces.map((piece, index) => {
          const isActive = activePiece === index;

          return (
            <button
              aria-controls="service-piece-description"
              aria-pressed={isActive}
              className={styles.serviceAtelierPiece}
              data-active={isActive ? "true" : undefined}
              data-image={piece.image}
              key={piece.name}
              onClick={() => setActivePiece(index)}
              onKeyDown={(event) => handlePieceKeyDown(event, index)}
              type="button"
            >
              <span aria-hidden="true" className={styles.serviceAtelierPhoto} />
              <span className={styles.serviceAtelierPieceMeta}>
                <span>{piece.number}</span>
                <ServicePieceIcon kind={piece.icon} />
              </span>
              <span className={styles.serviceAtelierPieceName}>{piece.name}</span>
              {isActive && (
                <span className={styles.serviceAtelierDescription} id="service-piece-description">
                  A peça, o tecido, as dimensões e a condição atual orientam o primeiro contato.
                </span>
              )}
              <span aria-hidden="true" className={styles.serviceAtelierTrace} />
            </button>
          );
        })}
      </div>

      <a className={styles.serviceAtelierCta} href={whatsappUrl} rel="noreferrer" target="_blank">
        <FaWhatsapp aria-hidden="true" />
        Pedir orçamento pelo WhatsApp <span aria-hidden="true">→</span>
      </a>
    </section>
  );
}
