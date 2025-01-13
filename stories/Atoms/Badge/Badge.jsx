import React from 'react';
import PropTypes from 'prop-types';
import './Badge.scss';

const Badge = ({
  children,
  variant = 'primary',
  size = 'medium',
  rounded= true,
  icon,
  className,
  ...props
}) => {
  const badgeClasses = [
    'badge',
    `badge--${variant}`,
    `badge--${size}`,
    rounded && 'badge--rounded',
    icon && 'badge--with-icon',
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={badgeClasses} {...props}>
      {icon && <span className="badge__icon">{icon}</span>}
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  size: PropTypes.string,
  rounded: PropTypes.bool,
  icon: PropTypes.node,
  className: PropTypes.string,
};

export default Badge; 