import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Atoms/Button/Button';
import { P } from '../../Atoms/Text/Text';
import './Form.scss';

const Form = ({ 
  children,
  submitText = 'Submit',
  submitIcon,
  variant = 'default',
  error,
  border,
  onSubmit,
  method,
  className,
  ...props 
}) => {
    const formClasses = [
        'form',
        variant && `form--container-${variant}`,
        border && `form--container-${border}`,
        className
    ].filter(Boolean).join(' ');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(e);
  };

  return (
    <form 
      className={formClasses}
      onSubmit={handleSubmit}
      method={method}
      {...props}
    >
      {children}
      
      {error && (
        <div className="form__error">
          <P color="danger" size="sm">{error}</P>
        </div>
      )}

      <div className="form__actions">
        <Button type="submit" variant='primary' fullWidth rightIcon={submitIcon}>
          {submitText}
        </Button>
      </div>
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.node,
  submitText: PropTypes.string,
  border: PropTypes.bool,
  submitIcon: PropTypes.node,
  variant: PropTypes.string,
  error: PropTypes.string,
  onSubmit: PropTypes.func,
  method: PropTypes.string,
};

export default Form; 