import { MenuItem } from '@mui/material';
import { ArgTypes, Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { CustomSelect } from './CustomSelect';
import type { CustomSelectProps } from './CustomSelect';

const argTypes: Partial<ArgTypes<CustomSelectProps>> = {};

const meta: Meta<typeof CustomSelect> = {
  title: 'Atoms/Custom Select',
  component: CustomSelect,
  argTypes,
  parameters: {
    controls: { include: Object.keys(argTypes) },
  },
};

export default meta;

type Story = StoryObj<typeof CustomSelect>;

export const Primary: Story = {
  render: (args) => {
    function CustomSelectWithState(props: typeof args) {
      const [value, setValue] = useState<number>(10);

      return (
        <CustomSelect
          {...props}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        >
          <MenuItem selected value={10}>
            Option 1
          </MenuItem>
          <MenuItem value={20}>Option 2</MenuItem>
          <MenuItem value={30}>Option 3</MenuItem>
        </CustomSelect>
      );
    }
    return <CustomSelectWithState {...args} />;
  },
};
