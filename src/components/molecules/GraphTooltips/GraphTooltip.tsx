import { Portal, Stack } from '@mui/material';
import { useEffect, useState } from 'react';

import {
  Label,
  StyledGraphTooltip,
  UnitMeasurement,
  Value,
} from './components/commonComponents';
import {
  GraphTooltipPositionProps,
  getInversePosition,
  getTooltipPositionStyles,
} from './utils';

const arrowOffset = 8;

export interface GraphTooltipProps extends GraphTooltipPositionProps {
  rows: { label?: string; value?: string | number }[];
  open?: boolean;
}

export const GraphTooltip = ({
  disablePortal = false,
  offsetLeft = 0,
  offsetTop = 0,
  position = 'bottom-end',
  arrowPosition = 'top',
  valueAdornments,
  left = 0,
  top = 0,
  rows,
  open,
  sx,
}: GraphTooltipProps) => {
  const [tooltipRef, setTooltipRef] = useState<HTMLDivElement | null>(null);
  let [adjustedPosition, adjustedArrowPosition] = [position, arrowPosition];
  const [shouldInvertPosition, setShouldInvertPosition] = useState(false);

  useEffect(() => {
    if (tooltipRef) {
      const { offsetLeft, offsetWidth } = tooltipRef;
      if (
        offsetLeft + offsetWidth > document.body.clientWidth &&
        (position === 'top-end' ||
          position === 'right' ||
          position === 'bottom-end')
      ) {
        return setShouldInvertPosition(true);
      }
      setShouldInvertPosition(false);
    }
  }, [tooltipRef]);

  if (!open) return null;

  if (shouldInvertPosition) {
    const inversedPositions = getInversePosition(position, arrowPosition);
    adjustedPosition = inversedPositions.container;
    adjustedArrowPosition = inversedPositions.arrow;
  }

  const defaultOffsetX =
    adjustedArrowPosition === 'left'
      ? arrowOffset
      : adjustedArrowPosition === 'right'
      ? -arrowOffset
      : 0;

  const defaultOffsetY =
    adjustedArrowPosition === 'top'
      ? arrowOffset
      : adjustedArrowPosition === 'bottom'
      ? -arrowOffset
      : 0;

  const leftPos = shouldInvertPosition
    ? left - offsetLeft + defaultOffsetX
    : left + offsetLeft + defaultOffsetX;

  const topPos = shouldInvertPosition
    ? top - offsetTop + defaultOffsetY
    : top + offsetTop + defaultOffsetY;

  const positionStyles = getTooltipPositionStyles(adjustedPosition);

  return (
    <Portal disablePortal={disablePortal}>
      <StyledGraphTooltip
        ref={setTooltipRef}
        sx={{
          ...positionStyles,
          left: leftPos,
          top: topPos,
          ...sx,
        }}
        arrowPosition={adjustedArrowPosition}
      >
        <Stack
          sx={{
            gap: '4px',
          }}
        >
          {rows.map((row, index) => (
            <Stack
              key={`tooltip-row-${index}`}
              sx={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '4px',
              }}
            >
              <Label isSingleItem={!row.value}>{row.label}</Label>
              {row.value && (
                <Value>
                  {valueAdornments && valueAdornments.prefix && (
                    <UnitMeasurement>{valueAdornments.prefix}</UnitMeasurement>
                  )}
                  {row.value}
                  {valueAdornments && valueAdornments.suffix && (
                    <UnitMeasurement>{valueAdornments.suffix}</UnitMeasurement>
                  )}
                </Value>
              )}
            </Stack>
          ))}
        </Stack>
      </StyledGraphTooltip>
    </Portal>
  );
};
