import { StoryFn } from '@storybook/react';
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

const Template: StoryFn<typeof Typography> = ({
  children,
  ...args
}: TypographyProps): React.JSX.Element => (
  <Typography {...args}> {children} </Typography>
);

export const Header = Template.bind({});
Header.args = {
  variant: 'h1',
  weight: 'semiBold',
};

export const Caption = Template.bind({});
Caption.args = {
  variant: 'caption',
};

export const Body = Template.bind({});
Body.args = {
  variant: 'b1',
};
