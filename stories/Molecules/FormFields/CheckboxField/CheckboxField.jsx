import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../../Atoms/Checkbox/Checkbox';
import { Label } from '../../../Atoms/Text/Text';
import './CheckboxField.scss';

const CheckboxField = ({
  id,
  label,
  helper,
  required,
  className,
  labelProps = {},
  checkboxProps = {},
}) => {
  const checkboxFieldClasses = [
    'checkbox-field',
    className
  ].filter(Boolean).join(' ');

  const fieldId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={checkboxFieldClasses}>
      {label && (
        <Label htmlFor={fieldId} {...labelProps}>
          {label}
          {required && <span className="checkbox-field__required">*</span>}
        </Label>
      )}
      
      <Checkbox
        id={fieldId}
        {...checkboxProps}
      />

      {helper && (
        <span className="checkbox-field__helper">
          {helper}
        </span>
      )}
    </div>
  );
};

CheckboxField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  helper: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  labelProps: PropTypes.object,
  checkboxProps: PropTypes.object,
};

export default CheckboxField; 