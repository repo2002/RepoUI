import React from 'react';
import Card from './Card';
import { FaGlobe } from 'react-icons/fa';

export default {
  title: 'Molecules/Cards/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  args: {
    variant: 'medium',
    shadow: 'sm',
    radius: 'md',
    padding: 'md',
    title: 'Card Title',
    subtitle: 'Card Subtitle',
    content: 'This is the card content that can span multiple lines and show how text wraps inside the card component.',
  },
  argTypes: {
    preset: {
      control: 'select',
      options: ['default', '2', '3', '4'],
    },
    variant: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    shadow: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
    image: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    subtitle: {
      control: 'text',
    },
    content: {
      control: 'text',
    },
    tags: {
      control: 'object',
    },
  },
};

export const Default = {};



export const Examples = {
  args: {
    preset: '2',
    variant: 'large',
    shadow: 'md',
    radius: 'lg',
    padding: 'lg',
    
    title: 'Example Card',
    titleProps: {
      size: 'xl',
      weight: 'bold',
      color: 'primary'
    },
    
    subtitle: 'Amazing subtitle',
    subtitleProps: {
      size: 'lg',
      weight: 'medium',
      color: 'secondary'
    },
    
    quote: 'This is a quote inside the card.',
    quoteProps: {
      size: 'md',
      italic: true
    },
    
    content: 'This is an example card with a subtitle and a quote.',
    contentProps: {
      size: 'md',
      color: 'text'
    },
    
    image: 'https://picsum.photos/400/200',
    imageProps: {
      width: '100%',
      height: 200,
      fit: 'fill',
      shape: 'square',
      lazy: true
    },
    
    tags: [
      { label: 'Tag 1', variant: 'primary'},
      { label: 'Tag 2', variant: 'warning' },
      { label: 'Tag 3', variant: 'success' },
      { label: 'Tag 4', variant: 'error' },
    ],
    tagProps: {
      size: 'sm'
    },
    
    onClick: () => alert('Card clicked!'),
  },
};

export const ImageVariations = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Card
        variant="small"
        title="Tall Image"
        imageProps={{
          width: '100%',
          height: 300,
          fit: 'cover'
        }}
        image="https://picsum.photos/400/600"
      />
      <Card
        variant="small"
        title="Contained Image"
        imageProps={{
          width: '100%',
          height: 200,
          fit: 'contain'
        }}
        image="https://picsum.photos/400/200"
      />
      <Card
        variant="small"
        title="Rounded Image"
        imageProps={{
          width: '100%',
          height: 200,
          fit: 'cover',
          shape: 'rounded'
        }}
        image="https://picsum.photos/400/200"
      />
    </div>
  )
};