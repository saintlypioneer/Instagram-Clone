import React from 'react';

import NavbarButton from '../Atoms/buttons/NavbarButton';

export default {
  title: 'Atoms/Buttons/NavbarButton',
  component: NavbarButton,
  argTypes: {
    active: {Boolean},
    notificationCount: {Number},
    icon: {String},
    title: {String}
  },
};


const Template = (args) => <NavbarButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  active: false,
  notificationCount: 8,
  icon: '/images/messenger-outline-light.svg',
  title: 'Home'
};

export const Active = Template.bind({});
Active.args = {
  active: true,
  notificationCount: 15,
  icon: '/images/home.svg',
  title: 'Home'
};