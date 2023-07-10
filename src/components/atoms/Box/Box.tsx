import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';
import React from 'react';

export type BoxProps = MuiBoxProps;

const Box = (props: BoxProps): JSX.Element => <MuiBox {...props} />;

export default Box;
