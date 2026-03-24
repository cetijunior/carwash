import { useTranslation } from "react-i18next";

export default function FooterSection() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const links = [
    { href: "#home", key: "footer.home" },
    { href: "#services", key: "nav.services" },
    { href: "#about", key: "nav.about" },
    { href: "#gallery", key: "nav.gallery" },
    { href: "#prices", key: "nav.prices" },
    { href: "#map", key: "nav.map" },
    { href: "#contact", key: "nav.contact" },
  ];

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-10 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/KompleksiEdiLame.jpg"
              alt=""
              width={48}
              height={48}
              className="size-12 rounded-full object-cover ring-2 ring-brand-gold/40"
            />
            <div>
              <p className="font-display text-xl font-semibold leading-tight">{t("brand.line")}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-brand-gold/90 mt-0.5">
                {t("brand.location")}
              </p>
            </div>
          </div>
          <p className="text-white/70 text-base leading-relaxed">{t("footer.tagline")}</p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold mb-4">
            {t("footer.navTitle")}
          </h3>
          <ul className="space-y-2.5 text-base text-white/80">
            {links.map(({ href, key }) => (
              <li key={href}>
                <a href={href} className="hover:text-white transition-colors focus-ring rounded">
                  {t(key)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold mb-4">
            {t("footer.visitTitle")}
          </h3>
          <ul className="space-y-2.5 text-base text-white/80">
            <li>{t("brand.locationFull")}</li>
            <li>
              <a
                href="https://wa.me/355696939405"
                className="hover:text-white transition-colors focus-ring rounded"
              >
                +355 69 693 9405
              </a>
            </li>
            <li className="text-white/60">{t("footer.hours")}</li>
          </ul>
        </div>
      </div>

      <hr className="my-10 border-white/10 max-w-6xl mx-auto" />

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-center text-base text-white/45">
        <span>
          {t("footer.rights", { year, brand: t("brand.line") })}
        </span>
        <a
          href="https://ca-webservices.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-brand-gold/90 hover:text-brand-gold transition-colors focus-ring rounded"
        >
          <img
            src="/CALogo.png"
            alt={t("footer.caAlt")}
            className="size-10 object-contain opacity-90"
          />
          <span>{t("footer.credit")}</span>
        </a>
      </div>
    </footer>
  );
}
