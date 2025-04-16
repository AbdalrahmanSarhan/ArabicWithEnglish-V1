import React, { useState, Component } from 'react';
import { ArrowRight, Bell, CheckCircle, Users, Clock, Gift, ActivityIcon, HeartPulseIcon, BrainIcon, BarChart2Icon, AppleIcon, UsersIcon, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
export const WaitlistSection = () => {
  const {
    t,
    language
  } = useLanguage();
  const isRTL = language === 'ar';
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error('Please enter a valid email address');
      }
      const subject = 'New Waitlist Signup';
      const body = `New signup request from: ${email}`;
      window.location.href = `mailto:INFO@techconsultors.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setIsSubmitted(true);
      setEmail('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };
  const stats = [{
    icon: <Users className="w-5 h-5 text-primary-500" />,
    value: '2,547+',
    label: t('waitlist.stats.inQueue')
  }, {
    icon: <Star className="w-5 h-5 text-primary-500" />,
    value: '∞',
    label: t('waitlist.stats.untilLaunch')
  }, {
    icon: <Gift className="w-5 h-5 text-primary-500" />,
    value: '50%',
    label: t('waitlist.stats.earlyDiscount')
  }];
  const benefits = [t('waitlist.benefits.early'), t('waitlist.benefits.discount'), t('waitlist.benefits.features'), t('waitlist.benefits.support')];
  const features = [{
    icon: <ActivityIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
    titleKey: 'features.smartWorkout.title',
    descriptionKey: 'features.smartWorkout.description'
  }, {
    icon: <HeartPulseIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
    titleKey: 'features.health.title',
    descriptionKey: 'features.health.description'
  }, {
    icon: <AppleIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
    titleKey: 'features.nutrition.title',
    descriptionKey: 'features.nutrition.description'
  }, {
    icon: <BrainIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
    titleKey: 'features.ai.title',
    descriptionKey: 'features.ai.description'
  }, {
    icon: <UsersIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
    titleKey: 'features.community.title',
    descriptionKey: 'features.community.description'
  }, {
    icon: <BarChart2Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
    titleKey: 'features.analytics.title',
    descriptionKey: 'features.analytics.description'
  }];
  return <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/80 to-secondary-50/80 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-3xl" />
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-primary-500/10 dark:bg-primary-400/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] translate-x-1/2 translate-y-1/2 bg-secondary-500/10 dark:bg-secondary-400/5 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="container py-32 md:py-40">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-8 animate-fade-in">
              <Bell className="w-4 h-4" />
              <span className="text-sm font-medium">
                {t('waitlist.comingSoon')}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-8 animate-fade-in">
              {t('waitlist.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 animate-slide-up">
              {t('waitlist.description')}
            </p>
            <form id="waitlist-form" onSubmit={handleSubmit} className="max-w-md mx-auto mb-16 animate-slide-up">
              <div className="flex gap-4 flex-col sm:flex-row">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={t('waitlist.emailPlaceholder')} className="flex-1 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" required />
                <button type="submit" className={`btn-primary whitespace-nowrap ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`} disabled={isLoading}>
                  {isLoading ? <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span> : <>
                      {t('waitlist.joinButton')}
                      <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180 mr-2' : 'ml-2'}`} />
                    </>}
                </button>
              </div>
              {isSubmitted && <div className="mt-4 flex items-center justify-center gap-2 text-green-600 dark:text-green-400 animate-fade-in">
                  <CheckCircle className="w-5 h-5" />
                  <span>{t('waitlist.success')}</span>
                </div>}
            </form>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
              {stats.map((stat, index) => <div key={index} className="card p-6 hover-lift">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {stat.icon}
                    <span className="text-2xl font-bold gradient-text">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </p>
                </div>)}
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <div className="w-1 h-8 rounded-full bg-primary-500/20">
                <div className="w-1 h-4 rounded-full bg-primary-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white dark:bg-gray-800/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 shadow-xl">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 gradient-text text-center">
                {t('waitlist.benefitsTitle')}
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {benefits.map((benefit, index) => <div key={index} className="flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl hover-lift">
                    <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary-900/30">
                      <CheckCircle className="w-6 h-6 text-primary-500" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300 font-medium">
                      {benefit}
                    </span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-b from-white to-primary-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
              {t('features.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => <div key={index} className="card hover-lift p-6 group" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="p-3 rounded-lg bg-primary-50 dark:bg-primary-900/30 w-fit mb-4 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t(feature.descriptionKey)}
                </p>
              </div>)}
          </div>
        </div>
      </section>
      <section className="py-24 bg-primary-50 dark:bg-gray-800">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
              {t('waitlist.title')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {t('waitlist.description')}
            </p>
            <button onClick={() => {
            const form = document.querySelector('#waitlist-form');
            if (form) form.scrollIntoView({
              behavior: 'smooth'
            });
          }} className="btn-primary">
              {t('waitlist.joinButton')}
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180 mr-2' : 'ml-2'}`} />
            </button>
          </div>
        </div>
      </section>
      <footer className="py-12 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold gradient-text">FitTrack</span>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span>©</span>
                <a href="https://abdalrahman.website/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Abdalrahman Sarhan
                </a>
                <span>2025</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                {isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}
              </a>
              <a href="#terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                {isRTL ? 'شروط الاستخدام' : 'Terms of Service'}
              </a>
              <a href="#contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                {isRTL ? 'اتصل بنا' : 'Contact Us'}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>;
};
<style jsx>{`
  @keyframes float {
    0%,
    100% {
      transform: translateY(0) translateX(0);
    }
    25% {
      transform: translateY(-10px) translateX(5px);
    }
    50% {
      transform: translateY(0) translateX(10px);
    }
    75% {
      transform: translateY(10px) translateX(5px);
    }
  }
  .animate-float {
    animation: float 15s ease-in-out infinite;
  }
`}</style>;