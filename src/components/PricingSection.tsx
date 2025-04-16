import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
export const PricingSection = () => {
  const {
    t,
    language
  } = useLanguage();
  const [isAnnual, setIsAnnual] = useState(true);
  const isRTL = language === 'ar';
  const plans = [{
    name: t('pricing.free.name'),
    price: {
      monthly: 0,
      annual: 0
    },
    description: t('pricing.free.description'),
    features: [t('pricing.free.features.tracking'), t('pricing.free.features.basic'), t('pricing.free.features.community')],
    button: t('pricing.free.button'),
    isPopular: false
  }, {
    name: t('pricing.pro.name'),
    price: {
      monthly: 9.99,
      annual: 99.99
    },
    description: t('pricing.pro.description'),
    features: [t('pricing.pro.features.all'), t('pricing.pro.features.advanced'), t('pricing.pro.features.nutrition'), t('pricing.pro.features.coaching'), t('pricing.pro.features.analytics')],
    button: t('pricing.pro.button'),
    isPopular: true
  }, {
    name: t('pricing.enterprise.name'),
    price: {
      monthly: 29.99,
      annual: 299.99
    },
    description: t('pricing.enterprise.description'),
    features: [t('pricing.enterprise.features.all'), t('pricing.enterprise.features.custom'), t('pricing.enterprise.features.priority'), t('pricing.enterprise.features.api'), t('pricing.enterprise.features.dedicated')],
    button: t('pricing.enterprise.button'),
    isPopular: false
  }];
  return <section className="py-20 bg-white dark:bg-gray-800" id="pricing">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            {t('pricing.subtitle')}
          </p>
          <div className="flex items-center justify-center gap-4">
            <span className={`text-gray-600 dark:text-gray-300 ${isAnnual ? 'opacity-60' : ''}`}>
              {t('pricing.monthly')}
            </span>
            <button onClick={() => setIsAnnual(!isAnnual)} className={`relative w-16 h-8 rounded-full transition-colors ${isAnnual ? 'bg-blue-600' : 'bg-gray-400'}`}>
              <span className={`absolute top-1 ${isRTL ? isAnnual ? 'right-1' : 'left-1' : isAnnual ? 'left-1' : 'right-1'} w-6 h-6 rounded-full bg-white transition-all transform`} />
            </button>
            <span className={`text-gray-600 dark:text-gray-300 ${!isAnnual ? 'opacity-60' : ''}`}>
              {t('pricing.annual')}
              <span className="ms-2 text-sm text-green-500">
                {t('pricing.save')}
              </span>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => <div key={index} className={`relative rounded-2xl p-8 ${plan.isPopular ? 'border-2 border-blue-500 dark:border-blue-400' : 'border border-gray-200 dark:border-gray-700'}`}>
              {plan.isPopular && <span className="absolute -top-4 start-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-white text-sm rounded-full">
                  {t('pricing.popular')}
                </span>}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {plan.description}
                </p>
                <div className="text-4xl font-bold text-gray-900 dark:text-white">
                  ${isAnnual ? plan.price.annual : plan.price.monthly}
                  <span className="text-base font-normal text-gray-600 dark:text-gray-400">
                    {isAnnual ? t('pricing.perYear') : t('pricing.perMonth')}
                  </span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>)}
              </ul>
              <button className={`w-full py-3 px-6 rounded-lg transition-colors ${plan.isPopular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white'}`}>
                {plan.button}
              </button>
            </div>)}
        </div>
      </div>
    </section>;
};