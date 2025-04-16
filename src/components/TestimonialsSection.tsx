import React, { useRef } from 'react';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
export const TestimonialsSection = () => {
  const {
    t,
    language
  } = useLanguage();
  const isRTL = language === 'ar';
  const scrollRef = useRef<HTMLDivElement>(null);
  const testimonials = [{
    name: isRTL ? 'سارة جونسون' : 'Sarah Johnson',
    role: isRTL ? 'متحمسة للياقة البدنية' : 'Fitness Enthusiast',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
    quote: isRTL ? 'لقد غير FitTrack رحلتي الرياضية تماماً. ساعدتني خطط التمرين المخصصة وتتبع التغذية على تحقيق نتائج لم أكن أعتقد أنها ممكنة.' : 'FitTrack has completely transformed my fitness journey. The personalized workout plans and nutrition tracking have helped me achieve results I never thought possible.',
    achievement: isRTL ? 'فقدت 9 كيلوجرام في 3 أشهر' : 'Lost 20 lbs in 3 months',
    rating: 5,
    platform: 'App Store',
    verified: true
  }, {
    name: isRTL ? 'مايكل تشن' : 'Michael Chen',
    role: isRTL ? 'عداء ماراثون' : 'Marathon Runner',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
    quote: isRTL ? 'كعداء ماراثون، التتبع التفص��لي أمر بالغ الأهمية. يوفر FitTrack جميع المقاييس التي أحتاجها لتحسين تدريبي وتعافيي.' : 'As a marathon runner, detailed tracking is crucial. FitTrack provides all the metrics I need to optimize my training and recovery.',
    achievement: isRTL ? 'تحسن وقت الماراثون بمقدار 15 دقيقة' : 'Improved marathon time by 15 minutes',
    rating: 5,
    platform: 'Google Play',
    verified: true
  }, {
    name: isRTL ? 'إيما رودريغيز' : 'Emma Rodriguez',
    role: isRTL ? 'مدربة يوجا' : 'Yoga Instructor',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
    quote: isRTL ? 'مرونة التطبيق في إنشاء تمارين مخصصة كانت رائعة. يمكنني بسهولة تتبع ممارسة اليوجا ومراقبة تقدم طلابي.' : "The app's flexibility in creating custom workouts has been fantastic. I can easily track my yoga practice and monitor my students' progress.",
    achievement: isRTL ? 'بناء مجتمع يضم +500 عضو' : 'Built a community of 500+ members',
    rating: 5,
    platform: 'App Store',
    verified: true
  }, {
    name: isRTL ? 'جيمس ويلسون' : 'James Wilson',
    role: isRTL ? 'مدرب شخصي' : 'Personal Trainer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80',
    quote: isRTL ? 'كمدرب شخصي، يساعدني FitTrack في تتبع تقدم عملائي بسهولة. التحليلات المتقدمة تجعل تخصيص البرامج أمراً سهلاً.' : "As a personal trainer, FitTrack helps me easily track my clients' progress. The advanced analytics make program customization a breeze.",
    achievement: isRTL ? 'زيادة معدل نجاح العملاء بنسبة 40%' : '40% increase in client success rate',
    rating: 5,
    platform: 'Google Play',
    verified: true
  }];
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 340; // Card width + gap
    const currentScroll = scrollRef.current.scrollLeft;
    const newScroll = direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount;
    scrollRef.current.scrollTo({
      left: newScroll,
      behavior: 'smooth'
    });
  };
  return <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>
        <div className="relative">
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8">
            <button onClick={() => scroll('left')} className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors" aria-label="Previous testimonials">
              <ChevronLeftIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
          <div ref={scrollRef} className="flex overflow-x-auto gap-8 scroll-smooth hide-scrollbar" style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
            {testimonials.map((testimonial, index) => <div key={index} className="flex-none w-full md:w-[400px] bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h3>
                        {testimonial.verified && <svg className="w-4 h-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {testimonial.platform}
                  </span>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                </div>
                <blockquote className="text-gray-600 dark:text-gray-300 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {testimonial.achievement}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8">
            <button onClick={() => scroll('right')} className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors" aria-label="Next testimonials">
              <ChevronRightIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a href="#all-reviews" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium inline-flex items-center">
            {t('testimonials.seeAll')}
            <svg className={`w-4 h-4 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>;
};