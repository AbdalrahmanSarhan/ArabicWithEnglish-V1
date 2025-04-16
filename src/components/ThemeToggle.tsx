import React from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
export const ThemeToggle = () => {
  const {
    theme,
    toggleTheme
  } = useTheme();
  return <button onClick={toggleTheme} className="p-2 rounded-md text-neutral-700 dark:text-neutral-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-all border border-neutral-200/50 dark:border-dark-100/30 hover:border-primary-200 dark:hover:border-primary-700/50" aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
      {theme === 'dark' ? <SunIcon className="w-4 h-4 text-primary-500 dark:text-primary-400" /> : <MoonIcon className="w-4 h-4 text-primary-600 dark:text-primary-500" />}
    </button>;
};