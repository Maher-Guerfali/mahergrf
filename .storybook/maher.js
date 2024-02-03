// .storybook/maher.js

import { create } from '@storybook/theming';

export default create({
  base: 'dark',

  colorPrimary: 'blue',
  colorSecondary: 'deepskyblue',

  // UI
  appBg: 'grey',
  appContentBg: 'white',
  appBorderColor: 'white',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
  

  // Text colors
  textColor: 'grey',
  //textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'grey',
  barBg: 'grey',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'grey',
  inputBorderRadius: 4,

  brandTitle: 'Maher Guerfali',
  //brandUrl: 'https://example.com',
  brandImage: 'https://i.ibb.co/0MWPhCp/Tengen-Uzui-1.png',
});