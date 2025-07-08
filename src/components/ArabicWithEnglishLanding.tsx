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
  return <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-primary-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] translate-x-1/2 translate-y-1/4 bg-secondary-500/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.3] dark:opacity-[0.08]" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-24" initial={{
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
            <motion.div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary-50 dark:bg-primary-900/40 border border-primary-100 dark:border-primary-800/30 mb-8" initial={{
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
          <div className="mb-28">
            <AnimatedLearningPath />
          </div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.2
        }}>
            {features.map((feature, index) => <motion.div key={index} className="group relative p-8 md:p-10 rounded-2xl bg-white/90 dark:bg-dark-200/60 backdrop-blur-lg border border-neutral-200/70 dark:border-dark-100/40 hover:border-primary-200 dark:hover:border-primary-700/50 transition-all duration-300 shadow-sm hover:shadow-md" variants={itemVariants} style={{
            textAlign: isRTL ? 'right' : 'left'
          }} whileHover={{
            y: -8
          }} whileTap={{
            scale: 0.98
          }}>
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="p-4 rounded-xl bg-primary-50 dark:bg-primary-900/40 border border-primary-100/50 dark:border-primary-800/30 transition-colors duration-300">
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
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-50/70 dark:from-primary-900/0 dark:to-primary-900/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>)}
          </motion.div>
          <div className="mt-28 space-y-20">
            <motion.div className="p-10 rounded-2xl bg-gradient-to-br from-white/80 to-primary-50/50 dark:from-dark-200/70 dark:to-primary-900/30 border border-primary-100/30 dark:border-primary-800/30 shadow-xl" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7
          }}>
              <h3 className="text-2xl font-semibold mb-10 text-center text-primary-700 dark:text-primary-400">
                {isRTL ? 'اختبر معلوماتك' : 'Test Your Knowledge'}
              </h3>
              <InteractiveQuiz />
            </motion.div>
            <motion.div className="p-10 rounded-2xl bg-gradient-to-br from-white/80 to-secondary-50/50 dark:from-dark-200/70 dark:to-secondary-900/30 border border-secondary-100/30 dark:border-secondary-800/30 shadow-xl" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7
          }}>
              <h3 className="text-2xl font-semibold mb-10 text-center text-secondary-700 dark:text-secondary-400">
                {isRTL ? 'تعلم الكلمات' : 'Learn Words'}
              </h3>
              <WordScramble />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              <motion.div className="p-10 rounded-2xl bg-gradient-to-br from-white/80 to-accent-gold-light/40 dark:from-dark-200/70 dark:to-accent-gold-DEFAULT/30 border border-accent-gold-light/30 dark:border-accent-gold-DEFAULT/30 shadow-xl" initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.7
            }}>
                <h3 className="text-2xl font-semibold mb-10 text-center text-accent-gold-DEFAULT dark:text-accent-gold-light">
                  {isRTL ? 'كتابنا التفاعلي' : 'Our Interactive Book'}
                </h3>
                <AnimatedBook />
              </motion.div>
              <motion.div className="p-10 rounded-2xl bg-gradient-to-br from-white/80 to-primary-50/50 dark:from-dark-200/70 dark:to-primary-900/30 border border-primary-100/30 dark:border-primary-800/30 shadow-xl" initial={{
              opacity: 0
            }} whileInView={{
              opacity: 1
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.7
            }}>
                <h3 className="text-2xl font-semibold mb-10 text-center text-primary-700 dark:text-primary-400">
                  {isRTL ? 'نشاط الدماغ' : 'Brain Activity'}
                </h3>
                <p className="text-center text-neutral-600 dark:text-neutral-400 mb-10">
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
      <section className="relative pt-40 md:pt-52 pb-28 md:pb-36 overflow-hidden w-full">
        <motion.div className="absolute inset-0 overflow-hidden pointer-events-none" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1
      }}>
          <motion.div className="decorative-circle w-[1000px] h-[1000px] top-0 left-0 -translate-x-1/2 -translate-y-1/2 opacity-30" animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0]
        }} transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut'
        }} style={{
          background: 'radial-gradient(circle, rgba(59, 145, 242, 0.15), rgba(59, 145, 242, 0.05))'
        }} />
          <motion.div className="decorative-circle w-[800px] h-[800px] bottom-0 right-0 translate-x-1/3 translate-y-1/3 opacity-20" animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -5, 0]
        }} transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }} style={{
          background: 'radial-gradient(circle, rgba(59, 130, 191, 0.15), rgba(59, 130, 191, 0.05))'
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
            <div className="book transform rotate-[-15deg]" style={{
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
          }}></div>
            <div className="book transform rotate-[5deg] translate-y-4" style={{
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
          }}></div>
            <div className="book transform rotate-[25deg] translate-y-2" style={{
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
          }}></div>
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
            <div className="book transform rotate-[15deg]" style={{
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
          }}></div>
            <div className="book transform rotate-[-5deg] translate-y-4" style={{
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
          }}></div>
          </motion.div>
          <FloatingElements />
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.2] dark:opacity-[0.05]"></div>
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
            <div className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full mb-12 md:mb-14 animate-pulse-slow bg-white/20 dark:bg-dark-200/30 backdrop-blur-md border border-white/30 dark:border-dark-100/20 shadow-lg">
              <Sparkles className="w-5 h-5 text-primary-500 dark:text-primary-400" />
              <span className="text-base font-medium text-primary-700 dark:text-primary-300">
                Coming Soon
              </span>
            </div>
            <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-10 md:mb-12 leading-tight" initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.7,
            delay: 0.2
          }}>
              <span className="text-accent-gold-DEFAULT block mb-3 md:inline md:mb-0">
                Arabic
              </span>
              <span className="text-black dark:text-white block mb-3 md:inline md:mb-0 md:mx-3">
                With
              </span>
              <span className="text-primary-600 dark:text-primary-400 block md:inline">
                English
              </span>
            </motion.h1>
            <AnimatedAlphabet />
            <motion.p className="text-2xl md:text-3xl lg:text-4xl mb-20 text-neutral-700 dark:text-neutral-200 font-light max-w-3xl mx-auto leading-relaxed" initial={{
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
            <div className="mb-24 md:mb-28">
              <CountdownTimer />
            </div>
            <motion.p className="text-xl md:text-2xl mb-12 text-neutral-600 dark:text-neutral-300 font-medium" initial={{
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
            }} className="group relative px-10 py-5 bg-primary-600 hover:bg-primary-700 text-white font-medium text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden transform hover:scale-105">
                <span className="relative z-10">Register Me Now</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <motion.section className="py-28 md:py-36 relative edu-section w-full overflow-x-hidden" initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} viewport={{
      once: true,
      margin: '-100px'
    }} transition={{
      duration: 0.8
    }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-primary-500/8 rounded-full blur-[80px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] translate-x-1/2 translate-y-1/2 bg-secondary-500/8 rounded-full blur-[80px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15] dark:opacity-[0.05]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          <div className="max-w-4xl mx-auto">
            <motion.h2 className="text-4xl md:text-5xl font-bold mb-20 text-center text-primary-700 dark:text-primary-400" initial={{
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
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-20" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.2
          }}>
              {features.map((feature, index) => <motion.div key={index} className="edu-feature-card group p-6 sm:p-8 mt-8 sm:mt-12 w-full bg-white/90 dark:bg-dark-200/60 backdrop-blur-md rounded-2xl border border-neutral-200/70 dark:border-dark-100/40 shadow-sm hover:shadow-md transition-all duration-300" variants={itemVariants} style={{
              textAlign: isRTL ? 'right' : 'left'
            }} whileHover={{
              y: -8
            }} whileTap={{
              scale: 0.98
            }}>
                  <div className="card-highlight"></div>
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="mt-1 p-4 rounded-xl bg-primary-50 dark:bg-primary-900/40 border border-primary-100/50 dark:border-primary-800/30 transition-colors duration-300 shrink-0 card-icon">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-neutral-900 dark:text-white group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {isRTL ? feature.titleAr : feature.title}
                      </h3>
                      <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300">
                        {isRTL ? feature.descriptionAr : feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>)}
            </motion.div>
            <motion.div className="mt-20 mb-16 p-8 rounded-2xl bg-white/90 dark:bg-dark-200/60 backdrop-blur-md border border-neutral-200/70 dark:border-dark-100/40 shadow-md" initial={{
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
            <motion.div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.2
          }}>
              <motion.div className="bg-white/90 dark:bg-dark-200/60 backdrop-blur-md rounded-xl p-8 border border-neutral-200/70 dark:border-dark-100/40 flex flex-col items-center text-center edu-highlight-section shadow-md" variants={itemVariants} whileHover={{
              y: -5
            }}>
                <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/40 border border-primary-200/50 dark:border-primary-800/30 flex items-center justify-center mb-6 animate-float-book">
                  <Brain className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-neutral-900 dark:text-white">
                  {isRTL ? 'منهج علمي مدروس' : 'Scientific Approach'}
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                  {isRTL ? 'منهج مبني على أحدث طرق تعليم اللغات' : 'Curriculum built on the latest language teaching methods'}
                </p>
              </motion.div>
              <motion.div className="bg-white/90 dark:bg-dark-200/60 backdrop-blur-md rounded-xl p-8 border border-neutral-200/70 dark:border-dark-100/40 flex flex-col items-center text-center edu-highlight-section shadow-md" variants={itemVariants} whileHover={{
              y: -5
            }}>
                <div className="w-16 h-16 rounded-full bg-secondary-100 dark:bg-secondary-900/40 border border-secondary-200/50 dark:border-secondary-800/30 flex items-center justify-center mb-6 animate-float-book" style={{
                animationDelay: '0.2s'
              }}>
                  <Rocket className="w-8 h-8 text-secondary-600 dark:text-secondary-400" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-neutral-900 dark:text-white">
                  {isRTL ? 'تقدم سريع' : 'Fast Progress'}
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                  {isRTL ? 'تعلم أسرع 3 مرات من الطرق التقليدية' : 'Learn 3x faster than traditional methods'}
                </p>
              </motion.div>
              <motion.div className="bg-white/90 dark:bg-dark-200/60 backdrop-blur-md rounded-xl p-8 border border-neutral-200/70 dark:border-dark-100/40 flex flex-col items-center text-center edu-highlight-section shadow-md" variants={itemVariants} whileHover={{
              y: -5
            }}>
                <div className="w-16 h-16 rounded-full bg-accent-gold-light/60 dark:bg-accent-gold-DEFAULT/30 border border-accent-gold-light/50 dark:border-accent-gold-DEFAULT/30 flex items-center justify-center mb-6 animate-float-book" style={{
                animationDelay: '0.4s'
              }}>
                  <Globe2 className="w-8 h-8 text-accent-gold-DEFAULT dark:text-accent-gold-light" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-neutral-900 dark:text-white">
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
      <style jsx>{`
        .decorative-circle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(59, 145, 242, 0.1),
            rgba(59, 145, 242, 0.02)
          );
        }
        .animate-float-book {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .edu-feature-card {
          position: relative;
          overflow: hidden;
        }
        .card-highlight {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(59, 145, 242, 0.1) 0%,
            rgba(59, 145, 242, 0) 60%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .edu-feature-card:hover .card-highlight {
          opacity: 1;
        }
        .card-icon {
          transition: transform 0.3s ease;
        }
        .edu-feature-card:hover .card-icon {
          transform: scale(1.1) rotate(5deg);
        }
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
        .edu-highlight-section {
          transition: all 0.3s ease;
        }
        .edu-highlight-section:hover {
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
      `}</style>
      {/* Footer with Copyright */}
      <footer className="bg-white/50 dark:bg-dark-200/50 backdrop-blur-sm py-8 border-t border-gray-200/50 dark:border-gray-700/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <img src="/Frame_12472.png" alt="Arabic With English Logo" className="w-10 h-10 object-contain" />
              <span className="text-xl font-bold">
                <span className="text-accent-gold-DEFAULT">Arabic</span>
                <span className="text-black dark:text-white">With</span>
                <span className="text-primary-600 dark:text-primary-400">
                  English
                </span>
              </span>
            </div>
            <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse">
              <a href="https://www.instagram.com/arabicwithenglish" target="_blank" rel="noopener noreferrer" className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Arabic With English.{' '}
              {isRTL ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
            </p>
          </div>
        </div>
      </footer>
    </div>;
};