import React from 'react';

import Posts from '../Organisms/Posts';

export default {
  title: 'Organisms/Posts',
  component: Posts,
  argTypes: {
  },
};


const Template = (args) => <Posts {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};