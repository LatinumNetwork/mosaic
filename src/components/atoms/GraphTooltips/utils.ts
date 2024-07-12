import { Theme } from '@latinum-network/mosaic';
import { CSSProperties } from 'react';

import { ArrowPosition, xPosition, yPosition } from './GraphTooltips';

export const getTooltipPositionStyles = (
  XPosition: xPosition,
  YPosition: yPosition,
  top: number,
  left?: number,
  right?: number,
  width: number | 'auto' = 0,
  height: number | 'auto' = 0
): CSSProperties => {
  let styles: CSSProperties = {};

  if (left) {
    switch (XPosition) {
      case 'center':
        styles = {
          ...styles,
          transform: `translateX(-50%)`,
          left: `${left}px`,
        };
        break;
      case 'right':
        styles = {
          ...styles,
          left:
            typeof width === 'number' ? `${left - width}px` : `${left - 100}px`,
        };
        break;
      case 'left':
        styles = {
          ...styles,
          left: `${left}px`,
        };
        break;
    }
  } else if (right) {
    styles = {
      ...styles,
      right: `${right}px`,
    };
  }

  switch (YPosition) {
    case 'center':
      styles = {
        ...styles,
        transform: `${
          styles.transform ? styles.transform + ' ' : ''
        }translateY(-50%)`,
        top: `${top}px`,
      };
      break;
    case 'bottom':
      styles = {
        ...styles,
        top: typeof height === 'number' ? `${top - height}px` : `${top - 48}px`,
      };
      break;
    case 'top':
      styles = {
        ...styles,
        top: `${top}px`,
      };
      break;
  }

  return styles;
};

export const getArrowStyles = (theme: Theme, position: ArrowPosition) => {
  const { uiGray } = theme.palette;
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
        borderColor: `transparent transparent ${uiGray[800]} transparent`,
      };
    case 'bottom':
      return {
        ...common,
        top: '100%',
        left: '50%',
        marginLeft: '-5px',
        borderColor: `${uiGray[800]} transparent transparent transparent`,
      };
    case 'left':
      return {
        ...common,
        right: '99%',
        top: '50%',
        marginTop: '-5px',
        borderColor: `transparent ${uiGray[800]} transparent transparent`,
      };
    case 'right':
      return {
        ...common,
        top: '50%',
        left: '100%',
        marginTop: '-5px',
        borderColor: `transparent transparent transparent ${uiGray[800]}`,
      };
    default:
      return {};
  }
};
