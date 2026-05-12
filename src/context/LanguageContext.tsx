'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'EN' | 'HI';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Language>('EN');

  // Simple translation helper within context for basic needs
  // More complex content will be pulled from lib/content.ts
  const t = (key: string) => {
    return key; // Placeholder, real implementation in components
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
