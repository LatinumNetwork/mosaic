import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { SearchBox } from './SearchBox';

const meta: Meta<typeof SearchBox> = {
  title: 'Atoms/SearchBox',
  component: SearchBox,
};

export default meta;

type Story = StoryObj<typeof SearchBox>;

export const Default: Story = {
  args: {
    placeholder: 'Search...',
    value: '',
  },
  argTypes: {
    iconSize: {
      control: {
        type: 'number',
      },
    },
    iconColor: {
      control: {
        type: 'text',
      },
    },
  },
  render: (args) => {
    function SearchBoxWithState(props: typeof args) {
      const [value, setValue] = useState(props.value);
      return <SearchBox {...args} value={value} onChange={setValue} />;
    }
    return <SearchBoxWithState {...args} />;
  },
};
