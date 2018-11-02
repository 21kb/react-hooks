import infoAddon, { withInfo } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';
import { themes } from '@storybook/components';
import { addDecorator, configure, setAddon } from '@storybook/react';
const req = require.context(
  '../packages/',
  true,
  /.*\.(stories|story)\.(ts|tsx)?$/,
);

// Decorators
addDecorator(
  withOptions({
    addonPanelInRight: true,
    goFullScreen: false,
    name: '@21kb/react-hooks',
    showAddonPanel: true,
    showSearchBox: false,
    showStoriesPanel: true,
    theme: themes.light,
  }),
);

// Addons
setAddon(infoAddon);

withInfo({
  header: true,
  inline: true,
});

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

configure(loadStories, module);
