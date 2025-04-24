import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Data Entry/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component:
          'A binary switch component with ARIA support, keyboard navigation, and theming-ready styling.',
      },
    },
  },
};
export default meta;

export const Default: StoryFn = () => {
  const [on, setOn] = useState(false);
  return (
    <Toggle
      id="toggle-default"
      label="Enable feature"
      checked={on}
      onChange={setOn}
      helperText="Turn this on to activate the feature"
    />
  );
};

export const Checked: StoryFn = () => {
  const [on, setOn] = useState(true);
  return <Toggle id="toggle-checked" label="Checked" checked={on} onChange={setOn} />;
};

export const Disabled: StoryFn = () => (
  <Toggle
    id="toggle-disabled"
    label="Disabled"
    checked={false}
    onChange={() => {}}
    disabled
  />
);

export const ReadOnly: StoryFn = () => (
  <Toggle
    id="toggle-readonly"
    label="Read Only"
    checked={true}
    onChange={() => {}}
    readOnly
  />
);
