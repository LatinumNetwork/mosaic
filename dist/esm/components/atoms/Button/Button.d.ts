import { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import React from 'react';
type Variant = 'primary' | 'secondary' | 'tertiary' | 'text' | 'link' | 'nav';
type OmitMuiButtonWrapperProps = Omit<MuiButtonProps, 'variant'>;
export interface ButtonWrapperProps extends OmitMuiButtonWrapperProps {
    variant?: Variant;
}
export interface ButtonProps extends MuiButtonProps {
    customVariant?: Variant;
}
export declare const Button: React.ForwardRefExoticComponent<Omit<ButtonWrapperProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export {};
