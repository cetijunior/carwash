import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <p className="section-label mb-3">{t("contact.label")}</p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-brand-navy">
          {t("contact.title")}
        </h2>
        <div className="mx-auto mt-5 h-px w-16 bg-brand-gold/80" />
        <p className="mt-6 text-slate-600 text-lg lg:text-xl leading-relaxed">
          {t("contact.body")}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+355696939405"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-brand-navy text-white font-semibold text-base hover:bg-brand-navy-muted transition-colors focus-ring shadow-md"
          >
            {t("contact.call")}
          </a>
          <a
            href="https://wa.me/355696939405"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-brand-navy text-brand-navy font-semibold text-base hover:bg-brand-navy/5 transition-colors focus-ring"
          >
            {t("contact.whatsapp")}
          </a>
        </div>

        <p className="mt-10 text-base text-slate-500">{t("contact.note")}</p>
      </div>
    </section>
  );
}
