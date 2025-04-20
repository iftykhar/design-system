import React from 'react';
import { Typography } from './Typography';
import { TypographyVariant } from './types';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'paragraph', 'label', 'caption', 'helperText',
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

const variants: TypographyVariant[] = [
  'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'paragraph', 'label', 'caption', 'helperText',
];

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      {variants.map((v) => (
        <Typography key={v} variant={v}>
          {v.charAt(0).toUpperCase() + v.slice(1)} Example Text
        </Typography>
      ))}
    </div>
  ),
};

export const Playground: Story = {
  args: {
    variant: 'h1',
    children: 'This is a heading',
  },
};
