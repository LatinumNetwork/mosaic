import {
  CustomColorShades,
  CustomPaletteOptions,
  PaletteOptions,
  ThemeOptions,
  createTheme,
} from '@mui/material';
import { collage, ui } from 'src/colors';

import './augmentations';

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
  mode: 'light',
  primary: { main: '#954661', dark: '#7b1839', light: '#a7647a' },
  secondary: { main: '#c16f8b', dark: '#b14b6e', light: '#cb869e' },
  error: { main: '#CC3333', light: '#d65c5c', dark: '#ba2e2e' },
  warning: { main: '#d5902f', light: '#ea9e34', dark: '#a67025' },
  success: { main: '#18914c', light: '#46a770', dark: '#168445' },
  text: {
    primary: '#333333',
    secondary: '#5c5c5c',
    disabled: '#b4b4b4',
  },
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
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
