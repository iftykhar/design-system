import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Data Entry/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A native date input wrapped in a styled component.  
Supports label, helper text, disabled & error states, and proper ARIA attributes.
        `,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState('');
    return (
      <DatePicker
        id="start-date"
        label="Start Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        helperText="Select the project start date."
      />
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [date, setDate] = useState('2025-05-01');
    return (
      <DatePicker
        id="due-date"
        label="Due Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        error="Due date cannot be in the past."
      />
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <DatePicker
      id="disabled-date"
      label="Disabled Date"
      value="2025-06-15"
      onChange={() => {}}
      disabled
    />
  ),
};
