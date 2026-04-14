import { SxProps } from '@mui/material';
import { ReactNode } from 'react';
export type BaseCardFooterProps = {
    hideSeparator?: boolean;
    children: ReactNode;
    sx?: SxProps;
};
declare const BaseCardFooter: import("react").ForwardRefExoticComponent<BaseCardFooterProps & import("react").RefAttributes<HTMLDivElement>>;
export { BaseCardFooter };
