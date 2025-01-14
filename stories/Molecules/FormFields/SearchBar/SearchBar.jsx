import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../Atoms/Inputfields/Inputfield';
import Button from '../../../Atoms/Button/Button';
import Icon from '../../Atoms/Icon/Icon';
import './SearchBar.scss';

const SearchBar = ({
  value,
  onChange,
  onSubmit,
  placeholder = 'Search...',
  variant = 'default',
  showButton = true,
  clearable = true,
  loading = false,
  className,
  ...props
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(value);
  };

  const handleClear = () => {
    onChange?.('');
  };

  return (
    <form 
      className={`search-bar search-bar--${variant} ${className || ''}`}
      onSubmit={handleSubmit}
      role="search"
    >
      <div className="search-bar__input-wrapper">
        <Icon name="search" className="search-bar__icon" />
        <Input
          type="search"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="search-bar__input"
          {...props}
        />
        {clearable && value && (
          <Button
            variant="ghost"
            icon="close"
            onClick={handleClear}
            className="search-bar__clear"
            aria-label="Clear search"
          />
        )}
      </div>
      
      {showButton && (
        <Button 
          type="submit"
          loading={loading}
          className="search-bar__submit"
        >
          Search
        </Button>
      )}
    </form>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'minimal', 'prominent']),
  showButton: PropTypes.bool,
  clearable: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
};

export default SearchBar; 