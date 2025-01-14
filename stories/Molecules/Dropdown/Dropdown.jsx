import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import './Dropdown.scss';

const Dropdown = ({ 
  trigger,
  children,
  variant = 'horizontal',
  openOnHover = false,
  className,
  ...props 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (openOnHover) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (openOnHover) {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 300); // Small delay to prevent accidental closing
    }
  };

  return (
    <div 
      className={`dropdown dropdown--${variant} ${className || ''}`} 
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div 
        className={`dropdown__trigger ${isOpen ? 'dropdown__trigger--active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {trigger}
        {variant === 'horizontal' ? (
          <FaChevronDown className={`dropdown__trigger-icon ${isOpen ? 'dropdown__trigger-icon--open' : ''}`} />
        ) : (
          <FaChevronRight className={`dropdown__trigger-icon ${isOpen ? 'dropdown__trigger-icon--open' : ''}`} />
        )}
      </div>
      
      {isOpen && (
        <div className="dropdown__content">
          {children}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  trigger: PropTypes.node.isRequired,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['horizontal', 'vertical']),
  openOnHover: PropTypes.bool,
  className: PropTypes.string,
};

export default Dropdown; 