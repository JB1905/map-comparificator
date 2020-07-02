import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-xhr-backend';

i18n
  .use(XHR)
  .use(initReactI18next)
  .init({
    debug: true,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/translations/en.json`,
      allowMultiLoading: true,
    },
    react: {
      wait: true,
      useSuspense: true,
    },
  });

export default i18n;
