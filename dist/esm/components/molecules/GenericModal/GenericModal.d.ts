import React from 'react';
export interface GenericModalProps {
    tag?: string;
    title: {
        text: string;
        endIcon?: React.ReactNode;
    };
    leftPaneIcon?: React.ReactNode;
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
    onExited?: () => void;
    width?: number;
}
export declare const GenericModal: ({ tag, title, leftPaneIcon, children, open, onClose, onExited, width, }: GenericModalProps) => import("react/jsx-runtime").JSX.Element;
