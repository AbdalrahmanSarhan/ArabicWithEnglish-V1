import React from 'react';
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'dark' | 'gradient' | 'none';
  paddingY?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}
export const Section = ({
  children,
  className = '',
  background = 'none',
  paddingY = 'md'
}: SectionProps) => {
  const backgroundClasses = {
    white: 'bg-white dark:bg-gray-800',
    light: 'bg-gray-50 dark:bg-gray-900',
    dark: 'bg-gray-900 dark:bg-black text-white',
    gradient: 'bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800',
    none: ''
  };
  const paddingClasses = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24'
  };
  return <section className={`w-full ${backgroundClasses[background]} ${paddingClasses[paddingY]} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>;
};