import React from 'react';
import PropTypes from 'prop-types';
import './Text.scss';

// Base text component with common props
const baseProps = {
  size: PropTypes.string,
  weight: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.string,
  truncate: PropTypes.bool,
  fontType: PropTypes.string,
  animation: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

// Helper function to generate classes
const getClasses = (baseClass, { size, weight, color, align, truncate, fontType, animation, className }) => {
  return [
    'text',
    `text--${baseClass}`,
    size && `text--size-${size}`,
    weight && `text--weight-${weight}`,
    color= 'black' && `text--color-${color}`,
    align && `text--align-${align}`,
    truncate && 'text--truncate',
    fontType && `text--font-type-${fontType}`,
    animation && `text--animation-${animation}`,
    className
  ].filter(Boolean).join(' ');
};

export const H1 = ({ children, ...props }) => (
  <h1 className={getClasses('h1', props)} {...props}>{children}</h1>
);

export const H2 = ({ children, ...props }) => (
  <h2 className={getClasses('h2', props)} {...props}>{children}</h2>
);

export const H3 = ({ children, ...props }) => (
  <h3 className={getClasses('h3', props)} {...props}>{children}</h3>
);

export const H4 = ({ children, ...props }) => (
  <h4 className={getClasses('h4', props)} {...props}>{children}</h4>
);

export const H5 = ({ children, ...props }) => (
  <h5 className={getClasses('h5', props)} {...props}>{children}</h5>
);

export const H6 = ({ children, ...props }) => (
  <h6 className={getClasses('h6', props)} {...props}>{children}</h6>
);

export const Subtitle = ({ children, ...props }) => (
  <h6 className={getClasses('subtitle', props)} {...props}>{children}</h6>
);

export const Body = ({ children, ...props }) => (
  <p className={getClasses('body', props)} {...props}>{children}</p>
);

export const Caption = ({ children, ...props }) => (
  <span className={getClasses('caption', props)} {...props}>{children}</span>
);

export const Label = ({ children, ...props }) => (
  <label className={getClasses('label', props)} {...props}>{children}</label>
);

// Add PropTypes to all components
H1.propTypes = baseProps;
H2.propTypes = baseProps;
H3.propTypes = baseProps;
H4.propTypes = baseProps;
H5.propTypes = baseProps;
H6.propTypes = baseProps;
Subtitle.propTypes = baseProps;
Body.propTypes = baseProps;
Caption.propTypes = baseProps;
Label.propTypes = baseProps;

// Export all components
export default {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Subtitle,
  Body,
  Caption,
  Label,
}; 