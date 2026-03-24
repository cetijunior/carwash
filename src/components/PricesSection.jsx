import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function PricesSection() {
  const { t } = useTranslation();

  const washRows = [
    { key: "quickRinse", eur: "€2", lek: "200" },
    { key: "exterior", eur: "€4", lek: "400" },
    { key: "inOut", eur: "€6", lek: "600" },
    { key: "fullDetail", eur: "€20", lek: "2000" },
  ];

  const parkingRows = [
    { key: "hours1to3", eur: "€2", lek: "200" },
    { key: "hours4to6", eur: "€5", lek: "500" },
    { key: "hours24", eur: "€10", lek: "1000" },
    { key: "whileShopping", eur: null, lek: null, free: true },
  ];

  return (
    <section
      id="prices"
      className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-brand-navy/8"
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="section-label mb-3">{t("prices.label")}</p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-brand-navy">
          {t("prices.title")}
        </h2>
        <p className="mt-4 text-slate-600 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
          {t("prices.intro")}
        </p>

        <div className="mt-14 grid lg:grid-cols-3 gap-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-brand-navy/10 bg-brand-paper p-8 shadow-sm hover:border-brand-gold/35 transition-colors"
          >
            <h3 className="font-display text-xl lg:text-2xl font-semibold text-brand-navy mb-2">
              {t("prices.marketTitle")}
            </h3>
            <p className="text-slate-600 text-base leading-relaxed">{t("prices.marketIntro")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="rounded-2xl border border-brand-navy/10 bg-brand-paper p-8 shadow-sm hover:border-brand-gold/35 transition-colors lg:border-t-4 lg:border-t-brand-navy"
          >
            <h3 className="font-display text-xl lg:text-2xl font-semibold text-brand-navy mb-6">
              {t("prices.carWashTitle")}
            </h3>
            <ul className="space-y-4 text-slate-700 text-base">
              {washRows.map(({ key, eur, lek }) => (
                <li key={key} className="flex justify-between gap-4 border-b border-brand-navy/10 pb-3 last:border-0 last:pb-0">
                  <span className="font-medium">{t(`prices.lines.${key}`)}</span>
                  <span className="text-lg font-bold text-brand-navy tabular-nums shrink-0">
                    {t("prices.lines.eurLek", { eur, lek })}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="rounded-2xl border border-brand-navy/10 bg-brand-paper p-8 shadow-sm hover:border-brand-gold/35 transition-colors lg:border-t-4 lg:border-t-brand-gold"
          >
            <h3 className="font-display text-xl lg:text-2xl font-semibold text-brand-navy mb-6">
              {t("prices.parkingTitle")}
            </h3>
            <ul className="space-y-4 text-slate-700 text-base">
              {parkingRows.map((row) => (
                <li
                  key={row.key}
                  className="flex justify-between gap-4 border-b border-brand-navy/10 pb-3 last:border-0 last:pb-0"
                >
                  <span className="font-medium">{t(`prices.lines.${row.key}`)}</span>
                  <span className="text-lg font-bold tabular-nums shrink-0">
                    {row.free ? (
                      <span className="text-brand-gold-dark">{t("prices.lines.free")}</span>
                    ) : (
                      <span className="text-brand-navy">
                        {t("prices.lines.eurLek", { eur: row.eur, lek: row.lek })}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate-600 leading-relaxed border-t border-brand-navy/10 pt-5">
              {t("prices.lines.parkingNote")}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 rounded-2xl border border-brand-gold/40 bg-brand-cream/90 p-8 max-w-2xl mx-auto text-left"
        >
          <p className="font-display text-lg font-semibold text-brand-navy mb-3">
            {t("prices.cashTitle")}
          </p>
          <p className="text-slate-700 text-base leading-relaxed">{t("prices.cashBody")}</p>
          <p className="mt-4 text-base font-semibold text-red-800 leading-relaxed">
            {t("prices.cashNoCards")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
