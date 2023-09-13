/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';

declare module '@mui/material/styles' {
  interface CustomColorShades {
    '50'?: string;
    '100'?: string;
    '200'?: string;
    '300'?: string;
    '400'?: string;
    '500': string;
    '600'?: string;
    '700'?: string;
    '800'?: string;
    '900'?: string;
  }
  interface CustomPalette {
    collageRed: CustomColorShades;
    collageYellow: CustomColorShades;
    collageOrange: CustomColorShades;
    collageViolet: CustomColorShades;
    collageTeal: CustomColorShades;
    uiGray: CustomColorShades;
    uiCoolGray: CustomColorShades;
    uiWhite: CustomColorShades;
    uiBlue: CustomColorShades;
    uiGreen: CustomColorShades;
    uiYellow: CustomColorShades;
    uiRed: CustomColorShades;
  }

  interface CustomPaletteOptions {
    collageRed?: CustomColorShades;
    collageYellow?: CustomColorShades;
    collageOrange?: CustomColorShades;
    collageViolet?: CustomColorShades;
    collageTeal?: CustomColorShades;
    uiGray?: CustomColorShades;
    uiCoolGray?: CustomColorShades;
    uiWhite?: CustomColorShades;
    uiBlue?: CustomColorShades;
    uiGreen?: CustomColorShades;
    uiYellow?: CustomColorShades;
    uiRed?: CustomColorShades;
  }

  interface PaletteOptions extends CustomPaletteOptions {}

  interface Palette extends CustomPalette {}

  interface TypographyVariants {
    b1: React.CSSProperties;
    b2: React.CSSProperties;
    b3: React.CSSProperties;
    caption: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    b1?: React.CSSProperties;
    b2?: React.CSSProperties;
    b3?: React.CSSProperties;
    caption?: React.CSSProperties;
  }

  export interface ButtonVariants {
    primary: string;
    secondary: string;
    tertiary: string;
    link: string;
    nav: string;
    text: string;
  }

  interface ButtonPropsVariantOverrides {
    primary: string;
    secondary: string;
    tertiary: string;
    link: string;
    nav: string;
    text: string;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    b1: true;
    b2: true;
    b3: true;
    caption: true;
    h4: false;
    h5: false;
    h6: false;
    subtitle1: false;
    subtitle2: false;
    body1: false;
    body2: false;
    button: false;
    overline: false;
    poster: false;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    filled: false;
    contained: false;
    text: true;
  }

  interface ButtonPropsColorOverrides {
    basic: false;
    info: false;
    success: false;
    secondary: false;
    inherit: false;
  }
}
