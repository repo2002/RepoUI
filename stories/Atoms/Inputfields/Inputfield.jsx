import React from 'react';
import PropTypes from 'prop-types';
import './Inputfield.scss';

const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled = false,
  error,
  success,
  icon,
  className,
  ...props
}) => {
  const inputClasses = [
    'input',
    error && 'input--error',
    success && 'input--success',
    disabled && 'input--disabled',
    icon && 'input--with-icon',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className="input-wrapper">
      {icon && <span className="input__icon">{icon}</span>}
      <input
        type={type}
        className={inputClasses}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      {error && <span className="input__error-message">{error}</span>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  success: PropTypes.bool,
  icon: PropTypes.node,
  className: PropTypes.string,
};

export default Input; 