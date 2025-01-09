import React, { useState } from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'text' },
    },
  },
};

// Default checkbox
export const Default = {
  args: {
    label: 'Default Checkbox',
  },
};

// Sizes
export const Sizes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Checkbox size="small" label="Small Checkbox" />
    <Checkbox size="medium" label="Medium Checkbox" />
    <Checkbox size="large" label="Large Checkbox" />
  </div>
);

// States
export const States = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Checkbox label="Default Checkbox" />
    <Checkbox label="Checked Checkbox" checked />
    <Checkbox label="Disabled Checkbox" disabled />
    <Checkbox label="Disabled Checked Checkbox" disabled checked />
    <Checkbox label="Error Checkbox" error="This field is required" />
  </div>
);

// Controlled Checkbox
export const Controlled = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      label={`Checkbox is ${checked ? 'checked' : 'unchecked'}`}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
}; 