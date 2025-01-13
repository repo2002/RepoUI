import React from 'react';
import PropTypes from 'prop-types';
import { getInitialTheme, updateTheme } from '../../utils/themeToggle';

const ThemeProvider = ({ children }) => {
  React.useEffect(() => {
    // Set initial theme
    const theme = getInitialTheme();
    updateTheme(theme);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      const newTheme = e.matches ? 'dark' : 'light';
      updateTheme(newTheme);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return children;
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider; 