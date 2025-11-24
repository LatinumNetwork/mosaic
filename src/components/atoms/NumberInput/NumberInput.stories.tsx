import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { NumberInput } from './NumberInput';

const meta: Meta<typeof NumberInput> = {
  title: 'Atoms/Number Input',
  component: NumberInput,
  argTypes: {
    value: {
      control: 'number',
      description: 'The current value of the input.',
    },
    setValue: {
      action: 'setValue',
      description: 'Callback fired when the value changes.',
    },
    min: { control: 'number', description: 'The minimum value allowed.' },
    max: { control: 'number', description: 'The maximum value allowed.' },
  },
};

export default meta;

type Story = StoryObj<typeof NumberInput>;

export const Primary: Story = {
  args: {
    max: 100,
    min: 0,
    value: 10,
  },
  render: (args) => {
    function NumberInputWithState(props: typeof args) {
      const [value, setValue] = useState(props.value);
      return <NumberInput {...props} value={value} setValue={setValue} />;
    }
    return <NumberInputWithState {...args} />;
  },
};
