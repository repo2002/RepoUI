import React from 'react';
import PropTypes from 'prop-types';
import Select from '../../../Atoms/Select/Select';
import { Label } from '../../../Atoms/Text/Text';
import './SelectField.scss';

const SelectField = ({
  id,
  label,
  helper,
  required,
  className,
  ...selectProps
}) => {
  const selectFieldClasses = [
    'select-field',
    className
  ].filter(Boolean).join(' ');

  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className={selectFieldClasses}>
      {label && (
        <Label htmlFor={selectId}>
          {label}
          {required && <span className="select-field__required">*</span>}
        </Label>
      )}
      
      <Select
        id={selectId}
        {...selectProps}
      />

      {helper && (
        <span className="select-field__helper">
          {helper}
        </span>
      )}
    </div>
  );
};

SelectField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  helper: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
};

export default SelectField;