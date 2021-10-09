import i18n from 'i18next';
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import de from './locales/de/translation.json';
import en from './locales/en/translation.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // lng: 'de',
        resources: {
            de: {
              translation: de,
            },
            en: {
              translation: en,
            }
        },
        fallbackLng: 'en',
        debug: process.env.NODE_ENV === "development",
        interpolation: {
            escapeValue: false,
        }
    });
    // .init({}).then();

export default i18n;
