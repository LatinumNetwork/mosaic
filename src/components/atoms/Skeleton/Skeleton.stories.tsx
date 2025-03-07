import { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    height: '100px',
    width: '400px',
    variant: 'rectangular',
  },
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['circular', 'rectangular'],
      },
    },
  },
  render: (args) => <Skeleton {...args} />,
};
