import { Meta, StoryObj } from '@storybook/react';

import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Atoms/Switch',
  component: Switch,
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    switchSize: 'small',
  },
  argTypes: {
    checked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    switchSize: {
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large'],
        default: 'small',
      },
    },
    ref: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
    component: { table: { disable: true } },
    theme: { table: { disable: true } },
  },
  render: (args) => <Switch {...args} />,
};
export const Small: Story = {
  args: {
    checked: false,
    disabled: false,
    switchSize: 'small',
  },
  render: (args) => <Switch {...args} />,
};

export const Medium: Story = {
  args: {
    checked: false,
    disabled: false,
    switchSize: 'medium',
  },
  render: (args) => <Switch {...args} />,
};

export const Large: Story = {
  args: {
    checked: false,
    disabled: false,
    switchSize: 'large',
  },
  render: (args) => <Switch {...args} />,
};

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
    switchSize: 'small',
  },
  render: (args) => <Switch {...args} />,
};

export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    switchSize: 'small',
  },
  render: (args) => <Switch {...args} />,
};
