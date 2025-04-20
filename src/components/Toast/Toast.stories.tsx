import React from 'react';
import { Toast } from './Toast';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Info: Story = {
  args: {
    type: 'info',
    message: 'This is an info message',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    message: 'Operation completed successfully',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    message: 'Something went wrong!',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    message: 'Be careful with this action',
  },
};
