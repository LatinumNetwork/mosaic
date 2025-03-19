import { Box } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';
import { GraphTooltip, GraphTooltipProps } from 'src/components';

const meta: Meta<typeof GraphTooltip> = {
  title: 'Molecules/GraphTooltip',
  component: GraphTooltip,
  argTypes: {
    arrowPosition: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    xPosition: {
      control: 'select',
      options: ['left', 'right', 'center'],
    },
    yPosition: {
      control: 'select',
      options: ['top', 'bottom', 'center'],
    },
    top: { control: 'number' },
    left: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<typeof GraphTooltip>;

const sharedArgs: Partial<GraphTooltipProps> = {
  open: true,
  top: 100,
  left: 150,
  arrowPosition: 'bottom',
  rows: [
    { label: 'Chips and/or Crackers' },
    { label: 'Population', value: 'High' },
    { label: 'Growth', value: 'Low' },
  ],
};

const sharedRender = {
  render: (args: GraphTooltipProps) => (
    <Box
      sx={{
        position: 'relative',
        top: 0,
        left: 0,
        width: '100%',
        height: '100px',
      }}
    >
      <GraphTooltip {...args} sx={{ position: 'fixed', maxWidth: 200 }} />
    </Box>
  ),
};

export const Default: Story = {
  args: {
    ...sharedArgs,
  },
  ...sharedRender,
};

export const WithUnitMeasurement: Story = {
  args: {
    ...sharedArgs,
    unitMeasurement: '%',
    rows: [
      { label: 'Population', value: '45' },
      { label: 'Growth', value: '3.2' },
    ],
  },
  ...sharedRender,
};

export const CustomPosition: Story = {
  args: {
    ...sharedArgs,
    top: 50,
    left: 90,
    arrowPosition: 'top',
    xPosition: 'center',
    yPosition: 'top',
  },
  ...sharedRender,
};
