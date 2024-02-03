import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Hobbies } from './Hobbies';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Portfolio/Hobbies',
  component: Hobbies,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Hobbies>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Hobbies> = (args) => <Hobbies {...args} />;

export const high = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
high.args = {
  High: 'true',
};

