import React, { useEffect, useState, Component } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, CheckCircle, Mail, User, Code, BookOpen, Sparkles, Shield, GraduationCap, Zap, Heart } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
export const CTA = () => {
  const {
    language
  } = useLanguage();
  const isRTL = language === 'ar';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    referralCode: '',
    interests: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const controls = useAnimation();
  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    });
  }, [controls]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      if (!formData.name) {
        throw new Error(isRTL ? 'يرجى إدخال اسمك' : 'Please enter your name');
      }
      if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        throw new Error(isRTL ? 'يرجى إدخال بريد إلكتروني صحيح' : 'Please enter a valid email address');
      }
      if (!acceptTerms) {
        throw new Error(isRTL ? 'يرجى الموافقة على شروط الخدمة وسياسة الخصوصية' : 'Please agree to the Terms of Service and Privacy Policy');
      }
      const subject = 'New Early Access Registration';
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Referral Code: ${formData.referralCode || 'None'}
Learning Interest: ${formData.interests || 'None'}
Terms Accepted: Yes
      `;
      window.location.href = `mailto:info@techconsultors.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        referralCode: '',
        interests: ''
      });
      setAcceptTerms(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };
  const benefits = [{
    icon: <GraduationCap className="w-5 h-5 text-primary-500 dark:text-primary-400" />,
    title: isRTL ? 'تعلم بسرعة' : 'Learn Quickly',
    description: isRTL ? 'منهج مركز لتعلم أسرع' : 'Focused curriculum for faster learning'
  }, {
    icon: <Zap className="w-5 h-5 text-secondary-500 dark:text-secondary-400" />,
    title: isRTL ? 'تفاعل مباشر' : 'Live Interaction',
    description: isRTL ? 'جلسات تفاعلية مع مدرسين محترفين' : 'Interactive sessions with professional teachers'
  }, {
    icon: <Heart className="w-5 h-5 text-accent-coral-DEFAULT dark:text-accent-coral-light" />,
    title: isRTL ? 'دعم مستمر' : 'Continuous Support',
    description: isRTL ? 'مساعدة على مدار الساعة' : '24/7 help when you need it'
  }];
  return <section className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] translate-x-1/2 translate-y-1/4 bg-secondary-500/10 dark:bg-secondary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-dots-pattern bg-[length:20px_20px] opacity-[0.02] dark:opacity-[0.01]"></div>
      </div>
      <div className="container mx-auto px-4 relative">
        <motion.div className="max-w-5xl mx-auto" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.7
      }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div className="text-center lg:text-left" initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7,
            delay: 0.2
          }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-light-300 dark:bg-dark-100 border border-light-400 dark:border-dark-100/50 mb-6">
                <Sparkles className="w-4 h-4 text-accent-gold-DEFAULT animate-pulse" />
                <span className="text-sm font-medium text-primary-700 dark:text-primary-400">
                  {isRTL ? 'انضم إلينا' : 'Join Us'}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-700 dark:text-primary-400">
                {isRTL ? 'سجل للحصول على وصول مبكر' : 'Register for Early Access'}
              </h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8">
                {isRTL ? 'كن من أوائل من يختبر منصتنا. سجل الآن للحصول على ميزات حصرية عند الإطلاق في 15 مايو 2025' : 'Be among the first to experience our platform. Register now to get exclusive features at launch on May 15, 2025'}
              </p>
              <div className="space-y-6 mb-8">
                {benefits.map((benefit, index) => <motion.div key={index} className="flex items-start gap-3" initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: 0.1 * index
              }} whileHover={{
                x: 5
              }}>
                    <motion.div className="p-2 rounded-lg bg-primary-50/80 dark:bg-primary-900/30 mt-1" whileHover={{
                  rotate: [0, -10, 10, -10, 0],
                  transition: {
                    duration: 0.5
                  }
                }}>
                      {benefit.icon}
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>)}
              </div>
              <div className="hidden lg:block">
                <motion.div className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/70 dark:bg-dark-200/50 backdrop-blur-md border border-neutral-200/50 dark:border-dark-100/30" animate={controls}>
                  <Shield className="w-5 h-5 text-primary-500 dark:text-primary-400" />
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    {isRTL ? 'معلوماتك محمية وآمنة معنا' : 'Your information is safe and secure with us'}
                  </span>
                </motion.div>
              </div>
            </motion.div>
            <motion.div className="bg-white/70 dark:bg-dark-200/50 backdrop-blur-md rounded-2xl p-8 border border-neutral-200/50 dark:border-dark-100/30 shadow-xl transition-all duration-300" initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7,
            delay: 0.4
          }} whileHover={{
            y: -5,
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}>
              <form id="waitlist-form" onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    {isRTL ? 'الاسم الكامل *' : 'Full Name *'}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-neutral-400 dark:text-neutral-500" />
                    </div>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder={isRTL ? 'اكتب اسمك الكامل' : 'Enter your full name'} className="pl-10 w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-300/50 border border-neutral-200 dark:border-dark-100/30 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    {isRTL ? 'البريد الإلكتروني *' : 'Email Address *'}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-neutral-400 dark:text-neutral-500" />
                    </div>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder={isRTL ? 'أدخل بريدك الإلكتروني' : 'Enter your email address'} className="pl-10 w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-300/50 border border-neutral-200 dark:border-dark-100/30 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="referralCode" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    {isRTL ? 'كود الإحالة (اختياري)' : 'Referral Code (Optional)'}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Code className="h-5 w-5 text-neutral-400 dark:text-neutral-500" />
                    </div>
                    <input type="text" id="referralCode" name="referralCode" value={formData.referralCode} onChange={handleInputChange} placeholder={isRTL ? 'إذا كان لديك كود إحالة' : 'If you have a referral code'} className="pl-10 w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-300/50 border border-neutral-200 dark:border-dark-100/30 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all" />
                  </div>
                </div>
                <div>
                  <label htmlFor="interests" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    {isRTL ? 'ما الذي تهتم بتعلمه؟ (اختياري)' : 'What are you interested in learning? (Optional)'}
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 flex items-center pointer-events-none">
                      <BookOpen className="h-5 w-5 text-neutral-400 dark:text-neutral-500" />
                    </div>
                    <textarea id="interests" name="interests" value={formData.interests} onChange={handleInputChange} rows={3} placeholder={isRTL ? 'أخبرنا عن اهتماماتك في تعلم اللغة الإنجليزية' : 'Tell us about your interests in learning English'} className="pl-10 w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-300/50 border border-neutral-200 dark:border-dark-100/30 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all" />
                  </div>
                </div>
                <div className="flex items-start mt-4">
                  <div className="flex items-center h-5">
                    <input id="terms" name="terms" type="checkbox" checked={acceptTerms} onChange={() => setAcceptTerms(!acceptTerms)} className="h-4 w-4 rounded border-neutral-300 dark:border-neutral-600 bg-white dark:bg-dark-300 text-primary-500 dark:text-primary-400 focus:ring-primary-500 dark:focus:ring-primary-400" required />
                  </div>
                  <div className="ms-3 text-sm text-start">
                    <label htmlFor="terms" className="text-neutral-600 dark:text-neutral-400">
                      {isRTL ? 'أوافق على شروط الخدمة وسياسة الخصوصية' : 'I agree to the Terms of Service and Privacy Policy'}
                    </label>
                  </div>
                </div>
                {error && <div className="text-accent-coral-DEFAULT dark:text-accent-coral-light text-sm text-left">
                    {error}
                  </div>}
                <motion.button type="submit" className="group relative w-full bg-primary-600 hover:bg-primary-700 text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-sm" disabled={isLoading} whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }}>
                  {isLoading ? <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {isRTL ? 'جاري الإرسال...' : 'Sending...'}
                    </span> : <>
                      <span className="relative z-10 flex items-center justify-center">
                        {isRTL ? 'سجّلني الآن' : 'Register Me Now'}
                        <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
                    </>}
                </motion.button>
              </form>
              {isSubmitted && <motion.div className="mt-6 p-4 bg-primary-50 dark:bg-primary-900/30 rounded-xl flex items-center justify-center gap-2 text-primary-700 dark:text-primary-400" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5
            }}>
                  <motion.div animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, 0]
              }} transition={{
                duration: 0.5,
                repeat: 1,
                repeatDelay: 1
              }}>
                    <CheckCircle className="w-5 h-5" />
                  </motion.div>
                  <span>
                    {isRTL ? 'تم التسجيل بنجاح! سنتواصل معك قريباً.' : "Successfully registered! We'll be in touch soon."}
                  </span>
                </motion.div>}
              <div className="mt-6 lg:hidden">
                <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/70 dark:bg-dark-300/30 backdrop-blur-md border border-neutral-200/50 dark:border-dark-100/30">
                  <Shield className="w-5 h-5 text-primary-500 dark:text-primary-400" />
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    {isRTL ? 'معلوماتك محمية وآمنة معنا' : 'Your information is safe and secure with us'}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.div className="absolute bottom-10 left-10 pointer-events-none hidden md:block" animate={{
      y: [0, -15, 0],
      rotate: [0, 5, 0]
    }} transition={{
      duration: 5,
      repeat: Infinity,
      ease: 'easeInOut'
    }}>
        <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
          <BookOpen className="w-8 h-8 text-primary-600 dark:text-primary-400" />
        </div>
      </motion.div>
      <motion.div className="absolute top-20 right-10 pointer-events-none hidden md:block" animate={{
      y: [0, -10, 0],
      rotate: [0, -5, 0]
    }} transition={{
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: 1
    }}>
        <div className="w-12 h-12 rounded-full bg-secondary-100 dark:bg-secondary-900/30 flex items-center justify-center">
          <GraduationCap className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
        </div>
      </motion.div>
    </section>;
};