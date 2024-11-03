import { Button } from "./Button";

import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: { onClick: fn() },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Сontained: Story = {
  args: {
    children: "Button",
    view: "contained",
  },
};

export const Outlined: Story = {
  args: {
    children: "Button",
    view: "outlined",
  },
};

