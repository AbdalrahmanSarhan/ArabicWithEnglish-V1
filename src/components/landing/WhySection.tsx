import React, { Children } from 'react';
import { Video, Users, BookOpen, Award, MessageCircle, BarChart2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { AnimatedLearningPath } from '../EducationalAnimations';
export const WhySection = () => {
  const {
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
  return <motion.section className="py-28 md:py-36 relative edu-section w-full overflow-x-hidden" initial={{
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
        </div>
      </div>
      <style jsx>{`
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
      `}</style>
    </motion.section>;
};