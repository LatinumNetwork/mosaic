import { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
export type FontWeightVariant = 'regular' | 'medium' | 'semiBold' | 'bold';
export declare const fontWeightMapping: Record<FontWeightVariant, number>;
export interface TypographyProps extends MuiTypographyProps {
    /**
     * @default 'regular'
     */
    weight?: FontWeightVariant;
}
export declare const Typography: import("react").ForwardRefExoticComponent<Omit<TypographyProps, "ref"> & import("react").RefAttributes<HTMLElement>>;
