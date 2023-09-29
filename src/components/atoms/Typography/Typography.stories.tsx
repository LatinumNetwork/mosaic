import { Meta, StoryFn } from '@storybook/react';
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

type FontWeightPropsAndCustomArgs = React.ComponentProps<typeof Typography>;

const argTypesFontWeight = {
  variant: {
    control: { type: 'radio' },
    options: ['h1', 'h2', 'h3', 'b1', 'b2', 'b3', 'caption'],
  },
  fontWeight: {
    control: { type: 'radio' },
    options: ['400', '500', '700', '900'],
    table: {
      defaultValue: '400',
    },
  },
  children: {
    defaultValue: 'Mosaic by Collage Group',
    control: {
      type: 'text',
    },
  },
};

export const Variant: Meta<FontWeightPropsAndCustomArgs> = {
  component: Typography,
  args: {
    children: 'Mosaic by Collage Group',
  },
  argTypes: argTypesFontWeight,
  parameters: {
    controls: { include: Object.keys(argTypesFontWeight) },
  },
  render: ({ children, fontWeight, ...args }) => (
    <Typography {...args} sx={{ fontWeight: `${fontWeight}` }}>
      {children}
    </Typography>
  ),
};
