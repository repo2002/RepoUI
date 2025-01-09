import React from 'react';
import { H1, H2, H3, H4, H5, H6, Subtitle, Body, Caption, Label } from './Text';

export default {
  title: 'Atoms/Text',
  component: Body,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'normal', 'medium', 'bold'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'text-primary', 'text-secondary'],
    },
    animation: {
      control: { type: 'select' },
      options: ['fade', 'slide', 'zoom'],
    },
    fontType: {
      control: { type: 'select' },
      options: ['primary', 'system', 'fallback', 'mono', 'display'],
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
    },
    truncate: {
      control: { type: 'boolean' },
    },
  },
};

export const Default = {
  args: {
    children: 'Default Text',
    size: 'md',
    weight: 'normal',
    color: 'text-primary',
    align: 'left',
    truncate: false,
  },
};

// Typography Scale
export const TypographyScale = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <H1>Heading 1</H1>
    <H2>Heading 2</H2>
    <H3>Heading 3</H3>
    <H4>Heading 4</H4>
    <H5>Heading 5</H5>
    <H6>Heading 6</H6>
    <Subtitle>Subtitle Text</Subtitle>
    <Body>Body Text</Body>
    <Caption>Caption Text</Caption>
    <Label>Label Text</Label>
  </div>
);


// Complex Example
export const ComplexExample = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <div>
      <H1 color="primary" align="center">Welcome to Our Platform</H1>
      <Subtitle color="secondary" align="center">The best solution for your needs</Subtitle>
    </div>
    
    <div>
      <H2 color="primary">Key Features</H2>
      <Body size="lg">Here are some of our amazing features that you'll love:</Body>
    </div>

    <div>
      <H3 animation="slide">Documentation</H3>
      <Body>Start by reading our comprehensive documentation.</Body>
      <Caption color="secondary">Last updated: 2024</Caption>
    </div>
  </div>
); 