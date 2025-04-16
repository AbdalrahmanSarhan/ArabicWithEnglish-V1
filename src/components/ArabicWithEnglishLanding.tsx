import React, { Children } from 'react';
import { BookOpen, Users, Trophy, PlayCircle, CheckCircle, BarChart2, MessageCircle, Star, Award, Video, Layout, Sparkles, Brain, Rocket, Lightbulb, Globe2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { CountdownTimer } from './CountdownTimer';
import { CTA } from './CTA';
import { motion } from 'framer-motion';
import { FloatingElements, AnimatedAlphabet, AnimatedLearningPath, WordScramble, InteractiveQuiz, AnimatedBook, BrainActivity } from './EducationalAnimations';
const WhySection = () => {
  const {
    language
  } = useLanguage();
  const isRTL = language === 'ar';
  return <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] translate-x-1/2 translate-y-1/4 bg-secondary-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.4] dark:opacity-[0.1]" />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-20" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }}>
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 mb-6" initial={{
            scale: 0.9
          }} whileInView={{
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }}>
              <Sparkles className="w-5 h-5 text-primary-500 dark:text-primary-400" />
              <span className="text-sm font-medium text-primary-700 dark:text-primary-400">
                {isRTL ? 'تعلم بطريقة مختلفة' : 'Learn Differently'}
              </span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-400 dark:to-primary-500">
              {isRTL ? 'لماذا ArabicWithEnglish؟' : 'Why ArabicWithEnglish?'}
            </h2>
          </motion.div>
          <div className="mb-24">
            <AnimatedLearningPath />
          </div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.2
        }}>
            {features.map((feature, index) => <motion.div key={index} className="group relative p-8 rounded-2xl bg-white/80 dark:bg-dark-200/50 backdrop-blur-lg border border-neutral-200/50 dark:border-dark-100/30 hover:border-primary-200 dark:hover:border-primary-700/50 transition-all duration-300" variants={itemVariants} style={{
            textAlign: isRTL ? 'right' : 'left'
          }} whileHover={{
            y: -8
          }} whileTap={{
            scale: 0.98
          }}>
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="p-4 rounded-xl bg-primary-50 dark:bg-primary-900/30 transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {isRTL ? feature.titleAr : feature.title}
                      </h3>
                      <p className="text-neutral-700 dark:text-neutral-300">
                        {isRTL ? feature.descriptionAr : feature.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-50/50 dark:from-primary-900/0 dark:to-primary-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>)}
          </motion.div>
          <div className="mt-24 space-y-16">
            <motion.div className="p-8 rounded-2xl bg-gradient-to-br from-white/50 to-primary-50/30 dark:from-dark-200/50 dark:to-primary-900/20 border border-primary-100/20 dark:border-primary-800/20 shadow-lg" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7
          }}>
              <h3 className="text-2xl font-semibold mb-8 text-center text-primary-700 dark:text-primary-400">
                {isRTL ? 'اختبر معلوماتك' : 'Test Your Knowledge'}
              </h3>
              <InteractiveQuiz />
            </motion.div>
            <motion.div className="p-8 rounded-2xl bg-gradient-to-br from-white/50 to-secondary-50/30 dark:from-dark-200/50 dark:to-secondary-900/20 border border-secondary-100/20 dark:border-secondary-800/20 shadow-lg" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7
          }}>
              <h3 className="text-2xl font-semibold mb-8 text-center text-secondary-700 dark:text-secondary-400">
                {isRTL ? 'تعلم الكلمات' : 'Learn Words'}
              </h3>
              <WordScramble />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div className="p-8 rounded-2xl bg-gradient-to-br from-white/50 to-accent-gold-light/30 dark:from-dark-200/50 dark:to-accent-gold-DEFAULT/20 border border-accent-gold-light/20 dark:border-accent-gold-DEFAULT/20 shadow-lg" initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.7
            }}>
                <h3 className="text-2xl font-semibold mb-8 text-center text-accent-gold-DEFAULT dark:text-accent-gold-light">
                  {isRTL ? 'كتابنا التفاعلي' : 'Our Interactive Book'}
                </h3>
                <AnimatedBook />
              </motion.div>
              <motion.div className="p-8 rounded-2xl bg-gradient-to-br from-white/50 to-primary-50/30 dark:from-dark-200/50 dark:to-primary-900/20 border border-primary-100/20 dark:border-primary-800/20 shadow-lg" initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.7
            }}>
                <h3 className="text-2xl font-semibold mb-8 text-center text-primary-700 dark:text-primary-400">
                  {isRTL ? 'نشاط الدماغ' : 'Brain Activity'}
                </h3>
                <p className="text-center text-neutral-600 dark:text-neutral-400 mb-8">
                  {isRTL ? 'انقر على الدماغ لتنشيطه!' : 'Click on the brain to activate it!'}
                </p>
                <BrainActivity />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export const ArabicWithEnglishLanding = () => {
  const {
    t,
    language
  } = useLanguage();
  const isRTL = language === 'ar';
  const features = [{
    icon: <Video className="w-6 h-6 text-primary-500 dark:text-primary-400" />,
    title: 'Video Lessons',
    titleAr: 'دروس فيديو ممتعة',
    description: 'Learn through short videos explained in clear Arabic',
    descriptionAr: 'تعلّم من خلال فيديوهات قصيرة مشروحة باللهجة العربية الفصيحة'
  }, {
    icon: <Users className="w-6 h-6 text-secondary-500 dark:text-secondary-400" />,
    title: 'Native Teachers',
    titleAr: 'مدرّسون نيتف',
    description: 'Professional teachers whose native language is English!',
    descriptionAr: 'مدرّسون محترفون لغتهم الأم إنجليزية!'
  }, {
    icon: <BookOpen className="w-6 h-6 text-accent-coral-DEFAULT dark:text-accent-coral-light" />,
    title: 'Structured Curriculum',
    titleAr: 'خطة تعليمية منظمة',
    description: 'From basics to proficiency, step by step',
    descriptionAr: 'من الأساسيات حتى الاحتراف، خطوة بخطوة'
  }, {
    icon: <Award className="w-6 h-6 text-accent-amber-DEFAULT dark:text-accent-amber-light" />,
    title: 'Achievement Certificates',
    titleAr: 'شهادات إنجاز',
    description: 'Get a certified certificate upon completion of each level',
    descriptionAr: 'احصل على شهادة معتمدة عند إنهاء كل مستوى'
  }, {
    icon: <MessageCircle className="w-6 h-6 text-accent-emerald-DEFAULT dark:text-accent-emerald-light" />,
    title: 'Supportive Community',
    titleAr: 'مجتمع داعم',
    description: 'Interact with students like you and practice with them on the platform',
    descriptionAr: 'تفاعل مع طلاب مثلك وتدرّب معهم داخل المنصة'
  }, {
    icon: <BarChart2 className="w-6 h-6 text-accent-purple-DEFAULT dark:text-accent-purple-light" />,
    title: 'Track Progress',
    titleAr: 'تابع تقدمك',
    description: 'Smart dashboard showing your level and how much left to reach your goal!',
    descriptionAr: 'لوحة تحكم ذكية تعرض لك مستواك، وكم بقي لك لتحقيق هدفك!'
  }];
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };
  return <div className="min-h-screen w-full bg-gradient-to-br from-light-100 via-light-200 to-light-300 dark:from-dark-100 dark:via-dark-200 dark:to-dark-300 text-neutral-900 dark:text-white transition-colors duration-300 overflow-x-hidden">
      <section className="relative pt-40 md:pt-48 pb-24 md:pb-32 overflow-hidden w-full">
        <motion.div className="absolute inset-0 overflow-hidden pointer-events-none" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1
      }}>
          <motion.div className="decorative-circle w-[800px] h-[800px] top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-30" animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0]
        }} transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut'
        }} />
          <motion.div className="decorative-circle w-[600px] h-[600px] bottom-0 right-0 translate-x-1/3 translate-y-1/3 opacity-20" animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -5, 0]
        }} transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }} />
          <motion.div className="absolute top-1/4 right-10 floating-books scale-75 md:scale-100" animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [0, 5, 0]
        }} transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}>
            <div className="book transform rotate-[-15deg]"></div>
            <div className="book transform rotate-[5deg] translate-y-4"></div>
            <div className="book transform rotate-[25deg] translate-y-2"></div>
          </motion.div>
          <motion.div className="absolute bottom-1/4 left-10 floating-books scale-75 md:scale-100" style={{
          animationDelay: '1.5s'
        }} animate={{
          y: [0, -20, 0],
          x: [0, -10, 0],
          rotate: [0, -5, 0]
        }} transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}>
            <div className="book transform rotate-[15deg]"></div>
            <div className="book transform rotate-[-5deg] translate-y-4"></div>
          </motion.div>
          <FloatingElements />
        </motion.div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          <motion.div className="max-w-4xl mx-auto text-center" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          type: 'spring',
          stiffness: 50,
          damping: 20
        }}>
            <div className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full mb-10 md:mb-12 animate-pulse-slow">
              <Sparkles className="w-5 h-5 text-primary-500 dark:text-primary-400" />
              <span className="text-base font-medium text-primary-700 dark:text-primary-300">
                Coming Soon
              </span>
            </div>
            <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 md:mb-10 leading-tight" initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.7,
            delay: 0.2
          }}>
              <span className="text-accent-gold-DEFAULT block mb-2 md:inline md:mb-0">
                Arabic
              </span>
              <span className="text-black dark:text-white block mb-2 md:inline md:mb-0">
                With
              </span>
              <span className="text-primary-600 dark:text-primary-400 block md:inline">
                English
              </span>
            </motion.h1>
            <AnimatedAlphabet />
            <motion.p className="text-2xl md:text-3xl lg:text-4xl mb-16 text-neutral-700 dark:text-neutral-200 font-light max-w-3xl mx-auto leading-relaxed" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.7,
            delay: 0.4
          }}>
              <span className="writing-effect">
                The First Platform for Learning English with Easy Methods and
                Clear Arabic Explanations
              </span>
            </motion.p>
            <div className="mb-20 md:mb-24">
              <CountdownTimer />
            </div>
            <motion.p className="text-xl md:text-2xl mb-10 text-neutral-600 dark:text-neutral-300 font-medium" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.7,
            delay: 0.6
          }}>
              ⏳ Register now and be among the first to get exclusive access to
              the first experience!
            </motion.p>
            <motion.div className="flex justify-center" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.8
          }}>
              <button onClick={() => {
              const form = document.querySelector('#waitlist-form');
              if (form) {
                form.scrollIntoView({
                  behavior: 'smooth'
                });
              }
            }} className="group relative px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden transform hover:scale-105">
                <span className="relative z-10">Register Me Now</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <motion.section className="py-24 md:py-32 relative edu-section w-full overflow-x-hidden" initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} viewport={{
      once: true,
      margin: '-100px'
    }} transition={{
      duration: 0.8
    }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          <div className="max-w-3xl mx-auto">
            <motion.h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-primary-700 dark:text-primary-400" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7
          }}>
              {isRTL ? 'لماذا ArabicWithEnglish؟' : 'Why ArabicWithEnglish?'}
            </motion.h2>
            <AnimatedLearningPath />
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-16" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.2
          }}>
              {features.map((feature, index) => <motion.div key={index} className="edu-feature-card group p-4 sm:p-8 mt-6 sm:mt-12 w-full" variants={itemVariants} style={{
              textAlign: isRTL ? 'right' : 'left'
            }} whileHover={{
              y: -8
            }} whileTap={{
              scale: 0.98
            }}>
                  <div className="card-highlight"></div>
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                    <div className="mt-1 p-3 sm:p-4 rounded-xl bg-primary-50 dark:bg-primary-900/30 transition-colors duration-300 shrink-0 card-icon">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-neutral-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {isRTL ? feature.titleAr : feature.title}
                      </h3>
                      <p className="text-sm sm:text-lg text-neutral-700 dark:text-neutral-300">
                        {isRTL ? feature.descriptionAr : feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>)}
            </motion.div>
            <motion.div className="mt-16 mb-12" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.7
          }}>
              <h3 className="text-xl font-semibold mb-6 text-center text-primary-700 dark:text-primary-400">
                {isRTL ? 'اختبر معلوماتك' : 'Test Your Knowledge'}
              </h3>
              <InteractiveQuiz />
            </motion.div>
            <motion.div className="my-16" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.7
          }}>
              <h3 className="text-xl font-semibold mb-6 text-center text-primary-700 dark:text-primary-400">
                {isRTL ? 'تعلم الكلمات' : 'Learn Words'}
              </h3>
              <WordScramble />
            </motion.div>
            <motion.div className="mt-20 mb-10" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7
          }}>
              <h3 className="text-xl font-semibold mb-6 text-center text-primary-700 dark:text-primary-400">
                {isRTL ? 'رحلة التعلم معنا' : 'Your Learning Journey With Us'}
              </h3>
              <div className="flex flex-col md:flex-row gap-4 justify-between mb-8">
                <div className="edu-step" data-step="1">
                  <h4 className="font-medium text-lg mb-1">
                    {isRTL ? 'التسج��ل' : 'Register'}
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {isRTL ? 'انضم إلى منصتنا وابدأ رحلتك' : 'Join our platform and start your journey'}
                  </p>
                </div>
                <div className="edu-step" data-step="2">
                  <h4 className="font-medium text-lg mb-1">
                    {isRTL ? 'تعلم' : 'Learn'}
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {isRTL ? 'استمتع بدروسنا التفاعلية' : 'Enjoy our interactive lessons'}
                  </p>
                </div>
                <div className="edu-step" data-step="3">
                  <h4 className="font-medium text-lg mb-1">
                    {isRTL ? 'تدرب' : 'Practice'}
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {isRTL ? 'طبق ما تعلمته مع مجتمعنا' : 'Apply what you learned with our community'}
                  </p>
                </div>
                <div className="edu-step" data-step="4">
                  <h4 className="font-medium text-lg mb-1">
                    {isRTL ? 'أتقن' : 'Master'}
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {isRTL ? 'احصل على شهادات تثبت مهاراتك' : 'Get certificates proving your skills'}
                  </p>
                </div>
              </div>
              <div className="learning-path animate" style={{
              '--progress': '75%'
            } as React.CSSProperties}>
                <div className="learning-path-progress"></div>
              </div>
            </motion.div>
            <motion.div className="my-16" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.7
          }}>
              <h3 className="text-xl font-semibold mb-6 text-center text-primary-700 dark:text-primary-400">
                {isRTL ? 'كتابنا التفاعلي' : 'Our Interactive Book'}
              </h3>
              <AnimatedBook />
            </motion.div>
            <motion.div className="my-16" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.7
          }}>
              <h3 className="text-xl font-semibold mb-6 text-center text-primary-700 dark:text-primary-400">
                {isRTL ? 'نشاط الدماغ' : 'Brain Activity'}
              </h3>
              <p className="text-center text-neutral-600 dark:text-neutral-400 mb-4">
                {isRTL ? 'انقر على الدماغ لتنشيطه!' : 'Click on the brain to activate it!'}
              </p>
              <BrainActivity />
            </motion.div>
            <motion.div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.2
          }}>
              <motion.div className="bg-white/70 dark:bg-dark-200/50 backdrop-blur-md rounded-xl p-6 border border-neutral-200/50 dark:border-dark-100/30 flex flex-col items-center text-center edu-highlight-section" variants={itemVariants} whileHover={{
              y: -5
            }}>
                <div className="w-14 h-14 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4 animate-float-book">
                  <Brain className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                  {isRTL ? 'منهج علمي مدروس' : 'Scientific Approach'}
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                  {isRTL ? 'منهج مبني على أحدث طرق تعليم اللغات' : 'Curriculum built on the latest language teaching methods'}
                </p>
              </motion.div>
              <motion.div className="bg-white/70 dark:bg-dark-200/50 backdrop-blur-md rounded-xl p-6 border border-neutral-200/50 dark:border-dark-100/30 flex flex-col items-center text-center edu-highlight-section" variants={itemVariants} whileHover={{
              y: -5
            }}>
                <div className="w-14 h-14 rounded-full bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center mb-4 animate-float-book" style={{
                animationDelay: '0.2s'
              }}>
                  <Rocket className="w-7 h-7 text-secondary-600 dark:text-secondary-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                  {isRTL ? 'تقدم سريع' : 'Fast Progress'}
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                  {isRTL ? 'تعلم أسرع 3 مرات من الطرق التقليدية' : 'Learn 3x faster than traditional methods'}
                </p>
              </motion.div>
              <motion.div className="bg-white/70 dark:bg-dark-200/50 backdrop-blur-md rounded-xl p-6 border border-neutral-200/50 dark:border-dark-100/30 flex flex-col items-center text-center edu-highlight-section" variants={itemVariants} whileHover={{
              y: -5
            }}>
                <div className="w-14 h-14 rounded-full bg-accent-gold-light/50 dark:bg-accent-gold-DEFAULT/20 flex items-center justify-center mb-4 animate-float-book" style={{
                animationDelay: '0.4s'
              }}>
                  <Globe2 className="w-7 h-7 text-accent-gold-DEFAULT dark:text-accent-gold-light" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                  {isRTL ? 'محتوى ثقافي' : 'Cultural Content'}
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                  {isRTL ? 'تعلم اللغة مع فهم ثقافة الناطقين بها' : 'Learn language with cultural understanding'}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <CTA />
    </div>;
};