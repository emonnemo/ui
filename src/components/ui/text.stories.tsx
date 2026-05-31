import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./text";

const meta = {
  title: "UI/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "p", "lead", "large", "small", "muted", "code"],
    },
  },
  args: {
    children: "Build polished interfaces with a small, focused UI kit.",
    variant: "p",
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Headings: Story = {
  render: () => (
    <div className="grid max-w-3xl gap-4">
      <Text variant="h1">Heading one</Text>
      <Text variant="h2">Heading two</Text>
      <Text variant="h3">Heading three</Text>
      <Text variant="h4">Heading four</Text>
    </div>
  ),
};

export const BodyStyles: Story = {
  render: () => (
    <div className="grid max-w-2xl gap-3">
      <Text variant="lead">Lead text sets the tone for a section.</Text>
      <Text>
        Paragraph text keeps the rhythm comfortable for product copy and content.
      </Text>
      <Text variant="large">Large text works for compact emphasis.</Text>
      <Text variant="small">Small text fits dense interface labels.</Text>
      <Text variant="muted">Muted text is useful for secondary details.</Text>
      <Text variant="code">npm run storybook</Text>
    </div>
  ),
};
