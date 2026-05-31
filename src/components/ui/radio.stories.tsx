import type { Meta, StoryObj } from "@storybook/react";

import { Radio, RadioField, RadioGroup } from "./radio";

const meta = {
  title: "UI/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Single: Story = {
  args: {
    name: "single-radio",
    "aria-label": "Single radio",
  },
};

export const Group: Story = {
  render: () => (
    <RadioGroup className="w-80">
      <RadioField
        name="notification"
        value="all"
        defaultChecked
        label="All notifications"
        description="Receive product, account, and billing messages."
      />
      <RadioField
        name="notification"
        value="mentions"
        label="Mentions only"
        description="Only receive messages where someone tags you."
      />
      <RadioField
        name="notification"
        value="none"
        label="No notifications"
        description="Mute everything except critical account alerts."
      />
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup className="w-80">
      <RadioField
        name="disabled-radio"
        value="available"
        label="Available option"
        description="This option can be selected."
      />
      <RadioField
        name="disabled-radio"
        value="disabled"
        disabled
        label="Disabled option"
        description="This option is intentionally unavailable."
      />
    </RadioGroup>
  ),
};
