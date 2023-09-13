import { StoryFn } from '@storybook/react';
import React from 'react';
import { Typography, TypographyProps } from 'src/components';

const argTypes = {
  weight: {
    defaultValue: 'regular',
    control: { type: 'radio' },
  },
  children: {
    defaultValue: 'Hello world!',
    control: {
      type: 'text',
    },
  },
  className: {
    defaultValue: '', // or some default class for demonstration
    control: {
      type: 'text',
    },
    description: 'CSS class applied to the Typography component',
  },
  sx: {
    control: {
      type: 'object',
    },
    description: 'Inline styles applied to the Typography component',
  },
};

export default {
  title: 'Atoms/Typography',
  component: Typography,
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

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};

export const Header = Template.bind({});
Header.args = {
  children: 'Heading',
  variant: 'h1',
  weight: 'semiBold',
};

export const Body = Template.bind({});
Body.args = {
  children: 'Body',
  variant: 'h1',
};
