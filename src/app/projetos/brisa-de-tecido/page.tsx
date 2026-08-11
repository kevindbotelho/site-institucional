import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/content/site";
import { getWhatsAppUrl } from "@/lib/contact";

import styles from "./project.module.css";

export const metadata: Metadata = {
  description:
    "Landing page de Brisa de Tecido para apresentar higienização de estofados em domicílio e converter pelo WhatsApp.",
  title: "Brisa de Tecido",
};

const pieces = ["Sofás", "Poltronas", "Cadeiras", "Puffs"] as const;

function WeaveMark() {
  return (
    <span aria-hidden="true" className={styles.weaveMark}>
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function BrisaDeTecidoPage() {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.contact.whatsappNumber,
    "Olá! Gostaria de pedir um orçamento de higienização de estofados. Posso enviar fotos e medidas?",
  );

  return (
    <div className={styles.page}>
      <div className={styles.portfolioBar}>
        <Link href="/projetos">← Projetos Zucco</Link>
        <span>Landing page</span>
      </div>

      <header className={styles.header}>
        <a className={styles.brand} href="#inicio">
          <WeaveMark />
          <span>
            Brisa <strong>de Tecido</strong>
          </span>
        </a>
        <nav aria-label="Navegação da Brisa de Tecido" className={styles.nav}>
          <a href="#servico">O serviço</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
        <a
          className={styles.headerCta}
          href={whatsappUrl}
          rel="noreferrer"
          target="_blank"
        >
          Pedir orçamento <Arrow />
        </a>
      </header>

      <main>
        <section className={styles.hero} id="inicio">
          <div aria-hidden="true" className={styles.heroGrid} />
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Higienização em domicílio</p>
            <h1>
              Seu sofá mais leve. Sua sala com outro <em>respiro.</em>
            </h1>
            <p className={styles.heroText}>
              Higienização de estofados para renovar o cuidado com a casa sem
              complicar sua rotina. O orçamento começa com fotos e medidas no
              WhatsApp.
            </p>
            <a
              className={styles.primaryButton}
              href={whatsappUrl}
              rel="noreferrer"
              target="_blank"
            >
              Pedir orçamento pelo WhatsApp <Arrow />
            </a>
            <div className={styles.quickInfo}>
              <div>
                <span>01</span>
                <p>Envie fotos do estofado</p>
              </div>
              <div>
                <span>02</span>
                <p>Informe medidas e bairro</p>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.imageFrame}>
              <Image
                alt="Sofá claro de tecido em uma sala iluminada e arejada."
                className={styles.heroImage}
                fill
                priority
                quality={92}
                sizes="(min-width: 900px) 50vw, 100vw"
                src="/images/projects/brisa-de-tecido-hero.png"
              />
            </div>
            <div className={styles.floatingLabel}>
              <span>Frescor visual</span>
              <strong>começa pelo cuidado.</strong>
            </div>
          </div>
        </section>

        <section aria-labelledby="service-title" className={styles.service} id="servico">
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Uma oferta direta</p>
            <h2 id="service-title">Cuidado técnico para os estofados que fazem parte da rotina.</h2>
          </div>
          <div className={styles.serviceBody}>
            <p>
              A higienização é avaliada conforme o tipo de peça, tecido,
              dimensões e condição atual. Assim, o primeiro contato já reúne o
              que é necessário para orientar o atendimento.
            </p>
            <ul aria-label="Peças que podem ser avaliadas">
              {pieces.map((piece) => (
                <li key={piece}>
                  <span>{piece}</span>
                  <span aria-hidden="true">↗</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          aria-labelledby="steps-title"
          className={styles.process}
          id="como-funciona"
        >
          <div className={styles.processHeading}>
            <p className={styles.eyebrow}>Como funciona</p>
            <h2 id="steps-title">Do primeiro contato ao cuidado no local.</h2>
          </div>
          <ol className={styles.steps}>
            <li>
              <span>01</span>
              <h3>Mostre o estofado</h3>
              <p>Envie fotos, medidas aproximadas e seu bairro pelo WhatsApp.</p>
            </li>
            <li>
              <span>02</span>
              <h3>Alinhe os detalhes</h3>
              <p>A peça é avaliada e as condições do atendimento são combinadas.</p>
            </li>
            <li>
              <span>03</span>
              <h3>Receba o serviço</h3>
              <p>A higienização acontece no local, conforme o que foi alinhado.</p>
            </li>
          </ol>
        </section>

        <section aria-labelledby="questions-title" className={styles.questions} id="duvidas">
          <div className={styles.questionCopy}>
            <p className={styles.eyebrow}>Antes de chamar</p>
            <h2 id="questions-title">O que enviar para pedir um orçamento?</h2>
            <p>
              Com algumas informações simples, a conversa fica mais objetiva e
              você entende o próximo passo sem preencher formulário.
            </p>
          </div>
          <div className={styles.checklist}>
            <div>
              <span aria-hidden="true">✓</span>
              <p>Fotos da peça inteira e dos detalhes que precisam de atenção.</p>
            </div>
            <div>
              <span aria-hidden="true">✓</span>
              <p>Medidas aproximadas ou quantidade de lugares.</p>
            </div>
            <div>
              <span aria-hidden="true">✓</span>
              <p>Bairro e uma ideia dos melhores períodos para atendimento.</p>
            </div>
            <a
              className={styles.secondaryButton}
              href={whatsappUrl}
              rel="noreferrer"
              target="_blank"
            >
              Começar pelo WhatsApp <Arrow />
            </a>
          </div>
        </section>

        <section aria-labelledby="final-title" className={styles.finalCta}>
          <div>
            <p className={styles.eyebrow}>Brisa de Tecido</p>
            <h2 id="final-title">Renove a sensação da sua sala.</h2>
          </div>
          <a
            className={styles.finalButton}
            href={whatsappUrl}
            rel="noreferrer"
            target="_blank"
          >
            Pedir orçamento <Arrow />
          </a>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.brand}>
          <WeaveMark />
          <span>
            Brisa <strong>de Tecido</strong>
          </span>
        </div>
        <p>Higienização de estofados em domicílio.</p>
        <Link href="/projetos">Ver todos os projetos Zucco</Link>
      </footer>
    </div>
  );
}
