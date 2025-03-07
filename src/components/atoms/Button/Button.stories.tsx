import { Plus, TrashSimple } from '@phosphor-icons/react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from 'src/components';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'link', 'nav', 'tesxt'],
      },
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    size: 'medium',
    disabled: false,
  },
  parameters: {
    controls: { include: ['variant', 'size', 'disabled', 'children'] },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Text Button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
};

export const Nav: Story = {
  args: {
    variant: 'nav',
    children: 'Nav Button',
  },
};

export const WithIconStart: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => (
    <Button startIcon={<Plus size={18} />} {...args}>
      Button
    </Button>
  ),
};

export const WithIconEnd: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => (
    <Button endIcon={<TrashSimple size={20} />} {...args}>
      Button
    </Button>
  ),
};
