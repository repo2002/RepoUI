import React from 'react';
import Toggle from './Toggle';

// For the example Theme Toggle (below)
import { FaMoon, FaSun } from 'react-icons/fa';

export default {
  title: 'Atoms/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
  },
};

export const Default = {
  args: {
    label: 'Toggle Theme',
    size: 'medium',
  },
};

export const Sizes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Toggle size="small" label="Small Toggle" />
    <Toggle size="medium" label="Medium Toggle" />
    <Toggle size="large" label="Large Toggle" />
  </div>
);

export const WithLabel = {
  args: {
    label: '🌙 Dark Mode',
    size: 'medium',
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Toggle',
    disabled: true,
  },
};



// Theme toggle example
export const ThemeToggle = () => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
    console.log('Toggle changed:', isChecked);
  };

  return (
    <Toggle
      checked={isChecked}
      onChange={handleChange}
      className="theme-toggle"
      disabled={false}
      iconLeft={isChecked ? <FaSun color="var(--color-white)" /> : <FaSun color="var(--color-primary)" />}
      iconRight={isChecked ? <FaMoon color="var(--color-primary)" /> : <FaMoon color="var(--color-warning)" />}
      size="small"
    />
  );
}; 