import React from 'react';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import './Tag.scss';

const Tag = ({
  children,
  variant = 'default',
  size = 'medium',
  onRemove,
  disabled = false,
  className,
  ...props
}) => {
  const tagClasses = [
    'tag',
    `tag--${variant}`,
    `tag--${size}`,
    disabled && 'tag--disabled',
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={tagClasses} {...props}>
      {onRemove && (
        <button 
          className="tag__remove" 
          onClick={disabled ? undefined : onRemove}
          disabled={disabled}
          aria-label="Remove tag"
        >
          <FaTimes />
        </button>
      )}
      <span className="tag__text">{children}</span>
    </span>
  );
};

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  size: PropTypes.string,
  onRemove: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Tag; 