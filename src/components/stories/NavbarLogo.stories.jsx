import React from 'react';

import NavbarLogo from '../widgets/NavbarLogo';

export default {
  title: 'Components/Widgets/NavbarLogo',
  component: NavbarLogo,
  argTypes: {
    
  },
};


const Template = (args) => <NavbarLogo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  
};