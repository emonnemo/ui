import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./input";
import { Label } from "./label";

const meta = {
  title: "UI/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    tone: {
      control: "select",
      options: ["default", "muted"],
    },
  },
  args: {
    children: "Label",
    tone: "default",
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Muted: Story = {
  args: {
    tone: "muted",
    children: "Muted label",
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="grid w-80 gap-2">
      <Label htmlFor="username">Username</Label>
      <Input id="username" placeholder="@emonnemo" />
    </div>
  ),
};
