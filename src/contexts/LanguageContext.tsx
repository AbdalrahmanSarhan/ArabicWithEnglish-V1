import React, { useEffect, useState, createContext, useContext } from 'react';
type Language = 'en' | 'ar';
interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isRTL: boolean;
}
// Simple translations
const translations = {
  en: {
    'waitlist.comingSoon': 'Coming Soon',
    'waitlist.joinButton': 'Join Waitlist',
    'waitlist.stats.inQueue': 'People in Queue',
    'waitlist.benefitsTitle': 'Early Access Benefits',
    'settings.language': 'Language',
    'settings.theme': 'Theme',
    'settings.light': 'Light',
    'settings.dark': 'Dark',
    'hero.videoLessons.title': 'Video Lessons',
    'hero.videoLessons.description': 'Learn through short videos explained in clear Arabic',
    'hero.nativeTeachers.title': 'Native Teachers',
    'hero.nativeTeachers.description': 'Professional teachers whose native language is English!',
    'hero.curriculum.title': 'Structured Curriculum',
    'hero.curriculum.description': 'From basics to proficiency, step by step',
    'hero.certificates.title': 'Achievement Certificates',
    'hero.certificates.description': 'Get a certified certificate upon completion of each level',
    'hero.community.title': 'Supportive Community',
    'hero.community.description': 'Interact with students like you and practice with them on the platform',
    'hero.progress.title': 'Track Progress',
    'hero.progress.description': 'Smart dashboard showing your level and how much left to reach your goal!',
    'hero.description': 'The First Platform for Learning English with Easy Methods and Clear Arabic Explanations',
    'hero.whyTitle': 'Why Arabic With English?'
  },
  ar: {
    'waitlist.comingSoon': 'قريباً',
    'waitlist.joinButton': 'انضم إلى قائمة الانتظار',
    'waitlist.stats.inQueue': 'شخص في قائمة الانتظار',
    'waitlist.benefitsTitle': 'مزايا الوصول المبكر',
    'settings.language': 'اللغة',
    'settings.theme': 'المظهر',
    'settings.light': 'فاتح',
    'settings.dark': 'داكن',
    'hero.videoLessons.title': 'دروس فيديو تفاعلية',
    'hero.videoLessons.description': 'تعلّم من خلال فيديوهات قصيرة مشروحة باللغة العربية الفصيحة',
    'hero.nativeTeachers.title': 'مدرّسون ناطقون باللغة',
    'hero.nativeTeachers.description': 'مدرّسون محترفون لغتهم الأم هي الإنجليزية!',
    'hero.curriculum.title': 'منهج تعليمي منظم',
    'hero.curriculum.description': 'من الأساسيات حتى الاحتراف، خطوة بخطوة',
    'hero.certificates.title': 'شهادات إنجاز معتمدة',
    'hero.certificates.description': 'احصل على شهادة معتمدة عند إنهاء كل مستوى',
    'hero.community.title': 'مجتمع داعم',
    'hero.community.description': 'تفاعل مع طلاب مثلك وتدرّب معهم داخل المنصة',
    'hero.progress.title': 'تابع تقدمك',
    'hero.progress.description': 'لوحة تحكم ذكية تعرض لك مستواك، وكم بقي لك لتحقيق هدفك!',
    'hero.description': 'منصة تعليمية تشرح اللغة الإنجليزية بطريقة مبسطة ومباشرة باستخدام اللغة العربية، مصممة خصيصًا للمتحدثين بالعربية.',
    'hero.whyTitle': 'لماذا Arabic With English؟'
  }
};
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  toggleLanguage: () => {},
  t: (key: string) => key,
  isRTL: false
});
export const useLanguage = () => useContext(LanguageContext);
export const LanguageProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  // Check if user has a saved preference
  const getInitialLanguage = (): Language => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage) return savedLanguage;
    }
    return 'en';
  };
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const isRTL = language === 'ar';
  // Update the HTML dir attribute and localStorage when language changes
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    html.setAttribute('lang', language);
    // Save to localStorage
    localStorage.setItem('language', language);
  }, [language, isRTL]);
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'ar' : 'en');
  };
  // Simple translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };
  return <LanguageContext.Provider value={{
    language,
    toggleLanguage,
    t,
    isRTL
  }}>
      {children}
    </LanguageContext.Provider>;
};