import { Box } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { RangeSlider } from './RangeSlider';

const meta: Meta<typeof RangeSlider> = {
  title: 'Molecules/Range Slider',
  component: RangeSlider,
  argTypes: {
    min: {
      control: 'number',
      description: 'The minimum value of the range slider.',
    },
    max: {
      control: 'number',
      description: 'The maximum value of the range slider.',
    },
    values: {
      control: 'object',
      description:
        'Two position array representing the selected min and max values.',
    },
    setValues: {
      action: 'setValues',
      description: 'Callback fired when the values change.',
    },
    showNumberInputs: {
      control: 'boolean',
      description: 'Whether to show number inputs for precise value entry.',
    },
  },
  args: {
    min: 0,
    max: 10,
    showNumberInputs: true,
  },
};

export default meta;

type Story = StoryObj<typeof RangeSlider>;

export const Primary: Story = {
  render: (args) => {
    function RangeSliderWithState(props: typeof args) {
      const [values, setValues] = useState<[number, number]>([2, 6]);

      return <RangeSlider {...props} values={values} setValues={setValues} />;
    }
    return (
      <Box sx={{ marginTop: '40px' }}>
        <RangeSliderWithState {...args} />
      </Box>
    );
  },
};
