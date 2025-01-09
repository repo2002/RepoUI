import React from 'react';
import PropTypes from 'prop-types';
import './Toggle.scss';

const Toggle = ({
  checked = false,
  onChange,
  size = 'medium',
  disabled = false,
  label,
  iconLeft,
  iconRight,
  className,
  ...props
}) => {
  const toggleClasses = [
    'toggle',
    `toggle--${size}`,
    disabled && 'toggle--disabled',
    iconLeft && 'toggle--icon-left',
    iconRight && 'toggle--icon-right',
    className
  ].filter(Boolean).join(' ');

  return (
    <label className={toggleClasses}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="toggle__input"
        {...props}
      />
      <span className="toggle__slider">
        {iconLeft && <span className="toggle__icon">{iconLeft}</span>}
        {label && <span className="toggle__label">{label}</span>}
        {iconRight && <span className="toggle__icon">{iconRight}</span>}
      </span>

    </label>
  );
};

Toggle.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  label: PropTypes.node,
  className: PropTypes.string,
};

export default Toggle; 