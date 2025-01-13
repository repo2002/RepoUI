import React from 'react';
import PropTypes from 'prop-types';

import './Progress.scss';

const strengthColors = {
  'very-weak': 'var(--color-error)',
  'weak': 'var(--color-warning)',
  'ok': 'var(--color-info)',
  'strong': 'var(--color-success)',
  'very-strong': 'var(--color-success-dark)'
};

const strengthValues = {
  'very-weak': 20,
  'weak': 40,
  'ok': 60,
  'strong': 80,
  'very-strong': 100
};

const Progress = ({
  value = 0,
  variant = 'linear',
  size = 'medium',
  color,
  thickness = 4,
  showLabel = true,
  strength,
  className,
  ...props
}) => {
  // If strength is provided, use it to determine value and color
  const strengthValue = strength ? strengthValues[strength] : value;
  const strengthColor = strength ? strengthColors[strength] : color;
  
  const progressClasses = [
    'progress',
    `progress--${variant}`,
    `progress--${size}`,
    strength && 'progress--strength',
    className
  ].filter(Boolean).join(' ');

  const style = {
    ...(strengthColor && { '--progress-color': strengthColor }),
    ...(thickness && { '--progress-thickness': `${thickness}px` })
  };

  if (variant === 'strength') {
    return (
      <div className={progressClasses} style={style} {...props}>
        <div className="progress__segments">
          {Object.keys(strengthValues).map((level) => (
            <div
              key={level}
              className={`progress__segment ${strength && strengthValues[level] <= strengthValues[strength] ? 'progress__segment--active' : ''}`}
              style={{
                backgroundColor: strength && strengthValues[level] <= strengthValues[strength] 
                  ? strengthColors[level] 
                  : undefined
              }}
            />
          ))}
        </div>
        {showLabel && strength && (
          <span className="progress__label" style={{ color: strengthColors[strength] }}>
            {strength.replace('-', ' ').toUpperCase()}
          </span>
        )}
      </div>
    );
  }

  // Ensure value is between 0 and 100
  const normalizedValue = Math.min(Math.max(value, 0), 100);
  

  if (variant === 'circular') {
    const radius = 45; // SVG circle radius
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (normalizedValue / 100) * circumference;

    return (
      <div className={progressClasses} style={style} {...props}>
        <svg viewBox="0 0 100 100">
          <circle
            className="progress__circle-background"
            cx="50"
            cy="50"
            r={radius}
          />
          <circle
            className="progress__circle-value"
            cx="50"
            cy="50"
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
        {showLabel && (
          <span className="progress__label">{Math.round(normalizedValue)}%</span>
        )}
      </div>
    );
  }

  return (
    <div className={progressClasses} style={style} {...props}>
      <div className="progress__bar">
        <div 
          className="progress__value" 
          style={{ width: `${normalizedValue}%` }}
        />
      </div>
      {showLabel && (
        <span className="progress__label">{Math.round(normalizedValue)}%</span>
      )}
    </div>
  );
};

Progress.propTypes = {
  value: PropTypes.number,
  variant: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  thickness: PropTypes.number,
  showLabel: PropTypes.bool,
  strength: PropTypes.string,
  className: PropTypes.string,
};

export default Progress; 