import { EmailCopyButton } from "@/components/contact/EmailCopyButton";
import { siteConfig } from "@/content/site";
import { getWhatsAppUrl } from "@/lib/contact";

export function HomeFinalCta() {
  const whatsappUrl = getWhatsAppUrl(
    siteConfig.contact.whatsappNumber,
    siteConfig.contact.defaultWhatsAppMessage,
  );
  return (
    <section
      aria-labelledby="home-final-cta-title"
      className="home-final-cta relative isolate overflow-hidden px-4 pb-24 pt-20 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8 lg:pb-36 lg:pt-32"
    >
      <div aria-hidden="true" className="home-final-cta-light" />
      <div aria-hidden="true" className="home-final-cta-horizon" />
      <div
        aria-hidden="true"
        className="home-final-cta-line home-final-cta-line-left"
      />
      <div
        aria-hidden="true"
        className="home-final-cta-line home-final-cta-line-right"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <p
          className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-normal text-blue-700"
          data-scroll-reveal="true"
        >
          <span
            aria-hidden="true"
            className="h-px w-7 bg-gradient-to-r from-blue-600 to-indigo-600"
          />
          Vamos conversar
          <span
            aria-hidden="true"
            className="h-px w-7 bg-gradient-to-l from-blue-600 to-indigo-600"
          />
        </p>

        <h2
          className="mt-6 max-w-4xl font-[family-name:Manrope,Arial,sans-serif] text-[2.25rem] font-extrabold leading-[1.12] tracking-[-0.055em] text-slate-950 sm:text-[3rem] lg:text-[4.15rem]"
          data-scroll-reveal="true"
          data-scroll-reveal-delay="70"
          id="home-final-cta-title"
        >
          Tem{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            uma ideia
          </span>{" "}
          para o seu negócio?
        </h2>

        <p
          className="mt-6 max-w-2xl text-base font-medium leading-7 text-slate-600 sm:text-lg sm:leading-8"
          data-scroll-reveal="true"
          data-scroll-reveal-delay="120"
        >
          Me conte o que você tem em mente. Podemos entender juntos qual é a
          forma mais simples de transformar isso em algo real.
        </p>

        <div
          className="home-final-cta-actions relative mt-10 flex w-full max-w-xl flex-col items-center sm:mt-12"
          data-scroll-reveal="true"
          data-scroll-reveal-delay="180"
        >
          <a
            className="home-final-cta-primary relative inline-flex min-h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-7 text-base font-bold text-white shadow-[0_18px_42px_rgba(49,89,189,0.34)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 sm:min-h-[3.75rem] sm:w-auto sm:min-w-[19rem] sm:px-9"
            href={whatsappUrl}
            rel="noreferrer"
            target="_blank"
          >
            <span className="relative">Tirar uma ideia do papel</span>
            <span aria-hidden="true" className="relative text-lg">
              →
            </span>
          </a>

          <div className="mt-5 flex flex-col items-center gap-1.5">
            <p className="text-xs font-semibold text-slate-500">
              Ou fale comigo por e-mail
            </p>
            <EmailCopyButton
              ariaLabel={`Copiar e-mail: ${siteConfig.contact.email}`}
              className="home-final-cta-email inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-bold text-slate-700 transition-colors duration-300 hover:bg-blue-50/70 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              email={siteConfig.contact.email}
              label={siteConfig.contact.email}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
