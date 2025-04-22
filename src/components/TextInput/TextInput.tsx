import React from 'react';
import { TextInputProps } from './type';
import clsx from 'clsx';

export const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  disabled = false,
  error,
  helperText,
  className,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={clsx(
          'rounded-md border px-3 py-2 text-sm focus:outline-none transition',
          disabled
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-white',
          error
            ? 'border-red-500 focus:ring-1 focus:ring-red-500'
            : 'border-gray-300 focus:ring-1 focus:ring-blue-500',
          className
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
      />
      {error ? (
        <span id={`${id}-error`} className="text-xs text-red-600">
          {error}
        </span>
      ) : helperText ? (
        <span id={`${id}-helper`} className="text-xs text-gray-500">
          {helperText}
        </span>
      ) : null}
    </div>
  );
};
