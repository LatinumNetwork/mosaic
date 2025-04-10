import { Box, BoxProps, SxProps, styled } from '@mui/material';
import { ReactNode, forwardRef } from 'react';

export type BaseCardFooterProps = {
  hideSeparator?: boolean;
  children: ReactNode;
  sx?: SxProps;
};

const FooterStyled = styled(Box, {
  shouldForwardProp: (propName) => propName !== 'hideSeparator',
})<BoxProps & { hideSeparator?: boolean }>(
  ({ theme, hideSeparator = false }) => ({
    display: 'flex',
    padding: '16px 24px',
    borderTop: hideSeparator
      ? 'none'
      : `1px solid ${theme.palette.uiCoolGray[100]}`,
  })
);

const BaseCardFooter = forwardRef<HTMLDivElement, BaseCardFooterProps>(
  ({ sx, children, hideSeparator, ...rest }, ref) => (
    <FooterStyled hideSeparator={hideSeparator} ref={ref} sx={sx} {...rest}>
      {children}
    </FooterStyled>
  )
);

export { BaseCardFooter };
