import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, MessageCircle, Camera, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { ContactForm, ContactFormData } from './forms/ContactForm';
export const ContactPage = () => {
  const {
    language
  } = useLanguage();
  const isRTL = language === 'ar';
  const handleSubmit = (data: ContactFormData) => {
    // Handle form submission
    console.log('Form submitted:', data);
  };
  const contactInfo = [{
    icon: <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
    title: isRTL ? 'البريد الإلكتروني' : 'Email',
    content: 'contact@arabicwithenglish.com'
  }, {
    icon: <Phone className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
    title: isRTL ? 'الهاتف' : 'Phone',
    content: '+962 (779) 58-770'
  }, {
    icon: <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
    title: isRTL ? 'العنوان' : 'Address',
    content: isRTL ? 'عمان, الاردن' : 'Amman, Jordan'
  }];
  const socialMedia = [{
    name: isRTL ? 'انستجرام' : 'Instagram',
    icon: <Instagram className="w-6 h-6" />,
    url: 'https://www.instagram.com/arabicwithenglish/',
    color: 'bg-gradient-to-r from-purple-500 to-pink-500',
    textColor: 'text-white'
  }, {
    name: isRTL ? 'فيسبوك' : 'Facebook',
    icon: <Facebook className="w-6 h-6" />,
    url: 'https://www.facebook.com/arabicwithenglish',
    color: 'bg-blue-600',
    textColor: 'text-white'
  }, {
    name: isRTL ? 'يوتيوب' : 'YouTube',
    icon: <Youtube className="w-6 h-6" />,
    url: 'https://www.youtube.com/arabicwithenglish',
    color: 'bg-red-600',
    textColor: 'text-white'
  }, {
    name: isRTL ? 'تيك توك' : 'TikTok',
    icon: <MessageCircle className="w-6 h-6" />,
    url: 'https://www.tiktok.com/@arabicwithenglish',
    color: 'bg-black',
    textColor: 'text-white'
  }, {
    name: isRTL ? 'سناب شات' : 'Snapchat',
    icon: <Camera className="w-6 h-6" />,
    url: 'https://www.snapchat.com/add/arabicwithenglish',
    color: 'bg-yellow-400',
    textColor: 'text-black'
  }];
  return <Section background="gradient" paddingY="xl" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 mb-6 sm:mb-8 text-primary-600 dark:text-primary-400 hover:underline">
          <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          <span className="text-sm sm:text-base">
            {isRTL ? 'العودة إلى الصفحة الرئيسية' : 'Back to home'}
          </span>
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-400 dark:to-primary-500">
          {isRTL ? 'اتصل بنا' : 'Contact Us'}
        </h1>
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <Card>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900 dark:text-white">
              {isRTL ? 'معلومات التواصل' : 'Contact Information'}
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => <div key={index} className="flex items-center gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-xl bg-primary-50 dark:bg-primary-900/30">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
                      {info.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-900 dark:text-white">
                      {info.content}
                    </p>
                  </div>
                </div>)}
            </div>
          </Card>
          <Card>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900 dark:text-white">
              {isRTL ? 'أرسل لنا رسالة' : 'Send us a message'}
            </h2>
            <ContactForm onSubmit={handleSubmit} />
          </Card>
        </div>
        <Card>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center text-gray-900 dark:text-white">
            {isRTL ? 'تابعنا على وسائل التواصل الاجتماعي' : 'Follow Us on Social Media'}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            {socialMedia.map((platform, index) => <a key={index} href={platform.url} target="_blank" rel="noopener noreferrer" className={`${platform.color} ${platform.textColor} rounded-xl p-3 sm:p-4 flex flex-col items-center gap-1 sm:gap-2 transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
                {platform.icon}
                <span className="font-medium text-xs sm:text-sm">
                  {platform.name}
                </span>
              </a>)}
          </div>
        </Card>
      </div>
    </Section>;
};