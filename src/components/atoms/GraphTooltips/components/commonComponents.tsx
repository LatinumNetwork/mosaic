import { Box, Typography, TypographyProps, styled } from '@mui/material';
import { hexToRgba } from 'src/utils';

export const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  justifyContent: 'space-between',
  flex: 1,
});

export const Row = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  gap: '4px',
  minWidth: 0,
  overflow: 'hidden',
});

export const Label = styled(
  (props: TypographyProps & { isSingleItem: boolean }) => (
    <Typography variant="b3" {...props} />
  ),
  {
    shouldForwardProp: (propName) => propName !== 'isSingleItem',
  }
)(({ isSingleItem, theme }) => ({
  color: isSingleItem
    ? theme.palette.common.white
    : hexToRgba(theme.palette.common.white, 0.8),
  textAlign: 'left',
}));

export const Value = styled((props: TypographyProps) => (
  <Typography variant="b2" {...props} />
))(({ theme }) => ({
  color: theme.palette.uiWhite[500],
  minWidth: '30px',
}));

export const UnitMeasurement = styled((props: TypographyProps) => (
  <Typography {...props} variant="b3" component="span" />
))({
  display: 'inline-block',
});
