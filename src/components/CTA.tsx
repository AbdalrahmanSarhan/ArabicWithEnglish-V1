import React, { useCallback, useEffect, useState, Children, Component } from 'react';
import { BookOpen, Users, Trophy, PlayCircle, CheckCircle, BarChart2, MessageCircle, Star, Award, Video, Sparkles, Brain, Rocket, Globe2, Volume2, FileText, Zap, Book, ArrowRight, Headphones, GraduationCap, Mic, PenTool, Music, Pencil, AlignLeft, Layers, Palette, Eye, ListChecks, LucideMessageSquare, MenuIcon, SlidersHorizontal, BookMarked, GanttChart, PieChart, BarChart, BookmarkIcon, UserCheck, Map, Compass, CalendarCheck, BookOpenCheck, Library, GraduationCap as GraduationCapIcon, X, Mail, Clock, Search, Bell, Moon, Sun, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { AnimatedLearningPath, WordScramble, InteractiveQuiz, AnimatedBook, BrainActivity } from './EducationalAnimations';
// Core language skills section
const LanguageSkillsSection = () => {
  const {
    language
  } = useLanguage();
  const isRTL = language === 'ar';
  const skills = [{
    id: 'listening',
    icon: <Headphones className="w-12 h-12 text-blue-500" />,
    title: isRTL ? 'الاستماع' : 'Listening',
    description: isRTL ? 'تحسين مهارات فهم اللغة المنطوقة من خلال تمارين استماع متنوعة' : 'Improve comprehension of spoken language through diverse listening exercises',
    color: 'blue',
    animation: {
      y: [0, -10, 0],
      rotate: [0, 5, 0]
    }
  }, {
    id: 'speaking',
    icon: <Mic className="w-12 h-12 text-accent-coral-DEFAULT dark:text-accent-coral-light" />,
    title: isRTL ? 'التحدث' : 'Speaking',
    description: isRTL ? 'تطوير مهارات المحادثة والنطق الصحيح للكلمات والعبارات' : 'Develop conversation skills and proper pronunciation of words and phrases',
    color: 'accent-coral',
    animation: {
      y: [0, -10, 0],
      rotate: [0, -5, 0]
    }
  }, {
    id: 'reading',
    icon: <div className="w-12 h-12 text-primary-500 dark:text-primary-400" />,
    title: isRTL ? 'القراءة' : 'Reading',
    description: isRTL ? 'تعزيز مهارات القراءة والفهم من خلال نصوص تناسب مستواك' : 'Enhance reading and comprehension skills through level-appropriate texts',
    color: 'primary',
    animation: {
      y: [0, -10, 0],
      rotate: [0, 3, 0]
    }
  }, {
    id: 'writing',
    icon: <PenTool className="w-12 h-12 text-secondary-500 dark:text-secondary-400" />,
    title: isRTL ? 'الكتابة' : 'Writing',
    description: isRTL ? 'تطوير مهارات الكتابة بأسلوب صحيح وواضح بمختلف السياقات' : 'Develop skills to write correctly and clearly in various contexts',
    color: 'secondary',
    animation: {
      y: [0, -10, 0],
      rotate: [0, -3, 0]
    }
  }];
  return <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated background elements for language skills section */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] translate-x-1/2 translate-y-1/2 bg-accent-coral-DEFAULT/5 rounded-full blur-3xl" />
        {/* Floating language elements */}
        {['A', 'B', 'Z', '!', '?', '.', 'ا', 'ب'].map((char, index) => <motion.div key={`floating-char-${index}`} className="absolute text-4xl font-bold text-gray-200/20 dark:text-gray-700/20" style={{
        left: `${index * 15 % 80 + 10}%`,
        top: `${index * 12 % 70 + 15}%`
      }} animate={{
        y: [0, -15, 0],
        x: [0, index % 2 === 0 ? 10 : -10, 0],
        rotate: [0, index % 2 === 0 ? 10 : -10, 0]
      }} transition={{
        duration: 6 + index,
        repeat: Infinity,
        ease: 'easeInOut'
      }}>
            {char}
          </motion.div>)}
      </div>
      <div className="container mx-auto px-4 relative">
        <motion.div className="text-center mb-16" initial={{
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
            <Layers className="w-5 h-5 text-primary-500 dark:text-primary-400" />
            <span className="text-sm font-medium text-primary-700 dark:text-primary-400">
              {isRTL ? 'المهارات الأساسية' : 'Core Skills'}
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400 mb-6">
            {isRTL ? 'تطوير مهارات اللغة الأربعة' : 'Develop the Four Language Skills'}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {isRTL ? 'منهجنا الشامل يركز على تطوير جميع مهارات اللغة الإنجليزية الأساسية لضمان إتقان متكامل' : 'Our comprehensive approach focuses on developing all core English language skills to ensure complete mastery'}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => <motion.div key={skill.id} className={`relative p-6 rounded-2xl bg-white/80 dark:bg-dark-200/50 backdrop-blur-lg border border-${skill.color}-100/50 dark:border-${skill.color}-900/30 hover:border-${skill.color}-300 dark:hover:border-${skill.color}-700/50 transition-all duration-300 overflow-hidden group`} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2 + index * 0.1
        }} whileHover={{
          y: -5,
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
        }}>
              {/* Background glow effect */}
              <div className={`absolute -right-10 -top-10 w-40 h-40 bg-${skill.color}-500/10 dark:bg-${skill.color}-500/5 rounded-full blur-3xl group-hover:bg-${skill.color}-500/20 transition-all duration-500`}></div>
              <div className="relative z-10">
                <motion.div className={`p-4 rounded-xl bg-${skill.color}-50 dark:bg-${skill.color}-900/30 inline-flex mb-4`} animate={skill.animation} transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.2
            }}>
                  {skill.icon}
                </motion.div>
                <h3 className={`text-2xl font-bold mb-3 text-${skill.color}-600 dark:text-${skill.color}-400`}>
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {skill.description}
                </p>
                <motion.div className={`mt-4 inline-flex items-center gap-1 text-${skill.color}-600 dark:text-${skill.color}-400 font-medium text-sm`} whileHover={{
              x: isRTL ? -5 : 5
            }}>
                  {isRTL ? 'اكتشف التمارين' : 'Discover exercises'}
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                </motion.div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
// Why Choose Us section
const WhySection = ({
  features
}: {
  features: any[];
}) => {
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
              {isRTL ? 'لماذا Arabic With English؟' : 'Why Arabic With English?'}
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
        </div>
      </div>
    </section>;
};
// Export the CTA component with the WaitlistSection code
export const CTA = () => {
  const {
    language
  } = useLanguage();
  const isRTL = language === 'ar';
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  // Form validation
  useEffect(() => {
    setIsFormValid(email.trim() !== '' && name.trim() !== '' && phone.trim() !== '' && acceptTerms);
  }, [email, name, phone, acceptTerms]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      setIsLoading(true);
      setTimeout(() => {
        setSubmitted(true);
        setIsLoading(false);
        console.log('Form submitted:', {
          name,
          email,
          phone
        });
        // Reset form fields
        setEmail('');
        setName('');
        setPhone('');
        setAcceptTerms(false);
      }, 1500);
    }
  };
  const getFlexDirection = useCallback(() => {
    return isRTL ? 'flex-row-reverse' : 'flex-row';
  }, [isRTL]);
  const getTextAlign = useCallback(() => {
    return isRTL ? 'text-right' : 'text-left';
  }, [isRTL]);
  const getOptimizedSpacing = useCallback((size = 'md') => {
    const spaces = {
      sm: isRTL ? 'space-x-reverse space-x-2' : 'space-x-2',
      md: isRTL ? 'space-x-reverse space-x-4' : 'space-x-4',
      lg: isRTL ? 'space-x-reverse space-x-6' : 'space-x-6'
    };
    return spaces[size as keyof typeof spaces] || spaces.md;
  }, [isRTL]);
  const getIconPosition = useCallback((side = 'start') => {
    const positions = {
      start: isRTL ? 'right-3' : 'left-3',
      end: isRTL ? 'left-3' : 'right-3',
      // الأيقونات في الحقول تكون على اليمين في العربية، مع مسافة أكبر للتناسق البصري
      input: isRTL ? 'right-4' : 'left-4',
      'input-icon': isRTL ? 'right-4' : 'left-4',
      // تحسين موضع الأيقونات في الأزرار للعربية
      'button-start': isRTL ? 'right-4' : 'left-4',
      'button-end': isRTL ? 'left-4' : 'right-4'
    };
    return positions[side] || positions.start;
  }, [isRTL]);
  // Enhanced padding direction for inputs and icons - IMPROVED for RTL
  const getPaddingDirection = useCallback((context = 'default') => {
    const paddings = {
      // في العربية: الأيقونة على اليمين، مع مسافة متناسقة للقراءة البصرية المريحة
      'input-icon': isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4',
      'input-simple': isRTL ? 'pr-4 pl-4' : 'pl-4 pr-4',
      'button-icon': isRTL ? 'pr-10 pl-6' : 'pl-10 pr-6',
      'button-icon-sm': isRTL ? 'pr-8 pl-4' : 'pl-8 pr-4',
      'checkbox-label': isRTL ? 'pr-3 pl-1' : 'pl-3 pr-1'
    };
    return paddings[context] || paddings['input-simple'];
  }, [isRTL]);
  const getTypography = useCallback((type = 'body') => {
    const typography = {
      heading: isRTL ? 'font-arabic-heading' : 'font-heading',
      subheading: isRTL ? 'font-arabic-heading' : 'font-heading',
      body: isRTL ? 'font-arabic-body' : 'font-body',
      button: isRTL ? 'font-arabic-ui' : 'font-ui',
      caption: isRTL ? 'font-arabic-caption' : 'font-caption'
    };
    return typography[type as keyof typeof typography] || typography.body;
  }, [isRTL]);
  return <section id="waitlist-form" className="relative py-20 overflow-hidden bg-gradient-to-br from-white to-primary-50/30 dark:from-dark-200 dark:to-primary-900/20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] translate-x-1/2 translate-y-1/2 bg-blue-500/5 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-12" initial={{
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
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 mb-6" initial={{
            scale: 0.9
          }} whileInView={{
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }}>
              <Rocket className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {isRTL ? 'قريباً' : 'Coming Soon'}
              </span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400 mb-6">
              {isRTL ? 'انضم إلى قائمة الانتظار للوصول المبكر' : 'Join the Waitlist for Early Access'}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {isRTL ? 'كن من أوائل من يختبرون مستقبل تعلم اللغات. سجل الآن واحصل على مزايا الوصول المبكر الحصرية.' : 'Be among the first to experience the future of language learning. Sign up now and get exclusive early access benefits.'}
            </p>
          </motion.div>
          <motion.div className="bg-white/80 dark:bg-dark-200/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/30 shadow-xl mb-12" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7,
          delay: 0.2
        }}>
            {submitted ? <motion.div className="text-center py-8" initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5
          }}>
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {isRTL ? 'أنت الآن على القائمة!' : "You're on the list!"}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {isRTL ? 'سنخبرك عند الإطلاق. ترقب بريدك الإلكتروني!' : "We'll notify you when we launch. Keep an eye on your inbox!"}
                </p>
                <motion.button className="mt-6 px-6 py-2 bg-primary-100 hover:bg-primary-200 dark:bg-primary-900/30 dark:hover:bg-primary-900/50 text-primary-600 dark:text-primary-400 rounded-lg font-medium" whileHover={{
              scale: 1.03
            }} whileTap={{
              scale: 0.98
            }} onClick={() => setSubmitted(false)}>
                  {isRTL ? 'العودة إلى النموذج' : 'Back to form'}
                </motion.button>
              </motion.div> : <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="mb-8">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {isRTL ? 'البريد الإلكتروني' : 'Email Address'}
                  </label>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={isRTL ? 'أدخل بريدك الإلكتروني' : 'Enter your email address'} className="w-full pl-10 pr-4 py-3 bg-white dark:bg-dark-300 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-200" required />
                    </div>
                    <motion.button type="submit" className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium shadow-lg shadow-primary-500/20 flex items-center justify-center gap-2" whileHover={{
                  scale: 1.03
                }} whileTap={{
                  scale: 0.98
                }}>
                      <Zap className="w-5 h-5" />
                      {isRTL ? 'انضم إلى قائمة الانتظار' : 'Join Waitlist'}
                    </motion.button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex flex-col items-center p-4 rounded-xl bg-white dark:bg-dark-300 border border-gray-200 dark:border-gray-700">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-2">
                      <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      2,500+
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {isRTL ? 'شخص في قائمة الانتظار' : 'People in Queue'}
                    </div>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-xl bg-white dark:bg-dark-300 border border-gray-200 dark:border-gray-700">
                    <div className="p-3 bg-accent-coral-DEFAULT/10 dark:bg-accent-coral-DEFAULT/20 rounded-full mb-2">
                      <Clock className="w-6 h-6 text-accent-coral-DEFAULT dark:text-accent-coral-light" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      5 {isRTL ? 'أيام' : 'Days'}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {isRTL ? 'حتى الإطلاق' : 'Until Launch'}
                    </div>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-xl bg-white dark:bg-dark-300 border border-gray-200 dark:border-gray-700">
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-full mb-2">
                      <Trophy className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      50%
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {isRTL ? 'خصم للمسجلين مبكراً' : 'Early Bird Discount'}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                    {isRTL ? 'مزايا الوصول المبكر' : 'Early Access Benefits'}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[{
                  icon: <Star className="w-5 h-5 text-amber-500" />,
                  text: isRTL ? 'الوصول الأول لجميع الميزات' : 'First access to all features'
                }, {
                  icon: <Trophy className="w-5 h-5 text-green-500" />,
                  text: isRTL ? 'خصم 50% على الاشتراكات السنوية' : '50% discount on annual plans'
                }, {
                  icon: <Sparkles className="w-5 h-5 text-blue-500" />,
                  text: isRTL ? 'وصول تجريبي للميزات الجديدة' : 'Beta access to new features'
                }, {
                  icon: <MessageCircle className="w-5 h-5 text-purple-500" />,
                  text: isRTL ? 'دعم عملاء ذو أولوية' : 'Priority customer support'
                }].map((benefit, index) => <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-dark-400/50 rounded-lg">
                        <div className="p-2 bg-white dark:bg-dark-300 rounded-full">
                          {benefit.icon}
                        </div>
                        <span className="text-gray-700 dark:text-gray-200 text-sm">
                          {benefit.text}
                        </span>
                      </div>)}
                  </div>
                </div>
              </form>}
          </motion.div>
          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {isRTL ? 'بالتسجيل، أنت توافق على تلقي رسائل بريد إلكتروني منا حول إطلاق المنصة والعروض الخاصة.' : 'By signing up, you agree to receive emails from us about our platform launch and special offers.'}
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .font-arabic-heading {
          font-family: 'Noto Sans Arabic', 'Cairo', 'Amiri', system-ui,
            sans-serif;
          font-weight: 600;
          line-height: 1.4;
          letter-spacing: 0.02em;
        }
        .font-arabic-body {
          font-family: 'Noto Sans Arabic', 'Cairo', system-ui, sans-serif;
          font-weight: 400;
          line-height: 1.7;
          letter-spacing: 0.01em;
        }
        .font-arabic-ui {
          font-family: 'Noto Sans Arabic', 'Cairo', system-ui, sans-serif;
          font-weight: 500;
          line-height: 1.5;
        }
        .font-arabic-caption {
          font-family: 'Noto Sans Arabic', 'Cairo', system-ui, sans-serif;
          font-weight: 400;
          line-height: 1.6;
        }
        /* Enhanced RTL input styling */
        [dir='rtl'] input[type='text'],
        [dir='rtl'] input[type='email'],
        [dir='rtl'] textarea {
          text-align: right;
        }
        /* Enhanced focus styles for RTL */
        [dir='rtl'] input:focus,
        [dir='rtl'] textarea:focus {
          box-shadow: -3px 0 0 0 rgb(var(--primary-500));
        }
        /* Enhanced hover effects for RTL */
        [dir='rtl'] .hover-slide:hover {
          transform: translateX(-8px);
        }
        [dir='ltr'] .hover-slide:hover {
          transform: translateX(8px);
        }
        /* FIXED: Enhanced RTL label alignment */
        [dir='rtl'] label {
          text-align: right;
          display: block;
        }
        [dir='rtl'] label > div {
          justify-content: flex-end;
        }
        /* Improved icon positioning for RTL */
        [dir='rtl'] .input-icon {
          right: 1rem;
          left: auto;
        }
        [dir='rtl'] .button-icon {
          margin-left: 0.5rem;
          margin-right: 0;
        }
        /* Enhanced RTL form validation indicators */
        [dir='rtl'] .validation-indicator {
          right: auto;
          left: 1rem;
        }
      `}</style>
    </section>;
};
// Navbar Component
const Navbar = () => {
  const {
    language,
    toggleLanguage
  } = useLanguage();
  const {
    theme,
    toggleTheme
  } = useTheme();
  const isRTL = language === 'ar';
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-dark-200/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-50 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                <Book className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <span className="text-xl font-bold hidden sm:inline-block">
                <span className="text-primary-600 dark:text-primary-400">
                  Arabic
                </span>
                <span className="text-black dark:text-white">With</span>
                <span className="text-blue-500">English</span>
              </span>
            </div>
          </div>
          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button onClick={toggleTheme} className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-300/50 rounded-full transition-colors" aria-label={theme === 'dark' ? isRTL ? 'التبديل إلى الوضع المضيء' : 'Switch to light mode' : isRTL ? 'التبديل إلى الوضع المظلم' : 'Switch to dark mode'}>
              {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            {/* Language Toggle */}
            <button onClick={toggleLanguage} className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-300/50 rounded-full transition-colors" aria-label={language === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}>
              <Globe2 className="w-5 h-5" />
            </button>
            {/* CTA Button */}
            <a href="#waitlist-form" className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors">
              <Zap className="w-4 h-4" />
              {isRTL ? 'انضم الآن' : 'Join Now'}
            </a>
            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 md:hidden text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-300/50 rounded-lg transition-colors" aria-label={isRTL ? 'تبديل القائمة المتنقلة' : 'Toggle mobile menu'}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && <div className="md:hidden bg-white dark:bg-dark-200 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            <a href="#waitlist-form" className="block px-3 py-2 mt-2 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
              {isRTL ? 'انضم الآن' : 'Join Now'}
            </a>
          </div>
        </div>}
    </header>;
};
export const ArabicWithEnglishLanding = () => {
  const {
    language,
    toggleLanguage
  } = useLanguage();
  const isRTL = language === 'ar';
  // Word of the day data
  const [wordOfDay, setWordOfDay] = useState({
    english: 'Apple',
    arabic: 'تفاحة',
    usage: 'I eat an apple every day.',
    usageAr: 'آكل تفاحة كل يوم.',
    pronunciation: '/ˈæp.əl/'
  });
  const features = [{
    icon: <Video className="w-6 h-6 text-primary-500 dark:text-primary-400" />,
    title: 'Video Lessons',
    titleAr: 'دروس فيديو تفاعلية',
    description: 'Learn through short videos explained in clear Arabic',
    descriptionAr: 'تعلّم من خلال فيديوهات قصيرة مشروحة باللغة العربية الفصيحة'
  }, {
    icon: <Users className="w-6 h-6 text-secondary-500 dark:text-secondary-400" />,
    title: 'Native Teachers',
    titleAr: 'مدرّسون ناطقون باللغة',
    description: 'Professional teachers whose native language is English!',
    descriptionAr: 'مدرّسون محترفون لغتهم الأم هي الإنجليزية!'
  }, {
    icon: <BookOpen className="w-6 h-6 text-accent-coral-DEFAULT dark:text-accent-coral-light" />,
    title: 'Structured Curriculum',
    titleAr: 'منهج تعليمي منظم',
    description: 'From basics to proficiency, step by step',
    descriptionAr: 'من الأساسيات حتى الاحتراف، خطوة بخطوة'
  }, {
    icon: <Award className="w-6 h-6 text-accent-amber-DEFAULT dark:text-accent-amber-light" />,
    title: 'Achievement Certificates',
    titleAr: 'شهادات إنجاز معتمدة',
    description: 'Get a certified certificate upon completion of each level',
    descriptionAr: 'احصل على شهادة معتمدة عند إنهاء كل مستوى'
  }];
  const benefits = [{
    icon: <GraduationCap className="w-5 h-5 text-primary-500 dark:text-primary-400" />,
    title: isRTL ? 'تعلم سريع' : 'Fast Learning',
    description: isRTL ? 'منهج مركز لتعلم أسرع وأكثر فعالية' : 'Focused curriculum for faster, more effective learning'
  }, {
    icon: <Headphones className="w-5 h-5 text-secondary-500 dark:text-secondary-400" />,
    title: isRTL ? 'دعم مستمر' : 'Continuous Support',
    description: isRTL ? 'مساعدة على مدار الساعة طوال أيام الأسبوع' : '24/7 help when you need it'
  }, {
    icon: <Trophy className="w-5 h-5 text-accent-gold-DEFAULT dark:text-accent-gold-light" />,
    title: isRTL ? 'تدريبات عملية' : 'Practical Exercises',
    description: isRTL ? 'تطبيق مباشر للمهارات في مواقف حقيقية' : 'Apply skills in real-life situations'
  }];
  return <div className="min-h-screen w-full bg-gradient-to-br from-light-100 via-light-200 to-light-300 dark:from-dark-100 dark:via-dark-200 dark:to-dark-300 text-neutral-900 dark:text-white transition-colors duration-300 overflow-x-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden w-full">
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Educational icons floating in background */}
          {[{
          icon: <BookOpen className="w-full h-full" />,
          color: 'text-blue-500/10 dark:text-blue-400/5'
        }, {
          icon: <Headphones className="w-full h-full" />,
          color: 'text-primary-500/10 dark:text-primary-400/5'
        }, {
          icon: <PenTool className="w-full h-full" />,
          color: 'text-secondary-500/10 dark:text-secondary-400/5'
        }, {
          icon: <MessageCircle className="w-full h-full" />,
          color: 'text-accent-gold-DEFAULT/10 dark:text-accent-gold-light/5'
        }, {
          icon: <Mic className="w-full h-full" />,
          color: 'text-accent-coral-DEFAULT/10 dark:text-accent-coral-light/5'
        }, {
          icon: <GraduationCap className="w-full h-full" />,
          color: 'text-green-500/10 dark:text-green-400/5'
        }].map((item, index) => <motion.div key={`icon-${index}`} className={`absolute w-16 h-16 ${item.color}`} style={{
          left: `${index * 19 % 80 + 10}%`,
          top: `${index * 23 % 70 + 15}%`
        }} animate={{
          y: [0, -15, 0],
          x: [0, index % 2 === 0 ? 10 : -10, 0],
          rotate: [0, index % 2 === 0 ? 10 : -10, 0]
        }} transition={{
          duration: 7 + index,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: index * 0.3
        }}>
              {item.icon}
            </motion.div>)}
          {/* Floating alphabet characters */}
          <div className="alphabet-grid">
            {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د'].map((letter, index) => <motion.div key={`letter-${index}`} className="absolute text-4xl font-bold text-primary-500/10 dark:text-primary-400/5" style={{
            left: `${index * 17 % 85 + 5}%`,
            top: `${index * 19 % 85 + 5}%`
          }} animate={{
            y: [0, -15, 0],
            rotate: [0, index % 2 === 0 ? 5 : -5, 0],
            opacity: [0.05, 0.1, 0.05]
          }} transition={{
            duration: 5 + index % 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.2
          }}>
                {letter}
              </motion.div>)}
          </div>
          {/* Enhanced animated gradient orbs */}
          <motion.div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary-500/10 to-blue-500/5 blur-3xl" animate={{
          scale: [1, 1.1, 1],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }} transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }} />
          <motion.div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-l from-secondary-500/10 to-accent-gold-DEFAULT/5 blur-3xl" animate={{
          scale: [1, 1.15, 1],
          x: [0, -20, 0],
          y: [0, 20, 0]
        }} transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }} />
          {/* Educational patterns */}
          <motion.div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b91f2' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} animate={{
          backgroundPosition: ['0px 0px', '60px 60px']
        }} transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear'
        }} />
          {/* Animated dot grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.3] dark:opacity-[0.1]">
            <motion.div className="absolute inset-0" animate={{
            x: [0, 10, 0],
            y: [0, 5, 0]
          }} transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut'
          }} />
          </div>
        </div>
        {/* Alphabet row at bottom - enhanced */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center z-10 overflow-hidden">
          <motion.div className="flex items-center justify-center gap-1 sm:gap-3 px-4 py-2 bg-white/30 dark:bg-dark-200/30 backdrop-blur-md rounded-full" initial={{
          y: 50,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.7,
          delay: 1
        }}>
            {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map((letter, index) => <motion.div key={letter} className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full ${index === 1 ? 'bg-primary-500 text-white' : 'bg-white/80 dark:bg-dark-300/80 text-gray-800 dark:text-white'} font-bold text-lg`} whileHover={{
            scale: 1.1,
            boxShadow: '0 0 12px rgba(59, 130, 246, 0.5)'
          }} transition={{
            type: 'spring',
            stiffness: 300
          }}>
                {letter}
              </motion.div>)}
          </motion.div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto">
            {/* Logo and title section - enhanced */}
            <motion.div className="text-center mb-12" initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7
          }}>
              <div className="w-40 h-40 mx-auto mb-6 relative">
                <motion.div className="absolute inset-0 rounded-full bg-blue-100 dark:bg-blue-900/30" animate={{
                scale: [1, 1.05, 1]
              }} transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}></motion.div>
                <motion.div className="absolute inset-0 flex items-center justify-center" initial={{
                rotateY: 0
              }} animate={{
                rotateY: 360
              }} transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear'
              }}>
                  <Book className="w-20 h-20 text-primary-500" />
                </motion.div>
                {/* Floating educational icons around the logo */}
                {[{
                icon: <Headphones className="w-6 h-6 text-blue-500" />,
                position: 'top-0 -right-4'
              }, {
                icon: <Mic className="w-6 h-6 text-accent-coral-DEFAULT" />,
                position: 'top-0 -left-4'
              }, {
                icon: <PenTool className="w-6 h-6 text-secondary-500" />,
                position: 'bottom-0 -right-4'
              }, {
                icon: <div className="w-6 h-6 text-primary-500" />,
                position: 'bottom-0 -left-4'
              }].map((item, index) => <motion.div key={`floating-icon-${index}`} className={`absolute ${item.position} p-2 rounded-full bg-white dark:bg-gray-800 shadow-md`} animate={{
                y: [0, -8, 0],
                rotate: [0, 10, 0]
              }} transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.5
              }}>
                    {item.icon}
                  </motion.div>)}
              </div>
              <motion.h1 className="text-5xl sm:text-6xl font-bold mb-4" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.7,
              delay: 0.3
            }}>
                <span className="text-primary-600 dark:text-primary-400">
                  Arabic
                </span>
                <span className="text-black dark:text-white">With</span>
                <span className="text-blue-500">English</span>
              </motion.h1>
              <motion.p className="text-2xl sm:text-3xl font-medium mb-4 bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400 bg-clip-text text-transparent" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.7,
              delay: 0.5
            }}>
                {isRTL ? 'تعلم الإنجليزية بسهولة... بالعربية' : 'Learn English Easily... in Arabic'}
              </motion.p>
              <motion.p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.7,
              delay: 0.7
            }}>
                {isRTL ? 'منصة تعليمية تشرح اللغة الإنجليزية بطريقة مبسطة ومباشرة باستخدام اللغة العربية، مصممة خصيصًا للمتحدثين بالعربية.' : 'An educational platform that explains English in a simplified and direct way using Arabic language, specially designed for Arabic speakers.'}
              </motion.p>
            </motion.div>
            {/* Benefits section - Enhanced */}
            <motion.div className="mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.3
          }}>
              {benefits.map((benefit, index) => <motion.div key={index} className="bg-white/80 dark:bg-dark-200/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/30 hover:border-primary-200 dark:hover:border-primary-700/50 transition-all duration-300" whileHover={{
              y: -5,
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
            }} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.4 + index * 0.1
            }}>
                  <div className="flex items-start gap-4">
                    <motion.div className="p-3 rounded-lg bg-primary-50 dark:bg-primary-900/30" animate={{
                  rotate: [0, 10, 0, -10, 0]
                }} transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.2
                }}>
                      {benefit.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>)}
            </motion.div>
            {/* CTA button - Enhanced */}
            <motion.div className="text-center mb-20" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.7,
            delay: 0.6
          }}>
              <motion.button className="py-4 px-8 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium text-lg shadow-xl shadow-primary-500/20 flex items-center justify-center gap-2 mx-auto" whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }} whileTap={{
              scale: 0.98
            }} onClick={() => {
              const form = document.querySelector('#waitlist-form');
              if (form) {
                form.scrollIntoView({
                  behavior: 'smooth'
                });
              }
            }}>
                <Zap className="w-5 h-5" />
                {isRTL ? 'سجل الآن واحصل على خصم 50%' : 'Register Now & Get 50% Discount'}
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Core Language Skills Section */}
      <LanguageSkillsSection />
      {/* Features section */}
      <WhySection features={features} />
      {/* Waitlist Section */}
      <CTA />
      {/* Footer with Copyright */}
      <footer className="bg-white/50 dark:bg-dark-200/50 backdrop-blur-sm py-8 border-t border-gray-200/50 dark:border-gray-700/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Arabic With English.{' '}
              {isRTL ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
            </p>
          </div>
        </div>
      </footer>
    </div>;
};