import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Mail, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
interface WaitlistFormProps {
  onSubmit?: (email: string) => void;
}
export const WaitlistForm = ({
  onSubmit
}: WaitlistFormProps) => {
  const {
    language
  } = useLanguage();
  const isRTL = language === 'ar';
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error(isRTL ? 'يرجى إدخال بريد إلكتروني صحيح' : 'Please enter a valid email address');
      }
      if (onSubmit) {
        await onSubmit(email);
      }
      setIsSubmitted(true);
      setEmail('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };
  return <div>
      <form id="waitlist-form" onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder={isRTL ? 'بريدك الإلكتروني' : 'Your email address'} icon={<Mail />} required className="mb-0" />
          <Button type="submit" isLoading={isLoading} withArrow>
            {isRTL ? 'سجّلني' : 'Join Waitlist'}
          </Button>
        </div>
        {error && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>}
      </form>
      {isSubmitted && <div className="mt-4 flex items-center justify-center gap-2 text-green-600 dark:text-green-400 animate-fade-in">
          <CheckCircle className="w-5 h-5" />
          <span>
            {isRTL ? 'تم التسجيل بنجاح!' : 'Successfully registered!'}
          </span>
        </div>}
    </div>;
};