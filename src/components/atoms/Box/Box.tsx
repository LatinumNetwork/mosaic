import { SxProps, Theme } from '@mui/material/';
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';
import React from 'react';

export interface ExtendedBoxProps extends MuiBoxProps {
  className?: string;
  sx?: SxProps<Theme>;
}

export const Box = (props: ExtendedBoxProps): React.JSX.Element => (
  <MuiBox {...props} />
);
