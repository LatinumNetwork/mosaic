import '@fontsource/nunito-sans';
import {
  CustomColorShades,
  CustomPaletteOptions,
  PaletteOptions,
  ThemeOptions,
  createTheme,
} from '@mui/material';
import { collage, themeColors, ui } from 'src/colors';

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
  ...themeColors,
};

const nunitoSansRegular = {
  fontFamily: 'Nunito Sans',
  fontStyle: 'normal',
  fontWeight: '400',
  fontStretch: '100%',
  fontDisplay: 'swap',
  src: "local('Nunito Sans') format('woff2')",
};

const nunitoSansMedium = {
  fontFamily: 'Nunito Sans',
  fontStyle: 'normal',
  fontWeight: '500',
  fontStretch: '100%',
  fontDisplay: 'swap',
  src: "local('Nunito Sans') format('woff2')",
};

const nunitoSansSemiBold = {
  fontFamily: 'Nunito Sans',
  fontStyle: 'normal',
  fontWeight: '700',
  fontStretch: '100%',
  fontDisplay: 'swap',
  src: "local('Nunito Sans') format('woff2')",
};

const nunitoSansBold = {
  fontFamily: 'Nunito Sans',
  fontStyle: 'normal',
  fontWeight: '900',
  fontStretch: '100%',
  fontDisplay: 'swap',
  src: "local('Nunito Sans') format('woff2')",
};

const themeOptions: ThemeOptions = {
  palette,
  typography: {
    allVariants: {
      fontFamily: "'Nunito Sans', sans-serif",
    },
    fontFamily: "'Nunito Sans', sans-serif",
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
        fontFamily: "'Nunito Sans', sans-serif",
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
    MuiCssBaseline: {
      styleOverrides: {
        html: [
          { '@font-face': nunitoSansRegular },
          { '@font-face': nunitoSansMedium },
          { '@font-face': nunitoSansSemiBold },
          { '@font-face': nunitoSansBold },
        ],
        'html, body': {
          padding: 0,
          scrollbarWidth: 'thin',
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
