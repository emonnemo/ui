import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./progress";

const meta = {
  title: "UI/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
    },
    variant: {
      control: "select",
      options: ["default", "success", "warning", "danger"],
    },
  },
  args: {
    value: 60,
    size: "default",
    variant: "default",
    className: "w-60",
  },
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-60">
      <Progress value={45} size="sm" />
      <Progress value={60} size="default" />
      <Progress value={80} size="lg" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-60">
      <Progress value={78} variant="default" />
      <Progress value={95} variant="success" />
      <Progress value={60} variant="warning" />
      <Progress value={30} variant="danger" />
    </div>
  ),
};

export const CustomWidth: Story = {
  args: {
    value: 42,
    className: "w-80",
  },
};
