import React from 'react';
import PropTypes from 'prop-types';
import './Menu.scss';

const Menu = ({ 
  variant = 'horizontal',
  className,
  children,
  ...props 
}) => {
  return (
    <ul 
      className={`menu menu--${variant} ${className || ''}`}
      {...props}
    >
      {children}
    </ul>
  );
};

const MenuItem = ({ 
  icon,
  children,
  isActive,
  className,
  ...props 
}) => {
  return (
    <li 
      className={`menu__item ${isActive ? 'menu__item--active' : ''} ${className || ''}`}
      {...props}
    >
      {icon && <span className="menu__item-icon">{icon}</span>}
      {children}
    </li>
  );
};

Menu.Item = MenuItem;

Menu.propTypes = {
  variant: PropTypes.oneOf(['horizontal', 'vertical']),
  className: PropTypes.string,
  children: PropTypes.node,
};

MenuItem.propTypes = {
  icon: PropTypes.node,
  isActive: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Menu;