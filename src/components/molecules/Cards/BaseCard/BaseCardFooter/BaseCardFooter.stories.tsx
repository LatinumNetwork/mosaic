import { Meta, StoryObj } from '@storybook/react';
import { Typography } from 'src/components';

import { BaseCardFooter } from './BaseCardFooter';

const meta: Meta<typeof BaseCardFooter> = {
  title: 'Molecules/Cards/BaseCard/BaseCardFooter',
  component: BaseCardFooter,
};

export default meta;

type Story = StoryObj<typeof BaseCardFooter>;

export const Default: Story = {
  args: { hideSeparator: false },
  argTypes: {
    hideSeparator: {
      control: {
        type: 'boolean',
      },
    },
  },
  render: (args) => (
    <BaseCardFooter {...args}>
      <Typography>This is a sample footer</Typography>
    </BaseCardFooter>
  ),
};
