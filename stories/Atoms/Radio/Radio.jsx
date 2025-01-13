import React from 'react';
import PropTypes from 'prop-types';
import './Radio.scss';

const Radio = ({
  value,
  checked,
  onChange,
  label,
  disabled = false,
  className,
  ...props
}) => {
  const radioClasses = [
    'radio',
    disabled && 'radio--disabled',
    className
  ].filter(Boolean).join(' ');

  return (
    <label className={radioClasses}>
      <input
        type="radio"
        className="radio__input"
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      <span className="radio__control"></span>
      {label && <span className="radio__label">{label}</span>}
    </label>
  );
};

Radio.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Radio; 