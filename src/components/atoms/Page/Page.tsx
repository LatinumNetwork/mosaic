import { forwardRef } from 'react';
import { Box, BoxProps } from 'src/components';

export interface PageProps extends BoxProps {
  withHeader?: boolean;
}

export const Page = forwardRef<HTMLDivElement, PageProps>(
  ({ withHeader = false, ...restBoxProps }, ref) => {
    const dynamicStyles = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '40px',
      paddingTop: withHeader ? '160px' : '0px',
      width: '100%',
    };
    return <Box {...restBoxProps} sx={dynamicStyles} ref={ref} />;
  }
);
