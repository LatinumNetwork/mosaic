import React from 'react';
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';

export type BoxProps = MuiBoxProps;

const Box = (props: BoxProps): JSX.Element => (
  <MuiBox {...props} />
);

export default Box;