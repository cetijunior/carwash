import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();
  const bullets = t("about.bullets", { returnObjects: true });

  return (
    <section
      id="about"
      className="bg-brand-navy text-white border-y border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="section-label text-brand-gold mb-3">{t("about.label")}</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.85rem] font-semibold leading-tight">
            {t("about.title")}
          </h2>
          <p className="mt-6 text-lg lg:text-xl text-white/80 leading-relaxed">
            {t("about.body")}
          </p>
          {Array.isArray(bullets) && (
            <ul className="mt-10 space-y-3 text-white/80 text-base lg:text-lg border-l-2 border-brand-gold/50 pl-6">
              {bullets.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
