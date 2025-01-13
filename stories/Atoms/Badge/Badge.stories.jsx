import React from 'react';
import Badge from './Badge';
// import { FaCheck, FaTimes, FaExclamation, FaInfo, FaStar } from 'react-icons/fa';

export default {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'primary',
        'secondary',
        'success',
        'warning',
        'error',
        'info',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    rounded: {
      control: { type: 'boolean' },
    },
  },
};

// Default badge
export const Default = {
  args: {
    children: 'Badge',
    variant: 'primary',
    size: 'medium',
    rounded: true,
  },
};

// Variants
export const Variants = () => (
  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
    <Badge variant="primary">Primary</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="warning">Warning</Badge>
    <Badge variant="error">Error</Badge>
    <Badge variant="info">Info</Badge>
  </div>
);



// Sizes
export const Sizes = () => (
  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
    <Badge size="small">Small</Badge>
    <Badge size="medium">Medium</Badge>
    <Badge size="large">Large</Badge>
  </div>
);

// // Rounded
// export const Rounded = () => (
//   <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
//     <Badge rounded>Rounded Badge</Badge>
//     <Badge rounded variant="success">Success</Badge>
//     <Badge rounded variant="error">Error</Badge>
//   </div>
// );

// // With Icons
// export const WithIcons = () => (
//   <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
//     <Badge icon={<FaCheck />} variant="success">Success</Badge>
//     <Badge icon={<FaTimes />} variant="error">Error</Badge>
//     <Badge icon={<FaExclamation />} variant="warning">Warning</Badge>
//     <Badge icon={<FaInfo />} variant="info">Info</Badge>
//     <Badge icon={<FaStar />} variant="primary">Featured</Badge>
//   </div>
// );

// Notification Example
export const NotificationExample = () => (
  <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column', alignItems: 'center' }}>
    <Badge size="small"  variant="error">3</Badge>
    <Badge size="medium" rounded variant="primary">99+</Badge>
    <Badge size="large" rounded={false} variant="success">New</Badge>
  </div>
); 