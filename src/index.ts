export * from '@mui/material';

// NOTE: Only add custom components with modifications here. This will override the default MUI components.
// All other components are re-exported via the wildcard export from the components folder.

export type {
  BreadcrumbsProps,
  ButtonProps,
  SkeletonProps,
  StreamlineIconProps,
  TypographyProps,
  Snackbar,
  SnackbarProps,
  SwitchProps,
} from './components';

export {
  Breadcrumbs,
  Button,
  Skeleton,
  StreamlineIcon,
  Typography,
  Switch,
} from './components';

export * from './components';

export * from './colors';
export * from './types';
export * from './theme';
export * as Icon from '@phosphor-icons/react';

export * from './utils';
