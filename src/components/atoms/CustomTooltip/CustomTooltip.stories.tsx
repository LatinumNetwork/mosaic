import { Box, Button } from '@mui/material';
import { ArgTypes, Meta, StoryObj } from '@storybook/react';

import { CustomTooltip } from './CustomTooltip';
import type { CustomTooltipProps } from './CustomTooltip';

const argTypes: Partial<ArgTypes<CustomTooltipProps>> = {
  arrow: { control: 'boolean' },
  title: { control: 'text' },
  placement: {
    control: 'select',
    options: [
      'bottom-end',
      'bottom-start',
      'bottom',
      'left-end',
      'left-start',
      'left',
      'right-end',
      'right-start',
      'right',
      'top-end',
      'top-start',
      'top',
    ],
  },
};

const meta: Meta<typeof CustomTooltip> = {
  title: 'Atoms/Custom Tooltip',
  component: CustomTooltip,
  argTypes,
  parameters: {
    controls: { include: Object.keys(argTypes) },
  },
};

export default meta;

type Story = StoryObj<typeof CustomTooltip>;

export const Default: Story = {
  args: { title: 'This is a custom tooltip' },
  render: (args) => {
    console.log(args);
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
        <CustomTooltip {...args}>
          <Button variant="outlined">Hover me</Button>
        </CustomTooltip>
      </Box>
    );
  },
};
