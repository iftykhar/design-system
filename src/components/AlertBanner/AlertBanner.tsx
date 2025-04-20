import React from 'react';
import { AlertBannerProps } from './types';
import clsx from 'clsx';

export const AlertBanner: React.FC<AlertBannerProps> = ({
  type = 'info',
  message,
  dismissible = false,
  onDismiss,
}) => {
  const bgColor = {
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
    warning: 'bg-yellow-100 text-yellow-800',
  };

  return (
    <div
      role="alert"
      className={clsx(
        'w-full px-4 py-3 rounded-md flex items-center justify-between',
        bgColor[type]
      )}
    >
      <span>{message}</span>
      {dismissible && (
        <button
          onClick={onDismiss}
          aria-label="Dismiss alert"
          className="text-xl font-bold leading-none focus:outline-none"
        >
          &times;
        </button>
      )}
    </div>
  );
};
