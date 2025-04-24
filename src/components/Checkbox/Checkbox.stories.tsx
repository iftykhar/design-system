import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Data Entry/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Checkbox** allows users to select one or more options from a set. 
- Uses \`aria-invalid\` when in error state.
- Focused state uses a 2-px ring for accessibility.
- Supports disabled, error, and helperText.
`,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

/** Default unchecked with helper text */
export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        id="agree"
        label="I agree to the terms"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        helperText="You must agree before submitting."
      />
    );
  },
};

/** Pre-checked state */
export const Checked: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return (
      <Checkbox
        id="subscribe"
        label="Subscribe to newsletter"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
};

/** Disabled state */
export const Disabled: Story = {
  render: () => (
    <Checkbox
      id="disabled"
      label="Cannot change this"
      checked={false}
      onChange={() => {}}
      disabled
    />
  ),
};

/** Error state with message */
export const Error: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        id="policy"
        label="Accept policy"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        error="You must accept the policy"
      />
    );
  },
};
