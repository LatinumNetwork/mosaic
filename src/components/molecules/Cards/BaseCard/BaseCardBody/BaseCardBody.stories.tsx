import { Meta, StoryObj } from '@storybook/react';
import { Typography } from 'src/components';

import { BaseCardBody } from './BaseCardBody';

const meta: Meta<typeof BaseCardBody> = {
  title: 'Components/Cards/BaseCard/BaseCardBody',
  component: BaseCardBody,
};

export default meta;

type Story = StoryObj<typeof BaseCardBody>;

export const Default: Story = {
  render: () => (
    <BaseCardBody>
      <Typography>This is a sample body</Typography>
    </BaseCardBody>
  ),
};
