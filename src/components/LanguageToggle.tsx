import React from 'react';
import { Globe2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
export const LanguageToggle: React.FC = () => {
  const {
    language,
    toggleLanguage
  } = useLanguage();
  return <button onClick={toggleLanguage} className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-300/50 rounded-full transition-colors" aria-label={language === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}>
      <Globe2 className="w-5 h-5" />
    </button>;
};