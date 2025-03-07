import { Box, SxProps, styled } from '@mui/material';
import { ReactNode, forwardRef } from 'react';

export type BaseCardBodyProps = {
  children: ReactNode;
  sx?: SxProps;
};

const CardBodyStyled = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  padding: '24px',
});

const BaseCardBody = forwardRef<HTMLDivElement, BaseCardBodyProps>(
  ({ sx, children, ...rest }, ref) => (
    <CardBodyStyled ref={ref} sx={sx} {...rest}>
      {children}
    </CardBodyStyled>
  )
);

export { BaseCardBody };
