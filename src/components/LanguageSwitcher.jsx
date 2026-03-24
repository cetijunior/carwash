import { useTranslation } from "react-i18next";
import { persistLanguage } from "../i18n/config";

export default function LanguageSwitcher({ className = "" }) {
  const { i18n, t } = useTranslation();
  const resolved = i18n.resolvedLanguage || i18n.language || "en";
  const lng = resolved.startsWith("sq") ? "sq" : "en";

  const set = (code) => {
    void i18n.changeLanguage(code);
    persistLanguage(code);
  };

  return (
    <div
      className={`flex items-center gap-1 rounded-lg bg-white/10 p-1 border border-white/15 ${className}`}
      role="group"
      aria-label={t("lang.switch")}
    >
      <button
        type="button"
        onClick={() => set("en")}
        className={`px-2.5 py-1 rounded-md text-sm font-semibold transition-colors focus-ring ${
          lng === "en"
            ? "bg-white text-brand-navy"
            : "text-white/85 hover:text-white hover:bg-white/10"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => set("sq")}
        className={`px-2.5 py-1 rounded-md text-sm font-semibold transition-colors focus-ring ${
          lng === "sq"
            ? "bg-white text-brand-navy"
            : "text-white/85 hover:text-white hover:bg-white/10"
        }`}
      >
        SQ
      </button>
    </div>
  );
}
