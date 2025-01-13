import React from 'react';
import CheckboxField from './CheckboxField';

export default {
  title: 'Molecules/FormFields/CheckboxField',
  component: CheckboxField,
  parameters: {
    layout: 'padded',
  },
  args: {
    label: 'Terms and Conditions',
    helper: 'Please read and accept our terms',
  },
};

export const Default = {};

export const Required = {
  args: {
    label: 'Privacy Policy',
    labelProps: { size: "lg", weight: "bold", color: "primary" },
    required: true,
    helper: 'You must accept our privacy policy',
  },
};

export const Interactive = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <CheckboxField
      label="Newsletter"
      labelProps={{ size: "lg", weight: "bold", color: "primary" }}
      helper="Subscribe to our newsletter"
      checkboxProps={{ 
        label: `Checkbox is ${checked ? 'checked' : 'unchecked'}`,
        checked: checked, 
        onChange: (e) => setChecked(e.target.checked)
      }}
    />
  );
};

export const MultipleCheckboxes = () => {
  const [preferences, setPreferences] = React.useState({
    email: true,
    sms: false,
    phone: false
  });

  const handleChange = (key) => (e) => {
    setPreferences(prev => ({
      ...prev,
      [key]: e.target.checked
    }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginLeft: '1rem' }}>
        <CheckboxField
          checkboxProps={{ 
            label: "Email notifications",
            checked: preferences.email,
            onChange: handleChange('email')
          }}
        />
        <CheckboxField
          checkboxProps={{ 
            label: "SMS notifications",
            checked: preferences.sms,
            onChange: handleChange('sms')
          }}
        />
        <CheckboxField
          checkboxProps={{ 
            label: "Phone calls",
            checked: preferences.phone,
            onChange: handleChange('phone')
          }}
        />
      </div>
    </div>
  );
}; 