import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // Pour charger les traductions via HTTP
  .use(initReactI18next) // Pour intégrer i18next avec React
  .init({
    fallbackLng: 'fr', // Langue par défaut
    lng: 'fr', // Langue initiale
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Chemin pour charger les fichiers de traduction
    },
    ns: ['common'], // Namespaces par défaut
    defaultNS: 'common', // Namespace par défaut
    interpolation: {
      escapeValue: false, // React déjà gère l'échappement XSS
    },
    react: {
      useSuspense: false, // Désactive Suspense, utile pour les environnements sans support de Suspense
    },
  });

export default i18n;