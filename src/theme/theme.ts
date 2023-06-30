import './augmentations';

import {
    ThemeOptions,
    createTheme,
    PaletteOptions,
    CustomPaletteOptions,
    CustomColorShades,
} from '@mui/material';
import { ui, collage } from 'src/colors';

export interface ColorRecord {
    [shade: string]: string;
}

export interface Palette {
    [key: string]: ColorRecord;
}

const pxToRem = createTheme().typography.pxToRem;

const capitalize = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};

const generatePalette = (
    swatch: Record<string, CustomColorShades>,
    name: string
): CustomPaletteOptions => {
    const palette: CustomPaletteOptions = {};

    for (const color in swatch) {
        const colorKey = `${name}${capitalize(
            color
        )}` as keyof CustomPaletteOptions;
        palette[colorKey] = {
            ...swatch[color],
        };
    }

    // ex: 'uiYellow': { '50': '#fdf5eb', '100': '#f8e1c0' }
    return palette;
};

export const palette: PaletteOptions = {
    ...generatePalette(ui, 'ui'),
    ...generatePalette(collage, 'collage'),
};

const themeOptions: ThemeOptions = {
    palette,
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
                },
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
