import React from 'react';
import { XIcon, Users, Bell, Home, BookOpen, Award, MessageCircle, Info, ChevronRight, GraduationCap, Headphones, BarChart2, Moon, Sun, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
export const MobileMenu = ({
  isOpen,
  onClose
}: MobileMenuProps) => {
  const {
    t,
    language,
    toggleLanguage
  } = useLanguage();
  const {
    theme,
    toggleTheme
  } = useTheme();
  const isRTL = language === 'ar';
  if (!isOpen) return null;
  const menuItems = [{
    icon: <Home className="w-5 h-5" />,
    label: 'Home',
    href: '/'
  }, {
    icon: <Info className="w-5 h-5" />,
    label: 'Privacy Policy',
    href: '/privacy'
  }, {
    icon: <BookOpen className="w-5 h-5" />,
    label: 'Terms of Service',
    href: '/terms'
  }, {
    icon: <MessageCircle className="w-5 h-5" />,
    label: 'Contact Us',
    href: '/contact'
  }];
  const benefitItems = [{
    icon: <GraduationCap className="w-4 h-4 text-primary-500 dark:text-primary-400" />,
    label: isRTL ? 'وصول مبكر' : 'Early access'
  }, {
    icon: <BarChart2 className="w-4 h-4 text-secondary-500 dark:text-secondary-400" />,
    label: isRTL ? 'خصم 50%' : '50% discount'
  }, {
    icon: <Headphones className="w-4 h-4 text-accent-coral-DEFAULT dark:text-accent-coral-light" />,
    label: isRTL ? 'دعم متميز' : 'Premium support'
  }];
  return <div className="fixed inset-0 z-50 bg-neutral-900/50 dark:bg-dark-500/70 backdrop-blur-md">
      <div className={`fixed inset-y-0 ${isRTL ? 'left-0' : 'right-0'} w-full max-w-sm ${theme === 'dark' ? 'bg-dark-200 text-white' : 'bg-white text-neutral-900'} shadow-2xl`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-neutral-200/10 dark:border-dark-100/10">
            <div className="flex items-center gap-2">
              <img src="/Logo_%2811%29.png" alt="Arabic With English Logo" className={`w-8 h-8 object-contain ${theme === 'dark' ? 'filter brightness-110' : ''}`} />
              <span className="text-xl font-bold">
                <span className="text-accent-gold-DEFAULT">Arabic</span>
                <span className="text-black dark:text-white">With</span>
                <span className="text-primary-600 dark:text-primary-400">
                  English
                </span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-light-300 dark:bg-dark-100/60 text-primary-700 dark:text-primary-400 border border-light-400 dark:border-dark-100/50">
                <Bell className="w-3.5 h-3.5 text-primary-600 dark:text-primary-400" />
                {t('waitlist.comingSoon')}
              </span>
            </div>
            <button onClick={onClose} className="p-2 text-neutral-700 dark:text-neutral-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-lg transition-colors">
              <XIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex items-center gap-2 p-4 rounded-lg bg-primary-50/80 dark:bg-primary-900/40 backdrop-blur-sm mb-6 border border-primary-200/50 dark:border-primary-700/40 shadow-sm">
              <Users className="w-5 h-5 text-primary-500 dark:text-primary-400" />
              <span className="font-medium text-neutral-800 dark:text-white">
                547+ {t('waitlist.stats.inQueue')}
              </span>
            </div>
            <nav className="space-y-1 mb-8">
              {menuItems.map((item, index) => <Link key={index} to={item.href} className="flex items-center justify-between p-3 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/30 text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors" onClick={onClose}>
                  <div className="flex items-center gap-3">
                    <span className="text-primary-500 dark:text-primary-400">
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-neutral-400 dark:text-neutral-500 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>)}
            </nav>
            <div className="mt-6 space-y-4">
              <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800/30">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary-500 dark:text-primary-400" />
                  <span className="text-neutral-700 dark:text-neutral-300">
                    {t('settings.language')}
                  </span>
                </div>
                <button onClick={toggleLanguage} className="px-3 py-1 rounded-md bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  {language === 'en' ? 'العربية' : 'English'}
                </button>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800/30">
                <div className="flex items-center gap-3">
                  {theme === 'dark' ? <Moon className="w-5 h-5 text-primary-500 dark:text-primary-400" /> : <Sun className="w-5 h-5 text-primary-500 dark:text-primary-400" />}
                  <span className="text-neutral-700 dark:text-neutral-300">
                    {t('settings.theme')}
                  </span>
                </div>
                <button onClick={toggleTheme} className="px-3 py-1 rounded-md bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  {theme === 'dark' ? t('settings.light') : t('settings.dark')}
                </button>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                {t('waitlist.benefitsTitle')}
              </h3>
              <div className="bg-white/70 dark:bg-dark-300/50 backdrop-blur-md rounded-xl p-4 border border-neutral-200/50 dark:border-dark-100/30">
                <ul className="space-y-4">
                  {benefitItems.map((item, index) => <li key={index} className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                      <div className="p-2 rounded-lg bg-primary-50/80 dark:bg-primary-900/30">
                        {item.icon}
                      </div>
                      <span>{item.label}</span>
                    </li>)}
                </ul>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-neutral-200/10 dark:border-dark-100/10">
            <button onClick={() => {
            onClose();
            const form = document.querySelector('#waitlist-form');
            if (form) {
              form.scrollIntoView({
                behavior: 'smooth'
              });
            }
          }} className="group relative w-full bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 text-white font-medium py-3 rounded-xl transition-all duration-300 shadow-lg shadow-primary-500/20 dark:shadow-primary-500/10 hover:shadow-xl hover:shadow-primary-500/30 overflow-hidden">
              <span className="relative z-10">{t('waitlist.joinButton')}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 dark:from-primary-500 dark:to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
            </button>
          </div>
        </div>
      </div>
    </div>;
};