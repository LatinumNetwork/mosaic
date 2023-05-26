import { ComponentStory } from '@storybook/react';

import { Button, ButtonProps } from './Button';
const argTypes = {
    variant: {
        control: { type: 'select' },
        options: ['primary', 'secondary', 'tertiary', 'link', 'nav', 'outlined', 'text', 'contained'],
        table: {
            defaultValue: {
                summary: 'primary',
            },
        },
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      table: {
          defaultValue: {
              summary: 'small',
          },
      },
  },
};

export default {
    title: 'Atoms/Button',
    component: Button,
    argTypes,
    parameters: {
      controls: { include: Object.keys(argTypes) }
    }
} as ComponentStory<typeof ButtonProps>;

const Template: ComponentStory<typeof Button> = (
    args: ButtonProps
): JSX.Element => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Stufff',
    variant: 'outlined',
};
