import i18n from 'i18next';
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({lng: 'de', backend: { loadPath: `/locales/{{lng}}/{{ns}}.json`}, fallbackLng: 'en', debug: 'true', interpolation: {escapeValue: false,}});
    // .init({}).then();

export default i18n;
