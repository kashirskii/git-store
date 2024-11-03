import { Typography } from "./Typography";
import type { TypographyProps, TypographyTag } from "./Typography";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Typography> = {
  title: "UI/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

const TypographiesProps: TypographyProps<TypographyTag>[] = [
  {
    children: "title-1",
    variant: "title-1",
  },
  {
    children: "title-2",
    variant: "title-2",
  },
  {
    children: "sub-title",
    variant: "sub-title",
  },
  {
    children: "body-1",
    variant: "body-1",
  },
  {
    children: "body-2",
    variant: "body-2",
  },
];

export const TypographyTemplate: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non blandit justo, in mollis metus.",
  },
};

export const AllTypographies = () => {
  return (
    <>
      {TypographiesProps.map((typography) => (
        <Typography key={typography.variant} {...typography} />
      ))}
    </>
  );
};
