import MuiCardHeader, {
  CardHeaderProps as MuiCardHeaderProps,
} from '@mui/material/CardHeader';
import React from 'react';

export type CardHeaderProps = MuiCardHeaderProps;

export const CardHeader: React.FC<CardHeaderProps> = (props) => (
  <MuiCardHeader {...props} />
);
