import React, { useState } from 'react';
import Tag from './Tag';

export default {
  title: 'Atoms/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'success', 'warning', 'error'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

// Default tag
export const Default = {
  args: {
    children: 'Tag',
    variant: 'default',
    size: 'medium',
  },
};

// Variants
export const Variants = () => (
  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
    <Tag>Default</Tag>
    <Tag variant="primary">Primary</Tag>
    <Tag variant="success">Success</Tag>
    <Tag variant="warning">Warning</Tag>
    <Tag variant="error">Error</Tag>
  </div>
);




// Interactive Example
export const InteractiveExample = () => {
  const [tags, setTags] = useState(['React', 'Vue', 'Angular', 'Svelte']);

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      {tags.map((tag, index) => (
        <Tag 
          key={tag} 
          variant="primary" 
          onRemove={() => removeTag(index)}
        >
          {tag}
        </Tag>
      ))}
    </div>
  );
};