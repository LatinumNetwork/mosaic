import React from 'react';
import styled from 'styled-components';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

import Typography from '../Typography/Typography';
import colors from '../../../colors';

// export type ButtonProps = {
//     primary?: boolean;
//     size: string;
//     backgroundColor?: string;
//     label: string;
// } & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = MuiButtonProps;

// const ButtonRoot = styled(MuiButton)`
//     display: 'flex';
//     border-radius: 8;
//     align-items: 'center';
//     box-shadow: 'none';
//     text-transform: 'none';
//     height: 48;
//     justify-content: 'center';
//     text-align: 'center';
//     minHeight: 0,
//     whiteSpace: 'nowrap',
// `;

export const Button = ({ children, ...props }: MuiButtonProps) => {
  console.log("file: Button.tsx:31 ~ props:", props);
    return <MuiButton {...props}>{children}</MuiButton>;
};
