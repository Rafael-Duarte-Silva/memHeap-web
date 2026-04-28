import { ElementType, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { PolymorphicProps } from "../types";

const badge = tv({
    base: "font-sans rounded-full border",
    variants: {
        variant: {
            default: "bg-neutral-900 border-neutral-800 hover:border-green-400",
        },
        size: {
            sm: "px-3 py-1 text-xs",
            md: "px-4 py-2 text-sm",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "md",
    },
});

type BadgeProps<T extends ElementType> = PolymorphicProps<
    T,
    VariantProps<typeof badge> & {
        children?: ReactNode;
    }
>;

export const Badge = <T extends ElementType = "div">({
    as,
    className,
    children,
    variant,
    size,
    disabled,
    ...props
}: BadgeProps<T>) => {
    const Component = as || "div";

    return (
        <Component
            className={badge({
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
