import { Box } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';
import { Snackbar, SnackbarProps } from 'src/components';

const meta: Meta<typeof Snackbar> = {
  title: 'Molecules/Snackbar',
  component: Snackbar,
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'alert', 'warning', 'loading', 'custom'],
    },
    message: { control: 'text' },
    open: { control: 'boolean' },
    showClose: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Snackbar>;

const sharedArgs = {
  open: true,
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
    type: 'info',
    message: 'This is an info snackbar',
    ...sharedArgs,
    actionButton: undefined,
    showCancel: true,
    showClose: false,
  },
  ...sharedRender,
};

export const SuccessSnackbar: Story = {
  args: {
    type: 'success',
    message: 'Operation was successful!',
    ...sharedArgs,
  },
  ...sharedRender,
};

export const AlertSnackbar: Story = {
  args: {
    type: 'alert',
    message: 'An error occurred.',
    ...sharedArgs,
  },
  ...sharedRender,
};

export const WarningSnackbar: Story = {
  args: {
    type: 'warning',
    message: 'This is a warning.',
    ...sharedArgs,
  },
  ...sharedRender,
};

export const LoadingSnackbar: Story = {
  args: {
    type: 'loading',
    message: 'Loading, please wait...',
    ...sharedArgs,
    showClose: false,
    actionButton: undefined,
  },
  ...sharedRender,
};
