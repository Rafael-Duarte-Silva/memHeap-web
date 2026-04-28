import { ElementType, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { PolymorphicProps } from "../types";

const button = tv({
  base: "font-sans inline-flex items-center justify-center rounded-lg border transition",
  variants: {
    variant: {
      primary: "bg-neutral-900 border-neutral-800 hover:border-green-400",
      ghost: "border-transparent hover:text-green-400",
    },
    size: {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

type ButtonProps<T extends ElementType> = PolymorphicProps<
  T,
  VariantProps<typeof button> & {
    children?: ReactNode;
  }
>;

export const Button = <T extends ElementType = "button">({
  as,
  className,
  children,
  variant,
  size,
  disabled,
  ...props
}: ButtonProps<T>) => {
  const Component = as || "button";

  return (
    <Component
      className={button({
        variant,
        size,
        className,
      })}
      disabled={disabled}
      {...props}
    >
      {children}
    </Component>
  );
};
