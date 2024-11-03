import { useEffect, useState } from "react";

import { SelectColor } from "./SelectColor";

import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SelectColor> = {
  title: "UI/SelectColor",
  component: SelectColor,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof SelectColor>;

export const SelectColorTemplate: Story = {
  render: (args) => {
    useEffect(() => {
      setCurrentIndex(args.currentIndex);
    }, [args.currentIndex]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    return (
      <SelectColor
        options={args.options}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    );
  },
  args: {
    options: [
      { color: "black", HEX: "#000" },
      { color: "white", HEX: "#FFF" },
      { color: "red", HEX: "#F00" },
    ],
    currentIndex: 0,
  },
};
