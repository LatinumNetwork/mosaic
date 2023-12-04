import { styled } from '@mui/material/styles';
import { ReactNode } from 'react';
import { Box, Typography } from 'src/components';

export type CardHeaderProps = {
  title: string;
  description: string;
  actions?: ReactNode;
  children?: ReactNode;
};

const HeaderStyled = styled(Box)(({ theme: { palette } }) => ({
  borderRadius: '4px 4px 0px 0px',
  backgroundColor: palette.uiWhite[500],
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: '16px 24px',
  borderBottom: `1px solid ${palette.uiCoolGray[200]}`,
  minHeight: '48px',
}));

export const CardHeader = ({
  title,
  description,
  actions,
  children,
}: CardHeaderProps) => {
  return (
    <HeaderStyled>
      <Box>
        <Typography variant="h2">{title}</Typography>
        <Typography variant="b2" color="textSecondary">
          {description}
        </Typography>
      </Box>
      {actions && <Box>{actions} </Box>}
      {children}
    </HeaderStyled>
  );
};
