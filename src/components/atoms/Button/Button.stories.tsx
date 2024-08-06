import { Plus, TrashSimple } from '@phosphor-icons/react';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Box, Button } from 'src/components';
import { PaletteColors } from 'src/typings';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
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
      },
      table: {
        defaultValue: {
          summary: 'primary',
        },
      },
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      table: {
        defaultValue: {
          summary: 'small',
        },
      },
    },
  },
  parameters: {
    controls: { include: ['variant', 'size'] },
  },
};

export default meta;

const Template: StoryFn<typeof Button> = ({
  children,
  ...args
}): React.JSX.Element => <Button {...args} children={children} />;

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

export const Disabled: StoryFn = () => {
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

export const Colors: StoryFn = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <Button color={PaletteColors.uiGray}>uiGray</Button>
      <Button color={PaletteColors.collageRaspberry}>collageRaspberry</Button>
      <Button color={PaletteColors.collageTeal}>collageTeal</Button>
      <Button color={PaletteColors.collageCitron}>collageCitron</Button>
      <Button color={PaletteColors.audienceMulticulturalYellow}>
        audienceMulticulturalYellow
      </Button>
      <Button color={PaletteColors.audienceGenerationsOrange}>
        audienceGenerationsOrange
      </Button>
      <Button color={PaletteColors.audienceLgtbqPurple}>
        audienceLgtbqPurple
      </Button>
      <Button color={PaletteColors.collageTeal}>collageTeal</Button>
      <Button color={PaletteColors.audienceParentsAndKidsGreen}>
        audienceParentsAndKidsGreen
      </Button>
      <Button color={PaletteColors.audienceKidsGreen}>audiencekidsGreen</Button>
    </Box>
  );
};

export const WithIconStart: StoryFn<typeof Button> = (args) => (
  <Button startIcon={<Plus size={18} />} {...args}>
    Button
  </Button>
);

WithIconStart.args = {
  variant: 'primary',
  color: PaletteColors.collageRaspberry,
};

export const WithIconEnd: StoryFn<typeof Button> = (args) => (
  <Button endIcon={<TrashSimple size={20} />} {...args}>
    Button
  </Button>
);

WithIconEnd.args = {
  variant: 'primary',
  color: PaletteColors.collageRaspberry,
};
