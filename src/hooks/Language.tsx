import React, { useEffect, useState } from 'react';
import { LanguageContext, LanguageContextType, enUS, ptBr } from '../contexts/Language';

export interface LanguageResult {
  language: LanguageContextType;
  handleLanguageChange: () => void;
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState<LanguageContextType>(ptBr);

  const handleLanguageChange = () => {
    setLanguage(language === ptBr ? enUS : ptBr);
  };

  return (
    <LanguageContext.Provider value={{ language, handleLanguageChange }}>
      {children}
    </LanguageContext.Provider>
  );
}
