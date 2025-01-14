import React from 'react';
import Card from './Card';
import { H1, H3, P } from '../../../Atoms/Text/Text';
import Image from '../../../Atoms/Image/Image';
import Tag from '../../../Atoms/Tag/Tag';
import Button from '../../../Atoms/Button/Button';
import Inputfield from '../../../Atoms/Inputfields/Inputfield';
import {FaSearch} from 'react-icons/fa';

export default {
  title: 'Molecules/Cards/Card',
  component: Card,
  argTypes: {
    variant: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    shadow: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
};

export const Default = {
  render: () => (
    <Card>
      <Image 
        src="example.jpg" 
        alt="Card image"
        width="100%"
        height="auto"
        fit="cover"
      />
      <H1>Card Title</H1>
      <H3>Subtitle</H3>
      <P>This is the card content that can include any components.</P>
      <div className="card__tags">
        <Tag  variant="primary">Tag 1</Tag>
        <Tag variant="success">Tag 2</Tag>
      </div>
    </Card>
  )
};

export const WithCustomLayout = {
  render: () => (
    <Card variant="large" shadow="lg">
      <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
        <Image 
          src="example.jpg" 
          alt="Card image"
          width="200px"
          height="200px"
          fit="cover"
          shape="rounded"
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
          <H1 weight="bold">Custom Layout</H1>
          <P>This card demonstrates a custom layout with flexbox.</P>
          <div className="card__tags" style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
            <Tag label="Custom" variant="primary" >Tag 1</Tag>
            <Tag label="Layout" variant="success" >Tag 2</Tag>
            <Tag label="Layout" variant="warning" >Tag 3</Tag>
            <Tag label="Layout" variant="error" >Tag 4</Tag>
            <Tag label="Layout">Tag 5</Tag>
          </div>
          <div className="card__action">
            <Button variant="outlined" size="small">Button 1</Button>
          </div>
          <div className="card__input">
            <Inputfield placeholder="Search" type="search" icon={<FaSearch />} />
          </div>
        </div>
      </div>
    </Card>
  )
};

export const InteractiveWithCustomClass = {
  render: () => (
    <Card 
      onClick={() => alert('Card clicked!')}
      variant="large"
      shadow="lg"
      padding="lg"
      radius="lg"
      className="card__custom"
    >
      <H1 weight="bold">Interactive Card</H1>
      <P>Click me to trigger an action!</P>
    </Card>
  )
};