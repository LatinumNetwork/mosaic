import {
  Alert,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Palette,
  SxProps,
  Theme,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { XIcon as CloseIcon } from '@phosphor-icons/react';
import { ReactNode } from 'react';
import { Typography } from 'src/components';

export interface ActionButtonProps {
  label: string;
  onClick: () => void;
}

export interface CustomStyles {
  alert?: SxProps<Theme>;
  snackbar?: SxProps<Theme>;
  button?: SxProps<Theme>;
}

export enum SnackbarType {
  Default = 'default',
  Info = 'info',
  Success = 'success',
  Alert = 'alert',
  Warning = 'warning',
  Loading = 'loading',
}

export interface SnackbarProps {
  id?: string;
  type: SnackbarType;
  message: string;
  customStyles?: CustomStyles;
  customIcon?: ReactNode;
  showClose?: boolean;
  actionButton?: ActionButtonProps;
  onClose?: () => void;
}

const mapTypeToSeverity = (type: SnackbarType) => {
  switch (type) {
    case SnackbarType.Default:
      return 'info';
    case SnackbarType.Info:
      return 'info';
    case SnackbarType.Success:
      return 'success';
    case SnackbarType.Alert:
      return 'error';
    case SnackbarType.Warning:
      return 'warning';
    case SnackbarType.Loading:
      return 'info';
    default:
      return 'info';
  }
};

const setStyles = (
  palette: Palette,
  type: SnackbarType,
  customIcon: ReactNode
) => {
  let fontColor = palette.common.white;
  let icon = null;

  if (type === SnackbarType.Warning) {
    fontColor = palette.uiGray[800];
  }

  if (customIcon) icon = customIcon;
  if (type === SnackbarType.Loading)
    icon = (
      <CircularProgress
        size={20}
        sx={{ color: fontColor, margin: '0px 4px 0px 8px' }}
      />
    );
  if (type === SnackbarType.Default && !customIcon) {
    icon = false;
  }

  return { fontColor, icon };
};

export function Snackbar({
  id,
  type,
  message,
  customStyles,
  customIcon,
  showClose = false,
  actionButton,
  onClose,
}: SnackbarProps) {
  const { palette } = useTheme();
  const severity = mapTypeToSeverity(type);
  const { fontColor, icon } = setStyles(palette, type, customIcon);

  return (
    <Box
      id={id}
      sx={{ display: 'flex', maxWidth: 800, ...customStyles?.snackbar }}
    >
      <Alert
        severity={severity}
        icon={icon}
        variant="filled"
        sx={{
          borderColor: '10px solid blue',
          display: 'flex',
          padding: '4px 12px 4px 8px',
          alignItems: 'center',
          '.MuiAlert-action': {
            display: 'flex',
            alignItems: 'center',
            padding: '4px 0',
            marginLeft: '24px',
          },
          '.MuiAlert-icon': {
            marginRight: '8px',
          },
          '&.MuiAlert-colorSuccess': {
            backgroundColor: palette.uiGreen['600'],
          },
          '&.MuiAlert-colorInfo': {
            backgroundColor:
              type === SnackbarType.Info
                ? palette.uiBlue[600]
                : palette.uiCoolGray[900],
          },
          '&.MuiAlert-colorError': {
            backgroundColor: palette.uiRed[600],
          },
          '&.MuiAlert-colorWarning': {
            backgroundColor: palette.uiYellow[400],
          },
          ...customStyles?.alert,
        }}
        action={
          <>
            {actionButton && (
              <Button
                sx={{
                  color: fontColor,
                  padding: 0,
                  ...customStyles?.button,
                }}
                onClick={actionButton.onClick}
              >
                <Typography variant="b2" weight="medium">
                  {actionButton.label}
                </Typography>
              </Button>
            )}
            {showClose && (
              <IconButton onClick={onClose} size="small">
                <CloseIcon weight="bold" size={16} color={fontColor} />
              </IconButton>
            )}
          </>
        }
      >
        <Typography>{message}</Typography>
      </Alert>
    </Box>
  );
}
