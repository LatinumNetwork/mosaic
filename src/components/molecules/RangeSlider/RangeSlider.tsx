import { Box, Slider, Typography, styled, useTheme } from '@mui/material';
import { hexToRgba } from 'src/utils';

import { NumberInput } from '../../atoms/NumberInput';

const CustomSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.uiBlue[200],
  borderRadius: 0,
  padding: '8px 0 !important',
  height: '8px',
  '& .MuiSlider-thumb': {
    backgroundColor: theme.palette.uiBlue[500],
    width: '16px',
    height: '16px',
    '&:hover, &.Mui-focusVisible, &.Mui-active': {
      boxShadow: `0px 0px 0px 8px ${hexToRgba(
        theme.palette.uiBlue[100] ?? '#000',
        40
      )}`,
    },
  },
  '& .MuiSlider-rail': {
    color: theme.palette.uiCoolGray[100],
    opacity: 1,
  },
  '.MuiSlider-mark': { display: 'none' },
  '.MuiSlider-markLabel': { fontSize: '10px', top: '26px !important' },
}));

export interface RangeSliderProps {
  min: number;
  max: number;
  values: [number, number];
  setValues: (value: [number, number]) => void;
  showNumberInputs?: boolean;
}

export const RangeSlider = ({
  min,
  max,
  values,
  setValues,
  showNumberInputs = true,
}: RangeSliderProps) => {
  const { palette } = useTheme();

  const handleLowerValueChange = (newValue: number) => {
    const upperValue = values[1];
    const lowerValue = Math.max(min, Math.min(newValue, upperValue));
    setValues([lowerValue, upperValue]);
  };

  const handleUpperValueChange = (newValue: number) => {
    const lowerValue = values[0];
    const upperValue = Math.min(Math.max(newValue, lowerValue), max);
    setValues([lowerValue, upperValue]);
  };

  return (
    <Box sx={{ paddingLeft: '32px' }}>
      <CustomSlider
        value={values}
        onChange={(_, newValue) => setValues(newValue as [number, number])}
        valueLabelDisplay="auto"
        min={min}
        max={max}
        defaultValue={[min, max]}
        marks={[
          {
            value: min,
            label: min.toString(),
          },
          {
            value: max,
            label: max.toString(),
          },
        ]}
      />
      {showNumberInputs && (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <NumberInput
            value={values[0]}
            setValue={handleLowerValueChange}
            min={min}
            max={values[1]}
          />
          <Typography color={palette.uiCoolGray[300]} variant="b1">
            -
          </Typography>
          <NumberInput
            value={values[1]}
            setValue={handleUpperValueChange}
            min={values[0]}
            max={max}
          />
        </Box>
      )}
    </Box>
  );
};
