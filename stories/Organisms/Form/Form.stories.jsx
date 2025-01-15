import React, { useState } from 'react';
import Form from './Form';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';

export default {
    title: 'Organisms/Form',
    component: Form,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['default', 'small', 'large'],
        },
    },
};



export const Login = () => {
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        setError('Invalid credentials');
    };

    return <LoginForm onSubmit={handleSubmit} error={error} />;
};


export const Register = () => {
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        setError('Email already exists');
    };

    return <RegisterForm onSubmit={handleSubmit} error={error} />;
};


