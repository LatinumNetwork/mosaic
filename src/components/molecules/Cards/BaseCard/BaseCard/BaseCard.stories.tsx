import { Box } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';
import { Typography } from 'src/components';

import BaseCard from './BaseCard';

const meta: Meta<typeof BaseCard> = {
  title: 'Components/Cards/BaseCard/BaseCard',
  component: BaseCard,
  parameters: {
    controls: { include: [] },
  },
};

export default meta;

type Story = StoryObj<typeof BaseCard>;

export const Default: Story = {
  render: (args) => (
    <BaseCard {...args}>
      <Typography>Empty content.</Typography>
    </BaseCard>
  ),
};

export const WithContent: Story = {
  render: (args) => (
    <BaseCard {...args}>
      <BaseCard.Header>
        <Box>
          <Typography variant="h2">Brand Awareness</Typography>
          <Typography>Percentege of consumers aware of your brand.</Typography>
        </Box>
      </BaseCard.Header>
      <BaseCard.Body>
        <Typography>Main content goes here.</Typography>
      </BaseCard.Body>
    </BaseCard>
  ),
};
