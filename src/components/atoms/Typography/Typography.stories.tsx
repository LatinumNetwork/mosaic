import { ComponentStory } from '@storybook/react';
import Typography from './Typography';

const argTypes = {
    weight: {
        defaultValue: 'regular',
        control: { type: 'radio' },
    },
    text: {
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
        controls: { sort: 'requiredFirst' },
        include: ['foo', 'bar'],
    },
} as ComponentStory<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (
    args: TypographyProps
): JSX.Element => <Typography {...args}> {args.text} </Typography>;

export const Default = Template.bind({});
Default.args = {
    text: 'Default',
};

export const Header = Template.bind({});
Header.args = {
    text: 'Heading',
    variant: 'h1',
    weight: 'semiBold',
};

export const Body = Template.bind({});
Body.args = {
    text: 'Body',
    variant: 'b1',
};

export const Test = (args) => (
    <Typography variant={'b1'} {...args}>
        Stuff
    </Typography>
);
