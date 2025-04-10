import { Box, BoxProps, styled } from '@mui/material';
import {
  ComponentType,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
  forwardRef,
} from 'react';
import {
  BaseCardBody,
  BaseCardBodyProps,
  BaseCardFooter,
  BaseCardFooterProps,
  BaseCardHeader,
  BaseCardHeaderProps,
} from 'src/components';

export type BaseCardProps = BoxProps & {
  children?: ReactNode;
};

type BaseCardComponent = ForwardRefExoticComponent<
  BaseCardProps & RefAttributes<HTMLDivElement>
> & {
  Header: ComponentType<BaseCardHeaderProps>;
  Body: ComponentType<BaseCardBodyProps>;
  Footer: ComponentType<BaseCardFooterProps>;
};

const CardStyled = styled(Box)(({ theme }) => ({
  borderRadius: '4px',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.uiWhite[500],
  textAlign: 'left',
}));

export const BaseCard = forwardRef<HTMLDivElement, BaseCardProps>(
  ({ children, ...rest }, ref) => (
    <CardStyled ref={ref} {...rest}>
      {children}
    </CardStyled>
  )
) as BaseCardComponent;

BaseCard.Header = BaseCardHeader;
BaseCard.Body = BaseCardBody;
BaseCard.Footer = BaseCardFooter;

export default BaseCard;
