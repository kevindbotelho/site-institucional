import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/content/site";
import { getWhatsAppUrl } from "@/lib/contact";

import styles from "./project.module.css";

export const metadata: Metadata = {
  description:
    "Site institucional de Lume & Pata, pet shop e banho e tosa com uma presença digital clara e acolhedora.",
  title: "Lume & Pata",
};

const services = [
  {
    number: "01",
    text: "Higiene pensada para deixar o pet confortável do começo ao fim.",
    title: "Banho cuidadoso",
  },
  {
    number: "02",
    text: "Ajustes de pelagem combinados com cada tutor e o bem-estar do pet.",
    title: "Tosa sob medida",
  },
  {
    number: "03",
    text: "Itens úteis para alimentação, passeio, higiene e momentos de descanso.",
    title: "Essenciais do dia a dia",
  },
] as const;

function PawMark() {
  return (
    <span aria-hidden="true" className={styles.pawMark}>
      <span />
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

export default function LumeEPataPage() {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.contact.whatsappNumber,
    "Olá! Vi o site Lume & Pata e gostaria de conversar pelo WhatsApp.",
  );

  return (
    <div className={styles.page}>
      <div className={styles.portfolioBar}>
        <Link href="/projetos">← Projetos Zucco</Link>
        <span>Site institucional</span>
      </div>

      <header className={styles.header}>
        <Link className={styles.brand} href="#inicio">
          <PawMark />
          <span>
            Lume <i>&amp;</i> Pata
          </span>
        </Link>
        <nav aria-label="Navegação da Lume e Pata" className={styles.nav}>
          <a href="#cuidados">Cuidados</a>
          <a href="#nosso-jeito">Nosso jeito</a>
          <a href="#contato">Contato</a>
        </nav>
        <a
          className={styles.headerCta}
          href={whatsappUrl}
          rel="noreferrer"
          target="_blank"
        >
          Falar no WhatsApp <Arrow />
        </a>
      </header>

      <main>
        <section className={styles.hero} id="inicio">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Pet shop · banho &amp; tosa</p>
            <h1>
              Cuidado leve para uma rotina mais <em>feliz.</em>
            </h1>
            <p className={styles.heroText}>
              Um espaço de bairro para cuidar do seu pet com atenção, explicar
              cada etapa e facilitar o que você precisa no dia a dia.
            </p>
            <div className={styles.heroActions}>
              <a
                className={styles.primaryButton}
                href={whatsappUrl}
                rel="noreferrer"
                target="_blank"
              >
                Conversar sobre um cuidado <Arrow />
              </a>
              <a className={styles.textLink} href="#cuidados">
                Conhecer os serviços ↓
              </a>
            </div>
            <ul aria-label="Características do atendimento" className={styles.heroNotes}>
              <li>Conversa antes do cuidado</li>
              <li>Ambiente tranquilo</li>
              <li>Contato direto</li>
            </ul>
          </div>

          <div className={styles.heroVisual}>
            <div aria-hidden="true" className={styles.sunShape} />
            <div className={styles.imageFrame}>
              <Image
                alt="Cachorro de pelo caramelo em um espaço acolhedor de banho e tosa."
                className={styles.heroImage}
                fill
                priority
                quality={92}
                sizes="(min-width: 900px) 48vw, 100vw"
                src="/images/projects/lume-e-pata-hero.png"
              />
            </div>
            <div className={styles.visualNote}>
              <PawMark />
              <span>Um cuidado de cada vez.</span>
            </div>
          </div>
        </section>

        <section aria-labelledby="care-title" className={styles.services} id="cuidados">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Cuidados essenciais</p>
            <h2 id="care-title">Tudo o que importa, fácil de encontrar.</h2>
            <p>
              O site organiza a rotina do pet shop em três frentes simples,
              com informação direta e um próximo passo claro.
            </p>
          </div>
          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <article className={styles.serviceCard} key={service.number}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="way-title"
          className={styles.way}
          id="nosso-jeito"
        >
          <div className={styles.wayImage}>
            <Image
              alt="Detalhe do ambiente claro e organizado da Lume e Pata."
              fill
              quality={88}
              sizes="(min-width: 900px) 42vw, 100vw"
              src="/images/projects/lume-e-pata-hero.png"
            />
          </div>
          <div className={styles.wayCopy}>
            <p className={styles.eyebrow}>Nosso jeito</p>
            <h2 id="way-title">O ritmo do pet vem primeiro.</h2>
            <p>
              Antes de começar, a gente entende hábitos, sensibilidades e o
              cuidado esperado. Durante o atendimento, cada etapa acontece com
              atenção e sem pressa desnecessária.
            </p>
            <ol className={styles.steps}>
              <li>
                <span>1</span>
                <div>
                  <strong>Você conta o que precisa.</strong>
                  <p>Alinhamos o cuidado e tiramos dúvidas pelo WhatsApp.</p>
                </div>
              </li>
              <li>
                <span>2</span>
                <div>
                  <strong>Recebemos o pet com calma.</strong>
                  <p>O atendimento respeita sinais, rotina e particularidades.</p>
                </div>
              </li>
              <li>
                <span>3</span>
                <div>
                  <strong>Você acompanha o próximo passo.</strong>
                  <p>Combinamos a retirada e os cuidados para depois.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section aria-labelledby="contact-title" className={styles.contact} id="contato">
          <PawMark />
          <p className={styles.eyebrow}>Vamos conversar?</p>
          <h2 id="contact-title">Seu pet merece um cuidado que faça sentido para ele.</h2>
          <p>
            Conte um pouco sobre o que você procura. A conversa começa de um
            jeito simples, pelo WhatsApp.
          </p>
          <a
            className={styles.contactButton}
            href={whatsappUrl}
            rel="noreferrer"
            target="_blank"
          >
            Chamar a Lume &amp; Pata <Arrow />
          </a>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.brand}>
          <PawMark />
          <span>
            Lume <i>&amp;</i> Pata
          </span>
        </div>
        <p>Pet shop · banho &amp; tosa</p>
        <Link href="/projetos">Ver todos os projetos Zucco</Link>
      </footer>
    </div>
  );
}
