import { Box, BoxProps, SxProps, Theme, styled } from '@latinum-network/mosaic';

import {
  Container,
  Label,
  Row,
  UnitMeasurement,
  Value,
} from './components/commonComponents';
import { getArrowStyles, getTooltipPositionStyles } from './utils';

export type ArrowPosition = 'top' | 'bottom' | 'left' | 'right';
export type xPosition = 'left' | 'right' | 'center';
export type yPosition = 'top' | 'bottom' | 'center';

export interface ShowTooltipArgs<T> {
  tooltipData: T;
  tooltipLeft?: number;
  tooltipTop?: number;
}

export interface TooltipParams<T> {
  tooltipOpen: boolean;
  tooltipLeft?: number;
  tooltipTop?: number;
  tooltipData?: T;
  showTooltip: (args: ShowTooltipArgs<T>) => void;
  hideTooltip: () => void;
  arrowPosition?: ArrowPosition | undefined;
  xPosition?: xPosition;
  yPosition?: yPosition;
  unitMeasurement?: string;
}

export type GraphTooltipData = { label?: string; value?: string | number }[];

interface GraphTooltipProps {
  rows: { label?: string; value?: string | number }[];
  unitMeasurement?: string;
  top?: number;
  left?: number;
  right?: number;
  width?: number | 'auto';
  height?: number | 'auto';
  className?: string;
  sx?: SxProps<Theme>;
  arrowPosition?: ArrowPosition;
  xPosition?: xPosition;
  yPosition?: yPosition;
  open?: boolean;
}

interface StyledGraphTooltipProps extends BoxProps {
  arrowPosition: ArrowPosition;
}

const padding = { top: 6, left: 8 };
const margin = 0;

const StyledGraphTooltip = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'arrowPosition',
})<StyledGraphTooltipProps>(({ theme, arrowPosition }) => ({
  display: 'flex',
  position: 'absolute',
  backgroundColor: theme.palette.uiCoolGray[900],
  color: theme.palette.common.white,
  borderRadius: '2px',
  fontSize: '12px',
  zIndex: 6,
  textWrap: 'nowrap',
  '&:after': getArrowStyles(theme, arrowPosition),
  pointerEvents: 'none',
}));

export const GraphTooltip = ({
  className,
  sx,
  rows,
  unitMeasurement,
  top = 0,
  left,
  right,
  width,
  height,
  arrowPosition = 'bottom',
  xPosition = 'left',
  yPosition = 'center',
  open = false,
}: GraphTooltipProps) => {
  const positionStyles = getTooltipPositionStyles(
    xPosition,
    yPosition,
    top,
    left,
    right,
    width,
    height
  );

  if (!open) return null;

  return (
    <StyledGraphTooltip
      sx={{
        ...positionStyles,
        padding: `${padding.top}px ${padding.left}px`,
        margin: `${margin}`,
        width,
        height,
        ...sx,
      }}
      arrowPosition={arrowPosition}
      className={className}
    >
      <Container>
        {rows.map((row) => (
          <Row
            key={`tooltip-row-${row.label}-${row.value || 0}`}
            sx={{ gap: '8px' }}
          >
            {row.label && <Label isSingleItem={!row.value}>{row.label}</Label>}
            {row.value && (
              <Value>
                {row.value}
                {unitMeasurement && (
                  <UnitMeasurement>{unitMeasurement}</UnitMeasurement>
                )}
              </Value>
            )}
          </Row>
        ))}
      </Container>
    </StyledGraphTooltip>
  );
};
