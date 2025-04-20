import React, { useEffect } from 'react';
import { ToastProps } from './types';
import clsx from 'clsx';

export const Toast: React.FC<ToastProps> = ({
  type = 'info',
  message,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

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
        'fixed bottom-5 right-5 z-50 px-4 py-2 rounded-md shadow-lg',
        bgColor[type]
      )}
    >
      {message}
    </div>
  );
};
