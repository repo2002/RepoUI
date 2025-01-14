import React from 'react';
import PropTypes from 'prop-types';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import './Rating.scss';

const Rating = ({
  value = 0,
  max = 5,
  size = 'md',
  readOnly = false,
  onChange,
  className,
  ...props
}) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(value);
    const hasHalfStar = value % 1 !== 0;

    for (let i = 0; i < max; i++) {
      if (i < fullStars) {
        stars.push(
          <FaStar 
            key={i} 
            className="rating__star rating__star--filled"
            onClick={() => !readOnly && onChange?.(i + 1)}
          />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <FaStarHalfAlt 
            key={i} 
            className="rating__star rating__star--half"
            onClick={() => !readOnly && onChange?.(i + 0.5)}
          />
        );
      } else {
        stars.push(
          <FaRegStar 
            key={i} 
            className="rating__star"
            onClick={() => !readOnly && onChange?.(i + 1)}
          />
        );
      }
    }
    return stars;
  };

  return (
    <div 
      className={`rating rating--${size} ${readOnly ? 'rating--readonly' : ''} ${className || ''}`}
      {...props}
    >
      {renderStars()}
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number,
  max: PropTypes.number,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

export default Rating; 