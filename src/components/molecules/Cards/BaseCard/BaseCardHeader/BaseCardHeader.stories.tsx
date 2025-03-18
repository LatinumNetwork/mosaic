import { Meta, StoryObj } from '@storybook/react';
import { Typography } from 'src/components';

import { BaseCardHeader } from './BaseCardHeader';

const meta: Meta<typeof BaseCardHeader> = {
  title: 'Molecules/Cards/BaseCard/BaseCardHeader',
  component: BaseCardHeader,
};

export default meta;

type Story = StoryObj<typeof BaseCardHeader>;

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
    <BaseCardHeader {...args}>
      <Typography>This is a title</Typography>
    </BaseCardHeader>
  ),
};
