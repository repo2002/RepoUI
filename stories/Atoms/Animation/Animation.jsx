import React from 'react';
import PropTypes from 'prop-types';
import './Animation.scss';

const Animation = ({
  children,
  type,
  speed = 'slow',
  delay = 'small',
  repeat= 'once',
  className,
  ...props
}) => {
  const animationClasses = [
    type && `animate--${type}`,
    speed && `animate--${speed}`,
    delay && `animate--delay-${delay}`,
    repeat && `animate--repeat-${repeat}`,
    className
  ].filter(Boolean).join(' ');

  // This is a workaround to pass the animation classes to the child component and not adding an extra wrapper element
  return React.cloneElement(children, {
    className: `${children.props.className || ''} ${animationClasses}`.trim(),
    ...props
  });
};

Animation.propTypes = {
  children: PropTypes.element.isRequired,
  type: PropTypes.string,
  speed: PropTypes.string,
  delay: PropTypes.string,
  className: PropTypes.string,
  repeat: PropTypes.string,
};

export default Animation; 