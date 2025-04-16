import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
  fullWidth?: boolean;
  withArrow?: boolean;
  children: React.ReactNode;
}
export const Button = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  isLoading = false,
  fullWidth = false,
  withArrow = false,
  children,
  className,
  ...props
}: ButtonProps) => {
  const {
    language
  } = useLanguage();
  const isRTL = language === 'ar';
  const variantClasses = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-md shadow-primary-500/10 dark:shadow-primary-500/5 hover:shadow-lg hover:shadow-primary-500/20 group relative overflow-hidden',
    secondary: 'bg-white dark:bg-dark-300 text-neutral-800 dark:text-white border border-neutral-200 dark:border-dark-100/50 hover:border-primary-200 dark:hover:border-primary-700/50 hover:bg-neutral-50 dark:hover:bg-dark-200',
    outline: 'bg-transparent border border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30',
    ghost: 'bg-transparent text-neutral-700 dark:text-neutral-300 hover:bg-primary-50 dark:hover:bg-primary-900/30'
  };
  const sizeClasses = {
    sm: 'text-sm px-3 py-1.5 rounded-lg',
    md: 'text-base px-4 py-2 rounded-lg',
    lg: 'text-lg px-6 py-3 rounded-xl'
  };
  const baseClasses = `font-medium transition-all duration-300 flex items-center justify-center gap-2 ${fullWidth ? 'w-full' : ''}`;
  return <button className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className || ''}`} disabled={isLoading || props.disabled} {...props}>
      {isLoading ? <>
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {isRTL ? 'جاري التحميل...' : 'Loading...'}
        </> : <>
          {icon && iconPosition === 'left' && icon}
          <span className="relative z-10">{children}</span>
          {icon && iconPosition === 'right' && icon}
          {withArrow && <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />}
          {variant === 'primary' && <span className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 dark:from-primary-500 dark:to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>}
        </>}
    </button>;
};