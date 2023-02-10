import React from 'react';

import NavbarButton from '../NavbarButton';

export default {
  title: 'Components/Widgets/NavbarButton',
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
  icon: '/images/home.svg',
  title: 'Home'
};

export const Active = Template.bind({});
Active.args = {
  active: true,
  notificationCount: 5,
  icon: '/images/home.svg',
  title: 'Home'
};