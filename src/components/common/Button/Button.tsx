"use client";

import "./Button.scss";
import { block } from "@/helpers/cn";

export type ButtonSize = "s" | "m" | "l";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
  view?: "contained" | "outlined";
  size?: ButtonSize;
}

const b = block("button");

const Button = ({ children, view = "contained", size = "m", ...props }: ButtonProps) => {
  return (
    <button {...props} className={b({ view, size })}>
      <span>{children}</span>
    </button>
  );
};

export { Button };
