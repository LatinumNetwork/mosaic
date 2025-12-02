import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  styled,
  useTheme,
} from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { Icon } from 'src/index';

export interface NumberInputProps {
  value: number;
  setValue: (value: number) => void;
  min: number;
  max: number;
}

const NumericTextField = styled(TextField)(({ theme }) => ({
  width: '120px',
  '.MuiInputBase-root': {
    padding: 0,
    '& fieldset': {
      borderColor: theme.palette.uiCoolGray[200],
    },
    '&.Mui-focused fieldset': {
      border: `1px solid ${theme.palette.uiCoolGray[300]}`,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.uiCoolGray[300],
    },
  },
  '& input[type=number]': {
    MozAppearance: 'textfield',
    WebkitAppearance: 'none',
    appearance: 'textfield',
    padding: '8px 12px 8px',
    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
  },
}));

const NumberInput = ({ value, setValue, min, max }: NumberInputProps) => {
  const { palette } = useTheme();
  const [inputValue, setInputValue] = useState<string>(value.toString());

  useEffect(() => {
    setInputValue(value.toString());
  }, [value]);

  const handleIncrease = () => {
    if (value < max) {
      setValue(value + 1);
    }
  };

  const handleDecrease = () => {
    if (value > min) {
      setValue(value - 1);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputBlur = () => {
    let num = parseInt(inputValue);
    if (isNaN(num)) {
      setInputValue(value.toString());
      return;
    }
    if (num < min) num = min;
    if (num > max) num = max;
    setValue(num);
    setInputValue(num.toString());
  };

  return (
    <Box>
      <NumericTextField
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{ width: '100%', height: '100%' }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  height: '100%',
                  width: '100%',
                  borderLeft: `1px solid ${palette.uiCoolGray[200]}`,
                }}
              >
                <IconButton
                  size="small"
                  onClick={handleIncrease}
                  sx={{
                    padding: '0 8px',
                    borderRadius: 0,
                    borderBottom: `1px solid ${palette.uiCoolGray[200]}`,
                    height: '20px',
                  }}
                >
                  <Icon.CaretUpIcon size={16} />
                </IconButton>
                <IconButton
                  size="small"
                  onClick={handleDecrease}
                  sx={{ padding: '0 8px', borderRadius: 0, height: '20px' }}
                >
                  <Icon.CaretDownIcon size={16} />
                </IconButton>
              </Box>
            </InputAdornment>
          ),
        }}
        type="number"
        inputProps={{ min, max, inputMode: 'numeric', pattern: '[0-9]*' }}
      />
    </Box>
  );
};

export { NumberInput };
