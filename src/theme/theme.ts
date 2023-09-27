import '@fontsource/nunito-sans';
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
    MuiCssBaseline: {
      styleOverrides: `/* cyrillic-ext */
      @font-face {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 400;
        font-stretch: 100%;
        font-display: swap;
        src: local('Nunito Sans') format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 400;
        font-stretch: 100%;
        font-display: swap;
        src: local('Nunito Sans') format('woff2');
        unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 400;
        font-stretch: 100%;
        font-display: swap;
        src: local('Nunito Sans') format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 400;
        font-stretch: 100%;
        font-display: swap;
        src: local('Nunito Sans') format('woff2');
        unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 400;
        font-stretch: 100%;
        font-display: swap;
        src: local('Nunito Sans') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 500;
        font-stretch: 100%;
        font-display: swap;
        src: local('Nunito Sans') format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 500;
        font-stretch: 100%;
        font-display: swap;
        src: local('Nunito Sans') format('woff2');
        unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 500;
        font-stretch: 100%;
        font-display: swap;
        src: local('Nunito Sans') format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 500;
        font-stretch: 100%;
        font-display: swap;
        src: local('Nunito Sans') format('woff2');
        unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 500;
        font-stretch: 100%;
        font-display: swap;
        src: local('Nunito Sans') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 700;
        font-stretch: 100%;
        font-display: swap;
        src: local('Nunito Sans') format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 700;
        font-stretch: 100%;
        font-display: swap;
        src: local('Nunito Sans') format('woff2');
        unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 700;
        font-stretch: 100%;
        font-display: swap;
        src: local('Nunito Sans') format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 700;
        font-stretch: 100%;
        font-display: swap;
        src: local('Nunito Sans') format('woff2');
        unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 700;
        font-stretch: 100%;
        font-display: swap;
        src: local('Nunito Sans') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      /* cyrillic-ext */
      @font-face {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 900;
        font-stretch: 100%;
        font-display: swap;
        src: local('Nunito Sans') format('woff2');
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
      }
      /* cyrillic */
      @font-face {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 900;
        font-stretch: 100%;
        font-display: swap;
        src: local('Nunito Sans') format('woff2');
        unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
      }
      /* vietnamese */
      @font-face {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 900;
        font-stretch: 100%;
        font-display: swap;
        src: local('Nunito Sans') format('woff2');
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
      }
      /* latin-ext */
      @font-face {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 900;
        font-stretch: 100%;
        font-display: swap;
        src: local('Nunito Sans') format('woff2');
        unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      /* latin */
      @font-face {
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 900;
        font-stretch: 100%;
        font-display: swap;
        src: local('Nunito Sans') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `,
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
