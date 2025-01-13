// Theme options
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
};

// Get initial theme from localStorage or system preference
export const getInitialTheme = () => {
  if (localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? THEMES.DARK : THEMES.LIGHT;
};

// Update theme and save to localStorage
export const updateTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}; 