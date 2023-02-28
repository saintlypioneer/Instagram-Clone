import React from 'react';

import UserMsgCard from '../Atoms/UserMsgCard';

export default {
  title: 'Atoms/UserMsgCard',
  component: UserMsgCard,
  argTypes: {
  },
};


const Template = (args) => <UserMsgCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};