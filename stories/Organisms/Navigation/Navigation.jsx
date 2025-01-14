import React from 'react';
import PropTypes from 'prop-types';
import './Navigation.scss';

const Navigation = ({ 
  variant = 'horizontal',
  floating = false,
  responsive = false,
  className,
  ...props 
}) => {
  return (
    <nav className={`navigation navigation--${variant} ${className || ''} ${responsive ? 'navigation--responsive' : ''} ${floating ? 'navigation--floating' : ''}`} {...props}/>
  );
};

Navigation.propTypes = {
  logo: PropTypes.node,
  variant: PropTypes.oneOf(['horizontal', 'vertical']),
  floating: PropTypes.bool,
  responsive: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Navigation; 