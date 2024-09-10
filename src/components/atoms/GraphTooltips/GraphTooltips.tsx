import { Box, BoxProps, SxProps, Theme, styled } from '@mui/material';

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

export type GraphTooltipData = {
  data: { label?: string; value?: string | number }[];
  graphProps?: GraphTooltipPositionProps;
};

export interface GraphTooltipPositionProps {
  arrowPosition?: ArrowPosition;
  xPosition?: xPosition;
  yPosition?: yPosition;
  width?: number | 'auto';
  height?: number | 'auto';
  top?: number;
  left?: number;
  right?: number;
  unitMeasurement?: string;
  sx?: SxProps<Theme>;
}

interface GraphTooltipProps extends GraphTooltipPositionProps {
  rows: { label?: string; value?: string | number }[];
  className?: string;
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
  zIndex: theme.zIndex.tooltip,
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
