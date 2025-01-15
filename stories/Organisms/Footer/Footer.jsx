import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

const Footer = ({ 
    children,
    variant = 'default',
    ...props 
}) => {
    return (
        <footer 
            className={`footer footer--${variant}`}
            {...props}
        >
            {children}
        </footer>
    );
};

Footer.propTypes = {
    children: PropTypes.node,
    variant: PropTypes.string,
};

export default Footer; 