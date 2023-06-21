import { ComponentStory, StoryObj, Meta } from '@storybook/react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

import { PaletteColors } from 'src/types';
import Box from 'atoms/Box';

import Button from './Button';

const argTypes = {
    variant: {
        control: { type: 'select' },
        options: [
            'primary',
            'secondary',
            'tertiary',
            'link',
            'nav',
            'outlined',
            'text',
            'contained',
        ],
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

const meta: Meta<typeof Button> = {
    title: 'Atoms/Button',
    component: Button,
    argTypes,
    parameters: {
        controls: { include: Object.keys(argTypes) },
    },
};

export default meta;

const Template: ComponentStory<typeof Button> = ({
    children,
    ...args
}): JSX.Element => <Button {...args} children={children} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary',
    children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
    children: 'Secondary Button',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    variant: 'tertiary',
    children: 'Tertiary Button',
};

export const Text = Template.bind({});
Text.args = {
    variant: 'text',
    children: 'Text Button',
};

export const Link = Template.bind({});
Link.args = {
    variant: 'link',
    children: 'Link Button',
};

export const Nav = Template.bind({});
Nav.args = {
    variant: 'nav',
    children: 'Nav Button',
};

export const Disabled: StoryObj<typeof React.ReactNode> = () => {
    return (
        <Box display="flex" justifyContent="space-around">
            <Button variant="primary" disabled>
                Button
            </Button>
            <Button variant="secondary" disabled>
                Button
            </Button>
            <Button variant="tertiary" disabled>
                Button
            </Button>
        </Box>
    );
};

export const Colors: StoryObj<typeof React.ReactNode> = () => {
    return (
        <Box display="flex" justifyContent="space-around">
            <Button color="uiGray">uiGray</Button>
            <Button color="collageViolet">collageViolet</Button>
            <Button color="collageOrange">collageOrange</Button>
            <Button color="collageTeal">collageTeal</Button>
            <Button color="collageYellow">collageYellow</Button>
        </Box>
    );
};

export const WithIconStart: ComponentStory<typeof Button> = (args) => (
    <Button startIcon={<AddIcon />} {...args}>
        Button
    </Button>
);

WithIconStart.args = {
    variant: 'primary',
    color: PaletteColors.collageRed,
};

export const WithIconEnd: ComponentStory<typeof Button> = (args) => (
    <Button endIcon={<DeleteIcon />} {...args}>
        Button
    </Button>
);

WithIconEnd.args = {
    variant: 'primary',
    color: PaletteColors.collageRed,
};
