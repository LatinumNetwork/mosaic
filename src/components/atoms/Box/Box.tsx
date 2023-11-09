import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';
import React, { forwardRef } from 'react';

export type BoxProps = MuiBoxProps;

export const Box = forwardRef(
  (props: BoxProps, ref): React.JSX.Element => <MuiBox {...props} ref={ref} />
);
