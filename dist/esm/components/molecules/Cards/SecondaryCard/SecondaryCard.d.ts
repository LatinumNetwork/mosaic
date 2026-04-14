import { SxProps } from '@mui/material';
import { ReactNode } from 'react';
export type SecondaryCardProps = {
    id?: string;
    isLoading?: boolean;
    title?: {
        text: string;
        endIcon?: ReactNode;
    };
    cardActions?: ReactNode[];
    children: ReactNode;
    customStyles?: {
        container?: SxProps;
        header?: SxProps;
        body?: SxProps;
    };
};
export declare const SecondaryCard: ({ id, isLoading, title, cardActions, children, customStyles, }: SecondaryCardProps) => import("react/jsx-runtime").JSX.Element;
