import React, { useState } from 'react';
import Form from '../Form';
import InputField from '../../../Molecules/FormFields/InputField/InputField';
import SelectField from '../../../Molecules/FormFields/SelectField/SelectField';
import { P, H2 } from '../../../Atoms/Text/Text';
import { FaEnvelope, FaLock, FaUser, FaPhone } from 'react-icons/fa';
import { calculatePasswordStrength, getPasswordRequirements } from '../../../../utils/passwordStrength';
import Loader from '../../../Atoms/Loader/Loader';

const RegisterForm = ({ onSubmit, error, variant = 'large' }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
    const [formError, setFormError] = useState(error);
    const strength = calculatePasswordStrength(password);
    const [loading, setLoading] = useState(false);

    const handleConfirmPassword = (e) => {
        if (password !== confirmPassword) {
            setFormError('Passwords do not match');
        } else {
            setFormError(null);
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 2000);
            console.log('submitted');
        }
    }

    

    const handleLoading = () => {
        if (loading) {
            return (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', overflow: 'visible'}}>
                    <Loader size="small" color="white" type="spinner" />
                </div>
            );
        }
        return 'Sign Up';
    }

    return (
        <div className={`form-container form-container--${variant}`}>
            <div className="form__header">
                <H2>Create Account</H2>
                <P>Join us today!</P>
            </div>

            <Form 
                submitText={handleLoading()}
                onSubmit={handleConfirmPassword}
                error={formError}
                variant={variant}
            >
                <div className="form__fields">
                    <div className="form__fields-row">
                        <InputField
                            name="name"
                            label="Full Name"
                    inputProps={{ 
                        placeholder: "John Doe",
                        icon: <FaUser />
                    }}
                    required
                />
                <InputField
                    name="email"
                    label="Email"
                    inputProps={{ 
                        type: "email",
                        placeholder: "john@example.com",
                        icon: <FaEnvelope />
                    }}
                    required
                />
                </div>
                <div className="form__fields-row">
                <SelectField
                    name="role"
                    label="Role"
                    options={[
                        { value: 'developer', label: 'Developer' },
                        { value: 'designer', label: 'Designer' },
                        { value: 'manager', label: 'Manager' }
                    ]}
                    required
                />
                <InputField
                    name="phone"
                    label="Phone"
                    inputProps={{ 
                        type: "tel",
                        placeholder: "123-456-7890",
                        icon: <FaPhone />
                    }}
                    required
                    />
                </div>
                <InputField
                    name="password"
                    label="Password"
                    inputProps={{ 
                        type: "password",
                        placeholder: "Create a strong password",
                        icon: <FaLock />,
                        value: password,
                        onChange: (e) => setPassword(e.target.value),
                        onFocus: () => setIsPasswordFocused(true),
                        onBlur: () => setIsPasswordFocused(false)
                    }}
                    required
                    progressProps={{ 
                        variant: "strength",
                        strength: strength,
                        style: { display: isPasswordFocused ? 'block' : 'none' }
                    }}
                            helper={isPasswordFocused && password ? getPasswordRequirements(password) : 'Use a mix of letters, numbers and symbols'}
                        />
                    
                    <InputField
                        name="confirmPassword"
                        label="Confirm Password"
                        inputProps={{ 
                            type: "password",
                            placeholder: "Confirm your password",
                            icon: <FaLock />,
                            value: confirmPassword,
                            onChange: (e) => setConfirmPassword(e.target.value)
                        }}
                        required
                    />
                </div>
            </Form>
        </div>
    );
};

export default RegisterForm; 