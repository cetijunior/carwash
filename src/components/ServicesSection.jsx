import { useTranslation } from "react-i18next";
import { FaShoppingCart, FaShower, FaParking } from "react-icons/fa";

export default function ServicesSection() {
  const { t } = useTranslation();
  const items = t("services.items", { returnObjects: true });
  const icons = [FaShoppingCart, FaShower, FaParking];
  const images = [
    { default: "/images/Store1.jpg", hover: "/images/StoreInside.jpg" },
    { default: "/images/Carwash.jpg", hover: "/images/CarwashInside.jpg" },
    { default: "/images/Parking.jpg", hover: "/images/Parking.jpg" },
  ];

  if (!Array.isArray(items)) return null;

  return (
    <section id="services" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-brand-cream/80">
      <div className="max-w-7xl mx-auto">
        <header className="text-center max-w-2xl mx-auto mb-14 lg:mb-16">
          <p className="section-label mb-3">{t("services.label")}</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-brand-navy">
            {t("services.title")}
          </h2>
          <p className="mt-4 text-slate-600 text-lg lg:text-xl leading-relaxed">
            {t("services.intro")}
          </p>
        </header>

        <div className="grid gap-8 lg:gap-10 lg:grid-cols-3">
          {items.map((item, index) => {
            const Icon = icons[index];
            const image = images[index];
            return (
              <article
                key={item.title}
                className="group flex flex-col bg-white rounded-2xl border border-brand-navy/10 shadow-sm overflow-hidden hover:shadow-lg hover:border-brand-gold/30 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-brand-navy/5">
                  <img
                    src={image?.default}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03] group-hover:opacity-0"
                  />
                  {image?.hover ? (
                    <img
                      src={image.hover}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-[1.03]"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                    <span className="inline-flex items-center justify-center size-12 rounded-full bg-white/95 text-brand-navy shadow-md">
                      {Icon && <Icon className="text-xl" aria-hidden />}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/95 bg-brand-navy/80 px-3 py-1.5 rounded-full backdrop-blur-sm">
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6 lg:p-8 flex flex-col flex-1">
                  <h3 className="font-display text-2xl lg:text-[1.65rem] font-semibold text-brand-navy">
                    {item.title}
                  </h3>
                  {item.subtitle ? (
                    <p className="mt-1 text-sm font-medium text-brand-gold-dark">{item.subtitle}</p>
                  ) : null}
                  <p className="mt-3 text-slate-600 text-base leading-relaxed flex-1">{item.desc}</p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex text-base font-semibold text-brand-gold-dark hover:text-brand-navy transition-colors focus-ring rounded"
                  >
                    {t("services.enquire")}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
