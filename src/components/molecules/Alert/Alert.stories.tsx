import { Alert, AlertProps, Stack, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';

const argTypes = {
  severity: {
    control: { type: 'radio' },
    options: ['error', 'warning', 'info', 'success'],
  },
  variant: {
    control: { type: 'radio' },
    options: ['standard', 'filled', 'outlined'],
  },
  children: {
    control: { type: 'text' },
    defaultValue: 'This is an alert message',
  },
};

const defaultArgs = {
  severity: 'info',
  variant: 'standard',
  children: 'This is an alert message',
};

export default {
  title: 'Molecules/Alert',
  component: Alert,
  args: defaultArgs,
  argTypes,
  parameters: {
    controls: { include: Object.keys(argTypes) },
  },
} as Meta<AlertProps>;

const Template: StoryObj<typeof Alert> = {
  render: ({ children, ...args }) => (
    <Stack spacing={2}>
      <Alert {...args}>
        <Typography>{children}</Typography>
      </Alert>
    </Stack>
  ),
};

export const StandardInfoAlert = {
  ...Template,
  args: {
    severity: 'info',
    variant: 'standard',
    children: 'This is a standard informational alert.',
  },
};

export const FilledInfoAlert = {
  ...Template,
  args: {
    severity: 'info',
    variant: 'filled',
    children: 'This is a filled informational alert.',
  },
};

export const OutlinedInfoAlert = {
  ...Template,
  args: {
    severity: 'info',
    variant: 'outlined',
    children: 'This is an outlined informational alert.',
  },
};

export const StandardSuccessAlert = {
  ...Template,
  args: {
    severity: 'success',
    variant: 'standard',
    children: 'This is a standard success alert.',
  },
};

export const FilledSuccessAlert = {
  ...Template,
  args: {
    severity: 'success',
    variant: 'filled',
    children: 'This is a filled success alert.',
  },
};

export const OutlinedSuccessAlert = {
  ...Template,
  args: {
    severity: 'success',
    variant: 'outlined',
    children: 'This is an outlined success alert.',
  },
};

export const StandardWarningAlert = {
  ...Template,
  args: {
    severity: 'warning',
    variant: 'standard',
    children: 'This is a standard warning alert.',
  },
};

export const FilledWarningAlert = {
  ...Template,
  args: {
    severity: 'warning',
    variant: 'filled',
    children: 'This is a filled warning alert.',
  },
};

export const OutlinedWarningAlert = {
  ...Template,
  args: {
    severity: 'warning',
    variant: 'outlined',
    children: 'This is an outlined warning alert.',
  },
};

export const StandardErrorAlert = {
  ...Template,
  args: {
    severity: 'error',
    variant: 'standard',
    children: 'This is a standard error alert.',
  },
};

export const FilledErrorAlert = {
  ...Template,
  args: {
    severity: 'error',
    variant: 'filled',
    children: 'This is a filled error alert.',
  },
};

export const OutlinedErrorAlert = {
  ...Template,
  args: {
    severity: 'error',
    variant: 'outlined',
    children: 'This is an outlined error alert.',
  },
};
