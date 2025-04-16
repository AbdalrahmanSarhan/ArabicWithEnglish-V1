import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { useLocation } from 'react-router-dom';
interface PageLayoutProps {
  children: React.ReactNode;
  hideFooter?: boolean;
  hideHeader?: boolean;
}
export const PageLayout = ({
  children,
  hideFooter = false,
  hideHeader = false
}: PageLayoutProps) => {
  const location = useLocation();
  const isAdminPage = location.pathname === '/admin';
  return <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-light-100 via-light-200 to-light-300 dark:from-dark-100 dark:via-dark-200 dark:to-dark-300 overflow-x-hidden">
      {!hideHeader && !isAdminPage && <Header />}
      <main className={`flex-1 w-full flex flex-col overflow-x-hidden ${isAdminPage ? '' : 'pt-16 md:pt-20'}`}>
        {children}
      </main>
      {!hideFooter && !isAdminPage && <Footer />}
    </div>;
};