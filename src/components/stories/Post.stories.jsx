import React from 'react';

import Post from '../Molecules/Post';

export default {
  title: 'Components/Widgets/Post',
  component: Post,
  argTypes: {
  },
};


const Template = (args) => <Post {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Active = Template.bind({});
Active.args = {
};