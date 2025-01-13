import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import './Image.scss';

const Image = ({
  src,
  alt,
  shape = 'square',
  fit = 'cover',
  lazy = true,
  width = 200,
  height = 200,
  className,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const imageClasses = [
    'image',
    `image--${shape}`,
    `image--${fit}`,
    isLoading && 'image--loading',
    className
  ].filter(Boolean).join(' ');

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div 
      className={imageClasses}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {isLoading && (
        <div className="image__loader">
          <Loader size="small" />
        </div>
      )}
      {hasError ? (
        <img src="https://placehold.co/200x200" alt="Fallback image" width={width} height={height} />
      ) : (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          onLoad={handleLoad}
          onError={handleError}
          loading={lazy ? "lazy" : "eager"}
          decoding="async"
          className="image__img"
          {...props}
        />
      )}
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  shape: PropTypes.string,
  fit: PropTypes.string,
  lazy: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

export default Image; 