import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaCheckCircle, FaTimesCircle, FaExclamationTriangle, FaInfo, FaTimes } from 'react-icons/fa';
import './Toast.scss';

const Toast = ({
  type = 'info',
  size = 'small',
  duration = 5000,
  onClose,
  className,
  textProps = {},
  children,
}) => {
  useEffect(() => {
    if (duration > 0 && onClose) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <FaCheckCircle />;
      case 'error':
        return <FaTimesCircle />;
      case 'warning':
        return <FaExclamationTriangle />;
      default:
        return <FaInfo />;
    }
  };

  return (
    <div 
      className={`toast toast--${type} toast--${size} ${className || ''}`}
      role="alert"
      data-duration={duration}
    >
      <div className="toast__content">
        <div className="toast__header">
          <div className="toast__icon">
            {getIcon()}
          </div>
          <div className="toast__body">
            {children}
          </div>
        </div>
      </div>

      {onClose && (
        <button 
          className="toast__close"
          onClick={onClose}
          aria-label="Close"
        >
          <FaTimes />
        </button>
      )}

      {duration > 0 && (
        <div 
          className="toast__progress"
          style={{ animationDuration: `${duration}ms` }} 
        />
      )}
    </div>
  );
};

Toast.propTypes = {
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  duration: PropTypes.number,
  onClose: PropTypes.func,
  className: PropTypes.string,
  textProps: PropTypes.object,
  children: PropTypes.node,
};

export default Toast; 