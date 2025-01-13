import React from 'react';
import PropTypes from 'prop-types';
import './Loader.scss'; 

const Loader = ({
  type = 'spinner',
  size = 'medium',
  color,
  className,
  ...props
}) => {
  const loaderClasses = [
    'loader',
    `loader--${type}`,
    `loader--${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={loaderClasses} 
      style={color ? { '--loader-color': color } : undefined}
      {...props}
    />
  );
};

Loader.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default Loader; 