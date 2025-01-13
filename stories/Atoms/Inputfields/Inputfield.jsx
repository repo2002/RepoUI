import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
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
  rows,
  className,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const wrapperClasses = [
    'input-wrapper',
    error && 'input--error',
    success && 'input--success',
    disabled && 'input--disabled',
    className
  ].filter(Boolean).join(' ');

  const inputClasses = [
    'input',
    icon && 'input--with-icon',
  ].filter(Boolean).join(' ');

  const isTextarea = type === 'textarea';
  const isPassword = type === 'password';
  const InputComponent = isTextarea ? 'textarea' : 'input';

  const handleTogglePassword = () => {
    if (!disabled) {
      setShowPassword(!showPassword);
    }
  };

  return (
    <>
      <div className={wrapperClasses}>
        {icon && <span className="input__icon">{icon}</span>}
        <InputComponent
          type={!isTextarea ? (isPassword ? (showPassword ? 'text' : 'password') : type) : undefined}
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          rows={isTextarea ? rows : undefined}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            className="input__password-toggle"
            onClick={handleTogglePassword}
            disabled={disabled}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
      {error && <span className="input__error-message">{error}</span>}
    </>
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
  rows: PropTypes.number,
  className: PropTypes.string,
};

export default Input; 