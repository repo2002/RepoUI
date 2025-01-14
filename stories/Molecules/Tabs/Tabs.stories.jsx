import React, { useState } from 'react';
import Tabs from './Tabs';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import {H1, H2, H3, H4, H5, H6, P} from '../../Atoms/Text/Text';
import Checkbox  from '../../Atoms/Checkbox/Checkbox';

export default {
  title: 'Molecules/Tabs',
  component: Tabs,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'pills', 'underlined', ],
    },
    alignment: {
      control: 'select',
      options: ['start', 'center', 'end'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
};

const defaultTabs = [
  { id: 'home', icon: <FaHome /> , label: 'Home'},
  { id: 'profile', icon: <FaUser /> , label: 'Profile'},
  { id: 'settings', icon: <FaCog /> , label: 'Settings'},
];

export const Default = {
  args: {
    tabs: defaultTabs,
    variant: 'default',
    alignment: 'start',
    size: 'md',
  },
  render: (args) => (
    <Tabs {...args}>
      <div data-tab-id="home">Home Content</div>
      <div data-tab-id="profile">Profile Content</div>
      <div data-tab-id="settings">Settings Content</div>
    </Tabs>
  ),
};




export const VerticalWithContent = {
  render: () => {
    const [checkboxes, setCheckboxes] = useState({
      option1: false,
      option2: false
    });

    return (
      <Tabs
        tabs={[
          { id: 'Refael', label: 'Home' , icon: <FaHome />},
          { id: 'profile', label: 'Profile' , icon: <FaUser />},
          { id: 'settings', label: 'Settings' , icon: <FaCog />}
        ]}
        orientation="vertical"
        variant="pills"
        size="lg"
      >
        <div data-tab-id="Refael">
          <H3>Home</H3>
          <P>This is an example of a vertical tab with more complex content.</P>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
        </div>

        <div data-tab-id="profile">
          <H3>Profile</H3>
          <P>Profile content with a different layout.</P>
          <div style={{ padding: 'var(--spacing-md)', background: 'var(--color-black)' }}>
            <H1 color="error">Sample content box</H1>
          </div>
        </div>

        <div data-tab-id="settings">
          <H3>Settings</H3>
          <P>Settings panel with various options.</P>
          <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
            <Checkbox 
              label="Option 1" 
              checked={checkboxes.option1}
              onChange={(e) => setCheckboxes(prev => ({...prev, option1: e.target.checked}))}
            />
            <Checkbox 
              label="Option 2" 
              checked={checkboxes.option2}
              onChange={(e) => setCheckboxes(prev => ({...prev, option2: e.target.checked}))}
            />
          </form>
        </div>
      </Tabs>
    );
  },
};

export const IconOnly = {
  args: {
    tabs: [
      { id: 'home', icon: <FaHome />, ariaLabel: 'Home' },
      { id: 'profile', icon: <FaUser />, ariaLabel: 'Profile' },
      { id: 'settings', icon: <FaCog />, ariaLabel: 'Settings' },
    ],
    variant: 'pills',
  },
  render: (args) => (
    <Tabs {...args}>
      <div data-tab-id="home">Home Content</div>
      <div data-tab-id="profile">Profile Content</div>
      <div data-tab-id="settings">Settings Content</div>
    </Tabs>
  ),
};

