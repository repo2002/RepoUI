import React from 'react';
import PropTypes from 'prop-types';
import Radio from '../../../Atoms/Radio/Radio';
import { Label } from '../../../Atoms/Text/Text';
import './RadioField.scss';

const RadioField = ({
  id,
  label,
  helper,
  required,
  className,
  options,
  labelProps = {},
  ...radioProps
}) => {
  const radioFieldClasses = [
    'radio-field',
    className
  ].filter(Boolean).join(' ');

  const fieldId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={radioFieldClasses}>
      {label && (
        <Label htmlFor={fieldId} {...labelProps}>
          {label}
          {required && <span className="radio-field__required">*</span>}
        </Label>
      )}
      
      <div className="radio-field__options">
        {options.map((option) => (
          <Radio
            key={option.value}
            name={fieldId}
            {...option}
            {...radioProps}
          />
        ))}
      </div>

      {helper && (
        <span className="radio-field__helper">
          {helper}
        </span>
      )}
    </div>
  );
};

RadioField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  helper: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  labelProps: PropTypes.object,
};

export default RadioField; 