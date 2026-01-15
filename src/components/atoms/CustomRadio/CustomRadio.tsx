import { Radio, styled } from '@mui/material';
import { hexToRgba } from 'src/index';

export type { RadioProps as CustomRadioProps } from '@mui/material';

const CustomRadio = styled(Radio)(({ theme: { palette } }) => ({
  padding: '4px',
  '&, &.Mui-checked': {
    color: palette.uiBlue[500],
  },
  ':hover': {
    backgroundColor: hexToRgba(palette.uiBlue[500], 5),
  },
}));

export { CustomRadio };
