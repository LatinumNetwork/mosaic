import { Question } from '@phosphor-icons/react';
import { Meta, StoryFn } from '@storybook/react';
import { BaseCard, Box } from 'src/components';

const meta: Meta<typeof BaseCard> = {
  title: 'Components/BaseCard',
  component: BaseCard,
};

export default meta;

const DefaultTemplate: StoryFn<typeof BaseCard> = (args) => (
  <BaseCard {...args}>
    <BaseCard.Header
      title="Brand Awareness"
      description="Percentege of consumers aware of your brand."
    />
  </BaseCard>
);

export const Default = DefaultTemplate.bind({});

const HeaderBodyTemplate: StoryFn<typeof BaseCard> = (args) => (
  <BaseCard {...args}>
    <BaseCard.Header
      title="Brand Awareness"
      description="Percentege of consumers aware of your brand."
      actions={
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Question size={24} />
        </Box>
      }
    />
    <BaseCard.Body>Main content goes here.</BaseCard.Body>
  </BaseCard>
);

export const WithHeaderAndIcon = HeaderBodyTemplate.bind({});

const CustomStyledTemplate: StoryFn<typeof BaseCard> = (args) => (
  <BaseCard {...args}>
    <BaseCard.Header
      title="Brand Awareness"
      description="Percentege of consumers aware of your brand."
    />
  </BaseCard>
);

export const CustomStyled = CustomStyledTemplate.bind({});
