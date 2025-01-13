import React from 'react';
import Toggle from './Toggle';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../../../hooks/useTheme';

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

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Toggle
      checked={isDark}
      onChange={toggleTheme}
      className="theme-toggle"
      iconLeft={<FaSun color={isDark ? 'var(--color-white)' : 'var(--color-primary)'} />}
      iconRight={<FaMoon color={isDark ? 'var(--color-primary)' : 'var(--color-warning)'} />}
      label="Theme Toggle"
    />
  );
}; 