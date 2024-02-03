import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MyLogo } from './MyLogo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Portfolio/MyLogo',
  component: MyLogo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MyLogo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MyLogo> = (args) => <MyLogo {...args} />;

export const hhigh = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
hhigh.args = {
  Hhigh: 'true',
};

