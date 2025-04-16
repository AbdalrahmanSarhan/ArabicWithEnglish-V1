import React from 'react';
import { ActivityIcon, AppleIcon, BarChart2Icon, BrainIcon, HeartPulseIcon, UsersIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
export const FeaturesSection = () => {
  const {
    t
  } = useLanguage();
  const features = [{
    icon: <ActivityIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    titleKey: 'features.smartWorkout.title',
    descriptionKey: 'features.smartWorkout.description'
  }, {
    icon: <HeartPulseIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    titleKey: 'features.health.title',
    descriptionKey: 'features.health.description'
  }, {
    icon: <AppleIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    titleKey: 'features.nutrition.title',
    descriptionKey: 'features.nutrition.description'
  }, {
    icon: <BrainIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    titleKey: 'features.ai.title',
    descriptionKey: 'features.ai.description'
  }, {
    icon: <UsersIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    titleKey: 'features.community.title',
    descriptionKey: 'features.community.description'
  }, {
    icon: <BarChart2Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    titleKey: 'features.analytics.title',
    descriptionKey: 'features.analytics.description'
  }];
  return <section className="py-20 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('features.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <div key={index} className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 group">
              <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/30 w-fit mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t(feature.titleKey)}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t(feature.descriptionKey)}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};