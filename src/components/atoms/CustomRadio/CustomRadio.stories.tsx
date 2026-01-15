import { RadioProps } from '@mui/material';
import { ArgTypes, Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { CustomRadio } from './CustomRadio';

const argTypes: Partial<ArgTypes<RadioProps>> = {};

const meta: Meta<typeof CustomRadio> = {
  title: 'Atoms/Custom Radio',
  component: CustomRadio,
  argTypes,
  parameters: {
    controls: { include: Object.keys(argTypes) },
  },
};

export default meta;

type Story = StoryObj<typeof CustomRadio>;

export const Default: Story = {};
