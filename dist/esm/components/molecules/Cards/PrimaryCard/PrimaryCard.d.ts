import { SxProps } from '@mui/material';
import { ReactNode } from 'react';
export interface PrimaryCardProps {
    id?: string;
    title: string;
    description?: string;
    children?: ReactNode;
    cardActions?: ReactNode[];
    customStyles?: {
        container?: SxProps;
        header?: SxProps;
        body?: SxProps;
        footer?: SxProps;
    };
    footer?: ReactNode;
}
export declare const PrimaryCard: ({ id, title, description, children, cardActions, customStyles, footer, }: PrimaryCardProps) => import("react/jsx-runtime").JSX.Element;
