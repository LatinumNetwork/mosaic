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
  render: () => (
    <BaseCardFooter>
      <Typography>This is a sample footer</Typography>
    </BaseCardFooter>
  ),
};
