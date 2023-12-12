import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import { ComponentType, ReactNode, forwardRef } from 'react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export type BaseCardProps = {
  children?: ReactNode;
};

export type CardHeaderProps = {
  title: string;
  description?: string;
  actions?: ReactNode;
  sx?: SxProps;
};

type BaseCardComponent = ForwardRefExoticComponent<
  BaseCardProps & RefAttributes<HTMLDivElement>
> & {
  Header: ComponentType<CardHeaderProps>;
  Body: ComponentType<BaseCardProps>;
};

const Wrapper = styled(Box)({
  borderRadius: '4px',
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
});

const HeaderStyled = styled(Box)(({ theme }) => ({
  borderRadius: '4px 4px 0px 0px',
  backgroundColor: theme.palette.uiWhite[500],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px 24px',
  borderBottom: `1px solid ${theme.palette.uiCoolGray[200]}`,
  minHeight: '48px',
}));

const Body = styled(Box)(({ theme }) => ({
  borderRadius: '0px 0px 4px 4px',
  display: 'flex',
  flexDirection: 'column',
  padding: '24px',
  backgroundColor: theme.palette.uiWhite[500],
}));

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ title, description, actions, sx, ...rest }, ref) => (
    <HeaderStyled ref={ref} sx={sx} {...rest}>
      <Box>
        <Typography variant="h1">{title}</Typography>
        {description && (
          <Typography variant="b1" color="textSecondary">
            {description}
          </Typography>
        )}
      </Box>
      {actions && <Box>{actions}</Box>}
    </HeaderStyled>
  )
);

export const BaseCard = forwardRef<HTMLDivElement, BaseCardProps>(
  ({ children, ...rest }, ref) => (
    <Wrapper ref={ref} {...rest}>
      {children}
    </Wrapper>
  )
) as BaseCardComponent;

BaseCard.Header = CardHeader;
BaseCard.Body = Body;
BaseCard.displayName = 'BaseCard';

export default BaseCard;
