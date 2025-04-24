import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const options = [
  { label: 'Apple', value: 'apple' },
  { label: 'Orange', value: 'orange' },
  { label: 'Banana', value: 'banana' },
];

const meta: Meta<typeof Select> = {
  title: 'Data Entry/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Select** component allows users to choose a single item from a list of options.
- Includes support for helper text, errors, and disabled state.
- Keyboard and screen-reader accessible.
`,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => {
    const [val, setVal] = useState('');
    return (
      <Select
        id="fruit"
        label="Choose a fruit"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        options={options}
        helperText="Select your favorite fruit"
      />
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [val, setVal] = useState('');
    return (
      <Select
        id="error-select"
        label="Fruit"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        options={options}
        error="This field is required"
      />
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <Select
      id="disabled-select"
      label="Fruit"
      value=""
      onChange={() => {}}
      options={options}
      disabled
    />
  ),
};
