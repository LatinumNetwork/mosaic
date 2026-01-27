import { SxProps } from '@mui/material';
import { CSSProperties } from 'react';

export type ArrowPosition = 'top' | 'bottom' | 'left' | 'right';
export type TooltipPosition =
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'right'
  | 'bottom-end'
  | 'bottom'
  | 'bottom-start'
  | 'left';

export interface TooltipParams<T> {
  tooltipOpen: boolean;
  tooltipLeft?: number;
  tooltipTop?: number;
  tooltipData?: T;
  showTooltip: (args: ShowTooltipArgs<T>) => void;
  hideTooltip: () => void;
}

export interface ShowTooltipArgs<T> {
  tooltipData: T;
  tooltipLeft?: number;
  tooltipTop?: number;
}

export type GraphTooltipData = {
  data: { label?: string; value?: string | number }[];
  graphProps?: GraphTooltipPositionProps;
};

export interface GraphTooltipPositionProps {
  disablePortal?: boolean;
  arrowPosition?: ArrowPosition;
  position?: TooltipPosition;
  left?: number;
  top?: number;
  offsetLeft?: number;
  offsetTop?: number;
  valueAdornments?: { prefix?: string; suffix?: string };
  sx?: SxProps;
}

/**
 * Generates CSS styles for the tooltip arrow based on its color and position.
 * @param arrowColor - The color of the tooltip arrow.
 * @param position - The position of the arrow relative to the tooltip.
 * @returns An object containing CSS styles for the tooltip arrow.
 */
export const getArrowStyles = (arrowColor: string, position: ArrowPosition) => {
  const common = {
    content: '""',
    position: 'absolute',
    borderWidth: '5px',
    borderStyle: 'solid',
  };

  switch (position) {
    case 'top':
      return {
        ...common,
        bottom: '100%',
        left: '50%',
        marginLeft: '-5px',
        borderColor: `transparent transparent ${arrowColor} transparent`,
      };
    case 'bottom':
      return {
        ...common,
        top: '100%',
        left: '50%',
        marginLeft: '-5px',
        borderColor: `${arrowColor} transparent transparent transparent`,
      };
    case 'left':
      return {
        ...common,
        right: '100%',
        top: '50%',
        marginTop: '-5px',
        borderColor: `transparent ${arrowColor} transparent transparent`,
      };
    case 'right':
      return {
        ...common,
        top: '50%',
        left: '100%',
        marginTop: '-5px',
        borderColor: `transparent transparent transparent ${arrowColor}`,
      };
    default:
      return {};
  }
};

/**
 * Generates CSS styles for positioning the tooltip based on its position.
 * @param position - The position of the tooltip.
 * @returns An object containing CSS styles for the tooltip position.
 */
export const getTooltipPositionStyles = (
  position: TooltipPosition
): CSSProperties => {
  let styles: CSSProperties = {};

  if (position === 'top-start') {
    return {
      transform: `translate(-100%, -100%)`,
    };
  }

  if (position === 'top') {
    return {
      transform: `translate(-50%, -100%)`,
    };
  }

  if (position === 'top-end') {
    return {
      transform: `translate(0%, -100%)`,
    };
  }

  if (position === 'right') {
    return {
      transform: `translate(0%, -50%)`,
    };
  }

  if (position === 'bottom-end') {
    return {};
  }

  if (position === 'bottom') {
    return {
      transform: `translate(-50%, 0%)`,
    };
  }

  if (position === 'bottom-start') {
    return {
      transform: `translate(-100%, 0%)`,
    };
  }

  if (position === 'left') {
    return {
      transform: `translate(-100%, -50%)`,
    };
  }

  return styles;
};

/**
 * Returns the opposite tooltip and arrow position names.
 * @param tooltipPosition - The current position of the tooltip.
 * @param arrowPosition - The current position of the arrow.
 * @returns An object containing the inversed tooltip and arrow position names.
 */
export const getInversePosition = (
  tooltipPosition: TooltipPosition,
  arrowPosition: ArrowPosition
): { container: TooltipPosition; arrow: ArrowPosition } => {
  const inverseArrow =
    arrowPosition === 'left'
      ? 'right'
      : arrowPosition === 'right'
      ? 'left'
      : arrowPosition;

  let inverseTooltipPosition: TooltipPosition = tooltipPosition;

  switch (tooltipPosition) {
    case 'top-start':
      inverseTooltipPosition = 'top-end';
      break;
    case 'left':
      inverseTooltipPosition = 'right';
      break;
    case 'bottom-start':
      inverseTooltipPosition = 'bottom-end';
      break;
    case 'top-end':
      inverseTooltipPosition = 'top-start';
      break;
    case 'right':
      inverseTooltipPosition = 'left';
      break;
    case 'bottom-end':
      inverseTooltipPosition = 'bottom-start';
      break;
  }

  return { container: inverseTooltipPosition, arrow: inverseArrow };
};
