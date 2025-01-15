import React from 'react';
import { Auth } from './Auth';

export default {
    title: 'Pages/Auth',
    component: Auth,
    parameters: {
        layout: 'fullscreen',
    },
};

const Template = (args) => <Auth {...args} />;

export const Default = Template.bind({});
Default.args = {}; 