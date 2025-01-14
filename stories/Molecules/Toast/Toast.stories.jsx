import React from 'react';
import Toast from './Toast';

export default {
  title: 'Molecules/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Notification',
    message: 'This is a default toast message',
    type: 'info',
    duration: 5000,
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    duration: {
      control: 'number',
    },
  },
};

export const Default = {};

export const SimpleExample = {
  args: {
    type: 'success',
    title: 'File Uploaded',
    message: 'document.pdf has been uploaded successfully.',
    duration: 3000,
    tags: [
      { children: 'PDF', variant: 'secondary' },
      { children: '2.5MB', variant: 'info' }
    ],
    action: () => alert('View file clicked'),
    actionLabel: 'View File'
  },
};

export const ComplexExample = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
      <Toast
        type="error"
        title="Deploy Failed"
        message="The deployment to production failed due to build errors."
        duration={3000}
        tags={[
          { children: 'Production', variant: 'error' },
          { children: 'Deploy', variant: 'secondary' },
          { children: 'CI/CD', variant: 'info' }
        ]}
        action={() => alert('View logs clicked')}
        actionLabel="View Logs"
      />
      <Toast
        type="warning"
        title="Database Performance"
        message="High latency detected in database queries"
        tags={[
          { children: 'Database', variant: 'warning' },
          { children: 'Performance', variant: 'secondary' }
        ]}
        action={() => alert('View metrics clicked')}
        actionLabel="View Metrics"
      />
      <Toast
        type="success"
        title="Backup Completed"
        message="Weekly backup completed successfully"
        tags={[
          { children: 'Backup', variant: 'success' },
          { children: 'Weekly', variant: 'secondary' },
          { children: '1.2GB', variant: 'info' }
        ]}
        action={() => alert('View details clicked')}
        actionLabel="View Details"
      />
    </div>
  ),
}; 