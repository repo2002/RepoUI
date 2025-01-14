import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../../Atoms/Button/Button';
import { P } from '../../Atoms/Text/Text';
import Tag from '../../Atoms/Tag/Tag';
import { FaCheckCircle, FaTimesCircle, FaExclamationTriangle, FaInfo } from 'react-icons/fa';
import './Toast.scss';

const Toast = ({
  title,
  message,
  type = 'info',
  duration = 5000,
  onClose,
  action,
  actionLabel,
  tags = [], // Array of tag objects for categories/context
  className,
}) => {
  useEffect(() => {
    if (duration && onClose) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const iconMap = {
    success: 'check-circle',
    error: 'circle-xmark',
    warning: 'exclamation-triangle',
    info: 'info',
  };

  return (
    <div 
      className={`toast toast--${type} ${className || ''}`}
      role="alert"
    >
      <div className="toast__icon">
        {iconMap[type] === 'check-circle' && <FaCheckCircle />}
        {iconMap[type] === 'circle-xmark' && <FaTimesCircle />}
        {iconMap[type] === 'exclamation-triangle' && <FaExclamationTriangle />}
        {iconMap[type] === 'info' && <FaInfo />}
      </div>
      
      <div className="toast__content">
        <div className="toast__header">
          {title && (
            <P weight="bold" className="toast__title">
              {title}
            </P>
          )}
          {tags.length > 0 && (
            <div className="toast__tags">
              {tags.map((tag, index) => (
                <Tag
                  key={index}
                  size="small"
                  {...tag}
                />
              ))}
            </div>
          )}
        </div>
        {message && (
          <P className="toast__message">
            {message}
          </P>
        )}
      </div>

      <div className="toast__actions">
        {action && actionLabel && (
          <Button
            variant="ghost"
            size="sm"
            onClick={action}
          >
            {actionLabel}
          </Button>
        )}
        {onClose && (
          <Button
            variant="ghost"
            icon="x"
            size="sm"
            onClick={onClose}
            aria-label="Close"
          />
        )}
      </div>

      {duration && (
        <div 
          className="toast__progress"
          style={{ animationDuration: `${duration}ms` }} 
        />
      )}
    </div>
  );
};

Toast.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']),
  duration: PropTypes.number,
  onClose: PropTypes.func,
  action: PropTypes.func,
  actionLabel: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.shape({
    children: PropTypes.node.isRequired,
    variant: PropTypes.string,
    size: PropTypes.string,
  })),
  className: PropTypes.string,
};

export default Toast; 