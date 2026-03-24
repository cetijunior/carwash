import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import sq from "../locales/sq.json";

const STORAGE_KEY = "edi-lame-lang";

function getInitialLanguage() {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "sq" || stored === "en") return stored;
  return "en";
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    sq: { translation: sq },
  },
  lng: getInitialLanguage(),
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

function applyDocumentLang(lng) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = lng === "sq" ? "sq" : "en";
}

applyDocumentLang(i18n.language);

i18n.on("languageChanged", (lng) => {
  applyDocumentLang(lng);
});

export function persistLanguage(lng) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, lng);
  }
}

export default i18n;
