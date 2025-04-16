import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
export const CountdownTimer = () => {
  const {
    language
  } = useLanguage();
  const isRTL = language === 'ar';
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const targetDate = new Date('2025-05-15T00:00:00');
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(difference / (1000 * 60 * 60) % 24);
        const minutes = Math.floor(difference / 1000 / 60 % 60);
        const seconds = Math.floor(difference / 1000 % 60);
        setTimeLeft({
          days,
          hours,
          minutes,
          seconds
        });
      }
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);
  const timeBlocks = [{
    value: timeLeft.days,
    label: isRTL ? 'يوم' : 'Days'
  }, {
    value: timeLeft.hours,
    label: isRTL ? 'ساعة' : 'Hours'
  }, {
    value: timeLeft.minutes,
    label: isRTL ? 'دقيقة' : 'Minutes'
  }, {
    value: timeLeft.seconds,
    label: isRTL ? 'ثانية' : 'Seconds'
  }];
  return <div className="w-full">
      <motion.div className="flex items-center justify-center gap-3 mb-8" initial={{
      opacity: 0,
      y: 10
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }}>
        <Clock className="w-5 h-5 text-primary-500 dark:text-primary-400" />
        <h3 className="text-xl font-medium text-neutral-800 dark:text-white">
          {isRTL ? 'الوقت المتبقي للإطلاق' : 'Time Remaining Until Launch'}
        </h3>
      </motion.div>
      <div className="grid grid-cols-4 gap-4 md:gap-6">
        {timeBlocks.map((block, index) => <motion.div key={index} className="flex flex-col items-center" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: index * 0.1
      }}>
            <motion.div className="w-full aspect-square bg-white dark:bg-dark-200 rounded-xl border border-light-400 dark:border-dark-100/40 flex items-center justify-center shadow-sm relative overflow-hidden group hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300" whileHover={{
          scale: 1.05,
          rotate: 2,
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
        }} whileTap={{
          scale: 0.95
        }}>
              <motion.span className="relative text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-400" animate={{
            scale: [1, 1.1, 1],
            opacity: block.value === 0 ? [1, 0.7, 1] : 1
          }} transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 1
          }}>
                {block.value.toString().padStart(2, '0')}
              </motion.span>
              <motion.div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary-300 dark:bg-primary-700" animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }} transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: index * 0.5
          }} />
              <motion.div className="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full bg-secondary-300 dark:bg-secondary-700" animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }} transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: index * 0.5 + 1
          }} />
            </motion.div>
            <span className="mt-3 text-sm font-medium text-neutral-600 dark:text-neutral-400">
              {block.label}
            </span>
          </motion.div>)}
      </div>
    </div>;
};