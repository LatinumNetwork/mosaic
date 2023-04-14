/** @type { import('@storybook/react').Preview } */

import storybookTheme from "./storybookTheme";

const preview = {
  parameters: {
    docs: {
      theme: storybookTheme,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
