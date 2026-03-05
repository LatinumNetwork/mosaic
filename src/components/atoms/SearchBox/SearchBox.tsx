import { Box, OutlinedInput, SxProps, useTheme } from '@mui/material';
import { Icon, hexToRgba } from 'src/index';

import { CustomTooltip } from '../CustomTooltip';

export interface SearchBoxProps {
  value: string;
  onChange: (newValue: string) => void;
  placeholder: string;
  sxSearchBox?: SxProps;
  sxIconContainer?: SxProps;
  iconColor?: string;
  iconSize?: number;
}

export const SearchBox = ({
  value,
  onChange,
  placeholder,
  sxSearchBox = {},
  sxIconContainer = {},
  iconColor,
  iconSize = 22,
}: SearchBoxProps) => {
  const { palette } = useTheme();

  const resolvedIconColor = iconColor || palette.uiGray[400];

  return (
    <OutlinedInput
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      fullWidth
      sx={{
        padding: '8px 12px',
        height: '40px',
        backgroundColor: palette.common.white,
        ...sxSearchBox,
      }}
      startAdornment={
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            paddingRight: '8px',
            height: '100%',
            color: resolvedIconColor,
            '.MuiOutlinedInput-root:focus-within &': {
              color: palette.uiBlue[400],
            },
            ...sxIconContainer,
          }}
        >
          <Icon.MagnifyingGlassIcon size={iconSize} weight="bold" />
        </Box>
      }
      endAdornment={
        value && (
          <CustomTooltip title="Clear" arrow>
            <Box
              component={'span'}
              onClick={() => onChange('')}
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexShrink: 0,
                cursor: 'pointer',
                marginLeft: '8px',
                color: iconColor || hexToRgba(palette.uiGray[800], 65),
                '&:hover': { color: palette.uiGray[800], background: 'none' },
              }}
            >
              <Icon.XCircleIcon size={iconSize} weight="bold" />
            </Box>
          </CustomTooltip>
        )
      }
    />
  );
};
