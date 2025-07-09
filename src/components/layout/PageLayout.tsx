import React from 'react';
import { Navbar } from '../Navbar';
import { useLanguage } from '../../contexts/LanguageContext';
export const PageLayout: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const {
    language
  } = useLanguage();
  const isRTL = language === 'ar';
  return <div dir={isRTL ? 'rtl' : 'ltr'} className="min-h-screen">
      <Navbar />
      <main className="pt-16 md:pt-20">{children}</main>
    </div>;
};