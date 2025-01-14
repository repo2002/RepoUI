import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../Atoms/Inputfields/Inputfield';

import './SearchBar.scss';

const SearchBar = ({
  placeholder = 'Search...',
  value,
  onChange,
  onSubmit,
  size = 'md',
  className,
  icon,
  children,
  ...props
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(value);
  };

  return (
    <form 
      className={`search-bar search-bar--${size} ${className || ''}`}
      onSubmit={handleSubmit}
      {...props}
    >
      <InputField
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        size={size}
        icon={icon}
      />
      {children}
    </form>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  icon: PropTypes.node,
  children: PropTypes.node,
};

export default SearchBar; 