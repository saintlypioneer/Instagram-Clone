import React from 'react';

import Navbar from '../widgets/Navbar';

export default {
  title: 'Components/Widgets/Navbar',
  component: Navbar,
  argTypes: {
    
  },
};


const Template = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  
};