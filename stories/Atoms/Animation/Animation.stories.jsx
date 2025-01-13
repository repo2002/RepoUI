import React from 'react';
import Animation from './Animation';
import Badge from '../Badge/Badge';
import Tag from '../Tag/Tag';
import './Animation.scss';

export default {
  title: 'Atoms/Animation',
  component: Animation,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['bounce', 'fade-in', 'slide-in', 'pulse', 'spin', 'shake', 'wobble'],
    },
    speed: {
      control: { type: 'select' },
      options: ['fast', 'slow'],
    },
    delay: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    repeat: {
      control: { type: 'select' },
      options: ['infinite', 'once', '2', '3'],
    },
  },
};

// Default story with controls
export const Default = {
  args: {
    type: 'bounce',
    speed: 'slow',
    delay: 'small',
    repeat: '3',
    children: <Badge>Animated Badge</Badge>,
  },
}; 

// Real World Example
export const NotificationExample = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Animation type="slide-in" speed="slow" repeat="3">
      <Badge variant="error">3 new messages</Badge>
    </Animation>
    
    <Animation type="fade-in" delay="small" speed="slow" repeat="once">
      <Tag variant="success" onRemove={() => {}}>
        Task completed
      </Tag>
    </Animation>
    
    <Animation type="bounce" repeat="infinite">
      <Badge variant="warning">Updates available</Badge>
    </Animation>
    
    <Animation type="wobble" repeat="2">
      <Badge variant="info">New feature added</Badge>
    </Animation>
  </div>
);