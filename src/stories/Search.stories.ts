import type { Meta, StoryObj } from '@storybook/react';
import Search from '../components/Search';

const meta = {
  title: 'Example/Search',
  component: Search,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Placeholder: Story = {
  args: {
    placeholder: 'search country',
    onChange: () => {},
    id: 'search-input',
  },
};