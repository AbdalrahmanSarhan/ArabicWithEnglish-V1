import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Book, Users, Award, AlertCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
export const TermsPage = () => {
  const {
    language
  } = useLanguage();
  const isRTL = language === 'ar';
  const sections = [{
    icon: <Book className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
    title: isRTL ? 'استخدام المنصة' : 'Platform Usage',
    content: isRTL ? 'باستخدام منصتنا، أنت توافق على الامتثال لجميع القوانين المعمول بها واستخدام الخدمة بشكل مسؤول.' : 'By using our platform, you agree to comply with all applicable laws and use the service responsibly.'
  }, {
    icon: <Users className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
    title: isRTL ? 'حسابات المستخدمين' : 'User Accounts',
    content: isRTL ? 'أنت مسؤول عن الحفاظ على سرية معلومات حسابك وجميع الأنشطة التي تحدث تحت حسابك.' : 'You are responsible for maintaining the confidentiality of your account information and all activities that occur under your account.'
  }, {
    icon: <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
    title: isRTL ? 'الملكية الفكرية' : 'Intellectual Property',
    content: isRTL ? 'جميع المحتوى على المنصة محمي بموجب حقوق النشر والملكية الفكرية.' : 'All content on the platform is protected by copyright and intellectual property rights.'
  }, {
    icon: <AlertCircle className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
    title: isRTL ? 'إنهاء الخدمة' : 'Service Termination',
    content: isRTL ? 'نحتفظ بالحق في إنهاء أو تعليق حسابك في حالة انتهاك هذه الشروط.' : 'We reserve the right to terminate or suspend your account in case of violation of these terms.'
  }];
  return <div className="min-h-screen bg-gradient-to-br from-light-100 via-light-200 to-light-300 dark:from-dark-100 dark:via-dark-200 dark:to-dark-300">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 mb-8 text-primary-600 dark:text-primary-400 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            {isRTL ? 'العودة إلى الصفحة الرئيسية' : 'Back to home'}
          </Link>
          <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-400 dark:to-primary-500">
            {isRTL ? 'شروط الخدمة' : 'Terms of Service'}
          </h1>
          <div className="bg-white/80 dark:bg-dark-200/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
            <div className="space-y-8">
              {sections.map((section, index) => <div key={index} className="flex gap-6">
                  <div className="p-3 h-fit rounded-xl bg-primary-50 dark:bg-primary-900/30">
                    {section.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                      {section.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      {section.content}
                    </p>
                  </div>
                </div>)}
            </div>
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {isRTL ? 'تم تحديث شروط الخدمة هذه في 15 مايو 2025. باستخدام خدماتنا، فإنك توافق على هذه الشروط.' : 'These terms of service were last updated on May 15, 2025. By using our services, you agree to these terms.'}
              </p>
            </div>
          </div>
          <div className="mt-8 text-center flex flex-col md:flex-row justify-center gap-4">
            <Link to="/privacy" className="text-primary-600 dark:text-primary-400 hover:underline">
              {isRTL ? 'قراءة سياسة الخصوصية' : 'Read our Privacy Policy'}
            </Link>
            <span className="hidden md:inline text-gray-400">|</span>
            <Link to="/contact" className="text-primary-600 dark:text-primary-400 hover:underline">
              {isRTL ? 'اتصل بنا' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </div>
    </div>;
};