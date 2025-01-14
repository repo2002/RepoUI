import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({
  variant = 'small',
  shadow = 'sm',
  radius = 'md',
  padding = 'md',
  className,
  onClick,
  children,
  ...props
}) => {
  const cardClasses = [
    'card',
    `card--${variant}`,
    `card--shadow-${shadow}`,
    `card--radius-${radius}`,
    `card--padding-${padding}`,
    onClick && 'card--clickable',
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={cardClasses}
      onClick={onClick}
      {...props}
    >
      <div className="card__content">
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  variant: PropTypes.string,
  shadow: PropTypes.string,
  radius: PropTypes.string,
  padding: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Card; 