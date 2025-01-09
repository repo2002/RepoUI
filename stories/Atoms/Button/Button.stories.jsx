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
  <div style={{ display: 'flex', gap: '1rem' }}>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="danger">Danger</Button>
  </div>
); 

export const IconButton = () => (
  <Button variant="primary" size="small">
    <FaPlus />
  </Button>
);

export const IconButtonRight = () => (
  <Button variant="primary" size="large">
    Button
    <FaPlus />
  </Button>
);

export const IconButtonLeft = () => (
  <Button variant="primary" size="small">
    <FaPlus />
    Button
  </Button>
);