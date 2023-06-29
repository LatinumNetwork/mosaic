import { ComponentStory } from '@storybook/react';
import Typography, { TypographyProps } from './Typography';

const argTypes = {
    weight: {
        defaultValue: 'regular',
        control: { type: 'radio' },
    },
    children: {
        defaultValue: 'Hello world!',
        control: {
            type: 'text',
        },
    },
};

export default {
    title: 'Atoms/Typography',
    component: Typography,
    argTypes,
    parameters: {
        controls: { include: Object.keys(argTypes) },
    },
};

const Template: ComponentStory<typeof Typography> = ({
    children,
    ...args
}: TypographyProps): JSX.Element => (
    <Typography {...args}> {children} </Typography>
);

export const Default = Template.bind({});
Default.args = {
    children: 'Default',
};

export const Header = Template.bind({});
Header.args = {
    children: 'Heading',
    variant: 'h1',
    weight: 'semiBold',
};

export const Body = Template.bind({});
Body.args = {
    children: 'Body',
    variant: 'h1',
};
