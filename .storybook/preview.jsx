import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import storybookTheme from './storybookTheme';
import theme from '../src/theme';

const withMuiTheme = (Story) => (
    <ThemeProvider theme={theme}>
        <Story />
    </ThemeProvider>
);
const preview = {
    parameters: {
        docs: {
            theme: storybookTheme,
        },
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [withMuiTheme],
};

export default preview;
