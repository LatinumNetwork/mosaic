import { StoryFn } from '@storybook/react';
import { StreamlineIcons } from 'src/typings';

import { StreamlineIcon, StreamlineIconProps } from './StreamlineIcon';

const argTypes = {
  name: {
    control: { type: 'radio' },
    options: ['lightbulb', 'performance_increase', 'like', 'shopping_basket'],
  },
};

export default {
  title: 'Atoms/StreamlineIcon',
  component: StreamlineIcon,
  argTypes,
  parameters: {
    controls: { include: Object.keys(argTypes) },
  },
};

const Template: StoryFn<typeof StreamlineIcon> = ({
  ...args
}: StreamlineIconProps): React.JSX.Element => <StreamlineIcon {...args} />;

export const Lightbulb = Template.bind({});
Lightbulb.args = { name: StreamlineIcons.Lightbulb };

export const PerformanceIncrease = Template.bind({});
PerformanceIncrease.args = { name: StreamlineIcons.PerformanceIncrease };

export const Like = Template.bind({});
Like.args = { name: StreamlineIcons.Like };

export const ShoppingBasket = Template.bind({});
ShoppingBasket.args = { name: StreamlineIcons.ShoppingBasket };
