import { SxProps } from '@mui/material';
import { ReactNode } from 'react';
export type BaseCardHeaderProps = {
    hideSeparator?: boolean;
    sx?: SxProps;
    children?: ReactNode;
};
declare const BaseCardHeader: import("react").ForwardRefExoticComponent<BaseCardHeaderProps & import("react").RefAttributes<HTMLDivElement>>;
export { BaseCardHeader };
