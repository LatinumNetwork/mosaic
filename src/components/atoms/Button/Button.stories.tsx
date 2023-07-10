import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { StoryFn, Meta, Story } from '@storybook/react';
import Box from 'atoms/Box';
import React from 'react';
import { PaletteColors } from 'src/typings';

import Button from './Button';

const argTypes = {
  variant: {
    control: { type: 'select' },
    options: [
      'primary',
      'secondary',
      'tertiary',
      'link',
      'nav',
      'outlined',
      'text',
      'contained',
    ],
    table: {
      defaultValue: {
        summary: 'primary',
      },
    },
  },
  size: {
    control: { type: 'select' },
    options: ['small', 'medium', 'large'],
    table: {
      defaultValue: {
        summary: 'small',
      },
    },
  },
};

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  argTypes,
  parameters: {
    controls: { include: Object.keys(argTypes) },
  },
};

export default meta;

const Template: StoryFn<typeof Button> = ({
  children,
  ...args
}): JSX.Element => <Button {...args} children={children} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary Button',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  children: 'Tertiary Button',
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  children: 'Text Button',
};

export const Link = Template.bind({});
Link.args = {
  variant: 'link',
  children: 'Link Button',
};

export const Nav = Template.bind({});
Nav.args = {
  variant: 'nav',
  children: 'Nav Button',
};

export const Disabled: Story = () => {
  return (
    <Box display="flex" justifyContent="space-around">
      <Button variant="primary" disabled>
        Button
      </Button>
      <Button variant="secondary" disabled>
        Button
      </Button>
      <Button variant="tertiary" disabled>
        Button
      </Button>
    </Box>
  );
};

export const Colors: Story = () => {
  return (
    <Box display="flex" justifyContent="space-around">
      <Button color={PaletteColors.uiGray}>uiGray</Button>
      <Button color={PaletteColors.collageViolet}>collageViolet</Button>
      <Button color={PaletteColors.collageOrange}>collageOrange</Button>
      <Button color={PaletteColors.collageTeal}>collageTeal</Button>
      <Button color={PaletteColors.collageYellow}>collageYellow</Button>
    </Box>
  );
};

export const WithIconStart: StoryFn<typeof Button> = (args) => (
  <Button startIcon={<AddIcon />} {...args}>
    Button
  </Button>
);

WithIconStart.args = {
  variant: 'primary',
  color: PaletteColors.collageRed,
};

export const WithIconEnd: StoryFn<typeof Button> = (args) => (
  <Button endIcon={<DeleteIcon />} {...args}>
    Button
  </Button>
);

WithIconEnd.args = {
  variant: 'primary',
  color: PaletteColors.collageRed,
};
