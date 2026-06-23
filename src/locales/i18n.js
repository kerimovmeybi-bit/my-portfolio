import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from "./en.json";
import ua from "./ua.json";
i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en
            },
            ua: {
                translation: ua
            }
        },

        lng: "en", // default language
        fallbackLng: "en", // fallback language if the current language is not available

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });


export default i18n;