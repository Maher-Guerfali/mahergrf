import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Skills } from '../page1/skills';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Portfolio/skills',
  component: Skills,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Skills>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Skills> = (args) => <Skills {...args} />;

export const high = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
high.args = {
  High: 'true',
};

