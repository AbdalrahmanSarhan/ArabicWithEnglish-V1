import React, { cloneElement } from 'react';
interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  icon?: React.ReactNode;
  error?: string;
  fullWidth?: boolean;
}
export const TextArea = ({
  label,
  icon,
  error,
  fullWidth = true,
  className = '',
  ...props
}: TextAreaProps) => {
  return <div className={`${fullWidth ? 'w-full' : ''} mb-4`}>
      {label && <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>}
      <div className="relative">
        {icon && <div className="absolute top-3 left-3 flex items-center pointer-events-none">
            {cloneElement(icon as React.ReactElement, {
          className: 'h-5 w-5 text-neutral-400 dark:text-neutral-500'
        })}
          </div>}
        <textarea className={`${icon ? 'pl-10' : 'pl-4'} w-full px-4 py-2 rounded-lg bg-white dark:bg-dark-300/50 border border-neutral-200 dark:border-dark-100/30 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent transition-all ${className}`} {...props} />
      </div>
      {error && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>}
    </div>;
};