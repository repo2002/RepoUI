import React from 'react';
import SelectField from './SelectField';

export default {
  title: 'Molecules/FormFields/SelectField',
  component: SelectField,
  parameters: {
    layout: 'padded',
  },
  args: {
    label: 'Country',
    placeholder: 'Select a country',
    options: [
      { value: 'us', label: 'United States' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'fr', label: 'France' },
    ],
    helper: 'Choose your country',
  },
};

export const Default = {
    
};

export const Required = {
  args: {
    label: 'Language',
    required: true,
    helper: 'Choose your preferred language',
  },
};

export const Interactive = () => {
  const [value, setValue] = React.useState('');
  const [label, setLabel] = React.useState('');
  return (
    <>
    <SelectField
      label="Interactive Example"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      helper="Try selecting different options"
      options={[
        { value: 'us', label: 'United States' }, 
        { value: 'uk', label: 'United Kingdom' }, 
        { value: 'fr', label: 'France' }]}
    />
    {value && <div>Selected value: {value}</div>}
</>
  );
}; 