import React from 'react';
import { DatePickerProps } from './types';
import clsx from 'clsx';

export const DatePicker: React.FC<DatePickerProps> = ({
  id,
  label,
  value,
  onChange,
  disabled = false,
  error,
  helperText,
  className,
}) => (
  <div className={clsx('flex flex-col space-y-1', className)}>
    {label && (
      <label htmlFor={id} className={clsx(
        'text-sm font-medium',
        disabled ? 'text-gray-400' : 'text-gray-700'
      )}>
        {label}
      </label>
    )}

    <input
      id={id}
      type="date"
      value={value}
      onChange={onChange}
      disabled={disabled}
      aria-invalid={!!error}
      aria-describedby={
        error
          ? `${id}-error`
          : helperText
          ? `${id}-helper`
          : undefined
      }
      className={clsx(
        'rounded-md border px-3 py-2 text-sm focus:outline-none transition',
        disabled
          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
          : 'bg-white',
        error
          ? 'border-red-500 focus:ring-1 focus:ring-red-500'
          : 'border-gray-300 focus:ring-1 focus:ring-blue-500'
      )}
    />

    {error ? (
      <p id={`${id}-error`} className="text-xs text-red-600">
        {error}
      </p>
    ) : helperText ? (
      <p id={`${id}-helper`} className="text-xs text-gray-500">
        {helperText}
      </p>
    ) : null}
  </div>
);
