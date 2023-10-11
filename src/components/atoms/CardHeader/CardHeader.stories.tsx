import { Meta, StoryFn } from '@storybook/react';

import { CardHeader, CardHeaderProps } from './CardHeader';

export default {
  title: 'Components/CardHeader',
  component: CardHeader,
} as Meta;

const Template: StoryFn<CardHeaderProps> = (args) => <CardHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Default CardHeader',
  subheader: 'Subheader text',
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  title: 'CardHeader with Avatar',
  subheader: 'Subheader text',
  avatar: false,
};
