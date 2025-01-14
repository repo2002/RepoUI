import React from 'react';
import Dropdown from './Dropdown';
import { FaUser } from 'react-icons/fa';
import Button from '../../Atoms/Button/Button';
import { P } from '../../Atoms/Text/Text';

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
    trigger: {
      control: 'text',
    },
    openOnHover: {
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {
    trigger: 'Click me',
    variant: 'horizontal',
    openOnHover: false,
    children: (
      <div style={{ padding: 'var(--spacing-md)' }}>
        <P>Dropdown content</P>
      </div>
    ),
  },
};

export const HorizontalDropdown = () => (
  <Dropdown trigger="Menu">
    <div>
      <P>Custom content goes here</P>
      <Button variant="primary" size="small">Action</Button>
    </div>
  </Dropdown>
);

export const VerticalDropdown = () => (
  <Dropdown trigger="Submenu" variant="vertical">
    <div>
      <P>Nested content</P>
      <Button variant="primary" size="small" >Action</Button>
    </div>
  </Dropdown>
);