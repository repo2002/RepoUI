import React from 'react';
import Image from './Image';

export default {
  title: 'Atoms/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    shape: {
      control: { type: 'select' },
      options: ['square', 'circle', 'rounded'],
    },
    fit: {
      control: { type: 'select' },
      options: ['cover', 'contain', 'fill'],
    },
    lazy: {
      control: 'boolean',
    },
    width: {
      control: { type: 'number' },
    },
    height: {
      control: { type: 'number' },
    },
  },
};

const getImageUrl = (width, height, id = 1) => 
  `https://picsum.photos/id/${id}/${width}/${height}`;

export const Default = {
  args: {
    src: getImageUrl(200, 200),
    alt: 'A beautiful landscape image',
    shape: 'square',
    fit: 'cover',
    width: 200,
    height: 200,
    lazy: true,
  },
};

export const Examples = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', justifyContent: 'center' }}>
    {/* Circle Profile Image */}
    <Image
      src={getImageUrl(100, 100, 64)}
      alt="Profile picture example"
      width={100}
      height={100}
      shape="circle"
    />

    {/* Square Product Image */}
    <Image
      src={getImageUrl(300, 300, 26)}
      alt="Product image example"
      width={300}
      height={300}
      fit="contain"
      shape="square"
    />

    {/* Landscape Image */}
    <Image
      src={getImageUrl(300, 200, 231)}
      alt="Landscape image example"
      width={300}
      height={200}
      shape="rounded"
      fit="cover"
    />

    {/* Portrait Image */}
    <Image
      src={getImageUrl(200, 300, 232)}
      alt="Portrait image example"
      width={200}
      height={300}
      shape="rounded"
      fit="cover"
    />

    {/* Custom Dimensions */}
    <Image
      src={getImageUrl(250, 250, 233)}
      alt="Custom dimensions example"
      width={250}
      height={250}
      shape="square"
      fit="cover"
    />
    <Image
      src={getImageUrl(1200, 400, 234)}
      alt="Custom dimensions example"
      width={1200}
      height={400}
      shape="square"
      fit="cover"
    />
  </div>
);