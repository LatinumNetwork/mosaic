import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from '@mui/material/Link';
import { Meta, StoryFn } from '@storybook/react';
import { Box, Breadcrumbs, BreadcrumbsProps, Button } from 'src/components';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
} as Meta;

const Template: StoryFn<BreadcrumbsProps> = (args) => <Breadcrumbs {...args} />;
const ArrowSeparator = () => (
  <NavigateNextIcon fontSize="small" color="action" />
);

export const Basic = Template.bind({});
Basic.args = {
  separator: <ArrowSeparator />,
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
    <Box key="box" display="flex" alignItems="center" gap={1}>
      <HomeIcon fontSize="small" />
      Menu Item
    </Box>,
    <Button key="7" variant="link">
      Item
    </Button>,
    <Button key="8" variant="link">
      Item 2
    </Button>,
  ],
};

export const WithIButtons = Template.bind({});
WithIButtons.args = {
  separator: false,
  children: [
    <Button key="11" variant="text">
      Menu Item
    </Button>,
    <Button key="12" variant="primary">
      Item
    </Button>,
    <Button key="13" variant="secondary">
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
    <Link key="30" color="textSecondary" href="/item2">
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
