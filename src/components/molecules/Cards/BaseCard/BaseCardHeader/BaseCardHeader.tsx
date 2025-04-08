import { Box, BoxProps, SxProps, styled } from '@mui/material';
import { ReactNode, forwardRef } from 'react';

export type BaseCardHeaderProps = {
  hideSeparator?: boolean;
  sx?: SxProps;
  children?: ReactNode;
};

const HeaderStyled = styled(Box, {
  shouldForwardProp: (propName) => propName !== 'hideSeparator',
})<BoxProps & { hideSeparator?: boolean }>(
  ({ theme, hideSeparator = false }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 24px',
    borderBottom: hideSeparator
      ? 'none'
      : `1px solid ${theme.palette.uiCoolGray[200]}`,
    gap: '8px',
  })
);

const BaseCardHeader = forwardRef<HTMLDivElement, BaseCardHeaderProps>(
  ({ hideSeparator, sx, children, ...rest }, ref) => (
    <HeaderStyled ref={ref} sx={sx} hideSeparator={hideSeparator} {...rest}>
      {children}
    </HeaderStyled>
  )
);

export { BaseCardHeader };
