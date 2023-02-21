import React from 'react';

import UserInfoCard from '../Molecules/UserInfoCard';

export default {
  title: 'Molecules/UserInfoCard',
  component: UserInfoCard,
  argTypes: {
  },
};


const Template = (args) => <UserInfoCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};