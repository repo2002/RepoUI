import React from 'react';
import Menu from './Menu';
import Link from '../../Atoms/Link/Link';
import { FaHome, FaUser, FaCog, FaEnvelope } from 'react-icons/fa';

export default {
  title: 'Molecules/Menu',
  component: Menu,
  parameters: {
    layout: 'padded',
  },
};

export const Horizontal = () => {
  const currentPath = '/about';

  return (
    <Menu variant="horizontal">
      <Menu.Item icon={<FaHome />} isActive={currentPath === '/'}>
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.Item icon={<FaUser />} isActive={currentPath === '/about'}>
        <Link href="/about">About</Link>
      </Menu.Item>
      <Menu.Item icon={<FaCog />} isActive={currentPath === '/settings'}>
        <Link href="/settings">Settings</Link>
      </Menu.Item>
      <Menu.Item icon={<FaEnvelope />} isActive={currentPath === '/contact'}>
        <Link href="/contact">Contact</Link>
      </Menu.Item>
    </Menu>
  );
};

export const Vertical = () => {
  const currentPath = '/settings';

  return (
    <Menu variant="vertical">
      <Menu.Item icon={<FaHome />} isActive={currentPath === '/'}>
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.Item icon={<FaUser />} isActive={currentPath === '/about'}>
        <Link href="/about">About</Link>
      </Menu.Item>
      <Menu.Item icon={<FaCog />} isActive={currentPath === '/settings'}>
        <Link href="/settings">Settings</Link>
      </Menu.Item>
      <Menu.Item icon={<FaEnvelope />} isActive={currentPath === '/contact'}>
        <Link href="/contact">Contact</Link>
      </Menu.Item>
    </Menu>
  );
};

export const WithoutIcons = () => {
  const currentPath = '/';

  return (
    <Menu variant="horizontal">
      <Menu.Item isActive={currentPath === '/'}>
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.Item isActive={currentPath === '/about'}>
        <Link href="/about">About</Link>
      </Menu.Item>
      <Menu.Item isActive={currentPath === '/settings'}>
        <Link href="/settings">Settings</Link>
      </Menu.Item>
      <Menu.Item isActive={currentPath === '/contact'}>
        <Link href="/contact">Contact</Link>
      </Menu.Item>
    </Menu>
  );
};
