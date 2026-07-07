import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, LanguageCode } from '../utils/translations';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (path: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageCode>('pt');

  useEffect(() => {
    const saved = localStorage.getItem('ribbit_lang') as LanguageCode;
    if (saved && ['pt', 'en', 'es', 'fr', 'it', 'zh', 'ko'].includes(saved)) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    localStorage.setItem('ribbit_lang', lang);
    // Dispara um evento personalizado para atualizar outros componentes que ouvem alterações
    window.dispatchEvent(new Event('languagechange'));
  };

  // Função helper para buscar caminhos de tradução aninhados (ex: "hero.title")
  const t = (path: string): any => {
    const keys = path.split('.');
    let current: any = translations[language];
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback para português caso falte alguma tradução específica
        let fallback: any = translations['pt'];
        for (const fKey of keys) {
          if (fallback && fallback[fKey] !== undefined) {
            fallback = fallback[fKey];
          } else {
            return path;
          }
        }
        return fallback;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
  }
  return context;
};
