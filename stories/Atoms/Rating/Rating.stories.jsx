import React, { useState } from 'react';
import Rating from './Rating';

export default {
  title: 'Atoms/Rating',
  component: Rating,
  argTypes: {
    value: {
      control: {
        type: 'number',
        min: 0,
        max: 5,
        step: 0.5,
      },
    },
    max: {
      control: {
        type: 'number',
        min: 1,
        max: 10,
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    readOnly: {
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {
    value: 3.5,
    max: 5,
    size: 'md',
    readOnly: false,
  },
};

export const Interactive = () => {
  const [rating, setRating] = useState(0);
  
  return (
    <Rating 
      value={rating} 
      onChange={setRating}
      size="lg"
    />
  );
};

export const Sizes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
    <Rating value={4} size="sm" readOnly />
    <Rating value={4} size="md" readOnly />
    <Rating value={4} size="lg" readOnly />
  </div>
);

export const ReadOnly = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
    <Rating value={5} readOnly />
    <Rating value={4.5} readOnly />
    <Rating value={3} readOnly />
    <Rating value={2.5} readOnly />
    <Rating value={1} readOnly />
  </div>
); 