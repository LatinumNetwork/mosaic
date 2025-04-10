import { Stack, SxProps } from '@mui/material';
import { Fragment, ReactNode } from 'react';
import { Typography } from 'src/components';

import { BaseCard } from '../BaseCard/BaseCard';

export interface PrimaryCardProps {
  id?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  cardActions?: ReactNode[];
  customStyles?: {
    container?: SxProps;
    header?: SxProps;
    body?: SxProps;
    footer?: SxProps;
  };
  footer?: ReactNode;
}

export const PrimaryCard = ({
  id,
  title,
  description,
  children,
  cardActions,
  customStyles,
  footer,
}: PrimaryCardProps) => {
  return (
    <BaseCard id={id} sx={{ flex: 1, ...customStyles?.container }}>
      <BaseCard.Header sx={{ minHeight: '48px', ...customStyles?.header }}>
        <Stack>
          <Typography variant="h3" weight="medium">
            {title}
          </Typography>
          {description && (
            <Typography
              variant="b2"
              sx={(theme) => ({
                color: theme.palette.uiGray[500],
                paddingTop: '4px',
              })}
            >
              {description}
            </Typography>
          )}
        </Stack>
        <Stack direction="row" gap={'16px'} flexShrink={0}>
          {cardActions?.map((action, index) => (
            <Fragment key={index}>{action}</Fragment>
          ))}
        </Stack>
      </BaseCard.Header>
      <BaseCard.Body sx={customStyles?.body}>{children}</BaseCard.Body>
      {footer && (
        <BaseCard.Footer sx={customStyles?.footer}>{footer}</BaseCard.Footer>
      )}
    </BaseCard>
  );
};
