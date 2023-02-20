import React from 'react';

import Navbar from '../Molecules/Navbar';

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