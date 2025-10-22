import {
  Switch as MuiSwitch,
  SwitchProps as MuiSwitchProps,
  styled,
} from '@mui/material';
import { hexToRgba } from 'src/utils';

type SwitchSize = 'small' | 'medium' | 'large';

export interface SwitchProps extends MuiSwitchProps {
  switchSize: SwitchSize;
}

export const Switch = styled(MuiSwitch, {
  shouldForwardProp: (prop) => prop !== 'switchSize',
})<SwitchProps>(({ theme, switchSize }) => {
  const sizes = {
    small: {
      width: 28,
      height: 16,
      thumbWidth: 12,
      thumbHeight: 12,
      thumbBorderRadius: 6,
      switchBasePadding: 2,
      switchBaseTransform: 12,
      activeTransform: 9,
    },
    medium: {
      width: 36,
      height: 20,
      thumbWidth: 16,
      thumbHeight: 16,
      thumbBorderRadius: 8,
      switchBasePadding: 3,
      switchBaseTransform: 16,
      activeTransform: 12,
    },
    large: {
      width: 48,
      height: 24,
      thumbWidth: 18,
      thumbHeight: 18,
      thumbBorderRadius: 10,
      switchBasePadding: 3,
      switchBaseTransform: 23,
      activeTransform: 16,
    },
  };

  const {
    width,
    height,
    thumbWidth,
    thumbHeight,
    thumbBorderRadius,
    switchBasePadding,
    switchBaseTransform,
    activeTransform,
  } = sizes[switchSize];

  return {
    width,
    height,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: thumbWidth + 3,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: `translateX(${activeTransform}px)`,
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: switchBasePadding,
      '&.Mui-checked': {
        transform: `translateX(${switchBaseTransform}px)`,
        color: theme.palette.defaultColors.white,
        '&.Mui-disabled': {
          color: theme.palette.defaultColors.white,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.uiBlue[400],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          backgroundColor: theme.palette.uiBlue[100],
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: `0 2px 4px 0 ${hexToRgba(
        theme.palette.defaultColors.black,
        25
      )}`,
      width: thumbWidth,
      height: thumbHeight,
      borderRadius: thumbBorderRadius,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: height / 2,
      opacity: 1,
      backgroundColor: hexToRgba(theme.palette.defaultColors.black, 25),
      boxSizing: 'border-box',
    },
  };
});
