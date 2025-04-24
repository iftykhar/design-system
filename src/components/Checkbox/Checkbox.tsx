import React from 'react';
import { CheckboxProps } from './types';
import clsx from 'clsx';

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
  disabled = false,
  error,
  helperText,
  className,
}) => {
  return (
    <div className={clsx('flex flex-col', className)}>
      <div className="flex items-center">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          aria-invalid={!!error}
          className={clsx(
            'h-4 w-4 border rounded text-blue-600 focus:ring-2 transition',
            disabled && 'cursor-not-allowed opacity-50',
            error
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:ring-blue-500'
          )}
        />
        <label
          htmlFor={id}
          className={clsx(
            'ml-2 text-sm font-medium',
            disabled ? 'text-gray-400' : 'text-gray-700'
          )}
        >
          {label}
        </label>
      </div>

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
