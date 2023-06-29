import React from 'react';
import { PaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface CustomPaletteColor {
        50?: string;
        100?: string;
        200?: string;
        300?: string;
        400?: string;
        500?: string;
        600?: string;
        700?: string;
        900?: string;
    }

    type CustomPaletteColorOption = PaletteColorOptions & CustomPaletteColor;

    interface CustomPalette {
        collageRed: CustomPaletteColorOption;
        collageYellow: CustomPaletteColorOption;
        collageOrange: CustomPaletteColorOption;
        collageViolet: CustomPaletteColorOption;
        collageTeal: CustomPaletteColorOption;
        uiGray: CustomPaletteColorOption;
        uiWhite: CustomPaletteColorOption;
        uiBlue: CustomPaletteColorOption;
        uiCoolGray: CustomPaletteColorOption;
    }

    interface CustomPaletteOptions {
        collageRed?: CustomPaletteColorOption;
        collageYellow?: CustomPaletteColorOption;
        collageOrange?: CustomPaletteColorOption;
        collageViolet?: CustomPaletteColorOption;
        collageTeal?: CustomPaletteColorOption;
        uiGray?: CustomPaletteColorOption;
        uiWhite?: CustomPaletteColorOption;
        uiBlue?: CustomPaletteColorOption;
        uiCoolGray?: CustomPaletteColorOption;
    }

    interface PaletteOptions extends PaletteOptions, CustomPaletteOptions {}

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
