import { Box, OutlinedInput, SxProps, useTheme } from '@mui/material';
import { Icon } from 'src/index';

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
  const {
    palette: {
      uiCoolGray,
      common: { white },
    },
  } = useTheme();

  const resolvedIconColor = iconColor || uiCoolGray[400];

  return (
    <Box
      sx={{
        display: 'flex',
        padding: '4px',
        height: '48px',
        minHeight: '48px',
        backgroundColor: white,
        ...sxSearchBox,
      }}
    >
      <OutlinedInput
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        fullWidth
        sx={{ paddingRight: 0 }}
        endAdornment={
          <Box
            sx={{
              display: 'flex',
              height: '100%',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            {value && (
              <Icon.XCircleIcon
                onClick={() => onChange('')}
                size={iconSize}
                color={resolvedIconColor}
                style={{
                  cursor: 'pointer',
                  marginRight: '12px',
                }}
                data-testid="reset-search"
              />
            )}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                paddingX: '8px',
                height: '100%',
                borderLeft: `1px solid ${uiCoolGray[200]}`,
                ...sxIconContainer,
              }}
            >
              <Icon.MagnifyingGlassIcon
                size={iconSize}
                color={resolvedIconColor}
              />
            </Box>
          </Box>
        }
      />
    </Box>
  );
};
