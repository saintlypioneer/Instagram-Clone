import React from 'react';

import ChatNavigation from '../Atoms/ChatNavigation';

export default {
  title: 'Atoms/ChatNavigation',
  component: ChatNavigation,
  argTypes: {
  },
};


const Template = (args) => <ChatNavigation {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};