import { Meta, StoryObj } from '@storybook/react';
import { GenericModal } from 'src/components';
declare const meta: Meta<typeof GenericModal>;
export default meta;
type Story = StoryObj<typeof GenericModal>;
export declare const Default: Story;
export declare const WithTagAndIcon: Story;
export declare const WithLeftPaneIcon: Story;
