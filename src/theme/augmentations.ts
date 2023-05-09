import React from 'react';

declare module '@mui/material/styles' {
    interface TypographyVariants {
        b1: React.CSSProperties
        b2: React.CSSProperties
        b3: React.CSSProperties
        caption: React.CSSProperties
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        b1?: React.CSSProperties
        b2?: React.CSSProperties
        b3?: React.CSSProperties
        caption?: React.CSSProperties
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        b1: true
        b2: true
        b3: true
        caption: true
        h4: false,
        h5: false,
        h6: false,
        subtitle1: false,
        subtitle2: false,
        body1: false,
        body2: false,
        button: false,
        overline: false,
        poster: false,
    }
}
