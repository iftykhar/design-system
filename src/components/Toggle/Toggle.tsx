import React from 'react';
import { ToggleProps } from './types';
import clsx from 'clsx';

export const Toggle: React.FC<ToggleProps> = ({
  id,
  label,
  checked,
  onChange,
  disabled = false,
  helperText,
  readOnly = false,
  className,
}) => {
  return (
    <div className={clsx('flex flex-col space-y-1', className)}>
      <label
        htmlFor={id}
        className={clsx(
          'inline-flex items-center cursor-pointer select-none',
          disabled && 'cursor-not-allowed opacity-50'
        )}
      >
        <span className="mr-2 text-sm font-medium text-gray-700">{label}</span>
        <button
          id={id}
          role="switch"
          aria-checked={checked}
          aria-readonly={readOnly}
          disabled={disabled}
          onClick={() => !disabled && !readOnly && onChange(!checked)}
          className={clsx(
            'relative inline-flex h-6 w-11 flex-shrink-0 rounded-full transition-colors focus:outline-none focus:ring-2',
            checked ? 'bg-blue-600' : 'bg-gray-200',
            disabled ? 'opacity-50' : 'focus:ring-offset-2 focus:ring-blue-500'
          )}
        >
          <span
            className={clsx(
              'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition-transform',
              checked ? 'translate-x-5' : 'translate-x-0'
            )}
          />
        </button>
      </label>
      {helperText && (
        <p className="ml-14 text-xs text-gray-500">{helperText}</p>
      )}
    </div>
  );
};
