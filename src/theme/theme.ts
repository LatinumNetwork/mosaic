import { ThemeOptions, createTheme } from '@mui/material';

import './augmentations';

const pxToRem = createTheme().typography.pxToRem;

const themeOptions: ThemeOptions = {
    typography: {
        fontFamily: "'Roboto', sans-serif",
        fontSize: 16,
        h4: undefined,
        h5: undefined,
        h6: undefined,
        subtitle1: undefined,
        subtitle2: undefined,
        body1: undefined,
        body2: undefined,
        button: undefined,
        overline: undefined,
        h1: {
            fontSize: pxToRem(28),
            lineHeight: pxToRem(38),
        },
        h2: {
            fontSize: pxToRem(24),
            lineHeight: pxToRem(33),
        },
        h3: {
            fontSize: pxToRem(20),
            lineHeight: pxToRem(27),
        },
        b1: {
            fontSize: pxToRem(16),
            lineHeight: pxToRem(22),
        },
        b2: {
            fontSize: pxToRem(14),
            lineHeight: pxToRem(19),
        },
        b3: {
            fontSize: pxToRem(12),
            lineHeight: pxToRem(16),
        },
        caption: {
            fontSize: pxToRem(10),
            lineHeight: pxToRem(20),
        },
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontWeight: 'unset',
                }
            },
            defaultProps: {
                fontFamily: "'Roboto', sans-serif",
                // by default, new variants will render as span
                variantMapping: {
                    b1: 'p',
                    b2: 'p',
                    b3: 'p',
                },
            },
        },
    },
};
const theme = createTheme(themeOptions);

export default theme;
