import { createI18n } from 'vue-i18n';

// Importamos los archivos JSON con las traducciones
import es from './locales/es.json';
import en from './locales/en.json';
import fr from './locales/fr.json';

const i18n = createI18n({
  legacy: false, // Para usar Composition API
  locale: localStorage.getItem('lang') || 'es', // Guardamos el idioma seleccionado
  fallbackLocale: 'es', // Idioma por defecto si no encuentra el seleccionado
  messages: {
    es,
    en,
    fr
  }
});

export default i18n;
