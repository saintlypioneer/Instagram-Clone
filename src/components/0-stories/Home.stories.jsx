import React from 'react';

import Home from '../Pages/Home';

export default {
  title: 'Pages/Home',
  component: Home,
  argTypes: {
  },
};


const Template = (args) => <Home {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};