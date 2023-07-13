import { ThemeProvider } from '@mui/material/styles';

import { theme } from 'src/theme';

import storybookTheme from './storybookTheme';

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
            sort: 'requiredFirst',
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [withMuiTheme],
};

export default preview;
