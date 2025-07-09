import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
export const ThemeToggle: React.FC = () => {
  const {
    theme,
    toggleTheme
  } = useTheme();
  const {
    language
  } = useLanguage();
  const isRTL = language === 'ar';
  return <button onClick={toggleTheme} className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-300/50 rounded-full transition-colors" aria-label={theme === 'dark' ? isRTL ? 'التبديل إلى الوضع المضيء' : 'Switch to light mode' : isRTL ? 'التبديل إلى الوضع المظلم' : 'Switch to dark mode'}>
      {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>;
};