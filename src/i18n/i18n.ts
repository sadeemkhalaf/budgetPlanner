// src/localization/i18n.ts
import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {reduxStore} from '../store/storeConfigs';

const en = require('./../locales/en/translations.json');
const ar = require('./../locales/ar/translations.json');

export const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: reduxStore.getState().User.langType,
  fallbackLng: reduxStore.getState().User.langType,
  load: 'all',
  interpolation: {
    escapeValue: false,
  },
});
