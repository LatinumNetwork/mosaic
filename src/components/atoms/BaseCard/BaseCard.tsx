import { styled } from '@mui/material/styles';
import { ReactNode, forwardRef } from 'react';
import { Box } from 'src/components';

export type BaseCardProps = {
  children?: ReactNode;
};

const Wrapper = styled(Box)({
  borderRadius: '4px',
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
});

export const BaseCard = forwardRef<HTMLDivElement, BaseCardProps>(
  ({ children, ...rest }, ref) => (
    <Wrapper ref={ref} {...rest}>
      {children}
    </Wrapper>
  )
);

BaseCard.displayName = 'BaseCard';
