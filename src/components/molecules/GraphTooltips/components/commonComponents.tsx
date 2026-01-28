import { Box, BoxProps, styled } from '@mui/material';
import { Typography, TypographyProps } from 'src/components/atoms/Typography';
import { FontWeightVariant } from 'src/components/atoms/Typography/Typography';
import { hexToRgba } from 'src/utils';

import { ArrowPosition, getArrowStyles } from '../utils';

const fontWeightMapping: Record<FontWeightVariant, number> = {
  regular: 400,
  medium: 600,
  semiBold: 700,
  bold: 800,
};

export interface StyledGraphTooltipProps extends BoxProps {
  arrowPosition: ArrowPosition;
}

export const StyledGraphTooltip = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'arrowPosition',
})<StyledGraphTooltipProps>(
  ({ theme: { palette, zIndex }, arrowPosition }) => ({
    display: 'flex',
    position: 'absolute',
    backgroundColor: palette.uiCoolGray[900],
    padding: '6px 8px',
    color: palette.common.white,
    fontSize: '12px',
    borderRadius: '2px',
    zIndex: zIndex.tooltip,
    textWrap: 'nowrap',
    '&:after': getArrowStyles(palette.uiCoolGray[900], arrowPosition),
    pointerEvents: 'none',
  })
);

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
    : hexToRgba(theme.palette.defaultColors.white, 80),
  textAlign: 'left',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontWeight: isSingleItem
    ? fontWeightMapping.medium
    : fontWeightMapping.regular,
}));

export const Value = styled((props: TypographyProps) => (
  <Typography variant="b2" {...props} />
))(({ theme }) => ({
  color: theme.palette.common.white,
}));

export const UnitMeasurement = styled((props: TypographyProps) => (
  <Typography {...props} variant="b3" component="span" />
))({
  display: 'inline-block',
});
