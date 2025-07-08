import React from 'react';
import { ArrowRightIcon, BookOpen, GraduationCap, Users, Award, BarChart2, Video } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
export const HeroSection = () => {
  const {
    t,
    language
  } = useLanguage();
  const isRTL = language === 'ar';
  const features = [{
    icon: <Video className="w-6 h-6 text-primary-600" />,
    title: t('hero.videoLessons.title'),
    description: t('hero.videoLessons.description')
  }, {
    icon: <GraduationCap className="w-6 h-6 text-primary-600" />,
    title: t('hero.nativeTeachers.title'),
    description: t('hero.nativeTeachers.description')
  }, {
    icon: <BookOpen className="w-6 h-6 text-primary-600" />,
    title: t('hero.curriculum.title'),
    description: t('hero.curriculum.description')
  }, {
    icon: <Award className="w-6 h-6 text-primary-600" />,
    title: t('hero.certificates.title'),
    description: t('hero.certificates.description')
  }, {
    icon: <Users className="w-6 h-6 text-primary-600" />,
    title: t('hero.community.title'),
    description: t('hero.community.description')
  }, {
    icon: <BarChart2 className="w-6 h-6 text-primary-600" />,
    title: t('hero.progress.title'),
    description: t('hero.progress.description')
  }];
  return <div className="w-full bg-gradient-to-br from-light-100 via-light-200 to-light-300 dark:from-dark-100 dark:via-dark-200 dark:to-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="text-accent-gold-DEFAULT block mb-2">
                Arabic
              </span>
              <span className="text-black dark:text-white inline-block">
                With
              </span>{' '}
              <span className="text-primary-600 dark:text-primary-400">
                English
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <button onClick={() => {
              const form = document.querySelector('#waitlist-form');
              if (form) {
                form.scrollIntoView({
                  behavior: 'smooth'
                });
              }
            }} className="btn-primary text-base sm:text-lg px-6 py-3 rounded-xl">
                {t('waitlist.joinButton')}
                <ArrowRightIcon className={`w-5 h-5 ${isRTL ? 'rotate-180 mr-2' : 'ml-2'}`} />
              </button>
            </div>
          </div>
        </div>
        <div className="py-16 md:py-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {t('hero.whyTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => <div key={index} className="bg-white/80 dark:bg-dark-200/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/30 hover:border-primary-200 dark:hover:border-primary-700/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary-50 dark:bg-primary-900/30">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};