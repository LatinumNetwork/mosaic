import { Box } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';

import { GraphTooltip, GraphTooltipProps } from './GraphTooltip';

const meta: Meta<typeof GraphTooltip> = {
  title: 'Molecules/GraphTooltip',
  component: GraphTooltip,
  argTypes: {
    arrowPosition: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    position: {
      control: 'select',
      options: [
        'top-start',
        'top',
        'top-end',
        'right',
        'bottom-end',
        'bottom',
        'bottom-start',
        'left',
      ],
    },
    top: { control: 'number' },
    left: { control: 'number' },
    disablePortal: { control: 'boolean' },
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
      <GraphTooltip {...args} />
    </Box>
  ),
};

export const Default: Story = {
  args: {
    ...sharedArgs,
    position: 'top-start',
  },
  ...sharedRender,
};

export const PortalDisabled: Story = {
  args: {
    ...sharedArgs,
    disablePortal: true,
    top: 20,
    left: 20,
  },
  ...sharedRender,
};

export const WithUnitMeasurement: Story = {
  args: {
    ...sharedArgs,
    top: 10,
    left: 20,
    disablePortal: true,
    valueAdornments: { suffix: '%' },
    rows: [
      { label: 'Population', value: '45' },
      { label: 'Growth', value: '3.2' },
    ],
  },
  ...sharedRender,
};

export const WithBoundaryCollision: Story = {
  args: {
    open: true,
    rows: [
      { label: 'Position', value: 'top-end' },
      { label: 'Position', value: 'Right' },
      { label: 'Position', value: 'bottom-end' },
      { label: 'Will react to screen overflow' },
    ],
    position: 'bottom-end',
    arrowPosition: 'left',
  },
  render: (args: GraphTooltipProps) => {
    function GraphTooltipWithBoundaryCollision(props: typeof args) {
      return (
        <Box
          sx={{
            position: 'relative',
            top: 0,
            left: 0,
            border: '1px solid black',
            width: '100%',
            height: '300px',
          }}
        >
          <GraphTooltip
            {...props}
            top={80}
            left={document.body.offsetWidth - 40}
          />
        </Box>
      );
    }
    return <GraphTooltipWithBoundaryCollision {...args} />;
  },
};
