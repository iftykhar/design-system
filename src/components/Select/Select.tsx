import React from 'react';
import { SelectProps } from './types';
import clsx from 'clsx';

export const Select: React.FC<SelectProps> = ({
  id,
  label,
  value,
  options,
  onChange,
  disabled = false,
  error,
  helperText,
  className,
}) => {
  return (
    <div className={clsx('flex flex-col', className)}>
      <label
        htmlFor={id}
        className={clsx('mb-1 text-sm font-medium', disabled ? 'text-gray-400' : 'text-gray-700')}
      >
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        disabled={disabled}
        aria-invalid={!!error}
    
        className={clsx(
            'rounded-md border px-3 py-2 text-sm shadow-sm transition focus:outline-none',
            error
              ? 'border-red-500 focus:ring-2 focus:ring-red-500'
              : 'border-gray-300 focus:ring-2 focus:ring-blue-500'
          )}
          
      >
        <option value="" disabled>
          -- Select --
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error ? (
        <span id={`${id}-error`} className="mt-1 text-xs text-red-600">
          {error}
        </span>
      ) : helperText ? (
        <span id={`${id}-helper`} className="mt-1 text-xs text-gray-500">
          {helperText}
        </span>
      ) : null}
    </div>
  );
};
