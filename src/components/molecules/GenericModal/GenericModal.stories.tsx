import { Box } from '@mui/material';
import { Check } from '@phosphor-icons/react';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Button,
  GenericModal,
  GenericModalProps,
  Typography,
} from 'src/components';

const meta: Meta<typeof GenericModal> = {
  title: 'Molecules/GenericModal',
  component: GenericModal,
  argTypes: {
    width: { control: 'number' },
    onClose: { action: 'closed' },
  },
};

export default meta;

type Story = StoryObj<typeof GenericModal>;

const ModalWrapper = (props: GenericModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <GenericModal {...props} open={open} onClose={() => setOpen(false)} />
    </Box>
  );
};

const sharedRender = {
  render: (args: GenericModalProps) => <ModalWrapper {...args} />,
};

export const Default: Story = {
  args: {
    title: { text: 'Modal Title' },
    children: (
      <Typography>
        This is the modal content. You can place any React node here.
      </Typography>
    ),
    width: 688,
  },
  ...sharedRender,
};

export const WithTagAndIcon: Story = {
  args: {
    tag: 'Example Tag',
    title: {
      text: 'Modal with Tag',
      endIcon: <Check size={20} />,
    },
    children: (
      <Typography>
        This modal has a tag and an end icon on the title.
      </Typography>
    ),
    width: 600,
  },
  ...sharedRender,
};
