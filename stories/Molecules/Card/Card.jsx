import React from 'react';
import PropTypes from 'prop-types';
import { H1, H3, P, Quote } from '../../Atoms/Text/Text';
import Image from '../../Atoms/Image/Image';
import Tag from '../../Atoms/Tag/Tag';
import './Card.scss';

const Card = ({
  preset = 'default',
  variant = 'medium',
  shadow = 'sm',
  radius = 'md',
  padding = 'md',
  image,
  imageProps = {
    width: '100%',
    height: 'auto',
    fit: 'fill',
    shape: 'square'
  },
  title,
  titleProps = {},
  subtitle,
  subtitleProps = {},
  content,
  contentProps = {},
  quote,
  quoteProps = {},
  tags,
  tagProps = {},
  children,
  className,
  onClick,
  ...props
}) => {
  const cardClasses = [
    'card',
    `card--${preset}`,
    `card--${variant}`,
    `card--shadow-${shadow}`,
    `card--radius-${radius}`,
    `card--padding-${padding}`,
    onClick && 'card--clickable',
    className
  ].filter(Boolean).join(' ');

  const renderContent = () => {
    switch (preset) {
      case '2':
        return (
          <>
            {title && <H3 {...titleProps}>{title}</H3>}
            {image && (
              <div className="card__image">
                <Image 
                  src={image} 
                  alt={title || 'Card image'} 
                  {...imageProps} 
                />
              </div>
            )}
            {content && <P {...contentProps}>{content}</P>}
            {subtitle && <H3 {...subtitleProps}>{subtitle}</H3>}
            {tags && (
              <div className="card__tags">
                {tags.map((tag, index) => (
                  <Tag key={index} {...tagProps} {...tag} />
                ))}
              </div>
            )}
          </>
        );
      case '3':
        return (
          <>
            {image && (
              <div className="card__image">
                <Image 
                  src={image} 
                  alt={title || 'Card image'} 
                  {...imageProps} 
                />
              </div>
            )}
            {tags && (
              <div className="card__tags">
                {tags.map((tag, index) => (
                  <Tag key={index} {...tagProps} {...tag} />
                ))}
              </div>
            )}
            {title && <H1 {...titleProps}>{title}</H1>}
            {content && <P {...contentProps}>{content}</P>}
            {subtitle && <H3 {...subtitleProps}>{subtitle}</H3>}
            {quote && <Quote {...quoteProps}>{quote}</Quote>}
          </>
        );
      case '4':
        return (
          <>
            {tags && (
              <div className="card__tags">
                {tags.map((tag, index) => (
                  <Tag key={index} {...tagProps} {...tag} />
                ))}
              </div>
            )}
            {title && <H1 {...titleProps}>{title}</H1>}
            {subtitle && <H3 {...subtitleProps}>{subtitle}</H3>}
            {content && <P {...contentProps}>{content}</P>}
            {quote && <Quote {...quoteProps}>{quote}</Quote>}
            {image && (
              <div className="card__image">
                <Image 
                  src={image} 
                  alt={title || 'Card image'} 
                  {...imageProps} 
                />
              </div>
            )}
          </>
        );
      default:
        return (
          <>
            {image && (
              <div className="card__image">
                <Image 
                  src={image} 
                  alt={title || 'Card image'} 
                  {...imageProps} 
                />
              </div>
            )}
            {title && <H1 {...titleProps}>{title}</H1>}
            {subtitle && <H3 {...subtitleProps}>{subtitle}</H3>}
            {content && <P {...contentProps}>{content}</P>}
            {tags && (
              <div className="card__tags">
                {tags.map((tag, index) => (
                  <Tag key={index} {...tagProps} {...tag} />
                ))}
              </div>
            )}
            {quote && <Quote {...quoteProps}>{quote}</Quote>}
          </>
        );
    }
  };

  return (
    <div 
      className={cardClasses}
      onClick={onClick}
      {...props}
    >
      <div className="card__content">
        {renderContent()}
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  preset: PropTypes.string,
  variant: PropTypes.string,
  shadow: PropTypes.string,
  radius: PropTypes.string,
  padding: PropTypes.string,
  image: PropTypes.string,
  imageProps: PropTypes.shape({
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    fit: PropTypes.oneOf(['cover', 'contain', 'fill']),
    shape: PropTypes.oneOf(['square', 'circle', 'rounded']),
    lazy: PropTypes.bool
  }),
  title: PropTypes.string,
  titleProps: PropTypes.object,
  subtitle: PropTypes.string,
  subtitleProps: PropTypes.object,
  content: PropTypes.string,
  contentProps: PropTypes.object,
  quote: PropTypes.string,
  quoteProps: PropTypes.object,
  tags: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    variant: PropTypes.string,
  })),
  tagProps: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card; 