import React from 'react';
import Link from './Link';
import { FaExternalLinkAlt, FaDownload, FaGithub } from 'react-icons/fa';

export default {
  title: 'Atoms/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    external: {
      control: { type: 'boolean' },
    },
    underline: {
      control: { type: 'boolean' },
    },
    color: {
        control: { type: 'color' },
      },
  },
};

// Default link
export const Default = {
  args: {
    children: 'Default Link',
    href: '#',
    size: 'medium',
  },
};


// Sizes
export const Sizes = () => (
  <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
    <Link href="#" size="small">Small Link</Link>
    <Link href="#" size="medium">Medium Link</Link>
    <Link href="#" size="large">Large Link</Link>
  </div>
);

// Colors
export const Examples = () => (
  <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
    <Link href="#" color="red" size="large">Red Link</Link>
    <Link href="#" color="pink" disabled={true}>Pink Link</Link>
    <Link href="#" color="orange" underline={false}>Orange Link</Link>

    <Link href="https://example.com" size="small" external>
    Visit Example
    </Link>


    <Link href="https://example.com" external color="blue">
    Visit Example
    </Link>
  </div>
);  