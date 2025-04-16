import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, GraduationCap, Brain, PenTool, Lightbulb, Zap, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
export const FloatingElements = () => {
  return <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div className="absolute top-20 left-[10%]" animate={{
      y: [0, -20, 0],
      x: [0, 10, 0],
      rotate: [0, 5, 0],
      opacity: [0.7, 1, 0.7]
    }} transition={{
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut'
    }} whileHover={{
      scale: 1.1
    }}>
        <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full">
          <BookOpen className="w-8 h-8 text-primary-600 dark:text-primary-400" />
        </div>
      </motion.div>
      <motion.div className="absolute top-[40%] right-[5%]" animate={{
      y: [0, -20, 0],
      rotate: [0, -5, 0],
      opacity: [0.5, 0.9, 0.5]
    }} transition={{
      duration: 7,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 1
    }}>
        <div className="bg-secondary-100 dark:bg-secondary-900/30 p-3 rounded-full">
          <GraduationCap className="w-7 h-7 text-secondary-600 dark:text-secondary-400" />
        </div>
      </motion.div>
      <motion.div className="absolute bottom-[25%] left-[15%]" animate={{
      y: [0, -12, 0],
      rotate: [0, 3, 0],
      opacity: [0.6, 1, 0.6]
    }} transition={{
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 2
    }}>
        <div className="bg-accent-gold-light dark:bg-accent-gold-DEFAULT/20 p-3 rounded-full">
          <PenTool className="w-6 h-6 text-accent-gold-DEFAULT dark:text-accent-gold-light" />
        </div>
      </motion.div>
    </div>;
};
export const AnimatedAlphabet = () => {
  const {
    language
  } = useLanguage();
  const isRTL = language === 'ar';
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => prev === null ? 0 : (prev + 1) % letters.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return <div className="flex flex-wrap justify-center gap-2 md:gap-3 my-8 md:my-12 px-4">
      {letters.map((letter, index) => <motion.div key={index} className={`letter-container w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center bg-white dark:bg-dark-200 shadow-md border-2 ${activeIndex === index ? 'border-primary-500 dark:border-primary-400' : 'border-light-400 dark:border-dark-100/40'}`} initial={{
      scale: 0.8,
      opacity: 0,
      y: 20
    }} animate={{
      scale: activeIndex === index ? 1.1 : 1,
      opacity: 1,
      y: 0,
      rotate: activeIndex === index ? [0, -5, 5, 0] : 0
    }} transition={{
      type: 'spring',
      stiffness: 200,
      damping: 15,
      delay: index * 0.1
    }} whileHover={{
      scale: 1.15,
      rotate: [-2, 2, 0],
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10
      }
    }}>
          <motion.span className={`text-2xl md:text-3xl font-bold ${activeIndex === index ? 'text-primary-600 dark:text-primary-400' : 'text-neutral-700 dark:text-neutral-300'}`} animate={{
        y: activeIndex === index ? [0, -5, 0] : 0
      }} transition={{
        duration: 0.5,
        type: 'spring',
        stiffness: 300
      }}>
            {letter}
          </motion.span>
          {activeIndex === index && <motion.div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2" initial={{
        scale: 0
      }} animate={{
        scale: 1
      }} transition={{
        duration: 0.3
      }}>
              <div className="w-2 h-2 bg-primary-500 dark:bg-primary-400 rounded-full" />
            </motion.div>}
        </motion.div>)}
    </div>;
};
export const InteractiveQuiz = () => {
  const {
    language
  } = useLanguage();
  const isRTL = language === 'ar';
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const questions = [{
    question: isRTL ? 'ما هو معنى كلمة "Book"؟' : 'What is the meaning of "كتاب"?',
    options: isRTL ? ['قلم', 'كتاب', 'مدرسة', 'معلم'] : ['Pen', 'Book', 'School', 'Teacher'],
    correctAnswer: isRTL ? 1 : 1
  }, {
    question: isRTL ? 'ما هو معنى كلمة "Teacher"؟' : 'What is the meaning of "معلم"?',
    options: isRTL ? ['طالب', 'مدير', 'معلم', 'طبيب'] : ['Student', 'Principal', 'Teacher', 'Doctor'],
    correctAnswer: isRTL ? 2 : 2
  }];
  const handleOptionClick = index => {
    setShowAnswer(true);
    setTimeout(() => {
      setShowAnswer(false);
      setCurrentQuestion(prev => (prev + 1) % questions.length);
    }, 1500);
  };
  return <motion.div className="bg-white/70 dark:bg-dark-200/50 backdrop-blur-md rounded-xl p-6 border border-neutral-200/50 dark:border-dark-100/30 shadow-md" initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    duration: 0.5
  }}>
      <h3 className="text-lg font-semibold mb-4 text-center text-primary-700 dark:text-primary-400">
        {isRTL ? 'اختبر معلوماتك!' : 'Test Your Knowledge!'}
      </h3>
      <AnimatePresence mode="wait">
        <motion.div key={currentQuestion} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} transition={{
        duration: 0.3
      }}>
          <p className="text-neutral-800 dark:text-white mb-4">
            {questions[currentQuestion].question}
          </p>
          <div className="grid grid-cols-2 gap-3">
            {questions[currentQuestion].options.map((option, index) => <motion.button key={index} className={`p-3 rounded-lg border ${showAnswer && index === questions[currentQuestion].correctAnswer ? 'bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700' : 'bg-light-300/50 dark:bg-dark-300/50 border-light-400 dark:border-dark-100/40'} hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors`} onClick={() => handleOptionClick(index)} whileHover={{
            scale: 1.03
          }} whileTap={{
            scale: 0.98
          }}>
                {option}
              </motion.button>)}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>;
};
export const AnimatedLearningPath = () => {
  const {
    language
  } = useLanguage();
  const isRTL = language === 'ar';
  const [activeStep, setActiveStep] = useState(0);
  const steps = [{
    icon: <BookOpen className="w-5 h-5 text-white" />,
    title: isRTL ? 'المفردات' : 'Vocabulary',
    description: isRTL ? 'تعلم الكلمات الأساسية' : 'Learn essential words'
  }, {
    icon: <PenTool className="w-5 h-5 text-white" />,
    title: isRTL ? 'القواعد' : 'Grammar',
    description: isRTL ? 'فهم قواعد اللغة' : 'Understand language rules'
  }, {
    icon: <Zap className="w-5 h-5 text-white" />,
    title: isRTL ? 'المحادثة' : 'Conversation',
    description: isRTL ? 'تدرب على التحدث' : 'Practice speaking'
  }, {
    icon: <Award className="w-5 h-5 text-white" />,
    title: isRTL ? 'الإتقان' : 'Mastery',
    description: isRTL ? 'استخدم اللغة بطلاقة' : 'Use language fluently'
  }];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [steps.length]);
  return <div className="my-16">
      <div className="relative">
        <div className="absolute top-1/2 left-0 right-0 h-2 bg-light-400 dark:bg-dark-100/40 -translate-y-1/2 rounded-full"></div>
        <div className="flex justify-between relative">
          {steps.map((step, index) => <motion.div key={index} className="relative z-10" initial={{
          opacity: 0.5,
          y: 20
        }} animate={{
          opacity: activeStep === index ? 1 : 0.7,
          y: activeStep === index ? 0 : 10,
          scale: activeStep === index ? 1.1 : 1
        }} transition={{
          duration: 0.5
        }}>
              <motion.div className={`w-14 h-14 rounded-full flex items-center justify-center ${index <= activeStep ? 'bg-primary-600 dark:bg-primary-500' : 'bg-light-500 dark:bg-dark-300'}`} whileHover={{
            scale: 1.1
          }} onClick={() => setActiveStep(index)}>
                {step.icon}
              </motion.div>
              <div className={`absolute top-16 left-1/2 -translate-x-1/2 w-40 text-center ${activeStep === index ? 'text-primary-700 dark:text-primary-400' : 'text-neutral-600 dark:text-neutral-400'}`}>
                <p className="font-semibold text-base mb-2">{step.title}</p>
                <p className="text-sm">{step.description}</p>
              </div>
            </motion.div>)}
        </div>
        <motion.div className="absolute top-1/2 left-0 h-2 bg-primary-500 -translate-y-1/2 rounded-full" initial={{
        width: '0%'
      }} animate={{
        width: `${activeStep / (steps.length - 1) * 100}%`
      }} transition={{
        duration: 0.5
      }} />
      </div>
    </div>;
};
export const WordScramble = () => {
  const {
    language
  } = useLanguage();
  const isRTL = language === 'ar';
  const words = isRTL ? ['كتاب', 'قلم', 'مدرسة', 'معلم', 'طالب'] : ['book', 'pen', 'school', 'teacher', 'student'];
  return <div className="flex flex-wrap justify-center gap-2 sm:gap-3 my-4 sm:my-6 max-w-full">
      {words.map((word, index) => <motion.div key={index} className="px-2 sm:px-3 py-1 sm:py-2 bg-white dark:bg-dark-200 rounded-lg shadow-sm border border-light-400 dark:border-dark-100/40" drag dragConstraints={{
      top: -30,
      left: -30,
      right: 30,
      bottom: 30
    }} whileDrag={{
      scale: 1.1
    }} whileTap={{
      scale: 0.95
    }} initial={{
      opacity: 0,
      scale: 0.8
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      delay: index * 0.1
    }}>
          <span className="font-medium text-xs sm:text-sm text-primary-700 dark:text-primary-400">
            {word}
          </span>
        </motion.div>)}
      <motion.div className="w-full text-center mt-2 sm:mt-3 text-xs text-neutral-600 dark:text-neutral-400" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 0.8
    }}>
        {isRTL ? 'اسحب الكلمات وأعد ترتيبها!' : 'Drag and rearrange the words!'}
      </motion.div>
    </div>;
};
export const AnimatedBook = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="flex justify-center my-8">
      <motion.div className="relative w-[200px] h-[160px] cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <motion.div className="absolute inset-0 rounded-lg bg-primary-600 dark:bg-primary-700 shadow-lg" animate={{
        rotateY: isOpen ? -180 : 0
      }} transition={{
        duration: 1,
        type: 'spring'
      }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <BookOpen className="w-12 h-12 text-white" />
          </div>
        </motion.div>
        <motion.div className="absolute inset-0 bg-white dark:bg-dark-200 rounded-lg border-2 border-primary-200 dark:border-primary-800 flex items-center justify-center" initial={{
        opacity: 0
      }} animate={{
        opacity: isOpen ? 1 : 0
      }} transition={{
        duration: 0.5,
        delay: isOpen ? 0.5 : 0
      }}>
          <div className="text-center">
            <Lightbulb className="w-10 h-10 text-primary-500 dark:text-primary-400 mx-auto mb-3" />
            <p className="text-sm text-neutral-800 dark:text-white font-medium">
              Click to open/close
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>;
};
export const BrainActivity = () => {
  const [isActive, setIsActive] = useState(false);
  return <div className="flex justify-center my-8">
      <motion.div className="relative w-24 h-24 cursor-pointer" onClick={() => setIsActive(!isActive)} whileHover={{
      scale: 1.1
    }}>
        <motion.div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full opacity-20" animate={{
        scale: isActive ? [1, 1.2, 1.1] : 1,
        opacity: isActive ? [0.2, 0.3, 0.2] : 0.2
      }} transition={{
        duration: 2,
        repeat: isActive ? Infinity : null,
        repeatType: 'reverse'
      }} />
        <motion.div className="absolute inset-0 flex items-center justify-center" animate={{
        rotate: isActive ? [0, 5, -5, 0] : 0
      }} transition={{
        duration: 2,
        repeat: isActive ? Infinity : null,
        repeatType: 'reverse'
      }}>
          <Brain className="w-12 h-12 text-primary-600 dark:text-primary-400" />
        </motion.div>
      </motion.div>
    </div>;
};