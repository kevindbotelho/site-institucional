import type { Metadata } from "next";
import Link from "next/link";
import { Route } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

import { siteConfig } from "@/content/site";
import { getWhatsAppUrl } from "@/lib/contact";

import { BrisaHeroStory } from "./components-motion/BrisaHeroStory";
import { BrisaFinalComparison } from "./components-motion/BrisaFinalComparison";
import { BrisaServiceSelector } from "./components-motion/BrisaServiceSelector";
import styles from "./project.module.css";

export const metadata: Metadata = {
  description:
    "Landing page de Brisa de Tecido para apresentar higienização de estofados em domicílio e converter pelo WhatsApp.",
  title: "Brisa de Tecido",
};

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
      <header className={styles.header}>
        <Link className={styles.headerHome} href="/projetos">
          ← Projetos Zucco
        </Link>
        <a className={styles.brand} href="#inicio">
          <WeaveMark />
          <span>
            Brisa <strong>de Tecido</strong>
          </span>
        </a>
        <nav aria-label="Navegação da Brisa de Tecido" className={styles.nav}>
          <a href="#servico">O serviço</a>
          <a href="#como-funciona">Como funciona</a>
        </nav>
        <a
          className={styles.headerCta}
          href={whatsappUrl}
          rel="noreferrer"
          target="_blank"
        >
          Pedir orçamento pelo WhatsApp <Arrow />
        </a>
        <Link className={styles.headerProjects} href="/projetos">
          Projetos →
        </Link>
      </header>

      <main>
        <BrisaHeroStory whatsappUrl={whatsappUrl} />

        <BrisaServiceSelector whatsappUrl={whatsappUrl} />

        <section
          aria-labelledby="steps-title"
          className={styles.processThread}
          id="como-funciona"
        >
          <div className={styles.processThreadHeading}>
            <p className={styles.processThreadEyebrow}>
              <Route aria-hidden="true" />
              Como funciona
            </p>
            <h2 id="steps-title">
              Um fio de cuidado, <em>do contato ao local.</em>
            </h2>
          </div>
          <ol className={styles.processThreadSteps}>
            <li className={`${styles.processThreadStep} ${styles.processThreadShow}`}>
              <span className={styles.processThreadNumber}>01</span>
              <div className={styles.processThreadCopy}>
                <h3>Mostre o estofado</h3>
                <p>Envie fotos, medidas aproximadas e bairro pelo WhatsApp.</p>
              </div>
            </li>
            <li className={`${styles.processThreadStep} ${styles.processThreadAlign}`}>
              <span className={styles.processThreadNumber}>02</span>
              <div className={styles.processThreadCopy}>
                <h3>Alinhe os detalhes</h3>
                <p>
                  A peça é avaliada e as condições do atendimento são
                  combinadas.
                </p>
                <div className={styles.processThreadAlignment}>
                  <span>Peça</span>
                  <span>Condições do atendimento</span>
                </div>
              </div>
            </li>
            <li className={`${styles.processThreadStep} ${styles.processThreadReceive}`}>
              <span className={styles.processThreadNumber}>03</span>
              <div className={styles.processThreadCopy}>
                <h3>Receba o serviço</h3>
                <p>
                  A higienização acontece no local conforme o que foi
                  alinhado.
                </p>
                <a
                  className={styles.processThreadCta}
                  href={whatsappUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaWhatsapp aria-hidden="true" />
                  <span>Enviar pelo WhatsApp</span>
                  <Arrow />
                </a>
              </div>
            </li>
          </ol>
        </section>

        <BrisaFinalComparison whatsappUrl={whatsappUrl} />
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
