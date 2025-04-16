import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';
import { Button } from '../ui/Button';
import { User, Mail, Send } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
}
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
export const ContactForm = ({
  onSubmit
}: ContactFormProps) => {
  const {
    language
  } = useLanguage();
  const isRTL = language === 'ar';
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    try {
      if (onSubmit) {
        await onSubmit(formData);
      }
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return <form onSubmit={handleSubmit} className="space-y-4">
      <Input label={isRTL ? 'الاسم' : 'Name'} name="name" value={formData.name} onChange={handleChange} icon={<User />} placeholder={isRTL ? 'أدخل اسمك' : 'Enter your name'} required />
      <Input label={isRTL ? 'البريد الإلكتروني' : 'Email'} name="email" type="email" value={formData.email} onChange={handleChange} icon={<Mail />} placeholder={isRTL ? 'أدخل بريدك الإلكتروني' : 'Enter your email'} required />
      <TextArea label={isRTL ? 'الرسالة' : 'Message'} name="message" value={formData.message} onChange={handleChange} placeholder={isRTL ? 'اكتب رسالتك هنا' : 'Write your message here'} rows={4} required />
      <Button type="submit" fullWidth isLoading={isLoading} icon={<Send className="w-4 h-4" />}>
        {isRTL ? 'إرسال الرسالة' : 'Send Message'}
      </Button>
    </form>;
};