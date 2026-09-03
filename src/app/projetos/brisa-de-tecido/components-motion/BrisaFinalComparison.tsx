"use client";

import { type CSSProperties, useCallback, useRef, useState } from "react";
import { Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

import styles from "../project.module.css";

const INITIAL_POSITION = 50;
const KEYBOARD_STEP = 5;

function clampPosition(value: number) {
  return Math.min(100, Math.max(0, value));
}

export function BrisaFinalComparison({ whatsappUrl }: { whatsappUrl: string }) {
  const [position, setPosition] = useState(INITIAL_POSITION);
  const stageRef = useRef<HTMLDivElement>(null);

  const setPositionFromPointer = useCallback((clientX: number) => {
    const stage = stageRef.current;
    if (!stage) return;

    const bounds = stage.getBoundingClientRect();
    setPosition(clampPosition(((clientX - bounds.left) / bounds.width) * 100));
  }, []);

  return (
    <section aria-labelledby="final-title" className={styles.finalCta}>
      <div className={styles.finalComparisonIntro}>
        <p className={styles.finalComparisonEyebrow}>
          <Sparkles aria-hidden="true" />
          Higienização profunda de estofados
        </p>
        <h2>Seu estofado, <em>renovado por inteiro.</em></h2>
      </div>
      <div className={styles.finalComparisonFrame}>
        <div
          aria-describedby="final-comparison-instruction"
          aria-label="Comparador do sofá antes e depois"
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={Math.round(position)}
          aria-valuetext={`${Math.round(position)}% do registro antes visível`}
          className={styles.finalComparisonStage}
          data-after-label-visible={position < 86 ? "true" : "false"}
          data-before-label-visible={position > 14 ? "true" : "false"}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight" || event.key === "ArrowUp") {
              event.preventDefault();
              setPosition((current) => clampPosition(current + KEYBOARD_STEP));
            }
            if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
              event.preventDefault();
              setPosition((current) => clampPosition(current - KEYBOARD_STEP));
            }
            if (event.key === "Home") {
              event.preventDefault();
              setPosition(0);
            }
            if (event.key === "End") {
              event.preventDefault();
              setPosition(100);
            }
          }}
          onPointerDown={(event) => {
            event.currentTarget.setPointerCapture(event.pointerId);
            setPositionFromPointer(event.clientX);
          }}
          onPointerMove={(event) => {
            if (event.currentTarget.hasPointerCapture(event.pointerId)) {
              setPositionFromPointer(event.clientX);
            }
          }}
          ref={stageRef}
          role="slider"
          style={{ "--comparison-position": `${position}%` } as CSSProperties}
          tabIndex={0}
        >
          <div className={styles.finalComparisonAfter}>
            <img alt="Sofá depois da higienização" src="/images/projects/brisa-after-sofa-v2.png" />
          </div>
          <div className={styles.finalComparisonBefore}>
            <img alt="" src="/images/projects/brisa-before-sofa.png" />
          </div>
          <span aria-hidden="true" className={styles.finalComparisonLabelBefore}>
            Antes · sem Brisa
          </span>
          <span aria-hidden="true" className={styles.finalComparisonLabelAfter}>
            Depois · Brisa de Tecido
          </span>
          <span aria-hidden="true" className={styles.finalComparisonDivider}>
            <span className={styles.finalComparisonGrip}>↔</span>
          </span>
        </div>
      </div>
      <p className={styles.finalComparisonInstruction} id="final-comparison-instruction">
        Arraste para os lados e veja a transformação.
      </p>
      <div className={styles.finalComparisonClosure}>
        <p className={styles.eyebrow}>Brisa de Tecido</p>
        <h2 id="final-title">A diferença mora no toque.</h2>
        <a className={`${styles.finalButton} ${styles.finalComparisonButton}`} href={whatsappUrl} rel="noreferrer" target="_blank">
          <FaWhatsapp aria-hidden="true" />
          <span>Pedir orçamento pelo WhatsApp</span>
          <span aria-hidden="true" className={styles.finalComparisonButtonArrow}>↗</span>
        </a>
      </div>
    </section>
  );
}
