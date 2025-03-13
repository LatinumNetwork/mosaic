import {
  Alert,
  Button,
  CircularProgress,
  IconButton,
  Snackbar as MUISnackbar,
  SxProps,
  Theme,
} from '@mui/material';
import { X as CloseIcon } from '@phosphor-icons/react';
import { ReactNode } from 'react';
import { Typography } from 'src/components';

interface ActionButtonProps {
  label: string;
  onClick: () => void;
}

interface CustomStyles {
  alert?: SxProps<Theme>;
  snackbar?: SxProps<Theme>;
  button?: SxProps<Theme>;
}

type SnackbarType = 'info' | 'success' | 'alert' | 'warning' | 'loading';

export interface SnackbarProps {
  id?: string;
  type: SnackbarType;
  message: string;
  customStyles?: CustomStyles;
  showClose?: boolean;
  actionButton?: ActionButtonProps;
  open: boolean;
  onClose: () => void;
}

function LoadingSpinner() {
  return <CircularProgress size={20} />;
}

export function Snackbar({
  id,
  type,
  message,
  customStyles,
  showClose = false,
  actionButton,
  open,
  onClose,
}: SnackbarProps) {
  let severity: 'info' | 'success' | 'error' | 'warning' | undefined;
  let icon: ReactNode = null;

  switch (type) {
    case 'info':
      severity = 'info';
      break;
    case 'success':
      severity = 'success';
      break;
    case 'alert':
      severity = 'error';
      break;
    case 'warning':
      severity = 'warning';
      break;
    case 'loading':
      severity = 'info';
      icon = <LoadingSpinner />;
      break;
    default:
      severity = 'info';
  }

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
        sx={customStyles?.alert}
        action={
          <>
            {actionButton && (
              <Button sx={customStyles?.button} onClick={actionButton.onClick}>
                {actionButton.label}
              </Button>
            )}
            {showClose && (
              <IconButton onClick={onClose} size="small">
                <CloseIcon fontSize="small" />
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
