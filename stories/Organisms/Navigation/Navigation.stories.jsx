import React from 'react';
import Navigation from './Navigation';
import Button from '../../Atoms/Button/Button';
import { P } from '../../Atoms/Text/Text';
import Link from '../../Atoms/Link/Link';

export default {
  title: 'Organisms/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      options: ['horizontal', 'vertical', 'horizontal-floating', 'vertical-floating'],
      control: { type: 'radio' },
    },
    floating: {
      control: { type: 'boolean' },
    },
  },
};

const Logo = () => (
  <P size="lg" weight="bold">LOGO</P>
);

export const Default = () => {
  return (
    <Navigation variant="vertical" floating={true}>
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
  );
}; 
