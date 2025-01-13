import React from 'react';
import PropTypes from 'prop-types';
import './Select.scss';

const Select = ({
  value,
  onChange,
  options,
  placeholder,
  disabled = false,
  className,
  ...props
}) => {
  const selectClasses = [
    'select',
    disabled && 'select--disabled',
    className
  ].filter(Boolean).join(' ');

  return (
    <select
      className={selectClasses}
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...props}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options?.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Select;