import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';
import React from 'react';

export type BoxProps = MuiBoxProps;

export const Box = (props: BoxProps): React.JSX.Element => (
  <MuiBox {...props} />
);
