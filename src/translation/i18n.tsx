import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import englishTranslation from './locales/en/translation.json';
import portugueseTranslations from './locales/pt/translation.json';

i18n
  .use(initReactI18next) // Pasa a instância i18n para react-i18next
  .init({
    compatibilityJSON: 'v4', // Necessário para Android
    resources: {
      pt: {
        translation: portugueseTranslations,
      },
      en: {
        translation: englishTranslation,
      }
    },
    lng: 'pt', // Idioma padrão
    fallbackLng: 'pt', // Idioma de fallback se o idioma desejado não estiver disponível
    interpolation: {
      escapeValue: false, // React Native não precisa de escape para o HTML
    },
  });

export default i18n;