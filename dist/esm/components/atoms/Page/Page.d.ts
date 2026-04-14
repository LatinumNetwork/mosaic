import { BoxProps } from '@mui/material';
export interface PageProps extends BoxProps {
    withHeader?: boolean;
}
export declare const Page: import("react").ForwardRefExoticComponent<Omit<PageProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
