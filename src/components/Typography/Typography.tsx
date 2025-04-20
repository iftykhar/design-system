import React from 'react';
import { TypographyProps } from './types';
import clsx from 'clsx';

const baseStyles: Record<string, string> = {
  h1: 'text-4xl font-bold leading-tight',
  h2: 'text-3xl font-semibold leading-snug',
  h3: 'text-2xl font-semibold',
  h4: 'text-xl font-medium',
  h5: 'text-lg font-medium',
  h6: 'text-base font-medium',
  paragraph: 'text-base leading-relaxed',
  label: 'text-sm font-medium uppercase tracking-wide',
  caption: 'text-xs text-gray-500',
  helperText: 'text-sm text-gray-600 italic',
};

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className,
}) => {
  const tag =
    variant === 'paragraph'
      ? 'p'
      : variant === 'helperText'
      ? 'small'
      : variant === 'caption'
      ? 'span'
      : variant === 'label'
      ? 'label'
      : variant; // h1–h6

  const Component = tag as React.ElementType;

  return (
    <Component className={clsx(baseStyles[variant], className)}>
      {children}
    </Component>
  );
};
