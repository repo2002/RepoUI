import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Atoms/Button/Button';
import './Form.scss';

const Form = ({ 
  title,
  subtitle,
  submitText = 'Submit',
  onSubmit,
  className,
  children,
  ...props 
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(e);
  };

  return (
    <form 
      className={`form ${className || ''}`} 
      onSubmit={handleSubmit}
      {...props}
    >
      {(title || subtitle) && (
        <div className="form__header">
          {title && <h2 className="form__title">{title}</h2>}
          {subtitle && <p className="form__subtitle">{subtitle}</p>}
        </div>
      )}
      
      <div className="form__fields">
        {children}
      </div>

      <div className="form__actions">
        <Button type="submit" variant="primary" fullWidth={true}>{submitText}</Button>
      </div>
    </form>
  );
};

Form.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  submitText: PropTypes.string,
  onSubmit: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Form; 