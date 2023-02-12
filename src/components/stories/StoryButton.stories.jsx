import React from "react";

import StoryButton from "../widgets/buttons/StoryButton";

export default {
  title: "Components/Widgets/Buttons/StoryButton",
  component: StoryButton,
  argTypes: {
    icon: { String },
    title: { String },
    class: { String },
  },
};

const Template = (args) => <StoryButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: "/images/user.jpg",
  title: "Username",
  class: "",
};

export const Active = Template.bind({});
Active.args = {
  icon: "/images/user.jpg",
  title: "Username",
  class: "active",
};
