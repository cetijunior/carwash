"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const LOGO_SRC = "/KompleksiEdiLame.jpg";

export default function HeroSection() {
  const { t } = useTranslation();
  const highlights = t("hero.highlights", { returnObjects: true });

  return (
    <section
      id="home"
      className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
      >
        <div className="absolute -top-32 right-[-10%] w-[min(520px,90vw)] h-[min(520px,90vw)] rounded-full bg-brand-navy/[0.07] blur-3xl" />
        <div className="absolute bottom-0 left-[-15%] w-[min(400px,80vw)] h-[min(400px,80vw)] rounded-full bg-brand-gold/[0.08] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_min(340px,100%)] gap-14 lg:gap-16 items-center">
          <div>
            <motion.p
              className="section-label mb-4"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t("brand.locationFull")}
            </motion.p>
            <motion.h1
              className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-semibold text-brand-navy tracking-tight leading-[1.12]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
            >
              <span className="block text-brand-navy-muted/90 text-2xl sm:text-3xl lg:text-4xl font-medium mb-2">
                {t("hero.kompleksi")}
              </span>
              <span className="block">{t("hero.name")}</span>
            </motion.h1>
            <motion.p
              className="mt-6 text-lg sm:text-xl lg:text-[1.35rem] text-slate-600 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
            >
              {t("hero.lead")}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-brand-navy text-white font-semibold text-base shadow-md hover:bg-brand-navy-muted transition-colors focus-ring"
              >
                {t("hero.ctaServices")}
              </a>
              <a
                href="https://wa.me/355696939405"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-brand-navy text-brand-navy font-semibold text-base hover:bg-brand-navy/5 transition-colors focus-ring"
              >
                <FaWhatsapp className="text-xl text-[#25D366]" aria-hidden />
                {t("hero.ctaWhatsapp")}
              </a>
            </motion.div>

            <motion.div
              className="mt-12 text-base text-slate-500 max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2">
                <FaMapMarkerAlt className="text-brand-gold shrink-0" aria-hidden />
                {t("brand.location")}
              </span>
              <span className="mx-2 hidden sm:inline text-slate-300" aria-hidden>
                ·
              </span>
              <span className="block sm:inline mt-1 sm:mt-0">{t("hero.tagline")}</span>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="relative w-full max-w-[320px]">
              <div
                className="absolute inset-[-8%] rounded-full bg-gradient-to-br from-brand-gold/20 to-brand-navy/10 blur-2xl"
                aria-hidden
              />
              <div className="relative glass rounded-3xl p-8 lg:p-10 flex flex-col items-center text-center border border-brand-navy/10">
                <div className="rounded-full p-1 ring-2 ring-brand-gold/45 ring-offset-4 ring-offset-white">
                  <img
                    src={LOGO_SRC}
                    alt={t("hero.logoAlt")}
                    width={200}
                    height={200}
                    className="w-44 h-44 sm:w-52 sm:h-52 rounded-full object-cover"
                  />
                </div>
                <p className="mt-8 font-display text-2xl lg:text-[1.75rem] font-semibold text-brand-navy">
                  {t("brand.line")}
                </p>
                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-brand-gold-dark">
                  {t("brand.location")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-20 grid sm:grid-cols-3 gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28 }}
        >
          {Array.isArray(highlights) &&
            highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-2xl border border-brand-navy/10 bg-white/90 px-6 py-7 shadow-sm hover:shadow-md hover:border-brand-gold/25 transition-all duration-300"
              >
                <h2 className="font-display text-xl lg:text-2xl font-semibold text-brand-navy">
                  {h.title}
                </h2>
                <p className="mt-3 text-slate-600 text-base leading-relaxed">{h.text}</p>
              </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
