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
    content: isRTL ? 'باستخدام منصتنا، أنت توافق على الامتثال لجميع القوانين المعمول بها واستخدام الخدمة بشكل مسؤول. يجب عليك الامتناع عن أي نشاط قد يضر بالمنصة أو المستخدمين الآخرين.' : 'By using our platform, you agree to comply with all applicable laws and use the service responsibly. You must refrain from any activity that may harm the platform or other users.'
  }, {
    icon: <Users className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
    title: isRTL ? 'حسابات المستخدمين' : 'User Accounts',
    content: isRTL ? 'أنت مسؤول عن الحفاظ على سرية معلومات حسابك وجميع الأنشطة التي تحدث تحت حسابك. يجب إبلاغنا فورًا عن أي استخدام غير مصرح به لحسابك.' : 'You are responsible for maintaining the confidentiality of your account information and all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.'
  }, {
    icon: <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
    title: isRTL ? 'الملكية الفكرية' : 'Intellectual Property',
    content: isRTL ? 'جميع المحتوى على المنصة محمي بموجب حقوق النشر والملكية الفكرية. لا يجوز نسخ أو توزيع أو تعديل المحتوى دون إذن صريح منا.' : 'All content on the platform is protected by copyright and intellectual property rights. Content may not be copied, distributed, or modified without our express permission.'
  }, {
    icon: <AlertCircle className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
    title: isRTL ? 'إنهاء الخدمة' : 'Service Termination',
    content: isRTL ? 'نحتفظ بالحق في إنهاء أو تعليق حسابك في حالة انتهاك هذه الشروط. في حالة الإنهاء، سيتم إخطارك عبر البريد الإلكتروني المسجل.' : 'We reserve the right to terminate or suspend your account in case of violation of these terms. In case of termination, you will be notified via your registered email.'
  }];
  return <div className="min-h-screen bg-gradient-to-br from-light-100 via-light-200 to-light-300 dark:from-dark-100 dark:via-dark-200 dark:to-dark-300" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 mb-6 sm:mb-8 text-primary-600 dark:text-primary-400 hover:underline">
            <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
            <span className="text-sm sm:text-base">
              {isRTL ? 'العودة إلى الصفحة الرئيسية' : 'Back to home'}
            </span>
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-400 dark:to-primary-500">
            {isRTL ? 'شروط الخدمة' : 'Terms of Service'}
          </h1>
          <div className="bg-white/80 dark:bg-dark-200/50 backdrop-blur-lg rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl">
            <div className="space-y-6 sm:space-y-8">
              {sections.map((section, index) => <div key={index} className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="p-3 h-fit rounded-xl bg-primary-50 dark:bg-primary-900/30 sm:mt-0">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-white">
                      {section.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      {section.content}
                    </p>
                  </div>
                </div>)}
            </div>
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                {isRTL ? 'تم تحديث شروط الخدمة هذه في 15 مايو 2025. باستخدام خدماتنا، فإنك توافق على هذه الشروط. نحتفظ بالحق في تحديث هذه الشروط عند الضرورة.' : 'These terms of service were last updated on May 15, 2025. By using our services, you agree to these terms. We reserve the right to update these terms when necessary.'}
              </p>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 text-center flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/privacy" className="text-sm sm:text-base text-primary-600 dark:text-primary-400 hover:underline">
              {isRTL ? 'قراءة سياسة الخصوصية' : 'Read our Privacy Policy'}
            </Link>
            <span className="hidden sm:inline text-gray-400">|</span>
            <Link to="/contact" className="text-sm sm:text-base text-primary-600 dark:text-primary-400 hover:underline">
              {isRTL ? 'اتصل بنا' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </div>
    </div>;
};