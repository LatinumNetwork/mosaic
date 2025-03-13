import { Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';
import { Button, Icon } from 'src/index';

import { SecondaryCard } from './SecondaryCard';

const meta: Meta<typeof SecondaryCard> = {
  title: 'Molecules/Cards/SecondaryCard',
  component: SecondaryCard,
};

export default meta;

type Story = StoryObj<typeof SecondaryCard>;

export const Default: Story = {
  args: {
    title: { text: 'This is a title' },
    children: <Typography>This is the card body</Typography>,
  },
  render: (args) => <SecondaryCard {...args} />,
};

export const WithIcon: Story = {
  args: {
    title: { text: 'This is a title', endIcon: <Icon.Wrench /> },
    children: <Typography>This is the card body</Typography>,
  },
  render: (args) => <SecondaryCard {...args} />,
};

export const Loading: Story = {
  args: {
    title: { text: 'This is a title' },
    isLoading: true,
    children: <Typography>This is the card body</Typography>,
  },
  render: (args) => <SecondaryCard {...args} />,
};

export const CardActions: Story = {
  args: {
    title: { text: 'This is a title' },
    cardActions: [
      <Button variant="tertiary" key="1">
        Action 1
      </Button>,
    ],
    children: <Typography>This is the card body</Typography>,
  },
  render: (args) => <SecondaryCard {...args} />,
};
