import { Select, SelectProps, useTheme } from '@mui/material';
import { Icon } from 'src/index';

export type { SelectProps as CustomSelectProps } from '@mui/material';

export const CustomSelect = <Value,>({
  children,
  ...props
}: SelectProps<Value>) => {
  const { palette } = useTheme();

  return (
    <Select
      IconComponent={(props) => (
        <Icon.CaretDownIcon
          {...props}
          weight="bold"
          color={
            props.disabled ? palette.uiCoolGray[800] : palette.uiCoolGray[300]
          }
          style={{
            position: 'absolute',
            right: '12px',
            top: 'calc(50% - 0.5em)',
          }}
        />
      )}
      {...props}
      sx={{
        backgroundColor: palette.common.white,
        textAlign: 'left',
        ...props.sx,
        '&.Mui-disabled': {
          backgroundColor: 'transparent',
        },
        '&.Mui-disabled:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: palette.uiCoolGray[300],
        },
      }}
    >
      {children}
    </Select>
  );
};
