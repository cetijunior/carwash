import { useMemo, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import { FaSearchPlus } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import RotatingText from "./RotatingText";

const CAT_ORDER = ["market", "carWash", "parking"];

const GALLERY_IMAGES = [
  { src: "/images/Store1.jpg", catKey: "market" },
  { src: "/images/StoreInside.jpg", catKey: "market" },
  { src: "/images/Store.jpg", catKey: "market" },
  { src: "/images/Carwash.jpg", catKey: "carWash" },
  { src: "/images/Carwash(2).jpg", catKey: "carWash" },
  { src: "/images/CarwashInside.jpg", catKey: "carWash" },
  { src: "/images/Parking.jpg", catKey: "parking" },
  { src: "/images/Entrance.jpg", catKey: "parking" },
];

export default function GallerySection() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const rotating = t("gallery.rotating", { returnObjects: true });
  const rotatingTexts = Array.isArray(rotating) ? rotating : [];

  const slides = useMemo(
    () => GALLERY_IMAGES.map((img) => ({ src: img.src })),
    []
  );

  return (
    <section id="gallery" className="py-20 lg:py-24 bg-brand-paper px-4 sm:px-6 lg:px-8 border-t border-brand-navy/8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-brand-navy text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t("gallery.title")}
        </motion.h2>
        <p className="text-center text-slate-600 mt-3 max-w-xl mx-auto text-lg lg:text-xl leading-relaxed">
          {t("gallery.intro")}
        </p>
        <h3 className="text-center mt-6 text-base lg:text-lg text-slate-500 font-normal flex flex-wrap items-center justify-center gap-2">
          <span>{t("gallery.explore")}</span>
          {rotatingTexts.length > 0 && (
            <RotatingText
              texts={rotatingTexts}
              transition={{ type: "spring", damping: 22, stiffness: 320 }}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              rotationInterval={2400}
              staggerDuration={0.02}
              staggerFrom="center"
              mainClassName="inline-block font-semibold text-brand-gold-dark"
              elementLevelClassName="text-brand-gold-dark"
              splitBy="characters"
            />
          )}
        </h3>

        {CAT_ORDER.map((catKey, catIndex) => {
          const filtered = GALLERY_IMAGES.filter((img) => img.catKey === catKey);
          const categoryLabel = t(`gallery.categories.${catKey}`);
          return (
            <div key={catKey} className="mt-14 first:mt-12">
              <motion.h3
                className="font-display text-xl lg:text-2xl font-semibold text-brand-navy mb-6"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: catIndex * 0.06 }}
                viewport={{ once: true }}
              >
                {categoryLabel}
              </motion.h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {filtered.map((img) => {
                  const overallIndex = GALLERY_IMAGES.findIndex((g) => g.src === img.src);
                  const alt = t("gallery.imageAlt", { category: categoryLabel });
                  return (
                    <motion.div
                      key={img.src}
                      className="relative group overflow-hidden rounded-xl border border-brand-navy/10 shadow-sm bg-white"
                      initial={{ opacity: 0, scale: 0.98 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35 }}
                      viewport={{ once: true }}
                    >
                      <button
                        type="button"
                        className="block w-full text-left focus-ring rounded-xl"
                        onClick={() => {
                          setSelectedIndex(overallIndex);
                          setOpen(true);
                        }}
                      >
                        <img
                          src={img.src}
                          alt={alt}
                          className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-[1.04]"
                        />
                        <span className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/35 transition-colors flex items-center justify-center pointer-events-none">
                          <FaSearchPlus
                            className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity scale-90 group-hover:scale-100"
                            aria-hidden
                          />
                        </span>
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })}

        <Lightbox open={open} close={() => setOpen(false)} index={selectedIndex} slides={slides} />
      </div>
    </section>
  );
}
