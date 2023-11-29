import Link from '@mui/material/Link';
import { House } from '@phosphor-icons/react';
import { Meta, StoryFn } from '@storybook/react';
import { Box, Breadcrumbs, Button } from 'src/components';

const argTypes = {
  maxItems: {
    control: { type: 'number' },
    description: 'Maximum number of breadcrumbs to display.',
    table: {
      defaultValue: {
        summary: '8',
      },
    },
  },
  separator: {
    control: { type: 'text' },
    description: 'The string or node used to separate the breadcrumbs.',
    table: {
      defaultValue: {
        summary: '>',
      },
    },
  },
};

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  argTypes,
  parameters: {
    controls: { include: Object.keys(argTypes) },
  },
} as Meta;

const Template: StoryFn<typeof Breadcrumbs> = ({ children, ...args }) => (
  <Breadcrumbs {...args}>{children}</Breadcrumbs>
);

export const Basic = Template.bind({});
Basic.args = {
  children: [
    <Button key="1" variant="text">
      Menu Item
    </Button>,
    <Button key="2" variant="text">
      Item
    </Button>,
    <Button key="3" variant="text">
      Item 2
    </Button>,
  ],
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  children: [
    <Box key="box" display="flex" alignItems="center" gap={0.5}>
      <House size="18" />
      Menu Item
    </Box>,
    <Button key="7" variant="text">
      Item
    </Button>,
    <Button key="8" variant="text">
      Item 2
    </Button>,
  ],
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  children: [
    <Link key="10" color="textSecondary" href="/">
      Menu Item
    </Link>,
    <Link key="20" color="textPrimary" href="/item">
      Item
    </Link>,
    <Link key="30" color="primary" href="/item2">
      Item 2
    </Link>,
  ],
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  maxItems: 2,
  children: [
    <Link key="a" color="inherit" href="/">
      Menu Item
    </Link>,
    <Link key="b" color="inherit" href="/item1">
      Item 1
    </Link>,
    <Link key="c" color="inherit" href="/item2">
      Item 2
    </Link>,
    <Link key="d" color="inherit" href="/item3">
      Item 3
    </Link>,
    <Link key="e" color="inherit" href="/item4">
      Item 4
    </Link>,
  ],
};
