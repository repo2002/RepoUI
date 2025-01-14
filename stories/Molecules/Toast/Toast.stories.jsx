import React, { useState } from 'react';
import Toast from './Toast';
import { H4, P } from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

export default {
  title: 'Molecules/Toast',
  component: Toast,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    duration: {
        control: { type: 'number' },
    }
  },
};

const handleClose = () => {
  console.log('close');
  const toast = document.querySelector('.toast');
  if (toast) {
    const duration = parseInt(toast.getAttribute('data-duration')) || 0;
    if (duration === 0 || toast.querySelector('.toast__close')) {
      toast.remove();
    }
  }
};

export const Default = {
  render: () => (
    <Toast type="info" onClose>
      <H4 color="info" weight="bold">Simple Notification</H4>
      <P>This is a basic toast message</P>
    </Toast>
  )
};

export const WithLink = {
  render: () => (
    <Toast type="success" onClose={handleClose}>
      <H4 color="success" size="lg" weight="bold">Files Uploaded</H4>
      <P>Your files have been uploaded. <Link href="#">View files</Link></P>
    </Toast>
  )
};


export const ExpandableToast = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Toast type="info" onClose size="large"> 
      <div>
        <H4 color="info" size="lg" weight="bold">Update Available</H4>
        <P>A new version is available with these changes:</P>
        <div className={`toast__content-expandable ${isExpanded ? 'expanded' : ''}`}>
          <ul>
            <li>Improved performance with new caching system</li>
            <li>Bug fixes for mobile responsiveness</li>
            <li>New features including dark mode support</li>
            <li>Enhanced security measures</li>
            <li>Better accessibility support</li>
            <li>Updated documentation</li>
          </ul>
        </div>
        <button 
          className="toast__expand-button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>
        <Link href="#">Update now</Link>
      </div>
    </Toast>
  );
}; 