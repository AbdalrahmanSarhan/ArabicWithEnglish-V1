import React from 'react';
import { Navbar } from './Navbar';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}
export const Layout = ({
  children,
  className = ''
}: LayoutProps) => {
  const {
    theme
  } = useTheme();
  const {
    language
  } = useLanguage();
  const isRTL = language === 'ar';
  return <div className={`min-h-screen ${theme === 'dark' ? 'bg-dark-200 text-white' : 'bg-light-100 text-neutral-900'} transition-colors duration-300 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Navbar />
      <main className={`${className}`}>{children}</main>
    </div>;
};