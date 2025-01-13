// Basic password strength rules
const hasLowerCase = (str) => /[a-z]/.test(str);
const hasUpperCase = (str) => /[A-Z]/.test(str);
const hasNumber = (str) => /\d/.test(str);
const hasSpecialChar = (str) => /[!@#$%^&*(),.?":{}|<>]/.test(str);

export const calculatePasswordStrength = (password) => {
  if (!password) return null;
  
  let strength = 0;
  const checks = [
    password.length >= 8,          // Base length
    password.length >= 12,         // Good length
    hasLowerCase(password),        // Has lowercase
    hasUpperCase(password),        // Has uppercase
    hasNumber(password),           // Has number
    hasSpecialChar(password),      // Has special char
  ];

  strength = checks.filter(Boolean).length;

  // Map strength score to named levels
  if (strength === 0) return 'very-weak';
  if (strength <= 2) return 'weak';
  if (strength <= 3) return 'ok';
  if (strength <= 5) return 'strong';
  return 'very-strong';
};

// Helper function to get password requirements text
export const getPasswordRequirements = (password) => {
  const missing = [];
  
  if (!hasLowerCase(password)) missing.push('lowercase letter');
  if (!hasUpperCase(password)) missing.push('uppercase letter');
  if (!hasNumber(password)) missing.push('number');
  if (!hasSpecialChar(password)) missing.push('special character');
  if (password.length < 8) missing.push('at least 8 characters');
  
  if (missing.length === 0) return 'Password meets all requirements';
  return `Add ${missing.join(', ')}`;
}; 