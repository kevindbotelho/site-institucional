import Image from "next/image";

import { AboutPortrait } from "@/components/about/AboutPortrait";

const credibilityPoints = [
  "Soluções de IA em produção",
  "Dados e automação aplicados à operação",
  "Experiência da análise à entrega",
] as const;

export function HomeAbout() {
  return (
    <section
      aria-labelledby="home-about-title"
      className="relative isolate scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
      id="sobre"
    >
      <div
        aria-hidden="true"
        className="absolute -left-48 bottom-0 -z-10 size-[30rem] rounded-full bg-blue-200/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-44 top-12 -z-10 size-[28rem] rounded-full bg-indigo-200/30 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(24rem,0.98fr)] lg:items-center lg:gap-20">
        <div
          className="min-w-0"
          data-scroll-reveal="true"
          data-scroll-reveal-delay="70"
        >
          <AboutPortrait />
        </div>

        <div className="min-w-0">
          <div data-scroll-reveal="true">
            <p className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-normal text-blue-700">
              <span
                aria-hidden="true"
                className="h-px w-7 bg-gradient-to-r from-blue-600 to-indigo-600"
              />
              Sobre
            </p>
            <h2
              data-home-section-focus
              id="home-about-title"
              className="mt-5 max-w-2xl font-[family-name:Manrope,Arial,sans-serif] text-[2rem] font-extrabold leading-[1.16] text-slate-950 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 sm:text-[2.55rem] lg:text-[3rem]"
              tabIndex={-1}
            >
              Eu sou{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Kevin.
              </span>{" "}
              Construo soluções com{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                dados e IA.
              </span>
            </h2>
          </div>

          <p
            className="mt-6 max-w-xl text-base font-medium leading-7 text-slate-600 sm:text-lg sm:leading-8"
            data-scroll-reveal="true"
            data-scroll-reveal-delay="80"
          >
            Minha trajetória passa por dados, operação e automação. Hoje,
            aplico essa experiência na criação de soluções digitais e sistemas
            de IA para problemas reais.
          </p>

          <div>
            <ul
              aria-label="Credenciais profissionais"
              className="about-proof-list mt-7"
              data-scroll-reveal="true"
              data-scroll-reveal-delay="110"
            >
              {credibilityPoints.map((point) => (
                <li
                  className="about-proof-item"
                  key={point}
                >
                  <span
                    aria-hidden="true"
                    className="about-proof-mark"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div
              className="about-company-band mt-8 overflow-hidden rounded-[1.25rem] border border-white/90 bg-white/62 p-5 shadow-[0_16px_40px_rgba(30,64,175,0.08)] backdrop-blur-xl sm:p-6"
              data-scroll-reveal="true"
              data-scroll-reveal-delay="180"
            >
              <p className="text-[0.64rem] font-bold uppercase tracking-[0.12em] text-slate-500">
                Experiência profissional em
              </p>
              <div className="mt-4 grid grid-cols-2 items-center gap-3">
                <div className="about-company-card relative h-14 overflow-hidden rounded-xl border border-slate-200/80 bg-white/75 px-4">
                  <Image
                    alt="Inter"
                    className="about-company-logo object-contain p-4 brightness-0"
                    fill
                    sizes="10rem"
                    src="/images/about/inter.webp"
                  />
                </div>
                <div className="about-company-card relative h-14 overflow-hidden rounded-xl border border-slate-200/80 bg-white/75">
                  <Image
                    alt="Constance Calçados"
                    className="about-company-logo scale-[1.42] object-cover grayscale invert mix-blend-multiply"
                    fill
                    sizes="10rem"
                    src="/images/about/constance.jpg"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
