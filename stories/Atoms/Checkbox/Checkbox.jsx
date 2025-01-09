import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.scss';

const Checkbox = ({
  checked = false,
  onChange,
  label,
  size = 'medium',
  disabled = false,
  error,
  className,
  ...props
}) => {
  const checkboxClasses = [
    'checkbox',
    `checkbox--${size}`,
    disabled && 'checkbox--disabled',
    error && 'checkbox--error',
    className
  ].filter(Boolean).join(' ');

  return (
    <label className={checkboxClasses}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="checkbox__input"
        {...props}
      />
      <span className="checkbox__checkmark" />
      {label && <span className="checkbox__label">{label}</span>}
      {error && <span className="checkbox__error">{error}</span>}
    </label>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.node,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string,
};

export default Checkbox; 