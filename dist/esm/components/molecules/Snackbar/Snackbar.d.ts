import { SxProps, Theme } from '@mui/material';
import { ReactNode } from 'react';
export interface ActionButtonProps {
    label: string;
    onClick: () => void;
}
export interface CustomStyles {
    alert?: SxProps<Theme>;
    snackbar?: SxProps<Theme>;
    button?: SxProps<Theme>;
}
export declare enum SnackbarType {
    Default = "default",
    Info = "info",
    Success = "success",
    Alert = "alert",
    Warning = "warning",
    Loading = "loading"
}
export interface SnackbarProps {
    id?: string;
    type: SnackbarType;
    message: string;
    customStyles?: CustomStyles;
    customIcon?: ReactNode;
    showClose?: boolean;
    actionButton?: ActionButtonProps;
    onClose?: () => void;
}
export declare function Snackbar({ id, type, message, customStyles, customIcon, showClose, actionButton, onClose, }: SnackbarProps): import("react/jsx-runtime").JSX.Element;
