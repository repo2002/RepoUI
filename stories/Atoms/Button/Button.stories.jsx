import React from 'react';
import Button from './Button';
import './Button.scss';
import { FaPlus } from 'react-icons/fa';

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
  },
};

export const Default = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
  },
};

export const Variants = () => (
  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
    {/* Variants */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>

    {/* Small Buttons */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Button variant="primary" size="small">Small</Button>
      <Button variant="primary" size="small" fullWidth>Small Full Width</Button>
      <Button variant="primary" size="small" disabled>Small Disabled</Button>
      <Button variant="primary" size="small" disabled fullWidth>Small Disabled Full Width</Button>
      <Button variant="primary" size="small" leftIcon={<FaPlus />}>Small with Left Icon</Button>
      <Button variant="primary" size="small" rightIcon={<FaPlus />}>Small with Right Icon</Button>
      <Button variant="primary" size="small" leftIcon={<FaPlus />} rightIcon={<FaPlus />}>Small with Both Icons</Button>
      <Button variant="primary" size="small" leftIcon={<FaPlus />} rightIcon={<FaPlus />} fullWidth>Small Icons Full Width</Button>
      <Button variant="primary" size="small" leftIcon={<FaPlus />} rightIcon={<FaPlus />} fullWidth disabled>Small Icons Full Width Disabled</Button>
    </div>

    {/* Medium Buttons */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Button variant="primary" size="medium">Medium</Button>
      <Button variant="primary" size="medium" fullWidth>Medium Full Width</Button>
      <Button variant="primary" size="medium" disabled>Medium Disabled</Button>
      <Button variant="primary" size="medium" disabled fullWidth>Medium Disabled Full Width</Button>
      <Button variant="primary" size="medium" leftIcon={<FaPlus />}>Medium with Left Icon</Button>
      <Button variant="primary" size="medium" rightIcon={<FaPlus />}>Medium with Right Icon</Button>
      <Button variant="primary" size="medium" leftIcon={<FaPlus />} rightIcon={<FaPlus />}>Medium with Both Icons</Button>
      <Button variant="primary" size="medium" leftIcon={<FaPlus />} rightIcon={<FaPlus />} fullWidth>Medium Icons Full Width</Button>
      <Button variant="primary" size="medium" leftIcon={<FaPlus />} rightIcon={<FaPlus />} fullWidth disabled>Medium Icons Full Width Disabled</Button>
    </div>

    {/* Large Buttons */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Button variant="primary" size="large">Large</Button>
      <Button variant="primary" size="large" fullWidth>Large Full Width</Button>
      <Button variant="primary" size="large" disabled>Large Disabled</Button>
      <Button variant="primary" size="large" disabled fullWidth>Large Disabled Full Width</Button>
      <Button variant="primary" size="large" leftIcon={<FaPlus />}>Large with Left Icon</Button>
      <Button variant="primary" size="large" rightIcon={<FaPlus />}>Large with Right Icon</Button>
      <Button variant="primary" size="large" leftIcon={<FaPlus />} rightIcon={<FaPlus />}>Large with Both Icons</Button>
      <Button variant="primary" size="large" leftIcon={<FaPlus />} rightIcon={<FaPlus />} fullWidth>Large Icons Full Width</Button>
      <Button variant="primary" size="large" leftIcon={<FaPlus />} rightIcon={<FaPlus />} fullWidth disabled>Large Icons Full Width Disabled</Button>
    </div>
  </div>
); 

