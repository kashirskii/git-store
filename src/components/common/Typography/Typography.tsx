import './Typography.scss'
import { block } from "@/helpers/cn";

export type TypographyTag = "h1" | "h2" | "h3" | "h4" | "span" | "p" | "div";
export type TypographyVariant = "title-1" | "title-2" | "body-1" | "body-2";

export type TypographyProps<Tag extends TypographyTag> = {
  children: React.ReactNode;
  tag?: TypographyTag;
  variant: TypographyVariant;
} & React.ComponentProps<Exclude<Tag, "span">>;

const b = block("typography");

const Typography = <T extends TypographyTag>({
  children,
  variant,
  tag: Tag = "div",
  ...props
}: TypographyProps<T>) => {
  return <Tag {...props} className={b({variant})}>{children}</Tag>;
};

export { Typography };
