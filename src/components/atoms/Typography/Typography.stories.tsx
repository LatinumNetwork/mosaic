import { StoryObj } from '@storybook/react';
import React from 'react';
import { Typography, TypographyProps } from 'src/components';

const argTypes = {
  variant: {
    control: { type: 'radio' },
    options: ['h1', 'h2', 'h3', 'b1', 'b2', 'b3', 'caption'],
  },
  weight: {
    control: { type: 'radio' },
    options: ['regular', 'medium', 'semiBold', 'bold'],
    table: {
      defaultValue: 'regular',
    },
  },
  children: {
    defaultValue: 'Mosaic by Collage Group',
    control: {
      type: 'text',
    },
  },
};

const defaultArgs = {
  weight: 'regular',
  children: 'Mosaic by Collage Group',
};

export default {
  title: 'Atoms/Typography',
  component: Typography,
  args: defaultArgs,
  argTypes,
  parameters: {
    controls: { include: Object.keys(argTypes) },
  },
};

const Template: StoryObj<typeof Typography> = {
  render: ({ children, ...args }) => (
    <Typography {...args}> {children} </Typography>
  ),
};

export const Header = {
  ...Template,
  args: {
    variant: 'h1',
    weight: 'semiBold',
  },
};

export const Caption = {
  ...Template,
  args: {
    variant: 'caption',
  },
};

export const Body = {
  ...Template,
  args: {
    variant: 'b1',
  },
};
