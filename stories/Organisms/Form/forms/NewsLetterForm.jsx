import React, { useState } from 'react';
import Form from '../Form';
import InputField from '../../../Molecules/FormFields/InputField/InputField';
import { P, H4 } from '../../../Atoms/Text/Text';
import { FaEnvelope } from 'react-icons/fa';
import Loader from '../../../Atoms/Loader/Loader';

const NewsLetterForm = ({ variant = 'small' }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            // Simulate success
            console.log('Newsletter subscription submitted');
        }, 1000);
    };

    const handleLoading = () => {
        if (loading) {
            return (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', overflow: 'visible'}}>
                    <Loader size="small" color="white" type="spinner" />
                </div>
            );
        }
        return 'Subscribe';
    };

    return (
        <div className={`form-container form-container--${variant}`} style={{ border: 'none', width: '100%' }}>
            <div className="form__header">
                <H4 align="left">Subscribe to our newsletter</H4>
                <P align="left">Stay updated with our latest news and special offers</P>
            </div>
        
        <Form
            title="Subscribe to our newsletter"
            subtitle="Stay updated with our latest news and special offers"
            submitText={handleLoading()}
            onSubmit={handleSubmit}
            error={error}
            variant={variant}
        >
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
        </Form>
        </div>
    );
};

export default NewsLetterForm;   