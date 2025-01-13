import { useState, useEffect, useCallback } from 'react';
import { THEMES, getInitialTheme, updateTheme } from '../utils/themeToggle';

export const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme());

  const toggleTheme = useCallback(() => {
    const newTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    setTheme(newTheme);
    updateTheme(newTheme);
  }, [theme]);

  // Set initial theme
  useEffect(() => {
    updateTheme(theme);
  }, []);

  return {
    theme,
    toggleTheme,
    isDark: theme === THEMES.DARK
  };
}; 