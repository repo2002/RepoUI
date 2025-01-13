import React from 'react';
import RadioField from './RadioField';

export default {
  title: 'Molecules/FormFields/RadioField',
  component: RadioField,
  parameters: {
    layout: 'padded',
  },
  args: {
    label: 'Gender',
    options: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
      { value: 'other', label: 'Other' },
    ],
    helper: 'Select your gender',
  },
};

export const Default = {
// default is the same as the args
};

export const Examples = () => {
    const genderOptions = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' },
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '700px' }}>
            <RadioField
                label="Gender"
                labelProps={{ size: "lg", weight: "bold", color: "primary"}}
                options={genderOptions}
            />
        </div>
    );
};

