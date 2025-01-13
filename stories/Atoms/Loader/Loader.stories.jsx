import React from 'react';
import Loader from './Loader';

export default {
  title: 'Atoms/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['spinner', 'dots', 'pulse', 'ring', 'bar'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: { type: 'color' },
    },
  },
};

// Default loader
export const Default = {
  args: {
    type: 'spinner',
    size: 'medium',
  },
};

// All Types
export const AllTypes = () => (
  <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
    <Loader type="spinner" />
    <Loader type="dots" />
    <Loader type="pulse" />
    <Loader type="ring" />
    <Loader type="bar" />
  </div>
);



// Usage Example
export const UsageExample = () => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '2rem',
    alignItems: 'center' 
  }}>
    <div style={{ 
      padding: 'var(--spacing-md)', 
      border: '1px solid var(--color-primary)',
      borderRadius: 'var(--radius-lg)',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    }}>
      <Loader size="small" />
      <span>Loading...</span>
    </div>

    <div style={{
      width: '200px',
      height: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'pink',
      
    }}>
      <Loader color="green" size="large" type="dots" />
    </div>
  </div>
); 