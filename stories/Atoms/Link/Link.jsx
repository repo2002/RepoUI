import React from 'react';
import PropTypes from 'prop-types';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Link.scss';

const Link = ({
  children,
  href,
  size = 'medium',
  color,
  disabled = false,
  external = false,
  underline = true,
  menu = false,
  className,
  ...props
}) => {
  const linkClasses = [
    'link',
    `link--${size}`,
    underline && 'link--underline',
    disabled && 'link--disabled',
    menu && 'link--menu',
    className
  ].filter(Boolean).join(' ');

  const externalProps = external ? {
    target: '_blank',
    rel: 'noopener noreferrer'
  } : {};

  return (
    <a 
      href={disabled ? undefined : href}
      className={linkClasses}
      style={color ? { '--link-color': color } : undefined}
      {...externalProps}
      {...props}
    >
    {external && <FaExternalLinkAlt className="link__external-icon" />}
      {children}
      
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  external: PropTypes.bool,
  underline: PropTypes.bool,
  menu: PropTypes.bool,
  className: PropTypes.string,
};

export default Link; 