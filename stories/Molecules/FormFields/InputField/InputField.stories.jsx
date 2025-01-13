import React, { useState } from 'react';
import InputField from './InputField';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { calculatePasswordStrength, getPasswordRequirements } from '../../../../utils/passwordStrength';

export default {
  title: 'Molecules/FormFields/InputField',
  component: InputField,
  parameters: {
    layout: 'padded',
  },
};

export const Default = {
  args: {
    label: 'Username',
    type: 'text',
    placeholder: 'Enter your username',
    helper: 'Choose a unique username',
    labelProps: { size: "lg", weight: "bold", color: "primary"},
    inputProps: { type: "text", placeholder: "Enter username", icon: <FaUser />},
  },
};

export const Examples = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '700px' }}>
    {/* With Icon */}
    <InputField
      label="Username"
      type="text"
      placeholder="Enter username"
      icon={<FaUser />}
      labelProps={{ size: "lg", weight: "bold", color: "primary" }}
      inputProps={{ type: "text", placeholder: "Enter username"}}
      required
    />

    {/* Required Field */}
    <InputField
      label="Email"
      type="email"
      placeholder="Enter email"
      labelProps={{ size: "lg", weight: "bold", color: "primary" }}
      inputProps={{ type: "email", placeholder: "Enter email", icon: <FaEnvelope />}}
      required
    />

    {/* With Error */}
    <InputField
      label="Password"
      type="password"
      placeholder="Enter password"
      error="Password must be at least 8 characters"
      labelProps={{ size: "lg", weight: "bold", color: "primary"}}
      inputProps={{ type: "password", placeholder: "Enter password", icon: <FaLock />}}
      helper="Enter your password"
    />

    {/* Success State */}
    <InputField
      label="Verified Email"
      type="email"
      value="john@example.com"
      labelProps={{ size: "lg", weight: "bold", color: "primary" }}
      inputProps={{ type: "email", placeholder: "Enter email",icon: <FaEnvelope />, success: true}}
    />

  </div>
);

export const PasswordWithStrength = () => {
  const [password, setPassword] = useState('');
  const strength = calculatePasswordStrength(password);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
      <InputField
        label="Password"
        labelProps={{ size: "lg", weight: "bold", color: "primary" }}
        helper={password ? getPasswordRequirements(password) : 'Use a mix of letters, numbers and symbols'}
        inputProps={{ 
          type: "password", 
          placeholder: "Enter a strong password", 
          value: password,
          onChange: (e) => setPassword(e.target.value),
        }}
        progressProps={{ 
          variant: "strength", 
          strength: strength 
        }}
      />
    </div>
  );
}; 