import { CheckboxProps } from '@mui/material';
import { ArgTypes, Meta, StoryObj } from '@storybook/react';

import { CustomCheckbox } from './CustomCheckbox';

const argTypes: Partial<ArgTypes<CheckboxProps>> = {
  checked: {
    control: 'boolean',
    description: 'Whether the checkbox is checked.',
  },
  indeterminate: {
    control: 'boolean',
    description: 'Whether the checkbox is in an indeterminate state.',
  },
};

const meta: Meta<typeof CustomCheckbox> = {
  title: 'Atoms/Custom Checkbox',
  component: CustomCheckbox,
  argTypes,
  parameters: {
    controls: { include: Object.keys(argTypes) },
  },
};

export default meta;

type Story = StoryObj<typeof CustomCheckbox>;

export const Primary: Story = {
  render: (args) => {
    function CustomCheckboxWithState(props: typeof args) {
      return <CustomCheckbox {...props} />;
    }
    return <CustomCheckboxWithState {...args} />;
  },
};
