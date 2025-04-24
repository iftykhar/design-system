// src/components/Radio/Radio.tsx
import React from 'react';
import { RadioProps } from './types';
import clsx from 'clsx';

export const Radio: React.FC<RadioProps> = ({
  name,
  options,
  selected,
  onChange,
  disabled = false,
  error,
  helperText,
  className,
}) => {
  return (
    <fieldset className={clsx('flex flex-col space-y-1', className)}>
      <legend className="sr-only">{name}</legend>
      <div className="flex flex-col space-y-2">
        {options.map((opt) => (
          <label
            key={opt.value}
            htmlFor={`${name}-${opt.value}`}
            className={clsx(
              'flex items-center space-x-2 cursor-pointer',
              disabled && 'cursor-not-allowed opacity-50'
            )}
          >
            <input
              type="radio"
              id={`${name}-${opt.value}`}
              name={name}
              value={opt.value}
              checked={selected === opt.value}
              onChange={() => onChange(opt.value)}
              disabled={disabled}
              className={clsx(
                'h-4 w-4 border focus:ring-2 transition',
                error
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              )}
            />
            <span className={disabled ? 'text-gray-400' : 'text-gray-700'}>
              {opt.label}
            </span>
          </label>
        ))}
      </div>
      {error ? (
        <p className="mt-1 text-xs text-red-600">{error}</p>
      ) : helperText ? (
        <p className="mt-1 text-xs text-gray-500">{helperText}</p>
      ) : null}
    </fieldset>
  );
};
