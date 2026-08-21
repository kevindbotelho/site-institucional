import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Menu,
} from "lucide-react";
import { FaCircle, FaPaw } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";

import { ScrollRevealController } from "@/components/motion/ScrollRevealController";
import { siteConfig } from "@/content/site";
import { getWhatsAppUrl } from "@/lib/contact";

import styles from "./project.module.css";
import { EssentialsShelf } from "./EssentialsShelf";
import { WayStory } from "./WayStory";

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

const careNotes = [
  "Conversa antes do cuidado",
  "Ambiente tranquilo",
  "Contato direto",
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

function Brand() {
  return (
    <span className={styles.brandLockup}>
      <PawMark />
      <span>
        Lume <i>&amp;</i> Pata
      </span>
    </span>
  );
}

function WhatsAppMark() {
  return <SiWhatsapp aria-hidden="true" className={styles.portalWhatsappMark} />;
}

export default function LumeEPataPage() {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.contact.whatsappNumber,
    "Olá! Vi o site Lume & Pata e gostaria de conversar pelo WhatsApp.",
  );

  return (
    <div className={styles.page}>
      <ScrollRevealController />

      <div className={styles.portfolioBar}>
        <Link href="/projetos">← Projetos Zucco</Link>
        <span>Site institucional</span>
      </div>

      <header className={styles.portalHeader}>
        <div className={styles.portalHeaderInner}>
          <a aria-label="Lume e Pata — início" className={styles.portalBrand} href="#inicio">
            <span className={styles.portalBrandLockup}>
              <FaPaw aria-hidden="true" />
              <span>
                Lume <i>&amp;</i> Pata
              </span>
            </span>
            <span>Pet shop · banho &amp; tosa</span>
          </a>
          <nav aria-label="Navegação principal" className={styles.portalNav}>
            <a href="#cuidados">Cuidados</a>
            <a href="#nosso-jeito">Nosso jeito</a>
            <a href="#contato">Contato</a>
          </nav>
          <a
            className={styles.portalWhatsApp}
            href={whatsappUrl}
            rel="noreferrer"
            target="_blank"
          >
            <WhatsAppMark />
            <span>Falar no WhatsApp</span>
          </a>
          <a
            aria-label="Conhecer os cuidados"
            className={styles.portalMenu}
            href="#cuidados"
          >
            <Menu aria-hidden="true" size={27} strokeWidth={1.6} />
          </a>
        </div>
      </header>

      <main>
        <section aria-labelledby="lume-title" className={styles.portalHero} id="inicio">
          <div aria-hidden="true" className={styles.portalRail}>
            <FaPaw />
          </div>

          <div className={styles.portalHeroInner}>
            <div className={styles.portalCopy}>
              <p className={styles.portalEyebrow}>Pet shop · banho &amp; tosa</p>
              <h1 id="lume-title">
                Cuidado leve<br />
                para uma<br />
                rotina mais <em>feliz.</em>
              </h1>
              <p className={styles.portalText}>
                Um espaço de bairro para cuidar do seu pet com atenção, explicar
                cada etapa e facilitar o que você precisa no dia a dia.
              </p>
              <div className={styles.portalActions}>
                <a
                  className={styles.portalPrimary}
                  href={whatsappUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Conversar no WhatsApp
                  <WhatsAppMark />
                </a>
                <a className={styles.portalTextLink} href="#cuidados">
                  Conhecer os serviços
                  <ArrowRight aria-hidden="true" size={21} strokeWidth={1.6} />
                </a>
              </div>
            </div>

            <div className={styles.portalVisual}>
              <div className={styles.portalPhoto}>
                <Image
                  alt="Cachorro de pelo caramelo em um espaço acolhedor de banho e tosa."
                  className={styles.portalImage}
                  fill
                  priority
                  quality={92}
                  sizes="(min-width: 900px) 58vw, 100vw"
                  src="/images/projects/lume-e-pata-hero.png"
                />
              </div>

              <aside className={styles.portalCareCard}>
                <div className={styles.portalCareTop}>
                  <span className={styles.portalHomeMark}>
                    <Image
                      alt=""
                      aria-hidden="true"
                      height={59}
                      src="/images/projects/lume-portal-house-paw.png"
                      width={59}
                    />
                  </span>
                  <Image
                    alt=""
                    aria-hidden="true"
                    className={styles.portalCareTrail}
                    height={70}
                    src="/images/projects/lume-portal-card-trail.png"
                    width={155}
                  />
                </div>
                <h2>Atendimento próximo, do começo ao fim.</h2>
                <span aria-hidden="true" className={styles.portalCareDash} />
                <ul aria-label="Características do atendimento">
                  {careNotes.map((note, index) => (
                    <li key={note}>
                      {note}
                      {index < careNotes.length - 1 && (
                        <span aria-hidden="true">·</span>
                      )}
                    </li>
                  ))}
                </ul>
              </aside>
            </div>

            <p className={styles.portalClosingNote}>
              Do banho ao cuidado do dia a dia,<br />
              a gente está aqui pertinho de você.
            </p>
            <Image
              alt=""
              aria-hidden="true"
              className={styles.portalClosingTrail}
              height={70}
              src="/images/projects/lume-portal-closing-trail.png"
              width={433}
            />
          </div>
          <div aria-hidden="true" className={styles.portalGround} />
        </section>

        <section
          aria-labelledby="care-title"
          className={styles.services}
          id="cuidados"
        >
          <div className={styles.sectionShell}>
            <div className={styles.sectionHeading} data-scroll-reveal="true">
              <p className={styles.eyebrow}>Cuidados essenciais</p>
              <h2 id="care-title">
                Tudo o que importa,<br />
                fácil de <em>encontrar.</em>
              </h2>
              <p>A Lume organiza a rotina em três frentes simples.</p>
            </div>
            <div className={styles.careMosaic}>
              <span aria-hidden="true" className={styles.careThreadLeft}>
                <FaCircle />
              </span>
              <span aria-hidden="true" className={styles.careThreadTop} />
              <span aria-hidden="true" className={styles.careThreadBottom} />
              {services.map((service, index) => (
                <article
                  className={`${styles.careMosaicCard} ${
                    index === 0
                      ? styles.careMosaicBath
                      : index === 1
                        ? styles.careMosaicGrooming
                        : styles.careMosaicEssentials
                  }`}
                  data-scroll-reveal="true"
                  data-scroll-reveal-delay={index * 80}
                  key={service.number}
                >
                  <div className={styles.careCardCopy}>
                    <span className={styles.careMosaicNumber}>{service.number}</span>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                  <span aria-hidden="true" className={styles.careIconArch}>
                    <Image
                      alt=""
                      aria-hidden="true"
                      className={styles.careIconImage}
                      height={index === 1 ? 100 : index === 2 ? 104 : 105}
                      src={
                        index === 0
                          ? "/images/projects/lume-care-icon-bath.png"
                          : index === 1
                            ? "/images/projects/lume-care-icon-grooming.png"
                            : "/images/projects/lume-care-icon-essentials.png"
                      }
                      width={index === 0 ? 97 : index === 1 ? 86 : 103}
                    />
                  </span>
                </article>
              ))}
            </div>
          </div>
          <div className={styles.careOutro} data-scroll-reveal="true">
            <div aria-hidden="true" className={styles.careOutroShape} />
            <div className={styles.careOutroInner}>
              <div className={styles.careOutroMark}>
                <span aria-hidden="true" className={styles.careOutroPaw}>
                  <FaPaw />
                </span>
              </div>
              <p className={styles.careTransitionMessage}>
                Rotina leve, pet <em>feliz sempre.</em>
              </p>
              <p className={styles.careTransitionSupport}>
                Do banho à escolha dos itens do dia a dia, estamos ao lado de
                cada passo com afeto.
              </p>
            </div>
          </div>
        </section>

        <WayStory />

        <EssentialsShelf whatsappUrl={whatsappUrl} />

        <section
          aria-labelledby="contact-title"
          className={styles.contact}
          id="contato"
        >
          <div className={styles.contactStage} data-scroll-reveal="true">
            <div className={styles.contactCopy}>
              <p className={styles.contactEyebrow}>
                <FaPaw aria-hidden="true" />
                Vamos conversar?
              </p>
              <h2 id="contact-title">
                Seu pet merece<br />
                um cuidado que<br />
                faça <em>sentido</em> para ele.
              </h2>
              <p className={styles.contactSupport}>
                Conte um pouco sobre o que você procura. A conversa começa de um
                jeito simples, pelo WhatsApp.
              </p>
              <a
                className={styles.contactButton}
                href={whatsappUrl}
                rel="noreferrer"
                target="_blank"
              >
                <span>Chamar a Lume &amp; Pata</span>
                <WhatsAppMark />
              </a>
            </div>

            <div className={styles.contactPortal}>
              <Image
                alt="Cachorro de pelo caramelo descansando em uma cama verde dentro de um pet shop acolhedor."
                className={styles.contactPortalImage}
                fill
                quality={92}
                sizes="(min-width: 900px) 42vw, 100vw"
                src="/images/projects/lume-e-pata-cta-portal.png"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <Brand />
            <p>Pet shop · banho &amp; tosa</p>
          </div>
          <nav aria-label="Saídas da experiência Lume & Pata" className={styles.footerNav}>
            <Link href="/">
              <span>Voltar para a Home da Zucco</span>
              <ArrowRight aria-hidden="true" />
            </Link>
            <Link href="/projetos">
              <span>Ver todos os projetos</span>
              <ArrowRight aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
