/* eslint-disable @typescript-eslint/no-empty-interface */
import { CustomPaletteOptions } from '@mui/material';
import { CustomColorShades, DefaultColors } from '@mui/material/styles';
import { CSSProperties } from 'react';

// NOTE: This file creates/adjusts types for our custom configuration and changes

interface CustomPalette {
  collageRaspberry: CustomColorShades;
  collageTeal: CustomColorShades;
  collageCitron: CustomColorShades;
  audienceMulticulturalYellow: CustomColorShades;
  audienceGenerationsOrange: CustomColorShades;
  audienceLgtbqPurple: CustomColorShades;
  audienceGenderTeal: CustomColorShades;
  audienceParentsAndKidsGreen: CustomColorShades;
  audienceKidsGreen: CustomColorShades;
  uiBlue: CustomColorShades;
  uiGreen: CustomColorShades;
  uiYellow: CustomColorShades;
  uiRed: CustomColorShades;
  uiGray: CustomColorShades;
  uiCoolGray: CustomColorShades;
  uiWhite: CustomColorShades;
  defaultColors: DefaultColors;
}

declare module '@mui/material/styles' {
  interface DefaultColors {
    black: string;
    white: string;
  }

  interface CustomColorShades {
    '50'?: string;
    '100'?: string;
    '200'?: string;
    '300'?: string;
    '400'?: string;
    '500'?: string;
    '600'?: string;
    '700'?: string;
    '800'?: string;
    '900'?: string;
  }

  interface CustomPaletteOptions {
    collageRaspberry?: CustomColorShades;
    collageTeal?: CustomColorShades;
    collageCitron?: CustomColorShades;
    audienceMulticulturalYellow?: CustomColorShades;
    audienceGenerationsOrange?: CustomColorShades;
    audienceLgtbqPurple?: CustomColorShades;
    audienceGenderTeal?: CustomColorShades;
    audienceParentsAndKidsGreen?: CustomColorShades;
    audienceKidsGreen?: CustomColorShades;
    uiBlue?: CustomColorShades;
    uiGreen?: CustomColorShades;
    uiYellow?: CustomColorShades;
    uiRed?: CustomColorShades;
    uiGray?: CustomColorShades;
    uiCoolGray?: CustomColorShades;
    uiWhite?: CustomColorShades;
    defaultColors?: DefaultColors;
  }

  interface PaletteOptions extends CustomPaletteOptions {}

  interface Palette extends CustomPalette {}

  interface Theme {
    customPalette: CustomPalette;
  }

  interface ThemeOptions {
    customPalette?: CustomPaletteOptions;
  }

  interface TypographyVariants {
    b1: CSSProperties;
    b2: CSSProperties;
    b3: CSSProperties;
    caption: CSSProperties;
  }

  interface TypographyVariantsOptions {
    b1?: CSSProperties;
    b2?: CSSProperties;
    b3?: CSSProperties;
    caption?: CSSProperties;
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
    primary: true;
    secondary: true;
    tertiary: true;
    link: true;
    nav: true;
    text: true;
    filled: false;
    contained: false;
  }
}

// Override createTheme and createPalette to recognize the custom properties
declare module '@mui/material/styles/createTheme' {
  interface Theme {
    customPalette: CustomPalette;
  }

  interface ThemeOptions {
    customPalette?: CustomPaletteOptions;
  }
}

declare module '@mui/material/styles/createPalette' {
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPaletteOptions {}
}

declare module '@mui/material/Typography/Typography' {
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

declare module '@mui/material/Button/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    tertiary: true;
    link: true;
    nav: true;
    text: true;
    filled: false;
    contained: false;
  }

  interface ButtonPropsColorOverrides {
    basic: false;
    info: false;
    success: false;
    secondary: false;
    inherit: false;
  }
}
