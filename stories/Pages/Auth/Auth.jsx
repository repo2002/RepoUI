import React, { useState } from 'react';
import Navigation from '../../Organisms/Navigation/Navigation';
import LoginForm from '../../Organisms/Form/forms/LoginForm';
import RegisterForm from '../../Organisms/Form/forms/RegisterForm';
import Tabs from '../../Molecules/Tabs/Tabs';
import Link from '../../Atoms/Link/Link';
import Button from '../../Atoms/Button/Button';
import { P } from '../../Atoms/Text/Text';
import ComplexFooter from '../../Organisms/Footer/ComplexFooter';

import { FaUser, FaUserPlus } from 'react-icons/fa';
import './Auth.scss';

export const Auth = () => {
    const [activeTab, setActiveTab] = useState('login');
    const Logo = () => (
        <P size="lg" weight="bold">LOGO</P>
    );

    return (
        <div className="auth-page">
            {/* Floating Navigation */}
            <div className="auth-page__nav">
            <Navigation variant="horizontal" floating={false}>
                    <div className='navigation__container'>
                        <div className='navigation__logo'>
                            <Logo />
                        </div>
                        <div className='navigation__menu'>
                            <ul>
                                <li>
                                    <Link href="#" menu={true}>Home</Link>
                                </li>
                                <li>
                                    <Link href="/about" menu={true}>About</Link>
                                </li>
                                <li>
                                    <Link href="/products" menu={true}>Products</Link>
                                </li>
                                <li>
                                    <Link href="/contact" menu={true}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='navigation__actions'>
                            <Button variant="outlined" size="small">Login</Button>
                            <Button variant="primary" size="small">Register</Button>
                        </div>
                    </div>
             </Navigation>
            </div>

            {/* Main Content */}
            <main className="auth-page__main">
                <div className="auth-page__container">
                    <Tabs 
                        activeTab={activeTab} 
                        onChange={setActiveTab}
                        variant="underlined"
                        alignment="center"
                        size="lg"
                        className="auth-page__tabs"
                        tabs={[
                            { id: 'login', label: 'login' , icon: <FaUser />},
                            { id: 'register', label: 'Register' , icon: <FaUserPlus/>},
                          ]}
                    >
                        
                        <div data-tab-id="login">
                            <div className="auth-page__tabs-content">
                                <LoginForm variant="large" border={true}/>
                            </div>
                        </div>
                        
                        <div data-tab-id="register">
                            <div className="auth-page__tabs-content">
                                <RegisterForm variant="large" />
                            </div>
                        </div>
                        
                    </Tabs>

                    {/* Additional Content */}
                    <div className="auth-page__features">
                        <div className="feature">
                            <h3>Fast & Secure</h3>
                            <p>Protected by industry leading security measures</p>
                        </div>
                        <div className="feature">
                            <h3>24/7 Support</h3>
                            <p>Our team is here to help you anytime</p>
                        </div>
                        <div className="feature">
                            <h3>Easy to Use</h3>
                            <p>Simple and intuitive interface</p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <ComplexFooter 
                variant="primary"
                logo={<Logo />}
                description="Your custom description"
                quickLinks={[
                    { label: 'Custom Link', href: '/custom' },
                    // ... more custom links
                ]}
                companyName="Your Brand Name"
            />
        </div>
    );
};

export default Auth; 