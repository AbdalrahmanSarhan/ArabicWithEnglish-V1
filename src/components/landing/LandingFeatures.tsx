import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Brain, Rocket, Globe2 } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
export const LandingFeatures = () => {
  const {
    language
  } = useLanguage();
  const isRTL = language === 'ar';
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
  return <motion.div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
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
      <style jsx>{`
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
        .edu-highlight-section {
          transition: all 0.3s ease;
        }
        .edu-highlight-section:hover {
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </motion.div>;
};