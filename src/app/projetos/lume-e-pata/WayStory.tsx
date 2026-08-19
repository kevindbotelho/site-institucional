"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import styles from "./project.module.css";

const waySteps = [
  {
    body: "Alinhamos o cuidado e tiramos dúvidas pelo WhatsApp.",
    number: "01",
    title: "Você conta o que precisa.",
  },
  {
    body: "O atendimento respeita sinais, rotina e particularidades.",
    number: "02",
    title: "Recebemos o pet com calma.",
  },
  {
    body: "Combinamos a retirada e os cuidados para depois.",
    number: "03",
    title: "Você acompanha o próximo passo.",
  },
] as const;

const stepScrollPositions = [0.08, 0.5, 0.84] as const;

export function WayStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateActiveStep = () => {
      frameRef.current = null;

      if (motionQuery.matches) {
        setActiveStep(0);
        return;
      }

      const rect = section.getBoundingClientRect();
      const scrollDistance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(-rect.top / scrollDistance, 0), 1);
      const nextStep = progress < 1 / 3 ? 0 : progress < 2 / 3 ? 1 : 2;

      setActiveStep((currentStep) =>
        currentStep === nextStep ? currentStep : nextStep,
      );
    };

    const scheduleUpdate = () => {
      if (frameRef.current !== null) return;
      frameRef.current = window.requestAnimationFrame(updateActiveStep);
    };

    const handleMotionChange = () => {
      setReducedMotion(motionQuery.matches);
      scheduleUpdate();
    };

    setReducedMotion(motionQuery.matches);
    updateActiveStep();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    motionQuery.addEventListener("change", handleMotionChange);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      motionQuery.removeEventListener("change", handleMotionChange);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const moveToStep = (index: number) => {
    const section = sectionRef.current;
    if (!section || reducedMotion) return;

    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const scrollDistance = Math.max(section.offsetHeight - window.innerHeight, 0);

    window.scrollTo({
      behavior: "smooth",
      top: sectionTop + scrollDistance * stepScrollPositions[index],
    });
  };

  return (
    <section
      aria-labelledby="way-title"
      className={styles.wayStory}
      data-active-step={activeStep + 1}
      id="nosso-jeito"
      ref={sectionRef}
    >
      <div className={styles.wayStorySticky}>
        <div className={styles.wayStoryInner}>
          <div className={styles.wayStoryVisual}>
            <div className={styles.wayStoryPhoto}>
              <Image
                alt="Cachorro sentado enquanto recebe uma escovação cuidadosa."
                className={styles.wayStoryImage}
                fill
                quality={90}
                sizes="(min-width: 1024px) 46vw, (min-width: 761px) 42vw, 100vw"
                src="/images/projects/lume-e-pata-nosso-jeito.png"
              />
            </div>

            <div className={styles.wayStoryPhotoMeta}>
              <span>Atenção em cada etapa</span>
              <p aria-label={`Etapa ${activeStep + 1} de 3`}>
                <strong>{waySteps[activeStep].number}</strong>
                <span aria-hidden="true"> / 03</span>
              </p>
            </div>
          </div>

          <div className={styles.wayStoryContent}>
            <p className={styles.wayStoryEyebrow}>Nosso jeito</p>
            <h2 id="way-title">O ritmo do pet vem primeiro.</h2>
            <p className={styles.wayStoryIntro}>
              Antes de começar, a gente entende hábitos, sensibilidades e o
              cuidado esperado. Durante o atendimento, cada etapa acontece com
              atenção e sem pressa desnecessária.
            </p>

            <div className={styles.wayStoryStepViewport}>
              <ol
                aria-label="Etapas do atendimento"
                className={styles.wayStorySteps}
              >
                {waySteps.map((step, index) => (
                  <li
                    className={styles.wayStoryStep}
                    data-active={activeStep === index ? "true" : undefined}
                    id={`way-step-${index + 1}`}
                    key={step.number}
                  >
                    <span aria-hidden="true" className={styles.wayStoryStepNumber}>
                      {step.number}
                    </span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div aria-label="Escolher etapa" className={styles.wayStorySelectors}>
              {waySteps.map((step, index) => (
                <button
                  aria-controls={`way-step-${index + 1}`}
                  aria-label={`Mostrar etapa ${index + 1}: ${step.title}`}
                  aria-pressed={activeStep === index}
                  key={step.number}
                  onClick={() => moveToStep(index)}
                  type="button"
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <p aria-hidden="true" className={styles.wayStoryHint}>
              Role para acompanhar cada etapa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

