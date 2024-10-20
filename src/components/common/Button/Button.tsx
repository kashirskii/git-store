import "./Button.scss";
import { block } from "@/helpers/cn";

export type ButtonSize = "s" | "m" | "l";
export type ButtonWidth = "auto" | "max"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  view?: "contained" | "outlined";
  size?: ButtonSize;
  width?: ButtonWidth
}

const b = block("button");

const Button = ({ children, view = "contained", size = "m", width = "auto", ...props }: ButtonProps) => {
  return (
    <button {...props} className={b({ view, size, width })}>
      <span>{children}</span>
    </button>
  );
};

export { Button };
