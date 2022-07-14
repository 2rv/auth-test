import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ua',
    whitelist:['ua','en'],
    debug: false,
    detection:{
        order:["localStorage","cookie"],
        caches:["localStorage","cookie"],
    },
    interpolation: {
      escapeValue: false, 
    }
  });


export default i18n;