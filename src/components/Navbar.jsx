"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";

const LOGO_SRC = "/KompleksiEdiLame.jpg";

const NAV_IDS = ["services", "about", "gallery", "prices", "map", "contact"];

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const barStyle =
    "text-base font-semibold tracking-wide text-white/90 hover:text-brand-gold transition-colors duration-200 focus-ring rounded-sm px-2 py-1.5";

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-300 ${
          scrolled
            ? "bg-brand-navy/95 shadow-lg shadow-black/15 backdrop-blur-md"
            : "bg-brand-navy"
        }`}
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
      >
        <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          aria-label={t("nav.primary")}
        >
          <div className="flex items-center justify-between gap-3 h-[4.25rem] lg:h-[4.75rem]">
            <button
              type="button"
              onClick={() => handleNavClick("home")}
              className="flex items-center gap-3 min-w-0 text-left focus-ring rounded-lg pr-2"
            >
              <span className="relative shrink-0 rounded-full ring-2 ring-brand-gold/40 ring-offset-2 ring-offset-brand-navy p-0.5">
                <img
                  src={LOGO_SRC}
                  alt=""
                  width={48}
                  height={48}
                  className="size-11 lg:size-[3.25rem] rounded-full object-cover"
                />
              </span>
              <span className="hidden sm:flex flex-col min-w-0">
                <span className="font-display text-xl lg:text-2xl font-semibold text-white leading-tight truncate">
                  {t("brand.line")}
                </span>
                <span className="text-xs uppercase tracking-[0.18em] text-brand-gold/90">
                  {t("brand.location")}
                </span>
              </span>
            </button>

            <div className="hidden lg:flex flex-1 items-center justify-end gap-2 xl:gap-3">
              {NAV_IDS.map((id) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => handleNavClick(id)}
                  className={barStyle}
                >
                  {t(`nav.${id}`)}
                </button>
              ))}
              <LanguageSwitcher className="ml-2 shrink-0" />
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <LanguageSwitcher />
              <button
                type="button"
                onClick={() => setMenuOpen((o) => !o)}
                className="p-2.5 rounded-lg text-white hover:bg-white/10 transition-colors focus-ring"
                aria-expanded={menuOpen}
                aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
              >
                {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-brand-navy/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 z-50 h-full w-[min(100%,22rem)] bg-brand-navy border-l border-white/10 shadow-2xl lg:hidden flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
            >
              <div className="p-5 border-b border-white/10 flex items-center gap-3">
                <img
                  src={LOGO_SRC}
                  alt=""
                  width={44}
                  height={44}
                  className="size-11 rounded-full object-cover ring-2 ring-brand-gold/35"
                />
                <div className="min-w-0">
                  <p className="font-display text-white font-semibold text-lg leading-tight truncate">
                    {t("brand.line")}
                  </p>
                  <p className="text-xs text-brand-gold uppercase tracking-widest mt-0.5">
                    {t("brand.location")}
                  </p>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                {NAV_IDS.map((id, i) => (
                  <motion.button
                    key={id}
                    type="button"
                    onClick={() => handleNavClick(id)}
                    className="w-full text-left px-4 py-3.5 rounded-lg text-white/95 text-base font-medium hover:bg-white/10 transition-colors focus-ring"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    {t(`nav.${id}`)}
                  </motion.button>
                ))}
              </div>
              <div className="p-5 border-t border-white/10 space-y-3">
                <LanguageSwitcher className="w-full justify-center" />
                <p className="text-center text-sm text-white/55">
                  {t("brand.locationFull")}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
