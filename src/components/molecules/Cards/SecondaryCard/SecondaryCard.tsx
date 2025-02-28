import { Box, SxProps } from '@mui/material';
import { ReactNode } from 'react';
import { Skeleton, Typography } from 'src/components';

import { BaseCard } from '../BaseCard/BaseCard';

export type SecondaryCardProps = {
  isLoading?: boolean;
  title?: { text: string; endIcon?: ReactNode };
  cardActions?: ReactNode[];
  children: ReactNode;
  customStyles?: {
    container?: SxProps;
    header?: SxProps;
    body?: SxProps;
  };
};

export const SecondaryCard = ({
  isLoading,
  title,
  cardActions,
  children,
  customStyles,
}: SecondaryCardProps) => {
  let header = null;

  if (isLoading) {
    header = <Skeleton variant="rectangular" width={'190px'} height={'30px'} />;
  } else if (title) {
    header = (
      <>
        <Box sx={{ display: 'flex', gap: '4px' }}>
          <Typography variant="b1" weight="medium">
            {title.text}
          </Typography>
          {title.endIcon}
        </Box>
        {cardActions && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '8px',
            }}
          >
            {cardActions}
          </Box>
        )}
      </>
    );
  }
  return (
    <BaseCard sx={{ gap: '4px', ...customStyles?.container }}>
      <BaseCard.Header
        hideSeparator
        sx={{ paddingBottom: 0, ...customStyles?.header }}
      >
        {header}
      </BaseCard.Header>

      <BaseCard.Body sx={{ paddingTop: 0, ...customStyles?.body }}>
        {children}
      </BaseCard.Body>
    </BaseCard>
  );
};
