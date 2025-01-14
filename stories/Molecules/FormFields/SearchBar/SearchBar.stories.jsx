import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Button from '../../../Atoms/Button/Button';
import { FaSearch } from 'react-icons/fa';

export default {
  title: 'Molecules/FormFields/SearchBar',
  component: SearchBar,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export const Default = {
  render: (args) => (
    <SearchBar 
      {...args}
      icon={<FaSearch />}
    >
      <Button type="submit" variant="primary">
        Search
      </Button>
    </SearchBar>
  ),
};

export const Interactive = () => {
  const [value, setValue] = useState('');

  const handleSubmit = (searchValue) => {
    alert(`Searching for: ${searchValue}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
      <SearchBar 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onSubmit={handleSubmit}
        icon={<FaSearch />}
      >
        <Button type="submit" variant="primary">
          Search
        </Button>
      </SearchBar>
      
      {value && (
        <div style={{ color: 'var(--color-text-secondary)' }}>
          Current search term: {value}
        </div>
      )}
    </div>
  );
};
