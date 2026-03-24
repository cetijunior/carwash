import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const LOCATIONS = [
  {
    mapKey: "market",
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2844.7628358219836!2d19.833083299999984!3d41.3991424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350332e65b28bc5%3A0x533bb8fd85bf8a3b!2sMarket%20Lami!5e1!3m2!1sen!2s!4v1753296944333!5m2!1sen!2s",
  },
  {
    mapKey: "carWash",
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d302.1445682876351!2d19.83272770817385!3d41.39902644749268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350330058af455d%3A0x4cdca4b0cc24e347!2sCar%20Wash%20Lami!5e1!3m2!1sen!2s!4v1753296963654!5m2!1sen!2s",
  },
];

export default function MapSection() {
  const { t } = useTranslation();

  return (
    <section id="map" className="py-20 lg:py-24 bg-brand-cream/80 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-brand-navy"
        >
          {t("map.title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-slate-600 text-lg lg:text-xl"
        >
          {t("map.subtitle")}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.14 }}
          className="mt-2 text-base text-slate-500 max-w-xl mx-auto"
        >
          {t("map.banner")}
        </motion.p>

        <div className="mt-12 grid md:grid-cols-2 gap-8 text-left">
          {LOCATIONS.map(({ mapKey, embed }, idx) => (
            <motion.div
              key={mapKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="rounded-2xl overflow-hidden border border-brand-navy/10 shadow-lg bg-white"
            >
              <div className="flex flex-wrap items-center gap-3 px-4 py-4 bg-brand-navy text-white text-base">
                <img
                  src="/KompleksiEdiLame.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className="size-10 rounded-full object-cover ring-2 ring-brand-gold/40"
                />
                <span className="font-semibold">{t(`map.${mapKey}Name`)}</span>
              </div>
              <iframe
                title={t(`map.${mapKey}Name`)}
                src={embed}
                width="100%"
                height="340"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full border-0 grayscale-[15%] contrast-[1.02]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
