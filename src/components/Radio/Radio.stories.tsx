import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';
import { RadioOption } from './types';

const options: RadioOption[] = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' },
];

const meta: Meta<typeof Radio> = {
  title: 'Data Entry/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Radio** allows selection of a single option from a list.
- Uses \`fieldset\` and \`legend\` for grouping.
- Focus ring and error styles for accessibility.
- Supports disabled, error, and helperText states.
`,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  render: () => {
    const [sel, setSel] = useState('');
    return (
      <Radio
        name="example"
        options={options}
        selected={sel}
        onChange={setSel}
        helperText="Please choose one option"
      />
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [sel, setSel] = useState('');
    return (
      <Radio
        name="errorExample"
        options={options}
        selected={sel}
        onChange={setSel}
        error="Selection is required"
      />
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <Radio
      name="disabledExample"
      options={options}
      selected="b"
      onChange={() => {}}
      disabled
    />
  ),
};
