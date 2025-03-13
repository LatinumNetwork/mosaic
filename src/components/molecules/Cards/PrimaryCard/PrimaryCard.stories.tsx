import { IconButton, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from 'src/components';
import { Icon } from 'src/index';

import { PrimaryCard } from './PrimaryCard';

const meta: Meta<typeof PrimaryCard> = {
  title: 'Molecules/Cards/PrimaryCard',
  component: PrimaryCard,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof PrimaryCard>;

export const Default: Story = {
  args: {
    title: 'This is a title',
    description: 'This is a description',
    children: <Typography>This is the card body</Typography>,
  },
  render: (args) => <PrimaryCard {...args} />,
};

export const NoDescription: Story = {
  args: {
    title: 'This is a title',
    children: <Typography>This is the card body</Typography>,
  },
  render: (args) => <PrimaryCard {...args} />,
};

export const CardActions: Story = {
  args: {
    title: 'This is a title',
    description: 'This is a description',
    cardActions: [
      <Button key="1">Action 1</Button>,
      <IconButton key="2">
        <Icon.DotsThree />
      </IconButton>,
    ],
    children: <Typography>This is the card body</Typography>,
  },
  render: (args) => <PrimaryCard {...args} />,
};
