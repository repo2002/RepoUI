import React from 'react';
import Progress from './Progress';

export default {
  title: 'Atoms/Progress',
  component: Progress,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100 },
    },
    variant: {
      control: { type: 'select' },
      options: ['linear', 'circular'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: 'color',
    },
    thickness: {
      control: { type: 'number', min: 1, max: 10 },
    },
    showLabel: {
      control: 'boolean',
    },
  },
};

// Default progress
export const Default = {
  args: {
    value: 60,
    variant: 'linear',
    size: 'medium',
    showLabel: true,
  },
};

// Examples
export const Examples = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    {/* Linear Progress */}
    <Progress value={75} variant="linear" />
    <Progress 
      value={45} 
      variant="linear" 
      color="var(--color-success)"
      thickness={6} 
    />
    
    {/* Circular Progress */}
    <div style={{ display: 'flex', gap: '2rem' }}>
      <Progress value={33} variant="circular" size="small" />
      <Progress 
        value={66} 
        variant="circular" 
        color="var(--color-error)" 
      />
      <Progress 
        value={90} 
        variant="circular" 
        size="large"
        thickness={8}
      />
    </div>
  </div>
);

export const PasswordStrength = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '300px' }}>
    <Progress
      variant="strength"
      strength="very-weak"
      showLabel
    />
    
    <Progress
      variant="strength"
      strength="weak"
      showLabel
    />
    
    <Progress
      variant="strength"
      strength="ok"
      showLabel
    />
    
    <Progress
      variant="strength"
      strength="strong"
      showLabel
    />
    
    <Progress
      variant="strength"
      strength="very-strong"
      showLabel
    />
  </div>
); 