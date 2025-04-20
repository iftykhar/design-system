import React from 'react';
import { InputProps } from './types';
import clsx from 'clsx';

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className,
  ...props
}) => {
  const baseStyles = 'w-full px-3 py-2 border rounded-md focus:outline-none';
  const borderStyles = error
    ? 'border-red-500 focus:ring-red-500'
    : 'border-gray-300 focus:ring-indigo-500';

  return (
    <div className="space-y-1">
      {label && <label className="block text-sm font-medium">{label}</label>}
      <input
        className={clsx(baseStyles, borderStyles, className)}
        aria-invalid={!!error}
        {...props}
      />
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
};
