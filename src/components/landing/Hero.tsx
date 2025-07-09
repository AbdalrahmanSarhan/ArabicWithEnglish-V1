import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { AnimatedAlphabet } from '../EducationalAnimations';
import { CountdownTimer } from '../CountdownTimer';
import { FloatingElements } from '../EducationalAnimations';
export const Hero = () => {
  const {
    language
  } = useLanguage();
  const isRTL = language === 'ar';
  return <section className="relative pt-24 md:pt-32 pb-28 md:pb-36 overflow-hidden w-full">
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
          <div className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full mb-8 md:mb-10 animate-pulse-slow bg-white/20 dark:bg-dark-200/30 backdrop-blur-md border border-white/30 dark:border-dark-100/20 shadow-lg">
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
          }} className="group relative px-10 py-5 bg-primary-600 hover:bg-primary-700 text-white font-medium text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden transform hover:scale-105">
              <span className="relative z-10">Register Me Now</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
            </button>
          </motion.div>
        </motion.div>
      </div>
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
        .glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .book {
          width: 60px;
          height: 80px;
          background: linear-gradient(135deg, #3b91f2, #2575e6);
          border-radius: 3px;
          position: absolute;
        }
      `}</style>
    </section>;
};