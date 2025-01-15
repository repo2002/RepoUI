import React from 'react';
import Form from '../Form';
import InputField from '../../../Molecules/FormFields/InputField/InputField';
import { P, H2 } from '../../../Atoms/Text/Text';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const LoginForm = ({ onSubmit, error, variant = 'small' }) => {
    return (
        <div className={`form-container form-container--${variant}`}>
            <div className="form__header">
                <H2>Welcome back</H2>
                <P>Enter your credentials to continue</P>
            </div>

        <Form 
            submitText="Sign In" 
            onSubmit={onSubmit}
            error={error}
            variant={variant}
        >
            <div className="form__fields">
                <InputField
                    name="email"
                    label="Email"
                inputProps={{ 
                    type: "email",
                    placeholder: "Enter your email",
                    icon: <FaEnvelope />
                }}
                required
            />
            <InputField
                name="password"
                label="Password"
                inputProps={{ 
                    type: "password",
                    placeholder: "Enter your password",
                    icon: <FaLock />
                }}
                    required
                />
            </div>
        </Form>
        </div>
    );
};

export default LoginForm; 