import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { InteractiveQuiz, WordScramble, AnimatedBook, BrainActivity } from '../EducationalAnimations';
export const EducationalDemosSection = () => {
  const {
    language
  } = useLanguage();
  const isRTL = language === 'ar';
  return <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div className="my-20 p-8 rounded-2xl bg-white/90 dark:bg-dark-200/60 backdrop-blur-md border border-neutral-200/70 dark:border-dark-100/40 shadow-md" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.7
        }}>
            <h3 className="text-xl font-semibold mb-8 text-center text-primary-700 dark:text-primary-400">
              {isRTL ? 'اختبر معلوماتك' : 'Test Your Knowledge'}
            </h3>
            <InteractiveQuiz />
          </motion.div>
          <motion.div className="my-20 p-8 rounded-2xl bg-white/90 dark:bg-dark-200/60 backdrop-blur-md border border-neutral-200/70 dark:border-dark-100/40 shadow-md" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.7
        }}>
            <h3 className="text-xl font-semibold mb-8 text-center text-primary-700 dark:text-primary-400">
              {isRTL ? 'تعلم الكلمات' : 'Learn Words'}
            </h3>
            <WordScramble />
          </motion.div>
          <motion.div className="mt-24 mb-12" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }}>
            <h3 className="text-xl font-semibold mb-8 text-center text-primary-700 dark:text-primary-400">
              {isRTL ? 'رحلة التعلم معنا' : 'Your Learning Journey With Us'}
            </h3>
            <div className="flex flex-col md:flex-row gap-6 justify-between mb-10">
              <div className="edu-step p-4 bg-white/80 dark:bg-dark-200/50 backdrop-blur-sm rounded-xl border border-neutral-200/50 dark:border-dark-100/30" data-step="1">
                <h4 className="font-medium text-lg mb-2">
                  {isRTL ? 'التسجيل' : 'Register'}
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {isRTL ? 'انضم إلى منصتنا وابدأ رحلتك' : 'Join our platform and start your journey'}
                </p>
              </div>
              <div className="edu-step p-4 bg-white/80 dark:bg-dark-200/50 backdrop-blur-sm rounded-xl border border-neutral-200/50 dark:border-dark-100/30" data-step="2">
                <h4 className="font-medium text-lg mb-2">
                  {isRTL ? 'تعلم' : 'Learn'}
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {isRTL ? 'استمتع بدروسنا التفاعلية' : 'Enjoy our interactive lessons'}
                </p>
              </div>
              <div className="edu-step p-4 bg-white/80 dark:bg-dark-200/50 backdrop-blur-sm rounded-xl border border-neutral-200/50 dark:border-dark-100/30" data-step="3">
                <h4 className="font-medium text-lg mb-2">
                  {isRTL ? 'تدرب' : 'Practice'}
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {isRTL ? 'طبق ما تعلمته مع مجتمعنا' : 'Apply what you learned with our community'}
                </p>
              </div>
              <div className="edu-step p-4 bg-white/80 dark:bg-dark-200/50 backdrop-blur-sm rounded-xl border border-neutral-200/50 dark:border-dark-100/30" data-step="4">
                <h4 className="font-medium text-lg mb-2">
                  {isRTL ? 'أتقن' : 'Master'}
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {isRTL ? 'احصل على شهادات تثبت مهاراتك' : 'Get certificates proving your skills'}
                </p>
              </div>
            </div>
            <div className="learning-path animate rounded-full h-3 bg-light-400 dark:bg-dark-100/40 relative overflow-hidden" style={{
            '--progress': '75%'
          } as React.CSSProperties}>
              <div className="learning-path-progress absolute top-0 left-0 h-full bg-primary-500 dark:bg-primary-400 rounded-full" style={{
              width: '75%'
            }}></div>
            </div>
          </motion.div>
          <motion.div className="my-20 p-8 rounded-2xl bg-white/90 dark:bg-dark-200/60 backdrop-blur-md border border-neutral-200/70 dark:border-dark-100/40 shadow-md" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.7
        }}>
            <h3 className="text-xl font-semibold mb-8 text-center text-primary-700 dark:text-primary-400">
              {isRTL ? 'كتابنا التفاعلي' : 'Our Interactive Book'}
            </h3>
            <AnimatedBook />
          </motion.div>
          <motion.div className="my-20 p-8 rounded-2xl bg-white/90 dark:bg-dark-200/60 backdrop-blur-md border border-neutral-200/70 dark:border-dark-100/40 shadow-md" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.7
        }}>
            <h3 className="text-xl font-semibold mb-8 text-center text-primary-700 dark:text-primary-400">
              {isRTL ? 'نشاط الدماغ' : 'Brain Activity'}
            </h3>
            <p className="text-center text-neutral-600 dark:text-neutral-400 mb-6">
              {isRTL ? 'انقر على الدماغ لتنشيطه!' : 'Click on the brain to activate it!'}
            </p>
            <BrainActivity />
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        .edu-step {
          position: relative;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }
        .edu-step:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        .edu-step::before {
          content: attr(data-step);
          position: absolute;
          top: -10px;
          left: -10px;
          width: 30px;
          height: 30px;
          background: linear-gradient(135deg, #3b91f2, #2575e6);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 14px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .learning-path {
          height: 6px;
          width: 100%;
          background-color: #e2e8f0;
          border-radius: 999px;
          overflow: hidden;
          position: relative;
        }
        .learning-path-progress {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background: linear-gradient(90deg, #3b91f2, #2575e6);
          border-radius: 999px;
          transition: width 1s ease;
        }
      `}</style>
    </section>;
};