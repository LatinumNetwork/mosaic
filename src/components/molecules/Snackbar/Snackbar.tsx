import {
  Alert,
  Button,
  CircularProgress,
  IconButton,
  Snackbar as MUISnackbar,
  Palette,
  SxProps,
  Theme,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { X as CloseIcon } from '@phosphor-icons/react';
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

export type SnackbarType = 'info' | 'success' | 'alert' | 'warning' | 'loading';

export interface SnackbarProps {
  id?: string;
  type: SnackbarType;
  message: string;
  customStyles?: CustomStyles;
  customIcon?: ReactNode;
  showClose?: boolean;
  showCancel?: boolean;
  actionButton?: ActionButtonProps;
  open: boolean;
  onClose: () => void;
  onCancel: () => void;
}

const mapTypeToSeverity = (type: SnackbarType) => {
  switch (type) {
    case 'info':
      return 'info';
    case 'success':
      return 'success';
    case 'alert':
      return 'error';
    case 'warning':
      return 'warning';
    case 'loading':
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
  let actionColor;
  let icon = null;

  switch (type) {
    case 'success':
    case 'alert':
    case 'info':
    case 'loading':
      actionColor = palette.uiWhite[500];
      break;
    case 'warning':
      actionColor = palette.uiGray[800];
      break;
    default:
      actionColor = palette.uiGray[800];
  }

  if (customIcon) icon = customIcon;
  if (type === 'loading')
    icon = <CircularProgress size={20} sx={{ color: actionColor }} />;

  return { actionColor, icon };
};

export function Snackbar({
  id,
  type,
  message,
  customStyles,
  customIcon,
  showClose = false,
  showCancel = false,
  actionButton,
  open,
  onClose,
  onCancel,
}: SnackbarProps) {
  const { palette } = useTheme();
  const severity = mapTypeToSeverity(type);
  const { actionColor, icon } = setStyles(palette, type, customIcon);

  return (
    <MUISnackbar
      id={id}
      open={open}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      sx={{ maxWidth: 800, ...customStyles?.snackbar }}
    >
      <Alert
        severity={severity}
        icon={icon}
        sx={{
          borderColor: '10px solid blue',
          display: 'flex',
          padding: '4px 12px 4px 8px',
          alignItems: 'center',
          '.MuiAlert-action': {
            display: 'flex',
            alignItems: 'center',
            padding: 0,
          },
          color: actionColor,
          ...customStyles?.alert,
        }}
        action={
          <>
            {actionButton && (
              <Button
                sx={{
                  color: actionColor,
                  marginLeft: '24px',
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
                <CloseIcon weight="bold" size={16} color={actionColor} />
              </IconButton>
            )}
            {(showCancel || type === 'loading') && (
              <IconButton onClick={onCancel} size="small">
                <Typography
                  sx={{ marginRight: '4px', marginLeft: '32px' }}
                  weight="medium"
                  variant="b2"
                  color={actionColor}
                >
                  Cancel
                </Typography>
              </IconButton>
            )}
          </>
        }
      >
        <Typography>{message}</Typography>
      </Alert>
    </MUISnackbar>
  );
}
