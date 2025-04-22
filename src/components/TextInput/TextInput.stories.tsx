import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Data Entry/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A basic text input component with label, helper text, error state, and accessibility features.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <TextInput
        id="email"
        label="Email"
        value={value}
        placeholder="you@example.com"
        onChange={(e) => setValue(e.target.value)}
        helperText="We’ll never share your email."
      />
    );
  },
};

export const Error: Story = {
  render: () => {
    const [value, setValue] = useState('test');
    return (
      <TextInput
        id="username"
        label="Username"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        error="This username is already taken"
      />
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <TextInput
      id="disabled"
      label="Disabled Field"
      value="Can't edit me"
      onChange={() => {}}
      disabled
    />
  ),
};
