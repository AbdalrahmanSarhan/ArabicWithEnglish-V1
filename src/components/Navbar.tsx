import React, { useEffect, useState } from 'react';
import { BellIcon, Users, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { MobileMenu } from './MobileMenu';
export const Navbar = () => {
  const {
    t,
    language
  } = useLanguage();
  const {
    theme
  } = useTheme();
  const isRTL = language === 'ar';
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
      <nav className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ${isScrolled ? theme === 'dark' ? 'bg-dark-200/90 backdrop-blur-md border-b border-dark-100/20 shadow-md' : 'bg-white/90 backdrop-blur-md border-b border-primary-100/30 shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 w-full">
          <div className="flex items-center justify-between h-full w-full">
            <div className="flex items-center gap-2 sm:gap-3">
              <a href="/" className="flex items-center gap-2">
                <img src="/Logo_%2811%29.png" alt="Arabic With English Logo" className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${theme === 'dark' ? 'filter brightness-110' : ''}`} />
                <span className="text-base sm:text-lg md:text-xl font-bold">
                  <span className="text-accent-gold-DEFAULT">Arabic</span>
                  <span className="text-black dark:text-white">With</span>
                  <span className="text-primary-600 dark:text-primary-400">
                    English
                  </span>
                </span>
              </a>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium bg-light-300 dark:bg-dark-100/60 text-primary-700 dark:text-primary-400 border border-light-400 dark:border-dark-100/50 shadow-sm">
                <BellIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary-600 dark:text-primary-400" />
                {isRTL ? 'قريباً' : 'Coming Soon'}
              </span>
            </div>
            <div className="hidden md:flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-primary-50/80 dark:bg-primary-900/40 border border-primary-200/50 dark:border-primary-700/40 backdrop-blur-sm shadow-sm">
              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-500 dark:text-primary-400" />
              <span className="text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300">
                547+ {isRTL ? 'شخص في قائمة الانتظار' : 'People in Queue'}
              </span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
              <ThemeToggle />
              <LanguageToggle />
              {/* Mobile menu button */}
              <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-300/50 rounded-lg transition-colors" aria-label={isRTL ? 'فتح القائمة' : 'Open menu'}>
                <Menu className="w-6 h-6" />
              </button>
              <button onClick={() => {
              const form = document.querySelector('#waitlist-form');
              if (form) {
                form.scrollIntoView({
                  behavior: 'smooth'
                });
              }
            }} className="hidden md:inline-flex group relative bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 text-white font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg transition-all duration-300 shadow-md shadow-primary-500/10 dark:shadow-primary-500/5 hover:shadow-lg hover:shadow-primary-500/20 overflow-hidden text-xs sm:text-sm">
                <span className="relative z-10">
                  {isRTL ? 'انضم إلى قائمة الانتظار' : 'Join Waitlist'}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 dark:from-primary-500 dark:to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>;
};