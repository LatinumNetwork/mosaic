import { Box } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';
import { Snackbar, SnackbarProps, SnackbarType } from 'src/components';

const meta: Meta<typeof Snackbar> = {
  title: 'Molecules/Snackbar',
  component: Snackbar,
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'alert', 'warning', 'loading', 'custom'],
    },
    message: { control: 'text' },
    showClose: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Snackbar>;

const sharedArgs = {
  showClose: true,
  onClose: () => console.log('Snackbar closed'),
  actionButton: {
    label: 'Button',
    onClick: () => console.log('Action'),
  },
};

const sharedRender = {
  render: (args: SnackbarProps) => (
    <Box sx={{ height: 70 }}>
      <Snackbar {...args} />
    </Box>
  ),
};

export const Default: Story = {
  args: {
    type: SnackbarType.Default,
    message: 'This is the default snackbar',
    ...sharedArgs,
  },
  ...sharedRender,
};

export const Info: Story = {
  args: {
    type: SnackbarType.Info,
    message: 'This is an info snackbar',
    ...sharedArgs,
  },
  ...sharedRender,
};

export const SuccessSnackbar: Story = {
  args: {
    type: SnackbarType.Success,
    message: 'Operation was successful',
    ...sharedArgs,
  },
  ...sharedRender,
};

export const AlertSnackbar: Story = {
  args: {
    type: SnackbarType.Alert,
    message: 'An error occurred',
    ...sharedArgs,
  },
  ...sharedRender,
};

export const WarningSnackbar: Story = {
  args: {
    type: SnackbarType.Warning,
    message: 'This is a warning',
    ...sharedArgs,
  },
  ...sharedRender,
};

export const LoadingSnackbar: Story = {
  args: {
    type: SnackbarType.Loading,
    message: 'Loading, please wait...',
    ...sharedArgs,
    showClose: false,
    actionButton: {
      label: 'Cancel',
      onClick: () => console.log('Action'),
    },
  },
  ...sharedRender,
};
