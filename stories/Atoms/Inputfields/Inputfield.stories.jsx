import React, { useState } from 'react';
import Input from './Inputfield';
import { FaSearch, FaUser, FaLock, FaEnvelope, FaPhone } from 'react-icons/fa';

export default {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number', 'search', 'tel', 'url', 'date', 'time', 'datetime-local', 'month', 'week', 'file', 'hidden'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'text' },
    },
    success: {
      control: { type: 'boolean' },
    },
  },
};


// Default Input
export const Default = {
  args: {
    placeholder: 'Enter text...',
    type: 'text',
    size: 'medium',
  },
};

// Input Types
export const Types = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Input type="text" placeholder="Text input" />
    <Input type="password" placeholder="Password input" />
    <Input type="email" placeholder="Email input" />
    <Input type="number" placeholder="Number input" />
    <Input type="search" placeholder="Search input" />
    <Input type="tel" placeholder="Tel input" />
    <Input type="url" placeholder="Url input" />
    <Input type="date" placeholder="Date input" />
    <Input type="time" placeholder="Time input" />
    <Input type="datetime-local" placeholder="Datetime input" />
    <Input type="month" placeholder="Month input" />
    <Input type="week" placeholder="Week input" />
    <Input type="file" placeholder="File input" />
  </div>
);



// States
export const States = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Input placeholder="Normal input" />
    <Input placeholder="Disabled input" disabled />
    <Input placeholder="Error input" error="This field is required" />
    <Input placeholder="Success input" success />
  </div>
);



// Example Input
export const Example = () => {
  const [value, setValue] = useState('');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Name"
      icon={<FaUser />}
    />

    <Input
      value={value}
      type="email"
      onChange={(e) => setValue(e.target.value)}
      placeholder="Email"
      icon={<FaEnvelope />}
    />
    <Input
      value={value}
      type="password"
      onChange={(e) => setValue(e.target.value)}
      placeholder="Password"
      icon={<FaLock />}
    />
    <Input
      type="password"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Confirm Password"
      disabled={true}
      icon={<FaLock />}
    />
    <Input
      type="tel"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Phone"
      icon={<FaPhone />}
    />
    </div>
    
  );
}; 