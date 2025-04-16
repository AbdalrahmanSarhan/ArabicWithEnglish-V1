import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';
export const LanguageToggle = () => {
  const {
    language,
    toggleLanguage
  } = useLanguage();
  return <button onClick={toggleLanguage} className="p-2 rounded-md text-neutral-700 dark:text-neutral-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-all flex items-center gap-1 border border-neutral-200/50 dark:border-dark-100/30 hover:border-primary-200 dark:hover:border-primary-700/50" aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}>
      <Globe className="w-4 h-4 text-primary-500 dark:text-primary-400" />
      <span className="text-sm">{language === 'en' ? 'عربي' : 'English'}</span>
    </button>;
};