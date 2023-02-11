import React from 'react';

import SearchInput from '../widgets/textinput/SearchInput';

export default {
  title: 'Components/Widgets/TextInput/SearchInput',
  component: SearchInput,
  argTypes: {
    
  },
};


const Template = (args) => <SearchInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  
};