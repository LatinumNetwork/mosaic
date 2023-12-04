import { Question } from '@phosphor-icons/react';
import { Meta, StoryFn } from '@storybook/react';
import { BaseCard, Box, CardHeader } from 'src/components';

const meta: Meta<typeof CardHeader> = {
  title: 'Atoms/CardHeader',
  component: CardHeader,
};

export default meta;

const Template: StoryFn<typeof CardHeader> = (args) => (
  <BaseCard>
    <CardHeader {...args} />
  </BaseCard>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Title',
  description: 'Description content goes here.',
};

export const WithAdditionalContent = Template.bind({});
WithAdditionalContent.args = {
  title: 'Brand Awareness',
  description: 'Percentege of consumers aware of your brand.',
  children: (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
      }}
    >
      <Question size={32} />
    </Box>
  ),
};
