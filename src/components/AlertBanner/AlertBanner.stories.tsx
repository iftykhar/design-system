import React from 'react';
import { AlertBanner } from './AlertBanner';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AlertBanner> = {
  title: 'Components/AlertBanner',
  component: AlertBanner,
};

export default meta;
type Story = StoryObj<typeof AlertBanner>;

export const Info: Story = {
  args: {
    type: 'info',
    message: 'This is an info banner',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    message: 'Operation was successful!',
  },
};

export const ErrorDismissible: Story = {
  args: {
    type: 'error',
    message: 'Something went wrong.',
    dismissible: true,
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    message: 'This might have side effects',
  },
};
