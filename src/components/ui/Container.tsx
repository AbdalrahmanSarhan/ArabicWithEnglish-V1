import React, { Component } from 'react';
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  fullWidth?: boolean;
}
export const Container = ({
  children,
  className = '',
  as: Component = 'div',
  fullWidth = false
}: ContainerProps) => {
  return <Component className={`w-full ${fullWidth ? 'px-4 sm:px-6 lg:px-8' : 'container mx-auto px-4 sm:px-6 lg:px-8'} ${className}`}>
      {children}
    </Component>;
};