import type { Meta, StoryObj } from '@storybook/vue3-vite';

import Typography from '../components/Typography.vue';

const meta = {
  title: 'Example/Typography',
  component: Typography,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    as: { control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'] },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 */
export const HeaderOne: Story = {
  args: {
    as: 'h1',
    default: 'Sound Matters',
  },
};

export const HeaderTwo: Story = {
  args: {
    as: 'h2',
    default: 'This is the default value',
  },
};

export const HeaderThree: Story = {
  args: {
    as: 'h3',
    default: 'This is the default value',
  },
};

export const HeaderFour: Story = {
  args: {
    as: 'h4',
    default: 'This is the default value',
  },
};

export const HeaderFive: Story = {
  args: {
    as: 'h5',
    default: 'This is the default value',
  },
};

export const HeaderSix: Story = {
  args: {
    as: 'h6',
    default: 'This is the default value',
  },
};

export const Paragraph: Story = {
  args: {
    as: 'p',
    default: 'This is the default value',
  },
};

export const Span: Story = {
  args: {
    as: 'span',
    default: 'This is the default value',
  },
};


