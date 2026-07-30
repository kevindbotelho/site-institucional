"use client";

import { useEffect, useRef } from "react";

const workSteps = [
  {
    title: "Você conta a ideia ou o problema.",
    description:
      "Entendemos o que precisa melhorar e qual é o próximo passo mais útil.",
  },
  {
    title: "Definimos uma solução possível.",
    description:
      "O escopo é ajustado ao que faz sentido para o seu negócio agora.",
  },
  {
    title: "Eu construo e colocamos no ar.",
    description:
      "Você acompanha o processo e recebe uma solução pronta para usar ou apresentar.",
  },
] as const;

export function HomeWorkProcess() {
  const storyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const basePathRef = useRef<SVGPathElement>(null);
  const progressPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const story = storyRef.current;
    const track = trackRef.current;
    const stage = stageRef.current;
    const svg = svgRef.current;
    const basePath = basePathRef.current;
    const progressPath = progressPathRef.current;

    if (!story || !track || !stage || !svg || !basePath || !progressPath) {
      return;
    }

    const cards = Array.from(
      story.querySelectorAll<HTMLElement>("[data-work-step]"),
    );
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let animationFrame = 0;
    let needsPathRedraw = true;
    let noteFocus: "first" | "second" = "first";

    cards.forEach((card) => {
      delete card.dataset.active;
    });
    story.dataset.enhanced = "true";
    story.dataset.noteFocus = "first";

    const showCompleteProcess = () => {
      progressPath.style.strokeDashoffset = "0";
      story.dataset.visible = "true";
      story.dataset.noteFocus = "complete";
      cards.forEach((card) => {
        card.dataset.active = "true";
      });
    };

    const drawPath = () => {
      const stageRect = stage.getBoundingClientRect();
      const points = cards.flatMap((card, index) => {
        const node = card.querySelector<HTMLElement>(".work-process-node");
        if (!node) return [];

        const nodeRect = node.getBoundingClientRect();
        return [
          {
            x: nodeRect.left - stageRect.left + nodeRect.width / 2,
            y: nodeRect.top - stageRect.top + nodeRect.height / 2,
            startsLeft: index % 2 === 0,
          },
        ];
      });

      if (points.length !== cards.length) return;

      let path = `M ${points[0].x} ${points[0].y}`;

      for (let index = 1; index < points.length; index += 1) {
        const previous = points[index - 1];
        const current = points[index];

        if (!desktopQuery.matches) {
          path += ` L ${current.x} ${current.y}`;
          continue;
        }

        const verticalDistance = current.y - previous.y;
        const curve = Math.max(
          Math.abs(current.x - previous.x) * 0.5,
          verticalDistance * 0.36,
          64,
        );
        const firstControlX = previous.startsLeft
          ? previous.x + curve
          : previous.x - curve;
        const secondControlX = current.startsLeft
          ? current.x + curve
          : current.x - curve;

        path += ` C ${firstControlX} ${previous.y}, ${secondControlX} ${current.y}, ${current.x} ${current.y}`;
      }

      svg.setAttribute(
        "viewBox",
        `0 0 ${Math.max(1, stageRect.width)} ${Math.max(1, stageRect.height)}`,
      );
      basePath.setAttribute("d", path);
      progressPath.setAttribute("d", path);
    };

    const updateStory = () => {
      if (reducedMotionQuery.matches) {
        showCompleteProcess();
        return;
      }

      const nodes = cards.flatMap((card) => {
        const node = card.querySelector<HTMLElement>(".work-process-node");
        return node ? [node] : [];
      });

      if (nodes.length !== cards.length) return;

      const storyRect = story.getBoundingClientRect();
      if (storyRect.top <= window.innerHeight * 0.84) {
        story.dataset.visible = "true";
      }

      const firstNodeRect = nodes[0].getBoundingClientRect();
      const lastNodeRect = nodes[nodes.length - 1].getBoundingClientRect();
      const firstNodeCenter = firstNodeRect.top + firstNodeRect.height / 2;
      const lastNodeCenter = lastNodeRect.top + lastNodeRect.height / 2;
      const startLine = window.innerHeight * 0.74;
      const endLine =
        window.innerHeight * (desktopQuery.matches ? 0.62 : 0.84);
      const travelDistance = Math.max(
        1,
        lastNodeCenter - firstNodeCenter + startLine - endLine,
      );
      const progress = Math.min(
        1,
        Math.max(0, (startLine - firstNodeCenter) / travelDistance),
      );

      progressPath.style.strokeDashoffset = String(1 - progress);

      if (desktopQuery.matches) {
        if (progress >= 0.56) noteFocus = "second";
        if (progress <= 0.48) noteFocus = "first";
        story.dataset.noteFocus = noteFocus;
      } else {
        story.dataset.noteFocus = "complete";
      }

      const activationPoints = [0.02, 0.36, 0.7];

      cards.forEach((card, index) => {
        if (progress >= activationPoints[index]) {
          card.dataset.active = "true";
        }
      });
    };

    const renderStory = () => {
      animationFrame = 0;
      if (needsPathRedraw) {
        drawPath();
        needsPathRedraw = false;
      }
      updateStory();
    };

    const requestUpdate = (redrawPath = false) => {
      needsPathRedraw = needsPathRedraw || redrawPath;
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(renderStory);
    };

    const handleScroll = () => requestUpdate(false);
    const handleResize = () => requestUpdate(true);
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(track);
    resizeObserver.observe(stage);
    cards.forEach((card) => resizeObserver.observe(card));
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    desktopQuery.addEventListener("change", handleResize);
    reducedMotionQuery.addEventListener("change", handleResize);
    requestUpdate(true);

    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      desktopQuery.removeEventListener("change", handleResize);
      reducedMotionQuery.removeEventListener("change", handleResize);
      delete story.dataset.enhanced;
      delete story.dataset.noteFocus;
      delete story.dataset.visible;
    };
  }, []);

  return (
    <section
      aria-labelledby="home-work-process-title"
      className="relative isolate px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -left-40 top-28 -z-10 size-[28rem] rounded-full bg-blue-200/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-48 bottom-20 -z-10 size-[30rem] rounded-full bg-indigo-200/25 blur-3xl"
      />

      <div ref={storyRef} className="work-process-story mx-auto max-w-6xl">
        <div className="work-process-layout">
          <header className="work-process-copy">
            <p className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-normal text-blue-700">
              <span
                aria-hidden="true"
                className="h-px w-7 bg-gradient-to-r from-blue-600 to-indigo-600"
              />
              Forma de trabalho
            </p>
            <h2
              id="home-work-process-title"
              className="mt-5 max-w-xl font-[family-name:Manrope,Arial,sans-serif] text-[2rem] font-extrabold leading-[1.16] text-slate-950 sm:text-[2.55rem] lg:text-[3rem]"
            >
              Começamos por uma{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                conversa simples.
              </span>
            </h2>

            <div className="work-process-closing mt-7">
              <span aria-hidden="true" className="work-process-closing-dot" />
              <p className="work-process-note-reel">
                <span className="work-process-note-line work-process-note-line-first">
                  Não precisa chegar com tudo definido.
                </span>
                <strong className="work-process-note-line work-process-note-line-second">
                  Uma boa ideia já é um começo.
                </strong>
              </p>
            </div>
          </header>

          <div ref={trackRef} className="work-process-track">
            <div ref={stageRef} className="work-process-stage">
              <div
                aria-hidden="true"
                className="work-process-stage-glow"
              />

              <svg
                ref={svgRef}
                aria-hidden="true"
                className="work-process-path"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="work-process-gradient"
                    x1="0"
                    x2="1"
                    y1="0"
                    y2="1"
                  >
                    <stop offset="0" stopColor="#60a5fa" />
                    <stop offset="0.55" stopColor="#2563eb" />
                    <stop offset="1" stopColor="#4f46e5" />
                  </linearGradient>
                  <filter
                    id="work-process-glow"
                    x="-40%"
                    y="-40%"
                    width="180%"
                    height="180%"
                  >
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  ref={basePathRef}
                  className="work-process-path-base"
                  pathLength="1"
                />
                <path
                  ref={progressPathRef}
                  className="work-process-path-progress"
                  pathLength="1"
                />
              </svg>

              <ol className="work-process-steps">
                {workSteps.map((step, index) => (
                  <li
                    className="work-process-step"
                    data-active="true"
                    data-work-step
                    key={step.title}
                  >
                    <span aria-hidden="true" className="work-process-node">
                      <span>0{index + 1}</span>
                    </span>
                    <article>
                      <p className="work-process-step-label">
                        Etapa 0{index + 1}
                      </p>
                      <h3>{step.title}</h3>
                      <p className="work-process-step-description">
                        {step.description}
                      </p>
                    </article>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
