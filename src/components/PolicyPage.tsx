import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, Lock, Eye, FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
export const PolicyPage = () => {
  const {
    language
  } = useLanguage();
  const isRTL = language === 'ar';
  const sections = [{
    icon: <Shield className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
    title: isRTL ? 'جمع المعلومات' : 'Information Collection',
    content: isRTL ? 'نحن نجمع المعلومات الشخصية التي تقدمها لنا طواعية عند التسجيل في موقعنا، بما في ذلك اسمك وعنوان بريدك الإلكتروني وتفضيلات التعلم الخاصة بك.' : 'We collect personal information that you voluntarily provide to us when registering on our website, including your name, email address, and learning preferences.'
  }, {
    icon: <Lock className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
    title: isRTL ? 'حماية البيانات' : 'Data Protection',
    content: isRTL ? 'نحن نستخدم تقنيات تشفير متقدمة لحماية معلوماتك الشخصية ونتبع أفضل ممارسات الأمان في الصناعة. نحن نلتزم بحماية خصوصيتك وأمان بياناتك.' : 'We use advanced encryption technologies to protect your personal information and follow industry best practices for security. We are committed to protecting your privacy and data security.'
  }, {
    icon: <Eye className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
    title: isRTL ? 'استخدام المعلومات' : 'Information Usage',
    content: isRTL ? 'نستخدم معلوماتك لتحسين تجربة التعلم الخاصة بك وتخصيص المحتوى وفقًا لاحتياجاتك. نحن لا نشارك معلوماتك الشخصية مع أي طرف ثالث دون موافقتك.' : 'We use your information to improve your learning experience and customize content according to your needs. We do not share your personal information with any third party without your consent.'
  }, {
    icon: <FileText className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
    title: isRTL ? 'حقوقك' : 'Your Rights',
    content: isRTL ? 'لديك الح�� في الوصول إلى بياناتك الشخصية وتصحيحها وحذفها في أي وقت. يمكنك أيضًا طلب نسخة من بياناتك أو الاعتراض على معالجتها.' : 'You have the right to access, correct, and delete your personal data at any time. You can also request a copy of your data or object to its processing.'
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
            {isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}
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
                {isRTL ? 'تم تحديث سياسة الخصوصية هذه في 15 مايو 2025. نحتفظ بالحق في تغيير هذه السياسة في أي وقت. سيتم إخطارك بأي تغييرات جوهرية عبر البريد الإلكتروني أو من خلال إشعار على موقعنا.' : 'This privacy policy was last updated on May 15, 2025. We reserve the right to change this policy at any time. You will be notified of any significant changes via email or through a notice on our website.'}
              </p>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 text-center">
            <Link to="/terms" className="text-sm sm:text-base text-primary-600 dark:text-primary-400 hover:underline">
              {isRTL ? 'قراءة شروط الخدمة' : 'Read our Terms of Service'}
            </Link>
          </div>
        </div>
      </div>
    </div>;
};