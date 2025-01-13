import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../../Atoms/Inputfields/Inputfield';
import Progress from '../../../Atoms/Progress/Progress';
import { Label } from '../../../Atoms/Text/Text';
import './InputField.scss';

const InputField = ({
  id,
  label,
  helper,
  required,
  className,
  labelProps = {},
  inputProps = {},
  progressProps,
}) => {
  const inputFieldClasses = [
    'input-field',
    className
  ].filter(Boolean).join(' ');

  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={inputFieldClasses}>
      {label && (
        <Label htmlFor={inputId} {...labelProps}>
          {label}
          {required && <span className="input-field__required">*</span>}
        </Label>
      )}
      
      <Input
        id={inputId}
        {...inputProps}
      />

      {progressProps && (
        <Progress {...progressProps} />
      )}

      {helper && (
        <span className="input-field__helper">
          {helper}
        </span>
      )}
    </div>
  );
};

InputField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  helper: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  labelProps: PropTypes.object,
  inputProps: PropTypes.object,
  progressProps: PropTypes.object,
};

export default InputField; 