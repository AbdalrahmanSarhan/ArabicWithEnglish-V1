import React, { useEffect, useState } from 'react';
import { BellIcon, Users } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
export const Navbar = () => {
  const {
    t
  } = useLanguage();
  const {
    theme
  } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <>
      <nav className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${isScrolled ? theme === 'dark' ? 'bg-dark-200/90 backdrop-blur-md border-b border-dark-100/20' : 'bg-white/90 backdrop-blur-md border-b border-primary-100/30' : ''}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 w-full">
          <div className="flex items-center justify-between h-full w-full">
            <div className="flex items-center gap-2 sm:gap-3">
              <a href="/" className="flex items-center">
                <span className="text-base sm:text-lg md:text-xl font-bold">
                  <span className="text-accent-gold-DEFAULT">Arabic</span>
                  <span className="text-black dark:text-white">With</span>
                  <span className="text-primary-600 dark:text-primary-400">
                    English
                  </span>
                </span>
              </a>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium bg-light-300 dark:bg-dark-100 text-primary-700 dark:text-primary-400 border border-light-400 dark:border-dark-100/50">
                <BellIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary-600 dark:text-primary-400" />
                {t('waitlist.comingSoon')}
              </span>
            </div>
            <div className="hidden md:flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-primary-50/80 dark:bg-primary-900/30 border border-primary-200/50 dark:border-primary-700/30 backdrop-blur-sm">
              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-500 dark:text-primary-400" />
              <span className="text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300">
                547+ {t('waitlist.stats.inQueue')}
              </span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
              <ThemeToggle />
              <LanguageToggle />
              <button onClick={() => {
              const form = document.querySelector('#waitlist-form');
              if (form) {
                form.scrollIntoView({
                  behavior: 'smooth'
                });
              }
            }} className="hidden md:inline-flex group relative bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 text-white font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg transition-all duration-300 shadow-md shadow-primary-500/10 dark:shadow-primary-500/5 hover:shadow-lg hover:shadow-primary-500/20 overflow-hidden text-xs sm:text-sm">
                <span className="relative z-10">
                  {t('waitlist.joinButton')}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 dark:from-primary-500 dark:to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
              </button>
              
            </div>
          </div>
        </div>
      </nav>
      {isMobileMenuOpen && <div className="fixed inset-0 z-50 bg-black/50 dark:bg-black/70" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="fixed top-0 right-0 w-3/4 h-full bg-white dark:bg-dark-200 shadow-xl p-4" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-bold">
                <span className="text-accent-gold-DEFAULT">Arabic</span>
                <span className="text-black dark:text-white">With</span>
                <span className="text-primary-600 dark:text-primary-400">
                  English
                </span>
              </span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <button onClick={() => {
            setIsMobileMenuOpen(false);
            const form = document.querySelector('#waitlist-form');
            if (form) {
              form.scrollIntoView({
                behavior: 'smooth'
              });
            }
          }} className="w-full py-2 bg-primary-600 text-white rounded-lg font-medium">
                {t('waitlist.joinButton')}
              </button>
            </div>
          </div>
        </div>}
    </>;
};