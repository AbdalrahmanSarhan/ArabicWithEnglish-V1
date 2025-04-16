import React from 'react';
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: 'lift' | 'glow' | 'border' | 'none';
}
export const Card = ({
  children,
  className = '',
  hoverEffect = 'none'
}: CardProps) => {
  const baseClasses = 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm';
  const hoverClasses = {
    lift: 'hover-lift transition-all duration-300',
    glow: 'hover:shadow-lg hover:border-primary-200 dark:hover:border-primary-800/30 transition-all duration-300',
    border: 'hover:border-primary-500 transition-all duration-300',
    none: ''
  };
  return <div className={`${baseClasses} ${hoverClasses[hoverEffect]} ${className}`}>
      {children}
    </div>;
};