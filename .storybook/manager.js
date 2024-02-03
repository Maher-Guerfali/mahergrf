import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import maher from './maher';

addons.setConfig({
  theme: maher,
});
