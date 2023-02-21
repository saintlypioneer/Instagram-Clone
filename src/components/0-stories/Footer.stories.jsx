import React from 'react';

import Footer from '../Organisms/Footer';

export default {
  title: 'Organisms/Footer',
  component: Footer,
  argTypes: {
  },
};


const Template = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};