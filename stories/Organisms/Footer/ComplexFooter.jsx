import React from 'react';
import Footer from './Footer';
import { P, H4 } from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';
import Menu from '../../Molecules/Menu/Menu';
import NewsLetterForm from '../Form/forms/NewsLetterForm';
import Animation from '../../Atoms/Animation/Animation';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ComplexFooter = ({ 
    variant = 'default',
    logo = <P size='lg' weight="bold">LOGO</P>,
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    quickLinks = [
        { label: 'Home', href: '#' },
        { label: 'About Us', href: '#' },
        { label: 'Services', href: '#' },
        { label: 'Products', href: '#' },
        { label: 'Contact', href: '#' }
    ],
    resources = [
        { label: 'Blog', href: '#' },
        { label: 'Documentation', href: '#' },
        { label: 'Help Center', href: '#' },
        { label: 'FAQ', href: '#' },
        { label: 'Support', href: '#' }
    ],
    socialIcons = [
        { icon: <FaFacebook />, href: "#" },
        { icon: <FaTwitter />, href: "#" },
        { icon: <FaInstagram />, href: "#" },
        { icon: <FaLinkedin />, href: "#" }
    ],
    companyName = 'Your Company'
}) => {
    return (
        <Footer variant={variant}>
            <div className="footer__grid">
                {/* Company Info */}
                <div className="footer__column">
                    {logo}
                    <P size="sm" className="footer__description">
                        {description}
                    </P>
                    <div className="footer__social">
                        {socialIcons.map((social, index) => (
                            <Animation key={index} type="bounce" speed="slow" delay="small" repeat="infinite">
                                <Link href={social.href} variant="icon">
                                    {social.icon}
                                </Link>
                            </Animation>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer__column">
                    <H4 weight="bold">Quick Links</H4>
                    <Menu variant="vertical" className="footer__menu">
                        {quickLinks.map((link, index) => (
                            <Menu.Item key={index}>
                                <Link href={link.href} menu={true}>{link.label}</Link>
                            </Menu.Item>
                        ))}
                    </Menu>
                </div>

                {/* Resources */}
                <div className="footer__column">
                    <H4 weight="bold">Resources</H4>
                    <Menu variant="vertical" className="footer__menu">
                        {resources.map((resource, index) => (
                            <Menu.Item key={index}>
                                <Link href={resource.href} menu={true} size="medium">
                                    {resource.label}
                                </Link>
                            </Menu.Item>
                        ))}
                    </Menu>
                </div>

                {/* Newsletter */}
                <div className="footer__column footer__newsletter">
                    <NewsLetterForm />
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer__bottom">
                <P size="sm">&copy; 2024 {companyName}. All rights reserved.</P>
                <div className="footer__legal">
                    <Link href="#" size="small" menu={true}>Privacy Policy</Link>
                    <Link href="#" size="small" menu={true}>Terms of Service</Link>
                    <Link href="#" size="small" menu={true}>Cookie Policy</Link>
                </div>
            </div>
        </Footer>
    );
};

export default ComplexFooter; 